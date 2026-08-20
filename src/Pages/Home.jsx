import React from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  ShieldCheck,
  Bug,
  TestTube2,
} from "lucide-react";

export default function Home() {
  const scrollToProjects = () => {
    const section = document.getElementById("Portofolio");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030014]"
    >
      {/* Background glow */}

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >

            {/* Small badge */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-6"
            >

              <ShieldCheck className="w-4 h-4" />

              QA Engineer • Software Tester

            </motion.div>

            {/* Main heading */}

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
            >

              <span className="text-white">
                Hi, I'm
              </span>

              <br />

              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Shahil Mansuri
              </span>

            </motion.h1>

            {/* Role */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-5 text-2xl md:text-3xl font-semibold text-gray-200"
            >
              Software Tester
              <span className="text-indigo-400"> & </span>
              QA Engineer
            </motion.h2>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg leading-relaxed mx-auto lg:mx-0"
            >
              B.Tech Computer Science graduate passionate about
              finding bugs, improving software quality, and
              delivering reliable user experiences through
              thoughtful testing and automation.
            </motion.p>

            {/* Testing skills */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mt-7"
            >

              <SkillBadge
                icon={<TestTube2 className="w-4 h-4" />}
                text="Manual Testing"
              />

              <SkillBadge
                icon={<Bug className="w-4 h-4" />}
                text="Bug Reporting"
              />

              <SkillBadge
                icon={<ShieldCheck className="w-4 h-4" />}
                text="Selenium"
              />

              <SkillBadge
                icon={<TestTube2 className="w-4 h-4" />}
                text="API Testing"
              />

            </motion.div>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-9"
            >

              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all duration-300"
              >

                View My Projects

                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />

              </button>

              <a
                href="/Shahil_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-gray-300 font-semibold hover:text-white hover:bg-white/[0.08] hover:border-indigo-400/30 hover:-translate-y-1 transition-all duration-300"
              >

                <Download className="w-4 h-4" />

                Download Resume

              </a>

            </motion.div>

            {/* Social links */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="flex justify-center lg:justify-start gap-3 mt-8"
            >

              <SocialButton
                href="https://github.com/Shahil522"
                icon={<Github className="w-5 h-5" />}
                label="GitHub"
              />

              <SocialButton
                href="#"
                icon={<Linkedin className="w-5 h-5" />}
                label="LinkedIn"
              />

              <SocialButton
                href="mailto:sm6720781@gmail.com"
                icon={<Mail className="w-5 h-5" />}
                label="Email"
              />

            </motion.div>

          </motion.div>

          {/* =====================================================
              RIGHT SIDE — QA VISUAL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.3,
            }}
            className="relative flex justify-center"
          >

            {/* Outer glow */}

            <div className="absolute w-[300px] h-[300px] md:w-[430px] md:h-[430px] rounded-full bg-indigo-600/10 blur-[100px]" />

            {/* Main card */}

            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md"
            >

              <div className="rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-xl p-6 md:p-8 shadow-2xl">

                {/* Terminal header */}

                <div className="flex items-center gap-2 mb-7">

                  <span className="w-3 h-3 rounded-full bg-red-400/70" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                  <span className="w-3 h-3 rounded-full bg-green-400/70" />

                  <span className="ml-3 text-xs text-gray-500 font-mono">
                    qa-testing.sh
                  </span>

                </div>

                {/* Terminal */}

                <div className="font-mono text-sm md:text-base">

                  <p className="text-gray-500">
                    $ ./run-tests
                  </p>

                  <p className="text-indigo-400 mt-4">
                    Starting QA test suite...
                  </p>

                  <div className="space-y-4 mt-6">

                    <TestStatus
                      name="Functional Tests"
                      status="PASSED"
                    />

                    <TestStatus
                      name="API Tests"
                      status="PASSED"
                    />

                    <TestStatus
                      name="UI Tests"
                      status="PASSED"
                    />

                    <TestStatus
                      name="Regression Tests"
                      status="PASSED"
                    />

                  </div>

                  <div className="mt-7 pt-5 border-t border-white/10">

                    <p className="text-green-400">
                      ✓ Test execution completed
                    </p>

                    <p className="text-gray-500 mt-2">
                      0 critical defects found
                    </p>

                  </div>

                </div>

              </div>

              {/* Floating QA badges */}

              <FloatingBadge
                className="-top-5 -left-8"
                icon={<Bug className="w-4 h-4" />}
                text="Find Bugs"
              />

              <FloatingBadge
                className="-bottom-5 -right-8"
                icon={<ShieldCheck className="w-4 h-4" />}
                text="Ensure Quality"
              />

            </motion.div>

          </motion.div>

        </div>

        {/* Scroll indicator */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-20"
        >

          <button
            onClick={scrollToProjects}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-gray-300 transition"
          >

            <span className="text-xs tracking-widest uppercase">
              Explore Portfolio
            </span>

            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>

          </button>

        </motion.div>

      </div>

    </section>
  );
}

/* =========================================================
   SMALL COMPONENTS
========================================================= */

function SkillBadge({ icon, text }) {
  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-gray-400 text-sm hover:text-white hover:border-indigo-400/30 hover:bg-indigo-500/10 transition-all duration-300">
      {icon}
      {text}
    </div>
  );
}

function SocialButton({ href, icon, label }) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? "_self" : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      aria-label={label}
      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

function TestStatus({ name, status }) {
  return (
    <div className="flex items-center justify-between gap-4">

      <span className="text-gray-400">
        {name}
      </span>

      <span className="flex items-center gap-2 text-green-400 text-xs">
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        {status}
      </span>

    </div>
  );
}

function FloatingBadge({ className, icon, text }) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute ${className} hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0b0920]/90 backdrop-blur-xl border border-white/10 shadow-xl text-sm text-gray-300`}
    >
      {icon}
      {text}
    </motion.div>
  );
}