/**
 * Public site constants only — never put API keys, DB URLs, or secrets here.
 * `url` may be overridden by NEXT_PUBLIC_SITE_URL (public by design).
 */
export const site = {
  name: "Bhartiya Kisan Union (Umakanth)",
  shortName: "BKU Umakanth",
  tagline: "Jai Jawan · Jai Kisan",
  hindiName: "भारतीय किसान यूनियन (उमाकान्त)",
  description:
    "A social welfare organisation working for child welfare, child education, child health, children's sports, farmers' social rights, and old-age people welfare.",
  /** Canonical origin for sitemap / Open Graph — set NEXT_PUBLIC_SITE_URL in production. */
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://www.bhartiyakisanunionumakanth.org",
  president: "Swami Umakanth Maharaj ji (Shri Umakanth Nunhaira)",
  presidentTitle: "National President",
  email: "bhartiyakisanunion.umakanth@gmail.com",
  phones: ["6294889939", "9339010920"],
  address: {
    line1: "Post & Village — Shahjahanpur",
    line2: "Dist — Mainpuri, Uttar Pradesh",
    pin: "205121",
    full: "Post & Village - Shahjahanpur, Dist - Mainpuri, Uttar Pradesh, Pin - 205121",
  },
  slogans: {
    left: "Jai Jawan",
    right: "Jai Kisan",
  },
} as const;

export const focusAreas = [
  {
    slug: "child-welfare",
    title: "Child Welfare",
    short: "Care, nutrition, clothing, and protection for underprivileged children.",
    description:
      "We run community outreach programmes that provide meals, clothing, safety awareness, and day-to-day support so every child can grow with dignity.",
    longDescription:
      "Child welfare is the heart of our mission. Across villages and peri-urban settlements, we identify children who lack basic care and respond with practical support — nutritious meals, seasonal clothing, hygiene kits, and family guidance. Our volunteers work respectfully with parents and local elders so help reaches children without stigma. We also promote child safety awareness so communities can protect the most vulnerable.",
    image: "/images/one.jpeg",
    goals: [
      "Reduce hunger and clothing gaps among underprivileged children",
      "Strengthen family capacity to care for children safely",
      "Build volunteer networks for continuous local support",
    ],
  },
  {
    slug: "child-education",
    title: "Child Education",
    short: "Learning support, school supplies, and scholarships for rural children.",
    description:
      "Education is the strongest path out of poverty. We help children access schooling, study materials, tutoring support, and learning opportunities.",
    longDescription:
      "Too many rural children drop out because families cannot afford books, uniforms, or transport. Our education programme focuses on keeping children in school through learning kits, stationery, mentoring, and community motivation. We encourage girls’ education and support first-generation learners so they can build confident futures. Education here is not only classrooms — it is dignity, opportunity, and long-term change.",
    image: "/images/three.jpeg",
    goals: [
      "Improve school attendance and learning continuity",
      "Provide essential study materials to needy students",
      "Motivate families to prioritise children’s education",
    ],
  },
  {
    slug: "child-health",
    title: "Child Health",
    short: "Nutrition, hygiene awareness, and basic health support for children.",
    description:
      "Healthy children build stronger communities. Our health initiatives focus on nutritious meals, hygiene education, and connecting families to care.",
    longDescription:
      "Child health begins with food, clean habits, and timely care. We organise nutrition support, hygiene awareness sessions, and guidance that helps families recognise common health needs early. Where possible, we connect children and caregivers with local health services. Our approach is practical and community-based — because prevention and nutrition protect childhood better than delayed treatment.",
    image: "/images/two.jpeg",
    goals: [
      "Improve daily nutrition access for young children",
      "Spread hygiene and sanitation awareness in families",
      "Help families reach basic health support on time",
    ],
  },
  {
    slug: "children-sports",
    title: "Children Sports",
    short: "Play, fitness, and team sports to build confidence and discipline.",
    description:
      "Sports teach teamwork, resilience, and joy. We encourage children’s participation in outdoor play and local sports activities.",
    longDescription:
      "Play is a right, not a luxury. Through outdoor games, fitness days, and local sports encouragement, we help children build stamina, teamwork, and self-belief. Sports also keep children engaged positively and create healthy community spaces. Whether football, running, or simple group play — movement builds stronger bodies and happier minds.",
    image: "/images/five.jpeg",
    goals: [
      "Create safe spaces for play and recreation",
      "Encourage fitness and teamwork among children",
      "Use sports to build confidence and community bonding",
    ],
  },
  {
    slug: "farmers-rights",
    title: "Farmers Social Rights",
    short: "Advocacy, awareness, and support for farmers’ dignity and rights.",
    description:
      "Inspired by Jai Jawan, Jai Kisan, we stand with farmers for fair treatment, social awareness, and community solidarity.",
    longDescription:
      "Farmers feed the nation, yet many still struggle for social dignity and fair recognition. Under the spirit of Jai Jawan, Jai Kisan, we organise awareness, community dialogue, and solidarity efforts that strengthen farmers’ social rights. We support collective voice, respectful public engagement, and local cooperation so farming communities are not left unheard.",
    image: "/images/homepagelaptopscreen.jpeg",
    goals: [
      "Raise awareness on farmers’ social dignity and rights",
      "Support community organisation and collective voice",
      "Promote respectful dialogue for fair treatment",
    ],
  },
  {
    slug: "old-age-welfare",
    title: "Old Age People Welfare",
    short: "Respect, care, and companionship for senior citizens.",
    description:
      "We support elderly community members through welfare outreach, companionship initiatives, and dignity-focused assistance.",
    longDescription:
      "Elders deserve respect, care, and belonging. Our old-age welfare work includes outreach visits, companionship, nutrition and health awareness, and practical help for seniors who feel isolated or unsupported. We encourage younger generations to stay connected with elders, because a compassionate society cares for every stage of life.",
    image: "/images/four.jpeg",
    goals: [
      "Reduce loneliness through regular elder outreach",
      "Support basic welfare and dignity for seniors",
      "Promote intergenerational care in communities",
    ],
  },
] as const;

export const whatWeDo = [
  {
    title: "Protecting Childhood",
    body: "From nutritious meals to clothing distribution, our child welfare programmes meet urgent needs while building long-term care systems in rural communities.",
  },
  {
    title: "Educating the Next Generation",
    body: "We support underprivileged children with learning tools, school readiness, and guidance so no child is left behind in their education journey.",
  },
  {
    title: "Standing with Farmers",
    body: "Farmers feed the nation. We work to strengthen farmers’ social rights through awareness, community organisation, and respectful public engagement.",
  },
  {
    title: "Caring Across Generations",
    body: "Our mission covers children’s sports and health as well as old-age welfare — creating compassionate support from childhood through later life.",
  },
] as const;

export const impactStats = [
  { value: "6", label: "Core Welfare Pillars" },
  { value: "2", label: "Helpline Numbers" },
  { value: "UP", label: "Central Office State" },
  { value: "100%", label: "Community Focused" },
] as const;

export const values = [
  {
    title: "Compassion",
    body: "We serve with empathy — putting the dignity of children, farmers, and elders first.",
  },
  {
    title: "Transparency",
    body: "Public contact details and programme clarity are published openly.",
  },
  {
    title: "Community",
    body: "Change lasts when local families, volunteers, and leaders work together.",
  },
  {
    title: "Accountability",
    body: "Funds and efforts are directed only toward declared welfare motives of the organisation.",
  },
] as const;

export const howWeWork = [
  {
    step: "01",
    title: "Identify Need",
    body: "Local outreach helps us understand which children, families, farmers, or elders need support.",
  },
  {
    step: "02",
    title: "Plan Support",
    body: "We design practical help — meals, education kits, awareness camps, or elder care visits.",
  },
  {
    step: "03",
    title: "Deliver On Ground",
    body: "Volunteers and community partners execute programmes with care and respect.",
  },
  {
    step: "04",
    title: "Stay Accountable",
    body: "We keep communication open for donors, banks, and the public through our contact and donate pages.",
  },
] as const;

export const donationImpacts = [
  {
    amount: "₹500",
    impact: "Helps provide study materials or a nutrition meal kit for a child.",
  },
  {
    amount: "₹1,500",
    impact: "Supports clothing / essential supplies for children in need.",
  },
  {
    amount: "₹5,000",
    impact: "Helps run a small community awareness or welfare outreach day.",
  },
  {
    amount: "Any amount",
    impact: "Every contribution strengthens our six welfare pillars.",
  },
] as const;

export const faqs = [
  {
    q: "What are your main areas of work?",
    a: "Child welfare, child education, child health, children’s sports, farmers’ social rights, and old-age people welfare.",
  },
  {
    q: "Where is your central office?",
    a: "Post & Village - Shahjahanpur, Dist - Mainpuri, Uttar Pradesh, Pin - 205121.",
  },
  {
    q: "How can I donate safely?",
    a: "Use only the official organisation bank account published on the Donate page after bank approval, or contact the office for verified instructions.",
  },
  {
    q: "Who leads the organisation?",
    a: "National President — Swami Umakanth Maharaj ji (Shri Umakanth Nunhaira).",
  },
] as const;

export const newsEvents = [
  {
    title: "Child Welfare Clothing Distribution",
    date: "Community Outreach",
    category: "Child Welfare",
    body: "Distribution of clothing and essentials to children and families in need, strengthening our child welfare mission with dignity-focused support.",
    image: "/images/three.jpeg",
  },
  {
    title: "Nutrition Support for Children",
    date: "Child Health Drive",
    category: "Child Health",
    body: "Community meal programmes supporting child health and nutrition with warm, nutritious food for young children in rural settings.",
    image: "/images/two.jpeg",
  },
  {
    title: "Joyful Community Gathering with Children",
    date: "Child Welfare & Sports Spirit",
    category: "Children Sports",
    body: "Volunteers spent time with children outdoors — building trust, play, fitness spirit, and belonging across the community.",
    image: "/images/one.jpeg",
  },
  {
    title: "Family Support & Social Care",
    date: "Farmers & Family Welfare",
    category: "Farmers Rights",
    body: "Support visits and material assistance for families, connecting child care with broader social rights and community solidarity.",
    image: "/images/homepagelaptopscreen.jpeg",
  },
  {
    title: "Children’s Outdoor Play & Fitness Day",
    date: "Sports & Wellness",
    category: "Children Sports",
    body: "A joyful outdoor session encouraging physical activity, teamwork, and confidence among children from local communities.",
    image: "/images/five.jpeg",
  },
  {
    title: "Elder Care Awareness & Welfare Visit",
    date: "Old Age Welfare",
    category: "Old Age Welfare",
    body: "Outreach focused on companionship, respect, and practical welfare support for senior citizens in need of care and belonging.",
    image: "/images/four.jpeg",
  },
] as const;
