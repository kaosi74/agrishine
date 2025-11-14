"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

interface HeroProps {
  title: string;
  description: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  imageSrc: string;
  imageAlt?: string;
  bgColor?: string;
  textHeading?: string;
  textContent?: string;
}

export default function Hero({
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  imageSrc,
  imageAlt = "Hero Image",
  bgColor = "bg-primary",
  textHeading = "text-background",
  textContent = "text-surface",
}: HeroProps) {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <section
      className={`${bgColor} py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-8`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div
          className="flex-1 space-y-4 sm:space-y-6 md:mr-12 text-center md:text-left"
          data-aos="zoom-in"
        >
          <h1 className={`${textHeading} text-xl sm:text-2xl md:text-3xl font-bold text-background leading-tight`}>
            {title}
          </h1>
          <p className={`${textContent} text-base sm:text-lg text-background max-w-xl mx-auto md:mx-0`}>
            {description}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {primaryButtonLabel && (
              <button className="bg-secondary text-foreground px-6 py-3 rounded-lg shadow hover:bg-secondary/70 font-bold transition duration-400 ease-in-out">
                {primaryButtonLabel}
              </button>
            )}
            {secondaryButtonLabel && (
              <button className="border-2 border-secondary text-background px-6 py-3 rounded-lg shadow font-bold hover:bg-secondary/10 transition duration-400 ease-in-out">
                {secondaryButtonLabel}
              </button>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div
          className="flex-1 flex justify-center w-full h-64 md:h-auto relative"
          data-aos="zoom-in"
          data-aos-delay="100"
          data-aos-duration="2500"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            height={800}
            width={800}
            className="rounded-lg shadow-lg object-cover transform transition-transform duration-700 ease-in-out hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
}
