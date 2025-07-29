import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Instagram, ChevronDown, Menu, X, ExternalLink, Code, Palette, Smartphone, Globe } from 'lucide-react';
import profileImg from "../assets/profile.jpg"
import teamworkImg from "../assets/teamwork.jpg";
import techfoImg from "../assets/techfo.png";
import healtistractImg from "../assets/healtistract.png";
import brailliantImg from "../assets/brailliant.png";
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'React.js', level: 80, icon: <Code className="w-6 h-6" /> },
    { name: 'HTML', level: 80, icon: <Code className="w-6 h-6" /> },
    { name: 'UI/UX Design', level: 90, icon: <Palette className="w-6 h-6" /> },
    { name: 'Mobile Development', level: 50, icon: <Smartphone className="w-6 h-6" /> },
    { name: 'Web Development', level: 80, icon: <Globe className="w-6 h-6" /> },
    { name: 'Tailwind CSS', level: 70, icon: <Code className="w-6 h-6" /> }
  ];

  const projects = [
    {
      title: 'Faculty Support Platform',
      description: 'A faculty support system that simplifies the organization and documentation of academic and non-academic programs.',
      image: techfoImg, 
      tech: ['React', 'Tailwind CSS', 'Laravel', 'Firebase'],
      github: 'https://github.com/elmiraa89/iprestasi.git',
      live: 'https://techfo.fik.upnvj.ac.id/landingPage'
    },
    {
      title: 'Health Tech Platform Design',
      description: 'Mobile-based application designed for providing engaging ways to live a healthy lifestyle.',
      image: healtistractImg,
      tech: ['Figma'],
      live: 'https://bit.ly/AplikasiHealtistract'
    },
    {
      title: 'Disability Support Platform Design',
      description: 'Mobile-based application designed for people with visual impairments.',
      image: brailliantImg,
      tech: ['Figma'],
      live: 'https://bit.ly/AplikasiBrailliant'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B1C47] via-sky-400 to-[#0B1C47]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-sky-50 bg-clip-text text-transparent">
              Elmira Ardelia
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors duration-300 hover:text-sky-300 ${activeSection === item ? 'text-sky-300' : 'text-white'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-2 space-y-2">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 text-white hover:text-sky-300 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="relative w-48 h-48 mx-auto">
              {/* Efek kelap-kelip di belakang */}
              <div className="absolute inset-0 rounded-full bg-[#4a4a49] blur-2xl opacity-60 animate-pulse z-0" />

              {/* Lapisan foto profil di atas efek */}
              <div className="relative z-10 w-full h-full rounded-full bg-white  p-1">
                <div className="w-full h-full rounded-full bg-slate-900 overflow-hidden">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gray-300 blur-xl opacity-30 animate-pulse"></div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Elmira
            <span className="bg-gradient-to-r from-[#0B1C47] to-[#5490c2] bg-clip-text text-transparent">
              {" "}Ardelia
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creative Developer & Designer passionate about building beautiful digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-[#0B1C47] via-[#5490c2] to-[#0B1C47] text-white rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-[#0B1C47] text-[#0B1C47] rounded-full hover:bg-[#0B1C47] hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          <div className="mt-12 animate-bounce">
            <ChevronDown className="w-6 h-6 text-[#0B1C47] mx-auto" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About <span className="bg-gradient-to-r from-[#0B1C47] to-[#5490c2] bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Elmira Ardelia, a passionate developer and designer with a love for creating
                innovative digital solutions. I specialize in modern web technologies and have a keen
                eye for user experience design.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in tech started with curiosity and has evolved into a career focused on
                building applications that make a difference. I enjoy working on projects that
                challenge me to grow and learn new technologies.
              </p>

              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-[#0B1C47] text-white rounded-full text-sm">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-[#1d6f9f] text-white  rounded-full text-sm">
                  Creative Thinker
                </span>
                <span className="px-4 py-2 bg-[#396284] text-white rounded-full text-sm">
                  Team Player
                </span>
              </div>
            </div>

            <div className="relative">
              {/* Efek blur di belakang */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C47] to-[#5490c2] rounded-2xl blur-xl z-0"></div>

              {/* Container utama */}
              <div className="relative w-full h-80 bg-gradient-to-br from-[#0B1C47] to-[#5490c2] rounded-2xl flex items-center justify-center z-10 overflow-hidden">
                <img
                  src={teamworkImg}
                  alt="Teamwork"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="bg-gradient-to-r from-[#0B1C47] to-[#5490c2] bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-600/25 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="text-[#0B1C47] mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>

                <div className="w-full bg-gray-300 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-[#0B1C47] to-[#5490c2]  h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <span className="text-sm text-[#0B1C47]">{skill.level}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            My <span className="bg-gradient-to-r from-[#0B1C47] to-[#5490c2] bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#0B1C47] text-sky-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center text-gray-200 hover:text-sky-300 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center text-gray-200 hover:text-sky-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Get In <span className="bg-gradient-to-r from-[#0B1C47] to-[#5490c2] bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Let's Connect</h3>
                <p className="text-gray-100 mb-8">
                  I'm always interested in new opportunities and exciting projects.
                  Feel free to reach out if you'd like to work together!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-100">
                  <Mail className="w-5 h-5 text-[#0B1C47] mr-3" />
                  liaelmira89@gmail.com
                </div>
                <div className="flex items-center text-gray-100">
                  <Phone className="w-5 h-5 text-[#0B1C47] mr-3" />
                  +6281906487852
                </div>
                <div className="flex items-center text-gray-100">
                  <MapPin className="w-5 h-5 text-[#0B1C47] mr-3" />
                  Jakarta, Indonesia
                </div>
              </div>

              <div className="flex space-x-6">
                <a href="https://github.com/elmiraa89" className="text-gray-200 hover:text-sky-300 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/elmira-ardelia-81101b242/" className="text-gray-200 hover:text-sky-300 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/elmirardelia/" className="text-gray-200 hover:text-sky-300 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-sky-300 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-sky-300 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:border-sky-300 transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Message sent! (This is a demo)')}
                  className="w-full px-8 py-3 bg-gradient-to-r from-[#0B1C47] via-sky-300 to-[#0B1C47] text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-200">
            © 2025 Elmira Ardelia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;