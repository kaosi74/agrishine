"use client";

import Image from "next/image";

export default function TeacherClimateAcademy() {
  return (
    <section className="text-center">
      <h2 className="font-bold text-md">Teacher Climate Academy</h2>
      <p className="text-sm">Empowering educators as climate mentors</p>
      <p className="text-sm">
        . The Teacher Climate Academy (TCA) equips teachers with tools and
        techniques to deliver sustainability education effectively. Workshops
        and online sessions focus on:
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <Image src="/logo.jpg" width={200} height={200} alt="logo" />
        <div className="grid grid-cols-2 gap-8 px-12">
          <div className="w-54 px-4  py-4 shadow-md">
            <p>Climate-smart farming and agrivoltaic literacy</p>
          </div>
          <div className="w-54 px-4  py-4 shadow-md">
            <p>Values of community, teamwork, and environmental ethics</p>
          </div>
          <div className="w-54 px-4  py-4 shadow-md">
            <p>Lesson integration with national curriculum (NERDC/WAEC)</p>
          </div>
          <div className="w-54 px-4  py-4 shadow-md">
            <p>Hands-on sustainability teaching methods</p>
          </div>
        </div>
      </div>
      <div>
        <p>Graduates receive recognition as AgriShine Certified Educators.</p>
        <button className="bg-green-700 hover:bg-green-600 shadow-md">Apply for the next Cohort!</button>
      </div>
    </section>
  );
}
