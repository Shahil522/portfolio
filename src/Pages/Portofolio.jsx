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
import Certificate from "../components/Certificate";
import { Code, Award, Boxes } from "lucide-react";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 1, sm: 3 } }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

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

export default function FullWidthTabs() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // your static projects
  const myProjects = [
    {
      id: "1",
      Img: "/fake-news.png",
      Title: "Fake News Detector",
      Description:
        "AI-powered app to detect fake news from text, URL, or image using Tesseract OCR and Flask backend.",
      Link: "https://github.com/Shahil522/Fake-News-Detector",
    },
    {
      id: "2",
      Img: "/weather.png",
      Title: "Weather Forecast App",
      Description:
        "Real-time weather app with auto-location detection, 5-day forecast, and responsive design.",
      Link: "https://github.com/Shahil522/weather-app",
    },
  ];

  return (
    <div
      className="md:px-[10%] px-[5%] w-full sm:mt-0 mt-[3rem] bg-[#030014] overflow-hidden"
      id="Portofolio"
    >
      <div
        className="text-center pb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
          <span
            style={{
              backgroundImage: "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Shahil Mansuri Portfolio
          </span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Explore my journey through software projects, certifications, and technical skills.
        </p>
      </div>

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
                "&.Mui-selected": {
                  color: "#fff",
                },
              },
              "& .MuiTabs-indicator": { height: 0 },
            }}
          >
            <Tab
              icon={<Code className="mb-2 w-5 h-5" />}
              label="Projects"
              {...a11yProps(0)}
            />
            <Tab
              icon={<Award className="mb-2 w-5 h-5" />}
              label="Certificates"
              {...a11yProps(1)}
            />
            <Tab
              icon={<Boxes className="mb-2 w-5 h-5" />}
              label="Tech Stack"
              {...a11yProps(2)}
            />
          </Tabs>
        </AppBar>

        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

        <TabPanel value={value} index={1}>
          <div className="text-gray-400 text-center py-10">
            Currently no certificates to showcase.
          </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {techStacks.map((stack, index) => (
              <TechStackIcon
                key={index}
                TechStackIcon={stack.icon}
                Language={stack.language}
              />
            ))}
          </div>
        </TabPanel>
      </Box>
    </div>
  );
}
