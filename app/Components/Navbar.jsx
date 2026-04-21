export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">

      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row md:justify-between items-center gap-3">

        {/* Brand */}
        <div className="font-bold text-xl">
          Vertex Agency
        </div>

        {/* Always visible nav (works on ALL devices) */}
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-700 font-medium">

          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#services" className="hover:text-indigo-600">Services</a>
          <a href="#work" className="hover:text-indigo-600">Work</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>

        </div>

      </div>
    </nav>
  );
}