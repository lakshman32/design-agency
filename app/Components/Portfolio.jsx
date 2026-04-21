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
    <section id="work" className="py-20 px-6 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">Our Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition overflow-hidden"
            >
              <Image
                src={p.img}
                alt={p.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}