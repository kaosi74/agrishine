import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgriShine Schools Initiative (ASI)",
  description:
    "The AgriShine Schools Initiative (ASI) is a flagship educational program of the Lichipu Foundation for Food, Energy, and Water Sustainability (LIFEWS Foundation), founded by Gabriel Sunday Ayayia through LIFEWS Global Publications Ltd. ASI is redefining education in Nigeria by integrating climate-smart agriculture, agrivoltaics, and everyday sustainability into schools — equipping students with the knowledge, skills, and values to thrive in a changing climate.",
  keywords: [
    "AgriShine",
    "AgriShine Schools Initiative",
    "LIFEWS Foundation",
    "Gabriel Sunday Ayayia",
    "climate-smart agriculture",
    "agrivoltaics",
    "sustainability education",
    "Nigeria schools",
    "environmental literacy",
    "student leadership",
  ],
  icons: {
    icon: { url: "/logo.png", sizes: "6x12" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
