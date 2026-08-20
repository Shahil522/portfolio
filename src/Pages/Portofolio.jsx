import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import AOS from "aos";
import "aos/dist/aos.css";

import {
  Award,
  Boxes,
  Bug,
  CheckCircle2,
  Code,
  ExternalLink,
  Eye,
  FileCheck2,
  ShieldCheck,
  X,
} from "lucide-react";

/* =========================================================
   TAB PANEL
========================================================= */

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`portfolio-tabpanel-${index}`}
      aria-labelledby={`portfolio-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `portfolio-tab-${index}`,
    "aria-controls": `portfolio-tabpanel-${index}`,
  };
}

/* =========================================================
   QA SKILLS
========================================================= */

const testingSkills = [
  "Manual Testing",
  "Functional Testing",
  "Regression Testing",
  "Smoke Testing",
  "Sanity Testing",
  "Test Case Design",
  "Bug Reporting",
  "API Testing",
  "Selenium",
  "Python",
  "SQL",
  "Cross-browser Testing",
];

/* =========================================================
   TECH STACK
========================================================= */

const techStack = [
  {
    name: "Selenium",
    icon: "🧪",
    description: "Web Automation",
  },
  {
    name: "Python",
    icon: "🐍",
    description: "Automation",
  },
  {
    name: "Postman",
    icon: "🔌",
    description: "API Testing",
  },
  {
    name: "SQL",
    icon: "🗄️",
    description: "Database Testing",
  },
  {
    name: "Git",
    icon: "🌿",
    description: "Version Control",
  },
  {
    name: "GitHub",
    icon: "◉",
    description: "Code Repository",
  },
  {
    name: "HTML",
    icon: "🌐",
    description: "UI Testing",
  },
  {
    name: "JavaScript",
    icon: "JS",
    description: "Web Testing",
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    id: 1,
    title: "Fake News Detector",
    description:
      "Tested an AI-powered application that accepts news through text, URL and image inputs. Focused on functional testing, input validation, negative scenarios, OCR behavior and API responses.",
    image: "/fake-news.png",
    github: "https://github.com/Shahil522/Fake-News-Detector",
    tags: [
      "Functional Testing",
      "API Testing",
      "Negative Testing",
    ],
  },

  {
    id: 2,
    title: "Food Quality Detection System",
    description:
      "Tested a food quality detection application designed to analyze food images and identify quality-related conditions. Focused on image input validation, functional scenarios, UI behavior, incorrect inputs and result validation.",
    image: "/food-scan.png",
    github: "#",
    tags: [
      "Functional Testing",
      "UI Testing",
      "Test Case Design",
    ],
  },
];

/* =========================================================
   CERTIFICATES
========================================================= */

const certificates = [
  {
    id: 1,
    title: "Cloud Computing",
    subtitle: "Cloud Computing Certificate",
    image: "/certificates/cloud-computing.png",
    description:
      "Certificate demonstrating knowledge and understanding of cloud computing concepts and technologies.",
    gradient:
      "from-blue-500/30 via-indigo-500/20 to-purple-500/20",
  },

  {
    id: 2,
    title: "Selenium Automation Testing",
    subtitle: "Selenium Certificate",
    image: "/certificates/selenium.png",
    description:
      "Certificate focused on Selenium WebDriver and browser automation testing concepts.",
    gradient:
      "from-purple-500/30 via-fuchsia-500/20 to-pink-500/20",
  },
];

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  return (
    <div className="group relative">

      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl">

        {/* Project Image */}

        <div className="relative h-56 overflow-hidden bg-black/40">

          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />

        </div>

        {/* Project Content */}

        <div className="p-6">

          <h3 className="text-xl font-semibold text-white mb-3">
            {project.title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed mb-5">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">

            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full text-xs text-indigo-300 bg-indigo-500/10 border border-indigo-500/20"
              >
                {tag}
              </span>
            ))}

          </div>

          {project.github !== "#" ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/10 text-gray-300 hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 transition-all duration-300"
            >
              <Code className="w-4 h-4" />
              View Project
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-gray-500">
              <Code className="w-4 h-4" />
              Project Showcase
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

/* =========================================================
   CERTIFICATE CARD
========================================================= */

function CertificateCard({ certificate, onView }) {
  return (
    <div className="group relative">

      <div
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${certificate.gradient} blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
      />

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#08061b]/90 backdrop-blur-xl">

        {/* Certificate Image */}

        <div className="relative h-[350px] overflow-hidden bg-black/50">

          <img
            src={certificate.image}
            alt={certificate.title}
            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.03]"
          />

          {/* Hover Overlay */}

          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">

            <button
              onClick={() => onView(certificate)}
              className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20"
            >
              <Eye className="w-5 h-5" />
              View Full Certificate
            </button>

          </div>

        </div>

        {/* Certificate Details */}

        <div className="p-6">

          <div className="flex items-start gap-4">

            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">

              <Award className="w-6 h-6 text-indigo-400" />

            </div>

            <div>

              <h3 className="text-xl font-semibold text-white">
                {certificate.title}
              </h3>

              <p className="text-sm text-indigo-300 mt-1">
                {certificate.subtitle}
              </p>

            </div>

          </div>

          <p className="text-sm text-gray-400 leading-relaxed mt-5 mb-5">
            {certificate.description}
          </p>

          <button
            onClick={() => onView(certificate)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:text-white transition-all duration-300"
          >
            <Eye className="w-4 h-4" />
            View Certificate
          </button>

        </div>

      </div>
    </div>
  );
}

/* =========================================================
   CERTIFICATE MODAL
========================================================= */

function CertificateModal({ certificate, onClose }) {
  if (!certificate) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >

      <div
        className="relative w-full max-w-6xl max-h-[95vh] rounded-2xl border border-white/10 bg-[#050414] overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Modal Header */}

        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

          <div className="flex items-center gap-3">

            <Award className="w-5 h-5 text-indigo-400" />

            <h3 className="text-white font-semibold">
              {certificate.title}
            </h3>

          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>

        </div>

        {/* Full Certificate */}

        <div className="p-4 overflow-auto max-h-[calc(95vh-70px)] flex items-center justify-center">

          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />

        </div>

      </div>

    </div>
  );
}

/* =========================================================
   MAIN PORTFOLIO
========================================================= */

export default function Portofolio() {

  const [value, setValue] = useState(0);

  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  useEffect(() => {

    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
    });

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section
      id="Portofolio"
      className="relative w-full bg-[#030014] overflow-hidden py-24"
    >

      {/* Background Glow */}

      <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="absolute bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 md:px-[10%] px-[5%]">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="text-center mb-10"
          data-aos="fade-up"
        >

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm mb-5">

            <ShieldCheck className="w-4 h-4" />

            Quality Assurance Portfolio

          </div>

          <h2 className="text-4xl md:text-6xl font-bold">

            <span className="text-white">
              QA Testing
            </span>

            <br />

            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Projects & Certifications
            </span>

          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base mt-5 leading-relaxed">
            A collection of my software testing projects,
            certifications, automation skills and quality
            assurance experience.
          </p>

        </div>

        {/* =================================================
            TESTING SKILLS
        ================================================= */}

        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
        >

          {testingSkills.map((skill, index) => (

            <span
              key={index}
              className="px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 text-sm hover:text-white hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:-translate-y-1 transition-all duration-300"
            >
              {skill}
            </span>

          ))}

        </div>

        {/* =================================================
            TABS
        ================================================= */}

        <Box sx={{ width: "100%" }}>

          <AppBar
            position="static"
            elevation={0}
            sx={{
              bgcolor: "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              overflow: "hidden",
              backdropFilter: "blur(15px)",
            }}
          >

            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              sx={{
                minHeight: "75px",

                "& .MuiTab-root": {
                  color: "#94a3b8",
                  textTransform: "none",
                  fontWeight: 600,
                  minHeight: "75px",
                },

                "& .MuiTab-root:hover": {
                  color: "#ffffff",
                },

                "& .Mui-selected": {
                  color: "#ffffff !important",
                },

                "& .MuiTabs-indicator": {
                  height: "3px",
                  background:
                    "linear-gradient(90deg,#6366f1,#a855f7)",
                },
              }}
            >

              <Tab
                icon={<Code className="mb-1 w-5 h-5" />}
                label="QA Projects"
                {...a11yProps(0)}
              />

              <Tab
                icon={<Award className="mb-1 w-5 h-5" />}
                label="Certificates"
                {...a11yProps(1)}
              />

              <Tab
                icon={<Boxes className="mb-1 w-5 h-5" />}
                label="QA Tech Stack"
                {...a11yProps(2)}
              />

            </Tabs>

          </AppBar>

          {/* =================================================
              PROJECTS TAB
          ================================================= */}

          <TabPanel value={value} index={0}>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-7"
              data-aos="fade-up"
            >

              {projects.map((project) => (

                <ProjectCard
                  key={project.id}
                  project={project}
                />

              ))}

            </div>

            {/* Testing Approach */}

            <div
              className="mt-8 p-6 rounded-2xl border border-white/10 bg-white/[0.03]"
              data-aos="fade-up"
            >

              <div className="flex gap-4">

                <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">

                  <Bug className="w-6 h-6 text-indigo-400" />

                </div>

                <div>

                  <h3 className="text-lg font-semibold text-white">
                    My Testing Approach
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mt-2">
                    I focus on understanding requirements,
                    creating test scenarios, executing positive
                    and negative test cases, identifying defects,
                    validating API responses and performing
                    regression testing before release.
                  </p>

                </div>

              </div>

            </div>

          </TabPanel>

          {/* =================================================
              CERTIFICATES TAB
          ================================================= */}

          <TabPanel value={value} index={1}>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              data-aos="fade-up"
            >

              {certificates.map((certificate) => (

                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  onView={setSelectedCertificate}
                />

              ))}

            </div>

            <div
              className="mt-8 flex items-center justify-center gap-3 text-sm text-gray-500"
              data-aos="fade-up"
            >

              <FileCheck2 className="w-4 h-4" />

              Click "View Certificate" to open the certificate
              in full size.

            </div>

          </TabPanel>

          {/* =================================================
              TECH STACK TAB
          ================================================= */}

          <TabPanel value={value} index={2}>

            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-5"
              data-aos="fade-up"
            >

              {techStack.map((tech, index) => (

                <div
                  key={index}
                  className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center hover:bg-white/[0.07] hover:border-indigo-400/30 hover:-translate-y-2 transition-all duration-300"
                >

                  <div className="text-3xl mb-4">
                    {tech.icon}
                  </div>

                  <h3 className="text-white font-semibold">
                    {tech.name}
                  </h3>

                  <p className="text-xs text-gray-500 mt-2">
                    {tech.description}
                  </p>

                </div>

              ))}

            </div>

            {/* QA Areas */}

            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8"
              data-aos="fade-up"
            >

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">

                <CheckCircle2 className="w-7 h-7 text-green-400 mb-4" />

                <h3 className="text-lg font-semibold text-white mb-2">
                  Manual Testing
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Test case design, functional testing,
                  regression, smoke, sanity and exploratory
                  testing.
                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">

                <ShieldCheck className="w-7 h-7 text-blue-400 mb-4" />

                <h3 className="text-lg font-semibold text-white mb-2">
                  API Testing
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  API requests, response validation, status
                  codes, JSON validation and negative scenarios.
                </p>

              </div>

              <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">

                <Code className="w-7 h-7 text-purple-400 mb-4" />

                <h3 className="text-lg font-semibold text-white mb-2">
                  Automation
                </h3>

                <p className="text-sm text-gray-400 leading-relaxed">
                  Selenium WebDriver and Python for browser
                  automation and repetitive testing scenarios.
                </p>

              </div>

            </div>

          </TabPanel>

        </Box>

      </div>

      {/* =================================================
          CERTIFICATE MODAL
      ================================================= */}

      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />

    </section>
  );
}