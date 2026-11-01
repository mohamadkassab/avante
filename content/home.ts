import { clientLogos } from "@/content/clients";
import { asset } from "@/content/asset";
import { portfolio } from "@/content/portfolio";

// Home "Projects that inspire" cards are real projects, looked up by their exact
// title in content/portfolio.ts — a renamed project fails the build here instead
// of silently dropping its card.
function portfolioHighlight(title: string) {
  const project = portfolio.gallery.projects.find((p) => p.title === title);
  if (!project) throw new Error(`Home portfolio highlight "${title}" is not a project in content/portfolio.ts`);
  return { title: project.title, location: project.outsideLocation, image: project.image };
}

export const home = {
  hero: {
    heading: "Advanced Kitchen Ventilation",
    headingGradient: "& Environmental Solutions",
    subtitle:
      "Performance. Safety. Sustainability. ",
    image: {
      src: asset("/images/about-us-cover.webp"),
      alt: "Commercial Kitchen",
    },
    video: {
      webm: asset("/Videos/hero-video.webm"),
      mp4: asset("/Videos/hero-video.mp4"),
    },
    cta: {
      primary: { label: "EXPLORE PRODUCTS", href: "/products" },
      secondary: { label: "GET IN TOUCH", href: "/contact" },
    },
  },
  about: {
    badge: "ABOUT AVANTE",
    headingLine1: "Tailored solutions for",
    headingLine2: "commercial excellence",
    paragraphs: [
      "Avante is a leading provider of custom-engineered commercial kitchen ventilation and HVAC solutions across food service industries. We deliver fully integrated systems including kitchen canopies, demand control ventilation, fire suppression, ecology units and complete HVAC solutions.",
      "Our solutions are meticulously designed to address the specific operational requirements of every project, that ensure seamless operation and sustained performance throughout the system Lifecycle.",
      "Supported by a team of highly experienced engineers with over 50 years of combined expertise across the UK, the Middle East, and India, Avante brings technical knowledge and industry insight to every project we undertake."
    ],
    stats: [
      { icon: "people", value: "250+", label: "Projects Successfully Delivered" },
      { icon: "award", value: "20+", label: "Years Engineering Experience" },
      { icon: "location", value: "10+", label: "Countries Project Presence" },
      { icon: "custom", value: "100%", label: "Custom Engineered Solutions" },
    ],
    cta: { label: "LEARN MORE ABOUT US", href: "/about" },
    images: [
      { src: asset("/images/home-about-1-v2.webp"), alt: "Avante Kitchen" },
      { src: asset("/images/home-about-2.jpg"), alt: "Avante Kitchen" },
      { src: asset("/images/home-about-3.jpeg"), alt: "Avante Kitchen" },
    ],
  },
  products: {
    badge: "OUR PRODUCTS",
    heading: "Engineered for excellence",
    subtitle: "Comprehensive solutions designed and manufactured in the UAE",
    cta: { label: "VIEW ALL PRODUCTS", href: "/products" },
  },
  clients: {
    badge: "OUR CLIENTS",
    heading: "Trusted by industry leaders",
    subtitle: "Proud to serve leading hospitality and restaurant brands around the world",
    footerText: "Avante ventilation systems are trusted across a wide range of hospitality and commercial foodservice environments.",
    items: clientLogos,
  },
  portfolio: {
    badge: "PORTFOLIO",
    heading: "Projects that inspire",
    subtitle: "Explore our portfolio of successful installations across diverse industries",
    cta: { label: "VIEW ALL PROJECTS", href: "/portfolio" },
    items: ["Bâoli", "Gloria Osteria, Big Mamma", "SĀN Beach"].map(portfolioHighlight),
  },
  cta: {
    headingLine1: "Ready to elevate your",
    headingLine2: "commercial kitchen?",
    subtitle: "Contact our team of experts and get a customised solution tailored to your project needs.",
    button: { label: "GET IN TOUCH", href: "/contact" },
  },
};
