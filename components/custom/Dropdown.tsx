"use client";

import React, { useState, useEffect, useRef } from "react";
import { toast } from "@/hooks/use-toast";

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

const TailwindDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [hasMounted, setHasMounted] = useState(false); // to avoid hydration issues

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const handleDownload = (url: string, name: string) => {
    if (typeof document === "undefined") return;
    const downloadUrl = url.replace("/upload/", "/upload/fl_attachment/");
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = name.replace(/[^a-zA-Z0-9.-]/g, "_") || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const delayClose = (callback: () => void) => {
    clearCloseTimeout();
    timeoutRef.current = setTimeout(callback, 200);
  };

  useEffect(() => {
    fetchCategories();
    return () => clearCloseTimeout(); // cleanup on unmount
  }, []);

  if (!hasMounted) return null; // SSR hydration fix

  return (
    <div
      className="relative inline-block text-left group"
      onMouseEnter={() => {
        clearCloseTimeout();
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        delayClose(() => {
          setIsOpen(false);
          setOpenSubMenu(null);
        });
      }}
    >
      <button className="flex items-center text-gray-700 hover:text-blue-900 transition-colors px-3 py-2 text-sm font-medium">
        Categories
        <svg
          className={`ml-2 h-5 w-5 text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full w-56 rounded-lg shadow-xl bg-white border border-gray-100 z-50 transition-opacity duration-200 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {loading && <div className="px-3 py-2 text-sm text-gray-500">Loading...</div>}
        {error && <div className="px-3 py-2 text-sm text-red-500">{error}</div>}
        {!loading && !error && categories.length === 0 && (
          <div className="px-3 py-2 text-sm text-gray-500">No categories found</div>
        )}
        {Object.entries(categories).map(([categoryKey, category]) => (
          <div
            key={category.id}
            className="relative group"
            onMouseEnter={() => {
              clearCloseTimeout();
              setOpenSubMenu(category.id);
            }}
            onMouseLeave={() => {
              delayClose(() => setOpenSubMenu(null));
            }}
          >
            <button className="flex w-full items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded transition-colors duration-150">
              {category.name}
              <svg
                className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${
                  openSubMenu === category.id ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div
              className={`absolute left-full top-0 w-56 rounded-lg shadow-xl bg-white border border-gray-100 z-50 transition-opacity duration-200 ${
                openSubMenu === category.id ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {category.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleDownload(sub.document_url, sub.name)}
                  className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded transition-colors duration-150"
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailwindDropdown;
