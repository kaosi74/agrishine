"use client";

import Image from "next/image";

export default function TeacherClimateAcademy() {
  return (
    <section className="text-center px-22 py-12">
      <h2 className="font-bold text-3xl my-6">Teacher Climate Academy</h2>
      <p className="text-md mb-1">Empowering educators as climate mentors</p>
      <p className="text-md">
        The Teacher Climate Academy (TCA) equips teachers with tools and
        techniques to deliver sustainability education effectively. Workshops
        and online sessions focus on:
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center my-12">
        <Image
          src="/37cf1e0eeff2e9ed56861d49f6195f64 2.png"
          width={500}
          height={500}
          alt="logo"
        />
        <div className="grid grid-cols-2 gap-14 px-12">
          <div className="w-54 px-4 rounded-xl py-4 shadow-sm">
            <p>Climate-smart farming and agrivoltaic literacy</p>
          </div>
          <div className="w-54 px-4 rounded-xl py-4 shadow-sm">
            <p>Values of community, teamwork, and environmental ethics</p>
          </div>
          <div className="w-54 px-4 rounded-xl py-4 shadow-sm">
            <p>Lesson integration with national curriculum (NERDC/WAEC)</p>
          </div>
          <div className="w-54 px-4 rounded-xl py-4 shadow-sm">
            <p>Hands-on sustainability teaching methods</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-lg">
          Graduates receive recognition as AgriShine Certified Educators.
        </p>
        <button className="bg-primary rounded-lg px-4 py-2 shadow-md hover:primary/70 hover:cursor-pointer text-background font-medium mt-6">
          Apply for the next Cohort!
        </button>
      </div>
    </section>
  );
}
