/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Utils
 */
import { useTranslation } from "react-i18next";
import { COLORS, MATERIALS, truncateFilename } from "./requestConfig";

const QuantityStepper = ({ quantity, onChange }) => (
    <div className="flex items-center h-8 sm:h-9 rounded-lg ring-1 ring-zinc-50/10 ring-inset overflow-hidden shrink-0">
        <button type="button" className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center hover:bg-zinc-800" onClick={() => onChange(Math.max(1, quantity - 1))}>-</button>
        <span className="w-7 sm:w-10 text-center font-semibold">{quantity}</span>
        <button type="button" className="w-8 h-8 sm:w-9 sm:h-9 grid place-items-center hover:bg-zinc-800" onClick={() => onChange(quantity + 1)}>+</button>
    </div>
);

const MaterialSelect = ({ material, onChange, className = "" }) => (
    <div className={"relative " + className}>
        <select
            value={material}
            onChange={(event) => onChange(event.target.value)}
            className="text-field w-full appearance-none !h-8 sm:!h-9 !py-0 !pr-9 !leading-8 sm:!leading-9"
        >
            {MATERIALS.map((materialOption) => (
                <option key={materialOption} value={materialOption}>{materialOption}</option>
            ))}
        </select>

        <span className="material-symbols-rounded absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
            expand_more
        </span>
    </div>
);

const ExpandToggle = ({ expanded, label, onClick }) => (
    <button
        type="button"
        aria-label={label}
        onClick={onClick}
        className="w-8 h-8 grid place-items-center rounded-lg hover:bg-zinc-800 shrink-0"
    >
        <span className={"material-symbols-rounded transition-transform duration-300 " + (expanded ? "-rotate-90" : "")}>
            chevron_right
        </span>
    </button>
);

const FileListItem = ({
    item,
    onCancel,
    onToggleExpand,
    onQuantityChange,
    onMaterialChange,
}) => {

    const { t } = useTranslation();
    const truncatedName = truncateFilename(item.name);
    const selectedColor = COLORS.find((color) => color.id === item.colorId) ?? COLORS[0];

    if (item.status === "uploading") {
        return (
            <div className="border border-zinc-700 rounded-2xl px-6 py-4 flex items-center gap-4">
                <p className="shrink-0">{truncatedName}</p>

                <div className="flex-1 h-2 bg-zinc-700 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-sky-400 rounded-full transition-[width]"
                        style={{ width: item.progress + "%" }}
                    />
                </div>

                <p className="text-sky-400 font-medium w-12 text-right shrink-0">{item.progress}%</p>

                <button type="button" className="text-zinc-400 hover:text-zinc-200 underline shrink-0" onClick={() => onCancel(item.id)}>
                    {t("dropzoneCancelUpload")}
                </button>
            </div>
        );
    }

    const expanded = item.status === "editing";

    return (
        <div className="border border-zinc-700 rounded-2xl overflow-hidden">
            <div className={"grid transition-[grid-template-rows] duration-300 ease-in-out " + (expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                <div className="overflow-hidden">
                    <div className="p-6">
                        <div className="flex justify-end">
                            <ExpandToggle expanded onClick={() => onToggleExpand(item.id)} label={t("dropzoneCollapse")} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={"grid transition-[grid-template-rows] duration-300 ease-in-out " + (expanded ? "grid-rows-[0fr]" : "grid-rows-[1fr]")}>
                <div className="overflow-hidden">
                    <div className="px-3 sm:px-4 py-3 flex items-center gap-2 sm:gap-4">
                        <span
                            className="w-8 h-8 rounded-full ring-2 ring-zinc-500/50 shrink-0"
                            style={{ backgroundColor: selectedColor.hex }}
                        />

                        <p className="flex-1 min-w-0 truncate">{item.name}</p>

                        <MaterialSelect material={item.material} onChange={(material) => onMaterialChange(item.id, material)} className="w-20 sm:w-28 md:w-[122px] shrink-0" />

                        <QuantityStepper quantity={item.quantity} onChange={(quantity) => onQuantityChange(item.id, quantity)} />

                        <ExpandToggle expanded={false} onClick={() => onToggleExpand(item.id)} label={t("dropzoneExpand")} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileListItem;
