import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CardProject from "../components/CardProject";
import TechStackIcon from "../components/TechStackIcon";

import AOS from "aos";
import "aos/dist/aos.css";

import { Code, Award, Boxes } from "lucide-react";

/* ============================================================
   TAB PANEL
============================================================ */

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

/* ============================================================
   ACCESSIBILITY
============================================================ */

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

/* ============================================================
   TECH STACK
============================================================ */

const techStacks = [
  { icon: "python.svg", language: "Python" },
  { icon: "java.svg", language: "Java" },
  { icon: "html.svg", language: "HTML" },
  { icon: "css.svg", language: "CSS" },
  { icon: "javascript.svg", language: "JavaScript" },
  { icon: "reactjs.svg", language: "ReactJS" },
  { icon: "flask.svg", language: "Flask" },
  { icon: "nodejs.svg", language: "Node.js" },
  { icon: "bootstrap.svg", language: "Bootstrap" },
  { icon: "firebase.svg", language: "Firebase" },
  { icon: "git.svg", language: "Git" },
  { icon: "vercel.svg", language: "Vercel" },
];

/* ============================================================
   MAIN COMPONENT
============================================================ */

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* ==========================================================
     PROJECTS
  ========================================================== */

  const myProjects = [
    {
      id: "1",
      Img: "/saucedemo.png",
      Title: "SauceDemo QA Automation",
      Description:
        "End-to-end QA automation project using Selenium WebDriver, Python and PyTest. Covers login testing, negative testing, product selection, cart validation, checkout testing and regression testing.",
      Link: "https://github.com/Shahil522/SauceDemo-QA-Automation",
    },

    {
      id: "2",
      Img: "/food-scan.png",
      Title: "FoodScan",
      Description:
        "A Flutter-based food scanning application designed to provide users with a convenient way to scan and explore food information.",
      Link: "https://github.com/Shahil522/FoodScan",
    },
  ];

  /* ==========================================================
     CERTIFICATES
  ========================================================== */

  const certificates = [
    {
      id: "1",
      image: "/certificates/cloud-computing.png",
      title: "Cloud Computing Certificate",
      description:
        "Certificate demonstrating knowledge of cloud computing concepts, services and technologies.",
    },

    {
      id: "2",
      image: "/certificates/selenium.png",
      title: "Selenium Automation Certificate",
      description:
        "Certificate demonstrating knowledge of Selenium automation and software testing practices.",
    },
  ];

  /* ==========================================================
     QA SKILLS
  ========================================================== */

  const qaSkills = [
    "Manual Testing",
    "Functional Testing",
    "Regression Testing",
    "Smoke Testing",
    "Sanity Testing",
    "UI Testing",
    "API Testing",
    "Negative Testing",
    "Test Case Design",
    "Test Scenario Design",
    "Bug Reporting",
    "Defect Tracking",
    "Selenium WebDriver",
    "PyTest",
    "Python",
    "Postman",
    "SQL Testing",
    "Cross-Browser Testing",
    "STLC",
    "SDLC",
  ];

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      {/* ====================================================
          HEADER
      ==================================================== */}

      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto">
          <span
            style={{
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Shahil Mansuri Portfolio
          </span>
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my QA projects, certifications, technical skills and
          software testing experience.
        </p>
      </div>

      {/* ====================================================
          TABS
      ==================================================== */}

      <Box sx={{ width: "100%" }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{
            bgcolor: "transparent",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          className="md:px-4"
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            sx={{
              "& .MuiTab-root": {
                color: "#94a3b8",
                textTransform: "none",
                fontWeight: 600,
                minHeight: "75px",

                "&.Mui-selected": {
                  color: "#ffffff",
                },
              },

              "& .MuiTabs-indicator": {
                height: "3px",
                background:
                  "linear-gradient(90deg, #6366f1, #a855f7)",
              },
            }}
          >
            {/* PROJECTS */}

            <Tab
              icon={<Code className="mb-2 w-5 h-5" />}
              label="QA Projects"
              {...a11yProps(0)}
            />

            {/* CERTIFICATES */}

            <Tab
              icon={<Award className="mb-2 w-5 h-5" />}
              label="Certificates"
              {...a11yProps(1)}
            />

            {/* TECH STACK */}

            <Tab
              icon={<Boxes className="mb-2 w-5 h-5" />}
              label="QA Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        {/* ====================================================
            PROJECT TAB
        ==================================================== */}

        <TabPanel value={value} index={0}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {myProjects.map((project) => (
              <CardProject
                key={project.id}
                Img={project.Img}
                Title={project.Title}
                Description={project.Description}
                Link={project.Link}
                id={project.id}
              />
            ))}
          </div>
        </TabPanel>

        {/* ====================================================
            CERTIFICATE TAB
        ==================================================== */}

        <TabPanel value={value} index={1}>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="
                  group
                  rounded-2xl
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.03]
                  backdrop-blur-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-purple-500/50
                  hover:shadow-[0_0_35px_rgba(139,92,246,0.15)]
                "
              >
                {/* CERTIFICATE IMAGE */}

                <div className="relative overflow-hidden bg-[#08051a]">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="
                      w-full
                      h-[320px]
                      object-contain
                      p-5
                      transition-transform
                      duration-500
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* CERTIFICATE DETAILS */}

                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-white">
                    {certificate.title}
                  </h3>

                  <p className="text-sm text-gray-500 mt-2">
                    {certificate.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>

        {/* ====================================================
            TECH STACK TAB
        ==================================================== */}

        <TabPanel value={value} index={2}>
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              gap-5
            "
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {techStacks.map((stack, index) => (
              <TechStackIcon
                key={index}
                TechStackIcon={stack.icon}
                Language={stack.language}
              />
            ))}
          </div>

          {/* QA SKILLS */}

          <div
            className="mt-12"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h3
              className="
                text-center
                text-2xl
                md:text-3xl
                font-bold
                mb-6
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-indigo-400
                to-purple-400
              "
            >
              QA & Testing Skills
            </h3>

            <div className="flex flex-wrap justify-center gap-3">
              {qaSkills.map((skill, index) => (
                <span
                  key={index}
                  className="
                    px-4
                    py-2
                    rounded-full
                    text-sm
                    text-gray-300
                    border
                    border-white/10
                    bg-white/[0.03]
                    hover:border-purple-500/50
                    hover:text-white
                    hover:bg-purple-500/10
                    transition-all
                    duration-300
                    cursor-default
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}