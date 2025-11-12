"use client";

import Aos from "aos";
import { useEffect } from "react";

export default function Achievement() {
  useEffect(() => {
    Aos.init({
      duration: 2300,
      once: false,
      offset: 40, 
    });
  });
  return (
    <section className="bg-yellow-300 font-bold text-center py-6 md:py-16 px-12">
      <div className="grid md:grid-cols-4 gap-y-4 md:gap-y-0">
        <p className="text-lg" data-aos="zoom-in" data-aos-delay="0">
          500+ <br /> Schools Reached
        </p>
        <p className="text-lg" data-aos="zoom-in" data-aos-delay="200">
          200,000+ <br /> Students
        </p>
        <p className="text-lg" data-aos="zoom-in" data-aos-delay="400">
          5000+ <br /> Teachers Trained
        </p>
        <p className="text-lg" data-aos="zoom-in" data-aos-delay="600">
          10,000+ <br /> Learning Gardens
        </p>
      </div>
    </section>
  );
}
