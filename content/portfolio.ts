import { asset } from "@/content/asset";

export const portfolio = {
  hero: {
    heading: "Our",
    headingGradient: "Portfolio",
    subtitle: "Delivering excellence across diverse industries",
    image: {
      src: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80",
      alt: "Avante Portfolio",
    },
  },
  gallery: {
    badge: "OUR WORK",
    heading: "Projects that inspire",
    subtitle: "Explore our portfolio of successful installations across diverse industries",
    filters: [
      { label: "Hotels & Resorts" },
      { label: "Restaurants", children: ["Modern", "Premium"] },
      { label: "Cafés" },
      { label: "QSR" },
      { label: "Experiential" },
    ],
    projects: [
      // Restaurants — Modern
      {
        title: "Alusia",
        location: ["Bahrain"],
        outsideLocation: "Bahrain",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies",
        description:
          "At Alusia, Bahrain, a restaurant inspired by Mediterranean, Levantine, and Andalusian cuisine, Avante supplied custom kitchen canopies to support the busy kitchen operations. The ventilation system was designed to effectively remove heat, smoke, and cooking fumes, ensuring a safe, clean, and comfortable working environment. Complementing the restaurant's warm Mediterranean-inspired interiors, the canopy solution combines performance and functionality while supporting an exceptional dining experience.",
        image: { src: asset("/images/portfolio/alusia/cover.webp"), alt: "Alusia" },
        heroImage: { src: asset("/images/portfolio/alusia/hero.webp"), alt: "Alusia" },
        gallery: [
          { src: asset("/images/portfolio/alusia/1.webp"), alt: "Alusia — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/alusia/2.webp"), alt: "Alusia — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/alusia/3.webp"), alt: "Alusia — photo 3", shape: "square" },
          { src: asset("/images/portfolio/alusia/4.webp"), alt: "Alusia — photo 4", shape: "square" },
        ],
      },
      {
        title: "Birds Sky View",
        location: ["Downtown Dubai, UAE"],
        outsideLocation: "Downtown Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Ecology Unit",
        description:
          "Perched above the heart of Downtown Dubai, Birds is a luxury dining and entertainment destination that combines exceptional cuisine, live performances, and panoramic views of the city's iconic skyline. To support the venue's demanding kitchen operations, an advanced Ecology Unit was supplied to effectively treat kitchen exhaust emissions, helping manage grease, smoke, and cooking odors before discharge. The system helps maintain cleaner air quality and efficient performance while integrating seamlessly with the building's infrastructure.",
        image: { src: asset("/images/portfolio/birds-sky-view/cover.webp"), alt: "Birds Sky View" },
        heroImage: { src: asset("/images/portfolio/birds-sky-view/hero.webp"), alt: "Birds Sky View" },
        gallery: [
          { src: asset("/images/portfolio/birds-sky-view/1.webp"), alt: "Birds Sky View — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/birds-sky-view/2.webp"), alt: "Birds Sky View — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/birds-sky-view/3.webp"), alt: "Birds Sky View — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/birds-sky-view/4.webp"), alt: "Birds Sky View — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Blue Haven",
        location: ["Palm Jumeirah, Dubai, UAE"],
        outsideLocation: "Palm Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Venturi Cowls & Ecology Unit",
        description:
          "Located on the iconic Palm Jumeirah, Blue Haven offers a refined waterfront hospitality experience that blends contemporary elegance with the exclusivity of one of Dubai's most prestigious destinations. To support the facility's operational requirements and maintain high environmental standards, Venturi Cowls and an advanced Ecology Unit were incorporated as part of the kitchen exhaust and air treatment system. The Venturi Cowls improve exhaust performance and protect the system from weather conditions, while the Ecology Unit reduces grease, smoke, and cooking emissions before discharge. Together, these systems help ensure cleaner air, reliable operation, and efficient day-to-day performance.",
        image: { src: asset("/images/portfolio/blue-haven/cover.webp"), alt: "Blue Haven" },
        heroImage: { src: asset("/images/portfolio/blue-haven/hero.webp"), alt: "Blue Haven" },
        gallery: [
          { src: asset("/images/portfolio/blue-haven/1.webp"), alt: "Blue Haven — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/blue-haven/2.webp"), alt: "Blue Haven — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/blue-haven/3.webp"), alt: "Blue Haven — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Fenix",
        location: ["Mumbai, India"],
        outsideLocation: "Mumbai, India",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies",
        description:
          "Located within The Oberoi, Mumbai, Fenix is an elegant all-day dining destination celebrated for its sophisticated ambiance, expansive views of the Arabian Sea, and diverse culinary offerings that span global cuisines. Designed to provide a refined yet welcoming dining experience, the restaurant seamlessly blends contemporary luxury with exceptional hospitality. To support the demanding requirements of this premium culinary environment, custom-engineered kitchen canopies were supplied to ensure efficient extraction of heat, smoke, and cooking vapors generated by the restaurant's busy kitchen operations. Designed for optimal performance and reliability, the system contributes to a cleaner, safer, and more comfortable workspace while supporting the seamless service standards associated with The Oberoi brand.",
        image: { src: asset("/images/portfolio/fenix/cover.webp"), alt: "Fenix" },
        heroImage: { src: asset("/images/portfolio/fenix/hero.webp"), alt: "Fenix" },
        gallery: [
          { src: asset("/images/portfolio/fenix/1.webp"), alt: "Fenix — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/fenix/2.webp"), alt: "Fenix — photo 2", shape: "landscape" },
        ],
      },
      {
        title: "Lady Bird, 25 Jump Street",
        location: ["One Central, 25 Jump Street, Trade Center, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies",
        description:
          "For Lady Bird at 25 Jump Street, Dubai, Avante delivered custom kitchen canopies tailored to the requirements of the venue's dynamic food and beverage operations. Combining creative dining, handcrafted beverages, and a welcoming social atmosphere, Lady Bird has established itself as a distinctive gathering place within one of Dubai's most exciting lifestyle destinations. The ventilation solution was developed to complement the restaurant's operational needs, ensuring efficient extraction throughout the kitchen while supporting smooth day-to-day service. Designed with performance and reliability in mind, the system contributes to an environment where culinary teams can operate comfortably and efficiently.",
        image: { src: asset("/images/portfolio/lady-bird-25-jump-street/cover.webp"), alt: "Lady Bird, 25 Jump Street" },
        heroImage: { src: asset("/images/portfolio/lady-bird-25-jump-street/hero.webp"), alt: "Lady Bird, 25 Jump Street" },
        gallery: [
          { src: asset("/images/portfolio/lady-bird-25-jump-street/1.webp"), alt: "Lady Bird, 25 Jump Street — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/lady-bird-25-jump-street/2.webp"), alt: "Lady Bird, 25 Jump Street — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/lady-bird-25-jump-street/3.webp"), alt: "Lady Bird, 25 Jump Street — photo 3", shape: "square" },
        ],
      },
      {
        title: "The Cherry House",
        location: ["Sheikh Zayed Road, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies",
        description:
          "Cherry House brings together a specialty coffee roastery, artisan bakery, espresso bar, and contemporary dining experience under one roof on Sheikh Zayed Road, Dubai. Built around craftsmanship, hospitality, and the journey from bean to cup, the venue features warm interiors, open production spaces, and an immersive atmosphere that celebrates the art of coffee and baking. With roasting, baking, and food preparation taking place within a single integrated environment, custom-engineered kitchen canopies were incorporated to address the diverse ventilation requirements of the venue. Designed for efficient extraction and dependable performance, the system supports the smooth operation of both production and culinary spaces while maintaining a comfortable working atmosphere throughout the facility.",
        image: { src: asset("/images/portfolio/the-cherry-house/cover.webp"), alt: "The Cherry House" },
        heroImage: { src: asset("/images/portfolio/the-cherry-house/hero.webp"), alt: "The Cherry House" },
        gallery: [
          { src: asset("/images/portfolio/the-cherry-house/1.webp"), alt: "The Cherry House — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/the-cherry-house/2.webp"), alt: "The Cherry House — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/the-cherry-house/3.webp"), alt: "The Cherry House — photo 3", shape: "portrait" },
        ],
      },
      {
        title: "Yubi by Chef Reif Othman, 25 Jump Street",
        location: ["Dubai World Trade Centre, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies",
        description:
          "Located at One Central, Dubai World Trade Centre, YUBI is the latest culinary concept by renowned Chef Reif Othman, celebrated for redefining Japanese dining through creativity, precision, and bold flavors. Inspired by Japanese street culture and contemporary urban energy, YUBI offers an interactive handroll experience where guests can enjoy freshly crafted creations prepared right before their eyes. Inspired by the restaurant's interactive handroll concept and fast-paced service style, custom-engineered kitchen canopies were supplied to maintain an efficient kitchen environment. The system delivers reliable extraction performance while supporting the precision and consistency that define Chef Reif Othman's culinary vision.",
        image: { src: asset("/images/portfolio/yubi-by-chef-reif-othman-25-jump-street/cover.webp"), alt: "Yubi by Chef Reif Othman, 25 Jump Street" },
        heroImage: { src: asset("/images/portfolio/yubi-by-chef-reif-othman-25-jump-street/hero.webp"), alt: "Yubi by Chef Reif Othman, 25 Jump Street" },
        gallery: [
          { src: asset("/images/portfolio/yubi-by-chef-reif-othman-25-jump-street/1.webp"), alt: "Yubi by Chef Reif Othman, 25 Jump Street — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/yubi-by-chef-reif-othman-25-jump-street/2.webp"), alt: "Yubi by Chef Reif Othman, 25 Jump Street — photo 2", shape: "landscape" },
        ],
      },
      {
        title: "Din Tai Fung",
        location: ["Dubai Hills Mall, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Ecology Units",
        description:
          "Located in Dubai Hills Mall, Din Tai Fung is the world-renowned Taiwanese restaurant brand that originated in Taipei and gained international recognition. Renowned for its precision, consistency, and attention to detail, the restaurant offers guests a vibrant atmosphere where culinary craftsmanship takes centre stage. To support the restaurant's high-volume kitchen operations, advanced Ecology Units were supplied to effectively manage grease, smoke, and cooking emissions generated during food preparation. Designed to enhance air quality and support environmentally responsible exhaust management. This project demonstrates expertise in providing innovative air treatment solutions for globally recognized food and beverage brands.",
        image: { src: asset("/images/portfolio/din-tai-fung/cover.webp"), alt: "Din Tai Fung" },
        heroImage: { src: asset("/images/portfolio/din-tai-fung/hero.webp"), alt: "Din Tai Fung" },
        gallery: [
          { src: asset("/images/portfolio/din-tai-fung/1.webp"), alt: "Din Tai Fung — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/din-tai-fung/2.webp"), alt: "Din Tai Fung — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/din-tai-fung/3.webp"), alt: "Din Tai Fung — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Al Beiruti",
        location: ["DIFC, UAE", "Dubai Festival City, UAE", "Nakheel Mall, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Avante has provided kitchen canopies and Ecology Units for several Al Beiruti locations across Dubai, including DIFC, Dubai Festival City, and Nakheel Mall. Inspired by the rich culinary traditions of Beirut, Al Beiruti is renowned for its authentic Lebanese cuisine, vibrant atmosphere, and contemporary interpretation of Middle Eastern hospitality. The ventilation and air treatment solutions were tailored to accommodate the demands of high-volume food preparation, including grilling, baking, and traditional Lebanese cooking processes. Engineered for efficiency and reliability, the systems contribute to effective extraction and treatment of kitchen emissions while supporting the smooth operation of the restaurant's busy kitchens.",
        image: { src: asset("/images/portfolio/al-beiruti/cover.webp"), alt: "Al Beiruti" },
        heroImage: { src: asset("/images/portfolio/al-beiruti/hero.webp"), alt: "Al Beiruti", position: "center 15%" },
        gallery: [
          { src: asset("/images/portfolio/al-beiruti/1.webp"), alt: "Al Beiruti — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/al-beiruti/2.webp"), alt: "Al Beiruti — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/al-beiruti/3.webp"), alt: "Al Beiruti — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/al-beiruti/4.webp"), alt: "Al Beiruti — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Awani",
        location: [
          "Awani U-Walk, Riyadh, KSA",
          "Awani Catch 22, Jeddah, KSA",
          "Awani Cafe - Meadows Souk, Al Thanyah Fourth, Emaar, Dubai",
          "Awani Al Bateen, Abu Dhabi, UAE",
          "Awani Beach, JBR, Dubai, UAE",
        ],
        outsideLocation: "Multiple locations in UAE & KSA",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Drawing inspiration from the rich culinary traditions of the Levant, Awani has grown into a well-loved dining brand with locations across the UAE and Saudi Arabia, including Al Bateen, JBR, Meadows, U-Walk Riyadh, and Catch 22 Jeddah. Renowned for its contemporary interpretation of Middle Eastern cuisine, Awani combines authentic flavors, vibrant social dining experiences, and elegant interiors that reflect the warmth of regional hospitality. Across multiple locations, comprehensive kitchen ventilation and air treatment solutions were incorporated to accommodate the diverse operational requirements of the brand. Featuring custom-engineered kitchen canopies and advanced Ecology Units, the systems were designed to efficiently manage heat, smoke, grease, and cooking emissions generated by high-volume kitchen operations. Tailored to suit each venue's unique layout and dining concept, the installations contribute to enhanced kitchen performance, improved air quality, and a comfortable environment for both staff and guests, supporting Awani's continued expansion across the region.",
        image: { src: asset("/images/portfolio/awani/cover.webp"), alt: "Awani" },
        heroImage: { src: asset("/images/portfolio/awani/hero.webp"), alt: "Awani" },
        gallery: [
          { src: asset("/images/portfolio/awani/1.webp"), alt: "Awani — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/awani/2.webp"), alt: "Awani — photo 2", shape: "square" },
          { src: asset("/images/portfolio/awani/3.webp"), alt: "Awani — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/awani/4.webp"), alt: "Awani — photo 4", shape: "landscape" },
        ],
      },

      // Restaurants — Premium
      {
        title: "The Meat Co",
        location: ["MeatCo Kuwait Restaurant, Kuwait", "Meat Co SMJ, Dubai, UAE"],
        outsideLocation: "Multiple locations in Kuwait & UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Renowned for its premium cuts, flame-grilled specialties, and sophisticated dining experience, MeatCo has established itself as a leading steakhouse destination across the Middle East. With locations in Kuwait and Dubai's iconic Souk Madinat Jumeirah, the restaurant combines contemporary elegance with a passion for quality ingredients and expertly crafted cuisine. Given the intensity of steakhouse operations, where open-flame grilling and high-temperature cooking are central to the menu, kitchen canopies and Ecology Units were incorporated to accommodate the demands of daily service. The integrated solution provides effective extraction and air treatment, helping maintain optimal kitchen conditions while supporting the restaurant's commitment to delivering an exceptional dining experience.",
        image: { src: asset("/images/portfolio/meatco/cover.webp"), alt: "MeatCo" },
        heroImage: { src: asset("/images/portfolio/meatco/hero.webp"), alt: "MeatCo" },
        gallery: [
          { src: asset("/images/portfolio/meatco/1.webp"), alt: "MeatCo — photo 1", shape: "square" },
          { src: asset("/images/portfolio/meatco/2.webp"), alt: "MeatCo — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/meatco/3.webp"), alt: "MeatCo — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/4.webp"), alt: "MeatCo — photo 4", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/5.webp"), alt: "MeatCo — photo 5", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/6.webp"), alt: "MeatCo — photo 6", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/7.webp"), alt: "MeatCo — photo 7", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/8.webp"), alt: "MeatCo — photo 8", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/9.webp"), alt: "MeatCo — photo 9", shape: "portrait" },
          { src: asset("/images/portfolio/meatco/10.webp"), alt: "MeatCo — photo 10", shape: "portrait" },
          { src: asset("/images/portfolio/meatco/11.webp"), alt: "MeatCo — photo 11", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/12.webp"), alt: "MeatCo — photo 12", shape: "landscape" },
          { src: asset("/images/portfolio/meatco/13.webp"), alt: "MeatCo — photo 13", shape: "landscape" },
        ],
      },
      {
        title: "Cipriani Dolci",
        location: ["Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "A symbol of timeless Italian elegance, Cipriani has earned a global reputation for refined hospitality, impeccable service, and authentic Venetian-inspired cuisine. At its Jumeirah location in Dubai, the brand offers a sophisticated waterfront dining experience where classic recipes, premium ingredients, and understated luxury come together in a distinctly Cipriani setting. Reflecting the standards of a world-renowned hospitality brand, custom kitchen canopies were incorporated as part of the restaurant's kitchen infrastructure to accommodate the demands of its culinary operations. Designed to provide reliable extraction and consistent performance, the system supports the seamless execution of daily service while maintaining the high levels of quality and efficiency expected of the Cipriani name.",
        image: { src: asset("/images/portfolio/cipriani/cover.webp"), alt: "Cipriani" },
        heroImage: { src: asset("/images/portfolio/cipriani/hero.webp"), alt: "Cipriani" },
        gallery: [
          { src: asset("/images/portfolio/cipriani/1.webp"), alt: "Cipriani — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/cipriani/2.webp"), alt: "Cipriani — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/cipriani/3.webp"), alt: "Cipriani — photo 3", shape: "portrait" },
          { src: asset("/images/portfolio/cipriani/4.webp"), alt: "Cipriani — photo 4", shape: "portrait" },
        ],
      },
      {
        title: "SĀN Beach",
        location: ["Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "Set against the backdrop of Dubai's coastline, SAN Beach has established itself as one of the city's most sought-after beachfront destinations, combining Mediterranean-inspired dining, laid-back luxury, and breathtaking sea views. With its elegant design, vibrant atmosphere, and seamless blend of dining and leisure experiences, the venue offers guests a sophisticated escape by the water. Tailored to the demands of a high-energy beachfront hospitality concept, custom kitchen canopies were incorporated to accommodate the diverse culinary activities taking place throughout the venue. Delivering dependable extraction performance and efficient airflow management, the system contributes to smooth kitchen operations while supporting the elevated guest experience that defines SAN Beach.",
        image: { src: asset("/images/portfolio/san-beach/cover.webp"), alt: "San Beach" },
        heroImage: { src: asset("/images/portfolio/san-beach/hero.webp"), alt: "San Beach", position: "center 33%" },
        gallery: [
          { src: asset("/images/portfolio/san-beach/1.webp"), alt: "San Beach — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/san-beach/2.webp"), alt: "San Beach — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/san-beach/3.webp"), alt: "San Beach — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/san-beach/4.webp"), alt: "San Beach — photo 4", shape: "landscape" },
          { src: asset("/images/portfolio/san-beach/5.webp"), alt: "San Beach — photo 5", shape: "portrait" },
          { src: asset("/images/portfolio/san-beach/6.webp"), alt: "San Beach — photo 6", shape: "portrait" },
          { src: asset("/images/portfolio/san-beach/7.webp"), alt: "San Beach — photo 7", shape: "portrait" },
          { src: asset("/images/portfolio/san-beach/8.webp"), alt: "San Beach — photo 8", shape: "landscape" },
          { src: asset("/images/portfolio/san-beach/9.webp"), alt: "San Beach — photo 9", shape: "landscape" },
        ],
      },
      {
        title: "Loren",
        location: ["Palm Jumeirah, Dubai, UAE"],
        outsideLocation: "Palm Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "Bringing the charm of the Italian Riviera to Palm Jumeirah, Loren offers an elegant dining experience inspired by the coastal flavors, lifestyle, and sophistication of Southern Italy. With its stylish interiors, waterfront setting, and menu rooted in authentic Italian cuisine, the restaurant creates an atmosphere that is both refined and effortlessly welcoming. Crafted to complement the pace and precision of a contemporary Italian kitchen, custom kitchen canopies were integrated as part of the venue's back-of-house infrastructure. The solution delivers reliable extraction performance throughout service, supporting the preparation of Loren's signature dishes while maintaining an efficient and comfortable culinary environment behind the scenes.",
        image: { src: asset("/images/portfolio/loren/cover.webp"), alt: "Loren" },
        heroImage: { src: asset("/images/portfolio/loren/hero.webp"), alt: "Loren", position: "center 40%" },
        gallery: [
          { src: asset("/images/portfolio/loren/1.webp"), alt: "Loren — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/loren/2.webp"), alt: "Loren — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/loren/3.webp"), alt: "Loren — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/loren/4.webp"), alt: "Loren — photo 4", shape: "landscape" },
          { src: asset("/images/portfolio/loren/5.webp"), alt: "Loren — photo 5", shape: "landscape" },
          { src: asset("/images/portfolio/loren/6.webp"), alt: "Loren — photo 6", shape: "landscape" },
          { src: asset("/images/portfolio/loren/7.webp"), alt: "Loren — photo 7", shape: "landscape" },
          { src: asset("/images/portfolio/loren/8.webp"), alt: "Loren — photo 8", shape: "landscape" },
        ],
      },
      {
        title: "Gloria Osteria, Big Mamma",
        location: ["Gate Avenue, The Ritz Carlton, DIFC, Dubai, UAE"],
        outsideLocation: "DIFC, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies with Demand Control System",
        description:
          "Created by the renowned Big Mamma Group, Gloria Osteria brings the spirit of classic Italian trattorias to the heart of DIFC, offering guests an immersive dining experience inspired by the glamour, flavors, and hospitality of Italy. Located within The Ritz-Carlton Dubai International Financial Centre, the restaurant is known for its bold interiors, theatrical presentation, and generous Italian cuisine served in a lively and vibrant atmosphere. Reflecting the scale and energy of a bustling Italian dining destination, custom kitchen canopies integrated with a Demand Control Ventilation System were incorporated as part of the project's kitchen infrastructure. By automatically adapting ventilation levels to real-time cooking activity, the system enhances operational efficiency while maintaining optimal kitchen conditions. The intelligent solution aligns with the venue's commitment to delivering exceptional dining experiences while embracing sustainable and energy-conscious operations.",
        image: { src: asset("/images/portfolio/gloria-osteria-big-mamma/cover.webp"), alt: "Gloria Osteria, Big Mamma" },
        heroImage: { src: asset("/images/portfolio/gloria-osteria-big-mamma/hero.webp"), alt: "Gloria Osteria, Big Mamma" },
        gallery: [
          { src: asset("/images/portfolio/gloria-osteria-big-mamma/1.webp"), alt: "Gloria Osteria, Big Mamma — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/gloria-osteria-big-mamma/2.webp"), alt: "Gloria Osteria, Big Mamma — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/gloria-osteria-big-mamma/3.webp"), alt: "Gloria Osteria, Big Mamma — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/gloria-osteria-big-mamma/4.webp"), alt: "Gloria Osteria, Big Mamma — photo 4", shape: "landscape" },
          { src: asset("/images/portfolio/gloria-osteria-big-mamma/5.webp"), alt: "Gloria Osteria, Big Mamma — photo 5", shape: "landscape" },
          { src: asset("/images/portfolio/gloria-osteria-big-mamma/6.webp"), alt: "Gloria Osteria, Big Mamma — photo 6", shape: "landscape" },
        ],
      },
      {
        title: "Kaimana Beach",
        location: ["Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "Inspired by the laid-back spirit of tropical island living, Kaimana Beach offers a distinctive beachfront experience where ocean views, vibrant dining, and relaxed luxury come together along Dubai's coastline. Drawing influence from the Polynesian word \"Kaimana,\" meaning the power of the ocean, the venue creates an atmosphere that blends coastal elegance with a welcoming social energy. Designed for a destination where dining and leisure seamlessly intertwine, custom kitchen canopies were incorporated to accommodate the demands of the venue's culinary operations. Delivering dependable extraction performance and efficient airflow management, the system supports a comfortable kitchen environment while enabling the smooth execution of service expected from one of Dubai's sought-after beachfront destinations.",
        image: { src: asset("/images/portfolio/kaimana-beach/cover.webp"), alt: "Kaimana Beach" },
        heroImage: { src: asset("/images/portfolio/kaimana-beach/hero.webp"), alt: "Kaimana Beach", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/kaimana-beach/1.webp"), alt: "Kaimana Beach — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/kaimana-beach/2.webp"), alt: "Kaimana Beach — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/kaimana-beach/3.webp"), alt: "Kaimana Beach — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/kaimana-beach/4.webp"), alt: "Kaimana Beach — photo 4", shape: "landscape" },
          { src: asset("/images/portfolio/kaimana-beach/5.webp"), alt: "Kaimana Beach — photo 5", shape: "portrait" },
          { src: asset("/images/portfolio/kaimana-beach/6.webp"), alt: "Kaimana Beach — photo 6", shape: "portrait" },
          { src: asset("/images/portfolio/kaimana-beach/7.webp"), alt: "Kaimana Beach — photo 7", shape: "portrait" },
          { src: asset("/images/portfolio/kaimana-beach/8.webp"), alt: "Kaimana Beach — photo 8", shape: "portrait" },
          { src: asset("/images/portfolio/kaimana-beach/9.webp"), alt: "Kaimana Beach — photo 9", shape: "portrait" },
          { src: asset("/images/portfolio/kaimana-beach/10.webp"), alt: "Kaimana Beach — photo 10", shape: "landscape" },
          { src: asset("/images/portfolio/kaimana-beach/11.webp"), alt: "Kaimana Beach — photo 11", shape: "landscape" },
        ],
      },
      {
        title: "Bâoli",
        location: ["Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "Originating from the French Riviera and renowned for its fusion of fine dining, entertainment, and vibrant nightlife, BAOLI has become an internationally recognized lifestyle destination. Its Dubai beach club brings together Mediterranean-inspired elegance, world-class cuisine, and a dynamic social atmosphere, creating an experience that transitions effortlessly from relaxed beachfront dining to energetic evening entertainment. Reflecting the venue's dual identity as both a premium dining destination and a lively social hotspot, custom kitchen canopies were incorporated to accommodate the demands of continuous culinary service throughout the day and night. Designed for dependable performance and operational efficiency, the system supports the seamless execution of BAOLI's hospitality experience while maintaining optimal conditions within the kitchen environment.",
        image: { src: asset("/images/portfolio/baoli-beach-club/cover.webp"), alt: "Baoli Beach Club" },
        heroImage: { src: asset("/images/portfolio/baoli-beach-club/hero.webp"), alt: "Baoli Beach Club", position: "center 15%" },
        gallery: [
          { src: asset("/images/portfolio/baoli-beach-club/1.webp"), alt: "Baoli Beach Club — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/baoli-beach-club/2.webp"), alt: "Baoli Beach Club — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/baoli-beach-club/3.webp"), alt: "Baoli Beach Club — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/baoli-beach-club/4.webp"), alt: "Baoli Beach Club — photo 4", shape: "landscape" },
          { src: asset("/images/portfolio/baoli-beach-club/5.webp"), alt: "Baoli Beach Club — photo 5", shape: "landscape" },
          { src: asset("/images/portfolio/baoli-beach-club/6.webp"), alt: "Baoli Beach Club — photo 6", shape: "square" },
          { src: asset("/images/portfolio/baoli-beach-club/7.webp"), alt: "Baoli Beach Club — photo 7", shape: "square" },
        ],
      },
      {
        title: "The Cullinan",
        location: ["Marsa al Arab Hotel, Jumeirah St, Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Ecology Units",
        description:
          "Overlooking the Arabian Gulf from the prestigious Jumeirah Marsa Al Arab, Cullinan offers a refined dining experience inspired by the world's largest rough diamond, reflecting a philosophy of rarity, craftsmanship, and timeless elegance. Combining premium ingredients, sophisticated interiors, and exceptional service, the restaurant has established itself as one of Dubai's most exclusive culinary destinations. In keeping with the standards of a luxury waterfront venue, advanced Ecology Units were integrated into the kitchen exhaust system to ensure effective treatment of cooking emissions before discharge. Engineered to manage grease, smoke, and odors with exceptional efficiency, the solution supports a cleaner and more environmentally responsible operation while aligning with the elevated hospitality experience that defines Cullinan.",
        image: { src: asset("/images/portfolio/cullinan/cover.webp"), alt: "Cullinan" },
        heroImage: { src: asset("/images/portfolio/cullinan/hero.webp"), alt: "Cullinan" },
        gallery: [
          { src: asset("/images/portfolio/cullinan/1.webp"), alt: "Cullinan — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/cullinan/2.webp"), alt: "Cullinan — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/cullinan/3.webp"), alt: "Cullinan — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/cullinan/4.webp"), alt: "Cullinan — photo 4", shape: "portrait" },
          { src: asset("/images/portfolio/cullinan/5.webp"), alt: "Cullinan — photo 5", shape: "square" },
          { src: asset("/images/portfolio/cullinan/6.webp"), alt: "Cullinan — photo 6", shape: "landscape" },
          { src: asset("/images/portfolio/cullinan/7.webp"), alt: "Cullinan — photo 7", shape: "landscape" },
          { src: asset("/images/portfolio/cullinan/8.webp"), alt: "Cullinan — photo 8", shape: "square" },
        ],
      },
      {
        title: "Berber",
        location: ["Blue Waters Residence, Marsa Dubai, Bluewaters Island, Dubai, UAE"],
        outsideLocation: "Bluewaters, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "Inspired by the rich culinary traditions of North Africa and the Mediterranean, Berber brings together bold flavors, vibrant hospitality, and contemporary design in a unique waterfront setting on Bluewaters Island. The restaurant's warm atmosphere, open-fire cooking influences, and carefully curated dining experience create a destination that celebrates culture, craftsmanship, and shared moments around food. Drawing from a menu that embraces charcoal grilling and traditional cooking techniques, custom kitchen canopies were incorporated to accommodate the demands of an active culinary environment. Designed for dependable performance and seamless integration, the ventilation solution supports the rhythm of the kitchen while helping maintain the standards expected of a modern dining destination overlooking Dubai's iconic waterfront.",
        image: { src: asset("/images/portfolio/berber/cover.webp"), alt: "Berber" },
        heroImage: { src: asset("/images/portfolio/berber/hero.webp"), alt: "Berber", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/berber/1.webp"), alt: "Berber — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/berber/2.webp"), alt: "Berber — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/berber/3.webp"), alt: "Berber — photo 3", shape: "portrait" },
          { src: asset("/images/portfolio/berber/4.webp"), alt: "Berber — photo 4", shape: "square" },
          { src: asset("/images/portfolio/berber/5.webp"), alt: "Berber — photo 5", shape: "square" },
          { src: asset("/images/portfolio/berber/6.webp"), alt: "Berber — photo 6", shape: "square" },
        ],
      },

      // Cafés
      {
        title: "BohoX",
        location: ["Downtown Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafés",
        scope: "Ecology Units",
        description:
          "BohoX reimagines all-day dining through a blend of Mediterranean flavors, wellness-inspired cuisine, and contemporary bohemian design. Nestled in the heart of Downtown Dubai, the venue has become known for its lush interiors, vibrant atmosphere, and thoughtfully curated menu that celebrates fresh, wholesome ingredients. An advanced Ecology Unit forms an integral part of the restaurant's kitchen exhaust system, helping treat grease, smoke, and cooking odors before air is discharged. The solution enables the venue to maintain high environmental standards while preserving the comfortable and inviting atmosphere that has become synonymous with the BohoX experience.",
        image: { src: asset("/images/portfolio/bohox/cover.webp"), alt: "BohoX" },
        heroImage: { src: asset("/images/portfolio/bohox/hero.webp"), alt: "BohoX", position: "center 30%" },
        gallery: [
          { src: asset("/images/portfolio/bohox/1.webp"), alt: "BohoX — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/bohox/2.webp"), alt: "BohoX — photo 2", shape: "square" },
          { src: asset("/images/portfolio/bohox/3.webp"), alt: "BohoX — photo 3", shape: "square" },
          { src: asset("/images/portfolio/bohox/4.webp"), alt: "BohoX — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "EL&N",
        location: ["Yas Bay Waterfront, Abu Dhabi, UAE"],
        outsideLocation: "Abu Dhabi, UAE",
        category: "Cafés",
        scope: "Kitchen Canopies",
        description:
          "Originally founded in London, EL&N has grown into a globally recognized lifestyle café brand celebrated for its signature floral interiors, vibrant pink aesthetic, and indulgent all-day dining experience. Its Yas Bay Waterfront location in Abu Dhabi continues this vision, offering guests a stylish destination where contemporary cuisine, specialty coffee, and elegant surroundings come together. Custom kitchen canopies were incorporated to complement the café's fast-paced kitchen operations, providing dependable ventilation performance. Carefully integrated into the back-of-house infrastructure, the system supports the efficient preparation of EL&N's diverse menu while maintaining the high standards expected of an internationally acclaimed hospitality brand.",
        image: { src: asset("/images/portfolio/el-n/cover.webp"), alt: "EL&N" },
        heroImage: { src: asset("/images/portfolio/el-n/hero.webp"), alt: "EL&N", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/el-n/1.webp"), alt: "EL&N — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/el-n/2.webp"), alt: "EL&N — photo 2", shape: "tall" },
          { src: asset("/images/portfolio/el-n/3.webp"), alt: "EL&N — photo 3", shape: "square" },
          { src: asset("/images/portfolio/el-n/4.webp"), alt: "EL&N — photo 4", shape: "tall" },
        ],
      },
      {
        title: "Armani Café",
        location: ["Dubai Mall, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafés",
        scope: "Ecology Units",
        description:
          "Overlooking the iconic Dubai Fountain from Dubai Mall, Armani/Caffè embodies the understated elegance and timeless sophistication synonymous with the Armani brand. Combining authentic Italian cuisine with contemporary design and impeccable hospitality, the café offers a refined dining experience where every detail reflects Giorgio Armani's signature philosophy of style and simplicity. Behind this premium dining destination, Ecology Units were integrated to enhance the treatment of kitchen exhaust emissions before discharge, while complementing the seamless, high-quality experience that defines Armani/Caffè.",
        image: { src: asset("/images/portfolio/armani-caf/cover.webp"), alt: "Armani Café" },
        heroImage: { src: asset("/images/portfolio/armani-caf/hero.webp"), alt: "Armani Café", position: "center 30%" },
        gallery: [
          { src: asset("/images/portfolio/armani-caf/1.webp"), alt: "Armani Café — photo 1", shape: "square" },
          { src: asset("/images/portfolio/armani-caf/2.webp"), alt: "Armani Café — photo 2", shape: "tall" },
          { src: asset("/images/portfolio/armani-caf/3.webp"), alt: "Armani Café — photo 3", shape: "square" },
        ],
      },
      {
        title: "Bateel Café",
        location: ["Reem Mall, Abu Dhabi", "Zaa'beel Palace St, Dubai"],
        outsideLocation: "Multiple locations in UAE",
        category: "Cafés",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Renowned for combining Middle Eastern heritage with contemporary dining, Bateel Café offers a refined culinary experience centered around gourmet cuisine, specialty coffee, and the brand's world-famous organic dates. Its locations at Reem Mall, Abu Dhabi, and One Za'abeel, Dubai, reflect the brand's commitment to elegant hospitality, premium ingredients, and thoughtfully designed dining spaces. Across both locations, the kitchen infrastructure was enhanced with Kitchen Canopies and Ecology Units, providing a solution suited to the brand's diverse culinary offerings. Working together as an integrated ventilation solution, the systems provide efficient extraction and effective treatment of kitchen exhaust emissions, supporting a clean, comfortable, and environmentally responsible kitchen environment while maintaining the premium standards associated with the Bateel brand.",
        image: { src: asset("/images/portfolio/bateel-caf/cover.webp"), alt: "Bateel Café" },
        heroImage: { src: asset("/images/portfolio/bateel-caf/hero.webp"), alt: "Bateel Café" },
        gallery: [
          { src: asset("/images/portfolio/bateel-caf/1.webp"), alt: "Bateel Café — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/bateel-caf/2.webp"), alt: "Bateel Café — photo 2", shape: "square" },
          { src: asset("/images/portfolio/bateel-caf/3.webp"), alt: "Bateel Café — photo 3", shape: "square" },
          { src: asset("/images/portfolio/bateel-caf/4.webp"), alt: "Bateel Café — photo 4", shape: "portrait" },
        ],
      },
      {
        title: "Paul Café",
        location: [
          "Nakheel Mall, Palm Jumeirah, Dubai, UAE",
          "Reem Mall, Abu Dhabi, UAE",
          "Dalma Mall, Abu Dhabi, UAE",
          "Arabian Ranches Souk, Dubai, UAE",
          "Al Jimi Mall, Al Ain, UAE",
          "Nad Al Sheba Mall, Dubai, UAE",
          "Marina Mall, Abu Dhabi, UAE",
        ],
        outsideLocation: "Multiple locations in UAE",
        category: "Cafés",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Founded in France in 1889, PAUL has grown into an internationally celebrated bakery and café brand, renowned for its artisanal breads, French pastries, and classic café cuisine. With multiple locations across the UAE, including Dubai, Abu Dhabi, and Al Ain, the brand continues to deliver an authentic Parisian dining experience defined by timeless elegance, traditional baking, and exceptional hospitality. An integrated kitchen ventilation solution featuring Kitchen Canopies and Ecology Units was implemented to accommodate the varied culinary activities taking place throughout each café. From freshly baked breads and viennoiseries to hot kitchen preparations, the integrated solution was tailored to meet the diverse demands of PAUL's culinary operations, ensuring reliable ventilation and effective exhaust air treatment throughout every stage of service.",
        image: { src: asset("/images/portfolio/paul-caf/cover.webp"), alt: "Paul Café" },
        heroImage: { src: asset("/images/portfolio/paul-caf/hero.webp"), alt: "Paul Café" },
        gallery: [
          { src: asset("/images/portfolio/paul-caf/1.webp"), alt: "Paul Café — photo 1", shape: "square" },
          { src: asset("/images/portfolio/paul-caf/2.webp"), alt: "Paul Café — photo 2", shape: "tall" },
          { src: asset("/images/portfolio/paul-caf/3.webp"), alt: "Paul Café — photo 3", shape: "tall" },
          { src: asset("/images/portfolio/paul-caf/4.webp"), alt: "Paul Café — photo 4", shape: "square" },
        ],
      },
      {
        title: "Brunch and Cakes",
        location: ["Marassi Galleria, Bahrain", "The Montgomerie, Emirates Hills, Dubai, UAE"],
        outsideLocation: "Multiple locations in Bahrain & UAE",
        category: "Cafés",
        scope: "Kitchen Canopies",
        description:
          "Originating in Barcelona, Brunch & Cake has become an internationally recognized café brand, celebrated for its wholesome cuisine, beautifully presented dishes, and inviting interiors that embody a relaxed Mediterranean lifestyle. Its locations at Marassi Galleria, Bahrain, and The Montgomerie, Dubai, continue the brand's philosophy of creating memorable all-day dining experiences through fresh ingredients, creative menus, and warm hospitality. Kitchen Canopies were incorporated across both locations to accommodate the lively pace of an all-day café where breakfast, brunch, baking, and à la carte dining operate seamlessly throughout the day. Tailored to the brand's diverse culinary offerings, the ventilation solution integrates effortlessly into the kitchen environment, supporting the smooth preparation of every dish while complementing the welcoming atmosphere.",
        image: { src: asset("/images/portfolio/brunch-and-cakes/cover.webp"), alt: "Brunch and Cakes" },
        heroImage: { src: asset("/images/portfolio/brunch-and-cakes/hero.webp"), alt: "Brunch and Cakes" },
        gallery: [
          { src: asset("/images/portfolio/brunch-and-cakes/1.webp"), alt: "Brunch and Cakes — photo 1", shape: "tall" },
          { src: asset("/images/portfolio/brunch-and-cakes/2.webp"), alt: "Brunch and Cakes — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/brunch-and-cakes/3.webp"), alt: "Brunch and Cakes — photo 3", shape: "square" },
          { src: asset("/images/portfolio/brunch-and-cakes/4.webp"), alt: "Brunch and Cakes — photo 4", shape: "tall" },
          { src: asset("/images/portfolio/brunch-and-cakes/5.webp"), alt: "Brunch and Cakes — photo 5", shape: "tall" },
        ],
      },
      {
        title: "Angel Cakes",
        location: ["Dubai Creek Harbour, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafés",
        scope: "Ecology Unit",
        description:
          "Founded with the vision of making indulgence healthier, Angel Cakes has redefined the café experience through a menu of refined desserts, artisan pastries, and specialty coffee, all crafted without refined sugar, gluten, or artificial ingredients. At its Dubai Creek Harbour location, the café combines contemporary design with mindful dining, offering guests a bright and elegant space that celebrates wellness without compromising on flavor. The kitchen exhaust system was equipped with an Ecology Unit to efficiently treat cooking and baking emissions, promoting cleaner and more environmentally responsible operation. Carefully selected to complement the café's sustainable philosophy, the solution promotes cleaner air quality and environmentally responsible operations while supporting the smooth day-to-day functioning of this modern bakery concept.",
        image: { src: asset("/images/portfolio/angel-cakes/cover-v2.webp"), alt: "Angel Cakes" },
        heroImage: { src: asset("/images/portfolio/angel-cakes/hero.webp"), alt: "Angel Cakes", position: "center 30%" },
        gallery: [
          { src: asset("/images/portfolio/angel-cakes/1.webp"), alt: "Angel Cakes — photo 1", shape: "tall" },
          { src: asset("/images/portfolio/angel-cakes/2.webp"), alt: "Angel Cakes — photo 2", shape: "tall" },
        ],
      },
      {
        title: "Bake My Day",
        location: ["Downtown Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafés",
        scope: "Ecology Unit",
        description:
          "From handcrafted celebration cakes to artisan pastries and specialty coffee, Bake My Day has established itself as a contemporary bakery destination where creativity, quality, and craftsmanship come together. Located in Downtown Dubai, the bakery offers an inviting space dedicated to freshly prepared desserts and memorable culinary experiences. To accommodate the demands of continuous baking and dessert production, an Ecology Unit was integrated into the kitchen exhaust system. Designed to effectively treat kitchen emissions before discharge, the solution promotes cleaner and more sustainable operations while allowing the bakery to focus on delivering freshly crafted creations throughout the day.",
        image: { src: asset("/images/portfolio/bake-my-day/cover.webp"), alt: "Bake My Day" },
        heroImage: { src: asset("/images/portfolio/bake-my-day/hero.webp"), alt: "Bake My Day", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/bake-my-day/1.webp"), alt: "Bake My Day — photo 1", shape: "tall" },
          { src: asset("/images/portfolio/bake-my-day/2.webp"), alt: "Bake My Day — photo 2", shape: "square" },
          { src: asset("/images/portfolio/bake-my-day/3.webp"), alt: "Bake My Day — photo 3", shape: "square" },
          { src: asset("/images/portfolio/bake-my-day/4.webp"), alt: "Bake My Day — photo 4", shape: "tall" },
          { src: asset("/images/portfolio/bake-my-day/5.webp"), alt: "Bake My Day — photo 5", shape: "square" },
        ],
      },
      {
        title: "Saddle House",
        location: ["Al Qana, Abu Dhabi, UAE", "Al Jimi Mall, Al Ain, UAE"],
        outsideLocation: "Multiple locations in UAE",
        category: "Cafés",
        scope: "Ecology Units",
        description:
          "Born from Dubai's vibrant café culture, Saddle House has evolved from the iconic Saddle concept into a contemporary dining destination where refined comfort food, specialty coffee, and stylish interiors come together. Its locations at Al Qana, Abu Dhabi, and Al Jimi Mall, Al Ain, reflect the brand's signature blend of modern design, relaxed luxury, and memorable hospitality. To complement the dynamic kitchen operations across both venues, Ecology Units were incorporated into the exhaust air treatment system to effectively manage grease, smoke, and cooking odors before discharge. Carefully integrated into the kitchen infrastructure, the solution enhances air quality while supporting the seamless operation of a brand known for its elevated café and dining experience.",
        image: { src: asset("/images/portfolio/saddle-house/cover.webp"), alt: "Saddle House" },
        heroImage: { src: asset("/images/portfolio/saddle-house/hero.webp"), alt: "Saddle House", position: "center 15%" },
        gallery: [
          { src: asset("/images/portfolio/saddle-house/1.webp"), alt: "Saddle House — photo 1", shape: "square" },
          { src: asset("/images/portfolio/saddle-house/2.webp"), alt: "Saddle House — photo 2", shape: "tall" },
          { src: asset("/images/portfolio/saddle-house/3.webp"), alt: "Saddle House — photo 3", shape: "square" },
          { src: asset("/images/portfolio/saddle-house/4.webp"), alt: "Saddle House — photo 4", shape: "tall" },
        ],
      },
      // QSR
      {
        title: "JJ Chicken",
        location: [
          "Reem Mall, Abu Dhabi, UAE",
          "Dubai Festival City Mall, Dubai, UAE",
          "Discovery Gardens, Dubai, UAE",
        ],
        outsideLocation: "Reem Mall, Abu Dhabi, UAE",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "JJ Chicken is a fast-growing quick-service restaurant brand with multiple locations across the UAE. For its branches at Reem Mall in Abu Dhabi, Dubai Festival City Mall, and Discovery Gardens, Avante delivered bespoke kitchen canopy solutions tailored to the operational requirements of each commercial kitchen. Designed to provide reliable extraction of grease-laden vapors, heat, and airborne contaminants, the ventilation system enhances kitchen efficiency, promotes a hygienic workspace, and supports consistent performance during peak service hours.",
        image: { src: asset("/images/portfolio/jj-chicken/cover.webp"), alt: "JJ Chicken" },
        heroImage: { src: asset("/images/portfolio/jj-chicken/hero.webp"), alt: "JJ Chicken" },
        gallery: [
          { src: asset("/images/portfolio/jj-chicken/1.webp"), alt: "JJ Chicken — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/jj-chicken/2.webp"), alt: "JJ Chicken — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/jj-chicken/3.webp"), alt: "JJ Chicken — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Time Out Market",
        location: ["City Centre Bahrain, Manama, Bahrain"],
        outsideLocation: "City Centre Bahrain, Manama, Bahrain",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "Time Out Market Bahrain brings together a diverse collection of renowned food vendors under one roof, demanding efficient ventilation across multiple commercial kitchens. At its location in City Centre Bahrain, Manama, Avante provided high-performance kitchen canopies engineered to manage the continuous extraction of heat, smoke, and grease generated by a wide range of culinary operations. The solution contributes to a cleaner kitchen environment, improved operational reliability, and compliance with commercial kitchen ventilation standards.",
        image: { src: asset("/images/portfolio/time-out-market-bahrain/cover.webp"), alt: "Time Out Market Bahrain" },
        heroImage: { src: asset("/images/portfolio/time-out-market-bahrain/hero.webp"), alt: "Time Out Market Bahrain" },
        gallery: [
          { src: asset("/images/portfolio/time-out-market-bahrain/1.webp"), alt: "Time Out Market Bahrain — photo 1", shape: "landscape" },
        ],
      },
      {
        title: "Shake Shack",
        location: ["Marassi Galleria, Bahrain", "ADNOC Service Stations, UAE"],
        outsideLocation: "Marassi Galleria, Bahrain",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "For Shake Shack, Avante supplied custom kitchen canopy systems for locations at Marassi Galleria in Bahrain and ADNOC Service Stations across the UAE. Designed for fast-paced food preparation environments, the canopies provide effective capture and removal of cooking emissions, helping maintain optimal air quality and thermal comfort within the kitchen. The solution delivers dependable ventilation performance while supporting the brand's commitment to operational excellence and consistent customer service.",
        image: { src: asset("/images/portfolio/shake-shack/cover.webp"), alt: "Shake Shack" },
        heroImage: { src: asset("/images/portfolio/shake-shack/hero.webp"), alt: "Shake Shack", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/shake-shack/1.webp"), alt: "Shake Shack — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/shake-shack/2.webp"), alt: "Shake Shack — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/shake-shack/3.webp"), alt: "Shake Shack — photo 3", shape: "portrait" },
        ],
      },
      {
        title: "Nando's",
        location: [
          "Al Jimi Mall, Al Ain, UAE",
          "Dalma Mall, Abu Dhabi, UAE",
          "Deira City Centre, Dubai, UAE",
          "Jumeirah Beach Residence (JBR), Dubai, UAE",
          "Ibn Battuta Mall, Dubai, UAE",
          "Mall of the Emirates, Dubai, UAE",
          "Al Zeina, Abu Dhabi, UAE",
          "Marassi Galleria, Bahrain",
        ],
        outsideLocation: "Al Jimi Mall, Al Ain, UAE",
        category: "QSR",
        scope: "Kitchen Canopies, Ecology Units",
        description:
          "Across multiple Nando's locations in the UAE and Bahrain, Avante delivered integrated kitchen ventilation solutions featuring custom kitchen canopies and ecology units. Engineered to accommodate the demands of high-volume grilling operations, the systems efficiently capture grease, smoke, and cooking odors while enhancing overall air quality within the kitchen. By combining effective extraction with advanced air filtration, the solution supports smooth day-to-day operations, regulatory compliance, and a productive commercial cooking environment.",
        image: { src: asset("/images/portfolio/nando-s/cover.webp"), alt: "Nando's" },
        heroImage: { src: asset("/images/portfolio/nando-s/hero.webp"), alt: "Nando's" },
        gallery: [
          { src: asset("/images/portfolio/nando-s/1.webp"), alt: "Nando's — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/nando-s/2.webp"), alt: "Nando's — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/nando-s/3.webp"), alt: "Nando's — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Allo Beirut",
        location: [
          "Olaya Street, Riyadh, Saudi Arabia",
          "Al Hamra Mall, Ras Al Khaimah, UAE",
          "Sahara Mall, Riyadh, Saudi Arabia",
          "Al Qasr Mall, Riyadh, Saudi Arabia",
          "Al Wadi District, Riyadh, Saudi Arabia",
          "Souq 7, Riyadh, Saudi Arabia",
          "Oro Square, Riyadh, Saudi Arabia",
          "City Walk, Bahrain",
        ],
        outsideLocation: "Olaya Street, Riyadh, Saudi Arabia",
        category: "QSR",
        scope: "Kitchen Canopies, Ecology Units",
        description:
          "Inspired by the vibrant street food culture of Lebanon, Allo Beirut continues to expand its presence across the GCC with lively, high-capacity dining destinations. To support its operations across multiple locations in Saudi Arabia, the UAE, and Bahrain, Avante supplied custom kitchen canopies and ecology units designed for demanding commercial kitchens. The integrated ventilation and air treatment solution effectively manages cooking by-products, minimizes grease emissions, and promotes a cleaner, more efficient kitchen environment while meeting the requirements of modern food service facilities.",
        image: { src: asset("/images/portfolio/allo-beirut/cover.webp"), alt: "Allo Beirut" },
        heroImage: { src: asset("/images/portfolio/allo-beirut/hero.webp"), alt: "Allo Beirut", position: "center 25%" },
        gallery: [
          { src: asset("/images/portfolio/allo-beirut/1.webp"), alt: "Allo Beirut — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/allo-beirut/2.webp"), alt: "Allo Beirut — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/allo-beirut/3.webp"), alt: "Allo Beirut — photo 3", shape: "portrait" },
          { src: asset("/images/portfolio/allo-beirut/4.webp"), alt: "Allo Beirut — photo 4", shape: "portrait" },
        ],
      },
      {
        title: "Chipotle",
        location: [
          "The Beach, Jumeirah Beach Residence (JBR), Dubai, UAE",
          "Dubai Hills Mall, Dubai, UAE",
          "Yas Mall, Abu Dhabi, UAE",
          "Villaggio Mall, Doha, Qatar",
          "City Walk, Dubai, UAE",
          "Marsa Al Seef, Dubai, UAE",
          "Bawabat Al Sharq Mall, Abu Dhabi, UAE",
          "My City Centre MBZ, Mohammed Bin Zayed City, Abu Dhabi, UAE",
          "Medina Centrale, The Pearl, Doha, Qatar",
        ],
        outsideLocation: "The Beach, Jumeirah Beach Residence (JBR), Dubai, UAE",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "With a growing network of restaurants across the UAE and Qatar, Chipotle required dependable ventilation solutions to support its open-kitchen, fast-casual dining concept. Avante provided custom-engineered kitchen canopies for multiple locations, delivering efficient capture of heat, smoke, and grease generated during continuous food preparation. The systems are designed to optimize airflow, improve kitchen conditions, and ensure reliable performance in high-demand commercial cooking environments.",
        image: { src: asset("/images/portfolio/chipotle/cover.webp"), alt: "Chipotle" },
        heroImage: { src: asset("/images/portfolio/chipotle/hero.webp"), alt: "Chipotle" },
        gallery: [
          { src: asset("/images/portfolio/chipotle/1.webp"), alt: "Chipotle — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/chipotle/2.webp"), alt: "Chipotle — photo 2", shape: "square" },
        ],
      },
      {
        title: "Raising Cane's",
        location: [
          "The Beach, Jumeirah Beach Residence (JBR), Dubai, UAE",
          "Al Barsha, Dubai, UAE",
          "Dubai Sports City, Dubai, UAE",
          "Al Meera, Ain Khaled, Doha, Qatar",
          "Doha Festival City, Doha, Qatar",
          "ENOC 1630, Mirdif, Dubai, UAE",
          "City Walk, Dubai, UAE",
          "City Centre Doha, Doha, Qatar",
          "Bawabat Al Sharq Mall, Abu Dhabi, UAE",
          "Yas Mall, Abu Dhabi, UAE",
          "ADNOC 755, Abu Dhabi, UAE",
          "Medina Centrale, The Pearl, Doha, Qatar",
          "Al Majaz Waterfront, Sharjah, UAE",
          "Villaggio Mall, Doha, Qatar",
          "Landmark Mall, Doha, Qatar",
        ],
        outsideLocation: "The Beach, Jumeirah Beach Residence (JBR), Dubai, UAE",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "As Raising Cane's expanded across the UAE and Qatar, Avante partnered with the brand to deliver custom kitchen canopy systems for a wide range of restaurant locations. Developed to meet the demands of fast-paced commercial kitchens, the ventilation solutions provide efficient extraction of heat, grease, and cooking fumes, helping maintain consistent airflow and a comfortable working environment. Built for reliability and long-term performance, the systems support smooth kitchen operations while meeting the rigorous standards of modern quick-service restaurants.",
        image: { src: asset("/images/portfolio/raising-cane-s/cover.webp"), alt: "Raising Cane's" },
        heroImage: { src: asset("/images/portfolio/raising-cane-s/hero.webp"), alt: "Raising Cane's", position: "center 15%" },
        gallery: [
          { src: asset("/images/portfolio/raising-cane-s/1.webp"), alt: "Raising Cane's — photo 1", shape: "portrait" },
        ],
      },
      {
        title: "SALT",
        location: [
          "Marsana, Abu Dhabi, UAE",
          "Al Barsha, Dubai, UAE",
          "The Galleria Al Maryah Island, Abu Dhabi, UAE",
          "Oasis Mall, Al Ain, UAE",
          "Dubai Festival City Mall, Dubai, UAE",
        ],
        outsideLocation: "Marsana, Abu Dhabi, UAE",
        category: "QSR",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Known for its contemporary dining concept and dynamic restaurant environments, SALT partnered with Avante to implement integrated kitchen ventilation solutions across multiple locations in the UAE. The project included custom kitchen canopies and ecology units designed to efficiently manage cooking emissions, grease, and odors while enhancing indoor air quality. Engineered for performance and sustainability, the systems help create an efficient back-of-house environment that supports the brand's high operational standards and seamless customer experience.",
        image: { src: asset("/images/portfolio/salt/cover.webp"), alt: "SALT" },
        heroImage: { src: asset("/images/portfolio/salt/hero.webp"), alt: "SALT" },
        gallery: [
          { src: asset("/images/portfolio/salt/1.webp"), alt: "SALT — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/salt/2.webp"), alt: "SALT — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/salt/3.webp"), alt: "SALT — photo 3", shape: "portrait" },
          { src: asset("/images/portfolio/salt/4.webp"), alt: "SALT — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Taqado Café",
        location: ["Mall of the Emirates, Dubai, UAE"],
        outsideLocation: "Mall of the Emirates, Dubai, UAE",
        category: "QSR",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "At Taqado Café in Mall of the Emirates, Dubai, Avante supplied a complete kitchen ventilation solution comprising custom kitchen canopies and ecology units. Designed to support the restaurant's busy food preparation activities, the system effectively captures grease, smoke, and cooking odors while improving overall air quality. The integrated solution delivers efficient extraction and advanced filtration, contributing to a well-maintained kitchen environment and dependable day-to-day operation.",
        image: { src: asset("/images/portfolio/taqado-caf/cover.webp"), alt: "Taqado Café" },
        heroImage: { src: asset("/images/portfolio/taqado-caf/hero.webp"), alt: "Taqado Café" },
        gallery: [
          { src: asset("/images/portfolio/taqado-caf/1.webp"), alt: "Taqado Café — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/taqado-caf/2.webp"), alt: "Taqado Café — photo 2", shape: "landscape" },
        ],
      },
      {
        title: "Dave's Hot Chicken",
        location: ["Yas Mall, Abu Dhabi, UAE"],
        outsideLocation: "Yas Mall, Abu Dhabi, UAE",
        category: "QSR",
        scope: "Ecology Units",
        description:
          "For Dave's Hot Chicken at Yas Mall in Abu Dhabi, Avante provided a high-performance ecology unit designed to enhance the restaurant's commercial kitchen ventilation system. The solution efficiently filters grease, smoke, and cooking-related emissions before air discharge, helping reduce environmental impact while supporting compliance with local air quality requirements. Engineered for reliable operation, the ecology unit enables effective air treatment without compromising kitchen productivity.",
        image: { src: asset("/images/portfolio/dave-s-hot-chicken/cover.webp"), alt: "Dave's Hot Chicken" },
        heroImage: { src: asset("/images/portfolio/dave-s-hot-chicken/hero.webp"), alt: "Dave's Hot Chicken", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/dave-s-hot-chicken/1.webp"), alt: "Dave's Hot Chicken — photo 1", shape: "landscape" },
        ],
      },
      {
        title: "Hardee's",
        location: [
          "ENOC 1117, Al Qarayen, Sharjah, UAE",
          "ENOC 1635, Al Khawaneej, Dubai, UAE",
        ],
        outsideLocation: "ENOC 1117, Al Qarayen, Sharjah, UAE",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "For Hardee's locations at ENOC 1117 in Al Qarayen, Sharjah, and ENOC 1635 in Al Khawaneej, Dubai, Avante supplied custom Kitchen Canopy systems designed to meet the operational requirements of fast-food restaurant kitchens. Engineered for efficient extraction of heat, grease, smoke, and cooking vapors, the canopies help maintain a clean, comfortable, and well-ventilated kitchen environment. The solution supports reliable day-to-day operations while accommodating the high-volume demands of quick-service food preparation.",
        image: { src: asset("/images/portfolio/hardee-s/cover.webp"), alt: "Hardee's" },
        heroImage: { src: asset("/images/portfolio/hardee-s/hero.webp"), alt: "Hardee's", position: "center 30%" },
        gallery: [
          { src: asset("/images/portfolio/hardee-s/1.webp"), alt: "Hardee's — photo 1", shape: "portrait" },
        ],
      },
      {
        title: "Pizza Hut",
        location: ["Ashongman, Greater Accra, Ghana"],
        outsideLocation: "Ashongman, Greater Accra, Ghana",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "For Pizza Hut in Ashongman, Greater Accra, Ghana, Avante delivered a custom kitchen canopy solution engineered to meet the ventilation needs of a modern quick-service restaurant. Designed to provide efficient extraction directly at the cooking source, the canopy system helps control heat, smoke, and grease-laden vapors, creating a cleaner and more comfortable kitchen environment. The solution supports uninterrupted daily operations while delivering dependable performance in a high-demand food service setting.",
        image: { src: asset("/images/portfolio/pizza-hut/cover.webp"), alt: "Pizza Hut" },
        heroImage: { src: asset("/images/portfolio/pizza-hut/hero.webp"), alt: "Pizza Hut" },
        gallery: [
          { src: asset("/images/portfolio/pizza-hut/1.webp"), alt: "Pizza Hut — photo 1", shape: "square" },
          { src: asset("/images/portfolio/pizza-hut/2.webp"), alt: "Pizza Hut — photo 2", shape: "square" },
        ],
      },
      // Experiential
      {
        title: "SOCO at Magic Planet",
        location: ["Magic Planet, Mirdif City Centre (MCC), Dubai, UAE"],
        outsideLocation: "Magic Planet, Mirdif City Centre (MCC), Dubai, UAE",
        category: "Experiential",
        scope: "Kitchen Canopies",
        description:
          "Located within Magic Planet at Mirdif City Centre, Dubai, SOCO required a ventilation solution capable of supporting a vibrant, high-traffic dining environment. Avante supplied custom kitchen canopies engineered to provide efficient capture and extraction of cooking heat, grease, and airborne contaminants, ensuring optimal kitchen conditions throughout daily operations. Designed for reliability and seamless integration, the system supports efficient food service while meeting the performance standards of a modern entertainment and leisure destination.",
        image: { src: asset("/images/portfolio/soco-at-magic-planet/cover.webp"), alt: "SOCO at Magic Planet" },
        heroImage: { src: asset("/images/portfolio/soco-at-magic-planet/hero.webp"), alt: "SOCO at Magic Planet", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/soco-at-magic-planet/1.webp"), alt: "SOCO at Magic Planet — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/soco-at-magic-planet/2.webp"), alt: "SOCO at Magic Planet — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/soco-at-magic-planet/3.webp"), alt: "SOCO at Magic Planet — photo 3", shape: "square" },
        ],
      },
      {
        title: "Bright Bites Shop-in-Shop",
        location: ["Carrefour, Mall of the Emirates, Dubai, UAE"],
        outsideLocation: "Carrefour, Mall of the Emirates, Dubai, UAE",
        category: "Experiential",
        scope: "Kitchen Canopies & Ecology Unit",
        description:
          "For Bright Bites Shop-in-Shop at Carrefour, Mall of the Emirates, Dubai, Avante delivered an integrated kitchen ventilation solution comprising custom kitchen canopies and an ecology unit. Developed to suit the compact footprint of a retail food outlet, the system provides efficient extraction and advanced air treatment to control grease, smoke, and cooking odours. The solution supports clean, efficient operation while ensuring high ventilation performance within a busy supermarket environment.",
        image: { src: asset("/images/portfolio/bright-bites-shop-in-shop/cover.webp"), alt: "Bright Bites Shop-in-Shop" },
        heroImage: { src: asset("/images/portfolio/bright-bites-shop-in-shop/hero.webp"), alt: "Bright Bites Shop-in-Shop", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/bright-bites-shop-in-shop/1.webp"), alt: "Bright Bites Shop-in-Shop — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/bright-bites-shop-in-shop/2.webp"), alt: "Bright Bites Shop-in-Shop — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/bright-bites-shop-in-shop/3.webp"), alt: "Bright Bites Shop-in-Shop — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Riverland Bowling Center",
        location: ["Riverland Dubai, Dubai Parks and Resorts, Dubai, UAE"],
        outsideLocation: "Riverland Dubai, Dubai Parks and Resorts, Dubai, UAE",
        category: "Experiential",
        scope: "Ecology Units",
        description:
          "At the Riverland Bowling Center in Dubai Parks and Resorts, Avante supplied high-efficiency ecology units to support the facility's commercial food service operations. Designed to effectively filter grease, smoke, and cooking emissions before air discharge, the system enhances environmental performance while maintaining excellent indoor air quality. The solution provides reliable air treatment for a leisure and entertainment venue, supporting efficient operation and compliance with modern ventilation standards.",
        image: { src: asset("/images/portfolio/riverland-bowling-center/cover.webp"), alt: "Riverland Bowling Center" },
        heroImage: { src: asset("/images/portfolio/riverland-bowling-center/hero.webp"), alt: "Riverland Bowling Center", position: "center 32%" },
        gallery: [
          { src: asset("/images/portfolio/riverland-bowling-center/1.webp"), alt: "Riverland Bowling Center — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/riverland-bowling-center/2.webp"), alt: "Riverland Bowling Center — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/riverland-bowling-center/3.webp"), alt: "Riverland Bowling Center — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Al Ain Zoo",
        location: ["Al Ain, Abu Dhabi, UAE"],
        outsideLocation: "Al Ain, Abu Dhabi, UAE",
        category: "Experiential",
        scope: "Kitchen Canopies with Demand Control Kitchen Ventilation (DCKV) System",
        description:
          "For the Al Ain Zoo in Abu Dhabi, Avante delivered an intelligent kitchen ventilation solution featuring custom kitchen canopies integrated with a Demand Control Kitchen Ventilation (DCKV) system. Designed to respond dynamically to varying cooking loads, the system automatically optimizes exhaust and supply airflow to improve energy efficiency without compromising ventilation performance. This advanced solution enhances kitchen comfort, reduces energy consumption, and supports the sustainable operation of the zoo's food service facilities.",
        image: { src: asset("/images/portfolio/al-ain-zoo/cover.webp"), alt: "Al Ain Zoo" },
        heroImage: { src: asset("/images/portfolio/al-ain-zoo/hero.webp"), alt: "Al Ain Zoo" },
        gallery: [
          { src: asset("/images/portfolio/al-ain-zoo/1.webp"), alt: "Al Ain Zoo — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/al-ain-zoo/2.webp"), alt: "Al Ain Zoo — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/al-ain-zoo/3.webp"), alt: "Al Ain Zoo — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "TikTok Innovation Hub",
        location: ["Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Experiential",
        scope: "Kitchen Canopies",
        description:
          "At the TikTok Innovation Hub in Dubai, Avante supplied custom kitchen canopy systems to support the facility's modern staff dining and food preparation areas. Designed for efficient extraction of heat, grease, and cooking fumes, the solution helps maintain a clean, comfortable, and well-ventilated kitchen environment. Combining high-performance engineering with seamless integration, the canopy system complements the innovation hub's contemporary workspace while ensuring reliable day-to-day operation.",
        image: { src: asset("/images/portfolio/tiktok-innovation-hub/cover.webp"), alt: "TikTok Innovation Hub" },
        heroImage: { src: asset("/images/portfolio/tiktok-innovation-hub/hero.webp"), alt: "TikTok Innovation Hub", position: "center 40%" },
        gallery: [
          { src: asset("/images/portfolio/tiktok-innovation-hub/1.webp"), alt: "TikTok Innovation Hub — photo 1", shape: "landscape" },
        ],
      },
      {
        title: "Zayed National Museum",
        location: ["Saadiyat Island, Abu Dhabi, UAE"],
        outsideLocation: "Saadiyat Island, Abu Dhabi, UAE",
        category: "Experiential",
        scope: "Kitchen Canopies",
        description:
          "At Zayed National Museum on Saadiyat Island, Abu Dhabi, Avante provided custom kitchen canopy systems designed to support the site's hospitality and catering facilities. Engineered for efficient capture and extraction of heat, grease, and cooking vapours, the solution helps maintain a controlled and hygienic kitchen environment. Combining reliable ventilation performance with precise engineering, the system supports the operational needs of this landmark cultural destination.",
        image: { src: asset("/images/portfolio/zayed-national-museum/cover.webp"), alt: "Zayed National Museum" },
        heroImage: { src: asset("/images/portfolio/zayed-national-museum/hero.webp"), alt: "Zayed National Museum" },
        gallery: [
          { src: asset("/images/portfolio/zayed-national-museum/1.webp"), alt: "Zayed National Museum — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/zayed-national-museum/2.webp"), alt: "Zayed National Museum — photo 2", shape: "landscape" },
        ],
      },
      {
        title: "Topgolf",
        location: ["Yas Island, Abu Dhabi, UAE"],
        outsideLocation: "Yas Island, Abu Dhabi, UAE",
        category: "Experiential",
        scope: "Kitchen Canopies",
        description:
          "At Topgolf Yas Island in Abu Dhabi, Avante supplied custom kitchen canopy systems designed to support the venue's extensive food and beverage operations. Engineered to provide effective extraction of heat, grease, and cooking emissions, the solution helps maintain a comfortable and efficient kitchen environment throughout daily service. The canopy system delivers dependable ventilation performance, supporting smooth operations within a high-energy entertainment and hospitality setting.",
        image: { src: asset("/images/portfolio/topgolf/cover.webp"), alt: "Topgolf" },
        heroImage: { src: asset("/images/portfolio/topgolf/hero.webp"), alt: "Topgolf", position: "center 90%" },
        gallery: [
          { src: asset("/images/portfolio/topgolf/1.webp"), alt: "Topgolf — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/topgolf/2.webp"), alt: "Topgolf — photo 2", shape: "landscape" },
        ],
      },
      {
        title: "Google",
        location: ["Hyderabad, India"],
        outsideLocation: "Hyderabad, India",
        category: "Experiential",
        scope: "Kitchen Canopies",
        description:
          "For Google in Hyderabad, India, Avante supplied custom kitchen canopy systems designed to support the facility's workplace dining operations. Developed to meet the requirements of a modern commercial kitchen, the solution provides efficient extraction of heat, grease, and cooking emissions while maintaining a comfortable and hygienic food preparation environment. The system combines reliable ventilation performance with seamless integration, supporting the high standards expected within a global technology workplace.",
        image: { src: asset("/images/portfolio/google/cover.webp"), alt: "Google" },
        heroImage: { src: asset("/images/portfolio/google/hero.webp"), alt: "Google", position: "center 30%" },
        gallery: [
          { src: asset("/images/portfolio/google/1.webp"), alt: "Google — photo 1", shape: "landscape" },
        ],
      },
      {
        title: "Roxy Cinemas",
        location: ["Dubai Hills Mall, Dubai, UAE"],
        outsideLocation: "Dubai Hills Mall, Dubai, UAE",
        category: "Experiential",
        scope: "Ecology Units",
        description:
          "For Roxy Cinemas at Dubai Hills Mall, Dubai, Avante supplied advanced ecology units to support the venue's food and beverage operations. Designed to treat kitchen exhaust air before discharge, the system effectively reduces grease, smoke, and cooking odours while improving overall air quality. The solution provides efficient air purification and reliable performance, helping maintain a comfortable environment within this modern entertainment destination.",
        image: { src: asset("/images/portfolio/roxy-cinemas/cover.webp"), alt: "Roxy Cinemas" },
        heroImage: { src: asset("/images/portfolio/roxy-cinemas/hero.webp"), alt: "Roxy Cinemas" },
        gallery: [
          { src: asset("/images/portfolio/roxy-cinemas/1.webp"), alt: "Roxy Cinemas — photo 1", shape: "portrait" },
        ],
      },
      // Hotels & Resorts
      {
        title: "Arabian Court at One & Only Royal Mirage",
        location: ["Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "Set within the prestigious Arabian Court at One&Only Royal Mirage in Dubai, Avante delivered bespoke kitchen canopy systems designed to complement the operational demands of a luxury hospitality environment. Engineered for efficient extraction of heat, grease, and cooking fumes, the solution helps maintain exceptional indoor air quality while supporting seamless kitchen operations. Combining precision engineering with dependable performance, the canopy system aligns with the high standards expected of world-class hotel dining facilities.",
        image: { src: asset("/images/portfolio/arabian-court-at-one-only-royal-mirage/cover.webp"), alt: "Arabian Court at One & Only Royal Mirage" },
        heroImage: { src: asset("/images/portfolio/arabian-court-at-one-only-royal-mirage/hero.webp"), alt: "Arabian Court at One & Only Royal Mirage" },
        gallery: [
          { src: asset("/images/portfolio/arabian-court-at-one-only-royal-mirage/1.webp"), alt: "Arabian Court at One & Only Royal Mirage — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/arabian-court-at-one-only-royal-mirage/2.webp"), alt: "Arabian Court at One & Only Royal Mirage — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/arabian-court-at-one-only-royal-mirage/3.webp"), alt: "Arabian Court at One & Only Royal Mirage — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/arabian-court-at-one-only-royal-mirage/4.webp"), alt: "Arabian Court at One & Only Royal Mirage — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Four Seasons Resort",
        location: ["Jumeirah Beach Residence (JBR), Dubai, UAE"],
        outsideLocation: "Jumeirah Beach Residence (JBR), Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Four Seasons Resort Dubai at Jumeirah Beach, Avante supplied custom kitchen canopy solutions to support the resort's premium culinary operations. Designed to provide effective extraction at the source, the systems efficiently manage heat, grease, and cooking emissions, contributing to a comfortable and hygienic kitchen environment. Built to meet the exacting standards of luxury hospitality, the solution delivers reliable performance while integrating seamlessly with the resort's back-of-house facilities.",
        image: { src: asset("/images/portfolio/four-seasons-resort-dubai-at-jumeirah-beach/cover.webp"), alt: "Four Seasons Resort Dubai at Jumeirah Beach" },
        heroImage: { src: asset("/images/portfolio/four-seasons-resort-dubai-at-jumeirah-beach/hero.webp"), alt: "Four Seasons Resort Dubai at Jumeirah Beach" },
        gallery: [
          { src: asset("/images/portfolio/four-seasons-resort-dubai-at-jumeirah-beach/1.webp"), alt: "Four Seasons Resort Dubai at Jumeirah Beach — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/four-seasons-resort-dubai-at-jumeirah-beach/2.webp"), alt: "Four Seasons Resort Dubai at Jumeirah Beach — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/four-seasons-resort-dubai-at-jumeirah-beach/3.webp"), alt: "Four Seasons Resort Dubai at Jumeirah Beach — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Grand Hyatt Lounge",
        location: ["Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "For the Grand Hyatt Lounge in Dubai, Avante delivered a bespoke kitchen canopy system designed to support the efficient operation of the lounge's food preparation facilities. Engineered to provide effective capture and extraction of cooking by-products, the solution helps maintain optimal air quality and a well-regulated kitchen environment. Combining functionality with dependable performance, the canopy system supports the high service standards expected within a premium hospitality destination.",
        image: { src: asset("/images/portfolio/grand-hyatt-lounge/cover.webp"), alt: "Grand Hyatt Lounge" },
        heroImage: { src: asset("/images/portfolio/grand-hyatt-lounge/hero.webp"), alt: "Grand Hyatt Lounge", position: "center 15%" },
        gallery: [
          { src: asset("/images/portfolio/grand-hyatt-lounge/1.webp"), alt: "Grand Hyatt Lounge — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/grand-hyatt-lounge/2.webp"), alt: "Grand Hyatt Lounge — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/grand-hyatt-lounge/3.webp"), alt: "Grand Hyatt Lounge — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/grand-hyatt-lounge/4.webp"), alt: "Grand Hyatt Lounge — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Hilton",
        slug: "hilton-garden-inn",
        location: ["Saudi Arabia"],
        outsideLocation: "Saudi Arabia",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Hilton Garden Inn in Saudi Arabia, Avante provided custom kitchen canopy systems designed to meet the ventilation requirements of a modern hotel food service operation. The solution ensures efficient removal of heat, grease, and cooking fumes, helping to maintain a clean, safe, and productive kitchen environment. Engineered for long-term reliability, the canopy system supports the hotel's commitment to delivering consistent hospitality and dining experiences.",
        image: { src: asset("/images/portfolio/hilton-garden-inn/cover.webp"), alt: "Hilton Garden Inn" },
        heroImage: { src: asset("/images/portfolio/hilton-garden-inn/hero.webp"), alt: "Hilton Garden Inn", position: "top" },
        gallery: [
          { src: asset("/images/portfolio/hilton-garden-inn/1.webp"), alt: "Hilton Garden Inn — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/hilton-garden-inn/2.webp"), alt: "Hilton Garden Inn — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/hilton-garden-inn/3.webp"), alt: "Hilton Garden Inn — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "The Chedi Hegra",
        location: ["AlUla, Saudi Arabia"],
        outsideLocation: "AlUla, Saudi Arabia",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "Located in the historic landscape of AlUla, The Chedi Hegra reflects a unique blend of heritage and contemporary luxury. For this distinguished hospitality destination, Avante supplied custom kitchen canopy systems engineered to provide efficient extraction of heat, grease, and cooking vapours while supporting the smooth operation of the hotel's culinary facilities. The solution delivers dependable ventilation performance, complementing the project's exceptional standards of design, comfort, and guest experience.",
        image: { src: asset("/images/portfolio/the-chedi-hegra/cover.webp"), alt: "The Chedi Hegra" },
        heroImage: { src: asset("/images/portfolio/the-chedi-hegra/hero.webp"), alt: "The Chedi Hegra" },
        gallery: [
          { src: asset("/images/portfolio/the-chedi-hegra/1.webp"), alt: "The Chedi Hegra — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/the-chedi-hegra/2.webp"), alt: "The Chedi Hegra — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/the-chedi-hegra/3.webp"), alt: "The Chedi Hegra — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Hilton",
        slug: "hilton-kuwait",
        location: ["Kuwait"],
        outsideLocation: "Kuwait",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "For Hilton Kuwait, Avante delivered custom kitchen canopy systems designed to support the demanding requirements of the hotel's commercial kitchen operations. The ventilation solution provides effective extraction of heat, grease, and cooking fumes, helping to maintain a hygienic, well-ventilated workspace for culinary staff. Engineered for durability and operational efficiency, the system contributes to reliable day-to-day performance while meeting the expectations of an international hospitality brand.",
        image: { src: asset("/images/portfolio/hilton-kuwait/cover.webp"), alt: "Hilton Kuwait" },
        heroImage: { src: asset("/images/portfolio/hilton-kuwait/hero.webp"), alt: "Hilton Kuwait" },
        gallery: [
          { src: asset("/images/portfolio/hilton-kuwait/1.webp"), alt: "Hilton Kuwait — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/hilton-kuwait/2.webp"), alt: "Hilton Kuwait — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/hilton-kuwait/3.webp"), alt: "Hilton Kuwait — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Hyatt Palace",
        location: ["AlUla, Saudi Arabia"],
        outsideLocation: "AlUla, Saudi Arabia",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies with Demand Control Kitchen Ventilation (DCKV) System",
        description:
          "For Hyatt Place AlUla, Avante provided an advanced kitchen ventilation solution comprising custom kitchen canopies integrated with a Demand Control Kitchen Ventilation (DCKV) system. Designed to automatically adjust airflow based on real-time cooking activity, the system enhances energy efficiency while maintaining effective capture of heat, smoke, and grease. This intelligent ventilation solution delivers optimal kitchen performance, reduces operating costs, and supports the hotel's commitment to sustainable and efficient building operations.",
        image: { src: asset("/images/portfolio/hyatt-palace-alula/cover.webp"), alt: "Hyatt Palace AlUla" },
        heroImage: { src: asset("/images/portfolio/hyatt-palace-alula/hero.webp"), alt: "Hyatt Palace AlUla", position: "center 15%" },
        gallery: [
          { src: asset("/images/portfolio/hyatt-palace-alula/1.webp"), alt: "Hyatt Palace AlUla — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/hyatt-palace-alula/2.webp"), alt: "Hyatt Palace AlUla — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/hyatt-palace-alula/3.webp"), alt: "Hyatt Palace AlUla — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Hyatt Regency",
        location: ["Mumbai, India"],
        outsideLocation: "Mumbai, India",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Hyatt Regency Mumbai, Avante supplied custom kitchen canopy systems engineered to support the hotel's dynamic food and beverage operations. Designed for efficient capture and extraction of heat, grease, and cooking emissions, the solution helps maintain a clean, comfortable, and well-ventilated kitchen environment. Delivering dependable performance and long-term reliability, the canopy system supports the operational excellence expected of a leading international hospitality destination.",
        image: { src: asset("/images/portfolio/hyatt-regency-mumbai/cover.webp"), alt: "Hyatt Regency Mumbai" },
        heroImage: { src: asset("/images/portfolio/hyatt-regency-mumbai/hero.webp"), alt: "Hyatt Regency Mumbai" },
        gallery: [
          { src: asset("/images/portfolio/hyatt-regency-mumbai/1.webp"), alt: "Hyatt Regency Mumbai — photo 1", shape: "portrait" },
          { src: asset("/images/portfolio/hyatt-regency-mumbai/2.webp"), alt: "Hyatt Regency Mumbai — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/hyatt-regency-mumbai/3.webp"), alt: "Hyatt Regency Mumbai — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/hyatt-regency-mumbai/4.webp"), alt: "Hyatt Regency Mumbai — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Ibis",
        location: ["Dubai World Trade Centre, Dubai, UAE"],
        outsideLocation: "Dubai World Trade Centre, Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "Serving one of Dubai's busiest business and exhibition districts, ibis World Trade Centre required a dependable ventilation solution for its commercial kitchen facilities. Avante supplied custom kitchen canopies designed to efficiently extract heat, smoke, and grease at the source, promoting a safe and hygienic food preparation environment. Built for continuous operation, the system provides reliable performance while supporting the hotel's daily hospitality and catering requirements.",
        image: { src: asset("/images/portfolio/ibis-world-trade-centre/cover.webp"), alt: "ibis World Trade Centre" },
        heroImage: { src: asset("/images/portfolio/ibis-world-trade-centre/hero.webp"), alt: "ibis World Trade Centre", position: "center 15%" },
        gallery: [
          { src: asset("/images/portfolio/ibis-world-trade-centre/1.webp"), alt: "ibis World Trade Centre — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/ibis-world-trade-centre/2.webp"), alt: "ibis World Trade Centre — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/ibis-world-trade-centre/3.webp"), alt: "ibis World Trade Centre — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/ibis-world-trade-centre/4.webp"), alt: "ibis World Trade Centre — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Jumeirah Mina Al Salam",
        location: ["Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Jumeirah Mina Al Salam in Dubai, Avante delivered bespoke kitchen canopy systems tailored to the operational needs of a luxury resort renowned for its exceptional dining experiences. Designed to provide efficient capture and extraction of heat, grease, and cooking vapours, the solution enhances kitchen safety, air quality, and overall operational efficiency. Combining robust engineering with seamless integration, the system supports the resort's commitment to excellence across its culinary facilities.",
        image: { src: asset("/images/portfolio/jumeirah-mina-al-salam/cover.webp"), alt: "Jumeirah Mina Al Salam" },
        heroImage: { src: asset("/images/portfolio/jumeirah-mina-al-salam/hero.webp"), alt: "Jumeirah Mina Al Salam" },
        gallery: [
          { src: asset("/images/portfolio/jumeirah-mina-al-salam/1.webp"), alt: "Jumeirah Mina Al Salam — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/jumeirah-mina-al-salam/2.webp"), alt: "Jumeirah Mina Al Salam — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/jumeirah-mina-al-salam/3.webp"), alt: "Jumeirah Mina Al Salam — photo 3", shape: "landscape" },
        ],
      },
      {
        title: "Le Méridien",
        location: ["Fujairah, UAE"],
        outsideLocation: "Fujairah, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "For Le Méridien Fujairah, Avante provided custom kitchen canopy systems engineered to support the hotel's diverse food and beverage operations. Designed for efficient removal of cooking heat, smoke, and grease-laden vapours, the ventilation solution helps maintain a clean and well-balanced kitchen environment. Delivering reliable performance and long-term durability, the system contributes to the smooth operation of the hotel's culinary facilities while meeting the standards of an internationally recognised hospitality brand.",
        image: { src: asset("/images/portfolio/le-m-ridien/cover.webp"), alt: "Le Méridien" },
        heroImage: { src: asset("/images/portfolio/le-m-ridien/hero.webp"), alt: "Le Méridien" },
        gallery: [
          { src: asset("/images/portfolio/le-m-ridien/1.webp"), alt: "Le Méridien — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/le-m-ridien/2.webp"), alt: "Le Méridien — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/le-m-ridien/3.webp"), alt: "Le Méridien — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/le-m-ridien/4.webp"), alt: "Le Méridien — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Novotel",
        location: ["Riyadh, Saudi Arabia"],
        outsideLocation: "Riyadh, Saudi Arabia",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Novotel Riyadh, Avante supplied custom kitchen canopy systems to support the hotel's commercial kitchen operations with reliable and efficient ventilation. Designed to effectively remove heat, smoke, and grease generated during food preparation, the solution helps maintain a comfortable and hygienic working environment for kitchen staff. Built to withstand the demands of continuous hospitality operations, the system delivers dependable performance while supporting the hotel's commitment to quality service and operational efficiency.",
        image: { src: asset("/images/portfolio/novotel/cover.webp"), alt: "Novotel" },
        heroImage: { src: asset("/images/portfolio/novotel/hero.webp"), alt: "Novotel" },
        gallery: [
          { src: asset("/images/portfolio/novotel/1.webp"), alt: "Novotel — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/novotel/2.webp"), alt: "Novotel — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/novotel/3.webp"), alt: "Novotel — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/novotel/4.webp"), alt: "Novotel — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Hudayriyat Sports Hotel",
        location: ["Abu Dhabi, UAE"],
        outsideLocation: "Abu Dhabi, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies with Demand Control Kitchen Ventilation (DCKV) System",
        description:
          "Designed to serve a modern sports and wellness destination, Hudayriyat Sports Hotel in Abu Dhabi required an intelligent ventilation solution for its commercial kitchen facilities. Avante supplied custom kitchen canopies integrated with a Demand Control Kitchen Ventilation (DCKV) system, enabling airflow to automatically adjust according to cooking activity. This energy-efficient solution optimizes ventilation performance, reduces energy consumption, and maintains a comfortable, well-regulated kitchen environment while supporting the hotel's sustainability and operational objectives.",
        image: { src: asset("/images/portfolio/hudayriyat-sports-hotel/cover.webp"), alt: "Hudayriyat Sports Hotel" },
        heroImage: { src: asset("/images/portfolio/hudayriyat-sports-hotel/hero.webp"), alt: "Hudayriyat Sports Hotel" },
        gallery: [
          { src: asset("/images/portfolio/hudayriyat-sports-hotel/1.webp"), alt: "Hudayriyat Sports Hotel — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/hudayriyat-sports-hotel/2.webp"), alt: "Hudayriyat Sports Hotel — photo 2", shape: "landscape" },
        ],
      },
      {
        title: "Ciel Tower (IHG)",
        location: ["Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "For Ciel Tower (IHG) in Dubai, Avante delivered bespoke kitchen canopy systems engineered to support the extensive culinary operations of one of the city's landmark hospitality developments. Designed for high-performance extraction, the solution efficiently removes heat, grease, and cooking emissions, contributing to a safe, efficient, and well-ventilated kitchen environment. Combining robust engineering with reliable day-to-day operation, the system meets the demanding requirements of a world-class hotel destination.",
        image: { src: asset("/images/portfolio/ciel-tower-ihg/cover.webp"), alt: "Ciel Tower (IHG)" },
        heroImage: { src: asset("/images/portfolio/ciel-tower-ihg/hero.webp"), alt: "Ciel Tower (IHG)" },
        gallery: [
          { src: asset("/images/portfolio/ciel-tower-ihg/1.webp"), alt: "Ciel Tower (IHG) — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/ciel-tower-ihg/2.webp"), alt: "Ciel Tower (IHG) — photo 2", shape: "landscape" },
          { src: asset("/images/portfolio/ciel-tower-ihg/3.webp"), alt: "Ciel Tower (IHG) — photo 3", shape: "landscape" },
          { src: asset("/images/portfolio/ciel-tower-ihg/4.webp"), alt: "Ciel Tower (IHG) — photo 4", shape: "landscape" },
        ],
      },
      {
        title: "Mandarin Oriental Hotel, Wasl Tower",
        location: ["Sheikh Zayed Road, Dubai, UAE"],
        outsideLocation: "Sheikh Zayed Road, Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Ecology Units",
        description:
          "For the Mandarin Oriental Hotel, Wasl Tower on Sheikh Zayed Road, Dubai, Avante supplied high-performance ecology units designed to enhance the hotel's commercial kitchen ventilation system. Engineered to efficiently treat grease, smoke, and cooking-related emissions before air discharge, the solution supports improved environmental performance and compliance with stringent air quality requirements. Delivering advanced filtration and dependable operation, the ecology units contribute to a sustainable and efficient back-of-house environment befitting a world-class luxury hospitality destination.",
        image: { src: asset("/images/portfolio/mandarin-oriental-hotel-wasl-tower/cover.webp"), alt: "Mandarin Oriental Hotel, Wasl Tower" },
        heroImage: { src: asset("/images/portfolio/mandarin-oriental-hotel-wasl-tower/hero.webp"), alt: "Mandarin Oriental Hotel, Wasl Tower" },
        gallery: [
          { src: asset("/images/portfolio/mandarin-oriental-hotel-wasl-tower/1.webp"), alt: "Mandarin Oriental Hotel, Wasl Tower — photo 1", shape: "landscape" },
          { src: asset("/images/portfolio/mandarin-oriental-hotel-wasl-tower/2.webp"), alt: "Mandarin Oriental Hotel, Wasl Tower — photo 2", shape: "portrait" },
          { src: asset("/images/portfolio/mandarin-oriental-hotel-wasl-tower/3.webp"), alt: "Mandarin Oriental Hotel, Wasl Tower — photo 3", shape: "landscape" },
        ],
      },
    ],
  },
  stats: {
    items: [
      { value: "250+", label: "Projects Completed" },
      { value: "20+", label: "Years Experience" },
      { value: "10+", label: "Countries Served" },
      { value: "100%", label: "Quality Assurance" },
    ],
  },
};

/** A single portfolio project — one entry from `portfolio.gallery.projects`. */
export type PortfolioProject = (typeof portfolio.gallery.projects)[number];

/**
 * URL-safe slug from a title, e.g. "Bateel Café" → "bateel-cafe", "SĀN Beach" → "san-beach".
 * Accents are stripped first (NFD splits "é" into "e" + a combining mark); without that,
 * every accented letter became a dash ("s-n-beach").
 */
export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * A project's URL slug, also its React key in the gallery. Defaults to the title's
 * slug; a project whose title repeats another's (both Hiltons are titled "Hilton")
 * sets an explicit `slug` instead.
 */
export function projectSlug(project: PortfolioProject): string {
  return project.slug ?? slugify(project.title);
}

/**
 * The box a gallery photo is shown in, chosen from the photo's own width : height
 * (landscape 4:3, square 1:1, portrait 3:4, tall 2:3) so it is barely cropped.
 */
export const GALLERY_SHAPES = ["landscape", "square", "portrait", "tall"] as const;
export type GalleryShape = (typeof GALLERY_SHAPES)[number];

// Two projects sharing a slug made one detail page unreachable and left a card
// stuck across filter changes (duplicate React key). Fail loudly instead.
// The data is untyped, so a mistyped `shape` would otherwise render an unsized box.
{
  const seen = new Set<string>();
  for (const p of portfolio.gallery.projects) {
    for (const g of p.gallery) {
      if (!GALLERY_SHAPES.includes(g.shape as GalleryShape)) {
        throw new Error(`Portfolio photo ${g.src} has unknown shape "${g.shape}".`);
      }
    }
    const slug = projectSlug(p);
    if (seen.has(slug)) {
      throw new Error(`Two portfolio projects share the slug "${slug}" — give one an explicit \`slug\`.`);
    }
    seen.add(slug);
  }
}

/** Resolve a project from its URL slug. Returns null for unknown slugs so the route can 404. */
export function findPortfolioProject(slug: string): PortfolioProject | null {
  return portfolio.gallery.projects.find((p) => projectSlug(p) === slug) ?? null;
}

/** Every project slug, for `generateStaticParams`. */
export function portfolioProjectParams(): { project: string }[] {
  return portfolio.gallery.projects.map((p) => ({ project: projectSlug(p) }));
}
