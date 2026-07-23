/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useMemo, useRef, useState } from "react";

/**
 * Components
 */
import Container from "../ui/Container";
import { FieldLabel, fieldClass } from "./FormField";

/**
 * Utils
 */
import { useTranslation } from "react-i18next";
import {
    ADDRESS_SEARCH_DEBOUNCE_MS,
    ADDRESS_SEARCH_MIN_LENGTH,
    PHOTON_API_URL,
    buildCountryOptions,
    formatAddressLines,
    formatPostalCodeInput,
    getProvinceOptions,
    mapPhotonFeatureToAddress,
    normalizeProvinceValue,
} from "./requestConfig";

const AddressSection = ({ fields, errors, expanded, onFieldChange, onToggleExpand }) => {
    const { t, i18n } = useTranslation();
    const countryOptions = useMemo(() => buildCountryOptions(i18n.language), [i18n.language]);
    const provinceOptions = useMemo(() => getProvinceOptions(fields.country, i18n.language), [fields.country, i18n.language]);
    const summaryLines = formatAddressLines(fields, i18n.language);

    const [suggestions, setSuggestions] = useState([]);
    const [suggestionsOpen, setSuggestionsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    const debounceRef = useRef(null);
    const abortRef = useRef(null);
    const cacheRef = useRef(new Map());

    const closeSuggestions = () => {
        setSuggestionsOpen(false);
        setActiveIndex(-1);
    };

    const searchAddress = (query, countryCode) => {
        const cacheKey = countryCode + ":" + query.toLowerCase();
        const cached = cacheRef.current.get(cacheKey);
        if (cached) {
            setSuggestions(cached);
            setSuggestionsOpen(cached.length > 0);
            return;
        }

        abortRef.current?.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        fetch(`${PHOTON_API_URL}?q=${encodeURIComponent(query)}&limit=8&lang=${i18n.language}`, { signal: controller.signal })
            .then((response) => response.json())
            .then((data) => {
                const candidates = (data.features || [])
                    .map(mapPhotonFeatureToAddress)
                    .filter((address) => address.countryCode === countryCode && address.address1);

                const unique = candidates
                    .filter((address, index) => candidates.findIndex((other) =>
                        other.address1 === address.address1 && other.city === address.city && other.postalCode === address.postalCode
                    ) === index)
                    .slice(0, 5);

                cacheRef.current.set(cacheKey, unique);
                setSuggestions(unique);
                setSuggestionsOpen(unique.length > 0);
            })
            .catch((error) => {
                if (error.name !== "AbortError") {
                    setSuggestions([]);
                    setSuggestionsOpen(false);
                }
            });
    };

    const handleAddress1Change = (value) => {
        onFieldChange("address1", value);
        setActiveIndex(-1);
        clearTimeout(debounceRef.current);

        const trimmed = value.trim();
        if (trimmed.length < ADDRESS_SEARCH_MIN_LENGTH) {
            setSuggestions([]);
            setSuggestionsOpen(false);
            return;
        }

        const countryCode = fields.country;
        debounceRef.current = setTimeout(() => searchAddress(trimmed, countryCode), ADDRESS_SEARCH_DEBOUNCE_MS);
    };

    const applySuggestion = (suggestion) => {
        onFieldChange("address1", suggestion.address1);
        onFieldChange("city", suggestion.city);
        onFieldChange("province", provinceOptions ? normalizeProvinceValue(suggestion.province, fields.country) : "");
        onFieldChange("postalCode", formatPostalCodeInput(suggestion.postalCode, fields.country));
        closeSuggestions();
    };

    const handleAddress1KeyDown = (event) => {
        if (!suggestionsOpen) return;

        if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveIndex((prev) => Math.max(prev - 1, 0));
        } else if (event.key === "Enter") {
            if (activeIndex >= 0) {
                event.preventDefault();
                applySuggestion(suggestions[activeIndex]);
            }
        } else if (event.key === "Escape") {
            closeSuggestions();
        }
    };

    const handleCountryChange = (value) => {
        onFieldChange("country", value);
        setSuggestions([]);
        closeSuggestions();

        const newProvinceOptions = getProvinceOptions(value, i18n.language);
        const provinceStillValid = newProvinceOptions?.some((option) => option.code === fields.province) ?? false;
        if (!provinceStillValid) {
            onFieldChange("province", "");
        }
    };

    return (
        <Container
            title={t("requestAddressTitle")}
            collapsible
            expanded={expanded}
            onToggleExpand={onToggleExpand}
            toggleLabel={t(expanded ? "requestContactCollapseLabel" : "requestContactExpandLabel")}
        >
            <div>
                <div className={"grid transition-[grid-template-rows] duration-300 ease-in-out " + (expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div className="md:col-span-2">
                                <FieldLabel required error={errors.country ? "" : null}>{t("requestAddressCountry")}</FieldLabel>
                                <div className="relative">
                                    <select
                                        className={fieldClass(errors.country) + " w-full appearance-none !pr-9"}
                                        value={fields.country}
                                        onChange={(event) => handleCountryChange(event.target.value)}
                                    >
                                        {countryOptions.map((country) => (
                                            <option key={country.code} value={country.code}>{country.name}</option>
                                        ))}
                                    </select>
                                    <span className="material-symbols-rounded absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                        expand_more
                                    </span>
                                </div>
                            </div>

                            <div className="md:col-span-2 relative">
                                <FieldLabel required>{t("requestAddressLine1")}</FieldLabel>
                                <input
                                    type="text"
                                    autoComplete="address-line1"
                                    className={fieldClass(errors.address1)}
                                    value={fields.address1}
                                    onChange={(event) => handleAddress1Change(event.target.value)}
                                    onKeyDown={handleAddress1KeyDown}
                                    onBlur={closeSuggestions}
                                />

                                {suggestionsOpen && (
                                    <div className="absolute left-0 right-0 top-full mt-1.5 bg-zinc-800 ring-1 ring-zinc-50/10 rounded-lg shadow-xl overflow-hidden z-20">
                                        {suggestions.map((suggestion, index) => (
                                            <div
                                                key={index}
                                                className={"px-3.5 py-2.5 cursor-pointer text-sm " + (index === activeIndex ? "bg-sky-400/10" : "hover:bg-zinc-700")}
                                                onMouseDown={(event) => { event.preventDefault(); applySuggestion(suggestion); }}
                                            >
                                                <p className="text-zinc-50">{suggestion.address1}</p>
                                                <p className="text-zinc-400 text-xs">
                                                    {[suggestion.city, suggestion.province, suggestion.postalCode].filter(Boolean).join(", ")}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <a
                                    href="https://www.openstreetmap.org/copyright"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-zinc-500 text-xs mt-1.5 hover:text-zinc-300 underline"
                                >
                                    {t("requestAddressAttribution")}
                                </a>
                            </div>

                            <div className="md:col-span-2">
                                <FieldLabel>{t("requestAddressLine2")}</FieldLabel>
                                <input
                                    type="text"
                                    autoComplete="address-line2"
                                    className={fieldClass(false)}
                                    value={fields.address2}
                                    onChange={(event) => onFieldChange("address2", event.target.value)}
                                />
                            </div>

                            <div className={provinceOptions ? "" : "md:col-span-2"}>
                                <FieldLabel required>{t("requestAddressCity")}</FieldLabel>
                                <input
                                    type="text"
                                    autoComplete="address-level2"
                                    className={fieldClass(errors.city)}
                                    value={fields.city}
                                    onChange={(event) => onFieldChange("city", event.target.value)}
                                />
                            </div>

                            {provinceOptions && (
                                <div>
                                    <FieldLabel required>{t("requestAddressProvince")}</FieldLabel>
                                    <div className="relative">
                                        <select
                                            className={fieldClass(errors.province) + " w-full appearance-none !pr-9"}
                                            autoComplete="address-level1"
                                            value={fields.province}
                                            onChange={(event) => onFieldChange("province", event.target.value)}
                                        >
                                            <option value="" disabled>{t("requestAddressSelectPlaceholder")}</option>
                                            {provinceOptions.map((option) => (
                                                <option key={option.code} value={option.code}>{option.name}</option>
                                            ))}
                                        </select>
                                        <span className="material-symbols-rounded absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                                            expand_more
                                        </span>
                                    </div>
                                </div>
                            )}

                            <div className="md:col-span-2">
                                <FieldLabel required>{t("requestAddressPostalCode")}</FieldLabel>
                                <input
                                    type="text"
                                    autoComplete="postal-code"
                                    className={fieldClass(errors.postalCode)}
                                    value={fields.postalCode}
                                    onChange={(event) => onFieldChange("postalCode", formatPostalCodeInput(event.target.value, fields.country))}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"grid transition-[grid-template-rows] duration-300 ease-in-out " + (expanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]")}>
                    <div className="overflow-hidden">
                        <div className="pt-2 text-zinc-300 space-y-1">
                            {summaryLines.map((line, index) => <p key={index}>{line}</p>)}
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AddressSection;
