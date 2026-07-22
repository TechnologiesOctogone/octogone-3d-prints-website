/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

import { isValidPhoneNumber, parsePhoneNumberFromString, getCountryCallingCode } from "libphonenumber-js/min";

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

export const buildMailtoUrl = (fields, files = []) => {
    const subject = `Demande d'impression 3D - ${fields.firstName} ${fields.lastName}`;

    const lines = [
        `Nom: ${fields.firstName} ${fields.lastName}`,
        fields.company && `Entreprise: ${fields.company}`,
        `Email: ${fields.email}`,
        `Téléphone: ${formatPhoneNumber(fields.phone)}`,
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
