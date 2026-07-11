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
  // Document link labels shown on the product detail page. Hrefs are per point
  // (falling back to the category — see `productCategories[].documents`); the
  // labels are shared across all products.
  docLabels: {
    catalogue: "Catalogue",
    manual: "Installation Operation Manual",
    specSheets: "Technical Spec Sheets",
    electricalDrawing: "Electrical Drawing",
  },
};

type ImageRef = { src: string; alt: string };
type ProductDocuments = {
  catalogue: string;
  manual: string;
  specSheets: string;
  electricalDrawing: string;
};
type ProductSpec = { title: string; body: string | string[] };

/**
 * A single sub-product ("point") within a category — e.g. "Condensate Hood".
 * Each point has its own detail page at `/products/<category>/<point>`.
 *
 * Only `title` is required. The optional fields are per-point overrides: when
 * absent, the point inherits its category's description, gallery, documents and
 * specs (see `findProductPoint`). Fill these in as real per-product content
 * becomes available.
 */
export type ProductPoint = {
  title: string;
  description?: string;
  image?: ImageRef;
  images?: ImageRef[];
  documents?: ProductDocuments;
  specs?: ProductSpec[];
};

export type ProductCategory = {
  icon: string;
  title: string;
  description: string;
  image: ImageRef;
  images: ImageRef[];
  items: ProductPoint[];
  documents: ProductDocuments;
  specs: ProductSpec[];
};

/**
 * Full product catalogue — four categories, each with a short description and
 * its list of sub-products (`items`). Icon keys map to the shared `productIcons`
 * registry in components/icons.tsx.
 *
 * `image` is the cover shot for each category (used on the products page row and
 * as the first gallery shot on each point's detail page). `images` holds the
 * rest of the gallery. Both currently point at placeholder stock photos —
 * replace each `src` with the real product image link when available.
 *
 * `specs` feeds the single-open accordion on the detail page — an ordered list
 * of `{ title, body }` sections, where `body` is a paragraph (string) or a
 * bullet list (string[]). The content below is PLACEHOLDER — replace with the
 * real technical data.
 *
 * `documents` holds the (placeholder) download links surfaced on the detail
 * page: `catalogue` and `manual` as text links, `specSheets` and
 * `electricalDrawing` as buttons. Replace each "#" with the real file link.
 */
export const productCategories: ProductCategory[] = [
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
      {
        title: "High Efficiency Kitchen Hood",
        description:
          "A high-performance commercial kitchen canopy designed to efficiently capture and extract heat, smoke, grease, and cooking fumes. Built for reliability and compliance, it provides effective ventilation for a wide range of commercial cooking applications.",
        image: {
          src: "/images/products/cd/cover-CD.webp",
          alt: "High Efficiency Kitchen Hood",
        },
        images: [
          { src: "/images/products/cd/1-CD-%20Full.webp", alt: "High Efficiency Kitchen Hood — full view" },
          { src: "/images/products/cd/2-CD-Bottom.webp", alt: "High Efficiency Kitchen Hood — bottom view" },
          { src: "/images/products/cd/3-CD-Front.webp", alt: "High Efficiency Kitchen Hood — front view" },
          { src: "/images/products/cd/4-CD-Section.webp", alt: "High Efficiency Kitchen Hood — section view" },
          { src: "/images/products/high-efficiency-kitchen-hood/ef-1.webp", alt: "High Efficiency Kitchen Hood — extract hood front view" },
          { src: "/images/products/high-efficiency-kitchen-hood/ef-2.webp", alt: "High Efficiency Kitchen Hood — extract hood angled view" },
          { src: "/images/products/high-efficiency-kitchen-hood/ef-3.webp", alt: "High Efficiency Kitchen Hood — extract hood side view" },
          { src: "/images/products/high-efficiency-kitchen-hood/sef-1.webp", alt: "High Efficiency Kitchen Hood with supply air — front view" },
          { src: "/images/products/high-efficiency-kitchen-hood/sef-2.webp", alt: "High Efficiency Kitchen Hood with supply air — angled view" },
          { src: "/images/products/high-efficiency-kitchen-hood/sef-3.webp", alt: "High Efficiency Kitchen Hood with supply air — side view" },
          { src: "/images/products/high-efficiency-kitchen-hood/sef-4.webp", alt: "High Efficiency Kitchen Hood with supply air — detail" },
          { src: "/images/products/high-efficiency-kitchen-hood/sef-5.webp", alt: "High Efficiency Kitchen Hood with supply air — detail" },
          { src: "/images/products/high-efficiency-kitchen-hood/sef-6.webp", alt: "High Efficiency Kitchen Hood with supply air — detail" },
          { src: "/images/products/high-efficiency-kitchen-hood/sef-7.webp", alt: "High Efficiency Kitchen Hood with supply air — detail" },
        ],
        specs: [
          {
            title: "Specifications",
            body: [
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "High-efficiency UL listed grease filters",
              "Integrated hood lighting: 500 LUX at cooking surface",
              "Construction and performance compliant with DW172 standards",
              "Configuration: With or without make-up air as per project requirement",
            ],
          },
          {
            title: "Options",
            body: [
              "LED dimmable spotlights",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
              "Hood cladding / powder coating",
              "Special shape and size",
            ],
          },
          {
            title: "Application",
            body: "For all types of commercial and professional cooking.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 600 mm",
              "Width — 1350 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
      {
        title: "High Efficiency Kitchen Hood with Ultraviolet Filtration",
        description:
          "Designed for heavy-duty grease-producing kitchens, this canopy integrates ultraviolet filtration technology to significantly reduce grease vapours, duct contamination, and exhaust odours while maintaining high extraction efficiency.",
        image: {
          src: "/images/products/high-efficiency-kitchen-hood-with-ultraviolet-filtration/cover.webp",
          alt: "High Efficiency Kitchen Hood with Ultraviolet Filtration",
        },
        images: [
          { src: "/images/products/high-efficiency-kitchen-hood-with-ultraviolet-filtration/ef-uv-2.webp", alt: "UV filtration kitchen hood — angled view" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-ultraviolet-filtration/uv-lights.webp", alt: "UV filtration hood — ultraviolet lights detail" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-ultraviolet-filtration/sef-uv-1.webp", alt: "UV filtration kitchen hood with supply air — front view" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-ultraviolet-filtration/sef-uv-2.webp", alt: "UV filtration kitchen hood with supply air — angled view" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-ultraviolet-filtration/sef-uv-3.webp", alt: "UV filtration kitchen hood with supply air — side view" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-ultraviolet-filtration/sef-uv-4.webp", alt: "UV filtration kitchen hood with supply air — detail" },
        ],
        specs: [
          {
            title: "Specifications",
            body: [
              "High-efficiency stainless steel kitchen canopy",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "High-efficiency UL listed grease filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "UV filtration system for grease cooking applications",
              "Reduces grease vapours, duct contamination and exhaust odour",
              "Hood construction and performance compliant with DW172 standards",
              "With or without make-up air as per configuration",
            ],
          },
          {
            title: "Options",
            body: [
              "LED dimmable spotlights",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
              "Hood cladding / powder coating",
              "Special shape and size",
            ],
          },
          {
            title: "Application",
            body: "Designed for heavy-duty commercial and industrial kitchens with high-grease cooking operations.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 600 mm",
              "Width — 1350 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
      {
        title: "High Efficiency Kitchen Hood with Water Mist",
        description:
          "Engineered for high-temperature and solid fuel cooking applications, this canopy incorporates a cold-water mist system to cool grease-laden exhaust and improve filtration performance.",
        image: {
          src: "/images/products/high-efficiency-kitchen-hood-with-water-mist/cover.webp",
          alt: "High Efficiency Kitchen Hood with Water Mist",
        },
        images: [
          { src: "/images/products/high-efficiency-kitchen-hood-with-water-mist/ef-wm-with-panel.webp", alt: "Water mist kitchen hood — with panel" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-water-mist/sef-wm-1.webp", alt: "Water mist kitchen hood with supply air — front view" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-water-mist/sef-wm-2.webp", alt: "Water mist kitchen hood with supply air — angled view" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-water-mist/sef-wm-with-panel.webp", alt: "Water mist kitchen hood with supply air — with panel" },
          { src: "/images/products/high-efficiency-kitchen-hood-with-water-mist/water-mist.webp", alt: "Water mist system detail" },
        ],
        specs: [
          {
            title: "Specifications",
            body: [
              "High-efficiency stainless steel kitchen canopy",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "Aerodynamically designed panel filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "Cold water mist system",
              "Suitable for high-temperature grease cooking and live charcoal applications",
              "Hood construction and performance compliant with DW172 standards",
              "With or without make-up air as per configuration",
            ],
          },
          {
            title: "Options",
            body: [
              "LED dimmable spotlights",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
              "Hood cladding / powder coating",
              "Special shape and size",
            ],
          },
          {
            title: "Application",
            body: "Suitable for solid fuel and high-temperature cooking applications.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 600 mm",
              "Width — 1350 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
      {
        title: "High Efficiency Kitchen Hood with Water Wash",
        description:
          "Featuring an automatic hot water wash system, this canopy continuously cleans internal components, reducing grease accumulation and minimizing maintenance requirements for demanding commercial kitchens.",
        image: {
          src: "/images/products/high-efficiency-kitchen-hood-with-water-wash/cover.webp",
          alt: "High Efficiency Kitchen Hood with Water Wash",
        },
        images: [],
        specs: [
          {
            title: "Specifications",
            body: [
              "High-efficiency stainless steel kitchen canopy",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "Aerodynamically designed panel filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "Automatic hot water wash system",
              "Dedicated control panel for cleaning operation",
              "Hood construction and performance compliant with DW172 standards",
              "With or without make-up air as per configuration",
            ],
          },
          {
            title: "Options",
            body: [
              "LED dimmable spotlights",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
              "Hood cladding / powder coating",
              "Special shape and size",
            ],
          },
          {
            title: "Application",
            body: "Suitable for high-volume commercial kitchens requiring automatic internal cleaning systems.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 600 mm",
              "Width — 1350 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
      {
        title: "High Efficiency Kitchen Hood with Water Mist and Water Wash",
        description:
          "Combining cold water mist technology with an automatic water wash system, this canopy provides enhanced grease management, improved safety, and automated internal cleaning for intensive cooking operations.",
        specs: [
          {
            title: "Specifications",
            body: [
              "High-efficiency stainless steel kitchen canopy",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "Aerodynamically designed panel filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "Cold water mist system",
              "Automatic hot water wash system with control panel",
              "Enhanced grease control and internal cleaning",
              "Hood construction and performance compliant with DW172 standards",
              "With or without make-up air as per configuration",
            ],
          },
          {
            title: "Options",
            body: [
              "LED dimmable spotlights",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
              "Hood cladding / powder coating",
              "Special shape and size",
            ],
          },
          {
            title: "Application",
            body: "Designed for solid fuel and high-temperature cooking applications with enhanced grease management and automatic cleaning.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 600 mm",
              "Width — 1350 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
      {
        title: "High Efficiency Kitchen Hood with Ultraviolet and Water Mist",
        description:
          "A dual-technology canopy combining ultraviolet filtration and cold-water mist to maximize grease extraction and improve air quality in high-intensity commercial kitchens.",
        specs: [
          {
            title: "Specifications",
            body: [
              "High-efficiency stainless steel kitchen canopy",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "Combination of UL listed grease filters and panel filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "UV filtration system",
              "Cold water mist system",
              "Suitable for high-intensity grease cooking applications",
              "Hood construction and performance compliant with DW172 standards",
              "With or without make-up air as per configuration",
            ],
          },
          {
            title: "Options",
            body: [
              "LED dimmable spotlights",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
              "Hood cladding / powder coating",
              "Special shape and size",
            ],
          },
          {
            title: "Application",
            body: "Ideal for commercial kitchens with high-grease cooking and advanced filtration requirements.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 600 mm",
              "Width — 1350 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
      {
        title: "High Efficiency Kitchen Hood with Ultraviolet and Water Wash",
        description:
          "Designed for kitchens requiring maximum grease control, this canopy combines ultraviolet filtration with an automatic water wash system for superior extraction performance and simplified maintenance.",
        specs: [
          {
            title: "Specifications",
            body: [
              "High-efficiency stainless steel kitchen canopy",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "Combination of UL listed grease filters and panel filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "UV filtration system",
              "Automatic hot water wash system with control panel",
              "Advanced grease management and cleaning",
              "Hood construction and performance compliant with DW172 standards",
              "With or without make-up air as per configuration",
            ],
          },
          {
            title: "Options",
            body: [
              "LED dimmable spotlights",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
              "Hood cladding / powder coating",
              "Special shape and size",
            ],
          },
          {
            title: "Application",
            body: "Ideal for demanding commercial kitchens requiring advanced grease control and automatic wash systems.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 600 mm",
              "Width — 1350 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
      {
        title: "Condensate Hood",
        description:
          "Specially designed for non-grease cooking equipment, the condensate hood efficiently captures steam, moisture, and condensation, helping maintain a dry, comfortable, and hygienic kitchen environment.",
        specs: [
          {
            title: "Specifications",
            body: [
              "High-efficiency stainless steel condensate canopy",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "Internal baffle filters for effective moisture collection",
              "Suitable for steam and vapour extraction (non-grease applications)",
              "Hood construction and performance compliant with DW172 standards",
            ],
          },
          {
            title: "Application",
            body: "Designed for non-grease cooking equipment generating steam and moisture.",
          },
          {
            title: "Standard type and dimension",
            body: [
              "Wall mounted",
              "Island mounted",
              "Height — 400 mm",
              "Width — 1200 mm",
              "Length varies according to layout requirements",
            ],
          },
        ],
      },
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
      {
        title: "Ventilated Ceiling",
        description:
          "Factory-fabricated stainless steel ventilated ceiling system designed for complete kitchen coverage, delivering uniform extraction, integrated air supply, and high-efficiency grease removal.",
        image: {
          src: "/images/products/ventilated-ceiling/cover.webp",
          alt: "Ventilated Ceiling",
        },
        images: [],
        specs: [
          {
            title: "Specifications",
            body: [
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "UL listed grease filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "Construction and performance compliant with DW172 standards",
              "Integrated with low velocity perforated supply plenum",
            ],
          },
          {
            title: "Options",
            body: [
              "UV filtration system",
              "Automatic hot water wash system with control panel",
              "Water mist system with control panel",
              "LED dimmable spotlights",
              "LED DALI control human centric light fixtures",
              "Service Distribution Unit",
              "Factory-installed hood Fire Suppression System",
              "Factory-installed hood Demand Control Ventilation System",
            ],
          },
          {
            title: "Standard type and dimension",
            body: [
              "Length: as per the layout",
              "Width: as per the layout",
              "Height: 450 mm",
            ],
          },
        ],
      },
      {
        title: "SDU (Service Distribution Unit)",
        description:
          "The Avante Service Distribution Unit (SDU) is a centralized utility delivery system designed to safely distribute gas, electrical power, and auxiliary services to commercial cooking equipment. It eliminates floor clutter, improves safety, and ensures compliance with international kitchen safety standards.",
        image: {
          src: "/images/products/sdu-service-distribution-unit/cover.webp",
          alt: "SDU (Service Distribution Unit)",
        },
        images: [],
        specs: [
          {
            title: "Specifications",
            body: [
              "Fabricated from AISI 304 stainless steel (1.2 mm thick)",
              "Ceiling-mounted or wall-mounted configuration",
              "Integrated routing for gas piping, electrical cabling and water piping",
              "Flexible drop connections to cooking equipment",
              "Modular design for island cooking lines and wall-line kitchens",
              "Easy access panels for maintenance",
              "Designed for high-temperature kitchen environments",
              "Compatible with DCKV & fire suppression systems",
            ],
          },
        ],
      },
      {
        title: "Mobile Cooking Unit",
        description:
          "High-performance mobile cooking unit with integrated air extraction, engineered for front-of-house applications, flexible placement, and efficient, on-demand preparation.",
        image: {
          src: "/images/products/mobile-cooking-unit/cover.webp",
          alt: "Mobile Cooking Unit",
        },
        images: [],
        specs: [
          {
            title: "Specifications",
            body: [
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "UL listed grease filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
              "Construction and performance compliant with DW172 standards",
              "Integrated with filters for grease and odour control",
            ],
          },
        ],
      },
      {
        title: "Slim Hood",
        description:
          "Avante Slim Hood is a compact, high-efficiency kitchen ventilation system designed for light to medium-duty cooking applications. It removes heat, smoke, grease, and odours effectively while maintaining a clean environment.",
        image: {
          src: "/images/products/slim-hood/cover.webp",
          alt: "Slim Hood",
        },
        images: [],
        specs: [
          {
            title: "Specifications",
            body: [
              "Optimized airflow design",
              "Energy-efficient operation",
              "High-efficiency grease filtration",
              "Stainless steel construction (AISI 304)",
              "Integrated LED lighting",
              "Easy installation and maintenance",
              "Material: AISI 304 stainless steel",
              "Thickness: 1.0 / 1.2 mm",
              "UL listed grease filters",
              "Integrated hood lighting providing 500 LUX at cooking surface",
            ],
          },
        ],
      },
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
      {
        title: "Kitchen Exhaust Ecology Unit",
        description:
          "High-performance ecology unit designed for advanced air purification, combining electrostatic precipitation and multi-stage filtration to effectively remove grease, smoke, and airborne contaminants. Integrated with energy-efficient fan systems and VFD controls, the unit delivers optimized airflow performance. Modular construction allows flexible configuration to suit project-specific requirements across a wide capacity range.",
        image: {
          src: "/images/products/kitchen-exhaust-ecology-unit/cover.webp",
          alt: "Kitchen Exhaust Ecology Unit",
        },
        images: [],
        specs: [
          {
            title: "Options",
            body: [
              "Electrostatic precipitator (manual wash and auto wash)",
              "Pre filter",
              "Bag filter",
              "Carbon filter (V Bank, Canister or Deep bed)",
              "SISW centrifugal fan (belt driven or direct driven)",
            ],
          },
        ],
      },
      {
        title: "AHU and FAHU",
        description:
          "High-performance air handling units, including AHU and FAHU systems, designed to condition, filter, and circulate both recirculated and fresh air, ensuring controlled temperature, improved indoor air quality, proper ventilation, and energy-efficient operation across commercial and industrial applications.",
        image: {
          src: "/images/products/ahu-and-fahu/cover.webp",
          alt: "AHU and FAHU",
        },
        images: [],
        specs: [
          {
            title: "Specifications",
            body: [
              "Framework: Anodized aluminum penta-post profiles with zinc-die-cast corner joints",
              "Casing panels: Double-skin 50 mm thick insulation with T2/TB2 thermal certification",
              "Material quality: Corrosion-resistant galvanized steel with options for AISI 304 stainless steel",
              "Access system: Hinged inspection doors with multi-point latches and double-glazed viewing windows",
              "Air filtration: Multi-stage filtration options ranging from G4 pre-filters to absolute H14 HEPA filters",
              "Cooling & heating: High-efficiency copper-tube aluminum-fin coils with sloped stainless steel drain pans",
              "Fan technology: Energy-saving, direct-drive EC plug fans with integrated 0-10V speed control",
              "Energy recovery: High-efficiency rotary thermal wheels or cross-flow plate heat exchangers",
              "Dampers: Low-leakage aerodynamic air dampers with factory-mounted modulating actuators",
              "Smart controls: Factory-integrated DDC controller supporting native BACnet and Modbus BMS communication",
            ],
          },
        ],
      },
      {
        title: "Venturi Cowl",
        description:
          "A durable, weather-protected ventilation cowl engineered for industrial and comfort applications, featuring upward air ejection, debris protection, and rainwater drainage.",
        image: {
          src: "/images/products/venturi-cowl/cover.webp",
          alt: "Venturi Cowl",
        },
        images: [],
        specs: [
          {
            title: "Specifications",
            body: [
              "Product type: High-velocity vertical discharge Venturi ventilation cowl",
              "Application: Industrial factories, commercial kitchens, and warehouse extract systems",
              "Function: Aerodynamic upward air ejection to prevent local exhaust re-entrainment",
              "Design: Integrated Venturi profile to optimize airflow and reduce pressure drop",
              "Material construction: Heavy-duty galvanized steel, stainless steel",
              "Weatherproofing: Specialized internal drainage system to shed rainwater externally",
              "Protection: Heavy-gauge bird mesh or debris screen fitted at discharge opening",
              "Connection: Flanged, spigot, or socket base designed for standard duct mounting",
              "Operating temperature: Suitable for continuous exhaust streams ranging from -30°C to +120°C",
              "Backdraught: Optional integrated gravity dampers to prevent ambient air backflow",
              "Corrosion resistance: Available with UV-stable powder coating or epoxy-painted finishes",
              "Wind resistance: Engineered to withstand high external wind loads without performance loss",
              "Maintenance: Low-maintenance design with self-cleaning geometric water drainage",
              "Noise level: Low acoustic profile due to streamlined internal air pathing",
              "Compliance: Manufactured to DW144 standards for industrial ductwork components",
            ],
          },
        ],
      },
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
      {
        title: "FSS",
        description:
          "Built-in wet chemical fire protection system engineered for rapid response, complete hood coverage, and compliance with international safety standards.",
        specs: [
          {
            title: "Specifications",
            body: [
              "System type: Pre-engineered, wet chemical (potassium-acetate based) kitchen fire suppression system",
              "Configuration: Overlapping nozzle design creating a continuous zone of agent protection across cooking lines",
              "Appliance flexibility: Allows reconfiguration of cooking equipment beneath the hood without altering nozzle locations",
              "Certification: Fully tested, listed, and compliant with UL 300, NFPA 96, and NFPA 17A safety standards",
              "Design span: Nozzles spaced at precise linear intervals to deliver uniform, high-velocity agent distribution",
              "Suppression method: Simultaneous saponification (fuel smothering) and rapid cooling of grease-laden fires",
              "Hood coverage: Full interior protection encompassing the canopy plenum, exhaust ducts, and line appliances",
              "Actuation: Dual-mode activation featuring an automatic fusible-link network and manual remote pull stations",
              "Fuel shutoff: Integrated mechanical or electrical gas valves and circuit trips to cut appliance energy upon discharge",
              "Piping network: Heavy-duty Schedule 40 black iron, chrome-plated, or stainless steel piping and fittings",
              "Nozzle protection: High-temperature, spring-loaded or blow-off rubber caps to prevent grease clogging",
              "Monitored pressure: Storage cylinders equipped with visual pressure gauges for continuous readiness verification",
              "Applications: High-volume commercial kitchens, fast-food lines, hotel restaurants, and food courts",
              "Alarm interface: Auxiliary microswitches to transmit fire signal to the main building fire alarm panel",
              "Maintenance: Designed for semi-annual inspection loops and field recharge capabilities following activation",
            ],
          },
        ],
      },
      {
        title: "Demand Control Ventilated System",
        description:
          "Intelligent ventilation system with temperature and optical sensors that automatically adjusts airflow based on real-time cooking activity, optimizing energy use while ensuring efficient, demand-based kitchen ventilation.",
        specs: [
          {
            title: "Specifications",
            body: [
              "System type: Intelligent, automated demand-controlled ventilation (DCKV) system for commercial kitchens",
              "Core function: Dynamic modulation of exhaust and supply fan speeds based on real-time cooking activity",
              "Temperature sensing: Heavy-duty response thermistor probes installed directly inside the hood exhaust collar",
              "Optical monitoring: Infrared (IR) or optical beam sensors tracking smoke, vapor, and grease particle density",
              "Energy optimization: Drastically reduces fan energy consumption by operating at low idle speeds during down periods",
              "Response matrix: Automatically ramps up to 100% full capacity the instant thermal plumes or smoke break the beam",
              "Drive interface: Integrates seamlessly via Modbus, BACnet, or 0-10V analog signals to variable frequency drives (VFDs)",
              "Control algorithm: Proportional-Integral-Derivative (PID) logic loops preventing sudden fan cycling or hunting",
              "Operational modes: Manual override toggle, programmable scheduling, auto-clean cycle, and automated night setback",
              "Sensor housing: Flush-mounted, heat-resistant, and easily accessible lenses designed to minimize grease fouling",
              "Air balancing: Synchronizes dedicated make-up air (MUA) fans to maintain negative space pressure in the kitchen",
              "Central processor: Microprocessor-based control panel featuring a user-friendly color touchscreen HMI interface",
              "Building integration: Relays operational data, system faults, and cumulative energy savings directly to the main BMS",
              "Applications: High-occupancy hotel kitchens, institutional cafeterias, university dining halls, and casinos",
              "Compliance: Fully certified to CE/UL standards, actively contributing to ASHRAE 90.1 energy efficiency compliance",
            ],
          },
        ],
      },
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

/** URL-safe slug from a title, e.g. "SDU (Service Distribution Unit)" → "sdu-service-distribution-unit". */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Resolved product point ready to render on a detail page. */
export type ResolvedProduct = {
  categoryTitle: string;
  categorySlug: string;
  pointSlug: string;
  title: string;
  description: string;
  image: ImageRef;
  images: ImageRef[];
  documents: ProductDocuments;
  specs: ProductSpec[];
};

/**
 * Resolve a category + point from their URL slugs. Per-point overrides win;
 * anything a point doesn't define falls back to its category. Returns null for
 * unknown slugs so the route can 404.
 */
export function findProductPoint(categorySlug: string, pointSlug: string): ResolvedProduct | null {
  const category = productCategories.find((c) => slugify(c.title) === categorySlug);
  if (!category) return null;
  const point = category.items.find((p) => slugify(p.title) === pointSlug);
  if (!point) return null;

  return {
    categoryTitle: category.title,
    categorySlug,
    pointSlug,
    title: point.title,
    description: point.description ?? category.description,
    image: point.image ?? category.image,
    images: point.images ?? category.images,
    documents: point.documents ?? category.documents,
    specs: point.specs ?? category.specs,
  };
}

/** Every category/point slug pair, for `generateStaticParams`. */
export function productPointParams(): { category: string; point: string }[] {
  return productCategories.flatMap((c) =>
    c.items.map((p) => ({ category: slugify(c.title), point: slugify(p.title) })),
  );
}
