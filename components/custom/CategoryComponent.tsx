"use client";

import { Eye, Loader2, PlusIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useEffect, useState } from "react";
import { toast } from "@/hooks/use-toast";
import AddCategoryCompnent from "./AddCategoryModal";


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

interface Payload {
    file: File;
    category: string;
    subcategory: string;
}


export default function CategoryComonent() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>('');
    const [categories, setCategories] = useState<Category[]>([]);
    const [open, setOpen] = useState(false);

    const fetchCategory = async () => {
        setLoading(true); // Set loading to true before fetching
        try {
            setError(null);
            const res = await fetch("/api/category");
            if (!res.ok) throw new Error("Failed to fetch media");
            const data = await res.json();
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

    const addCategory = async (payload: Payload) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append("file", payload['file']);
            formData.append("category", payload['category']);
            formData.append("subcategory", payload['subcategory']);
            setError(null);
            const res = await fetch("/api/category", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error("Failed to add category");
            const data = await res.json();
            // setCategories((prev) => [...prev, data]);
            fetchCategory(); // Refresh categories after adding
            toast({
                title: "Success",
                description: "Category added successfully",
            });
        } catch (err: any) {
            setError(err.message);
            toast({
                title: "Error",
                description: "Failed to add category",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    function AddComponent({ ...props }) {
        return (
            <h6 className="cursor-pointer text-base underline text-blue-600" {...props}>Add Category</h6>
        )
    }

    function AddComponentCard({ ...props }) {
        return (
            <Card className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex items-center justify-center cursor-pointer" {...props}>
                <PlusIcon className="ml-2 w-10 h-10" />
            </Card>
        )
    }

    return (
        <>
            <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center justify-between p-4">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Eye className="h-5 w-5 text-primary" />
                            Category Manager
                        </CardTitle>
                        <CardDescription>
                            Add or Remove Categories from here.
                        </CardDescription>
                    </CardHeader>
                    <AddCategoryCompnent handleSave={addCategory} AddComponent={AddComponent} />
                </div>
                <CardContent>
                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="flex flex-col items-center gap-4 text-muted-foreground">
                                <Loader2 className="h-10 w-10 animate-spin text-primary" />
                                <p className="text-lg font-medium">Loading...</p>
                                <p className="text-sm">Please wait while we fetch your content.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Object.entries(categories)?.map(([categoryKey, category]) => (
                                <Card key={category.id} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
                                    <CardHeader>
                                        <CardTitle>{category.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            <ul className="min-h-[100px]">
                                                {category.subcategories.map((sub: SubCategory) => (
                                                    <li key={sub.id} className="flex items-center justify-between">
                                                        <span>{sub.name}</span>
                                                        <a href={sub.document_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                            View Document
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                            <li>
                                                <AddCategoryCompnent handleSave={addCategory} defaultCategory={category?.name} AddComponent={AddComponentCard} />
                                            </li>
                                        </ul>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </>
    );
}