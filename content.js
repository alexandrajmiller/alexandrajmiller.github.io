// ============================================================
//  KINETIC ZENERGY — SITE CONTENT
//  This is the ONLY file you need to edit.
//  Never touch index.html.
//
//  HOW TO EDIT:
//  - Change the text between the quotes " "
//  - Leave the variable names (left side) exactly as they are
//  - To leave something blank, use: ""
//  - Save the file, push to GitHub, site updates in ~1 min
// ============================================================

var CONTENT = {

  // ============================================================
  //  NAV BAR — the name that appears in the center top
  // ============================================================
  nav_name: "ALEXANDRA MILLER, PhD",


  // ============================================================
  //  HERO SECTION — the big full-screen photo at the top
  //  hero_title    = the BIG bold text (e.g. "Energy, engineered.")
  //  hero_subtitle = the smaller sentence below it
  // ============================================================
  hero_eyebrow: "",
  hero_title:    "Energy, engineered.",
  hero_subtitle: "I bridge the analytical mind and the body's intelligence to help driven, logical people move through life with less friction and more flow.",


  // ============================================================
  //  ABOUT SECTION — the photo + text section
  //  about_label = tiny uppercase label above the heading (or leave "")
  //  about_name  = the BIG heading (e.g. "Harmonizing Logic and Intuition")
  //  about_p1/p2/p3 = paragraphs of body text (leave p3 as "" if not needed)
  //  about_tags  = the little pill tags — leave as [] if you don't want any
  // ============================================================
  about_label: "",
  about_name:  "Harmonizing Logic and Intuition",
  about_p1:    "I'm an engineer who does energy work. My background is in mechanical engineering — I spent years developing assistive technology. At some point I realized the most sophisticated system I could work on was the human body.",
  about_p2:    "I bridge the analytical mind and the body's intelligence. I work with driven, logical people — and I speak their language.",
  about_p3:    "",
  about_tags:  [],


  // ============================================================
  //  SERVICES / METHODS SECTION — the four cards
  //  services_title = the BIG heading above the cards
  //  card1–4 title  = the heading on each card
  //  card1–4 desc   = the description on each card
  //  (card3 is commented out in the HTML until Qi Gong is ready)
  // ============================================================
  services_title: "Four ways in.",

  card1_title: "Energy Sessions",
  card1_desc:  "Shift what's stuck in the body. For people who feel off and conventional approaches aren't getting to the root.",

  card2_title: "1:1 Coaching",
  card2_desc:  "Build what comes next. For people who want clearer thinking, better decisions, and less resistance in daily life.",

  card3_title: "Qi Gong Instruction",
  card3_desc:  "Learn to regulate your own energy. A daily practice for committed clients — self-directed, somatic, long-term.",

  card4_title: "Energy Sessions for Your Pet",
  card4_desc:  "Pets absorb and reflect the energy of their environment. When they're off, it's often a signal. This addresses it directly.",


  // ============================================================
  //  VIDEO SECTION — Dawn Hoang session video
  //  video_title = the BIG heading above the video
  // ============================================================
  video_title: "What People Experience",


  // ============================================================
  //  VOICES / TESTIMONIALS SECTION
  //  voices_title = the BIG heading above the quotes
  //  To add/edit a quote: change the text inside the quotes
  //  To add a new person: copy one block and paste it with a comma
  // ============================================================
  voices_title: "What People Say",

  testimonials: [
    {
      quote:   "Within weeks after our session she slowly regained her strength and is now back home. I truly believe these sessions played a major role. I've also learned so much about tapping into my own energy.",
      name:    "Tupa",
      role:    "Healing session for her grandmother",
      initial: "T"
    },
    {
      quote:   "The grounding technique makes me feel present faster than meditation. It works not only on grounding myself, but on grounding my mission and goal. It aligns with my instincts so smoothly.",
      name:    "Michael",
      role:    "Performance · Clarity",
      initial: "M"
    },
    {
      quote:   "I was skeptical at first, but the results were undeniable. My thinking became clearer, my energy stabilized, and I started making decisions that actually felt right — not just logical.",
      name:    "R.K.",
      role:    "Engineering researcher",
      initial: "R"
    }
  ],


  // ============================================================
  //  FAQ SECTION
  //  faq_title = the BIG heading above the questions
  //  To edit a question/answer: change the text inside the quotes
  //  To add a new one: copy a block and paste it with a comma
  // ============================================================
  faq_title: "Common Questions",

  faqs: [
    {
      q: "Who is Alexandra J. Miller, PhD and what is Kinetic Zenergy?",
      a: "Alexandra is a personal energy coach and healer. Kinetic Zenergy is her signature method — designed for high-performing professionals, creatives, and leaders who feel the toll of chronic overload. Remote sessions available worldwide."
    },
    {
      q: "What is the difference between coaching and healing sessions?",
      a: "Personal Energy Coaching is a structured 10-session programme focused on understanding your energy patterns and building practical tools for sustained performance. Energetic Healing is session-based work that directly addresses energy blocks, physical discomfort, or emotional depletion. Many clients experience both as complementary."
    },
    {
      q: "Do sessions need to be done in person?",
      a: "No — all services are available fully remotely. Clients across the globe report the same depth of experience as in-person sessions."
    },
    {
      q: "How quickly will I notice results?",
      a: "Many clients report noticeable shifts within 24–48 hours of their first session — improved sleep, reduced pain, greater mental clarity, or a sense of lightness they hadn't felt in months. Deep, lasting transformation builds across the full programme."
    },
    {
      q: "Is energetic healing compatible with conventional medical care?",
      a: "Yes — energetic healing is a complementary modality and works alongside conventional medical treatment, not in place of it. Always consult your physician for any medical condition."
    },
    {
      q: "How does pet energy healing work?",
      a: "Pet energy healing applies the same energetic principles used in human sessions to support the wellbeing of pets. Sessions can be conducted remotely. Alex has worked with cats, dogs, and horses experiencing illness, anxiety, or behavioural changes."
    }
  ],


  // ============================================================
  //  BOOKING SECTION
  //  booking_title    = the BIG heading above the pricing cards
  //  discovery_call_* = the "not sure where to start" banner
  //
  //  FOR EACH SESSION:
  //  price       = the number only (e.g. "99")
  //  was         = strikethrough price, leave "" if no discount
  //  note        = small line under price (duration, format)
  //  plan        = payment plan note, leave "" if none
  //  for         = who it's for
  //  includes    = bullet list of what's included
  //  btn         = button text
  //  stripe_link = the payment URL — REPLACE WITH SQUARE LINK WHEN READY
  //  featured    = true makes it highlighted, false is normal
  // ============================================================
  booking_title: "Choose your path",

  discovery_call_text: "Not sure where to start?",
  discovery_call_sub:  "Book a free 30-min call with Alex.",
  discovery_call_btn:  "Book Free Call →",

  human_sessions: [
    {
      type:        "Single Session",
      title:       "One Session. Real Shift.",
      price:       "99",
      was:         "",
      note:        "90 minutes · Remote",
      plan:        "Your fee is credited toward any package",
      for:         "A first experience, one clear issue, or a meaningful gift.",
      includes:    [
        "Identify exactly what is blocking your energy — and how to eliminate it",
        "A personal practice built for your body, not a generic protocol",
        "Session notes within 48 hrs",
        "7-day follow-up window"
      ],
      btn:         "Reserve Your Session →",
      stripe_link: "https://buy.stripe.com/bJe3co5yx3T1dlz6PI1ck01",
      featured:    false,
      badge:       ""
    },
    {
      type:        "3-Session Journey",
      title:       "Three Sessions. One Clear Thread.",
      price:       "247",
      was:         "$297",
      note:        "Save $50 · ~$82/session · 90 min each",
      plan:        "",
      for:         "Clearing a defined block, resetting a pattern, or preparing for a transition.",
      includes:    [
        "Three sessions that build on each other",
        "WhatsApp check-ins between sessions"
      ],
      btn:         "Begin the Journey →",
      stripe_link: "https://buy.stripe.com/14AfZae53dtBa9n5LE1ck02",
      featured:    false,
      badge:       ""
    },
    {
      type:        "6-Session Container",
      title:       "Six Sessions. Full Transformation.",
      price:       "447",
      was:         "$594",
      note:        "Save $147 · ~$74/session · 90 min each",
      plan:        "or 2 monthly payments of $224",
      for:         "Most clients choose this. It's where the real work happens.",
      includes:    [
        "Understand your energy system at a level that changes everything",
        "Break through the invisible ceiling — and stay through",
        "Daily practices built into your real life",
        "WhatsApp support between sessions",
        "Full recordings + integration notes after every session"
      ],
      btn:         "Commit to the Journey →",
      stripe_link: "https://buy.stripe.com/14AcMY6CBahpftH8XQ1ck03",
      featured:    true,
      badge:       ""
    }
  ],

  pet_sessions: [
    {
      type:        "Single Session",
      title:       "One Session. For Your Pet.",
      price:       "79",
      was:         "",
      note:        "60 minutes · Remote",
      plan:        "Your fee is credited toward any package",
      for:         "A first experience, one acute issue, or to see how your pet responds.",
      includes:    [
        "Direct energetic assessment",
        "Identify and clear what is affecting your pet",
        "Session notes + home guidance",
        "Effective for anxiety, illness, and recovery"
      ],
      btn:         "Reserve a Session →",
      stripe_link: "https://buy.stripe.com/9B628kgdbexFdlzfme1ck04",
      featured:    false,
      badge:       ""
    },
    {
      type:        "3-Session Journey",
      title:       "Three Sessions. Sustained Shifts.",
      price:       "210",
      was:         "",
      note:        "~$70/session · 60 min each · Remote",
      plan:        "Your fee is credited toward the 6-Session Container",
      for:         "Chronic issues, behavioural changes, or ongoing anxiety.",
      includes:    [
        "Three sessions that build on each other",
        "Progress notes after each session",
        "WhatsApp check-ins between sessions"
      ],
      btn:         "Begin the Journey →",
      stripe_link: "https://buy.stripe.com/aFa3co3qpfBJ95jca21ck05",
      featured:    false,
      badge:       ""
    },
    {
      type:        "6-Session Container",
      title:       "Six Sessions. Real Transformation.",
      price:       "390",
      was:         "",
      note:        "~$65/session · 60 min each · Remote",
      plan:        "or 2 monthly payments",
      for:         "Long-standing conditions, full recovery support, or deep behavioral work.",
      includes:    [
        "Six weekly remote sessions — building, consistent work",
        "Progress notes after every session",
        "WhatsApp support throughout",
        "Home guidance tailored to your pet"
      ],
      btn:         "Start the 6-Session Container →",
      stripe_link: "https://buy.stripe.com/7sY4gs4ut89hepDde61ck06",
      featured:    true,
      badge:       ""
    }
  ],

  qigong_sessions: [
    {
      type:        "Monthly Taster",
      title:       "Meet the Practice. Meet the Group.",
      price:       "19",
      was:         "",
      note:        "45 min · Monthly · Monday · Zoom",
      plan:        "Your fee is credited toward the 4-Week Course",
      for:         "Anyone curious about Qi Gong, or wanting to experience Alex's teaching before joining a course.",
      includes:    [
        "Guided 50-min Qi Gong practice led by Alex",
        "Q&A and group introductions after the session",
        "No prior experience needed"
      ],
      btn:         "Reserve Your Spot →",
      stripe_link: "https://calendar.app.google/Si1Zc6rGKZ7mLRDR8",
      featured:    false,
      badge:       ""
    },
    {
      type:        "4-Week Program",
      title:       "Four Weeks.",
      price:       "97",
      was:         "",
      note:        "4 Monday sessions · 60 min · Small group · Zoom",
      plan:        "Priority access for taster session alumni",
      for:         "Next cohort dates coming soon. Join the waitlist to be first to know.",
      includes:    [
        "Week 1 — Foundation: understanding your energy body",
        "Week 2 — Flow: breath, movement, and circulation",
        "Week 3 — Integration: building your personal practice",
        "Week 4 — Daily Practice: making it yours for life",
        "Recordings + practice notes after every session"
      ],
      btn:         "Join the Waitlist →",
      stripe_link: "mailto:kinetic7energy@gmail.com?subject=Qi%20Gong%204-Week%20Waitlist",
      featured:    true,
      badge:       ""
    }
  ],


  // ============================================================
  //  CTA SECTION — the big olive green banner at the bottom
  //  cta_title = the BIG heading
  //  cta_btn   = the button text
  // ============================================================
  cta_title: "The engineer's path to ease.",
  cta_btn:   "Book a Discovery Call",


  // ============================================================
  //  FOOTER
  //  footer_copy  = the copyright line
  //  footer_email = your contact email
  // ============================================================
  footer_copy:  "© 2026 Alexandra J. Miller, PhD",
  footer_email: "kinetic7energy@gmail.com",


  // ============================================================
  //  LINKS — change these and they update everywhere on the site
  //  discovery_call = your booking/calendar link
  //  email          = your contact email
  // ============================================================
  links: {
    discovery_call: "https://calendar.app.google/Si1Zc6rGKZ7mLRDR8",
    email:          "kinetic7energy@gmail.com"
  }

};
// ============================================================
//  END OF CONTENT — do not edit below this line
// ============================================================
