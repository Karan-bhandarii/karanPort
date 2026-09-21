"use client";

import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";

const projects = [
  {
    number: "01",
    title: "FocusFlow",
    type: "Full Stack Web App",
    description:
      "A productivity platform built to help users organize tasks, focus with Pomodoro sessions, maintain streaks, and manage their workflow.",
    technologies: ["Next.js", "React", "Express", "MongoDB"],
    github: "https://github.com/Karan-Bhandarii",
    live: "https://focus-flow-2zto.vercel.app/",
  },

  {
    number: "02",
    title: "Personal Portfolio",
    type: "Frontend / Creative Development",
    description:
      "A minimal personal portfolio designed to showcase my projects, skills, learning journey, and the things I'm building.",
    technologies: ["Next.js", "Tailwind CSS", "Motion", "JavaScript"],
    github: "https://github.com/Karan-Bhandarii",
    live: "#",
  },

  {
    number: "03",
    title: "Next Build",
    type: "Currently Exploring",
    description:
      "Something new is being built. I'm experimenting with AI, automation, and practical ideas that solve real problems.",
    technologies: ["AI", "Python", "Automation", "Coming Soon"],
    github: "#",
    live: "#",
    comingSoon: true,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
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
            HEADER
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
          className="
            mb-16
            flex
            flex-col
            justify-between
            gap-8

            md:flex-row
            md:items-end
          "
        >
          {/* Left */}

          <div>
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
                Selected Work
              </span>
            </div>

            <h2
              className="
                text-4xl
                font-bold
                tracking-[-0.04em]

                sm:text-5xl

                md:text-6xl
              "
            >
              Things I&apos;ve Built.
            </h2>
          </div>

          {/* Right description */}

          <p
            className="
              max-w-md
              text-sm
              leading-7
              text-black/50

              dark:text-white/50

              md:text-base
            "
          >
            A collection of projects where I experiment, solve problems, learn
            new technologies, and turn ideas into working products.
          </p>
        </motion.div>

        {/* =========================================
            PROJECTS
        ========================================= */}

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.number} project={project} index={index} />
          ))}
        </div>

        {/* =========================================
            BOTTOM STATEMENT
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
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            mt-20
            border-t
            border-black/10
            pt-8

            dark:border-white/10
          "
        >
          <div
            className="
              flex
              flex-col
              justify-between
              gap-4

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
              More ideas. More experiments. More builds.
            </p>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-black/30

                dark:text-white/30
              "
            >
              Always building
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =================================================
   PROJECT CARD
================================================= */

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        delay: index * 0.08,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -4,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-black/10
        bg-black/[0.02]
        transition-all
        duration-500

        hover:border-black/20
        hover:bg-black/[0.035]

        dark:border-white/10
        dark:bg-white/[0.025]

        dark:hover:border-white/20
        dark:hover:bg-white/[0.045]
      "
    >
      {/* Subtle hover line */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-0
          bg-black
          transition-all
          duration-500

          group-hover:w-full

          dark:bg-white
        "
      />

      <div
        className="
          grid
          gap-8
          p-6

          sm:p-8

          lg:grid-cols-[90px_1fr_auto]
          lg:items-center
          lg:gap-10
          lg:p-10
        "
      >
        {/* =======================================
            NUMBER
        ======================================= */}

        <div>
          <span
            className="
              text-xs
              font-medium
              tracking-[0.2em]
              text-black/30

              dark:text-white/30
            "
          >
            {project.number}
          </span>
        </div>

        {/* =======================================
            PROJECT INFO
        ======================================= */}

        <div>
          {/* Type */}

          <div
            className="
              mb-3
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-black/40

                dark:bg-white/40
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.18em]
                text-black/40

                dark:text-white/40
              "
            >
              {project.type}
            </span>
          </div>

          {/* Title */}

          <h3
            className="
              text-2xl
              font-semibold
              tracking-[-0.025em]
              text-black

              dark:text-white

              sm:text-3xl
            "
          >
            {project.title}
          </h3>

          {/* Description */}

          <p
            className="
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-black/50

              dark:text-white/50

              md:text-base
            "
          >
            {project.description}
          </p>

          {/* Technologies */}

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-full
                  border
                  border-black/10
                  px-3
                  py-1.5
                  text-[11px]
                  font-medium
                  text-black/50

                  dark:border-white/10
                  dark:text-white/50
                "
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* =======================================
            ACTIONS
        ======================================= */}

        <div
          className="
            flex
            items-center
            gap-3

            lg:flex-col
            lg:items-stretch
          "
        >
          {/* GitHub */}

          {project.comingSoon ? (
            <span
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-black/10
                px-4
                py-3
                text-xs
                font-medium
                text-black/35

                dark:border-white/10
                dark:text-white/35
              "
            >
              In Progress
            </span>
          ) : (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-black
                px-4
                py-3
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300

                hover:bg-black/80

                dark:bg-white
                dark:text-black

                dark:hover:bg-white/80
              "
            >
              <SiGithub size={15} />
              GitHub
            </motion.a>
          )}

          {/* Live */}

          {!project.comingSoon && project.live !== "#" && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-black/10
                px-4
                py-3
                text-xs
                font-semibold
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
              <ExternalLink size={15} />
              Live
            </motion.a>
          )}
        </div>
      </div>

      {/* =======================================
          CORNER ARROW
      ======================================= */}

      <div
        className="
          pointer-events-none
          absolute
          right-6
          top-6
          opacity-0
          transition-all
          duration-500

          group-hover:-translate-y-1
          group-hover:translate-x-1
          group-hover:opacity-100

          sm:right-8
          sm:top-8
        "
      >
        <ArrowUpRight
          size={22}
          strokeWidth={1.5}
          className="
            text-black/40

            dark:text-white/40
          "
        />
      </div>
    </motion.article>
  );
}
