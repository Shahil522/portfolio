import React, { useEffect, memo, useMemo } from "react";
import { FileText, Code, Award, Globe, ArrowUpRight, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Memoized Components
const Header = memo(() => (
  <div className="text-center lg:mb-8 mb-2 px-[5%]">
    <h2
      className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      About Me
    </h2>
    <p
      className="mt-2 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg flex items-center justify-center gap-2"
      data-aos="zoom-in-up"
      data-aos-duration="800"
    >
      <Sparkles className="w-5 h-5 text-purple-400" />
      Passionate about building smart solutions
      <Sparkles className="w-5 h-5 text-purple-400" />
    </p>
  </div>
));

const ProfileImage = memo(() => (
  <div className="flex justify-end items-center sm:p-12 sm:py-0 sm:pb-0 p-0 py-2 pb-2">
    <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
      <div className="absolute -inset-6 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-600 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500 via-rose-500 to-pink-600 rounded-full blur-2xl animate-pulse-slow opacity-50" />
      </div>
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transition duration-700 group-hover:scale-105">
        <img
          src="/me.png"
          alt="Shahil's Profile"
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-2"
          loading="lazy"
        />
      </div>
    </div>
  </div>
));

const StatCard = memo(({ icon: Icon, color, value, label, description, animation }) => (
  <div data-aos={animation} data-aos-duration={1300} className="relative group">
    <div className="relative z-10 bg-gray-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:scale-105 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full">
      <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${color} opacity-10 group-hover:opacity-20 transition-opacity`} />
      <div className="flex items-center justify-between mb-4">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <span className="text-4xl font-bold text-white">{value}</span>
      </div>
      <p className="text-sm uppercase tracking-wider text-gray-300 mb-2">{label}</p>
      <div className="flex justify-between items-center">
        <p className="text-xs text-gray-400">{description}</p>
        <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition" />
      </div>
    </div>
  </div>
));

const About = () => {
  const stats = useMemo(() => [
    {
      icon: Code,
      color: "from-[#6366f1] to-[#a855f7]",
      value: 2,
      label: "Projects",
      description: "Fake News Detector, Weather Forecast",
      animation: "fade-right",
    },
    {
      icon: Award,
      color: "from-[#a855f7] to-[#6366f1]",
      value: 0,
      label: "Certificates",
      description: "No certificates yet",
      animation: "fade-up",
    },
    {
      icon: Globe,
      color: "from-[#6366f1] to-[#a855f7]",
      value: 1,
      label: "Year Experience",
      description: "Exploring tech since 2023",
      animation: "fade-left",
    },
  ], []);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="h-auto pb-[10%] text-white overflow-hidden px-[5%] lg:px-[10%] mt-10" id="About">
      <Header />
      <div className="w-full mx-auto pt-8 sm:pt-12 relative">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold" data-aos="fade-right">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">Hi, I'm</span>
              <span className="block mt-2 text-gray-200">Shahil Mansuri</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-400 leading-relaxed text-justify" data-aos="fade-right" data-aos-delay="200">
              I’m a B.Tech Computer Science student passionate about technology and problem-solving. Strong in Java, Python, and databases with a love for software development and AI/ML. Currently seeking internships to apply and grow my skills.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/Shahil_CV.pdf" download>
                <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-medium hover:scale-105 shadow-lg transition">
                  <FileText className="w-5 h-5 mr-2 inline" /> Download CV
                </button>
              </a>
              <a href="#Portofolio">
                <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-[#a855f7] text-[#a855f7] font-medium hover:scale-105 hover:bg-[#a855f7]/10 transition">
                  <Code className="w-5 h-5 mr-2 inline" /> View Projects
                </button>
              </a>
            </div>
          </div>
          <ProfileImage />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(About);
