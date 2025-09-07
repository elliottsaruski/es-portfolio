export type ExternalLink = { label: string; url: string };

export type Project = {
  slug: string;               // "symptoms-of-nature"
  title: string;              // "Symptoms of Nature"
  oneLiner: string;           // short card blurb
  year?: string;              // "2025"
  roles: string[];            // ["Front-end", "Sound design"]
  stack?: string[];           // ["React", "R3F", "Netlify"]
  tags: string[];             // ["3D", "Brand Design", "Audio"]
  heroImage: string;          // import or /assets path
  gallery?: string[];         // optional detail images
  external?: ExternalLink[];  // live demo/Gumroad/GitHub
  description?: string;       // meta description
};
