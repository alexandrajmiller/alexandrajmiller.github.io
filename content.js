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
  nav_name: "ALEXANDRA J. MILLER, PhD",


  // ============================================================
  //  HERO SECTION — the big full-screen photo at the top
  //  hero_title    = the BIG bold text (e.g. "Energy, engineered.")
  //  hero_subtitle = the smaller sentence below it
  // ============================================================
  hero_title:    "Energy, engineered.",
 


  // ============================================================
  //  ABOUT SECTION — the photo + text section
  //  about_label = tiny uppercase label above the heading (or leave "")
  //  about_name  = the BIG heading (e.g. "Harmonizing Logic and Intuition")
  //  about_p1/p2/p3 = paragraphs of body text (leave p3 as "" if not needed)
  //  about_tags  = the little pill tags — leave as [] if you don't want any
  // ============================================================
  about_label: "",
  about_name:  "About Me",
  about_p1:    "My mission is to help people feel fully alive in every aspect of their life. As an engineer, I wanted to achieve this through building assistive devices like prosthetic limbs. However, throughout my time in academia I saw my colleagues give so much — and burn out. I realized the biggest impact I could have on society was to help the engineer, instead of doing the engineering.",
  about_p2:    "We were taught every productivity system, every technical tool, every optimization framework. But the most advanced technology available to us — our own body, our mind, the power of our emotions — was not part of the curriculum.",
  about_p3:    "So now I help people work at the level Einstein and Tesla understood to be the most fundamental — energy — and build a life that matches their full potential.",
  about_tags:  [],


  // ============================================================
  //  SERVICES / METHODS SECTION — the four cards
  //  services_title = the BIG heading above the cards
  //  card1–4 title  = the heading on each card
  //  card1–4 desc   = the description on each card
  //  (card3 is commented out in the HTML until Qi Gong is ready)
  // ============================================================
  services_title: "Methods",

  card1_title: "Energy Sessions",
  card1_desc:  "These sessions support your body and mind which are governed by your energy system. They work to restore balance, clarity, and alignment.",

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
  video_title: "Client Experiences",


  // ============================================================
  //  VOICES / TESTIMONIALS SECTION
  //  voices_title = the BIG heading above the quotes
  //  To add/edit a quote: change the text inside the quotes
  //  To add a new person: copy one block and paste it with a comma
  // ============================================================
  /* voices_title: "Client Experiences", */

  testimonials: [
    {
      quote:   "Alex, I cannot thank you enough for the wonderful energy sessions. I’m especially grateful for the session we did focusing on my grandma. We weren’t sure if she was going to make it. But within a couple of weeks after our session she slowly regained her strength and now she’s out of the hospital back at home with my family. I truly believe these sessions have played a major role in helping her regain her strength. And I’ve also learned so much about tapping in and tuning into my own energy & intuition. Words can’t express how this has touched and changed my life. Thank you! ",
      name:    "Tupa",
      role:    "Energy session for her grandmother",
      initial: ""
    },
    {
      quote:   "The grounding technique makes me feel present faster than meditation. It works not only on grounding myself, but on grounding my mission and goal. It aligns with my instincts so smoothly.",
      name:    "Michael",
      role:    "Post Doctoral Researcher - Johns Hopkins University",
      initial: ""
    },
    {
      quote:   "When I was sick, Alex did a few healing sessions on me and the next morning after the first one, I woke up with FAR less congestion than even the day before. I was able to breathe easier. It was a remarkable difference in only one night!",
      name:    "Skyler",
      role:    "Personal Assistant",
      initial: ""
    },
        {
      quote:   "My healing session with Alex was powerful and transformative! She is a compassionate, caring, and connected practitioner. Alex provided a focused, empathetic space for miraculous healing, growth, and change to be possible. I highly recommend her…thank you, Alex! ",
      name:    "Dave",
      role:    "Counselor",
      initial: ""
    }
  ],


  // ============================================================
  //  Background SECTION
  //  faq_title = the BIG heading above the questions
  //  To edit a question/answer: change the text inside the quotes
  //  To add a new one: copy a block and paste it with a comma
  // ============================================================
  faq_title: "Background",

  faqs: [
    {
      q: "What is the difference between coaching and energy sessions?",
      a: "Personal Energy Coaching is a structured 10-session programme focused on understanding your energy patterns and building practical tools for sustained performance. Energy sessions directly clear energetic blocks - physical, mental, and/or emotional."
    },
    {
      q: "Do sessions need to be done in person?",
      a: "No — all sessions are remote."
    },
    {
      q: "How quickly will I notice results?",
      a: "Many people experience noticeable shifts within 24–72 hours of their first session — improved sleep, reduced pain, and/or greater mental clarity. Lasting transformation is developed during the full program."
    },
    
    {
      q: "How do pet energy sessions work?",
      a: "These apply the same energetic principles used for people to support the well-being of pets. Sessions can be conducted remotely. I have worked with cats, dogs, and horses experiencing illness, anxiety, or behavioural challenges."
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
  booking_title: "Sessions",

  discovery_call_text: "Not sure where to start?",
  /* discovery_call_sub:  "Book a free 30-min call with Alex.", */
  discovery_call_btn:  "Book Free Discovery Call →",

  human_sessions: [
    {
      type:        "Single Session",
      title:       "",
      price:       "99",
      was:         "",
      note:        "",
      includes:    [
        "",
              ],
      btn:         "Book",
      stripe_link: "https://buy.stripe.com/bJe3co5yx3T1dlz6PI1ck01",
      featured:    false,
      badge:       ""
    },
    {
      type:        "3-Session Journey",
      title:       "",
      price:       "247",
      was:         "",
      note:        "",
      plan:        "",
      includes:    [
        ""
      ],
      btn:         "Book",
      stripe_link: "https://buy.stripe.com/14AfZae53dtBa9n5LE1ck02",
      featured:    false,
      badge:       ""
    },
    {
      type:        "6-Session Container",
      title:       "",
      price:       "",
      was:         "",
      note:        "",
      plan:        "",
      includes:    [
        ""
      ],
      btn:         "Book",
      stripe_link: "https://buy.stripe.com/14AcMY6CBahpftH8XQ1ck03",
      featured:    true,
      badge:       ""
    }
  ],

  pet_sessions: [
    {
      type:        "Single Session",
      title:       "",
      price:       "79",
      was:         "",
      note:        "",
      for:         "",
      includes:    [
        ""
      ],
      btn:         "Book",
      stripe_link: "https://buy.stripe.com/9B628kgdbexFdlzfme1ck04",
      featured:    false,
      badge:       ""
    },
    {
      type:        "3-Session Journey",
      title:       "",
      price:       "210",
      was:         "",
      note:        "",
      for:         "",
      includes:    [
        ""
      ],
      btn:         "Book",
      stripe_link: "https://buy.stripe.com/aFa3co3qpfBJ95jca21ck05",
      featured:    false,
      badge:       ""
    },
    {
      type:        "6-Session Container",
      title:       "",
      price:       "390",
      was:         "",
      note:        "",
      plan:        "",
      for:         "",
      includes:    [
        ""
      ],
      btn:         "Book",
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

/*
  // ============================================================
  //  CTA SECTION — the big olive green banner at the bottom
  //  cta_title = the BIG heading
  //  cta_btn   = the button text
  // ============================================================
  cta_title: "The engineer's path to ease.",
  cta_btn:   "Book a Discovery Call",
*/

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
