"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";


// Set up the pdfjs worker (required for react-pdf)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface SubCategory {
    id: string;
    name: string;
    document_url: string;
}

interface Category {
    id: string;
    name: string;
    subcategories: SubCategory[];
}

const FileDropdownWithPreview = () => {
    const [open, setOpen] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>('');

    const fetchCategory = async () => {
        setLoading(true); // Set loading to true before fetching
        try {
            setError(null);
            const res = await fetch("/api/category");
            if (!res.ok) throw new Error("Failed to fetch media");
            const data = await res.json();
            console.log("Fetched categories:", data);
            setCategories(data);
        } catch (err: any) {
            setError(err.message);
            toast({
                title: "Error",
                description: "Failed to fetch media items",
                variant: "destructive",
            });
        } finally {
            setLoading(false); // Set loading to false after fetching is complete
        }
    };
    // Handle download on click
    const handleDownload = (url: string, name: string) => {
        // Ensure the URL includes fl_attachment
        const downloadUrl = url.replace('/upload/', '/upload/fl_attachment/');

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = downloadUrl;

        // Set the download attribute with a sanitized filename
        link.download = name.replace(/[^a-zA-Z0-9.-]/g, '_') || 'download'; // Fallback filename

        // Append to body, trigger click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    React.useEffect(() => {
        fetchCategory();
    }, []);

    return (
        <div>
            <DropdownMenu.Root open={open} onOpenChange={setOpen}>
                <DropdownMenu.Trigger asChild>
                    <a className="text-gray-700 hover:text-blue-900 transition-colors flex items-center cursor-pointer">
                        Categories
                        <ChevronDownIcon className="ml-2 w-5 h-5 text-gray-500" />
                    </a>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className="overflow-hidden bg-white rounded-lg shadow-xl min-w-[220px] z-50 border border-gray-100 animate-in fade-in-20 slide-in-from-top-1 duration-200"
                        sideOffset={5}
                    >
                        {Object.entries(categories)?.map(([categoryKey, category]) => (
                            <DropdownMenu.Sub key={category.id}>
                                <DropdownMenu.SubTrigger className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded cursor-pointer focus:outline-none focus:bg-gray-100 transition-colors duration-150 dropdown-menu-item">
                                    {category.name}
                                    <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                                </DropdownMenu.SubTrigger>
                                <DropdownMenu.Portal>
                                    <DropdownMenu.SubContent
                                        className="bg-white rounded-lg shadow-xl min-w-[200px] z-50 border border-gray-100 animate-in fade-in-20 slide-in-from-left-1 duration-200"
                                        sideOffset={4}
                                    >
                                        {category?.subcategories.map((sub) => (
                                            <DropdownMenu.Item
                                                key={sub.id}
                                                className="cursor-pointer select-none px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded focus:outline-none focus:bg-blue-50 transition-colors duration-150"
                                                onClick={() => handleDownload(sub.document_url, sub.name)}
                                            >
                                                {sub.name}
                                            </DropdownMenu.Item>
                                        ))}
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Portal>
                            </DropdownMenu.Sub>
                        ))}
                        <DropdownMenu.Arrow className="fill-white" />
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
        </div>
    );
};

export default FileDropdownWithPreview;