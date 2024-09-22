// for double the barnd nummbers in the services section
const copy2x = document.querySelector(".brands-slide").cloneNode(true);
document.querySelector(".brands-container").appendChild(copy2x);

// for interactive navbar section
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".normal-nav .nav-item a");

window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    let windowTop = window.scrollY;
    let offset = section.offsetTop - 120;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (windowTop >= offset && windowTop < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(".normal-nav .nav-item a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});

// for back to top button
const topIcon = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1000) {
    topIcon.classList.add("active");
  } else {
    topIcon.classList.remove("active");
  }
});

// drop down menu translate
// Define translations for English and Deutsch
const translations = {
  en: {
    home: "Home",
    about: "About Us",
    services: "Services",
    blogs: "Blogs",
    contact: "Contact Us",
    brandName: "LASSRI",
  },
  de: {
    home: "Startseite",
    about: "Über uns",
    services: "Dienstleistungen",
    blogs: "Blogs",
    contact: "Kontakt",
    brandName: "LASSRI",
  },
};

// Function to update the text of the navbar based on selected language
function translateNavbar(language) {
  // Use more specific selectors or class names if necessary
  document
    .querySelectorAll('.nav-link[href="#home"]')
    .forEach((link) => (link.textContent = translations[language].home));
  document
    .querySelectorAll('.nav-link[href="#about"]')
    .forEach((link) => (link.textContent = translations[language].about));
  document
    .querySelectorAll('.nav-link[href="#services"]')
    .forEach((link) => (link.textContent = translations[language].services));
  document
    .querySelectorAll('.nav-link[href="#blogs"]')
    .forEach((link) => (link.textContent = translations[language].blogs));
  document
    .querySelectorAll('.nav-link[href="#contact"]')
    .forEach((link) => (link.textContent = translations[language].contact));
}

// Add event listener to the select dropdown to handle language change
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateNavbar(selectedLanguage); // Translate the navbar based on selected language
  });

// Define translations for English and Deutsch
const carouselTranslations = {
  en: {
    slide1: {
      title: "Leading the Way in Global Agriculture Exports",
      description:
        "Providing top-quality vegetables and fruits to markets worldwide. With a commitment to excellence and sustainability, we ensure fresh produce reaches every corner of the globe.",
    },
    slide2: {
      title: "Unmatched Quality Standards",
      description:
        "Our commitment to delivering the finest vegetables and fruits is backed by rigorous quality control measures, ensuring fresh and safe produce for global markets.",
    },
    slide3: {
      title: "Premium Organic Services",
      description:
        "We specialize in offering certified organic vegetables and fruits, cultivated using sustainable farming practices to provide healthy, eco-friendly produce to global consumers.",
    },
  },
  de: {
    slide1: {
      title: "Führend im globalen Agrar-Export",
      description:
        "Wir liefern qualitativ hochwertiges Obst und Gemüse an Märkte weltweit. Mit einem Engagement für Exzellenz und Nachhaltigkeit stellen wir sicher, dass frische Produkte jede Ecke der Welt erreichen.",
    },
    slide2: {
      title: "Unvergleichliche Qualitätsstandards",
      description:
        "Unser Engagement für die Bereitstellung der besten Obst- und Gemüsequalität wird durch strenge Qualitätskontrollmaßnahmen unterstützt, um frische und sichere Produkte für globale Märkte zu gewährleisten.",
    },
    slide3: {
      title: "Erstklassige Bio-Dienstleistungen",
      description:
        "Wir sind auf die Bereitstellung von zertifiziertem Bio-Gemüse und -Obst spezialisiert, das mit nachhaltigen Anbaumethoden angebaut wird, um gesunde und umweltfreundliche Produkte an globale Verbraucher zu liefern.",
    },
  },
};

// Function to update the carousel content based on selected language
function translateCarousel(language) {
  // Slide 1
  document.querySelector(
    "#carouselExampleSlidesOnly .carousel-item:nth-child(1) h5"
  ).textContent = carouselTranslations[language].slide1.title;
  document.querySelector(
    "#carouselExampleSlidesOnly .carousel-item:nth-child(1) p"
  ).textContent = carouselTranslations[language].slide1.description;

  // Slide 2
  document.querySelector(
    "#carouselExampleSlidesOnly .carousel-item:nth-child(2) h5"
  ).textContent = carouselTranslations[language].slide2.title;
  document.querySelector(
    "#carouselExampleSlidesOnly .carousel-item:nth-child(2) p"
  ).textContent = carouselTranslations[language].slide2.description;

  // Slide 3
  document.querySelector(
    "#carouselExampleSlidesOnly .carousel-item:nth-child(3) h5"
  ).textContent = carouselTranslations[language].slide3.title;
  document.querySelector(
    "#carouselExampleSlidesOnly .carousel-item:nth-child(3) p"
  ).textContent = carouselTranslations[language].slide3.description;
}

// Add event listener to the select dropdown to handle language change
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateCarousel(selectedLanguage); // Translate carousel content
  });
/// Define translations for English and Deutsch
const aboutTranslations = {
  en: {
    header: "About lassri export-import",
    headline1: "Leading the Global Agriculture Market",
    paragraph1:
      "As a leader in the global agricultural market, we specialize in the export and import of premium Moroccan vegetables and fruits. Through our strong commitment to sustainability and freshness, we ensure that our products reach international markets, including Germany, in the best condition, providing consumers with nutritious and authentic options. Our goal is to offer only the best products produced in Morocco, always putting the happiness and satisfaction of our customers in Germany and around the world first.",
    tip1: "Growing Fruits and Vegetables",
    tip2: "Tips for Ripening your Fruits",
    additionalInfo1:
      "Cultivating Fresh Fruits and Vegetables, How to Keep Your Produce Fresh Longer",
    button1: "Learn More",

    headline2: "Experts in Agriculture & Sustainable Farming",
    paragraph2:
      "As specialists in agriculture and eco-friendly farming practices, we are dedicated to delivering high-quality vegetables and fruits for export and import. From the fields to your table, our team ensures that every step of the process adheres to the highest standards of sustainability and freshness.",
    tip3: "Professional Farmers",
    tip4: "Organic & Eco Solutions",
    additionalInfo2:
      "There are numerous ways to grow and export produce, but we focus on providing reliable, high-quality solutions. Our approach ensures that every shipment of fresh vegetables and fruits reaches its destination in the best possible condition, ready to meet the needs of global markets.",
    button2: "Learn More",
  },
  de: {
    header: "Über lassri export-import",
    headline1: "Führend im globalen Agrarmarkt",
    paragraph1:
      "Als führendes Unternehmen auf dem globalen Agrarmarkt sind wir auf den Export und Import von erstklassigem marokkanischem Gemüse und Obst spezialisiert. Durch unser starkes Engagement für Nachhaltigkeit und Frische stellen wir sicher, dass unsere Produkte in bestem Zustand internationale Märkte, einschließlich Deutschland, erreichen und den Verbrauchern nahrhafte und authentische Optionen bieten. Unser Ziel ist es, nur die besten in Marokko produzierten Produkte anzubieten und dabei stets das Glücklishkeit und die Zufriedenheit unserer Kunden in Deutschland und der Welt in den Vordergrund zu stellen..",
    tip1: "Obst und Gemüse anbauen",
    tip2: "Tipps zum Reifen Ihrer Früchte",
    additionalInfo1:
      "Frisches Obst und Gemüse kultivieren, wie Sie Ihre Produkte länger frisch halten",
    button1: "Mehr erfahren",

    headline2: "Experten für Landwirtschaft & nachhaltige Landwirtschaft",
    paragraph2:
      "Als Spezialisten für Landwirtschaft und umweltfreundliche Anbaumethoden sind wir bestrebt, qualitativ hochwertiges Obst und Gemüse für den Export und Import zu liefern. Von den Feldern bis auf Ihren Tisch stellt unser Team sicher, dass jeder Schritt des Prozesses den höchsten Standards in Bezug auf Nachhaltigkeit und Frische entspricht.",
    tip3: "Professionelle Bauern",
    tip4: "Organische & Öko-Lösungen",
    additionalInfo2:
      "Es gibt zahlreiche Möglichkeiten, Obst und Gemüse anzubauen und zu exportieren, aber wir konzentrieren uns darauf, zuverlässige, hochwertige Lösungen anzubieten. Unser Ansatz stellt sicher, dass jede Lieferung von frischem Obst und Gemüse in bestmöglichem Zustand ihr Ziel erreicht, um den Anforderungen globaler Märkte gerecht zu werden.",
    button2: "Mehr erfahren",
  },
};

// Function to update the 'About' section based on selected language
function translateAboutSection(language) {
  // Update the section header
  document.querySelector("#about .section-header").textContent =
    aboutTranslations[language].header;

  // Update the 1st container (leading global agriculture market)
  const firstContainer = document.querySelectorAll("#about .text-container")[0];
  firstContainer.querySelector(".headline").textContent =
    aboutTranslations[language].headline1;
  firstContainer.querySelector("p").textContent =
    aboutTranslations[language].paragraph1;
  firstContainer.querySelectorAll(
    ".tips div:nth-child(1) .fw-bold"
  )[0].textContent = aboutTranslations[language].tip1;
  firstContainer.querySelectorAll(
    ".tips div:nth-child(2) .fw-bold"
  )[0].textContent = aboutTranslations[language].tip2;
  firstContainer.querySelector(".mt-2").textContent =
    aboutTranslations[language].additionalInfo1;
  firstContainer.querySelector(".yg-btn").textContent =
    aboutTranslations[language].button1;

  // Update the 2nd container (experts in sustainable farming)
  const secondContainer = document.querySelectorAll(
    "#about .text-container"
  )[1];
  secondContainer.querySelector(".headline").innerHTML =
    aboutTranslations[language].headline2;
  secondContainer.querySelector("p").textContent =
    aboutTranslations[language].paragraph2;
  secondContainer.querySelectorAll(
    ".tips div:nth-child(1) .fw-bold"
  )[0].textContent = aboutTranslations[language].tip3;
  secondContainer.querySelectorAll(
    ".tips div:nth-child(2) .fw-bold"
  )[0].textContent = aboutTranslations[language].tip4;
  secondContainer.querySelector(".mt-2").textContent =
    aboutTranslations[language].additionalInfo2;
  secondContainer.querySelector(".yg-btn").textContent =
    aboutTranslations[language].button2;
}

// Add event listener to the select dropdown to handle language change
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateAboutSection(selectedLanguage); // Translate 'About' section
  });

// script.js
// script.js

// Define translations for English and Deutsch
const servicesTranslations = {
  en: {
    header: "What we do",
    headline1: "We're offering Product like",
    cards: {
      sweetPotato: {
        title: "Sweet Potato",
        text: "Fresh sweet potatoes, perfect for roasting or mashing, rich in flavor and nutrients.",
      },
      onion: {
        title: "Onion",
        text: "Crisp and flavorful onions, ideal for enhancing the taste of your favorite dishes.",
      },
      hotPepper: {
        title: "Hot Pepper",
        text: "Spicy and vibrant hot peppers, perfect for adding heat to your favorite dishes or enjoying as a fiery snack!",
      },
      redPepper: {
        title: "Red Pepper",
        text: "Crisp and vibrant red peppers, a great addition to stir-fries or salads.",
      },
      radish: {
        title: "Radish",
        text: "Fresh radishes with a sharp, peppery flavor, ideal for garnishing salads.",
      },
      redRadish: {
        title: "Red Radish",
        text: "Vibrant red radishes with a crisp texture, perfect for adding color to your dishes.",
      },
      avocado: {
        title: "Avocado",
        text: "Fresh avocados, creamy and rich, perfect for salads or toasts.",
      },
      orange: {
        title: "Orange",
        text: "Crisp and juicy oranges, ideal for a refreshing snack or adding to your dishes.",
      },
      grespy: {
        title: "Grespy",
        text: "Grespy, a crispy and refreshing fruit with a sweet, tangy taste, perfect for a healthy snack or topping in desserts.",
      },
      yellowGrespy: {
        title: "Yellow Grespy",
        text: "The Yellow Grespy offers a unique balance of sweetness and crispness, making it a delightful choice for fresh snacking or fruit salads.",
      },
      koreanMelon: {
        title: "Korean Melon",
        text: "Korean Melon, known for its mild sweetness and crisp texture, is a refreshing treat perfect for hot summer days or as a light snack.",
      },
      watermelon: {
        title: "Watermelon",
        text: "Juicy and refreshing, Moroccan Watermelon is the perfect summer fruit, ideal for hydrating snacks or fruit salads.",
      },
    },
    headline2: "We're providing high quality fruits",
    brandsHeader: "We're providing high quality products",
  },
  de: {
    header: "Was wir tun",
    headline1: "Wir bieten Produkte wie",
    cards: {
      sweetPotato: {
        title: "Süßkartoffel",
        text: "Frische Süßkartoffeln, ideal zum Rösten oder Pürieren, reich an Geschmack und Nährstoffen.",
      },
      onion: {
        title: "Zwiebel",
        text: "Crispe und aromatische Zwiebeln, ideal zum Verfeinern Ihrer Lieblingsgerichte.",
      },
      hotPepper: {
        title: "Scharfe Paprika",
        text: "Scharfe und lebendige Paprika, perfekt zum Würzen Ihrer Lieblingsgerichte oder als scharfer Snack!",
      },
      redPepper: {
        title: "Rote Paprika",
        text: "Crispe und lebhafte rote Paprika, eine großartige Ergänzung für Pfannengerichte oder Salate.",
      },
      radish: {
        title: "Rettich",
        text: "Frische Rettich mit der besten Geschmack, ideal zum Garnieren von Salaten.",
      },
      redRadish: {
        title: "Rote Rettich",
        text: "Lebhafte rote Rettich  perfekt zum Hinzufügen von Farbe zu Ihren Gerichten.",
      },
      avocado: {
        title: "Avocado",
        text: "Frische Avocados reichhaltig, ideal für Salate oder Toasts.",
      },
      orange: {
        title: "Orange",
        text: "Crispe und saftige Orangen, reich mit vitamine C ",
      },
      grespy: {
        title: "Grespy",
        text: "Grespy, eine knusprige und erfrischende Frucht mit einem süßen, würzigen Geschmack, ideal als gesunder Snack oder als Topping in Desserts.",
      },
      yellowGrespy: {
        title: "Gelbes Grespy",
        text: "Das gelbe Grespy bietet eine einzigartige  Süßes Balance  und ist eine hervorragende Wahl für frisches Snacken oder desert.",
      },
      koreanMelon: {
        title: "Koreanische Melone",
        text: "Koreanische Melone, bekannt für ihre milde Süße  Textur , es ist ein erfrischender Genuss, perfekt für heiße Sommertage oder als leichter Snack.",
      },
      watermelon: {
        title: "Wassermelone",
        text: "Saftig und erfrischend, marokkanische Wassermelone ist das perfekte Sommerobst, ideal für hydrierende Snacks oder Obstsalate.",
      },
    },
    headline2: "Wir bieten hochwertige Früchte an",
    brandsHeader: "Wir bieten hochwertige Produkte an",
  },
};

// Function to update the 'Services' section based on selected language
function translateServicesSection(language) {
  // Update the section header
  document.querySelector("#services .section-header").textContent =
    servicesTranslations[language].header;

  // Update the first headline
  document.querySelector("#services .headline").textContent =
    servicesTranslations[language].headline1;

  // Update cards
  const cards = servicesTranslations[language].cards;

  document.querySelector("#card-sweet-potato .card-title a").textContent =
    cards.sweetPotato.title;
  document.querySelector("#card-sweet-potato .card-text").textContent =
    cards.sweetPotato.text;

  document.querySelector("#card-onion .card-title a").textContent =
    cards.onion.title;
  document.querySelector("#card-onion .card-text").textContent =
    cards.onion.text;

  document.querySelector("#card-hot-pepper .card-title a").textContent =
    cards.hotPepper.title;
  document.querySelector("#card-hot-pepper .card-text").textContent =
    cards.hotPepper.text;

  document.querySelector("#card-red-pepper .card-title a").textContent =
    cards.redPepper.title;
  document.querySelector("#card-red-pepper .card-text").textContent =
    cards.redPepper.text;

  document.querySelector("#card-radish .card-title a").textContent =
    cards.radish.title;
  document.querySelector("#card-radish .card-text").textContent =
    cards.radish.text;

  document.querySelector("#card-red-radish .card-title a").textContent =
    cards.redRadish.title;
  document.querySelector("#card-red-radish .card-text").textContent =
    cards.redRadish.text;

  document.querySelector("#card-avocado .card-title a").textContent =
    cards.avocado.title;
  document.querySelector("#card-avocado .card-text").textContent =
    cards.avocado.text;

  document.querySelector("#card-orange .card-title a").textContent =
    cards.orange.title;
  document.querySelector("#card-orange .card-text").textContent =
    cards.orange.text;

  document.querySelector("#card-grespy .card-title a").textContent =
    cards.grespy.title;
  document.querySelector("#card-grespy .card-text").textContent =
    cards.grespy.text;

  document.querySelector("#card-yellow-grespy .card-title a").textContent =
    cards.yellowGrespy.title;
  document.querySelector("#card-yellow-grespy .card-text").textContent =
    cards.yellowGrespy.text;

  document.querySelector("#card-korean-melon .card-title a").textContent =
    cards.koreanMelon.title;
  document.querySelector("#card-korean-melon .card-text").textContent =
    cards.koreanMelon.text;

  document.querySelector("#card-watermelon .card-title a").textContent =
    cards.watermelon.title;
  document.querySelector("#card-watermelon .card-text").textContent =
    cards.watermelon.text;

  // Update the second headline
  document.querySelectorAll(".headline")[1].textContent =
    servicesTranslations[language].headline2;

  // Update the brands header
  document.querySelector(".fixed-bg .headline").textContent =
    servicesTranslations[language].brandsHeader;
}

// Event listener for language selection
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateServicesSection(selectedLanguage);
  });

// Initialize with default language
translateServicesSection("en");

const contactTranslations = {
  en: {
    header: "Let's Talk",
    faqHeader: "FAQs",
    faqParagraph:
      "Explore our frequently asked questions about the export and import of fresh vegetables and fruits. If you have additional queries, feel free to reach out to us.",
    faqItems: [
      {
        question: "What types of vegetables and fruits do you export/import?",
        answer:
          "We specialize in exporting and importing a wide range of fresh vegetables and fruits, including seasonal produce and exotic varieties.",
      },
      {
        question: "Which countries do you export/import to and from?",
        answer:
          "We have established trade relations with numerous countries, focusing on Europe, Asia, and North America. Our import/export network is constantly expanding.",
      },
      {
        question:
          "How do you ensure the quality of the products during shipment?",
        answer:
          "We use temperature-controlled storage and transportation to ensure that all fruits and vegetables maintain their freshness and nutritional value during transit.",
      },
      {
        question: "What is the process for placing an order?",
        answer:
          "You can contact our sales team via email or phone, and we will guide you through the order process, including available produce, pricing, and shipment timelines.",
      },
    ],
    contactTitle: "Get in Touch",
    location: "Kenitra, Morocco",
    email: "saadhaouri@gmail.com",
    phones: {
      germany: "Germany: 0049 177 85 87 014",
      morocco: "Morocco: 00212 663 22 70 59",
    },
  },
  de: {
    header: "Lass uns reden",
    faqHeader: "Häufige Fragen",
    faqParagraph:
      "Entdecken Sie unsere häufig gestellten Fragen zum Export und Import von frischem Gemüse und Obst. Wenn Sie weitere Fragen haben, zögern Sie nicht, uns zu kontaktieren.",
    faqItems: [
      {
        question:
          "Welche Arten von Gemüse und Obst exportieren/importieren Sie?",
        answer:
          "Wir sind auf den Export und Import einer Vielzahl von frischem Gemüse und Obst spezialisiert, darunter auch saisonale Produkte und exotische Sorten.",
      },
      {
        question: "In welche Länder exportieren/importieren Sie?",
        answer:
          "Wir haben Handelsbeziehungen mit zahlreichen Ländern aufgebaut, wobei der Schwerpunkt auf Europa, Asien und Nordamerika liegt. Unser Import-/Exportnetzwerk wächst ständig.",
      },
      {
        question:
          "Wie stellen Sie die Qualität der Produkte während des Versands sicher?",
        answer:
          "Wir verwenden temperaturgesteuerte Lagerung und Transport, um sicherzustellen, dass alle Früchte und Gemüse während des Transports ihre Frische und ihren Nährwert behalten.",
      },
      {
        question: "Wie ist der Bestellprozess?",
        answer:
          "Sie können unser Verkaufsteam per E-Mail oder Telefon kontaktieren, und wir werden Sie durch den Bestellprozess führen, einschließlich der verfügbaren Produkte, Preise und Versandzeiten.",
      },
    ],
    contactTitle: "Kontaktieren Sie uns",
    location: "Kenitra, Marokko",
    email: "saadhaouri@gmail.com",
    phones: {
      germany: "Deutschland: 0049 177 85 87 014",
      morocco: "Marokko: 00212 663 22 70 59",
    },
  },
};

function translateContactSection(language) {
  // Update the section header
  document.querySelector("#contact .section-header").textContent =
    contactTranslations[language].header;

  // Update the FAQ header and paragraph
  document.querySelector(".faq-section .headline").textContent =
    contactTranslations[language].faqHeader;
  document.querySelector(".accordion-container p").textContent =
    contactTranslations[language].faqParagraph;

  // Update FAQ items
  const faqItems = contactTranslations[language].faqItems;
  document.querySelectorAll(".accordion-item").forEach((item, index) => {
    item.querySelector(".accordion-button").textContent =
      faqItems[index].question;
    item.querySelector(".accordion-body p").textContent =
      faqItems[index].answer;
  });

  // Update the contact title
  document.querySelector(".get-in-touch .title").textContent =
    contactTranslations[language].contactTitle;

  // Update contact details
  document
    .querySelectorAll(".contact-item")[0]
    .querySelector(".info p").textContent =
    contactTranslations[language].location;
  document
    .querySelectorAll(".contact-item")[1]
    .querySelector(".info p").textContent = contactTranslations[language].email;
  document
    .querySelectorAll(".contact-item")[2]
    .querySelectorAll(".info p")[0].textContent =
    contactTranslations[language].phones.germany;
  document
    .querySelectorAll(".contact-item")[2]
    .querySelectorAll(".info p")[1].textContent =
    contactTranslations[language].phones.morocco;
}

// Add event listener to the select dropdown to handle language change
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateContactSection(selectedLanguage); // Translate contact section
  });
const footerTranslations = {
  en: {
    email: "saadhaouri@gmail.com",
    exploreHeader: "Explore",
    exploreLinks: [
      "Home",
      "About",
      "Services",
      "Blogs",
      "Contact us",
      "Our Projects",
      "Upcoming Events",
      "New Campaign",
      "FAQs",
      "Volunteers",
    ],
    newsletterHeader: "Get our newsletter",
    newsletterParagraph: "Monthly digest of what's new and exciting from us.",
    subscribeButton: "Subscribe",
    copyright: "© 2023 Company, Inc. All rights reserved.",
    terms: "Terms & Conditions",
    privacy: "Privacy Policy",
    support: "Support",
  },
  de: {
    email: "saadhaouri@gmail.com",
    exploreHeader: "Entdecken",
    exploreLinks: [
      "Startseite",
      "Über uns",
      "Dienstleistungen",
      "Blogs",
      "Kontaktieren Sie uns",
      "Unsere Projekte",
      "Bevorstehende Veranstaltungen",
      "Neue Kampagne",
      "FAQs",
      "Freiwillige",
    ],
    newsletterHeader: "Abonnieren Sie unseren Newsletter",
    newsletterParagraph:
      "Monatlicher Überblick über Neuigkeiten und Spannendes von uns.",
    subscribeButton: "Abonnieren",
    copyright: "© 2023 Unternehmen, Inc. Alle Rechte vorbehalten.",
    terms: "Allgemeine Geschäftsbedingungen",
    privacy: "Datenschutz-Bestimmungen",
    support: "Unterstützung",
  },
};
function translateFooter(language) {
  // Update address and email
  document.querySelector(".bi-geo-alt-fill").parentElement.textContent =
    footerTranslations[language].address;
  document.querySelector(".bi-envelope-fill").nextSibling.textContent =
    footerTranslations[language].email;

  // Update "Explore" section header
  document.querySelector(".explore-sec h5").textContent =
    footerTranslations[language].exploreHeader;

  // Update "Explore" section links
  const exploreLinks = document.querySelectorAll(".explore-sec .nav-link");
  footerTranslations[language].exploreLinks.forEach((linkText, index) => {
    exploreLinks[index].textContent = linkText;
  });

  // Update newsletter section
  document.querySelector(".get-our-newsletter h5").textContent =
    footerTranslations[language].newsletterHeader;
  document.querySelector(".get-our-newsletter p").textContent =
    footerTranslations[language].newsletterParagraph;
  document.querySelector("#button-addon5").textContent =
    footerTranslations[language].subscribeButton;

  // Update copyright and footer links
  document.querySelector(".copyright-line p").firstChild.textContent =
    footerTranslations[language].copyright;
  document.querySelectorAll(".copyright-line a")[0].textContent =
    footerTranslations[language].terms;
  document.querySelectorAll(".copyright-line a")[1].textContent =
    footerTranslations[language].privacy;
  document.querySelectorAll(".copyright-line a")[2].textContent =
    footerTranslations[language].support;
}

// Add event listener to the select dropdown to handle language change
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateFooter(selectedLanguage); // Translate footer section
  });

const blogTranslations = {
  en: {
    sectionHeader: "Blogs",
    headline: "Latest Blogs & News on Export & Import of Vegetables & Fruits",
    blogs: [
      {
        author: "Olivia Rhye",
        date: "15 Sep 2023",
        title: "Global Export Trends in Vegetables & Fruits",
        description:
          "Discover the latest trends in global exports of vegetables and fruits, and how international markets are shaping the industry’s future.",
        like: "32",
        comment: "8",
        imageAlt: "Global Fruit and Vegetable Export Trends",
      },
      {
        author: "Paul Ahua",
        date: "25 Aug 2023",
        title: "Overcoming Challenges in Importing Fresh Produce",
        description:
          "Learn about the key challenges faced when importing fresh vegetables and fruits and the solutions being implemented to maintain quality.",
        like: "45",
        comment: "12",
        imageAlt: "Challenges in Importing Fresh Produce",
      },
      {
        author: "Met John",
        date: "09 Jul 2023",
        title: "Sustainable Practices in the Export of Fruits",
        description:
          "Explore how sustainability is being integrated into the export process of fruits, ensuring minimal environmental impact while maximizing efficiency.",
        like: "29",
        comment: "5",
        imageAlt: "Sustainable Practices in Exporting Fruits",
      },
      {
        author: "Olivia Rhye",
        date: "10 Jun 2023",
        title: "The Rise of Organic Imports in the Global Market",
        description:
          "Organic produce is gaining traction in the international market. Dive into the reasons behind the increasing demand for organic fruits and vegetables.",
        like: "39",
        comment: "10",
        imageAlt: "Organic Fruit & Vegetable Imports",
      },
    ],
    viewMore: "View More",
  },
  de: {
    sectionHeader: "Blogs",
    headline:
      "Neueste Blogs & Nachrichten zum Export & Import von Gemüse & Früchten",
    blogs: [
      {
        author: "Olivia Rhye",
        date: "15. Sep 2023",
        title: "Globale Exporttrends bei Gemüse & Früchten",
        description:
          "Entdecken Sie die neuesten Trends im globalen Export von Gemüse und Früchten und wie internationale Märkte die Zukunft der Branche gestalten.",
        like: "32",
        comment: "8",
        imageAlt: "Globale Exporttrends bei Gemüse und Früchten",
      },
      {
        author: "Paul Ahua",
        date: "25. Aug 2023",
        title: "Herausforderungen beim Import frischer Produkte überwinden",
        description:
          "Erfahren Sie mehr über die wichtigsten Herausforderungen beim Import frischer Gemüse und Früchte und die Lösungen zur Qualitätserhaltung.",
        like: "45",
        comment: "12",
        imageAlt: "Herausforderungen beim Import frischer Produkte",
      },
      {
        author: "Met John",
        date: "09. Jul 2023",
        title: "Nachhaltige Praktiken im Export von Früchten",
        description:
          "Erkunden Sie, wie Nachhaltigkeit in den Exportprozess von Früchten integriert wird, um minimale Umweltbelastungen bei maximaler Effizienz zu gewährleisten.",
        like: "29",
        comment: "5",
        imageAlt: "Nachhaltige Praktiken im Export von Früchten",
      },
      {
        author: "Olivia Rhye",
        date: "10. Jun 2023",
        title: "Der Aufstieg von Bio-Importen auf dem Weltmarkt",
        description:
          "Bio-Produkte gewinnen auf dem internationalen Markt an Bedeutung. Erfahren Sie die Gründe für die steigende Nachfrage nach Gemüse und -Früchten.",
        like: "39",
        comment: "10",
        imageAlt: "Bio-Gemüse und -Früchte Importe",
      },
    ],
    viewMore: "Mehr anzeigen",
  },
};

function translateBlogSection(language) {
  // Update section header
  document.querySelector("#blogs .section-header").textContent =
    blogTranslations[language].sectionHeader;

  // Update headline
  document.querySelector("#blogs .headline").textContent =
    blogTranslations[language].headline;

  // Update blog items
  const blogs = blogTranslations[language].blogs;
  document.querySelectorAll(".blog-items").forEach((blogItem, index) => {
    const blog = blogs[index];
    blogItem.querySelector(
      ".blog-user-name"
    ).textContent = `${blog.author} • ${blog.date}`;
    blogItem.querySelector(".blog-title").textContent = blog.title;
    blogItem.querySelector("p").textContent = blog.description;
    blogItem.querySelector(".like").textContent = `❤ ${blog.like}`;
    blogItem.querySelector(".comment").textContent = `💬 ${blog.comment}`;
    blogItem.querySelector("img").alt = blog.imageAlt;
  });

  // Update 'View More' button
  document.querySelector("#blogs .yg-btn").textContent =
    blogTranslations[language].viewMore;
}
document
  .getElementById("languageSelect")
  .addEventListener("change", function () {
    const selectedLanguage = this.value;
    translateBlogSection(selectedLanguage); // Translate blog section
  });
