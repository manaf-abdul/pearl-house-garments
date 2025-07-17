// 1. Import your AuthProvider
"use client"
import { AuthProvider } from "@/hooks/useAuth";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <AuthProvider>{children}</AuthProvider>;
}
