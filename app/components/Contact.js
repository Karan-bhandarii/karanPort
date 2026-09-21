"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-20"
    >
      {/* =========================
          GRID BACKGROUND
      ========================= */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-50
          dark:opacity-30
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.07)_1px,transparent_1px)]
          [background-size:40px_40px]
          dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)]
        "
      />

      {/* Soft center glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[500px] w-[500px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-black/[0.03]
          blur-3xl
          dark:bg-white/[0.03]
        "
      />

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* =========================
            HEADING
        ========================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400">
            Get in touch
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-black dark:text-white md:text-6xl">
            Let&apos;s work
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">
              together.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-neutral-600 dark:text-neutral-400">
            Have a project, opportunity, or just want to say hello? Feel free to
            send me a message.
          </p>
        </motion.div>

        {/* =========================
            CONTENT
        ========================= */}
        <div className="grid gap-14 lg:grid-cols-2">
          {/* =========================
              LEFT SIDE
          ========================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-neutral-200/70
              bg-white/40
              p-8
              backdrop-blur-sm
              dark:border-neutral-800/70
              dark:bg-black/20
            "
          >
            <p className="mb-3 text-sm text-neutral-500 dark:text-neutral-400">
              Email
            </p>

            <a
              href="mailto:karabbhai8@gmail.com"
              className="group flex items-center gap-3 text-lg font-medium text-black dark:text-white"
            >
              <FaEnvelope className="text-neutral-500 transition-transform duration-300 group-hover:-translate-y-1" />

              <span className="border-b border-transparent transition-all duration-300 group-hover:border-black dark:group-hover:border-white">
                karabbhai8@gmail.com
              </span>
            </a>

            {/* Socials */}
            <div className="mt-12">
              <p className="mb-5 text-sm text-neutral-500 dark:text-neutral-400">
                Find me online
              </p>

              <div className="flex gap-5">
                <a
                  href="https://github.com/Karan-Bhandarii"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-black dark:hover:text-white"
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/karan-bhandari-78a21737b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-black dark:hover:text-white"
                >
                  <FaLinkedin size={22} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-neutral-500 transition-all duration-300 hover:-translate-y-1 hover:text-black dark:hover:text-white"
                >
                  <FaInstagram size={22} />
                </a>
              </div>
            </div>

            {/* Small decorative line */}
            <div className="mt-20 h-px w-full bg-neutral-200 dark:bg-neutral-800" />

            <p className="mt-5 text-sm leading-6 text-neutral-500 dark:text-neutral-500">
              Open to internships, collaborations, freelance projects, and
              interesting ideas.
            </p>
          </motion.div>

          {/* =========================
              RIGHT SIDE — FORM
          ========================= */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-neutral-200/70
              bg-white/40
              p-8
              backdrop-blur-sm
              dark:border-neutral-800/70
              dark:bg-black/20
            "
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm text-neutral-500 dark:text-neutral-400"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="
                  w-full
                  border-b
                  border-neutral-300
                  bg-transparent
                  py-3
                  text-black
                  outline-none
                  placeholder:text-neutral-400
                  transition-colors
                  focus:border-black
                  dark:border-neutral-700
                  dark:text-white
                  dark:focus:border-white
                "
              />
            </div>

            {/* Email */}
            <div className="mt-8">
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-neutral-500 dark:text-neutral-400"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="
                  w-full
                  border-b
                  border-neutral-300
                  bg-transparent
                  py-3
                  text-black
                  outline-none
                  placeholder:text-neutral-400
                  transition-colors
                  focus:border-black
                  dark:border-neutral-700
                  dark:text-white
                  dark:focus:border-white
                "
              />
            </div>

            {/* Message */}
            <div className="mt-8">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-neutral-500 dark:text-neutral-400"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="
                  w-full
                  resize-none
                  border-b
                  border-neutral-300
                  bg-transparent
                  py-3
                  text-black
                  outline-none
                  placeholder:text-neutral-400
                  transition-colors
                  focus:border-black
                  dark:border-neutral-700
                  dark:text-white
                  dark:focus:border-white
                "
              />
            </div>

            {/* Button */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="submit"
                disabled={loading}
                className="
                  rounded-full
                  bg-black
                  px-7
                  py-3
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-neutral-800
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                  dark:bg-white
                  dark:text-black
                  dark:hover:bg-neutral-200
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <p
                  className={`text-sm ${
                    status.includes("successfully")
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
