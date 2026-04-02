import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "./providers";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "CareView - ER Dashboard",
  description: "Real-time emergency room wait times and patient queue status",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)] min-h-screen font-sans">
        <QueryProvider>
          <Navbar />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
