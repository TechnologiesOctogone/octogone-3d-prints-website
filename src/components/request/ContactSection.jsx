/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import PhoneInput from "react-phone-number-input/min";
import "react-phone-number-input/style.css";
import "./phoneInput.css";

/**
 * Components
 */
import Container from "../ui/Container";

/**
 * Utils
 */
import { useTranslation } from "react-i18next";
import { DEFAULT_PHONE_COUNTRY, formatPhoneNumber } from "./requestConfig";

const FieldLabel = ({ children, required, error }) => (
    <div className="flex items-center justify-between mb-2">
        <label className="text-zinc-200 text-sm font-semibold">
            {children}
            {required && <span className="text-red-500" aria-hidden="true"> *</span>}
        </label>
        {error && <span className="text-red-400 text-xs font-medium">{error}</span>}
    </div>
);

const fieldClass = (hasError) => "text-field" + (hasError ? " !ring-red-500 !bg-red-500/10" : "");

const ContactSection = ({ fields, errors, expanded, onFieldChange, onToggleExpand }) => {
    const { t } = useTranslation();

    const summaryNameLine = [`${fields.firstName} ${fields.lastName}`.trim(), fields.company].filter(Boolean).join(", ");
    const summaryContactLine = [fields.email, formatPhoneNumber(fields.phone)].filter(Boolean).join(" , ");

    return (
        <Container
            title={t("requestContactTitle")}
            collapsible
            expanded={expanded}
            onToggleExpand={onToggleExpand}
            toggleLabel={t(expanded ? "requestContactCollapseLabel" : "requestContactExpandLabel")}
        >
            <div>
                <div className={"grid transition-[grid-template-rows] duration-300 ease-in-out " + (expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            <div>
                                <FieldLabel required>{t("requestContactLastName")}</FieldLabel>
                                <input
                                    type="text"
                                    autoComplete="family-name"
                                    className={fieldClass(errors.lastName)}
                                    value={fields.lastName}
                                    onChange={(event) => onFieldChange("lastName", event.target.value)}
                                />
                            </div>

                            <div>
                                <FieldLabel required>{t("requestContactFirstName")}</FieldLabel>
                                <input
                                    type="text"
                                    autoComplete="given-name"
                                    className={fieldClass(errors.firstName)}
                                    value={fields.firstName}
                                    onChange={(event) => onFieldChange("firstName", event.target.value)}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <FieldLabel>{t("requestContactCompany")}</FieldLabel>
                                <input
                                    type="text"
                                    autoComplete="organization"
                                    className={fieldClass(false)}
                                    value={fields.company}
                                    onChange={(event) => onFieldChange("company", event.target.value)}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <FieldLabel required error={errors.email ? t("requestContactEmailInvalid") : null}>
                                    {t("requestContactEmail")}
                                </FieldLabel>
                                <input
                                    type="email"
                                    autoComplete="email"
                                    className={fieldClass(errors.email)}
                                    value={fields.email}
                                    onChange={(event) => onFieldChange("email", event.target.value)}
                                />
                            </div>

                            <div className="md:col-span-2">
                                <FieldLabel required>{t("requestContactPhone")}</FieldLabel>
                                <PhoneInput
                                    international
                                    defaultCountry={DEFAULT_PHONE_COUNTRY}
                                    autoComplete="tel"
                                    value={fields.phone}
                                    onChange={(value) => onFieldChange("phone", value || "")}
                                    className={"text-field !p-0 !flex items-stretch focus-within:ring-sky-400 " + (errors.phone ? "!ring-red-500 !bg-red-500/10" : "")}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"grid transition-[grid-template-rows] duration-300 ease-in-out " + (expanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]")}>
                    <div className="overflow-hidden">
                        <div className="pt-2 text-zinc-300 space-y-1">
                            <p>{summaryNameLine}</p>
                            <p>{summaryContactLine}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactSection;
