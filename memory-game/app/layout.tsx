import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Memory Game",
  description:
    "A memory game using Magic the Gathering art, built with Next.js, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
