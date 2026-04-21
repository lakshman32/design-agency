"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    setSuccess("✔ Message sent successfully!");
    setForm({ name: "", email: "", message: "" });

    setTimeout(() => setSuccess(""), 3000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-slate-950 via-gray-900 to-indigo-950 text-white"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-3">
          Get in Touch
        </h2>

        <p className="text-gray-400 mb-10">
          Let’s build something meaningful together.
        </p>

        {/* Form Container */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl max-w-2xl mx-auto">

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              className="p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              className="p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="p-3 rounded-lg bg-white text-black outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="submit"
              className="py-3 rounded-lg font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] transition shadow-md"
            >
              Send Message
            </button>

          </form>

          {/* Success Message */}
          {success && (
            <p className="mt-4 text-green-400 font-medium">
              {success}
            </p>
          )}

        </div>
      </div>
    </section>
  );
}