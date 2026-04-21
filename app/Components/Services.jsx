export default function Services() {
  const services = [
    { icon: "🎨", title: "UI/UX Design", desc: "Clean and user-focused interfaces" },
    { icon: "💻", title: "Web Development", desc: "Fast, scalable web apps" },
    { icon: "🚀", title: "Branding", desc: "Strong identity systems" },
    { icon: "📈", title: "Marketing", desc: "Growth-driven digital strategy" },
  ];

  return (
    <section id="services" className="py-20 px-6 bg-white text-center">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {services.map((s, i) => (
            <div
              key={i}
              className="p-6 border rounded-xl shadow hover:shadow-indigo-100 hover:-translate-y-2 transition"
            >
              <div className="text-4xl mb-2">{s.icon}</div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-gray-600 mt-2">{s.desc}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}