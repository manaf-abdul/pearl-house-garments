import { useEffect, useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";

export default function FilePreview({ uploadedFile, removeFile }: { uploadedFile: File, removeFile: () => void }) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(uploadedFile);

    useEffect(() => {
        if (uploadedFile) {
            const objectUrl = URL.createObjectURL(uploadedFile);
            setPreviewUrl(objectUrl);
            return () => URL.revokeObjectURL(objectUrl); // Clean up the object URL
        }
    }, [file]);

    const handleDelete = () => {
        removeFile();
        setFile(null);
        setPreviewUrl(null);
    }

    

    if (!file) return <div>No file selected</div>;

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h3>File Preview</h3>
                <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                    <Cross1Icon className="w-5 h-5" />
                </button>
            </div>
            {previewUrl && (file?.type === "application/pdf" ? (
                // <img src={previewUrl} alt="File preview" style={{ maxWidth: '100%' }} />
                <iframe
                    src={previewUrl}
                    title="File preview"
                    style={{ width: '100%', height: '300px', border: 'none' }} ></iframe>
            ) : (
                <img src={previewUrl} alt="File preview" style={{ maxWidth: '100%' }} />
            ))}
        </div >
    );
}