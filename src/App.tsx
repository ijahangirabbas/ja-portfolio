import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, ArrowRight, Moon, Sun, Menu, X, Send, MapPin } from "lucide-react";

export default function EnhancedPortfolio() {
  const [dark, setDark] = useState(true); // Default dark mode
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["hero", "about", "projects", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setCurrentSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const projects = [
    {
      id: 1,
      title: "Number System Converter",
      subtitle: "Algorithmic Precision in C",
      desc: "A robust C implementation featuring decimal, binary, octal & hexadecimal conversion with comprehensive fractional number support and optimized algorithms.",
      tech: ["C", "Algorithms", "Mathematics", "CLI"],
      link: "https://github.com/ijahangirabbas/Number-System-Converter",
      gradient: "from-blue-500 to-cyan-400",
      icon: <Code className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Link Controller",
      subtitle: "Chrome Extension",
      desc: "An intelligent browser extension with custom link behavior management, click counters, sophisticated dark-mode popup interface, and advanced filtering capabilities.",
      tech: ["JavaScript", "Chrome API", "React", "CSS3"],
      link: "https://github.com/yourusername/link-controller",
      gradient: "from-purple-500 to-pink-400",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "AassanKaam",
      subtitle: "Service Marketplace",
      desc: "A comprehensive marketplace platform connecting users with local service providers across Pakistan, featuring real-time matching, secure payments, and location-based services.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      link: "#",
      gradient: "from-green-500 to-emerald-400",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "The Dragon's Quest",
      subtitle: "JavaScript Adventure Game",
      desc: "An immersive text-based terminal adventure featuring dynamic combat systems, comprehensive inventory management, interactive NPCs, and economic gameplay mechanics.",
      tech: ["JavaScript", "Game Development", "Node.js", "CLI"],
      link: "https://github.com/ijahangirabbas/Text-Adventure-Game",
      gradient: "from-orange-500 to-red-400",
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const skills = [
    { name: "Frontend Development", level: 90, color: "bg-blue-500" },
    { name: "Backend Systems", level: 80, color: "bg-green-500" },
    { name: "System Programming", level: 75, color: "bg-purple-500" },
    { name: "DevOps & Security", level: 70, color: "bg-orange-500" }
  ];

  const navItems = [
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <div className={`${dark ? "dark" : ""} transition-all duration-300`}>
      {/* Floating Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "mt-4 mx-4" : "mt-6 mx-6"
        }`}
      >
        <div
          className={`backdrop-blur-xl rounded-2xl border shadow-2xl transition-all duration-500 ${
            scrolled
              ? "bg-slate-900/95 dark:bg-slate-800/95 border-slate-700/50 shadow-slate-900/20"
              : "bg-slate-800/90 dark:bg-slate-900/90 border-slate-600/30 shadow-slate-900/30"
          }`}
        >
          <div
            className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${
              scrolled ? "py-3" : "py-4"
            }`}
          >
            <div
              className={`flex items-center ${
                scrolled ? "justify-center" : "justify-between"
              }`}
            >
              <div
                className={`font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent transition-all duration-500 ${
                  scrolled ? "text-xl" : "text-2xl"
                }`}
              >
                Jahangir Abbas
              </div>

              {/* Desktop Navigation - Hidden when scrolled */}
              {!scrolled && (
                <nav className="hidden md:flex items-center gap-6">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg hover:bg-white/10 ${
                        currentSection === item.href.slice(1)
                          ? "text-cyan-400 bg-cyan-400/10"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    onClick={() => setDark(!dark)}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110 text-gray-300 hover:text-white"
                  >
                    {dark ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                  </button>
                </nav>
              )}

              {/* Mobile Menu Button */}
              {!scrolled && (
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 text-gray-300 hover:text-white"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                    >
                      {item.label}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      setDark(!dark);
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-300"
                  >
                    {dark ? (
                      <Sun className="w-4 h-4" />
                    ) : (
                      <Moon className="w-4 h-4" />
                    )}
                    {dark ? "Light Mode" : "Dark Mode"}
                  </button>
                </div>
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {/* Hero Section with Galaxy Background */}
        <section
          id="hero"
          className="relative pt-24 pb-20 px-6 overflow-hidden min-h-screen flex items-center"
        >
          {/* Galaxy Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-indigo-950" />

          {/* Random Tech Stack Names */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-[10%] left-[15%] text-3xl font-bold text-white transform -rotate-12">
              JavaScript
            </div>
            <div className="absolute top-[25%] right-[20%] text-2xl font-bold text-white transform rotate-6">
              React
            </div>
            <div className="absolute top-[40%] left-[8%] text-4xl font-bold text-white transform rotate-12">
              Node.js
            </div>
            <div className="absolute top-[15%] right-[40%] text-2xl font-bold text-white transform -rotate-6">
              Next.js
            </div>
            <div className="absolute top-[60%] right-[15%] text-3xl font-bold text-white transform rotate-8">
              MongoDB
            </div>
            <div className="absolute bottom-[30%] left-[25%] text-2xl font-bold text-white transform -rotate-15">
              Express
            </div>
            <div className="absolute top-[70%] left-[40%] text-2xl font-bold text-white transform rotate-3">
              Bootstrap
            </div>
            <div className="absolute top-[35%] right-[45%] text-4xl font-bold text-white transform -rotate-8">
              Tailwind
            </div>
            <div className="absolute bottom-[40%] right-[30%] text-2xl font-bold text-white transform rotate-15">
              TypeScript
            </div>
            <div className="absolute top-[80%] right-[50%] text-3xl font-bold text-white transform -rotate-3">
              API
            </div>
            <div className="absolute bottom-[20%] left-[60%] text-2xl font-bold text-white transform rotate-9">
              GitHub
            </div>
            <div className="absolute top-[55%] left-[70%] text-4xl font-bold text-white transform -rotate-12">
              C++
            </div>
            <div className="absolute bottom-[50%] left-[10%] text-2xl font-bold text-white transform rotate-12">
              Docker
            </div>
            <div className="absolute top-[20%] left-[50%] text-3xl font-bold text-white transform -rotate-6">
              AWS
            </div>
            <div className="absolute bottom-[60%] right-[60%] text-2xl font-bold text-white transform rotate-18">
              Git
            </div>
          </div>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

          <div className="relative max-w-7xl mx-auto z-10">
            <div className="text-center space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium shadow-2xl">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                  Available for opportunities
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white">
                  Full-Stack{" "}
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                    Developer
                  </span>
                </h1>

                <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
                  Crafting innovative web solutions with modern technologies.
                  From concept to deployment, I build scalable applications that
                  make a difference.
                </p>
              </div>

              {/* Enhanced Tech Stack Pills */}
              <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
                {[
                  "JavaScript",
                  "React",
                  "Next.js",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "Tailwind CSS",
                  "Bootstrap",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 text-sm font-medium hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-3 px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform"
                >
                  View My Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  Get In Touch
                </a>
              </div>

              <div className="flex items-center justify-center gap-8 pt-8">
                <a
                  href="https://github.com/ijahangirabbas"
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white hover:scale-125 shadow-lg hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-7 h-7" />
                </a>
                <a
                  href="https://linkedin.com/in/ijahangirabbas"
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white hover:scale-125 shadow-lg hover:shadow-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a
                  href="mailto:jahangirabbas658@gmail.com"
                  className="p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 text-white hover:scale-125 shadow-lg hover:shadow-xl"
                >
                  <Mail className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70">
            <div className="flex flex-col items-center gap-3">
              <span className="text-sm font-medium">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center shadow-lg">
                <div className="w-1.5 h-4 bg-white/70 rounded-full mt-2" />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                I'm a student & self-taught developer who focuses on building
                useful tools and learning by shipping. Passionate about clean
                code, user experience, and continuous growth.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">My Journey</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My development journey spans multiple domains - from low-level
                  system programming in C and C++ to modern web development,
                  DevOps practices, and cybersecurity fundamentals. I believe in
                  learning by doing and shipping projects that solve real
                  problems.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Each project I work on teaches me something new, whether it's
                  optimizing algorithms, creating intuitive user interfaces, or
                  architecting scalable systems. I'm always excited to take on
                  new challenges and collaborate with other passionate
                  developers.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Technical Skills</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm font-medium">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="py-20 px-6 bg-gray-100 dark:bg-gray-800/50"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Projects</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                A showcase of projects that demonstrate the breadth and depth of
                my development skills
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="group relative bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-white shadow-lg`}
                      >
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <a
                        href={project.link}
                        className="group/link inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                        View Source
                        <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>

                      <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 hover:shadow-md">
                        Live Demo
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Contact Section */}
        <section
          id="contact"
          className="py-24 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-indigo-700 dark:from-white dark:to-indigo-300 bg-clip-text text-transparent">
                Let's Create Something Extraordinary
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Ready to bring your vision to life? Whether you need a
                full-stack application, Chrome extension, or system-level
                solution, I'm here to help you succeed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Methods */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
                    Get In Touch
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center gap-4 group cursor-pointer text-center">
                      <div className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <Mail className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Email
                        </h4>
                        <a
                          href="mailto:jahangir@example.com"
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium block mb-1"
                        >
                          jahangir@example.com
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Preferred for project inquiries
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 group cursor-pointer text-center">
                      <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <Github className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          GitHub
                        </h4>
                        <a
                          href="https://github.com/yourusername"
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium block mb-1"
                        >
                          @yourusername
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Explore my code & contributions
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 group cursor-pointer text-center">
                      <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <Linkedin className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          LinkedIn
                        </h4>
                        <a
                          href="https://linkedin.com/in/yourusername"
                          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium block mb-1"
                        >
                          Connect professionally
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Let's network & collaborate
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 group cursor-pointer text-center">
                      <div className="p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <Zap className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Response Time
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                          Within 24-48 hours
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Usually much faster!
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 group cursor-pointer text-center">
                      <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <Code className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Development Approach
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                          Agile & iterative
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Regular updates & feedback
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4 group cursor-pointer text-center">
                      <div className="p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                        <Send className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          Available for work
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">
                          Currently accepting
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          New projects & collaborations
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-xl border border-indigo-200 dark:border-indigo-800">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        Ready to start your project?
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Fill out the form below and I'll get back to you within
                      24-48 hours with a detailed proposal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      Start Your Project
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tell me about your project requirements and let's discuss
                      how we can work together.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@company.com"
                          required
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your Company"
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                          Project Type
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 dark:text-white appearance-none"
                        >
                          <option value="">Select project type</option>
                          <option value="web-app">Web Application</option>
                          <option value="mobile-app">Mobile App</option>
                          <option value="chrome-extension">
                            Chrome Extension
                          </option>
                          <option value="api">API Development</option>
                          <option value="system">System Programming</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                        Project Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 dark:text-white appearance-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-15k">$5,000 - $15,000</option>
                        <option value="15k-50k">$15,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                        <option value="discuss">Let's discuss</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-3 text-gray-900 dark:text-white">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project requirements, timeline, and any specific features you need..."
                        required
                        rows={6}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 resize-none"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-4">
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        * Required fields
                      </div>
                      <button
                        type="submit"
                        className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-6 bg-gray-900 dark:bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <div className="font-bold text-xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  Jahangir Abbas
                </div>
                <p className="text-gray-400 text-sm">
                  Full-Stack Developer • Building the future, one line at a time
                </p>
              </div>

              <div className="flex items-center gap-6">
                <a
                  href="https://github.com/ijahangirabbas"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/ijahangirabbas"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:jahangirabbas658@gmail.com"
                  className="p-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2025 Jahangir Abbas. Crafted with passion and modern
                technologies.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}