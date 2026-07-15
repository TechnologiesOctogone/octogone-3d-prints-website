/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

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
