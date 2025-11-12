"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";

export default function TeacherClimateAcademy() {
  useEffect(() => {
    Aos.init({
      duration: 2300,
      once: false,
      offset: 60,
    });
  });
  return (
    <section className="text-center px-10 md:px-22 py-12 overflow-hidden">
      <h2 className="font-bold text-3xl my-6" data-aos="zoom-in">
        Teacher Climate Academy
      </h2>
      <p className="text-md mb-1 text-surface" data-aos="zoom-in">
        Empowering educators as climate mentors
      </p>
      <p className="text-md text-surface" data-aos="fade-up">
        The Teacher Climate Academy (TCA) equips teachers with tools and
        techniques to deliver sustainability education effectively. Workshops
        and online sessions focus on:
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center my-12 gap-y-4 md:gap-y-0">
        <div className="transform transition-transform duration-1000 ease-in-out hover:scale-105">
          <Image
            src="/37cf1e0eeff2e9ed56861d49f6195f64 2.png"
            width={900}
            height={500}
            alt="logo"
            className="rounded-lg shadow-lg"
            data-aos="zoom-in"
          />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6 w-full max-w-md md:max-w-none"
          data-aos-delay="800"
          data-aos="fade-left"
        >
          {/* Card 1 */}
          <div className="transform transition-transform duration-[1500ms] ease-in-out hover:scale-105">
            <div className="px-4 rounded-xl py-4 shadow-sm" data-aos="flip-up">
              <p>Climate-smart farming and agrivoltaic literacy</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="transform transition-transform duration-[1500ms] ease-in-out hover:scale-105">
            <div className="px-4 rounded-xl py-4 shadow-sm" data-aos="flip-up">
              <p>Values of community, teamwork, and environmental ethics</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="transform transition-transform duration-[1500ms] ease-in-out hover:scale-105">
            <div className="px-4 rounded-xl py-4 shadow-sm" data-aos="flip-up">
              <p>Lesson integration with national curriculum (NERDC/WAEC)</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="transform transition-transform duration-[1500ms] ease-in-out hover:scale-105">
            <div className="px-4 rounded-xl py-4 shadow-sm" data-aos="flip-up">
              <p>Hands-on sustainability teaching methods</p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up">
        <p className="text-lg">
          Graduates receive recognition as AgriShine Certified Educators.
        </p>
        <button className="bg-primary rounded-lg px-4 py-2 shadow-md hover:bg-primary/90 cursor-pointer text-background font-medium mt-6 transition duration-300 ease-in-out">
          Apply for the next Cohort!
        </button>
      </div>
    </section>
  );
}
