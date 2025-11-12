"use client";

import { Nunito } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh]">
      <Image
        src="/61d603fd420e83ccbdab80288c3471da 1.png"
        alt="about-hero image"
        title="about-hero.jpg"
        quality={100}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        placeholder="blur"
        blurDataURL="/logo.png"
      />
      <div
        className="absolute inset-0 bg-black/75 flex items-center justify-center px-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
      >
        <div
          className="text-white bg-black/25 rounded-lg p-6 max-w-3xl text-center space-y-4"
          style={{ background: "rgba(0, 0, 0, 0.15)" }}
        >
          <h1
            className={
              "text-2xl sm:text-3xl md:text-3xl font-extrabold text-white" +
              nunito.className
            }
          >
            Who We Are
          </h1>
          <p className="text-sm sm:text-base md:text-md text-white">
            The AgriShine Schools Initiative (ASI)is a flagship educational
            program of the Lichipu Foundation for Food, Energy, and Water
            Sustainability (LIFEWS Foundation), founded by Gabriel Sunday Ayayia
            through LIFEWS Global Publications Ltd. We are redefining education
            by integrating climate-smart agriculture, agrivoltaics, and everyday
            sustainability into Nigeria’s schools — giving students the
            knowledge, skills, and values to thrive in a changing climate.
          </p>
        </div>
      </div>
    </section>
  );
}
