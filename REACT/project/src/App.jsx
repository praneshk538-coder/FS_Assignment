import { useState, useEffect } from "react";

// Each lesson has videoId + startTime (seconds) so the YouTube link jumps to exact topic
const YT = {
  html:  "HD13eq_Pmp8",
  css:   "wRNinF7YQqQ",
  js:    "W6NZfCO5SIk",
  react: "CgkZ7MvWUAA",
  mysql: "5OdVJbNCSso",
};

const mkLesson = (title, duration, vid, start) => ({ title, duration, videoId: vid, startTime: start });

const courses = [
  {
    id: "html",
    label: "HTML",
    color: "#E34C26",
    bg: "#fff4f0",
    icon: "⬡",
    tagline: "Structure the Web",
    description: "Learn the building blocks of every webpage — elements, attributes, forms, and semantic markup.",
    chapters: [
      {
        title: "Introduction to HTML",
        lessons: [
          mkLesson("What is HTML?",             "0:00–5:00",  YT.html, 0),
          mkLesson("HTML Document Structure",   "5:00–12:00", YT.html, 300),
          mkLesson("HTML Tags & Elements",      "12:00–22:00",YT.html, 720),
        ],
      },
      {
        title: "Text & Links",
        lessons: [
          mkLesson("Headings & Paragraphs",     "22:00–30:00",YT.html, 1320),
          mkLesson("Anchor Tags & Hyperlinks",  "30:00–40:00",YT.html, 1800),
          mkLesson("Lists: ol, ul, dl",         "40:00–50:00",YT.html, 2400),
        ],
      },
      {
        title: "Media & Forms",
        lessons: [
          mkLesson("Images & Alt Text",         "50:00–60:00",YT.html, 3000),
          mkLesson("Tables",                    "60:00–75:00",YT.html, 3600),
          mkLesson("HTML Forms & Inputs",       "75:00–90:00",YT.html, 4500),
        ],
      },
      {
        title: "Semantic HTML5",
        lessons: [
          mkLesson("Semantic Tags: header, footer, main","90:00–105:00",YT.html, 5400),
          mkLesson("Section, Article, Aside",   "105:00–115:00",YT.html,6300),
          mkLesson("Accessibility Basics & ARIA","115:00–end",  YT.html,6900),
        ],
      },
    ],
  },
  {
    id: "css",
    label: "CSS",
    color: "#264de4",
    bg: "#f0f4ff",
    icon: "◈",
    tagline: "Style the Web",
    description: "Master selectors, box model, Flexbox, Grid, animations, and responsive design techniques.",
    chapters: [
      {
        title: "CSS Fundamentals",
        lessons: [
          mkLesson("What is CSS?",              "0:00–8:00",  YT.css, 0),
          mkLesson("Selectors & Specificity",   "8:00–20:00", YT.css, 480),
          mkLesson("Colors & Units",            "20:00–32:00",YT.css, 1200),
        ],
      },
      {
        title: "Box Model & Layout",
        lessons: [
          mkLesson("Box Model Explained",       "32:00–45:00",YT.css, 1920),
          mkLesson("Display & Positioning",     "45:00–62:00",YT.css, 2700),
          mkLesson("Flexbox Deep Dive",         "62:00–82:00",YT.css, 3720),
        ],
      },
      {
        title: "CSS Grid & Responsive",
        lessons: [
          mkLesson("CSS Grid Basics",           "82:00–100:00",YT.css,4920),
          mkLesson("Media Queries",             "100:00–115:00",YT.css,6000),
          mkLesson("Mobile-First Design",       "115:00–128:00",YT.css,6900),
        ],
      },
      {
        title: "Animations & Variables",
        lessons: [
          mkLesson("CSS Transitions",           "128:00–138:00",YT.css,7680),
          mkLesson("Keyframe Animations",       "138:00–152:00",YT.css,8280),
          mkLesson("CSS Custom Properties",     "152:00–end",   YT.css,9120),
        ],
      },
    ],
  },
  {
    id: "js",
    label: "JavaScript",
    color: "#f0db4f",
    bg: "#fffdf0",
    iconColor: "#7a6800",
    icon: "JS",
    tagline: "Power the Web",
    description: "Learn ES6+, DOM manipulation, async/await, APIs, and modern JavaScript patterns.",
    chapters: [
      {
        title: "JS Basics",
        lessons: [
          mkLesson("Variables: var, let, const","0:00–12:00", YT.js, 0),
          mkLesson("Data Types & Operators",    "12:00–28:00",YT.js, 720),
          mkLesson("Functions & Scope",         "28:00–48:00",YT.js, 1680),
        ],
      },
      {
        title: "DOM Manipulation",
        lessons: [
          mkLesson("Selecting Elements",        "48:00–62:00",YT.js, 2880),
          mkLesson("Events & Listeners",        "62:00–78:00",YT.js, 3720),
          mkLesson("Modifying the DOM",         "78:00–92:00",YT.js, 4680),
        ],
      },
      {
        title: "Modern JS (ES6+)",
        lessons: [
          mkLesson("Arrow Functions & Destructuring","92:00–108:00",YT.js,5520),
          mkLesson("Spread, Rest & Modules",    "108:00–122:00",YT.js,6480),
          mkLesson("Promises & Async/Await",    "122:00–142:00",YT.js,7320),
        ],
      },
      {
        title: "APIs & Fetch",
        lessons: [
          mkLesson("Fetch API Basics",          "142:00–155:00",YT.js,8520),
          mkLesson("JSON & Working with Data",  "155:00–166:00",YT.js,9300),
          mkLesson("Error Handling",            "166:00–end",   YT.js,9960),
        ],
      },
    ],
  },
  {
    id: "react",
    label: "React",
    color: "#61dafb",
    bg: "#f0fdff",
    iconColor: "#007b9a",
    icon: "⚛",
    tagline: "Build UI Components",
    description: "Master React hooks, component architecture, state management, routing, and deployment.",
    chapters: [
      {
        title: "React Fundamentals",
        lessons: [
          mkLesson("What is React & JSX?",      "0:00–15:00", YT.react, 0),
          mkLesson("Components & Props",        "15:00–35:00",YT.react, 900),
          mkLesson("State with useState",       "35:00–55:00",YT.react, 2100),
        ],
      },
      {
        title: "Hooks Deep Dive",
        lessons: [
          mkLesson("useEffect & Lifecycle",     "55:00–78:00",YT.react, 3300),
          mkLesson("useRef & useContext",       "78:00–98:00",YT.react, 4680),
          mkLesson("Custom Hooks",              "98:00–115:00",YT.react,5880),
        ],
      },
      {
        title: "Routing & Forms",
        lessons: [
          mkLesson("React Router v6",           "115:00–135:00",YT.react,6900),
          mkLesson("Controlled Forms",          "135:00–150:00",YT.react,8100),
          mkLesson("Form Validation",           "150:00–165:00",YT.react,9000),
        ],
      },
      {
        title: "State Management & Deploy",
        lessons: [
          mkLesson("Context API vs Redux",      "165:00–185:00",YT.react,9900),
          mkLesson("Zustand for State",         "185:00–200:00",YT.react,11100),
          mkLesson("Deploy with Vercel",        "200:00–end",   YT.react,12000),
        ],
      },
    ],
  },
  {
    id: "mysql",
    label: "MySQL",
    color: "#00758f",
    bg: "#f0fafc",
    icon: "⬡",
    tagline: "Store & Query Data",
    description: "Learn relational databases, SQL queries, joins, indexes, and integrating MySQL with Node.js.",
    chapters: [
      {
        title: "Database Basics",
        lessons: [
          mkLesson("What is a Database?",       "0:00–10:00", YT.mysql, 0),
          mkLesson("Installing MySQL",          "10:00–22:00",YT.mysql, 600),
          mkLesson("Creating Databases & Tables","22:00–38:00",YT.mysql,1320),
        ],
      },
      {
        title: "SQL Queries",
        lessons: [
          mkLesson("SELECT, WHERE, ORDER BY",   "38:00–55:00",YT.mysql, 2280),
          mkLesson("INSERT, UPDATE, DELETE",    "55:00–70:00",YT.mysql, 3300),
          mkLesson("Aggregate Functions",       "70:00–85:00",YT.mysql, 4200),
        ],
      },
      {
        title: "Joins & Relations",
        lessons: [
          mkLesson("INNER JOIN",               "85:00–100:00", YT.mysql, 5100),
          mkLesson("LEFT, RIGHT & FULL JOIN",  "100:00–115:00",YT.mysql, 6000),
          mkLesson("Foreign Keys & Relations", "115:00–130:00",YT.mysql, 6900),
        ],
      },
      {
        title: "MySQL + Node.js",
        lessons: [
          mkLesson("Connecting Node.js to MySQL","130:00–145:00",YT.mysql,7800),
          mkLesson("Queries in Express.js",    "145:00–160:00",YT.mysql, 8700),
          mkLesson("Building a REST API",      "160:00–end",   YT.mysql, 9600),
        ],
      },
    ],
  },
];

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="11" fill="currentColor" opacity="0.15"/>
    <polygon points="10,8 17,12 10,16" fill="currentColor"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);

const BackIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);


const NoteIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
    <polyline points="14 2 14 8 20 8"/>
    <line x1="16" y1="13" x2="8" y2="13"/>
    <line x1="16" y1="17" x2="8" y2="17"/>
  </svg>
);
const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
  </svg>
);
const SearchIconSVG = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);
const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const NOTE_COLORS = ["#ffffff","#fffde7","#f1f8e9","#e8f4fd","#fce4ec","#f3e5f5"];
const NOTE_TAGS   = ["all","html","css","js","react","mysql","general"];
const TAG_COLORS  = { html:"#E34C26",css:"#264de4",js:"#b8a000",react:"#007b9a",mysql:"#00758f",general:"#7c3aed",all:"#555" };


function NoteEditor({ note, onSave, onDelete, onCancel, formatDate }) {
  const [title, setTitle]   = useState(note.title);
  const [body, setBody]     = useState(note.body);
  const [tag, setTag]       = useState(note.tag || "general");
  const [color, setColor]   = useState(note.color || "#ffffff");

  // Reset when a different note is selected
  useEffect(() => {
    setTitle(note.title); setBody(note.body); setTag(note.tag || "general"); setColor(note.color || "#ffffff");
  }, [note.id]);

  const handleSave = () => onSave({ ...note, title, body, tag, color });

  return (
    <div style={{ display:"flex", flexDirection:"column", height:"100%", background:color, transition:"background 0.2s" }}>
      {/* Toolbar */}
      <div style={{ padding:"0.75rem 1.25rem", borderBottom:"1px solid #eee", background:"rgba(255,255,255,0.7)",
        display:"flex", alignItems:"center", gap:10, flexWrap:"wrap" }}>
        {/* Color picker */}
        <div style={{ display:"flex", gap:5, alignItems:"center" }}>
          {NOTE_COLORS.map(c => (
            <div key={c} onClick={() => setColor(c)}
              style={{ width:18, height:18, borderRadius:"50%", background:c,
                border: color===c ? "2px solid #a78bfa" : "1.5px solid #ddd",
                cursor:"pointer", transition:"transform 0.15s",
                transform: color===c ? "scale(1.25)" : "scale(1)" }}/>
          ))}
          <span style={{ color:"#bbb", fontSize:"0.75rem", marginLeft:4 }}>Color</span>
        </div>
        <div style={{ width:1, height:20, background:"#eee" }}/>
        {/* Tag picker */}
        <select value={tag} onChange={e => setTag(e.target.value)}
          style={{ padding:"0.3rem 0.6rem", borderRadius:6, border:"1px solid #ddd",
            fontSize:"0.78rem", fontWeight:700, color: TAG_COLORS[tag],
            background:"transparent", cursor:"pointer", outline:"none" }}>
          {NOTE_TAGS.filter(t => t !== "all").map(t => (
            <option key={t} value={t}>{t.toUpperCase()}</option>
          ))}
        </select>
        <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
          {note.id && (
            <span style={{ fontSize:"0.72rem", color:"#bbb" }}>
              Updated {formatDate(note.updatedAt)}
            </span>
          )}
          {note.id && (
            <button onClick={() => onDelete(note.id)}
              style={{ display:"flex", alignItems:"center", gap:4, padding:"0.35rem 0.75rem",
                background:"#fff0f0", color:"#ef4444", border:"1px solid #fca5a5",
                borderRadius:7, cursor:"pointer", fontWeight:700, fontSize:"0.78rem" }}>
              <TrashIcon /> Delete
            </button>
          )}
          <button onClick={onCancel}
            style={{ padding:"0.35rem 0.75rem", background:"#f0f0f5", color:"#666",
              border:"none", borderRadius:7, cursor:"pointer", fontWeight:600, fontSize:"0.78rem" }}>
            Cancel
          </button>
          <button onClick={handleSave}
            style={{ padding:"0.35rem 0.9rem", background:"linear-gradient(135deg,#a78bfa,#818cf8)",
              color:"#fff", border:"none", borderRadius:7, cursor:"pointer", fontWeight:700, fontSize:"0.78rem",
              boxShadow:"0 2px 8px rgba(167,139,250,0.35)" }}>
            Save Note
          </button>
        </div>
      </div>

      {/* Title */}
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Note title..."
        style={{ margin:"1.25rem 1.5rem 0.5rem", padding:"0.6rem 0.75rem",
          border:"none", borderBottom:"2px solid #e0e0e0", background:"transparent",
          fontSize:"1.3rem", fontWeight:800, color:"#1a1a2e", outline:"none",
          fontFamily:"inherit" }}
      />

      {/* Tag badge preview */}
      <div style={{ marginLeft:"1.5rem", marginBottom:"0.75rem" }}>
        <span style={{ background: TAG_COLORS[tag]+"22", color: TAG_COLORS[tag],
          borderRadius:6, padding:"0.18rem 0.65rem", fontSize:"0.72rem", fontWeight:800,
          textTransform:"uppercase" }}>{tag}</span>
      </div>

      {/* Body */}
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        placeholder="Write your notes here... Use it for key concepts, code snippets, questions, or anything you want to remember."
        style={{ flex:1, margin:"0 1.5rem 1.25rem", padding:"0.75rem", resize:"none",
          border:"1px solid #e8e8e8", borderRadius:10, background:"rgba(255,255,255,0.5)",
          fontSize:"0.9rem", lineHeight:1.75, color:"#333", outline:"none",
          fontFamily:"'Segoe UI', system-ui, sans-serif" }}
      />
    </div>
  );
}

export default function App() {
  const [view, setView]               = useState("home");
  const [activeCourse, setActiveCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [openChapters, setOpenChapters] = useState({});
  const [progress, setProgress]         = useState({});
  const [myNotes, setMyNotes]           = useState([]);
  const [noteSearch, setNoteSearch]     = useState("");
  const [editingNote, setEditingNote]   = useState(null);
  const [noteFilter, setNoteFilter]     = useState("all");
  const [prevView, setPrevView]         = useState("home");

  const openNotes = () => { setPrevView(view); setView("notes"); };

  const openCourse = (course) => {
    setActiveCourse(course);
    setOpenChapters({ 0: true });
    setView("course");
  };

  const openLesson = (lesson, courseColor) => {
    setActiveLesson({ ...lesson, courseColor });
    setView("lesson");
  };

  const markDone = (courseId, chIdx, lIdx) => {
    const key = `${courseId}-${chIdx}-${lIdx}`;
    setProgress((p) => ({ ...p, [key]: !p[key] }));
  };

  const saveNote = (note) => {
    if (note.id) {
      setMyNotes(n => n.map(x => x.id === note.id ? { ...note, updatedAt: Date.now() } : x));
    } else {
      const fresh = { ...note, id: Date.now(), createdAt: Date.now(), updatedAt: Date.now() };
      setMyNotes(n => [fresh, ...n]);
    }
    setEditingNote(null);
  };

  const deleteNote = (id) => {
    setMyNotes(n => n.filter(x => x.id !== id));
    if (editingNote?.id === id) setEditingNote(null);
  };

  const formatDate = (ts) => {
    const d = new Date(ts);
    return d.toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" }) + " " +
           d.toLocaleTimeString("en-IN", { hour:"2-digit", minute:"2-digit" });
  };

  const getCourseProgress = (course) => {
    let total = 0, done = 0;
    course.chapters.forEach((ch, ci) =>
      ch.lessons.forEach((_, li) => {
        total++;
        if (progress[`${course.id}-${ci}-${li}`]) done++;
      })
    );
    return total === 0 ? 0 : Math.round((done / total) * 100);
  };

  const toggleChapter = (i) =>
    setOpenChapters((p) => ({ ...p, [i]: !p[i] }));

  const styles = {
    app: {
      minHeight: "100vh",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      background: "#f8f9fb",
      color: "#1a1a2e",
    },
    navbar: {
      background: "#0f0f1a",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      padding: "0 2rem",
      height: "60px",
      gap: "1rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
    },
    logo: {
      fontWeight: 800,
      fontSize: "1.2rem",
      background: "linear-gradient(90deg, #61dafb, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "-0.5px",
    },
    navTabs: {
      display: "flex",
      gap: "0.25rem",
      marginLeft: "1rem",
      flexWrap: "wrap",
    },
    hero: {
      background: "linear-gradient(135deg, #0f0f1a 0%, #1a1a3e 60%, #0d2137 100%)",
      color: "#fff",
      padding: "5rem 2rem 4rem",
      textAlign: "center",
    },
    heroTitle: {
      fontSize: "clamp(2rem, 5vw, 3.5rem)",
      fontWeight: 900,
      margin: "0 0 1rem",
      lineHeight: 1.1,
      letterSpacing: "-1px",
    },
    heroSub: {
      fontSize: "1.15rem",
      opacity: 0.7,
      maxWidth: 550,
      margin: "0 auto 2rem",
      lineHeight: 1.6,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "1.5rem",
      padding: "3rem 2rem",
      maxWidth: 1100,
      margin: "0 auto",
    },
    card: (color, bg) => ({
      background: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      border: "1px solid #eee",
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    }),
    cardHeader: (color, bg) => ({
      background: bg,
      padding: "1.5rem 1.5rem 1rem",
      borderBottom: `3px solid ${color}`,
    }),
    badge: (color) => ({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 42,
      height: 42,
      borderRadius: 10,
      background: color,
      color: "#fff",
      fontWeight: 900,
      fontSize: "0.8rem",
      marginBottom: "0.75rem",
    }),
    cardBody: {
      padding: "1rem 1.5rem 1.5rem",
    },
    btn: (color) => ({
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "0.5rem 1.25rem",
      background: color,
      color: color === "#f0db4f" ? "#1a1a00" : "#fff",
      border: "none",
      borderRadius: 8,
      fontWeight: 700,
      fontSize: "0.85rem",
      cursor: "pointer",
      marginTop: "0.75rem",
      transition: "opacity 0.15s",
    }),
    progressBar: (pct, color) => ({
      height: 5,
      borderRadius: 4,
      background: "#eee",
      overflow: "hidden",
      margin: "0.5rem 0 0.25rem",
    }),
    progressFill: (pct, color) => ({
      height: "100%",
      width: `${pct}%`,
      background: color,
      borderRadius: 4,
      transition: "width 0.4s",
    }),
    courseView: {
      display: "grid",
      gridTemplateColumns: "320px 1fr",
      gap: 0,
      minHeight: "calc(100vh - 60px)",
    },
    sidebar: {
      background: "#fff",
      borderRight: "1px solid #eee",
      overflowY: "auto",
      position: "sticky",
      top: 60,
      height: "calc(100vh - 60px)",
    },
    sidebarHeader: (color) => ({
      borderBottom: `3px solid ${color}`,
      padding: "1.5rem",
    }),
    chapterItem: {
      borderBottom: "1px solid #f0f0f0",
    },
    chapterBtn: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0.85rem 1.25rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: "0.88rem",
      color: "#1a1a2e",
      textAlign: "left",
      gap: 8,
    },
    lessonBtn: (done) => ({
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: "0.6rem 1.25rem 0.6rem 2rem",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: "0.83rem",
      color: done ? "#888" : "#1a1a2e",
      textAlign: "left",
      transition: "background 0.15s",
    }),
    mainArea: {
      padding: "2.5rem",
      overflowY: "auto",
    },
    videoWrap: {
      background: "#0f0f1a",
      borderRadius: 14,
      overflow: "hidden",
      maxWidth: 800,
      marginBottom: "1.5rem",
      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
      position: "relative",
    },
    backBtn: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "0.45rem 1rem",
      background: "#f0f0f5",
      border: "none",
      borderRadius: 8,
      cursor: "pointer",
      fontSize: "0.85rem",
      fontWeight: 600,
      color: "#444",
      marginBottom: "1.5rem",
      transition: "background 0.15s",
    },
    tagBadge: (color) => ({
      display: "inline-block",
      padding: "0.2rem 0.65rem",
      background: color + "22",
      color: color,
      borderRadius: 6,
      fontSize: "0.75rem",
      fontWeight: 700,
      letterSpacing: "0.5px",
    }),
    checkBtn: (done, color) => ({
      marginTop: "0.75rem",
      padding: "0.5rem 1.1rem",
      background: done ? color : "transparent",
      color: done ? "#fff" : color,
      border: `2px solid ${color}`,
      borderRadius: 8,
      cursor: "pointer",
      fontWeight: 700,
      fontSize: "0.82rem",
      display: "flex",
      alignItems: "center",
      gap: 6,
      transition: "all 0.2s",
    }),
  };

  if (view === "lesson" && activeLesson) {
    return (
      <div style={styles.app}>
        <nav style={styles.navbar}>
          <span style={styles.logo}>DevLearn</span>
          <span style={{ color: "#555", fontSize: 14 }}>Video Player</span>
          <button
            onClick={openNotes}
            style={{
              marginLeft:"auto",
              display:"inline-flex", alignItems:"center", gap:6,
              padding:"0.35rem 0.85rem",
              background: view==="notes" ? "#a78bfa" : "rgba(167,139,250,0.12)",
              color: view==="notes" ? "#fff" : "#a78bfa",
              border:"1px solid rgba(167,139,250,0.35)",
              borderRadius:8, cursor:"pointer",
              fontWeight:700, fontSize:"0.8rem",
              transition:"all 0.15s",
            }}
          >
            <NoteIcon /> My Notes
            {myNotes.length > 0 && (
              <span style={{ background:"#a78bfa", color:"#fff", borderRadius:10,
                padding:"0 6px", fontSize:"0.68rem", fontWeight:800, minWidth:18, textAlign:"center" }}>
                {myNotes.length}
              </span>
            )}
          </button>
        </nav>
        <div style={{ padding: "2rem 2.5rem", maxWidth: 900, margin: "0 auto" }}>
          <button style={styles.backBtn} onClick={() => setView("course")}>
            <BackIcon /> Back to Course
          </button>
          <div style={styles.videoWrap}>
            <div style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden", borderRadius: 14 }}>
              <img
                src={`https://img.youtube.com/vi/${activeLesson.videoId}/maxresdefault.jpg`}
                alt={activeLesson.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                onError={(e) => {
                  e.target.src = `https://img.youtube.com/vi/${activeLesson.videoId}/hqdefault.jpg`;
                }}
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 60%, transparent 100%)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16,
              }}>
                <div style={{
                  width: 72, height: 72, borderRadius: "50%",
                  background: "rgba(255,0,0,0.92)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 24px rgba(255,0,0,0.5)",
                  cursor: "pointer",
                }}
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${activeLesson.videoId}&t=${activeLesson.startTime || 0}s`, "_blank")}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                    <polygon points="10,7 18,12 10,17"/>
                  </svg>
                </div>
                <div style={{ textAlign: "center", padding: "0 1.5rem" }}>
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "1rem", marginBottom: 6, textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}>
                    {activeLesson.title}
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${activeLesson.videoId}&t=${activeLesson.startTime || 0}s`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      padding: "0.55rem 1.4rem",
                      background: "#ff0000",
                      color: "#fff", borderRadius: 8,
                      fontWeight: 700, fontSize: "0.88rem",
                      textDecoration: "none",
                      boxShadow: "0 2px 12px rgba(255,0,0,0.4)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-2.75 12.08 12.08 0 0 0-8.64 0A4.83 4.83 0 0 1 3.41 6.69 46.52 46.52 0 0 0 3 12a46.52 46.52 0 0 0 .41 5.31 4.83 4.83 0 0 1 3.77 2.75 12.08 12.08 0 0 0 8.64 0 4.83 4.83 0 0 1 3.77-2.75A46.52 46.52 0 0 0 21 12a46.52 46.52 0 0 0-.41-5.31z"/>
                      <polygon points="10,8.5 16,12 10,15.5" fill="#ff0000"/>
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.5rem", fontWeight: 800 }}>
            {activeLesson.title}
          </h2>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span style={styles.tagBadge(activeLesson.courseColor)}>
              {activeCourse?.label}
            </span>
            <span style={{ color: "#888", fontSize: "0.82rem" }}>🕐 {activeLesson.duration}</span>
            {activeLesson.startTime > 0 && (
              <span style={{
                background: "#1a1a2e", color: "#61dafb",
                borderRadius: 6, padding: "0.2rem 0.65rem",
                fontSize: "0.72rem", fontWeight: 700,
              }}>
                ▶ Starts at {Math.floor(activeLesson.startTime / 60)}:{String(activeLesson.startTime % 60).padStart(2,"0")}
              </span>
            )}
          </div>
          <p style={{ color: "#666", lineHeight: 1.7, maxWidth: 700 }}>
            Click the play button or <strong>Watch on YouTube</strong> above to open this topic at the exact timestamp. Take notes and practice the code examples shown. When finished, mark it as complete to track your progress.
          </p>
        </div>
      </div>
    );
  }

  if (view === "course" && activeCourse) {
    const pct = getCourseProgress(activeCourse);
    return (
      <div style={styles.app}>
        <nav style={styles.navbar}>
          <span style={styles.logo}>DevLearn</span>
          <button
            style={{ ...styles.backBtn, background: "transparent", color: "#aaa", marginBottom: 0 }}
            onClick={() => setView("home")}
          >
            <BackIcon /> Courses
          </button>
          <span style={{ color: "#555", fontSize: 14 }}>/ {activeCourse.label}</span>
          <button
            onClick={openNotes}
            style={{
              marginLeft:"auto",
              display:"inline-flex", alignItems:"center", gap:6,
              padding:"0.35rem 0.85rem",
              background: view==="notes" ? "#a78bfa" : "rgba(167,139,250,0.12)",
              color: view==="notes" ? "#fff" : "#a78bfa",
              border:"1px solid rgba(167,139,250,0.35)",
              borderRadius:8, cursor:"pointer",
              fontWeight:700, fontSize:"0.8rem",
              transition:"all 0.15s",
            }}
          >
            <NoteIcon /> My Notes
            {myNotes.length > 0 && (
              <span style={{ background:"#a78bfa", color:"#fff", borderRadius:10,
                padding:"0 6px", fontSize:"0.68rem", fontWeight:800, minWidth:18, textAlign:"center" }}>
                {myNotes.length}
              </span>
            )}
          </button>
        </nav>
        <div style={styles.courseView}>
          {/* Sidebar */}
          <aside style={styles.sidebar}>
            <div style={styles.sidebarHeader(activeCourse.color)}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <div
                  style={{
                    ...styles.badge(activeCourse.color),
                    color: activeCourse.iconColor || "#fff",
                    fontSize: activeCourse.icon.length > 1 ? "0.72rem" : "1.1rem",
                  }}
                >
                  {activeCourse.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: "1rem" }}>{activeCourse.label}</div>
                  <div style={{ fontSize: "0.75rem", color: "#888" }}>{activeCourse.tagline}</div>
                </div>
              </div>
              <div style={styles.progressBar(pct, activeCourse.color)}>
                <div style={styles.progressFill(pct, activeCourse.color)} />
              </div>
              <div style={{ fontSize: "0.75rem", color: "#888" }}>{pct}% complete</div>
            </div>

            {activeCourse.chapters.map((ch, ci) => (
              <div key={ci} style={styles.chapterItem}>
                <button style={styles.chapterBtn} onClick={() => toggleChapter(ci)}>
                  <span>
                    <span style={{ color: "#bbb", marginRight: 6, fontSize: "0.75rem" }}>
                      {String(ci + 1).padStart(2, "0")}
                    </span>
                    {ch.title}
                  </span>
                  <ChevronIcon open={openChapters[ci]} />
                </button>
                {openChapters[ci] && ch.lessons.map((lesson, li) => {
                  const done = progress[`${activeCourse.id}-${ci}-${li}`];
                  return (
                    <div key={li} style={{ background: done ? "#f8fff8" : "transparent" }}>
                      <button
                        style={styles.lessonBtn(done)}
                        onClick={() => openLesson(lesson, activeCourse.color)}
                        onMouseEnter={(e) => (e.currentTarget.style.background = "#f8f9fb")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = done ? "#f8fff8" : "transparent")}
                      >
                        <span style={{ color: done ? "#22c55e" : activeCourse.color, flexShrink: 0 }}>
                          {done ? <CheckIcon /> : <PlayIcon />}
                        </span>
                        <span style={{ flex: 1 }}>{lesson.title}</span>
                        <span style={{ color: "#bbb", fontSize: "0.75rem", flexShrink: 0 }}>
                          {lesson.duration}
                        </span>
                      </button>
                      <div style={{ paddingLeft: "2.5rem", paddingBottom: "0.3rem" }}>
                        <button
                          style={styles.checkBtn(done, activeCourse.color)}
                          onClick={() => markDone(activeCourse.id, ci, li)}
                        >
                          {done ? <><CheckIcon /> Done</> : "Mark Complete"}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </aside>

          {/* Main */}
          <main style={styles.mainArea}>
            <div
              style={{
                background: activeCourse.bg,
                borderRadius: 16,
                padding: "2.5rem",
                marginBottom: "2rem",
                border: `1px solid ${activeCourse.color}33`,
              }}
            >
              <span style={styles.tagBadge(activeCourse.color)}>{activeCourse.label}</span>
              <h1 style={{ margin: "0.75rem 0 0.5rem", fontSize: "2rem", fontWeight: 900 }}>
                {activeCourse.tagline}
              </h1>
              <p style={{ color: "#555", lineHeight: 1.7, maxWidth: 560 }}>{activeCourse.description}</p>
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  marginTop: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "Chapters", value: activeCourse.chapters.length },
                  {
                    label: "Lessons",
                    value: activeCourse.chapters.reduce((a, c) => a + c.lessons.length, 0),
                  },
                  { label: "Progress", value: `${pct}%` },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      background: "#fff",
                      borderRadius: 10,
                      padding: "0.75rem 1.25rem",
                      border: "1px solid #eee",
                      textAlign: "center",
                      minWidth: 90,
                    }}
                  >
                    <div style={{ fontWeight: 900, fontSize: "1.4rem", color: activeCourse.color }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#888" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <h2 style={{ fontWeight: 800, fontSize: "1.1rem", marginBottom: "1rem" }}>
              Course Curriculum
            </h2>
            {activeCourse.chapters.map((ch, ci) => (
              <div
                key={ci}
                style={{
                  background: "#fff",
                  borderRadius: 12,
                  border: "1px solid #eee",
                  marginBottom: "1rem",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "1rem 1.5rem",
                    background: "#fafafa",
                    borderBottom: "1px solid #eee",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      background: activeCourse.color + "22",
                      color: activeCourse.color,
                      borderRadius: 6,
                      padding: "2px 8px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                    }}
                  >
                    Chapter {ci + 1}
                  </span>
                  {ch.title}
                </div>
                {ch.lessons.map((lesson, li) => {
                  const done = progress[`${activeCourse.id}-${ci}-${li}`];
                  return (
                    <div
                      key={li}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "0.85rem 1.5rem",
                        borderBottom: li < ch.lessons.length - 1 ? "1px solid #f5f5f5" : "none",
                        cursor: "pointer",
                        transition: "background 0.15s",
                        background: done ? "#f8fff8" : "transparent",
                      }}
                      onMouseEnter={(e) => !done && (e.currentTarget.style.background = "#f8f9fb")}
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = done ? "#f8fff8" : "transparent")
                      }
                      onClick={() => openLesson(lesson, activeCourse.color)}
                    >
                      <span style={{ color: done ? "#22c55e" : activeCourse.color }}>
                        {done ? <CheckIcon /> : <PlayIcon />}
                      </span>
                      <span style={{ flex: 1, fontSize: "0.88rem", fontWeight: done ? 400 : 500, color: done ? "#888" : "#1a1a2e" }}>
                        {lesson.title}
                      </span>
                      <span style={{ fontSize: "0.75rem", color: "#bbb" }}>⏱ {lesson.duration}</span>
                      <button
                        style={{
                          padding: "0.3rem 0.75rem",
                          background: done ? "#22c55e22" : activeCourse.color + "22",
                          color: done ? "#22c55e" : activeCourse.color,
                          border: "none",
                          borderRadius: 6,
                          cursor: "pointer",
                          fontSize: "0.72rem",
                          fontWeight: 700,
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          markDone(activeCourse.id, ci, li);
                        }}
                      >
                        {done ? "✓ Done" : "Mark Done"}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </main>
        </div>
      </div>
    );
  }


  // ── NOTES VIEW ──────────────────────────────────────────────────────
  if (view === "notes") {
    const filtered = myNotes.filter(n => {
      const matchTag   = noteFilter === "all" || n.tag === noteFilter;
      const matchSearch = !noteSearch || n.title.toLowerCase().includes(noteSearch.toLowerCase()) ||
                          n.body.toLowerCase().includes(noteSearch.toLowerCase());
      return matchTag && matchSearch;
    });

    const blankNote = { id: null, title: "", body: "", tag: "general", color: "#ffffff" };

    return (
      <div style={styles.app}>
        <nav style={styles.navbar}>
          <span style={styles.logo}>DevLearn</span>
          <button
            style={{ background:"transparent", border:"none", color:"#aaa", cursor:"pointer",
              display:"flex", alignItems:"center", gap:4, fontSize:"0.82rem", fontWeight:600 }}
            onClick={() => setView(prevView || "home")}
          >
            <BackIcon /> Back
          </button>
          <span style={{ color:"#555", fontSize:13 }}>/ My Notes</span>
          <button onClick={openNotes}
            style={{ marginLeft:"auto", display:"inline-flex", alignItems:"center", gap:6,
              padding:"0.35rem 0.85rem", background:"#a78bfa", color:"#fff",
              border:"none", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:"0.8rem" }}>
            <NoteIcon /> My Notes
            {myNotes.length > 0 && (
              <span style={{ background:"rgba(255,255,255,0.3)", borderRadius:10,
                padding:"0 6px", fontSize:"0.68rem", fontWeight:800 }}>{myNotes.length}</span>
            )}
          </button>
        </nav>

        <div style={{ display:"grid", gridTemplateColumns:"300px 1fr", minHeight:"calc(100vh - 60px)" }}>
          {/* ── Left: list panel ── */}
          <div style={{ background:"#fff", borderRight:"1px solid #eee", display:"flex", flexDirection:"column" }}>
            {/* Search + New */}
            <div style={{ padding:"1rem", borderBottom:"1px solid #eee", display:"flex", flexDirection:"column", gap:8 }}>
              <div style={{ position:"relative" }}>
                <span style={{ position:"absolute", left:10, top:"50%", transform:"translateY(-50%)", color:"#bbb" }}>
                  <SearchIconSVG />
                </span>
                <input
                  value={noteSearch}
                  onChange={e => setNoteSearch(e.target.value)}
                  placeholder="Search notes..."
                  style={{ width:"100%", padding:"0.45rem 0.75rem 0.45rem 2rem", borderRadius:8,
                    border:"1px solid #e0e0e0", fontSize:"0.82rem", outline:"none", boxSizing:"border-box" }}
                />
              </div>
              <button
                onClick={() => setEditingNote({ ...blankNote })}
                style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6,
                  padding:"0.5rem", background:"linear-gradient(135deg,#a78bfa,#818cf8)",
                  color:"#fff", border:"none", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:"0.82rem" }}>
                <PlusIcon /> New Note
              </button>
            </div>

            {/* Tag filter */}
            <div style={{ padding:"0.65rem 1rem", borderBottom:"1px solid #f5f5f5", display:"flex", gap:4, flexWrap:"wrap" }}>
              {NOTE_TAGS.map(tag => (
                <button key={tag} onClick={() => setNoteFilter(tag)}
                  style={{ padding:"0.2rem 0.6rem", borderRadius:6,
                    background: noteFilter === tag ? TAG_COLORS[tag] : TAG_COLORS[tag]+"18",
                    color: noteFilter === tag ? "#fff" : TAG_COLORS[tag],
                    border:"none", cursor:"pointer", fontWeight:700, fontSize:"0.68rem",
                    textTransform:"uppercase", letterSpacing:"0.5px" }}>
                  {tag}
                </button>
              ))}
            </div>

            {/* Note list */}
            <div style={{ overflowY:"auto", flex:1 }}>
              {filtered.length === 0 ? (
                <div style={{ padding:"2.5rem 1rem", textAlign:"center", color:"#ccc" }}>
                  <div style={{ fontSize:"2.5rem", marginBottom:8 }}>📝</div>
                  <div style={{ fontSize:"0.85rem" }}>
                    {myNotes.length === 0 ? "No notes yet. Click New Note!" : "No notes match."}
                  </div>
                </div>
              ) : (
                filtered.map(note => (
                  <div key={note.id}
                    onClick={() => setEditingNote({ ...note })}
                    style={{
                      padding:"0.85rem 1rem", borderBottom:"1px solid #f5f5f5",
                      background: editingNote?.id === note.id ? "#f5f0ff" : note.color,
                      cursor:"pointer", transition:"background 0.15s",
                      borderLeft: editingNote?.id === note.id ? "3px solid #a78bfa" : "3px solid transparent",
                    }}>
                    <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:6 }}>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ fontWeight:700, fontSize:"0.85rem", color:"#1a1a2e",
                          whiteSpace:"nowrap", overflow:"hidden", textOverflow:"ellipsis" }}>
                          {note.title || "Untitled Note"}
                        </div>
                        <div style={{ fontSize:"0.75rem", color:"#888", marginTop:2,
                          overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap",
                          display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical",
                          whiteSpace:"normal" }}>
                          {note.body || "No content"}
                        </div>
                      </div>
                      <button onClick={e => { e.stopPropagation(); deleteNote(note.id); }}
                        style={{ background:"transparent", border:"none", color:"#ddd", cursor:"pointer",
                          padding:2, borderRadius:4, flexShrink:0, transition:"color 0.15s" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "#ef4444")}
                        onMouseLeave={e => (e.currentTarget.style.color = "#ddd")}>
                        <TrashIcon />
                      </button>
                    </div>
                    <div style={{ display:"flex", gap:6, marginTop:6, alignItems:"center" }}>
                      <span style={{ background: TAG_COLORS[note.tag]+"22", color: TAG_COLORS[note.tag],
                        borderRadius:5, padding:"0.1rem 0.5rem", fontSize:"0.65rem", fontWeight:800,
                        textTransform:"uppercase" }}>{note.tag}</span>
                      <span style={{ fontSize:"0.65rem", color:"#ccc" }}>{formatDate(note.updatedAt)}</span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* ── Right: editor panel ── */}
          <div style={{ display:"flex", flexDirection:"column", background:"#fafafa" }}>
            {editingNote ? (
              <NoteEditor
                note={editingNote}
                onSave={saveNote}
                onDelete={deleteNote}
                onCancel={() => setEditingNote(null)}
                formatDate={formatDate}
              />
            ) : (
              <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:12, color:"#ccc" }}>
                <div style={{ fontSize:"4rem" }}>📓</div>
                <div style={{ fontSize:"1rem", fontWeight:600 }}>Select a note to edit</div>
                <div style={{ fontSize:"0.82rem" }}>or click New Note to get started</div>
                <button onClick={() => setEditingNote({ id:null, title:"", body:"", tag:"general", color:"#ffffff" })}
                  style={{ marginTop:8, display:"flex", alignItems:"center", gap:6, padding:"0.55rem 1.25rem",
                    background:"linear-gradient(135deg,#a78bfa,#818cf8)", color:"#fff",
                    border:"none", borderRadius:8, cursor:"pointer", fontWeight:700, fontSize:"0.85rem" }}>
                  <PlusIcon /> New Note
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Home
  return (
    <div style={styles.app}>
      <nav style={styles.navbar}>
        <span style={styles.logo}>DevLearn</span>
        <div style={styles.navTabs}>
          {courses.map((c) => (
            <button
              key={c.id}
              style={{
                background: "transparent",
                border: "none",
                color: "#aaa",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "0.82rem",
                padding: "0.3rem 0.6rem",
                borderRadius: 6,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = c.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
              onClick={() => openCourse(c)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:12 }}>
          {courses.reduce((a, c) => a + getCourseProgress(c), 0) > 0 && (
            <span style={{ fontSize:"0.78rem", color:"#555" }}>🔥 Learning streak active</span>
          )}
          <button
            onClick={openNotes}
            style={{
              marginLeft:"auto",
              display:"inline-flex", alignItems:"center", gap:6,
              padding:"0.35rem 0.85rem",
              background: view==="notes" ? "#a78bfa" : "rgba(167,139,250,0.12)",
              color: view==="notes" ? "#fff" : "#a78bfa",
              border:"1px solid rgba(167,139,250,0.35)",
              borderRadius:8, cursor:"pointer",
              fontWeight:700, fontSize:"0.8rem",
              transition:"all 0.15s",
            }}
          >
            <NoteIcon /> My Notes
            {myNotes.length > 0 && (
              <span style={{ background:"#a78bfa", color:"#fff", borderRadius:10,
                padding:"0 6px", fontSize:"0.68rem", fontWeight:800, minWidth:18, textAlign:"center" }}>
                {myNotes.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div style={styles.hero}>
        <div
          style={{
            display: "inline-flex",
            gap: 8,
            marginBottom: "1.5rem",
            background: "rgba(255,255,255,0.06)",
            borderRadius: 20,
            padding: "0.35rem 1rem",
            fontSize: "0.8rem",
            color: "#61dafb",
            fontWeight: 600,
            letterSpacing: 1,
          }}
        >
          ★ VIDEO-BASED LEARNING PLATFORM
        </div>
        <h1 style={styles.heroTitle}>
          Master{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #61dafb, #a78bfa, #f0db4f)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Full Stack Web Dev
          </span>
          <br />
          from Zero to Hero
        </h1>
        <p style={styles.heroSub}>
          Learn HTML, CSS, JavaScript, React & MySQL with easy, structured video tutorials.
          Track your progress chapter by chapter.
        </p>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          {courses.map((c) => (
            <button
              key={c.id}
              style={{
                padding: "0.55rem 1.25rem",
                background: c.color,
                color: c.color === "#f0db4f" ? "#1a1a00" : "#fff",
                border: "none",
                borderRadius: 8,
                fontWeight: 700,
                fontSize: "0.85rem",
                cursor: "pointer",
                opacity: 0.92,
                transition: "opacity 0.15s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = 1;
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = 0.92;
                e.currentTarget.style.transform = "translateY(0)";
              }}
              onClick={() => openCourse(c)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #eee",
          padding: "1rem 2rem",
          display: "flex",
          gap: 32,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Courses", value: 5 },
          { label: "Total Lessons", value: courses.reduce((a, c) => a + c.chapters.reduce((b, ch) => b + ch.lessons.length, 0), 0) },
          { label: "Hours of Content", value: "12+" },
          { label: "Technologies", value: "HTML · CSS · JS · React · MySQL" },
        ].map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 900, fontSize: "1.3rem", color: "#1a1a2e" }}>{s.value}</div>
            <div style={{ fontSize: "0.75rem", color: "#999", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Course cards */}
      <div style={styles.grid}>
        {courses.map((course) => {
          const pct = getCourseProgress(course);
          const totalLessons = course.chapters.reduce((a, c) => a + c.lessons.length, 0);
          return (
            <div
              key={course.id}
              style={styles.card(course.color, course.bg)}
              onClick={() => openCourse(course)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
              }}
            >
              <div style={styles.cardHeader(course.color, course.bg)}>
                <div
                  style={{
                    ...styles.badge(course.color),
                    color: course.iconColor || "#fff",
                    fontSize: course.icon.length > 1 ? "0.72rem" : "1.1rem",
                  }}
                >
                  {course.icon}
                </div>
                <div style={{ fontWeight: 900, fontSize: "1.25rem", color: "#1a1a2e" }}>
                  {course.label}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#666", marginTop: 2 }}>{course.tagline}</div>
              </div>
              <div style={styles.cardBody}>
                <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: 1.6, marginBottom: "1rem", minHeight: 52 }}>
                  {course.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 12,
                    fontSize: "0.75rem",
                    color: "#999",
                    marginBottom: "0.75rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span>📚 {course.chapters.length} Chapters</span>
                  <span>▶ {totalLessons} Lessons</span>
                </div>
                <div style={styles.progressBar(pct, course.color)}>
                  <div style={styles.progressFill(pct, course.color)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.72rem", color: "#bbb" }}>
                  <span>{pct}% complete</span>
                  <span>{Math.round((pct / 100) * totalLessons)}/{totalLessons} lessons</span>
                </div>
                <button style={styles.btn(course.color)}>
                  {pct > 0 ? "Continue →" : "Start Learning →"}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          color: "#bbb",
          fontSize: "0.8rem",
          borderTop: "1px solid #eee",
        }}
      >
        DevLearn · Full Stack Tutorial Platform · Built with React
      </div>
    </div>
  );
}
