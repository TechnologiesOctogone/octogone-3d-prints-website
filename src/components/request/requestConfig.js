/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

import { isValidPhoneNumber, parsePhoneNumberFromString, getCountryCallingCode, getCountries } from "libphonenumber-js/min";

export const FILENAME_TRUNCATE_LENGTH = 20;

export const truncateFilename = (name, maxLength = FILENAME_TRUNCATE_LENGTH) =>
    name.length > maxLength ? name.slice(0, maxLength) + "..." : name;

export const MATERIALS = ["PLA", "PETG", "ABS", "TPU"];

export const COLORS = [
    { id: "white", hex: "#FFFFFF", name: "Blanc mat" },
    { id: "black", hex: "#000000", name: "Noir" },
    { id: "red", hex: "#E53935", name: "Rouge" },
    { id: "orange", hex: "#FB8C00", name: "Orange" },
    { id: "yellow", hex: "#FDD835", name: "Jaune" },
    { id: "lime", hex: "#8BC34A", name: "Vert lime" },
    { id: "green", hex: "#2E7D32", name: "Vert" },

    { id: "cyan", hex: "#29B6F6", name: "Cyan" },
    { id: "navy", hex: "#1A237E", name: "Bleu marine" },
    { id: "purple", hex: "#8E24AA", name: "Violet" },
    { id: "magenta", hex: "#EC407A", name: "Magenta" },
    { id: "lavender", hex: "#CE93D8", name: "Lavande" },
    { id: "pale-pink", hex: "#F8BBD0", name: "Rose pâle" },
    { id: "terracotta", hex: "#E59866", name: "Terracotta" },

    { id: "brown", hex: "#6D4C41", name: "Brun" },
    { id: "light-green", hex: "#9CCC65", name: "Vert clair" },
    { id: "mint", hex: "#26A69A", name: "Vert menthe" },
    { id: "sky-blue", hex: "#4FC3F7", name: "Bleu ciel" },
    { id: "royal-blue", hex: "#1E88E5", name: "Bleu roi" },
    { id: "bright-purple", hex: "#AB47BC", name: "Violet vif" },
    { id: "coral", hex: "#EF5350", name: "Corail" },

    { id: "pale-yellow", hex: "#FFF59D", name: "Jaune pâle" },
    { id: "dark-green", hex: "#1B5E20", name: "Vert foncé" },
    { id: "gray", hex: "#757575", name: "Gris" },
    { id: "light-gray", hex: "#E0E0E0", name: "Gris clair" },
    { id: "midnight-blue", hex: "#283593", name: "Bleu nuit" },
];

export const DEFAULT_COLOR_ID = COLORS[0].id;
export const DEFAULT_MATERIAL = MATERIALS[0];

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const DEFAULT_PHONE_COUNTRY = "CA";

export const EMPTY_CONTACT_FIELDS = {
    lastName: "",
    firstName: "",
    company: "",
    email: "",
    phone: "+" + getCountryCallingCode(DEFAULT_PHONE_COUNTRY),
};

export const validateContactFields = (fields) => ({
    lastName: !fields.lastName.trim(),
    firstName: !fields.firstName.trim(),
    email: !EMAIL_REGEX.test(fields.email.trim()),
    phone: !fields.phone || !isValidPhoneNumber(fields.phone),
});

export const formatPhoneNumber = (phone) => {
    if (!phone) return "";
    return parsePhoneNumberFromString(phone)?.formatInternational() ?? phone;
};

const MAILTO_RECIPIENT = "info@octogone3dprints.com";

export const buildMailtoUrl = (contactFields, addressFields, files = []) => {
    const subject = `Demande d'impression 3D - ${contactFields.firstName} ${contactFields.lastName}`;

    const lines = [
        `Nom: ${contactFields.firstName} ${contactFields.lastName}`,
        contactFields.company && `Entreprise: ${contactFields.company}`,
        `Email: ${contactFields.email}`,
        `Téléphone: ${formatPhoneNumber(contactFields.phone)}`,
        "",
        `Adresse: ${formatAddressLines(addressFields).join(", ")}`,
    ].filter(Boolean);

    if (files.length > 0) {
        lines.push("", "Fichiers :");
        files.forEach((file) => {
            const color = COLORS.find((colorOption) => colorOption.id === file.colorId)?.name ?? "";
            lines.push(`- ${file.name} (x${file.quantity}, ${file.material}, ${color})`);
        });
    }

    const body = lines.join("\n");

    return `mailto:${MAILTO_RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

/**
 * Address
 */
export const DEFAULT_ADDRESS_COUNTRY = "CA";

export const EMPTY_ADDRESS_FIELDS = {
    country: DEFAULT_ADDRESS_COUNTRY,
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
};

const POSTAL_CODE_PATTERNS = {
    CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
    US: /^\d{5}(-\d{4})?$/,
    FR: /^\d{5}$/,
};

export const isValidPostalCode = (postalCode, countryCode) => {
    const trimmed = postalCode.trim();
    if (!trimmed) return false;
    const pattern = POSTAL_CODE_PATTERNS[countryCode];
    return pattern ? pattern.test(trimmed) : true; // simple rule: no pattern known for this country, just require non-empty
};

export const formatPostalCodeInput = (rawValue, countryCode) => {
    if (countryCode === "CA") {
        const cleaned = rawValue.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 6);
        return cleaned.length > 3 ? cleaned.slice(0, 3) + " " + cleaned.slice(3) : cleaned;
    }

    if (countryCode === "US") {
        const cleaned = rawValue.replace(/[^0-9]/g, "").slice(0, 9);
        return cleaned.length > 5 ? cleaned.slice(0, 5) + "-" + cleaned.slice(5) : cleaned;
    }

    if (countryCode === "FR") {
        return rawValue.replace(/[^0-9]/g, "").slice(0, 5);
    }

    return rawValue; // no known pattern: leave free-form
};

export const validateAddressFields = (fields) => ({
    country: !fields.country,
    address1: !fields.address1.trim(),
    city: !fields.city.trim(),
    // Province/State is only a real postal-addressing concept for countries with a curated list (e.g. CA, US) —
    // elsewhere (e.g. France, where the postal code already encodes the department) the field doesn't apply.
    province: Boolean(getProvinceOptions(fields.country)) && !fields.province.trim(),
    postalCode: !isValidPostalCode(fields.postalCode, fields.country),
});

const CA_PROVINCES = [
    { code: "AB", en: "Alberta", fr: "Alberta" },
    { code: "BC", en: "British Columbia", fr: "Colombie-Britannique" },
    { code: "MB", en: "Manitoba", fr: "Manitoba" },
    { code: "NB", en: "New Brunswick", fr: "Nouveau-Brunswick" },
    { code: "NL", en: "Newfoundland and Labrador", fr: "Terre-Neuve-et-Labrador" },
    { code: "NS", en: "Nova Scotia", fr: "Nouvelle-Écosse" },
    { code: "NT", en: "Northwest Territories", fr: "Territoires du Nord-Ouest" },
    { code: "NU", en: "Nunavut", fr: "Nunavut" },
    { code: "ON", en: "Ontario", fr: "Ontario" },
    { code: "PE", en: "Prince Edward Island", fr: "Île-du-Prince-Édouard" },
    { code: "QC", en: "Quebec", fr: "Québec" },
    { code: "SK", en: "Saskatchewan", fr: "Saskatchewan" },
    { code: "YT", en: "Yukon", fr: "Yukon" },
];

const US_STATES = [
    { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" },
    { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
    { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "DC", name: "District of Columbia" },
    { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" },
    { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
    { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },
    { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
    { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },
    { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
    { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },
    { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
    { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" },
    { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
    { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
    { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
    { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" },
    { code: "WV", name: "West Virginia" }, { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
];

// Dynamic province/state dropdown, only available for countries with curated data;
// other countries fall back to a free-text "Province / État" input.
export const getProvinceOptions = (countryCode, locale = "fr") => {
    if (countryCode === "CA") {
        return CA_PROVINCES
            .map((province) => ({ code: province.code, name: locale.startsWith("fr") ? province.fr : province.en }))
            .sort((a, b) => a.name.localeCompare(b.name, locale));
    }

    if (countryCode === "US") {
        return US_STATES
            .slice()
            .sort((a, b) => a.name.localeCompare(b.name, locale))
            .map((state) => ({ code: state.code, name: state.name }));
    }

    return null;
};

// Maps a free-form province/state name (e.g. returned by Photon) back to its option code, when a curated list exists
export const normalizeProvinceValue = (rawValue, countryCode) => {
    const trimmed = rawValue.trim().toLowerCase();
    if (!trimmed) return rawValue;

    if (countryCode === "CA") {
        const match = CA_PROVINCES.find((province) =>
            province.code.toLowerCase() === trimmed || province.en.toLowerCase() === trimmed || province.fr.toLowerCase() === trimmed
        );
        return match ? match.code : rawValue;
    }

    if (countryCode === "US") {
        const match = US_STATES.find((state) => state.code.toLowerCase() === trimmed || state.name.toLowerCase() === trimmed);
        return match ? match.code : rawValue;
    }

    return rawValue;
};

const countryNameCache = {};

export const getCountryDisplayName = (code, locale = "fr") => {
    if (!code) return "";
    const cacheKey = locale + ":" + code;
    if (!countryNameCache[cacheKey]) {
        countryNameCache[cacheKey] = new Intl.DisplayNames([locale], { type: "region" }).of(code) ?? code;
    }
    return countryNameCache[cacheKey];
};

export const buildCountryOptions = (locale = "fr") =>
    getCountries()
        .map((code) => ({ code, name: getCountryDisplayName(code, locale) }))
        .filter((country) => Boolean(country.name))
        .sort((a, b) => a.name.localeCompare(b.name, locale));

export const formatAddressLines = (fields, locale = "fr") => {
    const line1 = [fields.address1, fields.address2].filter(Boolean).join(", ");
    const cityProvincePostal = [
        [fields.city, fields.province].filter(Boolean).join(", "),
        fields.postalCode,
    ].filter(Boolean).join(" ");
    const line2 = [cityProvincePostal, getCountryDisplayName(fields.country, locale)].filter(Boolean).join(", ");

    return [line1, line2].filter(Boolean);
};

/**
 * Address autocomplete (Photon / OpenStreetMap)
 */
export const PHOTON_API_URL = "https://photon.komoot.io/api/";
export const ADDRESS_SEARCH_MIN_LENGTH = 3;
export const ADDRESS_SEARCH_DEBOUNCE_MS = 450;

export const mapPhotonFeatureToAddress = (feature) => {
    const props = feature.properties || {};
    const address1 = [props.housenumber, props.street].filter(Boolean).join(" ") || props.name || "";

    return {
        address1,
        city: props.city || props.district || props.county || "",
        province: props.state || "",
        postalCode: props.postcode || "",
        countryCode: props.countrycode || "",
    };
};
