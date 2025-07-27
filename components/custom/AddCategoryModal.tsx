"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogClose, DialogOverlay, DialogPortal } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component (e.g., from shadcn/ui)
import { JSX, useState } from "react";
import { Upload } from "lucide-react";
import FilePreview from "./FilePreview";

interface AddCategoryComponentProps {
    handleSave: (payload: { category: string; subcategory: string; file: File }) => void;
    defaultCategory?: string;
    AddComponent?: (props: any) => JSX.Element | Element;
}

export default function AddCategoryComponent({ handleSave, defaultCategory, AddComponent }: AddCategoryComponentProps) {

    const [category, setCategory] = useState(defaultCategory || "");
    const [subcategory, setSubcategory] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [open, setOpen] = useState(false);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileChange = (event: any) => {
        const file = event.target.files?.[0];
        if (!file) return;
        setFile(file);
    };

    const removeFile = () => {
        setFile(null);
    }

    const save = () => {
        if (!category || !subcategory || !file) {
            setError("Please fill in all fields and select a file.");
            return;
        }

        handleSave({
            'category': category,
            'subcategory': subcategory,
            'file': file
        });

        setOpen(false);
        setCategory("");
        setSubcategory("");
        setFile(null);
        setError(null);
    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {
                    AddComponent && (
                        <AddComponent />
                    )
                }
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className="fixed inset-0 bg-black/50 z-50" />
                <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md p-6 bg-white rounded-lg shadow-lg z-50">
                    <DialogTitle className="text-lg font-semibold">Add Category</DialogTitle>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <div className="mt-4 space-y-4">
                        <label className="block">
                            <span className="text-sm font-medium">Category</span>
                            <input
                                type="text"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter category"
                                aria-label="Category"
                            />
                        </label>
                        <label className="block">
                            <span className="text-sm font-medium">Subcategory</span>
                            <input
                                type="text"
                                value={subcategory}
                                onChange={(e) => setSubcategory(e.target.value)}
                                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter subcategory"
                                aria-label="Subcategory"
                            />
                        </label>
                    </div>
                    {
                        file ? (
                            <div className="mt-4">
                                <p className="text-sm font-medium">Selected File: {file.name}</p>
                                <FilePreview uploadedFile={file} removeFile={removeFile} />
                            </div>
                        ) : (
                            <div
                                className={`
                                    relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 mt-4
                                    ${dragActive
                                        ? 'border-primary bg-primary/5 scale-105'
                                        : 'border-border hover:border-primary/50 hover:bg-primary/5'
                                    }
                                    ${uploading ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                                  `}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                                onClick={() => document.getElementById('file-upload-2')?.click()}
                            >
                                <input
                                    id="file-upload-2"
                                    type="file"
                                    accept="image/*,.pdf"
                                    onChange={handleFileChange}
                                    disabled={uploading}
                                    className="hidden"
                                />

                                <div className="space-y-4">
                                    <div className="flex justify-center">
                                        <div className="p-4 bg-gradient-primary rounded-full">
                                            <Upload className="h-8 w-8 text-primary-foreground" />
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-lg font-medium">
                                            {dragActive ? 'Drop your file here' : 'Drop files here or click to upload'}
                                        </p>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Supports: JPG, PNG, PDF
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div className="mt-6 flex justify-end gap-4">
                        <DialogClose asChild>
                            <Button variant="secondary" className="px-4 py-2 bg-gray-200 rounded-md">
                                Close
                            </Button>
                        </DialogClose>
                        <Button
                            onClick={save}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                        >
                            Save
                        </Button>

                    </div>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}