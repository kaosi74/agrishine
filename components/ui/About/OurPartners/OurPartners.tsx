import { ourPartners } from '@/lib/Gallery';
import Image from 'next/image';
import React from 'react'

export default function OurPartners() {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mb-4">OUR PARTNERS</h2>
      <p className="text-surface mb-8">We proudly collaborate with:</p>
      <div className="flex flex-wrap justify-center gap-8">
              {ourPartners.map(({ imageSrc, imageAlt, name, role }, index) => (
                <div
                  key={index}
                  className="w-full md:w-50 flex flex-col items-center"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <div className="relative w-full h-64 flex justify-center rounded-md mb-4">
                    <Image
                      src={imageSrc}
                      alt={imageAlt}
                      width={200}
                      height={900}
                      className="object-cover rounded-md"
                      priority
                    />
                  </div>
                  <p className="text-primary font-semibold">{name}</p>
                  <h3 className="text-surface mt-2 mb-6 text-center">{role}</h3>
                </div>
              ))}
            </div>
    </section>
  );
}
