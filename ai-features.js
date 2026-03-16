/* =========================================================
   Ravi Engineering – Chat Widget (Fully Client-Side)
   No server needed. Works on GitHub Pages & any static host.

   ✏️  TO ADD/EDIT ANSWERS: scroll down to the KNOWLEDGE BASE
       section and update the "faqs" array entries.
   ========================================================= */

// ──────────────────────────────────────────────────────────
//  KNOWLEDGE BASE  ← Edit this section to customise answers
// ──────────────────────────────────────────────────────────
const COMPANY = {
  name:     "Ravi Engineering Pvt. Ltd.",
  phone:    "+91 XXXXX XXXXX",           // ← Update with real number
  email:    "info@raviengineering.com",  // ← Update with real email
  location: "Indore, India"
};

const FAQ_DATA = [

  // ── Greetings ─────────────────────────────────────────
  {
    keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "howdy", "greetings"],
    answer: "Hello! 👋 Welcome to Ravi Engineering. I can help you with information about our extraction & distillation plants, services, industries we serve, pricing, and more. What would you like to know?"
  },
  {
    keywords: ["who are you", "what are you", "introduce yourself", "your name", "are you a bot", "are you ai"],
    answer: "I'm the virtual assistant for Ravi Engineering Pvt. Ltd. I can answer questions about our company, extraction & distillation plants, industries, services, and how to get in touch."
  },
  {
    keywords: ["thank", "thanks", "thank you", "great", "awesome", "perfect", "bye", "goodbye", "ok"],
    answer: "You're welcome! 😊 If you need anything else or would like a quote, contact us at info@raviengineering.com or call +91 XXXXX XXXXX. We're happy to help!"
  },

  // ── About the Company ─────────────────────────────────
  {
    keywords: ["about", "who is ravi", "ravi engineering", "company", "founded", "established", "history", "tell me about"],
    answer: "Ravi Engineering Pvt. Ltd. has 20+ years of expertise in designing and manufacturing high-efficiency extraction and distillation plants. We have commissioned 120+ plants across 15+ countries for industries including pharma, cosmetics, food, and chemicals."
  },
  {
    keywords: ["location", "address", "where are you", "office", "headquarters", "based", "city"],
    answer: "Our main office is located in Indore, India.\n📞 Phone: +91 XXXXX XXXXX\n📧 Email: info@raviengineering.com"
  },
  {
    keywords: ["experience", "years", "expertise", "how long", "old", "since when"],
    answer: "Ravi Engineering has over 20 years of experience in extraction and distillation plant design. We've commissioned 120+ plants globally with a 98% average plant uptime rate."
  },
  {
    keywords: ["contact", "reach", "phone", "call", "email", "enquiry", "inquiry", "get in touch", "talk to"],
    answer: "You can reach us at:\n📞 Phone: +91 XXXXX XXXXX\n📧 Email: info@raviengineering.com\n📍 Location: Indore, India\n\nOr visit our Contact page to submit a quick enquiry form and our team will get back to you shortly."
  },

  // ── Services / Solutions ──────────────────────────────
  {
    keywords: ["solution", "service", "offer", "provide", "product", "plant", "technology", "manufacture", "what do you do", "what do you make"],
    answer: "Ravi Engineering offers a wide range of extraction & distillation technologies:\n\n1. Solvent Extraction Plants\n2. Distillation Plants\n3. Molecular Distillation\n4. Essential Oil Extraction\n5. Herbal / Botanical Extraction\n6. Alcohol Distillation\n7. Water Distillation\n8. Custom Engineering Solutions\n\nWould you like details on any specific technology?"
  },
  {
    keywords: ["solvent extraction", "solvent"],
    answer: "Our Solvent Extraction Plants deliver maximum yield with minimal solvent loss. Suitable for vegetable oils, herbal extracts, essential oils, and more — available in food-grade and pharma-grade configurations."
  },
  {
    keywords: ["distillation", "distillation plant", "batch distillation", "continuous distillation"],
    answer: "We manufacture batch and continuous distillation plants for chemicals, solvents, and essential oils. Our designs ensure high purity output with strong energy efficiency."
  },
  {
    keywords: ["molecular distillation", "short path", "thin film", "high vacuum"],
    answer: "Our Molecular (Short-Path) Distillation systems are ideal for heat-sensitive compounds such as vitamins, omega-3 fatty acids, and high-value botanicals. They operate under high vacuum for gentle, efficient separation."
  },
  {
    keywords: ["essential oil", "aromatic", "fragrance", "steam distillation", "lavender", "eucalyptus"],
    answer: "We design steam distillation and cold-press extraction plants specifically for essential oils — lavender, rosemary, eucalyptus, sandalwood, and more. Available in small batch to large commercial scales."
  },
  {
    keywords: ["herbal", "botanical", "ayurveda", "phyto", "nutraceutical", "herb"],
    answer: "Our herbal extraction plants use ethanol, water, or CO2 as solvents and are GMP-compliant for pharmaceutical and nutraceutical applications."
  },
  {
    keywords: ["alcohol", "ethanol", "spirit", "brewery", "fermentation"],
    answer: "Our alcohol distillation systems are designed for food, pharma, and industrial ethanol production with continuous operation and high recovery rates."
  },
  {
    keywords: ["custom", "special", "bespoke", "tailor", "specific requirement", "unique"],
    answer: "Absolutely! We specialise in custom-engineered plants built to your exact specifications. Share your requirement via the Contact page and our engineers will design the perfect solution for you."
  },

  // ── Industries ────────────────────────────────────────
  {
    keywords: ["industry", "industries", "sector", "which industry", "what industry", "serve", "client"],
    answer: "We serve multiple industries:\n\n• Pharmaceuticals\n• Cosmetics & Personal Care\n• Essential Oils & Fragrances\n• Food & Beverage Processing\n• Chemicals & Petrochemicals\n• Nutraceuticals & Herbal\n• Industrial Solvents\n\nWould you like information on how we serve a specific sector?"
  },
  {
    keywords: ["pharma", "pharmaceutical", "medicine", "drug", "gmp", "fda", "usp"],
    answer: "Our pharma-grade extraction and distillation plants are designed to meet GMP (Good Manufacturing Practice) standards. We provide complete validation documentation and can customise to FDA or EU compliance requirements."
  },
  {
    keywords: ["cosmetic", "beauty", "personal care", "skincare", "hair care"],
    answer: "For the cosmetics industry, we supply precision extraction equipment for botanical actives, carrier oils, and fragrance compounds — ensuring product purity and batch consistency for every run."
  },
  {
    keywords: ["food", "beverage", "fssai", "edible", "cooking oil", "flavour"],
    answer: "Our food-grade extraction plants comply with FSSAI and international food safety standards. Used for edible oils, flavours, nutraceuticals, and functional food ingredients."
  },
  {
    keywords: ["chemical", "petrochemical", "solvent recovery", "industrial chemical"],
    answer: "We design solvent recovery and chemical distillation systems for industrial use — including acid purification, glycol recovery, and specialty chemical production."
  },

  // ── Technical / Quality ───────────────────────────────
  {
    keywords: ["quality", "standard", "certification", "iso", "compliance", "certified"],
    answer: "Ravi Engineering follows ISO quality management standards. Our plants are built from pharmaceutical-grade SS 316 and other approved materials, with full documentation and quality inspection at every production stage."
  },
  {
    keywords: ["material", "stainless steel", "ss316", "ss304", "hastelloy", "glass lined"],
    answer: "We use SS 304 and SS 316 (pharmaceutical grade) stainless steel for construction. Hastelloy, titanium, and glass-lined vessels are also available on request for corrosive applications."
  },
  {
    keywords: ["capacity", "size", "scale", "how big", "volume", "litre", "liter", "tonne"],
    answer: "Our plants range from small pilot-scale lab units (1–5 litres) to large commercial-scale systems (10,000+ litres per batch or continuous flow). Tell us your required capacity and we'll recommend the right configuration."
  },
  {
    keywords: ["installation", "commission", "setup", "install", "erect", "turnkey"],
    answer: "Yes! We offer complete turnkey solutions — design, manufacturing, supply, installation, and on-site commissioning. Our engineers are present throughout the entire process."
  },
  {
    keywords: ["maintenance", "service", "spare", "amc", "annual maintenance", "after sales"],
    answer: "We provide after-sales service, spare parts supply, and Annual Maintenance Contracts (AMC) to ensure your plant runs at peak efficiency year-round."
  },
  {
    keywords: ["delivery", "lead time", "time", "how long to deliver", "when", "dispatch"],
    answer: "Typical delivery timelines:\n• Small/pilot plants: 4–8 weeks\n• Medium plants: 8–16 weeks\n• Large/custom plants: 16–24 weeks\n\nContact us for an exact schedule for your specific project."
  },
  {
    keywords: ["warranty", "guarantee", "defect"],
    answer: "We provide a manufacturer's warranty on all our plants. Warranty period and terms vary by model — contact us with your plant requirement for specifics."
  },
  {
    keywords: ["price", "cost", "rate", "quote", "pricing", "how much", "budget", "cost of"],
    answer: "Pricing depends on the plant type, capacity, materials, and customisations required. Please contact us at info@raviengineering.com or fill in our Contact form with your requirements, and we'll send you a detailed quotation within 24 hours."
  },

  // ── Projects & Track Record ───────────────────────────
  {
    keywords: ["project", "case study", "previous work", "reference", "track record", "example"],
    answer: "We have commissioned 120+ plants across 15+ countries. Visit our Projects page to see selected case studies with real results. Want to know about a specific application or industry?"
  },

  // ── Export / International ────────────────────────────
  {
    keywords: ["export", "international", "global", "overseas", "foreign", "outside india", "abroad"],
    answer: "Yes, we export globally! We have clients in Africa, Southeast Asia, the Middle East, Europe, and more. We handle export packaging, documentation, and offer on-site commissioning internationally."
  },

  // ── Fallback (MUST be last — empty keywords) ──────────
  {
    keywords: [],
    answer: "I didn't quite catch that. 🤔 You can ask me about our services, industries, plant types, pricing, delivery time, or how to contact us. Or visit our Contact page to speak directly with an engineer!"
  }
];

// ──────────────────────────────────────────────────────────
//  MATCHING ENGINE (no changes needed below this line)
// ──────────────────────────────────────────────────────────
function getBotReply(userMessage) {
  const msg = userMessage.toLowerCase().trim();

  for (const faq of FAQ_DATA) {
    if (!faq.keywords || faq.keywords.length === 0) continue;
    for (const keyword of faq.keywords) {
      if (msg.includes(keyword.toLowerCase())) {
        return faq.answer;
      }
    }
  }

  // Fallback
  const fallback = FAQ_DATA.find(f => !f.keywords || f.keywords.length === 0);
  return fallback ? fallback.answer : "Please contact us at " + COMPANY.email + " for assistance.";
}

// ──────────────────────────────────────────────────────────
//  CHAT WIDGET UI
// ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    initChatWidget();
});

function initChatWidget() {
    document.body.insertAdjacentHTML('beforeend', `
        <div id="ai-chat-widget">
            <button id="ai-chat-btn" aria-label="Open Chat Assistant" title="Chat with us">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 5.97 2 10.86c0 2.76 1.48 5.2 3.8 6.78V22l3.48-1.93c.87.23 1.78.35 2.72.35 5.52 0 10-3.97 10-8.86S17.52 2 12 2zm0 16.54c-.8 0-1.58-.1-2.33-.29l-2.45 1.36v-2.39c-2.04-1.32-3.36-3.41-3.36-5.82 0-4.08 3.65-7.4 8.14-7.4s8.14 3.32 8.14 7.4-3.65 7.4-8.14 7.4z"/></svg>
                <span id="ai-chat-badge"></span>
            </button>

            <div id="ai-chat-panel">
                <div class="ai-chat-header">
                    <div class="ai-chat-header-title">
                        <svg viewBox="0 0 24 24"><path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2zM5 14a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5H5z"/></svg>
                        Ravi Engineering Assistant
                    </div>
                    <button class="ai-chat-close" id="ai-chat-close" aria-label="Close">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>

                <div id="ai-chat-messages">
                    <div class="ai-msg ai-msg-ai">Hello! 👋 Welcome to Ravi Engineering. Ask me anything about our extraction &amp; distillation plants, services, industries, or how to contact us.</div>
                </div>

                <div class="ai-typing" id="ai-typing-indicator">
                    <div class="ai-dot"></div>
                    <div class="ai-dot"></div>
                    <div class="ai-dot"></div>
                </div>

                <div class="ai-chat-input-area">
                    <input type="text" id="ai-chat-input" placeholder="Ask a question..." autocomplete="off">
                    <button id="ai-chat-submit" aria-label="Send">
                        <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                    </button>
                </div>

                <div class="ai-chat-suggestions">
                    <button class="ai-sugg" data-msg="What services do you offer?">Our Services</button>
                    <button class="ai-sugg" data-msg="Which industries do you serve?">Industries</button>
                    <button class="ai-sugg" data-msg="How can I contact you?">Contact Us</button>
                    <button class="ai-sugg" data-msg="How much does a plant cost?">Get a Quote</button>
                </div>
            </div>
        </div>
    `);

    const chatBtn         = document.getElementById('ai-chat-btn');
    const badge           = document.getElementById('ai-chat-badge');
    const chatPanel       = document.getElementById('ai-chat-panel');
    const closeBtn        = document.getElementById('ai-chat-close');
    const messagesDiv     = document.getElementById('ai-chat-messages');
    const chatInput       = document.getElementById('ai-chat-input');
    const submitBtn       = document.getElementById('ai-chat-submit');
    const typingIndicator = document.getElementById('ai-typing-indicator');
    const suggBtns        = document.querySelectorAll('.ai-sugg');

    let isOpen     = false;
    let badgeShown = false;

    // Nudge badge after 5 seconds
    setTimeout(() => {
        if (!isOpen && !badgeShown) {
            badge.textContent = '1';
            badge.style.display = 'flex';
            badgeShown = true;
        }
    }, 5000);

    chatBtn.addEventListener('click', () => toggleChat(true));
    closeBtn.addEventListener('click', () => toggleChat(false));

    suggBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!isOpen) toggleChat(true);
            chatInput.value = btn.dataset.msg;
            handleSend();
        });
    });

    chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSend(); });
    submitBtn.addEventListener('click', handleSend);

    function toggleChat(open) {
        isOpen = open;
        if (open) {
            chatPanel.classList.add('active');
            badge.style.display = 'none';
            chatInput.focus();
        } else {
            chatPanel.classList.remove('active');
        }
    }

    function appendMessage(role, text) {
        const div = document.createElement('div');
        div.className = `ai-msg ai-msg-${role}`;
        div.innerHTML = text.replace(/\n/g, '<br>');
        messagesDiv.appendChild(div);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function handleSend() {
        const text = chatInput.value.trim();
        if (!text) return;

        appendMessage('user', text);
        chatInput.value = '';
        chatInput.disabled = true;
        submitBtn.disabled = true;

        // Show typing indicator for a natural feel (300–600ms)
        typingIndicator.classList.add('active');
        messagesDiv.appendChild(typingIndicator);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        const delay = 300 + Math.random() * 300;
        setTimeout(() => {
            typingIndicator.classList.remove('active');
            const reply = getBotReply(text);
            appendMessage('ai', reply);
            chatInput.disabled = false;
            submitBtn.disabled = false;
            chatInput.focus();
        }, delay);
    }
}
