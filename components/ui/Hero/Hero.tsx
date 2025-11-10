"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  });
  return (
    <section className="bg-primary py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div className="flex-1 space-y-4 sm:space-y-6 md:mr-12 text-center md:text-left" data-aos="zoom-in">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-background leading-tight">
            Growing Future Leaders Through Climate‑Smart Education
          </h1>
          <p className="text-base sm:text-lg text-background max-w-xl mx-auto md:mx-0">
            Our Programs focus on three pillars of impact, empowering schools,
            teachers and students to lead the movement for Food‑Energy‑Water
            security.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start" data-aos="fade-up" data-aos-delay="200">
            <button className="bg-secondary text-foreground px-6 py-3 rounded-lg shadow hover:bg-secondary/70 font-bold">
              Get involved
            </button>
            <button className="border-2 border-secondary text-background px-6 py-3 rounded-lg shadow transition font-bold">
              Sign up
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center w-full h-64 md:h-auto relative" data-aos="zoom-in" data-aos-delay="400">
          <Image
            src="/Rectangle_90.png"
            alt="Hero Image"
            height={800}
            width={800}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
