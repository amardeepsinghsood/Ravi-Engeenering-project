// =====================================================
//  RAVI ENGINEERING CHATBOT KNOWLEDGE BASE
//  Edit this file to update what the chatbot knows.
//  Each entry has:
//    keywords: words/phrases the user might type
//    answer:   the reply the chatbot will give
// =====================================================

const chatbotData = {

  // ── Company Info ──────────────────────────────────
  company: {
    name: "Ravi Engineering Pvt. Ltd.",
    tagline: "Precision Extraction & Distillation, Engineered for Results",
    established: "2000",
    experience: "20+ years",
    plantsInstalled: "120+",
    countriesServed: "15+",
    uptimeRate: "98%",
    location: "Indore, India",
    phone: "+91 XXXXX XXXXX",         // ← Update with real number
    email: "info@raviengineering.com", // ← Update with real email
    website: "www.raviengineering.com",
    description: "Ravi Engineering Pvt. Ltd. designs and manufactures high-efficiency extraction and distillation plants. With 20+ years of experience, we serve pharma, cosmetics, oils, chemicals, and food industries worldwide."
  },

  // ── FAQ Entries ───────────────────────────────────
  // Add as many FAQ entries as you want below.
  // Each entry: { keywords: [...], answer: "..." }
  faqs: [

    // --- General ---
    {
      keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "howdy", "greetings"],
      answer: "Hello! Welcome to Ravi Engineering. I'm here to help you with information about our extraction and distillation plants, services, and more. What would you like to know?"
    },
    {
      keywords: ["who are you", "what are you", "introduce yourself", "your name"],
      answer: "I'm the virtual assistant for Ravi Engineering Pvt. Ltd. I can answer questions about our company, services, plants, industries, and how to get in touch with our team."
    },
    {
      keywords: ["thank", "thanks", "thank you", "great", "awesome", "perfect", "bye", "goodbye"],
      answer: "You're welcome! If you have any more questions or need a quote, feel free to contact us at info@raviengineering.com or call us. We're happy to help!"
    },

    // --- About the Company ---
    {
      keywords: ["about", "who is ravi", "ravi engineering", "company", "founded", "established", "history"],
      answer: "Ravi Engineering Pvt. Ltd. has been designing and manufacturing high-efficiency extraction and distillation plants for 20+ years. We have successfully commissioned 120+ plants across 15+ countries and serve industries ranging from pharma to food processing."
    },
    {
      keywords: ["location", "address", "where are you", "office", "headquarters", "based"],
      answer: "Our main office is located in Indore, India. You can reach us at info@raviengineering.com or call +91 XXXXX XXXXX."
    },
    {
      keywords: ["experience", "years", "expertise", "how long", "old"],
      answer: "Ravi Engineering has over 20 years of experience in designing and commissioning extraction and distillation plants globally, with 120+ plants installed and a 98% average uptime rate."
    },
    {
      keywords: ["contact", "reach", "phone", "call", "email", "enquiry", "inquiry", "get in touch"],
      answer: "You can contact us at:\n📞 Phone: +91 XXXXX XXXXX\n📧 Email: info@raviengineering.com\n🌍 Location: Indore, India\n\nOr visit our Contact page to fill in a quick enquiry form."
    },

    // --- Services / Solutions ---
    {
      keywords: ["solution", "service", "offer", "provide", "product", "plant", "technology", "manufacture"],
      answer: "Ravi Engineering offers a range of extraction and distillation technologies:\n1. Solvent Extraction Plants\n2. Distillation Plants\n3. Molecular Distillation\n4. Essential Oil Extraction\n5. Herbal / Botanical Extraction\n6. Alcohol Distillation\n7. Water Distillation\n8. Custom Engineering Solutions\n\nWould you like details on any specific one?"
    },
    {
      keywords: ["extraction", "solvent extraction", "extract"],
      answer: "Our Solvent Extraction Plants are designed for maximum yield with minimal solvent loss. They are suitable for vegetable oils, herbal extracts, essential oils, and more — built with food-grade and pharma-grade options."
    },
    {
      keywords: ["distillation", "distillation plant"],
      answer: "We manufacture batch and continuous distillation plants for chemicals, solvents, and essential oils. Our designs ensure high purity output and energy efficiency."
    },
    {
      keywords: ["molecular distillation", "short path", "thin film"],
      answer: "Our Molecular (Short-Path) Distillation systems are ideal for heat-sensitive compounds like vitamins, omega-3 fatty acids, and high-value botanicals. They operate under high vacuum for gentle, efficient separation."
    },
    {
      keywords: ["essential oil", "aromatic", "fragrance"],
      answer: "We design steam distillation and cold-press extraction plants specifically for essential oils — lavender, rosemary, eucalyptus, sandalwood, and more. Systems can be built for small batches or large commercial volumes."
    },
    {
      keywords: ["herbal", "botanical", "ayurveda", "phyto"],
      answer: "Our herbal extraction plants use ethanol, water, or CO2 as solvents and are GMP-compliant for pharmaceutical and nutraceutical applications."
    },
    {
      keywords: ["alcohol", "ethanol", "spirit", "brewery"],
      answer: "Our alcohol distillation systems are designed for food, pharma, and industrial ethanol production with continuous operation and high recovery rates."
    },
    {
      keywords: ["custom", "special", "bespoke", "tailor", "specific requirement"],
      answer: "Yes! We specialise in custom-engineered plants built to exact client specifications. Share your requirement with us via the Contact page and our engineers will design a solution for you."
    },

    // --- Industries ---
    {
      keywords: ["industry", "industries", "sector", "which industry", "what industry", "serve"],
      answer: "We serve multiple industries including:\n• Pharmaceuticals\n• Cosmetics & Personal Care\n• Essential Oils & Fragrances\n• Food & Beverage Processing\n• Chemicals & Petrochemicals\n• Nutraceuticals & Herbal\n• Industrial Solvents\nWould you like information on any specific sector?"
    },
    {
      keywords: ["pharma", "pharmaceutical", "medicine", "drug", "gmp", "fda"],
      answer: "Our pharma-grade extraction and distillation plants are designed to meet GMP (Good Manufacturing Practice) standards. We provide complete validation documentation and can customise to FDA or EU compliance requirements."
    },
    {
      keywords: ["cosmetic", "beauty", "personal care", "skincare", "hair"],
      answer: "For the cosmetics industry, we supply precision extraction equipment for botanical actives, carrier oils, and fragrance compounds — ensuring product purity and batch consistency."
    },
    {
      keywords: ["food", "beverage", "fssai", "edible", "cooking oil"],
      answer: "Our food-grade extraction plants comply with FSSAI and international food safety standards. They're used for edible oils, flavours, nutraceuticals, and functional food ingredients."
    },
    {
      keywords: ["chemical", "petrochemical", "solvent recovery", "industrial"],
      answer: "We design solvent recovery and chemical distillation systems for industrial use — including acid purification, glycol recovery, and specialty chemical production."
    },

    // --- Technical / Quality ---
    {
      keywords: ["quality", "standard", "certification", "iso", "compliance"],
      answer: "Ravi Engineering follows ISO quality management standards. Our plants are built from pharmaceutical-grade SS 316 and other approved materials, with full documentation and quality inspection at every stage."
    },
    {
      keywords: ["material", "stainless steel", "ss316", "ss304", "construction"],
      answer: "We use SS 304 and SS 316 (pharmaceutical grade) stainless steel for construction. Other materials like Hastelloy or glass-lined vessels are available on request."
    },
    {
      keywords: ["capacity", "size", "scale", "how big", "volume"],
      answer: "Our plants are available from small pilot-scale lab units (1–5 litres) up to large commercial-scale systems (10,000+ litres per batch or continuous). Tell us your required capacity and we'll recommend the right configuration."
    },
    {
      keywords: ["installation", "commission", "setup", "install", "erect"],
      answer: "Yes, we offer complete turnkey solutions including design, manufacturing, supply, installation, and commissioning at your site — with our engineers present throughout the process."
    },
    {
      keywords: ["maintenance", "service", "spare", "amc", "annual"],
      answer: "We provide after-sales service, spare parts supply, and Annual Maintenance Contracts (AMC) to ensure your plant runs at peak efficiency year-round."
    },
    {
      keywords: ["delivery", "lead time", "time", "how long to deliver", "when"],
      answer: "Delivery timelines depend on plant size and complexity. Typically:\n• Small/pilot plants: 4–8 weeks\n• Medium plants: 8–16 weeks\n• Large/custom plants: 16–24 weeks\nContact us for an exact schedule for your project."
    },
    {
      keywords: ["warranty", "guarantee", "defect"],
      answer: "We provide a manufacturer's warranty on all our plants. Warranty period and terms vary by model — contact us for specifics on your required plant."
    },
    {
      keywords: ["price", "cost", "rate", "quote", "pricing", "how much"],
      answer: "Pricing depends on the type of plant, capacity, materials, and customisations required. Please contact us at info@raviengineering.com or fill the Contact form with your requirements and we will send you a detailed quotation."
    },

    // --- Projects ---
    {
      keywords: ["project", "case study", "client", "previous work", "reference", "installation"],
      answer: "Ravi Engineering has commissioned 120+ plants across 15+ countries. Our Projects page showcases selected case studies. Would you like to know about a specific application or industry?"
    },

    // --- Export / International ---
    {
      keywords: ["export", "international", "global", "overseas", "foreign", "outside india"],
      answer: "Yes, we export our plants globally! We have clients in Africa, Southeast Asia, Middle East, Europe, and beyond. We handle complete export packaging, documentation, and can arrange on-site commissioning abroad."
    },

    // --- Fallback (must be last!) ---
    {
      keywords: [],  // empty = fallback
      answer: "I'm not sure I understood that. You can ask me about our services, industries, plants, pricing, or how to contact us. Or visit our Contact page to speak directly with an engineer!"
    }
  ]
};

// Export for Node.js (server-side)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = chatbotData;
}
