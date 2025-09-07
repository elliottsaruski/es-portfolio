import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "symptoms-of-nature",
    title: "Symptoms of Nature",
    oneLiner:
      "React site for a creative collective with Notion-backed publishing and interactive audio-visual experiences.",
    year: "2024",
    roles: ["Front-end", "Creative Technologist"],
    stack: [
      "React",
      "R3F",
      "Netlify",
      "Notion API",
      "Netlify Functions",
      "Webamp",
    ],
    tags: ["Multimedia"],
    heroImage: "/assets/images/projects/son/cover.jpg",
    external: [
      { label: "Website", url: "https://symptomsofnature.com" },
      {
        label: "GitHub",
        url: "https://github.com/elliottsaruski/symptoms-of-nature-website",
      },
    ],
    description:
      "Developed and deployed a React-based site for Symptoms of Nature; integrated Notion API with Netlify Functions and experimented with interactive visuals.",
  },
  {
    slug: "hrs-app",
    title: "HRS",
    oneLiner:
      "Web audio tool to upload a track and adjust playback speed via the Web Audio API and Wavesurfer.js.",
    year: "2024",
    roles: ["Front-end"],
    stack: ["React", "Web Audio API", "Netlify", "File API", "Wavesurfer.js"],
    tags: ["Audio"],
    heroImage: "/assets/images/projects/hrs/cover.png",
    external: [
      { label: "Live Demo", url: "https://hrs-app.netlify.app/" },
      { label: "GitHub", url: "https://github.com/elliottsaruski/HRS-app" },
    ],
    description:
      "React app deployed on Netlify with CI; lets users manipulate audio speed using the Web Audio API.",
  },
  {
    slug: "envi-portfolio",
    title: "envi Portfolio",
    oneLiner:
      "Music & multimedia portfolio with a reusable audio player and optimized media delivery.",
    roles: ["Frontend", "Design"],
    stack: ["React", "Audio Player", "Cloudinary", "Netlify"],
    tags: ["Audio", "Multimedia"],
    heroImage: "/assets/images/projects/envi/cover.jpg",
    external: [
      { label: "Website", url: "https://envimusic.netlify.app/" },
      {
        label: "GitHub",
        url: "https://github.com/elliottsaruski/envi-website",
      },
    ],
    description:
      "React-based portfolio for original music and visual work; includes a custom audio player and Cloudinary CDN for faster media loads.",
  },
  {
    slug: "vital-presets",
    title: "100 Free Vital Presets (envi)",
    oneLiner:
      "A free pack of 100 Vital patches including basses, pads, FX, plus custom artwork.",
    roles: ["Sound Design", "Branding"],
    tags: ["Vital", "Sound Design", "Adobe Creative Cloud", "Ableton 11"],
    heroImage: "/assets/images/projects/vital/cover.png",
    external: [
      {
        label: "Gumroad",
        url: "https://envimusic.gumroad.com/l/vitalpresetsbyenvi",
      },
    ],
    description:
      "Free Vital preset pack by envi with custom branding; download on Gumroad.",
  },
];
