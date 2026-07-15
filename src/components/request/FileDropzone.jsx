/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useRef, useState } from "react";

/**
 * Utils
 */
import { Trans, useTranslation } from "react-i18next";

const ACCEPTED_EXTENSIONS = ["stl", "step", "stp", "obj", "3mf"];
const ACCEPTED_FILE_INPUT = ".stl,.step,.stp,.obj,.3mf";

const getExtension = (filename) => filename.split(".").pop().toLowerCase();

const isDragValid = (dataTransfer) => {
    const filesWithKnownType = Array.from(dataTransfer.items || [])
        .filter((item) => item.kind === "file" && item.type);

    if (filesWithKnownType.length === 0) return true;

    return filesWithKnownType.every((item) => ACCEPTED_EXTENSIONS.includes(item.type.split("/").pop()));
};

const FileDropzone = ({ onFileAccepted }) => {

    const { t } = useTranslation();
    const inputRef = useRef(null);

    const [dragState, setDragState] = useState("idle"); // idle | valid | invalid
    const [error, setError] = useState(null);

    const openFileBrowser = () => {
        inputRef.current?.click();
    };

    const acceptFile = (candidate) => {
        if (!candidate) return;

        if (!ACCEPTED_EXTENSIONS.includes(getExtension(candidate.name))) {
            setError(t("dropzoneInvalidFormat"));
            return;
        }

        setError(null);
        onFileAccepted(candidate);
        if (inputRef.current) inputRef.current.value = "";
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragState(isDragValid(event.dataTransfer) ? "valid" : "invalid");
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragState("idle");
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setDragState("idle");
        acceptFile(event.dataTransfer.files?.[0]);
    };

    const handleInputChange = (event) => {
        acceptFile(event.target.files?.[0]);
    };

    const dropzoneStateClasses = {
        idle: "border-zinc-600",
        valid: "border-sky-400",
        invalid: "border-red-500 bg-red-500/10",
    }[dragState];

    return (
        <div>
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={"border-2 border-dashed rounded-3xl px-6 py-16 text-center transition-colors " + dropzoneStateClasses}
            >
                <input
                    ref={inputRef}
                    type="file"
                    accept={ACCEPTED_FILE_INPUT}
                    className="hidden"
                    onChange={handleInputChange}
                />

                <button
                    type="button"
                    onClick={openFileBrowser}
                    aria-label={t("dropzoneSelectButton")}
                    className="w-20 h-20 mx-auto grid place-items-center rounded-full bg-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-colors"
                >
                    <span className="material-symbols-rounded text-4xl">upload</span>
                </button>

                <p className="mt-6 font-semibold text-lg">{t("dropzoneLabel")}</p>

                <p className="text-zinc-400 text-sm mt-2">
                    <Trans i18nKey="dropzoneFormats">
                        Formats supportés : STL, STEP, OBJ, 3MF, <a href="#" onClick={(event) => event.preventDefault()} className="underline hover:text-zinc-200">Règles de design 3D</a>
                    </Trans>
                </p>

                <button type="button" className="btn btn-primary mx-auto mt-6 px-8" onClick={openFileBrowser}>
                    {t("dropzoneSelectButton")}
                </button>
            </div>

            {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
    );
};

export default FileDropzone;
