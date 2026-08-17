import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Section data served via backend API
const portfolioData = {
  about: `
    <h3>About Me</h3>
    <p>Electronics Engineer and Developer passionate about hardware design, embedded systems, and scalable tech solutions. Focused on continuous innovation, problem-solving, and building high-impact tech products.</p>
  `,
  academic: `
    <h3>Academic Background</h3>
    <ul>
      <li><strong>Diploma in Electronics Engineering</strong> — Institute of Engineering & Rural Technology (IERT), Prayagraj</li>
      <li><strong>Matriculation (CBSE)</strong> — Park Mount Public School (85.6%)</li>
    </ul>
  `,
  experience: `
    <h3>Experience</h3>
    <ul>
      <li><strong>Diploma Engineer Trainee</strong> — ATL Battery Technology India (Maintenance & Operations)</li>
      <li><strong>Manufacturing Associate</strong> — Micron Technology</li>
    </ul>
  `,
  skills: `
    <h3>Core Skills</h3>
    <ul>
      <li><strong>Hardware & Electronics:</strong> Circuit Troubleshooting, PCB Layout, Analog IC Basics, VLSI Design Principles</li>
      <li><strong>Software & Web:</strong> JavaScript, HTML5, CSS3, REST APIs, Node.js, Linux CLI</li>
    </ul>
  `,
  projects: `
    <h3>Featured Projects</h3>
    <ul>
      <li><strong>5G Cellular Hotspot / Dongle Design:</strong> Custom hardware architecture for portable data connectivity.</li>
      <li><strong>ScaleYourExam:</strong> Platform architecture and brand conceptualization for competitive exam preparation.</li>
      <li><strong>Ink n Lens:</strong> Digital media channel focused on reimagining stories and literary adaptations.</li>
    </ul>
  `,
  links: `
    <h3>Important Links</h3>
    <ul>
      <li><a href="https://github.com" target="_blank">GitHub Profile</a></li>
      <li><a href="https://linkedin.com" target="_blank">LinkedIn Profile</a></li>
      <li><a href="https://youtube.com" target="_blank">YouTube Channel (Ink n Lens)</a></li>
    </ul>
  `,
  languages: `
    <h3>Languages</h3>
    <ul>
      <li><strong>English:</strong> Professional Working Proficiency</li>
      <li><strong>Hindi:</strong> Native Proficiency</li>
    </ul>
  `,
  tools: `
    <h3>Tools & Environments</h3>
    <ul>
      <li>Autodesk Suite</li>
      <li>Linux OS / Bash Terminal</li>
      <li>Git & GitHub</li>
      <li>VS Code, Postman</li>
    </ul>
  `,
  achievements: `
    <h3>Achievements & Certifications</h3>
    <ul>
      <li>Ethical Hacking Workshop certification — IIT Delhi</li>
      <li>Completed Virtual Software Engineering Simulations (JPMorgan Chase, Deloitte)</li>
      <li>Qualcomm Academy Wireless Technologies Certification</li>
    </ul>
  `,
  hobby: `
    <h3>Hobbies & Interests</h3>
    <ul>
      <li>Digital Storytelling & Video Editing</li>
      <li>Creative Photography & Visual Arts</li>
      <li>Exploring Embedded Hardware & Tech Reverse-Engineering</li>
    </ul>
  `,
  "lets connect": `
    <h3>Let's Connect</h3>
    <p>Feel free to reach out directly through the contacts listed on the sidebar or via social channels!</p>
    <p>Open for full-time roles, hardware/software collaborations, and technical discussions.</p>
  `,
  goals: `
    <h3>Future Goals</h3>
    <ul>
      <li>Master deep semiconductor physical design and high-frequency communication hardware.</li>
      <li>Scale developer-friendly applications that simplify technical exam prep.</li>
      <li>Build an end-to-end open hardware initiative.</li>
    </ul>
  `
};

app.get('/api/section/:name', (req, res) => {
  const sectionKey = req.params.name.toLowerCase();
  if (portfolioData[sectionKey]) {
    res.json({ success: true, content: portfolioData[sectionKey] });
  } else {
    res.status(404).json({ success: false, message: 'Section not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio server running on http://localhost:${PORT}`);
});
