import Image from "next/image";

export default function Portfolio() {
  const projects = [
    { name: "E-commerce Website", img: "/images/project1.jpg" },
    { name: "Startup Landing Page", img: "/images/project2.jpg" },
    { name: "Portfolio Website", img: "/images/project3.jpg" },
    { name: "Mobile App UI", img: "/images/project4.jpg" },
    { name: "Brand Identity Design", img: "/images/project5.jpg" },
    { name: "Marketing Campaign", img: "/images/project6.jpg" },
  ];

  return (
    <section id="work" className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-10">
          Our Work
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-52 sm:h-56 md:h-60">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm sm:text-base font-semibold">
                  {p.name}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}