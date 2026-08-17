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
      { label: "Cafes" },
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
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Alusia" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Alusia — interior" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Alusia — dining area" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Alusia — seating" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Alusia — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Birds Sky View" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Birds Sky View — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Birds Sky View — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Birds Sky View — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Birds Sky View — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Blue Haven" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Blue Haven — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Blue Haven — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Blue Haven — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Blue Haven — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Fenix" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Fenix — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Fenix — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Fenix — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Fenix — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Lady Bird, 25 Jump Street" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Lady Bird, 25 Jump Street — interior" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Lady Bird, 25 Jump Street — dining area" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Lady Bird, 25 Jump Street — seating" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Lady Bird, 25 Jump Street — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "The Cherry House" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "The Cherry House — interior" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "The Cherry House — dining area" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "The Cherry House — seating" },
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "The Cherry House — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Yubi by Chef Reif Othman, 25 Jump Street" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Yubi by Chef Reif Othman, 25 Jump Street — interior" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Yubi by Chef Reif Othman, 25 Jump Street — dining area" },
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Yubi by Chef Reif Othman, 25 Jump Street — seating" },
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Yubi by Chef Reif Othman, 25 Jump Street — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Din Tai Fung" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Din Tai Fung — interior" },
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Din Tai Fung — dining area" },
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Din Tai Fung — seating" },
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "Din Tai Fung — ambiance" },
        ],
      },
      {
        title: "Al Beiruti",
        location: ["DIFC, Dubai Festival City", "Nakheel Mall, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Restaurants",
        subcategory: "Modern",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Avante has provided kitchen canopies and Ecology Units for several Al Beiruti locations across Dubai, including DIFC, Dubai Festival City, and Nakheel Mall. Inspired by the rich culinary traditions of Beirut, Al Beiruti is renowned for its authentic Lebanese cuisine, vibrant atmosphere, and contemporary interpretation of Middle Eastern hospitality. The ventilation and air treatment solutions were tailored to accommodate the demands of high-volume food preparation, including grilling, baking, and traditional Lebanese cooking processes. Engineered for efficiency and reliability, the systems contribute to effective extraction and treatment of kitchen emissions while supporting the smooth operation of the restaurant's busy kitchens.",
        image: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Al Beiruti" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Al Beiruti — interior" },
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Al Beiruti — dining area" },
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "Al Beiruti — seating" },
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Al Beiruti — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Awani" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Awani — interior" },
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "Awani — dining area" },
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Awani — seating" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Awani — ambiance" },
        ],
      },

      // Restaurants — Premium
      {
        title: "MeatCo",
        location: ["MeatCo Kuwait Restaurant, Kuwait", "Meat Co SMJ, Dubai, UAE"],
        outsideLocation: "Multiple locations in Kuwait & UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Renowned for its premium cuts, flame-grilled specialties, and sophisticated dining experience, MeatCo has established itself as a leading steakhouse destination across the Middle East. With locations in Kuwait and Dubai's iconic Souk Madinat Jumeirah, the restaurant combines contemporary elegance with a passion for quality ingredients and expertly crafted cuisine. Given the intensity of steakhouse operations, where open-flame grilling and high-temperature cooking are central to the menu, kitchen canopies and Ecology Units were incorporated to accommodate the demands of daily service. The integrated solution provides effective extraction and air treatment, helping maintain optimal kitchen conditions while supporting the restaurant's commitment to delivering an exceptional dining experience.",
        image: { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "MeatCo" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "MeatCo — interior" },
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "MeatCo — dining area" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "MeatCo — seating" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "MeatCo — ambiance" },
        ],
      },
      {
        title: "Cipriani",
        location: ["Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "A symbol of timeless Italian elegance, Cipriani has earned a global reputation for refined hospitality, impeccable service, and authentic Venetian-inspired cuisine. At its Jumeirah location in Dubai, the brand offers a sophisticated waterfront dining experience where classic recipes, premium ingredients, and understated luxury come together in a distinctly Cipriani setting. Reflecting the standards of a world-renowned hospitality brand, custom kitchen canopies were incorporated as part of the restaurant's kitchen infrastructure to accommodate the demands of its culinary operations. Designed to provide reliable extraction and consistent performance, the system supports the seamless execution of daily service while maintaining the high levels of quality and efficiency expected of the Cipriani name.",
        image: { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Cipriani" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Cipriani — interior" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Cipriani — dining area" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Cipriani — seating" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Cipriani — ambiance" },
        ],
      },
      {
        title: "San Beach",
        location: ["Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "Set against the backdrop of Dubai's coastline, SAN Beach has established itself as one of the city's most sought-after beachfront destinations, combining Mediterranean-inspired dining, laid-back luxury, and breathtaking sea views. With its elegant design, vibrant atmosphere, and seamless blend of dining and leisure experiences, the venue offers guests a sophisticated escape by the water. Tailored to the demands of a high-energy beachfront hospitality concept, custom kitchen canopies were incorporated to accommodate the diverse culinary activities taking place throughout the venue. Delivering dependable extraction performance and efficient airflow management, the system contributes to smooth kitchen operations while supporting the elevated guest experience that defines SAN Beach.",
        image: { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "San Beach" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "San Beach — interior" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "San Beach — dining area" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "San Beach — seating" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "San Beach — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Loren" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Loren — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Loren — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Loren — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Loren — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Gloria Osteria, Big Mamma" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Gloria Osteria, Big Mamma — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Gloria Osteria, Big Mamma — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Gloria Osteria, Big Mamma — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Gloria Osteria, Big Mamma — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "Kaimana Beach" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Kaimana Beach — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Kaimana Beach — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Kaimana Beach — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Kaimana Beach — ambiance" },
        ],
      },
      {
        title: "Baoli Beach Club",
        location: ["Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Kitchen Canopies",
        description:
          "Originating from the French Riviera and renowned for its fusion of fine dining, entertainment, and vibrant nightlife, BAOLI has become an internationally recognized lifestyle destination. Its Dubai beach club brings together Mediterranean-inspired elegance, world-class cuisine, and a dynamic social atmosphere, creating an experience that transitions effortlessly from relaxed beachfront dining to energetic evening entertainment. Reflecting the venue's dual identity as both a premium dining destination and a lively social hotspot, custom kitchen canopies were incorporated to accommodate the demands of continuous culinary service throughout the day and night. Designed for dependable performance and operational efficiency, the system supports the seamless execution of BAOLI's hospitality experience while maintaining optimal conditions within the kitchen environment.",
        image: { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Baoli Beach Club" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Baoli Beach Club — interior" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Baoli Beach Club — dining area" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Baoli Beach Club — seating" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Baoli Beach Club — ambiance" },
        ],
      },
      {
        title: "Cullinan",
        location: ["Marsa al Arab Hotel, Jumeirah St, Jumeirah, Dubai, UAE"],
        outsideLocation: "Jumeirah, Dubai, UAE",
        category: "Restaurants",
        subcategory: "Premium",
        scope: "Ecology Units",
        description:
          "Overlooking the Arabian Gulf from the prestigious Jumeirah Marsa Al Arab, Cullinan offers a refined dining experience inspired by the world's largest rough diamond, reflecting a philosophy of rarity, craftsmanship, and timeless elegance. Combining premium ingredients, sophisticated interiors, and exceptional service, the restaurant has established itself as one of Dubai's most exclusive culinary destinations. In keeping with the standards of a luxury waterfront venue, advanced Ecology Units were integrated into the kitchen exhaust system to ensure effective treatment of cooking emissions before discharge. Engineered to manage grease, smoke, and odors with exceptional efficiency, the solution supports a cleaner and more environmentally responsible operation while aligning with the elevated hospitality experience that defines Cullinan.",
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Cullinan" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Cullinan — interior" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Cullinan — dining area" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Cullinan — seating" },
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Cullinan — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Berber" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Berber — interior" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Berber — dining area" },
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Berber — seating" },
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Berber — ambiance" },
        ],
      },

      // Cafes
      {
        title: "BOHOX",
        location: ["Downtown Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafes",
        scope: "Ecology Units",
        description:
          "BOHOX reimagines all-day dining through a blend of Mediterranean flavors, wellness-inspired cuisine, and contemporary bohemian design. Nestled in the heart of Downtown Dubai, the venue has become known for its lush interiors, vibrant atmosphere, and thoughtfully curated menu that celebrates fresh, wholesome ingredients. An advanced Ecology Unit forms an integral part of the restaurant's kitchen exhaust system, helping treat grease, smoke, and cooking odors before air is discharged. The solution enables the venue to maintain high environmental standards while preserving the comfortable and inviting atmosphere that has become synonymous with the BOHOX experience.",
        image: { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "BOHOX" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "BOHOX — interior" },
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "BOHOX — dining area" },
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "BOHOX — seating" },
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "BOHOX — ambiance" },
        ],
      },
      {
        title: "EL&N",
        location: ["Yas Bay Waterfront, Abu Dhabi, UAE"],
        outsideLocation: "Abu Dhabi, UAE",
        category: "Cafes",
        scope: "Kitchen Canopies",
        description:
          "Originally founded in London, EL&N has grown into a globally recognized lifestyle café brand celebrated for its signature floral interiors, vibrant pink aesthetic, and indulgent all-day dining experience. Its Yas Bay Waterfront location in Abu Dhabi continues this vision, offering guests a stylish destination where contemporary cuisine, specialty coffee, and elegant surroundings come together. Custom kitchen canopies were incorporated to complement the café's fast-paced kitchen operations, providing dependable ventilation performance. Carefully integrated into the back-of-house infrastructure, the system supports the efficient preparation of EL&N's diverse menu while maintaining the high standards expected of an internationally acclaimed hospitality brand.",
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "EL&N" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "EL&N — interior" },
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "EL&N — dining area" },
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "EL&N — seating" },
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "EL&N — ambiance" },
        ],
      },
      {
        title: "Armani Café",
        location: ["Dubai Mall, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafes",
        scope: "Ecology Units",
        description:
          "Overlooking the iconic Dubai Fountain from Dubai Mall, Armani/Caffè embodies the understated elegance and timeless sophistication synonymous with the Armani brand. Combining authentic Italian cuisine with contemporary design and impeccable hospitality, the café offers a refined dining experience where every detail reflects Giorgio Armani's signature philosophy of style and simplicity. Behind this premium dining destination, Ecology Units were integrated to enhance the treatment of kitchen exhaust emissions before discharge, while complementing the seamless, high-quality experience that defines Armani/Caffè.",
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Armani Café" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Armani Café — interior" },
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "Armani Café — dining area" },
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Armani Café — seating" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Armani Café — ambiance" },
        ],
      },
      {
        title: "Bateel Café",
        location: ["Reem Mall, Abu Dhabi", "Zaa'beel Palace St, Dubai"],
        outsideLocation: "Multiple locations in UAE",
        category: "Cafes",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Renowned for combining Middle Eastern heritage with contemporary dining, Bateel Café offers a refined culinary experience centered around gourmet cuisine, specialty coffee, and the brand's world-famous organic dates. Its locations at Reem Mall, Abu Dhabi, and One Za'abeel, Dubai, reflect the brand's commitment to elegant hospitality, premium ingredients, and thoughtfully designed dining spaces. Across both locations, the kitchen infrastructure was enhanced with Kitchen Canopies and Ecology Units, providing a solution suited to the brand's diverse culinary offerings. Working together as an integrated ventilation solution, the systems provide efficient extraction and effective treatment of kitchen exhaust emissions, supporting a clean, comfortable, and environmentally responsible kitchen environment while maintaining the premium standards associated with the Bateel brand.",
        image: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Bateel Café" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "Bateel Café — interior" },
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Bateel Café — dining area" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Bateel Café — seating" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Bateel Café — ambiance" },
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
        category: "Cafes",
        scope: "Kitchen Canopies & Ecology Units",
        description:
          "Founded in France in 1889, PAUL has grown into an internationally celebrated bakery and café brand, renowned for its artisanal breads, French pastries, and classic café cuisine. With multiple locations across the UAE, including Dubai, Abu Dhabi, and Al Ain, the brand continues to deliver an authentic Parisian dining experience defined by timeless elegance, traditional baking, and exceptional hospitality. An integrated kitchen ventilation solution featuring Kitchen Canopies and Ecology Units was implemented to accommodate the varied culinary activities taking place throughout each café. From freshly baked breads and viennoiseries to hot kitchen preparations, the integrated solution was tailored to meet the diverse demands of PAUL's culinary operations, ensuring reliable ventilation and effective exhaust air treatment throughout every stage of service.",
        image: { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Paul Café" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Paul Café — interior" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Paul Café — dining area" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Paul Café — seating" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Paul Café — ambiance" },
        ],
      },
      {
        title: "Brunch and Cakes",
        location: ["Marassi Galleria, Bahrain", "The Montgomerie, Emirates Hills, Dubai, UAE"],
        outsideLocation: "Multiple locations in Bahrain & UAE",
        category: "Cafes",
        scope: "Kitchen Canopies",
        description:
          "Originating in Barcelona, Brunch & Cake has become an internationally recognized café brand, celebrated for its wholesome cuisine, beautifully presented dishes, and inviting interiors that embody a relaxed Mediterranean lifestyle. Its locations at Marassi Galleria, Bahrain, and The Montgomerie, Dubai, continue the brand's philosophy of creating memorable all-day dining experiences through fresh ingredients, creative menus, and warm hospitality. Kitchen Canopies were incorporated across both locations to accommodate the lively pace of an all-day café where breakfast, brunch, baking, and à la carte dining operate seamlessly throughout the day. Tailored to the brand's diverse culinary offerings, the ventilation solution integrates effortlessly into the kitchen environment, supporting the smooth preparation of every dish while complementing the welcoming atmosphere.",
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Brunch and Cakes" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Brunch and Cakes — interior" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Brunch and Cakes — dining area" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Brunch and Cakes — seating" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Brunch and Cakes — ambiance" },
        ],
      },
      {
        title: "Angel Cakes",
        location: ["Dubai Creek Harbour, Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafes",
        scope: "Ecology Unit",
        description:
          "Founded with the vision of making indulgence healthier, Angel Cakes has redefined the café experience through a menu of refined desserts, artisan pastries, and specialty coffee, all crafted without refined sugar, gluten, or artificial ingredients. At its Dubai Creek Harbour location, the café combines contemporary design with mindful dining, offering guests a bright and elegant space that celebrates wellness without compromising on flavor. The kitchen exhaust system was equipped with an Ecology Unit to efficiently treat cooking and baking emissions, promoting cleaner and more environmentally responsible operation. Carefully selected to complement the café's sustainable philosophy, the solution promotes cleaner air quality and environmentally responsible operations while supporting the smooth day-to-day functioning of this modern bakery concept.",
        image: { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Angel Cakes" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Angel Cakes — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Angel Cakes — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Angel Cakes — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Angel Cakes — ambiance" },
        ],
      },
      {
        title: "Bake My Day",
        location: ["Downtown Dubai, UAE"],
        outsideLocation: "Dubai, UAE",
        category: "Cafes",
        scope: "Ecology Unit",
        description:
          "From handcrafted celebration cakes to artisan pastries and specialty coffee, Bake My Day has established itself as a contemporary bakery destination where creativity, quality, and craftsmanship come together. Located in Downtown Dubai, the bakery offers an inviting space dedicated to freshly prepared desserts and memorable culinary experiences. To accommodate the demands of continuous baking and dessert production, an Ecology Unit was integrated into the kitchen exhaust system. Designed to effectively treat kitchen emissions before discharge, the solution promotes cleaner and more sustainable operations while allowing the bakery to focus on delivering freshly crafted creations throughout the day.",
        image: { src: "https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&q=80", alt: "Bake My Day" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Bake My Day — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Bake My Day — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Bake My Day — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Bake My Day — ambiance" },
        ],
      },
      {
        title: "Saddle House",
        location: ["Al Qana, Abu Dhabi, UAE", "Al Jimi Mall, Al Ain, UAE"],
        outsideLocation: "Multiple locations in UAE",
        category: "Cafes",
        scope: "Ecology Units",
        description:
          "Born from Dubai's vibrant café culture, Saddle House has evolved from the iconic Saddle concept into a contemporary dining destination where refined comfort food, specialty coffee, and stylish interiors come together. Its locations at Al Qana, Abu Dhabi, and Al Jimi Mall, Al Ain, reflect the brand's signature blend of modern design, relaxed luxury, and memorable hospitality. To complement the dynamic kitchen operations across both venues, Ecology Units were incorporated into the exhaust air treatment system to effectively manage grease, smoke, and cooking odors before discharge. Carefully integrated into the kitchen infrastructure, the solution enhances air quality while supporting the seamless operation of a brand known for its elevated café and dining experience.",
        image: { src: "https://images.unsplash.com/photo-1535007813616-79dc02ba4021?w=800&q=80", alt: "Saddle House" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Saddle House — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Saddle House — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Saddle House — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Saddle House — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "JJ Chicken" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "JJ Chicken — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "JJ Chicken — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "JJ Chicken — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "JJ Chicken — ambiance" },
        ],
      },
      {
        title: "Time Out Market Bahrain",
        location: ["City Centre Bahrain, Manama, Bahrain"],
        outsideLocation: "City Centre Bahrain, Manama, Bahrain",
        category: "QSR",
        scope: "Kitchen Canopies",
        description:
          "Time Out Market Bahrain brings together a diverse collection of renowned food vendors under one roof, demanding efficient ventilation across multiple commercial kitchens. At its location in City Centre Bahrain, Manama, Avante provided high-performance kitchen canopies engineered to manage the continuous extraction of heat, smoke, and grease generated by a wide range of culinary operations. The solution contributes to a cleaner kitchen environment, improved operational reliability, and compliance with commercial kitchen ventilation standards.",
        image: { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Time Out Market Bahrain" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Time Out Market Bahrain — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Time Out Market Bahrain — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Time Out Market Bahrain — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Time Out Market Bahrain — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Shake Shack" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Shake Shack — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Shake Shack — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Shake Shack — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Shake Shack — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Nando's" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Nando's — interior" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Nando's — dining area" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Nando's — seating" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Nando's — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Allo Beirut" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Allo Beirut — interior" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Allo Beirut — dining area" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Allo Beirut — seating" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Allo Beirut — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Chipotle" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Chipotle — interior" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Chipotle — dining area" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Chipotle — seating" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Chipotle — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Raising Cane's" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Raising Cane's — interior" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Raising Cane's — dining area" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Raising Cane's — seating" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Raising Cane's — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "SALT" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "SALT — interior" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "SALT — dining area" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "SALT — seating" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "SALT — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Taqado Café" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Taqado Café — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Taqado Café — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Taqado Café — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Taqado Café — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Dave's Hot Chicken" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Dave's Hot Chicken — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Dave's Hot Chicken — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Dave's Hot Chicken — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Dave's Hot Chicken — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Hardee's" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Hardee's — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Hardee's — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Hardee's — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Hardee's — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Pizza Hut" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Pizza Hut — interior" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Pizza Hut — dining area" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Pizza Hut — seating" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Pizza Hut — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "SOCO at Magic Planet" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "SOCO at Magic Planet — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "SOCO at Magic Planet — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "SOCO at Magic Planet — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "SOCO at Magic Planet — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Bright Bites Shop-in-Shop" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Bright Bites Shop-in-Shop — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Bright Bites Shop-in-Shop — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Bright Bites Shop-in-Shop — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Bright Bites Shop-in-Shop — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Riverland Bowling Center" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Riverland Bowling Center — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Riverland Bowling Center — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Riverland Bowling Center — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Riverland Bowling Center — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Al Ain Zoo" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Al Ain Zoo — interior" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Al Ain Zoo — dining area" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Al Ain Zoo — seating" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Al Ain Zoo — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "TikTok Innovation Hub" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "TikTok Innovation Hub — interior" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "TikTok Innovation Hub — dining area" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "TikTok Innovation Hub — seating" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "TikTok Innovation Hub — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Zayed National Museum" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Zayed National Museum — interior" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Zayed National Museum — dining area" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Zayed National Museum — seating" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Zayed National Museum — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Topgolf" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Topgolf — interior" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Topgolf — dining area" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Topgolf — seating" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Topgolf — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Google" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Google — interior" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Google — dining area" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Google — seating" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Google — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Roxy Cinemas" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Roxy Cinemas — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Roxy Cinemas — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Roxy Cinemas — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Roxy Cinemas — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Arabian Court at One & Only Royal Mirage" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Arabian Court at One & Only Royal Mirage — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Arabian Court at One & Only Royal Mirage — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Arabian Court at One & Only Royal Mirage — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Arabian Court at One & Only Royal Mirage — ambiance" },
        ],
      },
      {
        title: "Four Seasons Resort Dubai at Jumeirah Beach",
        location: ["Jumeirah Beach Residence (JBR), Dubai, UAE"],
        outsideLocation: "Jumeirah Beach Residence (JBR), Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Four Seasons Resort Dubai at Jumeirah Beach, Avante supplied custom kitchen canopy solutions to support the resort's premium culinary operations. Designed to provide effective extraction at the source, the systems efficiently manage heat, grease, and cooking emissions, contributing to a comfortable and hygienic kitchen environment. Built to meet the exacting standards of luxury hospitality, the solution delivers reliable performance while integrating seamlessly with the resort's back-of-house facilities.",
        image: { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Four Seasons Resort Dubai at Jumeirah Beach" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Four Seasons Resort Dubai at Jumeirah Beach — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Four Seasons Resort Dubai at Jumeirah Beach — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Four Seasons Resort Dubai at Jumeirah Beach — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Four Seasons Resort Dubai at Jumeirah Beach — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Grand Hyatt Lounge" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Grand Hyatt Lounge — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Grand Hyatt Lounge — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Grand Hyatt Lounge — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Grand Hyatt Lounge — ambiance" },
        ],
      },
      {
        title: "Hilton Garden Inn",
        location: ["Saudi Arabia"],
        outsideLocation: "Saudi Arabia",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Hilton Garden Inn in Saudi Arabia, Avante provided custom kitchen canopy systems designed to meet the ventilation requirements of a modern hotel food service operation. The solution ensures efficient removal of heat, grease, and cooking fumes, helping to maintain a clean, safe, and productive kitchen environment. Engineered for long-term reliability, the canopy system supports the hotel's commitment to delivering consistent hospitality and dining experiences.",
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Hilton Garden Inn" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Hilton Garden Inn — interior" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Hilton Garden Inn — dining area" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Hilton Garden Inn — seating" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Hilton Garden Inn — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "The Chedi Hegra" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "The Chedi Hegra — interior" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "The Chedi Hegra — dining area" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "The Chedi Hegra — seating" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "The Chedi Hegra — ambiance" },
        ],
      },
      {
        title: "Hilton Kuwait",
        location: ["Kuwait"],
        outsideLocation: "Kuwait",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "For Hilton Kuwait, Avante delivered custom kitchen canopy systems designed to support the demanding requirements of the hotel's commercial kitchen operations. The ventilation solution provides effective extraction of heat, grease, and cooking fumes, helping to maintain a hygienic, well-ventilated workspace for culinary staff. Engineered for durability and operational efficiency, the system contributes to reliable day-to-day performance while meeting the expectations of an international hospitality brand.",
        image: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Hilton Kuwait" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Hilton Kuwait — interior" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Hilton Kuwait — dining area" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Hilton Kuwait — seating" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Hilton Kuwait — ambiance" },
        ],
      },
      {
        title: "Hyatt Palace AlUla",
        location: ["AlUla, Saudi Arabia"],
        outsideLocation: "AlUla, Saudi Arabia",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies with Demand Control Kitchen Ventilation (DCKV) System",
        description:
          "For Hyatt Place AlUla, Avante provided an advanced kitchen ventilation solution comprising custom kitchen canopies integrated with a Demand Control Kitchen Ventilation (DCKV) system. Designed to automatically adjust airflow based on real-time cooking activity, the system enhances energy efficiency while maintaining effective capture of heat, smoke, and grease. This intelligent ventilation solution delivers optimal kitchen performance, reduces operating costs, and supports the hotel's commitment to sustainable and efficient building operations.",
        image: { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Hyatt Palace AlUla" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Hyatt Palace AlUla — interior" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Hyatt Palace AlUla — dining area" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Hyatt Palace AlUla — seating" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Hyatt Palace AlUla — ambiance" },
        ],
      },
      {
        title: "Hyatt Regency Mumbai",
        location: ["Mumbai, India"],
        outsideLocation: "Mumbai, India",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "At Hyatt Regency Mumbai, Avante supplied custom kitchen canopy systems engineered to support the hotel's dynamic food and beverage operations. Designed for efficient capture and extraction of heat, grease, and cooking emissions, the solution helps maintain a clean, comfortable, and well-ventilated kitchen environment. Delivering dependable performance and long-term reliability, the canopy system supports the operational excellence expected of a leading international hospitality destination.",
        image: { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Hyatt Regency Mumbai" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Hyatt Regency Mumbai — interior" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Hyatt Regency Mumbai — dining area" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Hyatt Regency Mumbai — seating" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Hyatt Regency Mumbai — ambiance" },
        ],
      },
      {
        title: "ibis World Trade Centre",
        location: ["Dubai World Trade Centre, Dubai, UAE"],
        outsideLocation: "Dubai World Trade Centre, Dubai, UAE",
        category: "Hotels & Resorts",
        scope: "Kitchen Canopies",
        description:
          "Serving one of Dubai's busiest business and exhibition districts, ibis World Trade Centre required a dependable ventilation solution for its commercial kitchen facilities. Avante supplied custom kitchen canopies designed to efficiently extract heat, smoke, and grease at the source, promoting a safe and hygienic food preparation environment. Built for continuous operation, the system provides reliable performance while supporting the hotel's daily hospitality and catering requirements.",
        image: { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "ibis World Trade Centre" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "ibis World Trade Centre — interior" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "ibis World Trade Centre — dining area" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "ibis World Trade Centre — seating" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "ibis World Trade Centre — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Jumeirah Mina Al Salam" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Jumeirah Mina Al Salam — interior" },
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Jumeirah Mina Al Salam — dining area" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Jumeirah Mina Al Salam — seating" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Jumeirah Mina Al Salam — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Le Méridien" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Le Méridien — interior" },
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Le Méridien — dining area" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Le Méridien — seating" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Le Méridien — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&q=80", alt: "Novotel" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Novotel — interior" },
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Novotel — dining area" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Novotel — seating" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Novotel — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Hudayriyat Sports Hotel" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Hudayriyat Sports Hotel — interior" },
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Hudayriyat Sports Hotel — dining area" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Hudayriyat Sports Hotel — seating" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Hudayriyat Sports Hotel — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80", alt: "Ciel Tower (IHG)" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Ciel Tower (IHG) — interior" },
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Ciel Tower (IHG) — dining area" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Ciel Tower (IHG) — seating" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Ciel Tower (IHG) — ambiance" },
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
        image: { src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&q=80", alt: "Mandarin Oriental Hotel, Wasl Tower" },
        gallery: [
          { src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Mandarin Oriental Hotel, Wasl Tower — interior" },
          { src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Mandarin Oriental Hotel, Wasl Tower — dining area" },
          { src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80", alt: "Mandarin Oriental Hotel, Wasl Tower — seating" },
          { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Mandarin Oriental Hotel, Wasl Tower — ambiance" },
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

/** URL-safe slug from a title, e.g. "Bateel Café" → "bateel-caf". */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Resolve a project from its URL slug. Returns null for unknown slugs so the
 * route can 404. Titles are unique across the gallery, so a slug maps to at most
 * one project (first match wins on the off chance two titles ever collide).
 */
export function findPortfolioProject(slug: string): PortfolioProject | null {
  return portfolio.gallery.projects.find((p) => slugify(p.title) === slug) ?? null;
}

/** Every project slug, for `generateStaticParams`. */
export function portfolioProjectParams(): { project: string }[] {
  return portfolio.gallery.projects.map((p) => ({ project: slugify(p.title) }));
}
