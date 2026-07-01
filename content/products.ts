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
  // Product popup document labels. Hrefs are per category (see
  // `productCategories[].documents`); the labels are shared across all products.
  modal: {
    catalogue: "Catalogue",
    manual: "Installation Operation Manual",
    specSheets: "Technical Spec Sheets",
    electricalDrawing: "Electrical Drawing",
  },
};

/**
 * Full product catalogue — four categories, each with a short description and
 * its list of sub-products. Icon keys map to the shared `productIcons`
 * registry in components/icons.tsx.
 *
 * `image` is the cover shot for each category. `images` holds the rest of the
 * gallery shots for that category. Both currently point at placeholder stock
 * photos — replace each `src` with the real product image link when available.
 *
 * `specs` feeds the single-open accordion in the product popup — an ordered list
 * of `{ title, body }` sections, where `body` is a paragraph (string) or a
 * bullet list (string[]). The content below is PLACEHOLDER — replace with the
 * real technical data per category.
 *
 * `documents` holds the (placeholder) download links surfaced in the popup:
 * `catalogue` and `manual` as text links, `specSheets` and `electricalDrawing`
 * as buttons. Replace each "#" with the real file link.
 */
export const productCategories = [
  {
    icon: "building",
    title: "Commercial Kitchen Canopies",
    description:
      "A complete range of engineered kitchen canopies designed to capture heat, grease, smoke, and vapours with maximum efficiency, delivering safer kitchens and superior ventilation performance.",
    image: {
      src: "/images/products/cd/cover-CD.webp",
      alt: "Commercial Kitchen Canopies",
    },
    images: [
      {
        src: "/images/products/cd/1-CD-%20Full.webp",
        alt: "Commercial Kitchen Canopies — full view",
      },
      {
        src: "/images/products/cd/2-CD-Bottom.webp",
        alt: "Commercial Kitchen Canopies — bottom view",
      },
      {
        src: "/images/products/cd/3-CD-Front.webp",
        alt: "Commercial Kitchen Canopies — front view",
      },
      {
        src: "/images/products/cd/4-CD-Section.webp",
        alt: "Commercial Kitchen Canopies — section view",
      },
    ],
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
    documents: {
      catalogue: "#",
      manual: "#",
      specSheets: "#",
      electricalDrawing: "#",
    },
    specs: [
      {
        title: "Specifications",
        body: [
          "Body material: cold-rolled or stainless steel (placeholder)",
          "Integrated high-efficiency baffle grease filters",
          "Single- and double-island configurations",
          "Optional UV, water-mist and water-wash modules",
        ],
      },
      {
        title: "Benefits",
        body: "Placeholder — captures heat, grease, smoke and vapour with high efficiency for a safer, cleaner kitchen and lower running costs.",
      },
      {
        title: "Applications",
        body: "Placeholder — restaurants, hotels, central production kitchens and institutional catering facilities.",
      },
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
    images: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
        alt: "Special Kitchen Ventilation Products — detail view",
      },
      {
        src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&q=80",
        alt: "Special Kitchen Ventilation Products — installation",
      },
    ],
    items: [
      "Ventilated Ceiling",
      "SDU (Service Distribution Unit)",
      "Mobile Cooking Unit",
      "Slim Hood",
    ],
    documents: {
      catalogue: "#",
      manual: "#",
      specSheets: "#",
      electricalDrawing: "#",
    },
    specs: [
      {
        title: "Specifications",
        body: [
          "Modular, layout-driven configurations (placeholder)",
          "Integrated supply and extract air paths",
          "Low-noise operation",
          "Finishes suited to open and show kitchens",
        ],
      },
      {
        title: "Benefits",
        body: "Placeholder — optimises workflow and comfort while adapting to the unique demands of each commercial kitchen.",
      },
      {
        title: "Applications",
        body: "Placeholder — show kitchens, tight ceiling voids and mobile cooking stations.",
      },
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
    images: [
      {
        src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
        alt: "HVAC — detail view",
      },
      {
        src: "https://images.unsplash.com/photo-1635405446898-4f37b5c4b4b4?w=800&q=80",
        alt: "HVAC — installation",
      },
    ],
    items: [
      "Kitchen Exhaust Ecology Unit",
      "AHU and FAHU",
      "Venturi Cowl",
    ],
    documents: {
      catalogue: "#",
      manual: "#",
      specSheets: "#",
      electricalDrawing: "#",
    },
    specs: [
      {
        title: "Specifications",
        body: [
          "Air handling and fresh-air units (placeholder)",
          "Ecology units for exhaust air treatment",
          "Energy-recovery options",
          "BMS-ready controls",
        ],
      },
      {
        title: "Benefits",
        body: "Placeholder — reliable climate control, excellent indoor air quality and energy-efficient operation across every project.",
      },
      {
        title: "Applications",
        body: "Placeholder — commercial kitchens and the wider facilities that support them.",
      },
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
    images: [
      {
        src: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?w=800&q=80",
        alt: "Fire & Smart Control Systems — detail view",
      },
      {
        src: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
        alt: "Fire & Smart Control Systems — installation",
      },
    ],
    items: [
      "FSS",
      "Demand Control Ventilated System",
    ],
    documents: {
      catalogue: "#",
      manual: "#",
      specSheets: "#",
      electricalDrawing: "#",
    },
    specs: [
      {
        title: "Specifications",
        body: [
          "Fire suppression system integration (placeholder)",
          "Demand-controlled ventilation",
          "Automatic detection and shut-off",
          "Real-time monitoring",
        ],
      },
      {
        title: "Benefits",
        body: "Placeholder — protects the kitchen while cutting energy use through demand-based operation.",
      },
      {
        title: "Applications",
        body: "Placeholder — any commercial kitchen requiring fire safety and intelligent ventilation control.",
      },
    ],
  },
];
