"use client";

import { motion } from "motion/react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 dark:border-neutral-800">
      {/* =========================
          GRID BACKGROUND
      ========================= */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-50
          dark:opacity-30
          [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
          [background-size:40px_40px]
          dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]
        "
      />

      {/* Soft Glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[400px] w-[400px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-black/[0.025]
          blur-3xl
          dark:bg-white/[0.025]
        "
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:px-12 lg:px-20">
        {/* =========================
            TOP SECTION
        ========================= */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <a
              href="#home"
              className="inline-block text-3xl font-bold tracking-tight text-black dark:text-white"
            >
              KB<span className="text-neutral-400">.</span>
            </a>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600 dark:text-neutral-400">
              Developer, problem solver, and lifelong learner. I enjoy building
              modern web experiences and turning ideas into useful digital
              products.
            </p>

            {/* Email */}
            <a
              href="mailto:karabbhai8@gmail.com"
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                text-sm
                text-neutral-600
                transition-colors
                hover:text-black
                dark:text-neutral-400
                dark:hover:text-white
              "
            >
              <FaEnvelope size={14} />
              karabbhai8@gmail.com
            </a>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Navigation
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#home"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                Home
              </a>

              <a
                href="#about"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                About
              </a>

              <a
                href="#projects"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                Projects
              </a>

              <a
                href="#skills"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                Skills
              </a>

              <a
                href="#contact"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Connect
            </p>

            <div className="flex flex-col gap-3 text-sm">
              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                Resume ↗
              </a>

              {/* Hire Me */}
              <a
                href="#contact"
                className="w-fit font-medium text-black transition-all hover:translate-x-1 dark:text-white"
              >
                Hire Me →
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Karan-Bhandarii"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                GitHub ↗
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/karan-bhandari-78a21737b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit text-neutral-600 transition-all hover:translate-x-1 hover:text-black dark:text-neutral-400 dark:hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* =========================
            DIVIDER
        ========================= */}
        <div className="my-12 h-px bg-neutral-200 dark:bg-neutral-800" />

        {/* =========================
            BOTTOM SECTION
        ========================= */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Copyright */}
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {currentYear} Karan Bhandari. All rights reserved.
          </p>

          {/* Built With */}
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Built with{" "}
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              Next.js
            </span>{" "}
            & a lot of creativity.
          </p>

          {/* Social Icons + Back To Top */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Karan-Bhandarii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-black dark:hover:text-white"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/karan-bhandari-78a21737b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-black dark:hover:text-white"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="text-neutral-500 transition-all hover:-translate-y-1 hover:text-black dark:hover:text-white"
            >
              <FaInstagram size={17} />
            </a>

            {/* Back To Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="
                ml-2
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-full
                border
                border-neutral-300
                text-neutral-500
                transition-all
                hover:-translate-y-1
                hover:border-black
                hover:text-black
                dark:border-neutral-700
                dark:hover:border-white
                dark:hover:text-white
              "
            >
              <FaArrowUp size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
