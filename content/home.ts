import { clientLogos } from "@/content/clients";

export const home = {
  hero: {
    heading: "Advanced Kitchen Ventilation",
    headingGradient: "& Environmental Solutions",
    subtitle:
      "Performance. Safety. Sustainability. ",
    image: {
      src: "/images/about-us-cover.webp",
      alt: "Commercial Kitchen",
    },
    video: {
      webm: "/Videos/hero-video.webm",
      mp4: "/Videos/hero-video.mp4",
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
      { src: "/images/home-about-1.jpeg", alt: "Avante Kitchen" },
      { src: "/images/home-about-2.jpg", alt: "Avante Kitchen" },
      { src: "/images/home-about-3.jpeg", alt: "Avante Kitchen" },
    ],
  },
  products: {
    badge: "OUR PRODUCTS",
    heading: "Engineered for excellence",
    subtitle: "Comprehensive solutions designed and manufactured in the UAE",
    cta: { label: "VIEW ALL PRODUCTS", href: "/products" },
    items: [
      {
        icon: "building",
        title: "Kitchen Canopies",
        description: "Custom-designed extraction systems for optimal performance",
        image: { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=600&q=80", alt: "Kitchen Canopies" },
      },
      {
        icon: "air",
        title: "HVAC Systems",
        description: "Advanced climate control for commercial spaces",
        image: { src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80", alt: "HVAC Systems" },
      },
      {
        icon: "fire",
        title: "Fire Suppression",
        description: "Cutting-edge safety systems for kitchen environments",
        image: { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80", alt: "Fire Suppression" },
      },
      {
        icon: "grid",
        title: "Ventilated Ceiling",
        description: "Innovative ceiling ventilation solutions",
        image: { src: "https://images.unsplash.com/photo-1504204267155-aaad8e81290d?w=600&q=80", alt: "Ventilated Ceiling" },
      },
      {
        icon: "bolt",
        title: "Demand Control Ventilation",
        description: "Smart ventilation that adapts to kitchen activity",
        image: { src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80", alt: "Demand Control Ventilation" },
      },
    ],
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
    items: [
      {
        title: "Luxury Hotel Kitchen",
        location: "Dubai Marina",
        image: { src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80", alt: "Luxury Hotel Kitchen" },
      },
      {
        title: "Premium Restaurant Complex",
        location: "Business Bay",
        image: { src: "https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?w=800&q=80", alt: "Premium Restaurant Complex" },
      },
      {
        title: "Fine Dining Restaurant",
        location: "Palm Jumeirah",
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Fine Dining Restaurant" },
      },
    ],
  },
  cta: {
    headingLine1: "Ready to elevate your",
    headingLine2: "commercial kitchen?",
    subtitle: "Contact our team of experts and get a customised solution tailored to your project needs.",
    buttons: [
      { label: "CALL US NOW", href: "tel:+97142345678", variant: "glass" },
    ],
    contact: [
      { icon: "phone", value: "+971 4 239 2882" },
      { icon: "email", value: "sales@avanteuae.com" },
    ],
  },
};
