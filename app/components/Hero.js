"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowDown, Download, Link as LinkIcon, Send } from "lucide-react";
import { SiGithub, SiInstagram } from "react-icons/si";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
        text-black
        transition-colors
        duration-700
        dark:bg-black
        dark:text-white
      "
    >
      {/* Subtle background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          dark:opacity-[0.06]
        "
      >
        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
            bg-[size:60px_60px]
            dark:bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          "
        />
      </div>

      {/* Main content */}
      <div
        className="
          relative
          mx-auto
          flex
          min-h-screen
          max-w-7xl
          items-center
          px-6
          pb-20
          pt-28
          sm:px-8
          lg:px-12
        "
      >
        <div
          className="
            grid
            w-full
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-10
          "
        >
          {/* =========================
              LEFT CONTENT
          ========================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            {/* Small intro */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mb-4
                text-lg
                font-medium
                tracking-tight
                text-black/50
                dark:text-white/50
              "
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.25,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-5xl
                font-bold
                leading-[0.95]
                tracking-[-0.045em]

                sm:text-6xl
                md:text-7xl
                lg:text-[76px]
                xl:text-[86px]
              "
            >
              Karan
              <br className="sm:hidden" /> Bhandari
            </motion.h1>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.7,
              }}
              className="
                mt-6
                flex
                flex-wrap
                items-center
                gap-x-3
                gap-y-1
                text-base
                font-medium
                text-black/60
                dark:text-white/60

                sm:text-lg
              "
            >
              <span>Developer</span>

              <span className="text-black/25 dark:text-white/25">|</span>

              <span>Problem Solver</span>

              <span className="text-black/25 dark:text-white/25">|</span>

              <span>Lifelong Learner</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.7,
              }}
              className="
                mt-7
                max-w-xl
                text-base
                leading-7
                text-black/55
                dark:text-white/55

                sm:text-lg
                sm:leading-8
              "
            >
              I&apos;m a B.Tech (AI/ML) student at Amrapali University,
              Haldwani. I love building web applications, exploring AI, and
              turning ideas into real-world solutions.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.7,
              }}
              className="
                mt-9
                flex
                flex-wrap
                gap-4
              "
            >
              {/* Resume */}
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                 
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-xl
                  bg-black
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-lg
                  shadow-black/10
                  transition-all
                  duration-300

                  hover:shadow-xl

                  dark:bg-white
                  dark:text-black
                  dark:shadow-white/5
                "
              >
                <Download size={17} />

                <span>Download Resume</span>
              </motion.a>

              {/* Hire Me */}
              <motion.a
                href="#contact"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  rounded-xl
                  border
                  border-black/15
                  bg-transparent
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300

                  hover:bg-black
                  hover:text-white

                  dark:border-white/15
                  dark:text-white
                  dark:hover:bg-white
                  dark:hover:text-black
                "
              >
                <Send size={17} />

                <span>Hire Me</span>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.7,
              }}
              className="
                mt-9
                flex
                items-center
                gap-3
              "
            >
              <SocialLink
                href="https://github.com/Karan-Bhandarii"
                label="GitHub"
              >
                <SiGithub size={21} />
              </SocialLink>

              <SocialLink
                href="https://www.linkedin.com/in/karan-bhandari-78a21737b/"
                label="LinkedIn"
              >
                <LinkIcon size={21} />
              </SocialLink>

              <SocialLink href="#" label="Instagram">
                <SiInstagram size={21} />
              </SocialLink>

              <SocialLink href="#" label="X">
                <span className="text-lg font-medium">𝕏</span>
              </SocialLink>
            </motion.div>
          </motion.div>

          {/* =========================
              RIGHT IMAGE
          ========================= */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              delay: 0.25,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              flex
              min-h-[420px]
              items-end
              justify-center

              lg:min-h-[620px]
              lg:justify-end
            "
          >
            {/* Image glow */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.15, 0.22, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                absolute
                bottom-10
                right-10
                h-72
                w-72
                rounded-full
                bg-black/10
                blur-3xl

                dark:bg-white/10
              "
            />

            {/* Image container */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                relative
                z-10
                h-[430px]
                w-full
                max-w-[440px]
                overflow-hidden
                rounded-[32px]

                sm:h-[500px]

                lg:h-[610px]
                lg:max-w-[500px]
              "
            >
              <Image
                src="/karan.jpeg"
                alt="Karan Bhandari"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="
                  h-full
                  w-full
                  object-cover
                  object-center
                  grayscale
                  transition-all
                  duration-700

                  hover:grayscale-0
                "
              />

              {/* Image overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent

                  dark:from-black/30
                "
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: [0, 8, 0],
          }}
          transition={{
            opacity: {
              delay: 1.2,
              duration: 0.6,
            },
            y: {
              delay: 1.2,
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="
            absolute
            bottom-7
            left-1/2
            -translate-x-1/2

            flex
            flex-col
            items-center
            gap-2

            text-black/40
            transition-colors
            hover:text-black

            dark:text-white/40
            dark:hover:text-white
          "
          aria-label="Scroll to About"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em]">
            Scroll
          </span>

          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.button>
      </div>
    </section>
  );
}

/* =========================================
   SOCIAL LINK
========================================= */

function SocialLink({ href, label, children }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      whileHover={{
        y: -4,
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.92,
      }}
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-black/10
        text-black
        transition-all
        duration-300

        hover:bg-black
        hover:text-white

        dark:border-white/10
        dark:text-white
        dark:hover:bg-white
        dark:hover:text-black
      "
    >
      {children}
    </motion.a>
  );
}
