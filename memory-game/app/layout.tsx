import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Memory Game",
  description: "A memory game built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
