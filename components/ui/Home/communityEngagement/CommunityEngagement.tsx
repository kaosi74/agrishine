"use client";

import { CommunityEngagementProps } from "@/lib/CommunityEngagement";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function CommunityEngagement({
  heading,
  intro,
  description,
  gridItems,
  imageSrc,
  imageAlt,
  ctaText,
  ctaButtonLabel,
  reverseOrder = true,
}: CommunityEngagementProps) {
  useEffect(() => {
    Aos.init({
      duration: 2300,
      once: false,
      offset: 60,
    });
  });
  return (
    <section className="text-center px-10 md:px-22 py-12">
      {/* Heading */}
      <h2 className="font-bold text-3xl my-6" data-aos="fade-up">
        {heading}
      </h2>

      {reverseOrder ? (
        <>
          <p
            className="text-md text-surface font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {description}
          </p>
          <p
            className="text-md mb-1 text-surface"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {intro}
          </p>
        </>
      ) : (
        <>
          <p
            className="text-md mb-1 text-surface font-bold"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {intro}
          </p>
          <p
            className="text-md text-surface"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {description}
          </p>
        </>
      )}

      {/* Grid + Image */}
      <div className="flex flex-col md:flex-row justify-center items-center my-12 gap-y-4 md:gap-y-0">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 w-full max-w-md md:max-w-none"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          {gridItems.map((item, index) => (
            <div
              key={index}
              className="px-4 rounded-xl py-4 shadow-sm"
              data-aos="flip-up"
              data-aos-delay={index * 100}
            >
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div data-aos-delay="800">
          {" "}
          <Image
            src={imageSrc}
            width={500}
            height={500}
            alt={imageAlt}
            className="max-w-full h-auto"
            data-aos="zoom-in"
          />
          <p className="font-bold">{imageAlt}</p>
        </div>
      </div>

      {/* CTA */}

      <div data-aos="fade-up" data-aos-delay="1000">
        {ctaText && <p className="text-lg">{ctaText}</p>}
        {ctaButtonLabel && (
          <button className="bg-primary rounded-lg px-4 py-2 shadow-md hover:bg-primary/90 cursor-pointer text-background font-medium mt-6 transition-transform duration-500 ease-in-out hover:scale-105">
            {ctaButtonLabel}
          </button>
        )}
      </div>
    </section>
  );
}
