import React from "react";
import {
  UserRound,
  Target,
  Bug,
  Code2,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="About"
      className="relative min-h-screen bg-[#030014] text-white py-24 overflow-hidden"
    >
      {/* Background glow */}

      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative z-10 container mx-auto px-[5%]">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 mb-5">

            <UserRound className="w-4 h-4" />

            About Me

          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">

            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-300 bg-clip-text text-transparent">
              Quality-focused
            </span>

            <br />

            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              QA Tester
            </span>

          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-relaxed">
            I enjoy breaking software before users do, finding defects,
            understanding requirements, and making applications more
            reliable through structured testing.
          </p>

        </div>

        {/* =========================
            MAIN CONTENT
        ========================= */}

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">

          {/* LEFT */}

          <div
            className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 sm:p-10"
            data-aos="fade-right"
          >

            <div className="flex items-center gap-4 mb-7">

              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">

                <Target className="w-6 h-6 text-indigo-400" />

              </div>

              <div>

                <h3 className="text-xl font-semibold">
                  My Approach
                </h3>

                <p className="text-sm text-gray-500">
                  Quality before release
                </p>

              </div>

            </div>

            <p className="text-gray-400 leading-8 mb-5">
              I'm a B.Tech Computer Science graduate with a strong
              interest in Software Testing and Quality Assurance.
              My focus is on understanding how an application should
              behave and then testing it from both a user's and
              tester's perspective.
            </p>

            <p className="text-gray-400 leading-8">
              I work with manual testing, test case design,
              functional testing, regression testing, API testing,
              bug reporting, SQL validation, and Selenium automation
              using Python.
            </p>

          </div>

          {/* RIGHT */}

          <div
            className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-8 sm:p-10"
            data-aos="fade-left"
          >

            <div className="flex items-center gap-3 mb-8">

              <Code2 className="w-6 h-6 text-purple-400" />

              <h3 className="text-xl font-semibold">
                What I Do
              </h3>

            </div>

            <div className="space-y-5">

              <div className="flex gap-4">

                <div className="mt-1">

                  <CheckCircle2 className="w-5 h-5 text-green-400" />

                </div>

                <div>

                  <h4 className="font-medium">
                    Manual Testing
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Test scenarios, test cases, functional,
                    regression and exploratory testing.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="mt-1">

                  <ShieldCheck className="w-5 h-5 text-blue-400" />

                </div>

                <div>

                  <h4 className="font-medium">
                    API Testing
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Validate API requests, responses, status codes
                    and data using Postman.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="mt-1">

                  <Bug className="w-5 h-5 text-yellow-400" />

                </div>

                <div>

                  <h4 className="font-medium">
                    Bug Reporting
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Identify, reproduce, document and track defects
                    with clear evidence and expected results.
                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <div className="mt-1">

                  <Code2 className="w-5 h-5 text-purple-400" />

                </div>

                <div>

                  <h4 className="font-medium">
                    Automation Testing
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Build basic automated browser tests using
                    Selenium and Python.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            TESTING PROCESS
        ========================= */}

        <div
          className="mt-12 rounded-3xl border border-white/10 bg-white/[0.02] p-8 sm:p-10"
          data-aos="fade-up"
        >

          <h3 className="text-2xl font-semibold text-center mb-10">
            My Testing Mindset
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-center hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">

              <div className="text-2xl font-bold text-indigo-400 mb-2">
                01
              </div>

              <h4 className="font-medium">
                Understand
              </h4>

              <p className="text-xs text-gray-500 mt-2">
                Understand requirements and expected behavior.
              </p>

            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-center hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">

              <div className="text-2xl font-bold text-purple-400 mb-2">
                02
              </div>

              <h4 className="font-medium">
                Test
              </h4>

              <p className="text-xs text-gray-500 mt-2">
                Test positive, negative and edge-case scenarios.
              </p>

            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-center hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">

              <div className="text-2xl font-bold text-yellow-400 mb-2">
                03
              </div>

              <h4 className="font-medium">
                Find
              </h4>

              <p className="text-xs text-gray-500 mt-2">
                Identify defects and reproduce them consistently.
              </p>

            </div>

            <div className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 text-center hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">

              <div className="text-2xl font-bold text-green-400 mb-2">
                04
              </div>

              <h4 className="font-medium">
                Improve
              </h4>

              <p className="text-xs text-gray-500 mt-2">
                Verify fixes and ensure stable releases.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;