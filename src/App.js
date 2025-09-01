// App.jsx
import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

// --- SVG Icons ---
const GhIcon = () => <svg height="24" width="24" viewBox="0 0 16 16" fill="currentColor"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>;
const GmIcon = () => <svg height="24" width="24" viewBox="0 0 512 512" fill="currentColor"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1-7.9 2.9-11.3l140.6-225.1-205.8 100c-12.1 6-26.9 3.5-36.8-5.5-12.8-11.5-12.8-30.6 .1-42.2L472.3 2.1C482 .7 492.2 .6 498.1 5.6z"></path></svg>;
const WaIcon = () => <svg height="24" width="24" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.2-27.2l-6.7-4-71.6 18.7L57.9 351l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>;

// --- Configuration Object ---
const portfolioConfig = {
  name: "Semini Herath",
  role: "Undergraduate Student",
  university: "Sabaragamuwa University of Sri Lanka",
  tagline: "• UI / UX Enthusiast • Designer",
  profilePhotoUrl: "/me.png",
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
    description: "I'm a passionate undergraduate at Sabaragamuwa University of Sri Lanka, deeply interested in web development, UI UX designing and graphic designing. I love building clean, user-friendly interfaces and solving problems with code.",
    dynamicRoles: ["Figma Designer", "UI Tinkerer"]
  },
  skills: [
    { name: "Figma", icon: "devicon-figma-plain", level: 95 },
    { name: "Photoshop", icon: "devicon-photoshop-plain", level: 90 },
    { name: "Java", icon: "devicon-java-plain", level: 45 },
    { name: "HTML5", icon: "devicon-html5-plain", level: 55 },
    { name: "CSS3", icon: "devicon-css3-plain", level: 55 },
    { name: "JavaScript", icon: "devicon-javascript-plain", level: 55 },
    { name: "C", icon: "devicon-c-plain", level: 60 },
    { name: "React", icon: "devicon-react-original", level: 50 },
  ],
  projects: [
    {
      title: "Portfolio Website",
      description: "A responsive and animated personal portfolio built with React and pure CSS.",
      tags: ["React", "CSS", "JavaScript"],
      imageUrl: "https://placehold.co/600x400/ffffff/343A40?text=Project+One",
      githubLink: "https://github.com/Ashiy-Ishan/react-portfolio",
    },
    {
      title: "Thecnology First Website",
      description: "A robust backend system for an e-commerce platform using Java Spring Boot.",
      tags: ["HTML", "CSS", "Javascript"],
      imageUrl: "https://placehold.co/600x400/ffffff/343A40?text=Project+Two",
      githubLink: "https://github.com/Seminiherath/TechnologyFirst",
    },
  ]
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
    }, { threshold: 0.1 });

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

// --- Section Components ---
const Header = ({ activeSection }) => {
  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home" className="nav-logo">S H</a>
        <ul className="nav-menu">
          {navLinks.map(link => (
            <li key={link}>
              <a href={`#${link}`} className={`nav-link ${activeSection === link ? 'active' : ''}`}>{link.charAt(0).toUpperCase() + link.slice(1)}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

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
            for(let i = 0; i < particles.length; i++) {
                for(let j = i; j < particles.length; j++) {
                    let dist = Math.sqrt((particles[i].x - particles[j].x)**2 + (particles[i].y - particles[j].y)**2);
                    if(dist < 100) {
                        ctx.beginPath(); ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(52, 58, 64, ${1 - dist/100})`;
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
        <h1 className="home-name">{portfolioConfig.name}</h1>
        <p className="home-tagline">{portfolioConfig.tagline}</p>
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

const Skills = () => (
  <section id="skills" className="skills section">
    <h2 className="section-title animate-on-scroll">My Tech Stack</h2>
    <div className="skills-grid">
      {portfolioConfig.skills.map((skill, index) => (
        <div className="skill-card animate-on-scroll" key={skill.name} style={{ animationDelay: `${index * 0.05}s` }}>
          <div className="skill-progress-circle" style={{ '--level': `${skill.level}%` }}>
            <div className="skill-icon-container">
                <i className={skill.icon}></i>
            </div>
          </div>
          <p className="skill-name">{skill.name}</p>
        </div>
      ))}
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="projects section">
    <h2 className="section-title animate-on-scroll">Projects</h2>
    <div className="projects-grid">
      {portfolioConfig.projects.map((project, index) => (
        <div className="project-card animate-on-scroll" key={project.title} style={{ animationDelay: `${index * 0.15}s` }}>
          <img src={project.imageUrl} alt={project.title} className="project-image" />
          <div className="project-content">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className="project-links">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">View Code <GhIcon /></a>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="view-more-container animate-on-scroll">
      <a href={portfolioConfig.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">See More on GitHub</a>
    </div>
  </section>
);

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const subject = `Portfolio Contact - ${formData.get('name')}`;
        const body = `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('message')}`;
        window.location.href = `mailto:${portfolioConfig.contact.gmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };
    return (
        <section id="contact" className="contact section">
            <h2 className="section-title animate-on-scroll">Get in Touch</h2>
            <div className="contact-container">
                <div className="contact-text animate-on-scroll">
                    <p>Have a question or a project in mind? I'd love to hear from you. Feel free to send me a message.</p>
                </div>
                <form className="contact-form animate-on-scroll" style={{ animationDelay: '0.2s' }} onSubmit={handleFormSubmit}>
                    <input type="text" name="name" placeholder="Your Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </section>
    );
};

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
    const sections = document.querySelectorAll('.section');
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
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;