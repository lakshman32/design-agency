export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-white bg-gradient-to-br from-black via-gray-900 to-indigo-900"
    >

      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Vertex Agency
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-6">
        We design modern digital experiences that are fast, clean, and impactful.
      </p>

      <a
        href="#work"
        className="px-6 py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition"
      >
        View Work
      </a>

    </section>
  );
}