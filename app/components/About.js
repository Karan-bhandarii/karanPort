"use client";

import { motion } from "motion/react";

import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCode,
  FaBrain,
  FaDumbbell,
  FaGamepad,
  FaYoutube,
  FaExternalLinkAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-white
        text-black
        transition-colors
        duration-700

        dark:bg-black
        dark:text-white
      "
    >
      {/* =========================================
          BACKGROUND GRID
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          transition-opacity
          duration-700

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

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-6
          py-24

          sm:px-8

          lg:px-12
          lg:py-32
        "
      >
        {/* =========================================
            SECTION HEADER
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14"
        >
          {/* Small heading */}

          <div
            className="
              mb-5
              flex
              items-center
              gap-4
            "
          >
            <span
              className="
                h-[2px]
                w-12
                bg-black/60

                dark:bg-white/60
              "
            />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.35em]
                text-black/45

                dark:text-white/45
              "
            >
              About Me
            </span>
          </div>

          {/* Main heading */}

          <h2
            className="
              text-4xl
              font-bold
              tracking-[-0.04em]

              sm:text-5xl

              md:text-6xl
            "
          >
            Who Am I?
          </h2>
        </motion.div>

        {/* =========================================
            MAIN CONTENT
        ========================================= */}

        <div
          className="
            grid
            gap-14

            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-10
          "
        >
          {/* =======================================
              LEFT SIDE
          ======================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Intro */}

            <p
              className="
                max-w-2xl
                text-lg
                leading-8
                text-black/60

                dark:text-white/60

                md:text-xl
                md:leading-9
              "
            >
              I&apos;m{" "}
              <span
                className="
                  font-semibold
                  text-black

                  dark:text-white
                "
              >
                Karan
              </span>
              , a B.Tech AI/ML student who enjoys building things that move from
              an idea on paper to something people can actually use.
            </p>

            {/* Second paragraph */}

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-black/60

                dark:text-white/60

                md:text-xl
                md:leading-9
              "
            >
              My current playground is a mix of{" "}
              <span
                className="
                  font-medium
                  text-black

                  dark:text-white
                "
              >
                full-stack development, AI, Python, automation and Java + DSA
              </span>
              .
            </p>

            {/* Third paragraph */}

            <p
              className="
                mt-6
                max-w-2xl
                text-lg
                leading-8
                text-black/60

                dark:text-white/60

                md:text-xl
                md:leading-9
              "
            >
              I like learning by building, breaking things, fixing them, and
              then asking myself how I could have built them better in the first
              place.
            </p>

            {/* =======================================
                PERSONAL APPROACH
            ======================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.15,
                duration: 0.7,
              }}
              className="
                mt-10
                border-l-2
                border-black/20
                pl-6

                dark:border-white/20
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-black/40

                  dark:text-white/40
                "
              >
                How I think
              </p>

              <p
                className="
                  mt-3
                  text-lg
                  font-medium
                  leading-8
                  text-black

                  dark:text-white

                  md:text-xl
                "
              >
                Build it → understand it → improve it.
              </p>
            </motion.div>

            {/* =======================================
                INTERESTS
            ======================================= */}

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "AI / ML",
                "Python",
                "Java + DSA",
                "Automation",
                "Full Stack",
                "Problem Solving",
              ].map((item, index) => (
                <motion.span
                  key={item}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.06,
                    duration: 0.4,
                  }}
                  className="
                    rounded-full
                    border
                    border-black/10
                    bg-black/[0.02]
                    px-4
                    py-2
                    text-xs
                    font-medium
                    text-black/60
                    transition-all
                    duration-300

                    hover:border-black/25
                    hover:bg-black
                    hover:text-white

                    dark:border-white/10
                    dark:bg-white/[0.03]
                    dark:text-white/60

                    dark:hover:border-white/25
                    dark:hover:bg-white
                    dark:hover:text-black
                  "
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* =======================================
              RIGHT SIDE
          ======================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              border-t
              border-black/10

              dark:border-white/10

              lg:border-l
              lg:border-t-0
              lg:pl-12
            "
          >
            {/* EDUCATION */}

            <InfoBlock icon={<FaGraduationCap />} title="Education">
              <p
                className="
                  font-medium
                  text-black

                  dark:text-white
                "
              >
                Amrapali University, Haldwani
              </p>

              <p
                className="
                  mt-2
                  text-black/50

                  dark:text-white/50
                "
              >
                B.Tech (AI/ML)
                <span className="mx-2">|</span>
                2025 — 2029
              </p>
            </InfoBlock>

            {/* CURRENTLY BUILDING */}

            <InfoBlock icon={<FaCode />} title="Currently Building">
              <p
                className="
                  leading-7
                  text-black/55

                  dark:text-white/55
                "
              >
                Full-stack projects with{" "}
                <span
                  className="
                    font-medium
                    text-black

                    dark:text-white
                  "
                >
                  AI and real-world use cases
                </span>
                .
              </p>
            </InfoBlock>

            {/* LOCATION */}

            <InfoBlock icon={<FaMapMarkerAlt />} title="Based In" last>
              <p
                className="
                  text-black/50

                  dark:text-white/50
                "
              >
                Haldwani, Uttarakhand, India
              </p>
            </InfoBlock>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =================================================
   INFO BLOCK
================================================= */

function InfoBlock({ icon, title, children, last = false }) {
  return (
    <div
      className={`
        flex
        gap-5
        py-7

        ${!last ? "border-b border-black/10 dark:border-white/10" : ""}
      `}
    >
      {/* Icon */}

      <div
        className="
          mt-1
          shrink-0
          text-lg
          text-black/50

          dark:text-white/50
        "
      >
        {icon}
      </div>

      {/* Content */}

      <div>
        <h3
          className="
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            text-black/40

            dark:text-white/40
          "
        >
          {title}
        </h3>

        <div className="mt-3 text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
}

/* =================================================
   MINI ITEM
================================================= */

function MiniItem({ icon, text }) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        text-sm
        text-black/55

        dark:text-white/55
      "
    >
      <span
        className="
          text-xs
          text-black/50

          dark:text-white/50
        "
      >
        {icon}
      </span>

      <span>{text}</span>
    </div>
  );
}

/* =================================================
   FEATURE
================================================= */

function Feature({ number, title, text }) {
  return (
    <div
      className="
        border-b
        border-black/10
        p-6

        last:border-b-0

        dark:border-white/10

        sm:border-b-0
        sm:border-r
        sm:last:border-r-0
      "
    >
      <span
        className="
          text-xs
          font-medium
          text-black/25

          dark:text-white/25
        "
      >
        {number}
      </span>

      <h3
        className="
          mt-5
          text-lg
          font-semibold
          text-black

          dark:text-white
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-2
          text-sm
          leading-6
          text-black/45

          dark:text-white/45
        "
      >
        {text}
      </p>
    </div>
  );
}
