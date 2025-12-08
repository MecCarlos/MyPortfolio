// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traductions
const resources = {
  fr: {
    translation: {
      // Navbar
      Home: "Accueil",
      About: "À propos",
      Resume: "Résumé",
      Services: "Services",
      Portfolio: "Portfolio",
      Contact: "Contact",

      // Home page
      webDeveloper: "développeur & designer web",
      cv: "CV",
      portfolio: "Portfolio",
      aboutMe: "À propos de moi",
      bioParagraph1:
        "Passionné par le développement web et le design, je crée des expériences digitales uniques qui allient esthétique et fonctionnalité. Mon approche combine créativité et expertise technique pour donner vie à vos projets.",
      bioParagraph2:
        "Avec une solide expérience dans les technologies modernes, je m'engage à fournir des solutions innovantes et performantes qui répondent parfaitement à vos besoins.",
      designerDeveloper: "Designer & Développeur web",

      // Resume Page
      Experience: "Expérience",
      Education: "Éducation",
      Training: "Formation",
      Skills: "Compétences",
      About: "À propos",
      me: "de moi",
      My: "Mes",
      AcademicPath: "Parcours Académique",
      TechnicalTraining: "Formations Techniques",

      // Experience Section
      experienceDescription:
        "Passionné par le développement web, j'ai acquis une solide expérience dans la création d'interfaces modernes et performantes. Mon approche combine rigueur technique et sens du design pour offrir des expériences utilisateur exceptionnelles.",
      oct2025Mar2026: "Octobre 2025 - Mars 2026",
      marJun2025: "Mars - Juin 2025",
      frontendIntern: "Stagiaire Développeur Frontend",
      internship1Description:
        "Développement d'applications web avec React.js, création de composants réutilisables, intégration d'API REST, optimisation des performances et participation aux revues de code.",
      internship2Description:
        "Initiation au développement frontend moderne, création d'interfaces responsives avec Bootstrap, apprentissage des bonnes pratiques de développement et collaboration avec une équipe agile.",

      // Education Section
      educationDescription:
        "Mon parcours éducatif allie formation technique et études supérieures en informatique, me permettant d'acquérir une double compétence en développement logiciel et systèmes informatiques.",
      licenseDegree: "Licence en Systèmes et Logiciels Informatiques",
      licenseDescription:
        "Spécialisation en développement web, bases de données, architecture logicielle et gestion de projet. Formation axée sur les technologies modernes et les méthodologies agiles.",
      dtiDegree: "Diplôme de Technicien en Informatique (DTI)",
      fmcSchool: "Lycée Technique FM Coulibaly",
      dtiDescription:
        "Formation technique en développement logiciel, maintenance informatique, réseaux et bases de données. Acquisition des fondamentaux de la programmation et des systèmes.",
      f3Training: "Formation en Électronique Industrielle (2nd F3)",
      polytechSchool: "École Polytechnique Joseph Monier",
      f3Description:
        "Apprentissage des systèmes automatisés, électrotechnique, régulation et contrôle industriel. Développement d'une approche méthodique pour la résolution de problèmes techniques.",
      bepcDegree: "Brevet d'Études du Premier Cycle (BEPC)",
      houeyihoSchool: "CEG Houeyiho",
      bepcDescription:
        "Formation générale avec initiation aux technologies de l'information et de la communication. Développement d'un intérêt précoce pour l'informatique et les nouvelles technologies.",

      // Training Section
      trainingDescription:
        "En parallèle de mon parcours informatique, j'ai développé des compétences techniques en électronique qui enrichissent ma polyvalence et ma compréhension des systèmes complexes.",
      electronicsDegree: "Diplôme en Électronique Générale et Industrielle",
      caeCenter: "Centre Africain en Électronique (CAE)",
      electronicsDescription:
        "Formation complète en électronique analogique et numérique, maintenance des systèmes électroniques, conception de circuits et dépannage des équipements techniques.",

      // Skills Section
      skillsDescription:
        "Mon profil unique combine compétences en développement web et expertise technique en électronique. Cette double compétence me permet d'aborder les projets avec une vision globale et innovante.",
      ElectronicsMaintenance: "Maintenance Électronique",
      SatelliteSystems: "Systèmes Satellite",
      ElectronicSecurity: "Sécurité Électronique",
      SolarEnergy: "Énergie Solaire",

      // About Section
      aboutDescription:
        "Développeur web passionné et technicien en électronique, je combine créativité numérique et expertise technique. Curieux et autodidacte, j'aime relever des défis complexes et trouver des solutions innovantes aux problèmes techniques.",
      Name: "Nom",
      Gender: "Genre",
      Male: "Masculin",
      Age: "Âge",
      "23Years": "23 ans",
      Status: "Statut",
      Single: "Célibataire",
      City: "Ville",
      Nationality: "Nationalité",
      Beninese: "Béninoise",
      years: "années",
      FullTime: "Temps plein",
      Freelance: "Freelance",
      Available: "Disponible",
      Phone: "Téléphone",
      Email: "Email",
      Email2: "Email",
      Languages: "Langues",
      FrenchFonEnglish: "Français, Fon, Anglais",
      Hobbies: "Loisirs",
      ReadingDocsDIY: "Lecture, Documentaires, Bricolage",

      // Sidebar
      WhyChooseMe: "Pourquoi me choisir ?",
      chooseMeDescription:
        "Polyvalent et passionné, je combine expertise en développement web et compétences techniques en électronique. Mon approche unique permet d'apporter des solutions innovantes et complètes à vos projets numériques et techniques.",

      serviceIntro:
        "Fort de ma double compétence en développement web et expertise technique en électronique, je propose une gamme complète de services pour répondre à vos besoins numériques et techniques.",

      // Services noms
      webDevelopment: "Développement Web",
      frontendDevelopment: "Développement Frontend",
      appDesign: "Design d'Applications",
      database: "Bases de Données",
      electronicsMaintenance: "Électronique & Maintenance",
      satelliteInstallation: "Installation Satellite",
      electronicSecurity: "Sécurité Électronique",
      solarEnergy: "Énergie Solaire",
      homeInstallation: "Installation Domestique",

      // Services descriptions
      webDevelopmentDesc:
        "Création de sites web modernes et performants avec les technologies frontend (HTML5, CSS3, JavaScript, React) et backend (PHP, MySQL).",
      frontendDevelopmentDesc:
        "Développement d'interfaces utilisateur modernes avec React.js, création de composants réutilisables et optimisation de l'expérience utilisateur.",
      appDesignDesc:
        "Conception d'interfaces utilisateur modernes et intuitives pour applications web et mobiles. Focus sur l'expérience utilisateur et l'esthétique.",
      databaseDesc:
        "Conception, développement et optimisation de bases de données MySQL pour applications web et mobiles.",
      electronicsMaintenanceDesc:
        "Services techniques en électronique : maintenance, réparation et installation de systèmes électroniques divers.",
      satelliteInstallationDesc:
        "Installation, configuration et maintenance de systèmes de réception satellite (TV, internet).",
      electronicSecurityDesc:
        "Installation et maintenance de systèmes de vidéosurveillance et contrôle d'accès.",
      solarEnergyDesc:
        "Installation et maintenance de systèmes d'énergie solaire pour particuliers.",
      homeInstallationDesc:
        "Services d'installation électrique et électronique pour particuliers : éclairage.",

      // Technologies (traductions pour les arrays)
      analogDigitalElectronics: "Électronique analogique/digitale",
      diagnosticTools: "Outils de diagnostic",
      soldering: "Soudure",
      testEquipment: "Test équipements",
      satelliteDishes: "Antennes paraboliques",
      receivers: "Récepteurs",
      amplifiers: "Amplificateurs",
      coaxialCabling: "Câblage coaxial",
      ipAnalogCameras: "Caméras IP/Analogiques",
      dvrNvrRecorders: "Enregistreurs DVR/NVR",
      detectors: "Détecteurs",
      accessControl: "Contrôle d'accès",
      solarPanels: "Panneaux solaires",
      inverters: "Onduleurs",
      batteries: "Batteries",
      chargeControllers: "Régulateurs de charge",
      electricalWiring: "Câblage électrique",
      homeAutomation: "Systèmes domotiques",
      ledLighting: "Éclairage LED",
      network: "Réseau",

      // Features (arrays de strings)
      webFeatures: [
        "Sites web responsives et modernes",
        "Applications web dynamiques",
        "Intégration de maquettes UI/UX",
        "Optimisation des performances",
        "Connexion aux APIs",
        "Bases de données MySQL",
      ],
      frontendFeatures: [
        "Interfaces React performantes",
        "Composants réutilisables",
        "Design responsive",
        "Animations modernes",
        "Optimisation SEO",
        "Tests et débogage",
      ],
      appDesignFeatures: [
        "Design d'interfaces modernes",
        "Expérience utilisateur optimisée",
        "Prototypes interactifs",
        "Wireframes et maquettes",
        "Design system",
        "Tests utilisateurs",
      ],
      databaseFeatures: [
        "Conception de schémas de base de données",
        "Optimisation des requêtes SQL",
        "Sécurité des données",
        "Sauvegardes et restauration",
        "Migration de données",
      ],
      electronicsFeatures: [
        "Diagnostic et dépannage électronique",
        "Réparation de circuits imprimés",
        "Maintenance préventive",
        "Installation de systèmes",
        "Tests et contrôles qualité",
        "Documentation technique",
      ],
      satelliteFeatures: [
        "Installation d'antennes paraboliques",
        "Alignement et pointage satellite",
        "Configuration des récepteurs",
        "Résolution des problèmes de signal",
        "Mise à niveau des systèmes",
        "Support technique",
      ],
      securityFeatures: [
        "Installation de caméras de surveillance",
        "Configuration des systèmes DVR/NVR",
        "Monitoring à distance",
        "Maintenance préventive",
        "Formation utilisateur",
      ],
      solarFeatures: [
        "Étude et dimensionnement",
        "Installation de panneaux solaires",
        "Mise en service des onduleurs",
        "Maintenance des batteries",
        "Optimisation de production",
        "Diagnostic de performance",
      ],
      homeFeatures: [
        "Installation électrique résidentielle",
        "Installation de prises réseau",
        "Dépannage électrique",
        "Conseils en économie d'énergie",
      ],

      // Labels interface
      technologiesUsed: "Technologies utilisées",
      whatIOffer: "Ce que je propose",
      seeMore: "En savoir plus",
      seeLess: "Voir moins",
      haveAProject: "Un projet en tête ?",
      projectDescription:
        "Que ce soit pour un site web, une application mobile, une installation technique ou un design d'interface, je suis disponible pour discuter de votre projet.",
      discussMyProject: "Discuter de mon projet",
      viewMyPortfolio: "Voir mon portfolio",

       // Portfolio Page
    "Projects": "Projets",
    "portfolioIntro": "Découvrez une sélection de mes projets les plus significatifs. Chaque réalisation représente un défi technique et créatif relevé avec passion et expertise.",
    
    // Project titles and descriptions
    "beiBankTitle": "BEI Bank",
    "beiBankDesc": "Application bancaire en ligne sécurisée avec système de gestion de comptes, virements, prêts et épargne. Interface responsive, authentification à deux facteurs et tableau de bord financier personnalisé pour les clients.",
    "olatechStoreTitle": "Olatech Store",
    "olatechStoreDesc": "Site e-commerce moderne spécialisé en produits technologiques. Catalogue dynamique, panier intelligent, système de paiement sécurisé, gestion des stocks et espace client avec historique des commandes.",
    "portfolio3DTitle": "Portfolio 3D Immersif",
    "portfolio3DDesc": "Portfolio interactif en 3D utilisant Three.js et React Three Fiber. Expérience immersive avec animations 3D fluides, navigation spatiale et éléments interactifs. Interface moderne qui repousse les limites du web traditionnel.",
    "personalPortfolioTitle": "Portfolio Personnel",
    "personalPortfolioDesc": "Portfolio moderne et responsive présentant mes compétences et réalisations. Design épuré avec animations fluides, sections interactives, mode sombre/clair et optimisation des performances pour une expérience utilisateur optimale.",
    "serenjiTitle": "Serenji",
    "serenjiDesc": "Plateforme d'accès et gestion de médicaments en cours de développement avec React et Node.js. Système de tâches avancé, tableau de bord analytique, notifications en temps réel et chat intégré pour une gestion optimale des produits.",
    
    // Project types
    "webApp": "Web App",
    "ecommerce": "E-commerce",
    "webApp3D": "Web App 3D",
    "portfolioType": "Portfolio",
    "saas": "SaaS",
    
    // Navigation and interface
    "previousProject": "Projet précédent",
    "nextProject": "Projet suivant",
    "previous": "Précédent",
    "next": "Suivant",
    "viewProject": "Voir le projet",
    "project": "Projet",
    "projectInProgress": "Projet en cours",
    "sourceCode": "Code source",
    "private": "Privé",
    "projectVisuals": "VISUELS DU PROJET",
    "view": "Vue",
    "previousImage": "Image précédente",
    "nextImage": "Image suivante",
    "goToImage": "Aller à l'image",
    
    // CTA Section
    "portfolioCTA": "Que vous ayez besoin d'une application web, d'un site mobile ou d'une solution sur mesure, je suis là pour vous aider à concrétiser vos idées.",
    "discussYourProject": "Discuter de votre projet",

      "contactMe": "Contactez-moi",
    "contactDescription": "N'hésitez pas à me contacter pour discuter de votre projet, demander un devis ou simplement échanger sur vos besoins.",
    "email": "Email",
    "phone": "Téléphone",
    "location": "Localisation",
    "cotonouBenin": "Cotonou, Bénin",
    "responseTime": "Je m'efforce de répondre à tous les messages dans les 24 heures. Pour les demandes urgentes, privilégiez l'appel téléphonique.",
    
    // Formulaire
    "sendMe": "Envoyez-moi",
    "aMessage": "un message",
    "yourName": "Votre nom",
    "yourSurname": "Votre prénom",
    "yourEmail": "Votre email",
    "subjectOptional": "Sujet (optionnel)",
    "yourMessage": "Votre message",
    "send": "Envoyer",
    "sending": "Envoi en cours",
    
    // Validation et messages
    "fillRequiredFields": "Veuillez remplir tous les champs obligatoires.",
    "submitError": "Une erreur est survenue. Veuillez réessayer.",
    "messageSent": "Message envoyé",
    "thankYouMessage": "Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    "sendAnotherMessage": "Envoyer un autre message"
    },
  },
  en: {
    translation: {
      // Navbar
      Home: "Home",
      About: "About",
      Resume: "Resume",
      Services: "Services",
      Portfolio: "Portfolio",
      Contact: "Contact",

      // Home page
      webDeveloper: "web developer & designer",
      cv: "CV",
      portfolio: "Portfolio",
      aboutMe: "About Me",
      bioParagraph1:
        "Passionate about web development and design, I create unique digital experiences that combine aesthetics and functionality. My approach blends creativity and technical expertise to bring your projects to life.",
      bioParagraph2:
        "With solid experience in modern technologies, I'm committed to delivering innovative and high-performance solutions that perfectly meet your needs.",
      designerDeveloper: "Web Designer & Developer",

      // Resume Page
      Experience: "Experience",
      Education: "Education",
      Training: "Training",
      Skills: "Skills",
      me: "me",
      My: "My",
      AcademicPath: "Academic Path",
      TechnicalTraining: "Technical Training",

      // Experience Section
      experienceDescription:
        "Passionate about web development, I have acquired solid experience in creating modern and performant interfaces. My approach combines technical rigor and design sense to deliver exceptional user experiences.",
      oct2025Mar2026: "October 2025 - March 2026",
      marJun2025: "March - June 2025",
      frontendIntern: "Frontend Developer Intern",
      internship1Description:
        "Development of web applications with React.js, creation of reusable components, REST API integration, performance optimization, and participation in code reviews.",
      internship2Description:
        "Introduction to modern frontend development, creation of responsive interfaces with Bootstrap, learning best development practices, and collaboration with an agile team.",

      // Education Section
      educationDescription:
        "My educational background combines technical training and higher education in computer science, allowing me to acquire dual expertise in software development and computer systems.",
      licenseDegree: "Bachelor's Degree in Computer Systems and Software",
      licenseDescription:
        "Specialization in web development, databases, software architecture, and project management. Training focused on modern technologies and agile methodologies.",
      dtiDegree: "Computer Technician Diploma (DTI)",
      fmcSchool: "FM Coulibaly Technical High School",
      dtiDescription:
        "Technical training in software development, IT maintenance, networks, and databases. Acquisition of programming and systems fundamentals.",
      f3Training: "Industrial Electronics Training (2nd F3)",
      polytechSchool: "Joseph Monier Polytechnic School",
      f3Description:
        "Learning automated systems, electrical engineering, industrial regulation and control. Development of a methodological approach for solving technical problems.",
      bepcDegree: "First Cycle Study Certificate (BEPC)",
      houeyihoSchool: "Houeyiho Secondary School",
      bepcDescription:
        "General education with introduction to information and communication technologies. Development of early interest in computing and new technologies.",

      // Training Section
      trainingDescription:
        "Alongside my computer science journey, I developed technical skills in electronics that enhance my versatility and understanding of complex systems.",
      electronicsDegree: "Diploma in General and Industrial Electronics",
      caeCenter: "African Electronics Center (CAE)",
      electronicsDescription:
        "Complete training in analog and digital electronics, maintenance of electronic systems, circuit design, and equipment troubleshooting.",

      // Skills Section
      skillsDescription:
        "My unique profile combines web development skills and technical expertise in electronics. This dual competence allows me to approach projects with a global and innovative vision.",
      ElectronicsMaintenance: "Electronics Maintenance",
      SatelliteSystems: "Satellite Systems",
      ElectronicSecurity: "Electronic Security",
      SolarEnergy: "Solar Energy",

      // About Section
      aboutDescription:
        "Passionate web developer and electronics technician, I combine digital creativity and technical expertise. Curious and self-taught, I enjoy taking on complex challenges and finding innovative solutions to technical problems.",
      Name: "Name",
      Gender: "Gender",
      Male: "Male",
      Age: "Age",
      "23Years": "23 years old",
      Status: "Status",
      Single: "Single",
      City: "City",
      Nationality: "Nationality",
      Beninese: "Beninese",
      years: "years",
      FullTime: "Full time",
      Freelance: "Freelance",
      Available: "Available",
      Phone: "Phone",
      Email: "Email",
      Email2: "Email",
      Languages: "Languages",
      FrenchFonEnglish: "French, Fon, English",
      Hobbies: "Hobbies",
      ReadingDocsDIY: "Reading, Documentaries, DIY",

      // Sidebar
      WhyChooseMe: "Why Choose Me?",
      chooseMeDescription:
        "Versatile and passionate, I combine web development expertise and technical skills in electronics. My unique approach allows me to bring innovative and complete solutions to your digital and technical projects.",

      // Services Page
      serviceIntro:
        "With my dual expertise in web development and technical electronics, I offer a complete range of services to meet your digital and technical needs.",

      // Services names
      webDevelopment: "Web Development",
      frontendDevelopment: "Frontend Development",
      appDesign: "Application Design",
      database: "Databases",
      electronicsMaintenance: "Electronics & Maintenance",
      satelliteInstallation: "Satellite Installation",
      electronicSecurity: "Electronic Security",
      solarEnergy: "Solar Energy",
      homeInstallation: "Home Installation",

      // Services descriptions
      webDevelopmentDesc:
        "Creation of modern and performant websites with frontend technologies (HTML5, CSS3, JavaScript, React) and backend (PHP, MySQL).",
      frontendDevelopmentDesc:
        "Development of modern user interfaces with React.js, creation of reusable components and optimization of user experience.",
      appDesignDesc:
        "Design of modern and intuitive user interfaces for web and mobile applications. Focus on user experience and aesthetics.",
      databaseDesc:
        "Design, development and optimization of MySQL databases for web and mobile applications.",
      electronicsMaintenanceDesc:
        "Technical electronics services: maintenance, repair and installation of various electronic systems.",
      satelliteInstallationDesc:
        "Installation, configuration and maintenance of satellite reception systems (TV, internet).",
      electronicSecurityDesc:
        "Installation and maintenance of surveillance systems and access control.",
      solarEnergyDesc:
        "Installation and maintenance of solar energy systems for individuals.",
      homeInstallationDesc:
        "Electrical and electronic installation services for individuals: lighting.",

      // Technologies (translations for arrays)
      analogDigitalElectronics: "Analog/Digital Electronics",
      diagnosticTools: "Diagnostic Tools",
      soldering: "Soldering",
      testEquipment: "Test Equipment",
      satelliteDishes: "Satellite Dishes",
      receivers: "Receivers",
      amplifiers: "Amplifiers",
      coaxialCabling: "Coaxial Cabling",
      ipAnalogCameras: "IP/Analog Cameras",
      dvrNvrRecorders: "DVR/NVR Recorders",
      detectors: "Detectors",
      accessControl: "Access Control",
      solarPanels: "Solar Panels",
      inverters: "Inverters",
      batteries: "Batteries",
      chargeControllers: "Charge Controllers",
      electricalWiring: "Electrical Wiring",
      homeAutomation: "Home Automation Systems",
      ledLighting: "LED Lighting",
      network: "Network",

      // Features (arrays of strings)
      webFeatures: [
        "Responsive and modern websites",
        "Dynamic web applications",
        "UI/UX mockup integration",
        "Performance optimization",
        "API connections",
        "MySQL databases",
      ],
      frontendFeatures: [
        "Performant React interfaces",
        "Reusable components",
        "Responsive design",
        "Modern animations",
        "SEO optimization",
        "Testing and debugging",
      ],
      appDesignFeatures: [
        "Modern interface design",
        "Optimized user experience",
        "Interactive prototypes",
        "Wireframes and mockups",
        "Design system",
        "User testing",
      ],
      databaseFeatures: [
        "Database schema design",
        "SQL query optimization",
        "Data security",
        "Backups and restoration",
        "Data migration",
      ],
      electronicsFeatures: [
        "Electronic diagnosis and troubleshooting",
        "Printed circuit board repair",
        "Preventive maintenance",
        "System installation",
        "Quality tests and controls",
        "Technical documentation",
      ],
      satelliteFeatures: [
        "Satellite dish installation",
        "Satellite alignment and pointing",
        "Receiver configuration",
        "Signal problem resolution",
        "System upgrades",
        "Technical support",
      ],
      securityFeatures: [
        "Surveillance camera installation",
        "DVR/NVR system configuration",
        "Remote monitoring",
        "Preventive maintenance",
        "User training",
      ],
      solarFeatures: [
        "Study and sizing",
        "Solar panel installation",
        "Inverter commissioning",
        "Battery maintenance",
        "Production optimization",
        "Performance diagnosis",
      ],
      homeFeatures: [
        "Residential electrical installation",
        "Network socket installation",
        "Electrical troubleshooting",
        "Energy saving advice",
      ],

      // Interface labels
      technologiesUsed: "Technologies used",
      whatIOffer: "What I offer",
      seeMore: "Learn more",
      seeLess: "See less",
      haveAProject: "Have a project in mind?",
      projectDescription:
        "Whether it's for a website, mobile application, technical installation or interface design, I'm available to discuss your project.",
      discussMyProject: "Discuss my project",
      viewMyPortfolio: "View my portfolio",

       // Portfolio Page
    "Projects": "Projects",
    "portfolioIntro": "Discover a selection of my most significant projects. Each achievement represents a technical and creative challenge taken on with passion and expertise.",
    
    // Project titles and descriptions
    "beiBankTitle": "BEI Bank",
    "beiBankDesc": "Secure online banking application with account management system, transfers, loans and savings. Responsive interface, two-factor authentication and personalized financial dashboard for customers.",
    "olatechStoreTitle": "Olatech Store",
    "olatechStoreDesc": "Modern e-commerce site specialized in technology products. Dynamic catalog, smart cart, secure payment system, stock management and customer area with order history.",
    "portfolio3DTitle": "Immersive 3D Portfolio",
    "portfolio3DDesc": "Interactive 3D portfolio using Three.js and React Three Fiber. Immersive experience with smooth 3D animations, spatial navigation and interactive elements. Modern interface that pushes the boundaries of traditional web.",
    "personalPortfolioTitle": "Personal Portfolio",
    "personalPortfolioDesc": "Modern and responsive portfolio presenting my skills and achievements. Clean design with smooth animations, interactive sections, dark/light mode and performance optimization for optimal user experience.",
    "serenjiTitle": "Serenji",
    "serenjiDesc": "Drug access and management platform under development with React and Node.js. Advanced task system, analytical dashboard, real-time notifications and integrated chat for optimal product management.",
    
    // Project types
    "webApp": "Web App",
    "ecommerce": "E-commerce",
    "webApp3D": "3D Web App",
    "portfolioType": "Portfolio",
    "saas": "SaaS",
    
    // Navigation and interface
    "previousProject": "Previous project",
    "nextProject": "Next project",
    "previous": "Previous",
    "next": "Next",
    "viewProject": "View project",
    "project": "Project",
    "projectInProgress": "Project in progress",
    "sourceCode": "Source code",
    "private": "Private",
    "projectVisuals": "PROJECT VISUALS",
    "view": "View",
    "previousImage": "Previous image",
    "nextImage": "Next image",
    "goToImage": "Go to image",
    
    // CTA Section
    "portfolioCTA": "Whether you need a web application, mobile site or custom solution, I'm here to help you bring your ideas to life.",
    "discussYourProject": "Discuss your project",

     // Contact Page
    "contactMe": "Contact Me",
    "contactDescription": "Feel free to contact me to discuss your project, request a quote or simply talk about your needs.",
    "email": "Email",
    "phone": "Phone",
    "location": "Location",
    "cotonouBenin": "Cotonou, Benin",
    "responseTime": "I strive to respond to all messages within 24 hours. For urgent requests, please use the phone call.",
    
    // Formulaire
    "sendMe": "Send Me",
    "aMessage": "a Message",
    "yourName": "Your name",
    "yourSurname": "Your surname",
    "yourEmail": "Your email",
    "subjectOptional": "Subject (optional)",
    "yourMessage": "Your message",
    "send": "Send",
    "sending": "Sending",
    
    // Validation et messages
    "fillRequiredFields": "Please fill in all required fields.",
    "submitError": "An error occurred. Please try again.",
    "messageSent": "Message sent",
    "thankYouMessage": "Thank you for your message. I will respond as soon as possible.",
    "sendAnotherMessage": "Send another message"
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("language") || "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
