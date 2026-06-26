export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  blurb: string;
  contribution: string[];
  tags: string[];
  images: {
    src: string;
    alt: string;
    ratio: "portrait" | "square" | "wide" | "tall";
    type?: "image" | "video";
  }[];
  // "split" => landscape media stacked on one side, portrait media on the other.
  mediaLayout?: "split";
  accentNote?: string;
};

export const projects: Project[] = [
  {
    slug: "koreyaah",
    title: "Koreyaah",
    client: "Koreyaah Korean Street Food",
    category: "Editing",
    year: "2026",
    blurb:
      "Created promotional posters, ad creatives, and launch material for restaurant campaigns, including new branch openings, in-store promotional pamphlets, and visual communication for brand expansion.",
    contribution: [
      "Built the visual language: kinetic poster type, signature red, and the brand mask used across every drop.",
      "Art-directed product photography for ramen, korn dogs, and boba to feel premium yet street.",
      "Produced in-store promotional material and visual assets for new branch opening campaigns.",
    ],
    tags: ["Visual Language", "Art Direction", "Poster Design", "Social"],
    images: [
      { src: "/work/koreyaah 1.png", alt: "Koreyaah spicy ramen poster", ratio: "tall" },
      { src: "/work/koreyaah 3.png", alt: "Koreyaah korn dog promotional poster", ratio: "tall" },
      { src: "/work/koreyaah 6.png", alt: "Koreyaah dumplings campaign poster", ratio: "tall" },
      { src: "/work/koreyaah 5.mp4", alt: "Koreyaah food campaign reel", ratio: "portrait", type: "video" },
    ],
  },
  {
    slug: "joonus-sait",
    title: "Joonus Sait",
    client: "Joonus Sait",
    category: "Content Strategy",
    year: "2026",
    blurb:
      "Built seasonal content strategies for winter wear targeting international students, travellers, and pilgrimage-based audiences, combining destination-based styling, weather-led storytelling, and travel-focused fashion marketing.",
    contribution: [
      "Designed flat-lay capsule wardrobes that pair label pieces with destination styling context.",
      "Wrote and laid out carousel content built to save and share, not just scroll past.",
      "Held a consistent editorial register across drops so the feed reads as one story.",
    ],
    tags: ["Content Strategy", "Styling", "Carousel Design", "Travel Fashion"],
    images: [
      { src: "/work/joonus 1.png", alt: "Joonus Sait fashion forecast carousel", ratio: "portrait" },
      { src: "/work/joonus 4.png", alt: "Joonus Sait monsoon campaign", ratio: "portrait" },
      { src: "/work/js extra - other creatives.png", alt: "Joonus Sait why merino wool carousel", ratio: "portrait" },
    ],
  },
  {
    slug: "aroma-shimmers",
    title: "Aroma Shimmers",
    client: "Aroma Shimmers",
    category: "Influencer Marketing",
    year: "2025",
    blurb:
      "Created influencer-led fragrance discovery campaigns focused on perfume notes, product education, and audience engagement through interactive posts, public conversations, and luxury retail storytelling.",
    contribution: [
      "Developed influencer briefs and content frameworks around fragrance notes and product education.",
      "Drove audience engagement through interactive posts and public fragrance discovery conversations.",
      "Produced luxury retail storytelling across bags, perfume notes, and vox pop content formats.",
    ],
    tags: ["Influencer Marketing", "Fragrance Education", "Content Strategy", "Luxury Retail"],
    images: [
      { src: "/work/aroma 5.jpeg", alt: "Aroma Shimmers art of layering campaign", ratio: "portrait" },
      { src: "/work/aroma 4.png", alt: "Aroma Shimmers discount offer creative", ratio: "square" },
      { src: "/work/aroma 1.mp4", alt: "Aroma Shimmers fragrance discovery reel", ratio: "portrait", type: "video" },
    ],
  },
  {
    slug: "stylism",
    title: "Stylism",
    client: "Stylism Footwear",
    category: "Shoot Planning",
    year: "2025",
    blurb:
      "Planned and executed product-focused shoots for footwear and accessories, emphasizing composition, product detailing, material textures, and luxury retail presentation.",
    contribution: [
      "Planned shoot formats, mood boards, and shot lists for shoes, bags, belts, and loafers.",
      "Directed texture-led product compositions emphasising material quality and retail presentation.",
      "Balanced lifestyle and studio frames to widen the brand's visual range.",
    ],
    tags: ["Shoot Planning", "Art Direction", "Product Content", "Footwear"],
    images: [
      { src: "/work/stylism 5.jpeg", alt: "Stylism leather briefcase product shot", ratio: "portrait" },
      { src: "/work/stylism 4.png", alt: "Stylism leather loafers campaign", ratio: "wide" },
      { src: "/work/stylism 3.mp4", alt: "Stylism footwear campaign reel", ratio: "portrait", type: "video" },
    ],
  },
  {
    slug: "hermitage",
    title: "Hermitage",
    client: "Hermitage",
    category: "Production",
    year: "2026",
    blurb:
      "Handled shoots, videography, photography, and event management for Hermitage, focusing on visual storytelling, on-ground execution, and premium brand documentation.",
    contribution: [
      "Led end-to-end shoot production and on-ground execution across brand events.",
      "Directed videography and photography to capture premium brand documentation.",
      "Managed event coverage and visual storytelling from planning to final delivery.",
    ],
    tags: ["Shoot Production", "Videography", "Photography", "Event Management", "Brand Coverage"],
    mediaLayout: "split",
    images: [
      { src: "/work/hermitage 1.mp4", alt: "Hermitage event coverage reel", ratio: "wide", type: "video" },
      { src: "/work/hermitage 3.jpeg", alt: "Hermitage dining experience still", ratio: "wide" },
      { src: "/work/hermitage 2.mp4", alt: "Hermitage brand documentation reel", ratio: "portrait", type: "video" },
    ],
  },
];

export const whatIDo = [
  { title: "Brand Campaigns", body: "End-to-end campaign moments that turn products into cultural events." },
  { title: "Content Strategy", body: "Calendars, formats, and hooks built around how people really watch." },
  { title: "Shoot Planning", body: "Mood boards, shot lists, and on-set direction from call sheet to wrap." },
  { title: "Editing", body: "Short-form cuts tuned for retention, caption-first and platform-native." },
  { title: "Influencer Marketing", body: "Matching creators to brands and running collabs that actually convert." },
  { title: "Ad Campaigns", body: "Paid and organic executions built to drive measurable results." },
];

export const experience = [
  {
    company: "Rocktfuel",
    role: "Content Marketing Strategist",
    period: "Feb 2026 - Present",
    points: [
      "Led content strategy for 5+ clients across F&B, fashion retail, and lifestyle, lifting brand engagement by 25%.",
      "Planned 20+ shoots, curated mood boards, and ran brand activations and promotional campaigns.",
      "Produced, edited, and featured in short-form video, driving a 20% rise in reach and watch-through.",
    ],
  },
  {
    company: "Athvie Global",
    role: "Digital Marketing Intern",
    period: "2025",
    points: [
      "Ran Meta and Google campaigns, raising engagement by 35% and leads by 20%.",
      "Optimised web assets and tracked performance in Google Analytics to improve ROI.",
    ],
  },
  {
    company: "Athvie Global",
    role: "Web Development Intern",
    period: "2024",
    points: [
      "Built responsive web modules (Python, SQL, frontend), cutting load time by 25% for 500+ monthly users.",
      "Streamlined campaign workflows and content pipelines, reducing turnaround by 40%.",
    ],
  },
];

export const education = {
  school: "RV College of Engineering (RVCE)",
  degree: "B.E., Electronics and Communication Engineering",
  period: "2021 - 2025",
  location: "Bengaluru, India",
};

export const publishedPaper = {
  title: "A Study on AI-Driven Motion Capture and Pose Estimation for Physiotherapy",
  note: "A research study focused on using AI-driven motion analysis and pose estimation to improve physiotherapy accuracy and rehabilitation tracking.",
  journal: "IJSREM",
};

export const certifications = [
  { name: "Internet of Things", issuer: "NPTEL" },
  { name: "Database Management Systems", issuer: "NPTEL" },
  { name: "Psychology", issuer: "MyCaptain" },
];

export const leadership = [
  {
    title: "8th Mile Annual Cultural Fest",
    org: "RVCE",
    note: "Documented 20+ events through photography, video, and production design; produced highlight aftermovies.",
  },
  {
    title: "Studio Zero Filmmaking Club",
    org: "Lead, 48-member team",
    note: "Produced 8+ short films and grew campus viewership by 30% across two years.",
  },
];

export const skills = {
  marketing: [
    "Social Media Strategy",
    "Content Creation",
    "Creative Writing",
    "Photo & Video Editing",
    "Poster Design",
    "Brand Storytelling",
    "Content Calendar Planning",
    "Digital Marketing",
  ],
  tools: ["Canva", "CapCut", "Adobe Lightroom", "Microsoft Office"],
  personal: [
    "Clear Communicator",
    "Flexible Problem-Solver",
    "Results-Driven",
    "Organized",
    "Team-Oriented",
  ],
  languages: ["English", "Hindi", "Kannada", "Telugu"],
};

export const contact = {
  email: "divyashreens27@gmail.com",
  phone: "+91 99015 02926",
  linkedin: "https://linkedin.com/in/divyashree-ns-1939b5385/",
  instagram: "https://instagram.com/divya264",
  instagramHandle: "@divya264",
  location: "Bengaluru, India",
};
