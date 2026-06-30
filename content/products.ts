export const products = {
  hero: {
    heading: "Our",
    headingGradient: "Products",
    subtitle: "Comprehensive solutions engineered for excellence",
    image: {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80",
      alt: "Avante Products",
    },
  },
  cta: {
    heading: "Need a custom solution?",
    subtitle: "Every project is unique. Let's discuss your specific requirements.",
    button: { label: "GET IN TOUCH", href: "/contact" },
  },
};

/**
 * Full product catalogue — four categories, each with a short description and
 * its list of sub-products. Icon keys map to the shared `productIcons`
 * registry in components/icons.tsx.
 *
 * `image` currently points at placeholder stock photos — replace each `src`
 * with the real product image link when available.
 */
export const productCategories = [
  {
    icon: "building",
    title: "Commercial Kitchen Canopies",
    description:
      "A complete range of engineered kitchen canopies designed to capture heat, grease, smoke, and vapours with maximum efficiency, delivering safer kitchens and superior ventilation performance.",
    image: {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
      alt: "Commercial Kitchen Canopies",
    },
    items: [
      "High Efficiency Kitchen Hood",
      "High Efficiency Kitchen Hood with Ultraviolet Filtration",
      "High Efficiency Kitchen Hood with Water Mist",
      "High Efficiency Kitchen Hood with Water Wash",
      "High Efficiency Kitchen Hood with Water Mist and Water Wash",
      "High Efficiency Kitchen Hood with Ultra Violet and Water Mist",
      "High Efficiency Kitchen Hood with Ultra Violet and Water Wash",
      "Condensate Hood",
    ],
  },
  {
    icon: "grid",
    title: "Special Kitchen Ventilation Products",
    description:
      "Purpose-built ventilation innovations that optimize workflow, improve functionality, and adapt to the unique demands of every commercial kitchen.",
    image: {
      src: "https://images.unsplash.com/photo-1504204267155-aaad8e81290d?w=800&q=80",
      alt: "Special Kitchen Ventilation Products",
    },
    items: [
      "Ventilated Ceiling",
      "SDU (Service Distribution Unit)",
      "Mobile Cooking Unit",
      "Slim Hood",
    ],
  },
  {
    icon: "air",
    title: "HVAC",
    description:
      "Comprehensive HVAC solutions delivering reliable climate control, exceptional indoor air quality, and energy-efficient operation across every project.",
    image: {
      src: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80",
      alt: "HVAC",
    },
    items: [
      "Kitchen Exhaust Ecology Unit",
      "AHU and FAHU",
      "Venturi Cowl",
    ],
  },
  {
    icon: "fire",
    title: "Fire & Smart Control Systems",
    description:
      "Advanced fire safety and intelligent ventilation technologies designed to protect commercial kitchens while reducing energy consumption.",
    image: {
      src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
      alt: "Fire & Smart Control Systems",
    },
    items: [
      "FSS",
      "Demand Control Ventilated System",
    ],
  },
];
