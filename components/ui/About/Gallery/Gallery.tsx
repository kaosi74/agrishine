import { advisoryBoard, galleryItems } from "@/lib/Gallery";
import Image from "next/image";

export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Team Members</h2>
      <p className="text-surface mb-8">
        AgriShine is led by a diverse team of educators, innovators, and
        professionals united by a shared vision for a climate-smart generation.
      </p>
      <p className="text-surface mb-8">Core team</p>

      <div className="flex flex-wrap justify-center gap-8">
        {galleryItems.map(({ imageSrc, imageAlt, name, role }, index) => (
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
      <div>
        <h3 className="text-2xl font-bold my-8" data-aos="zoom-in">
          ADVISORY BOARD
        </h3>
        <div className="flex flex-wrap justify-center gap-8">
          {advisoryBoard.map(({ imageSrc, imageAlt, name, role }, index) => (
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
        <p>
          Together, this team and board combine vision, professionalism, and
          national inclusivity — advancing AgriShine’s mission to scale
          sustainability across Nigeria’s education system.
        </p>
      </div>
    </section>
  );
}
