/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useEffect, useRef, useState } from "react";

/**
 * Components
 */
import Container from "../ui/Container";
import FileDropzone from "./FileDropzone";
import FileListItem from "./FileListItem";

/**
 * Utils
 */
import { useTranslation } from "react-i18next";
import { DEFAULT_COLOR_ID, DEFAULT_MATERIAL } from "./requestConfig";

const UPLOAD_TICK_MS = 300;

const FileSection = ({ onFilesChange }) => {

    const { t } = useTranslation();
    const [files, setFiles] = useState([]);
    const idCounterRef = useRef(0);
    const intervalsRef = useRef({});

    useEffect(() => () => {
        Object.values(intervalsRef.current).forEach(clearInterval);
    }, []);

    useEffect(() => {
        onFilesChange?.(files);
    }, [files, onFilesChange]);

    const updateFile = (id, patch) => {
        setFiles((prev) => prev.map((file) => (file.id === id ? { ...file, ...patch } : file)));
    };

    const handleFileAccepted = (file) => {
        const id = ++idCounterRef.current;

        setFiles((prev) => [...prev, {
            id,
            name: file.name,
            status: "uploading",
            progress: 0,
            quantity: 1,
            material: DEFAULT_MATERIAL,
            colorId: DEFAULT_COLOR_ID,
            description: "",
        }]);

        intervalsRef.current[id] = setInterval(() => {
            setFiles((prev) => prev.map((item) => {
                if (item.id !== id || item.status !== "uploading") return item;

                const nextProgress = Math.min(100, item.progress + Math.round(10 + Math.random() * 20));

                if (nextProgress >= 100) {
                    clearInterval(intervalsRef.current[id]);
                    delete intervalsRef.current[id];
                    return { ...item, progress: 100, status: "editing" };
                }

                return { ...item, progress: nextProgress };
            }));
        }, UPLOAD_TICK_MS);
    };

    const handleCancel = (id) => {
        if (intervalsRef.current[id]) {
            clearInterval(intervalsRef.current[id]);
            delete intervalsRef.current[id];
        }
        setFiles((prev) => prev.filter((file) => file.id !== id));
    };

    const handleToggleExpand = (id) => {
        setFiles((prev) => prev.map((file) =>
            file.id === id ? { ...file, status: file.status === "editing" ? "summary" : "editing" } : file
        ));
    };

    const handleDuplicate = (id) => {
        setFiles((prev) => {
            const index = prev.findIndex((file) => file.id === id);
            if (index === -1) return prev;

            const copy = { ...prev[index], id: ++idCounterRef.current };
            const next = [...prev];
            next.splice(index + 1, 0, copy);
            return next;
        });
    };

    const handleRemove = (id) => {
        setFiles((prev) => prev.filter((file) => file.id !== id));
    };

    return (
        <div>
            <FileDropzone onFileAccepted={handleFileAccepted} />

            {files.length > 0 && (
                <Container title={t("fileSectionTitle")}>
                    {files.map((item) => (
                        <FileListItem
                            key={item.id}
                            item={item}
                            onCancel={handleCancel}
                            onToggleExpand={handleToggleExpand}
                            onQuantityChange={(id, quantity) => updateFile(id, { quantity })}
                            onMaterialChange={(id, material) => updateFile(id, { material })}
                            onColorChange={(id, colorId) => updateFile(id, { colorId })}
                            onDescriptionChange={(id, description) => updateFile(id, { description })}
                            onDuplicate={handleDuplicate}
                            onRemove={handleRemove}
                        />
                    ))}
                </Container>
            )}
        </div>
    );
};

export default FileSection;
