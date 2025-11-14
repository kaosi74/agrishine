import Image from "next/image";
import React from "react";

export default function Movement() {
  return (
    <section className="text-center px-12 md:px-22 my-12">
      <h2 className="text-2xl font-bold mb-4">JOIN THE MOVEMENT</h2>
      <p className="text-surface mb-8">
        AgriShine is more than an initiative — it’s a national classroom for
        sustainability. We invite schools, teachers, donors, and communities to
        be part of the change. Join us in transforming education into an engine
        for sustainable development. Together, we can cultivate a new generation
        that thinks critically, acts responsibly, and grows sustainably.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-around mx-auto">
        <div className="flex flex-col items-center w-100">
          <Image
            src="/Rectangle 47.png"
            alt="Students in library"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
            priority
          />
          <div className="mt-6 flex flex-col md:flex-row justify-between w-full gap-y-6">
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 text-sm  duration-400 ease-in-out">
              Join as a School
            </button>
            <button className="border border-secondary bg-white text-black py-2 px-4 rounded hover:bg-secondary/30 duration-400 ease-in-out">
              Partner with us
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center w-100">
          <Image
            src="/Rectangle 48.png"
            alt="Hands around plants"
            width={600}
            height={400}
            className="w-full h-auto object-cover rounded-md"
            priority
          />
          <div className="mt-6 flex flex-col md:flex-row justify-between w-full gap-y-6">
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 text-sm">
              Sponsor a Hub
            </button>
            <button className="border border-secondary bg-white text-black py-2 px-4 rounded hover:bg-secondary/30 duration-400 ease-in-out">
              Explore Learning Hub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
