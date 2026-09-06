import { Icons } from "@/components/icons";
import { Java } from "@/components/ui/svgs/java";
import { HomeIcon, NotebookIcon } from "lucide-react";
import type { SVGProps } from "react";

// Simple Icons supplies the technology logos while keeping this data file easy to update.
const skillIcon = (name: string) =>
  function SkillIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
        <image
          href={`https://cdn.simpleicons.org/${name}`}
          width="24"
          height="24"
        />
      </svg>
    );
  };

export const DATA = {
  name: "Shubham Jha",
  initials: "SJ",
  url: "https://shubhamjha.com",
  location: "Delhi,India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Computer Science undergraduate passionate about building impactful products with Full-Stack Development and AI tools.",
  summary:
    "Computer Science undergraduate with expertise in Full-Stack Development, Data Structures & Algorithms, and scalable web applications. Proficient in C++, JavaScript, React.js, Node.js, Express.js, and MongoDB with experience in developing responsive applications and efficient backend systems.",
  avatarUrl: "/Shubham.png",
  skills: [
    { name: "Java", icon: Java },
    { name: "C++", icon: skillIcon("cplusplus/00599C") },
    { name: "C", icon: skillIcon("c/A8B9CC") },
    // { name: "Dart", icon: skillIcon("dart/0175C2") },
    { name: "JavaScript", icon: skillIcon("javascript/F7DF1E") },
    { name: "TypeScript", icon: skillIcon("typescript/3178C6") },
    { name: "Python", icon: skillIcon("python/3776AB") },
    { name: "React", icon: skillIcon("react/61DAFB") },
    { name: "Next.js", icon: skillIcon("nextdotjs/000000") },
    { name: "Vite.js", icon: skillIcon("vite/646CFF") },
    { name: "Tailwind CSS", icon: skillIcon("tailwindcss/06B6D4") },
    { name: "Node.js", icon: skillIcon("nodedotjs/339933") },
    { name: "Express.js", icon: skillIcon("express/000000") },
    { name: "Firebase", icon: skillIcon("firebase/FFCA28") },
    { name: "PostgreSQL", icon: skillIcon("postgresql/4169E1") },
    { name: "MongoDB", icon: skillIcon("mongodb/47A248") },
    { name: "SQLite", icon: skillIcon("sqlite/003B57") },
    { name: "MySQL", icon: skillIcon("mysql/4479A1") },
    { name: "Firestore", icon: skillIcon("firebase/FFCA28") },
    // { name: "RAG", icon: skillIcon("openai/000000") },
    // { name: "LLM Integration", icon: skillIcon("openai/000000") },
    // { name: "Vector Search", icon: skillIcon("openai/000000") },
    { name: "Git/GitHub", icon: skillIcon("github/181717") },
    //{ name: "Jira", icon: skillIcon("jira/0052CC") },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "shubhamjha28102004@gmail.com",
    tel: "+91 9310664144",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ShubhamJha28",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shubham-jha-a37a49263/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Shubhamjha2810",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    // {
    //   company: "Atomic Finance",
    //   href: "https://atomic.finance",
    //   badges: [],
    //   location: "Remote",
    //   title: "Bitcoin Protocol Engineer",
    //   logoUrl: "/atomic.png",
    //   start: "June 2026",
    //   end: "August 2026",
    //   description:
    //     "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    // },
    {
      company: "NavDrishti",
      badges: [],
      href: "https://navdrishtigroup.com",
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/navdrishti.jpeg",
      start: "June 2025",
      end: "August 2025",
      description:
        "Contributed to the development and design of the Navdrishti website, focusing on creating responsive, user-friendly web interfaces and improving the overall user experience. Collaborated with the team to implement website features, refine layouts, and optimize the site’s visual presentation across different devices. Assisted in translating design concepts into functional web components while ensuring consistency, usability, and a modern digital presence for the organization.  ",
    },
    {
      company: "CSI-Innowave",
      href: "https://www.csiinnowave.com/",
      badges: [],
      location: "Remote",
      title: "Content Head",
      logoUrl: "/csi.jpeg",
      start: "September 2024",
      end: "Present",
      description:
        "Drove digital growth for 10+ flagship technical events and hackathons by leading a creative team and executing 100+ branding and promotional assets, generating 600K+ organic social media impressions and expanding event reach and engagement.",
    },
    {
      company: "AWS Student Builder Group",
      href: "https://aws-cloud-clubs-mait.vercel.app/",
      badges: [],
      location: "MAIT",
      title: "Vice President",
      logoUrl: "/aws.jpeg",
      start: "June 2025",
      end: "Present",
      description:
        "Led a 300+ member technical community, mentoring teams and driving initiatives in Cloud Computing, Artificial Intelligence, and Software Development. Organized workshops, hackathons, and industry sessions, providing 1,000+ students with hands-on exposure to AWS, emerging technologies, and software engineering practices.",
    },
  ],
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      href: "https://mait.ac.in/",
      degree: "Bachelor's of Technology in Computer Science - CGPA: 7.5",
      logoUrl: "/Mait.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Kendriya Vidyalaya ",
      href: "https://sainikvihar.kvs.ac.in/",
      degree: "Senior Secondary School ",
      logoUrl: "/kv.png",
      start: "2011",
      end: "2022",
    },
    
  ],
  projects: [
    {
      title: "Food Delivery Website",
      href: "https://food-delivery-app-seven-rosy.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a full-stack food delivery website using React.js and RESTful APIs, enabling users to browse restaurants, explore menus, manage carts, and place orders through a responsive and user-friendly interface. Implemented authentication, database operations, and reusable components for efficient and scalable performance.",
      technologies: [
        "React.js",
        "TypeScript",
        "JavaScript",
        "Vite 7",
        "Redux Toolkit",
        "Tailwind CSS",
        "HTML5",
        "RESTful APIs",
        
      ],
      links: [
        {
          type: "Website",
          href: "https://food-delivery-app-seven-rosy.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamJha28/Food_Delivery_App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/FoodDelivery.png",
    },
    {
      title: "Pokemon Memory Card",
      href: "https://pokemon-memory-card-eta.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed an interactive Pokémon-themed memory card game using JavaScript, featuring card-flipping mechanics, matching logic, score tracking, and dynamic game state management. Designed a responsive UI with HTML and CSS, incorporating smooth animations, intuitive gameplay, and restart functionality for an engaging experience across devices.",
      technologies: [
        "React.js",
        "Vite",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      links: [
        {
          type: "Website",
          href: "https://pokemon-memory-card-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamJha28/Pokemon-memory-card",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Pokemon.png",
    },
    {
      title: "Monster Ultra Website",
      href: "https://monster-ultra-website.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Designed and developed an immersive, scroll-driven product website for Monster Ultra, featuring interactive animations, cinematic visuals, responsive layouts, and engaging product storytelling. Built a modern, high-performance UI focused on smooth user interactions, visual branding, and an engaging Gen-Z experience.",
      technologies: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "UI/UX",
        "Animations",
        "Git/GitHub",
      ],
      links: [
        {
          type: "Website",
          href: "https://monster-ultra-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/ShubhamJha28/Monster-Ultra-Website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Monster.png",
    },
    {
      title: "Wandris App",
      href: "https://www.figma.com/design/e62IaxHGR0uVBBw8rbu11X/Wandris?node-id=4-2&p=f",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Designed the complete UI/UX for Wandris, a Smart India Hackathon 2025 solution focused on improving tourist safety and emergency response. Created wireframes, high-fidelity interfaces, design systems, and interactive prototypes in Figma, with intuitive user journeys for SOS assistance, safety heatmaps, location-based alerts, digital identity verification, and incident reporting.",
      technologies: [
        "Figma",
        "Prototyping",
        "Wireframing",
        "Design Systems",
        "User Flows",
        
      ],
      links: [
        {
          type: "Figma",
          href: "https://www.figma.com/design/e62IaxHGR0uVBBw8rbu11X/Wandris?node-id=4-2&p=f",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/Figma.png",
    },
  ],
} as const;
