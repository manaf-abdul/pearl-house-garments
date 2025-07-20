"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import LoginForm from "@/components/LoginForm";
import {
  Upload,
  Trash2,
  Image as ImageIcon,
  Video,
  FileX,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
  Sparkles,
  LogOut,
  Loader2
} from "lucide-react";
import CategoryComonent from "@/components/custom/CategoryComponent";

interface MediaItem {
  public_id: string;
  type: "image" | "video";
  src: string;
}

const Admin: React.FC = () => {
  // --- ALL HOOKS AT THE TOP ---
  const { isAuthenticated, login, logout } = useAuth();
  const [media, setMedia] = useState<MediaItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Start with loading true
  const [uploading, setUploading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchMedia();
    } else {
        setLoading(false); // If not authenticated, stop loading
    }
  }, [isAuthenticated]);

  // --- ALL FUNCTIONS NEXT ---
  const fetchMedia = async () => {
    setLoading(true); // Set loading to true before fetching
    try {
      setError(null);
      const res = await fetch("/api/media");
      if (!res.ok) throw new Error("Failed to fetch media");
      const data: MediaItem[] = await res.json();
      setMedia(data);
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

  const simulateProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    await uploadFile(file);
  };

  const uploadFile = async (file: File) => {
    setUploading(true);
    setError(null);
    simulateProgress();

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Upload failed. Please try again.");

      toast({
        title: "Success!",
        description: `${file.name} uploaded successfully`,
      });

      await fetchMedia();
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Upload Failed",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

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
      uploadFile(e.dataTransfer.files[0]);
    }
  };

  const handleDelete = async (public_id: string) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    setError(null);
    try {
      const response = await fetch("/api/media", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ public_id }),
      });
      if (!response.ok) throw new Error("Failed to delete media.");
      
      toast({
        title: "Deleted",
        description: "Media item deleted successfully",
      });
      
      await fetchMedia();
    } catch (err: any) {
      setError(err.message);
      toast({
        title: "Delete Failed",
        description: err.message,
        variant: "destructive",
      });
    }
  };


  // --- CONDITIONAL RETURN AT THE END ---
  // If not authenticated, show the login form.
  if (!isAuthenticated) {
    return <LoginForm onLogin={login} />;
  }

  // Otherwise, show the full admin dashboard.
  return (
    <div className="min-h-screen bg-gradient-admin animate-fade-in">
      {/* Header */}
      <div className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg shadow-admin">
              <Sparkles className="h-6 w-6 text-primary-foreground animate-float" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Media Manager
              </h1>
              <p className="text-muted-foreground">Manage your hero carousel content</p>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <Badge variant="secondary" className="animate-scale-in">
                {media.length} items
              </Badge>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logout();
                  toast({
                    title: "Logged out",
                    description: "Successfully signed out of admin panel",
                  });
                }}
                className="flex items-center gap-2"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8 space-y-8">
        {/* Upload Section */}
        <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm animate-scale-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="h-5 w-5 text-primary" />
              Upload New Media
            </CardTitle>
            <CardDescription>
              Add images or videos to your hero carousel. Drag & drop or click to upload.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div
              className=  {`
                relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300
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
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
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
                    Supports: JPG, PNG, GIF, MP4, WebM
                  </p>
                </div>
              </div>

              {uploading && (
                <div className="mt-6 space-y-2">
                  <Progress value={uploadProgress} className="w-full" />
                  <p className="text-sm text-muted-foreground">
                    Uploading... {Math.round(uploadProgress)}%
                  </p>
                </div>
              )}
            </div>

            {error && (
              <Alert variant="destructive" className="mt-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Media Gallery */}
        <Card className="shadow-card border-0 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5 text-primary" />
              Media Gallery
            </CardTitle>
            <CardDescription>
              Current carousel media items. Click to preview or delete.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="flex flex-col items-center gap-4 text-muted-foreground">
                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                    <p className="text-lg font-medium">Loading Media...</p>
                    <p className="text-sm">Please wait while we fetch your content.</p>
                </div>
              </div>
            ) : media.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {media.map((item, index) => (
                  <div
                    key={item.public_id}
                    className="group relative bg-muted/50 rounded-xl overflow-hidden shadow-card hover:shadow-admin transition-all duration-300 hover:scale-105 animate-scale-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          className="w-full h-full object-cover"
                          muted
                          loop
                          onMouseEnter={(e) => e.currentTarget.play()}
                          onMouseLeave={(e) => e.currentTarget.pause()}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt="Carousel item"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Type Badge */}
                      <Badge 
                        className="absolute top-2 left-2 bg-primary/90 text-primary-foreground border-0"
                        variant="secondary"
                      >
                        {item.type === "video" ? (
                          <><Video className="h-3 w-3 mr-1" />Video</>
                        ) : (
                          <><ImageIcon className="h-3 w-3 mr-1" />Image</>
                        )}
                      </Badge>

                      {/* Action Buttons */}
                      <div className="absolute bottom-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="h-8 w-8 p-0 bg-card/90 hover:bg-card"
                          onClick={() => window.open(item.src, '_blank')}
                        >
                          <Download className="h-3 w-3" />
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="h-8 w-8 p-0 bg-destructive/90 hover:bg-destructive"
                          onClick={() => handleDelete(item.public_id)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-muted rounded-full">
                    <FileX className="h-8 w-8 text-muted-foreground" />
                  </div>
                </div>
                <h3 className="text-lg font-medium mb-2">No media found</h3>
                <p className="text-muted-foreground">
                  Upload your first image or video to get started!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <CategoryComonent />
      </div>
    </div>
  );
};

export default Admin;