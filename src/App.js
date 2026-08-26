// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import profile_image from '../src/assets/me.jpg';

// --- SVG Icons ---
const GhIcon = () => <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>;
const GmIcon = () => <svg height="24" width="24" viewBox="0 0 512 512" fill="currentColor"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1-7.9 2.9-11.3l140.6-225.1-205.8 100c-12.1 6-26.9 3.5-36.8-5.5-12.8-11.5-12.8-30.6 .1-42.2L472.3 2.1C482 .7 492.2 .6 498.1 5.6z"></path></svg>;
const WaIcon = () => <svg height="24" width="24" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-27.2l-6.7-4-71.6 18.7L57.9 351l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>;
const LiIcon = () => <svg height="20" width="20" viewBox="0 0 448 512" fill="currentColor"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>;
const FigmaIcon = () => <svg height="20" width="20" viewBox="0 0 38 57" fill="currentColor"><path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" /><path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" /><path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" /><path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" /><path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" /></svg>;

// --- Configuration Object ---
const portfolioConfig = {
  name: "Semini Herath",
  headline: "Crafting Seamless Digital Experiences: From Pixel to Production.",
  subHeadline: "I am a multifaceted creator blending UI/UX Design, Frontend Development, Graphic Design, and Quality Assurance to build intuitive, bug-free applications.",
  role: "Undergraduate Student",
  profilePhotoUrl: profile_image,
  githubUrl: "https://github.com/Seminiherath",
  contact: {
    telegram: "94763777417",
    whatsapp: "94763777417",
    gmail: "semiwasanaherath@gmail.com",
  },
  socials: {
    github: "https://github.com/Seminiherath",
  },
  about: {
    description: "I am a Computing undergraduate at Sabaragamuwa University of Sri Lanka, passionate about the entire software development lifecycle. My journey in tech began with visual communication, crafting graphic designs and brand identities. This foundation naturally evolved into UI/UX design, where I focus on prototyping intuitive user journeys using Figma.\n\nTo bring those designs to life, I expanded my toolkit into frontend development, building interactive mobile and web applications with Flutter and Kotlin. Because a great design must also function flawlessly, I am actively integrating Quality Assurance practices into my workflow. By running manual tests and usability checks, I ensure that the software I build is not only visually engaging but also robust and reliable. Whether I am designing a brand identity, coding a frontend interface, or hunting for bugs, my goal is always to deliver high-quality, user-centered digital solutions.",
    dynamicRoles: ["Frontend Developer", "UI/UX Designer", "Graphic Designer", "QA Beginner"]
  },
  techStack: [
    { name: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Flutter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
    { name: "HTML5", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "C", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  ],
  designTools: [
    { name: "Figma", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
    { name: "Photoshop", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg" },
    { name: "Illustrator", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" },
  ],
  projects: [
    {
      id: "trustbubble",
      title: "TrustBubble",
      subtitle: "AI-Powered Real-Time Content Verifier",
      status: "completed",
      description: "An intelligent Android application that verifies the reliability and safety of on-screen content using the Google Gemini 1.5 Pro AI model.",
      contributions: "Engineered a persistent, draggable floating bubble interface using Kotlin and Material 3 for seamless system-level interaction. Designed transparent UI flows by visualizing the AI's step-by-step reasoning in a decision tree format.",
      tags: ["Kotlin", "Python (FastAPI)", "SQLite"],
      bannerUrl: "/images/projects/trustbubble_banner.png",
      githubLinks: null,
      linkedinLink: null,
      figmaLink: null,
    },
    {
      id: "agelink",
      title: "AgeLink",
      subtitle: "Dual-Connectivity Medicine Reminder",
      status: "completed",
      description: "An IoT device and companion mobile application designed to solve medication non-adherence among the elderly by bridging communication between patients and caregivers.",
      contributions: "Built the cross-platform mobile frontend using Flutter, prioritizing accessible and intuitive user interfaces. Ensured system reliability through rigorous testing of offline-resilient local storage and fail-safe dual connectivity (Wi-Fi/GSM).",
      tags: ["Flutter", "C++ (Embedded)", "Firebase Realtime Database"],
      bannerUrl: "/images/projects/agelink_banner.png",
      githubLinks: [
        { url: "https://github.com/Chamudi2004/AgeLink", label: "Mobile App" },
        { url: "https://github.com/Ashiy-Ishan/AgeLink_esp32", label: "ESP32 Firmware" },
      ],
      linkedinLink: "https://lnkd.in/p/guwhwX-z",
      figmaLink: null,
    },
    {
      id: "ontime",
      title: "OnTime",
      subtitle: "Smart Workforce Management Ecosystem",
      status: "completed",
      description: "A comprehensive HR and attendance tracking platform featuring a mobile application for employees and a web-based administration console.",
      contributions: "Spearheaded the frontend architecture and implementation of Role-Based Access Control (RBAC), building context-aware interfaces that adapt to Employee, Manager, and Admin tiers. Implemented and verified complex security logic, including precision geofencing, OTP device binding, and biometric authentication.",
      tags: ["Flutter (Mobile)", "React.js (Web)", "Firebase"],
      bannerUrl: "/images/projects/ontime_banner.png",
      githubLinks: [
        { url: "https://github.com/OnTime-HR", label: "GitHub Organization" },
      ],
      linkedinLink: null,
      figmaLink: null,
    },
    {
      id: "ecosync",
      title: "EcoSync",
      subtitle: "Smart Energy & E-Waste Guardian",
      status: "ongoing",
      description: "A hybrid-autonomous smart adapter and mobile application aimed at combating standby energy consumption, developed for the HackX 11.0 Inter-University Startup Challenge.",
      contributions: "Designed and developed the real-time mobile application dashboard to provide users with live energy metrics (Voltage, Current, Power) and automated AI-generated labels. Validated system integration to ensure rapid, sub-200ms cloud synchronization between the Edge AI hardware and the user interface.",
      tags: ["IoT (TinyML)", "Mobile Frontend", "Google Firebase"],
      bannerUrl: "/images/projects/ecosync_banner.png",
      githubLinks: null,
      linkedinLink: null,
      figmaLink: "https://www.figma.com/design/yFd1DNQ5jcjdZqsyerbiaF/EcoSync-App?node-id=24-66&t=kHiFK6OTIVcx4ALH-1",
    },
  ],
};

// --- Custom Hooks ---
const useScrollAnimate = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.08 });
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};

const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", setFromEvent);
    return () => window.removeEventListener("mousemove", setFromEvent);
  }, []);
  return position;
};

// --- Nav Links Config ---
const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

// --- Components ---
const Header = ({ activeSection }) => (
  <header className="header">
    <nav className="navbar">
      <a href="#home" className="nav-logo">{portfolioConfig.name}</a>
      <ul className="nav-menu">
        {NAV_LINKS.map(link => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={`nav-link ${activeSection === link.id ? 'active' : ''}`}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const setup = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      let particleCount = Math.floor(canvas.width / 20);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width, y: Math.random() * canvas.height,
          vx: Math.random() * 0.5 - 0.25, vy: Math.random() * 0.5 - 0.25,
          radius: Math.random() * 1.5 + 0.5
        });
      }
    };
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(52, 58, 64, 0.5)';
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          let dist = Math.sqrt((particles[i].x - particles[j].x) ** 2 + (particles[i].y - particles[j].y) ** 2);
          if (dist < 100) {
            ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(52, 58, 64, ${1 - dist / 100})`;
            ctx.lineWidth = 0.3; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };
    window.addEventListener('resize', setup);
    setup();
    animate();
    return () => window.removeEventListener('resize', setup);
  }, []);
  return <canvas ref={canvasRef} className="particle-canvas" />;
};

const Home = () => (
  <section id="home" className="home section">
    <ParticleBackground />
    <div className="home-content">
      <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
        <h1 className="home-name">{portfolioConfig.headline}</h1>
        <p className="home-tagline">{portfolioConfig.subHeadline}</p>
      </div>
      <div className="home-buttons animate-on-scroll" style={{ animationDelay: '0.3s' }}>
        <a href="#projects" className="btn">Explore My Work</a>
        <a href="#resume" className="btn btn-secondary">View Resume</a>
      </div>
      <div className="home-socials animate-on-scroll" style={{ animationDelay: '0.4s' }}>
        <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer"><GhIcon /></a>
        <a href={`mailto:${portfolioConfig.contact.gmail}`}><GmIcon /></a>
        <a href={`https://wa.me/${portfolioConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer"><WaIcon /></a>
      </div>
    </div>
  </section>
);

const About = () => {
  const [currentRole, setCurrentRole] = useState(portfolioConfig.about.dynamicRoles[0]);
  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      index = (index + 1) % portfolioConfig.about.dynamicRoles.length;
      setCurrentRole(portfolioConfig.about.dynamicRoles[index]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <section id="about" className="about section">
      <h2 className="section-title animate-on-scroll">About Me</h2>
      <div className="about-container">
        <div className="about-image animate-on-scroll">
          <img src={portfolioConfig.profilePhotoUrl} alt={portfolioConfig.name} />
        </div>
        <div className="about-text animate-on-scroll" style={{ animationDelay: '0.2s' }}>
          <p>{portfolioConfig.about.description}</p>
          <div className="about-role">I'm a <span className="role-text" key={currentRole}>{currentRole}</span></div>
        </div>
      </div>
    </section>
  );
};

const Marquee = ({ items }) => (
  <div className="marquee-container">
    <div className="marquee-content">
      {[...items, ...items, ...items].map((item, index) => (
        <div className="marquee-item" key={`${item.name}-${index}`} title={item.name}>
          <img src={item.iconUrl} alt={item.name} className="marquee-icon" />
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="skills section">
    <h2 className="section-title animate-on-scroll">Tech Stack</h2>
    <div className="animate-on-scroll">
      <Marquee items={portfolioConfig.techStack} />
    </div>
    <h2 className="section-title animate-on-scroll" style={{ marginTop: '4rem' }}>Design Tools</h2>
    <div className="animate-on-scroll">
      <Marquee items={portfolioConfig.designTools} />
    </div>
  </section>
);

// --- Project Link Icon Button ---
const LinkIconBtn = ({ href, title, colorClass, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`proj-link-btn ${colorClass || ''}`} title={title}>
    {children}
  </a>
);

// --- Unified Work Section (all sub-sections stacked) ---
const Work = () => (
  <section id="work" className="work-section section-wide">
    <div className="section-header-wrap animate-on-scroll">
      <h2 className="section-title">My Works</h2>
    </div>

    {/* --- Dev Projects --- */}
    <h3 className="work-subsection-title animate-on-scroll">Dev Projects</h3>
    <div className="projects-grid-2col">
      {portfolioConfig.projects.map((project, index) => (
        <div
          className={`proj-card animate-on-scroll ${project.status === 'ongoing' ? 'proj-card--ongoing' : ''}`}
          key={project.id}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="proj-banner-wrap">
            <img src={project.bannerUrl} alt={`${project.title} banner`} className="proj-banner-img" />
            <span className={`proj-status-pill proj-status-pill--${project.status}`}>
              {project.status === 'ongoing' ? '🚀 In Progress' : '✓ Done'}
            </span>
          </div>
          <div className="proj-info">
            <div className="proj-header-row">
              <div className="proj-title-group">
                <h3 className="proj-name">{project.title}</h3>
                <p className="proj-tagline">{project.subtitle}</p>
              </div>
              <div className="proj-link-icons">
                {project.githubLinks && project.githubLinks.map((gh, i) => (
                  <LinkIconBtn key={i} href={gh.url} title={`GitHub — ${gh.label}`} colorClass="link-gh">
                    <GhIcon />
                  </LinkIconBtn>
                ))}
                {project.linkedinLink && (
                  <LinkIconBtn href={project.linkedinLink} title="LinkedIn Post" colorClass="link-li">
                    <LiIcon />
                  </LinkIconBtn>
                )}
                {project.figmaLink && (
                  <LinkIconBtn href={project.figmaLink} title="Figma Design" colorClass="link-figma">
                    <FigmaIcon />
                  </LinkIconBtn>
                )}
              </div>
            </div>
            <p className="proj-description">{project.description}</p>
            <div className="proj-contributions">
              <span className="proj-contributions-label">Key Contributions</span>
              <p>{project.contributions}</p>
            </div>
            <div className="proj-tags">
              {project.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* --- UI Designs --- */}
    <h3 className="work-subsection-title animate-on-scroll">UI Designs</h3>
    <div className="ui-designs-grid animate-on-scroll">
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div className="ui-design-card" key={i}>
          <div className="ui-design-placeholder">
            <span className="placeholder-coming-soon">Coming Soon</span>
          </div>
        </div>
      ))}
    </div>

    {/* --- Graphic Designs (Auto-Scrolling Marquee) --- */}
    <h3 className="work-subsection-title animate-on-scroll">Graphic Designs</h3>
    <div className="graphic-marquee animate-on-scroll">
      <div className="graphic-marquee-track">
        {[...Array(3)].map((_, setIndex) => (
          [
            { src: '/images/graphics/birthday_card.jpg', label: 'Birthday Card Design' },
            { src: '/images/graphics/blogathon_poster.jpg', label: 'Blogathon 1.0 Poster' },
            { src: '/images/graphics/blood_donation.jpg', label: 'Blood Donation Flyer' },
            { src: '/images/graphics/xmasora_coming_soon.jpg', label: 'Xmasora — Coming Soon' },
            { src: '/images/graphics/xmasora_countdown.jpg', label: 'Xmasora — Countdown' },
          ].map((item, i) => (
            <div className="graphic-marquee-item" key={`${setIndex}-${i}`}>
              <img src={item.src} alt={item.label} />
              <div className="graphic-design-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="contact section">
    <h2 className="section-title animate-on-scroll">Let's Build Something Great Together.</h2>
    <div className="contact-container">
      <div className="contact-info animate-on-scroll">
        <div className="contact-socials">
          <a href={`mailto:${portfolioConfig.contact.gmail}`} title="Email"><GmIcon /></a>
          <a href="https://linkedin.com/in/seminiherath" target="_blank" rel="noopener noreferrer" title="LinkedIn"><LiIcon /></a>
          <a href={portfolioConfig.socials.github} target="_blank" rel="noopener noreferrer" title="GitHub"><GhIcon /></a>
          <a href={`https://wa.me/${portfolioConfig.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" title="WhatsApp"><WaIcon /></a>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} {portfolioConfig.name}.</p>
  </footer>
);

// --- Main App Component ---
function App() {
  const [activeSection, setActiveSection] = useState('home');
  const mousePosition = useMousePosition();
  useScrollAnimate();
  useEffect(() => {
    const sections = document.querySelectorAll('.section, .work-section');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-50% 0px -50% 0px' });
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);
  return (
    <>
      <div className="cursor-dot" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>
      <div className="cursor-outline" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>
      <Header activeSection={activeSection} />
      <main>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
