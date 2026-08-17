import React, { useState } from "react";
import "./App.css";

const sectionData = {
  about: {
    title: "About Me",
    content: "Passionate AI Engineer and Entrepreneur focused on building impactful tech solutions.",
  },
  academic: {
    title: "Academic Background",
    content: "Academic qualifications, courses, and certifications.",
  },
  experience: {
    title: "Professional Experience",
    content: "Hands-on industry experience, internships, and roles.",
  },
  skills: {
    title: "Skills",
    content: "Technical skills, programming languages, frameworks, and domain expertise.",
  },
  projects: {
    title: "Projects",
    content: "Key software, hardware, and AI/ML projects built.",
  },
  links: {
    title: "Important Links",
    content: "GitHub, LinkedIn, Portfolio, and other profiles.",
  },
  languages: {
    title: "Languages",
    content: "Languages spoken and written proficiency.",
  },
  tools: {
    title: "Tools & Technologies",
    content: "Development tools, IDEs, platforms, and utility software.",
  },
  achievements: {
    title: "Achievements & Honors",
    content: "Competitions, hackathons, awards, and milestones.",
  },
  hobby: {
    title: "Hobbies & Interests",
    content: "Personal passions, creative pursuits, and activities.",
  },
  connect: {
    title: "Let's Connect",
    content: "Contact forms, social handles, and collaboration avenues.",
  },
  goals: {
    title: "Future Goals",
    content: "Short-term objectives and long-term career aspirations.",
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { key: "about", label: "ABOUT" },
    { key: "academic", label: "ACADEMIC" },
    { key: "experience", label: "EXPERIENCE" },
    { key: "skills", label: "SKILLS" },
    { key: "projects", label: "PROJECTS" },
    { key: "links", label: "LINKS" },
    { key: "languages", label: "LANGUAGES" },
    { key: "tools", label: "TOOLS" },
    { key: "achievements", label: "ACHIEVEMENTS" },
    { key: "hobby", label: "HOBBY" },
    { key: "connect", label: "LETS CONNECT" },
    { key: "goals", label: "GOALS" },
  ];

  return (
    <div className="portfolio-container">
      {/* Sidebar Panel */}
      <aside className="sidebar">
        <div className="profile-circle">
          <span>PROFILE PICTURE</span>
        </div>

        <div className="card name-card">HRISHABH KUMAR</div>

        <div className="card role-card">
          ENTREPRENEUR |<br />AI ENGINEER
        </div>

        <div className="card contact-card">
          <p><strong>phone no:</strong> +91-XXXXXXXXXX</p>
          <p><strong>email id:</strong> your.email@example.com</p>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="main-panel">
        <div className="button-grid">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`nav-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="display-window">
          <h2>{sectionData[activeTab].title}</h2>
          <div className="content-area">
            <p>{sectionData[activeTab].content}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
