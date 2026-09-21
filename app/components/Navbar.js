"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Moon, Sun, Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      // Theme state must be hydrated from client-only localStorage.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    } else {
      // Default = DARK
      setDarkMode(true);
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }
  }, []);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const nextTheme = !darkMode;

    setDarkMode(nextTheme);

    if (nextTheme) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 right-0 top-0 z-50"
      >
        <motion.nav
          animate={{
            width: scrolled ? "92%" : "100%",
            marginTop: scrolled ? 12 : 0,
            borderRadius: scrolled ? 20 : 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            border
            border-black/10
            bg-white
            text-black
            transition-colors
            duration-500

            dark:border-white/10
            dark:bg-black
            dark:text-white
          "
        >
          <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
            {/* LOGO */}
            <Link href="#home" onClick={closeMenu}>
              <motion.div
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-xl

                  bg-black
                  text-white

                  transition-colors
                  duration-500

                  dark:bg-white
                  dark:text-black
                "
              >
                <span className="text-lg font-bold tracking-tight">KB</span>
              </motion.div>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2"
                >
                  {/* TEXT */}
                  <span
                    className="
                      relative z-10
                      text-sm
                      font-medium

                      text-black/60
                      group-hover:text-black

                      transition-colors
                      duration-300

                      dark:text-white/60
                      dark:group-hover:text-white
                    "
                  >
                    {link.name}
                  </span>

                  {/* HOVER BACKGROUND */}
                  <motion.span
                    className="
                      absolute
                      inset-0
                      -z-0
                      rounded-lg

                      bg-black/[0.05]

                      dark:bg-white/[0.07]
                    "
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileHover={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  />

                  {/* UNDERLINE */}
                  <motion.span
                    className="
                      absolute
                      bottom-0.5
                      left-1/2
                      h-[1px]
                      w-0
                      -translate-x-1/2

                      bg-black

                      dark:bg-white
                    "
                    whileHover={{
                      width: "50%",
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                  />
                </Link>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-2">
              {/* THEME BUTTON */}
              <motion.button
                onClick={toggleTheme}
                whileHover={{ scale: 1.08 }}
                whileTap={{
                  scale: 0.9,
                  rotate: -15,
                }}
                aria-label="Toggle theme"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-black/10

                  bg-black/[0.04]
                  text-black

                  hover:bg-black/[0.08]

                  transition-colors
                  duration-300

                  dark:border-white/10
                  dark:bg-white/[0.05]
                  dark:text-white
                  dark:hover:bg-white/[0.1]
                "
              >
                <AnimatePresence mode="wait">
                  {darkMode ? (
                    <motion.div
                      key="sun"
                      initial={{
                        rotate: -90,
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: 90,
                        scale: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <Sun size={17} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{
                        rotate: 90,
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={{
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                      }}
                      exit={{
                        rotate: -90,
                        scale: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                    >
                      <Moon size={17} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>

              {/* MOBILE MENU */}
              <motion.button
                onClick={() => setMenuOpen(!menuOpen)}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-black/10

                  bg-black/[0.04]
                  text-black

                  dark:border-white/10
                  dark:bg-white/[0.05]
                  dark:text-white

                  md:hidden
                "
              >
                {menuOpen ? <X size={19} /> : <Menu size={19} />}
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="
                mx-auto
                mt-2
                w-[92%]
                overflow-hidden
                rounded-2xl

                border
                border-black/10

                bg-white
                text-black

                dark:border-white/10
                dark:bg-black
                dark:text-white

                md:hidden
              "
            >
              <div className="p-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="
                      group
                      flex
                      items-center
                      justify-between
                      rounded-xl
                      px-4
                      py-3.5

                      text-sm
                      font-medium

                      text-black/70
                      hover:bg-black/[0.05]
                      hover:text-black

                      dark:text-white/70
                      dark:hover:bg-white/[0.06]
                      dark:hover:text-white

                      transition-all
                      duration-300
                    "
                  >
                    <span>{link.name}</span>

                    <ArrowUpRight
                      size={16}
                      className="
                        opacity-0
                        -translate-x-2

                        transition-all
                        duration-300

                        group-hover:translate-x-0
                        group-hover:opacity-100
                      "
                    />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
