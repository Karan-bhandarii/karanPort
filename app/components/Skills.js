"use client";

import { motion } from "motion/react";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import { SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql } from "react-icons/si";

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "SQL",
    icon: <SiMysql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
];

/* Duplicate the skills so the marquee can loop seamlessly */
const firstRow = [...skills, ...skills];
const secondRow = [...skills, ...skills];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-white
        py-24
        text-black
        transition-colors
        duration-700

        dark:bg-black
        dark:text-white

        lg:py-32
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
          MAIN CONTENT
      ========================================= */}

      <div className="relative z-10">
        {/* =======================================
            HEADER
        ======================================= */}

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
          className="
            mx-auto
            mb-14
            max-w-7xl
            px-6

            sm:px-8

            lg:px-12
          "
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
              Skills
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
            What I Work With.
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-7
              text-black/50

              dark:text-white/50

              md:text-lg
            "
          >
            Technologies I use to build, experiment, automate, and turn ideas
            into working projects.
          </p>
        </motion.div>

        {/* =========================================
            MARQUEE AREA
        ========================================= */}

        <div className="relative mt-10">
          {/* Left fade */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-r
              from-white
              to-transparent

              dark:from-black

              sm:w-24
              lg:w-40
            "
          />

          {/* Right fade */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-0
              z-20
              h-full
              w-16
              bg-gradient-to-l
              from-white
              to-transparent

              dark:from-black

              sm:w-24
              lg:w-40
            "
          />

          {/* =======================================
              ROW 1
          ======================================= */}

          <MarqueeRow items={firstRow} direction="left" duration={35} />

          {/* =======================================
              ROW 2
          ======================================= */}

          <div className="mt-4">
            <MarqueeRow items={secondRow} direction="right" duration={40} />
          </div>
        </div>

        {/* =========================================
            BOTTOM TEXT
        ========================================= */}

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
            duration: 0.7,
          }}
          className="
            mx-auto
            mt-16
            max-w-7xl
            px-6

            sm:px-8

            lg:px-12
          "
        >
          <div
            className="
              border-t
              border-black/10
              pt-6

              dark:border-white/10
            "
          >
            <div
              className="
                flex
                flex-col
                justify-between
                gap-3

                sm:flex-row
                sm:items-center
              "
            >
              <p
                className="
                  text-sm
                  text-black/40

                  dark:text-white/40
                "
              >
                Always learning. Always experimenting.
              </p>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-black/25

                  dark:text-white/25
                "
              >
                11 technologies
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =================================================
   MARQUEE ROW
================================================= */

function MarqueeRow({ items, direction, duration }) {
  const isLeft = direction === "left";

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="
          flex
          w-max
          shrink-0
          gap-4
          pr-4
        "
        animate={{
          x: isLeft ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {items.map((skill, index) => (
          <SkillCard key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

/* =================================================
   SKILL CARD
================================================= */

function SkillCard({ skill }) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="
        group
        flex
        h-24
        w-44
        shrink-0
        items-center
        gap-4
        rounded-2xl
        border
        border-black/10
        bg-black/[0.02]
        px-5
        transition-all
        duration-300

        hover:border-black/25
        hover:bg-black/[0.05]

        dark:border-white/10
        dark:bg-white/[0.025]

        dark:hover:border-white/25
        dark:hover:bg-white/[0.05]

        sm:h-28
        sm:w-52
        sm:px-6
      "
    >
      {/* Icon */}

      <div
        className="
          flex
          h-11
          w-11
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-black/10
          bg-black/[0.03]
          text-xl
          text-black/70
          transition-all
          duration-300

          group-hover:bg-black
          group-hover:text-white

          dark:border-white/10
          dark:bg-white/[0.04]
          dark:text-white/70

          dark:group-hover:bg-white
          dark:group-hover:text-black

          sm:h-12
          sm:w-12
          sm:text-2xl
        "
      >
        {skill.icon}
      </div>

      {/* Name */}

      <span
        className="
          whitespace-nowrap
          text-sm
          font-semibold
          text-black/70

          dark:text-white/70

          sm:text-base
        "
      >
        {skill.name}
      </span>
    </motion.div>
  );
}
