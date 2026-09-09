export const CONTACT = {
  phone: "+254 115 339 092",
  phoneHref: "tel:+254115339092",
  whatsapp: "254115339092",
  email: "info@zebnextechsolutions.co.ke",
  location: "Benedicta, Utawala (Pioneer Trading Centre – P19)",
  hours: "Monday – Friday, 8:00 AM – 5:00 PM EAT",
  socials: [
    { name: "Instagram", url: "https://instagram.com/zebnextechsolutions" },
    { name: "Facebook", url: "https://facebook.com/zebnextechsolutions" },
    { name: "LinkedIn", url: "https://linkedin.com/company/zebnextechsolutions" },
    { name: "X", url: "https://x.com/zebnextechsolutions" },
    { name: "TikTok", url: "https://tiktok.com/@zebnextechsolutions" },
  ],
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  body: string[];
  included: string;
};

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    tagline: "Modern, responsive websites tailored to your brand.",
    body: [
      "Your website is often the first interaction a customer has with your business — it needs to load fast, work flawlessly on every device, and reflect who you actually are.",
      "We design and build websites that balance clean, modern aesthetics with real functionality: easy content management, strong SEO foundations, and the flexibility to grow as your business does. Whether you need a simple informational site, a full e-commerce platform, or a custom web application, we build it to be fast, secure, and easy for your team to maintain.",
    ],
    included:
      "Custom design, mobile responsiveness, CMS setup, basic SEO optimization, hosting guidance, ongoing maintenance options.",
  },
  {
    slug: "networking",
    title: "Networking",
    tagline: "Secure, scalable infrastructure for seamless connectivity.",
    body: [
      "A business runs on its network — when it's slow or unreliable, everything downstream suffers.",
      "We design, install, and maintain networking solutions that keep your offices, teams, and systems connected without interruption. This includes structured cabling, wireless network design, VPN setup for remote teams, and network security configuration, all built to scale as your team grows or your office expands.",
    ],
    included:
      "Network design and installation, wireless coverage planning, VPN and remote access setup, ongoing monitoring and support.",
  },
  {
    slug: "database-management",
    title: "Database Management",
    tagline: "Efficient, reliable data storage and optimization.",
    body: [
      "Your data is one of your most valuable business assets — it needs to be organized, accessible, and protected.",
      "We design and manage databases that keep your information structured and performant, whether you're running a small customer database or a complex system with years of transactional history. We also help businesses migrate from outdated or fragmented systems (spreadsheets, legacy software) into properly structured, scalable databases.",
    ],
    included:
      "Database design and setup, performance optimization, data migration, backup and recovery planning, ongoing management.",
  },
  {
    slug: "data-analysis",
    title: "Data Analysis",
    tagline: "Actionable insights to drive smarter decisions.",
    body: [
      "Collecting data is only useful if you can act on it.",
      "We help businesses turn raw data — sales figures, customer behavior, operational metrics — into clear insights that inform real decisions. That might mean a dashboard giving leadership a real-time view of performance, or a one-time deep analysis to answer a specific business question. Either way, the goal is the same: less guesswork, more clarity.",
    ],
    included:
      "Data cleaning and structuring, dashboard and reporting setup, trend and performance analysis, custom reporting for leadership teams.",
  },
  {
    slug: "cloud-services",
    title: "Cloud Services",
    tagline: "Scalable cloud solutions for flexibility and growth.",
    body: [
      "Moving to the cloud — or optimizing an existing cloud setup — gives businesses the flexibility to scale without the overhead of managing physical infrastructure.",
      "We help businesses plan and execute cloud migrations, set up cloud-based storage and computing resources, and configure systems for cost efficiency and reliability. Whether you're cloud-native from day one or transitioning from on-premise systems, we tailor the setup to your actual usage and budget.",
    ],
    included:
      "Cloud migration planning and execution, cloud infrastructure setup, cost optimization, ongoing cloud management and support.",
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    tagline: "Protecting businesses against digital threats.",
    body: [
      "Cyber threats don't discriminate by business size — small and medium businesses are frequently targeted precisely because they're assumed to have weaker defenses.",
      "We help close that gap with practical, proportionate security measures: network security, endpoint protection, staff awareness training, and incident response planning. Our approach is to build security into your systems from the start, rather than bolting it on after something goes wrong.",
    ],
    included:
      "Security audits, network and endpoint protection setup, staff security training, incident response planning, ongoing monitoring.",
  },
  {
    slug: "software-development",
    title: "Software Development",
    tagline: "Custom solutions built to solve real business challenges.",
    body: [
      "Off-the-shelf software doesn't always fit the way your business actually operates.",
      "We build custom software — internal tools, customer-facing applications, automation systems — designed around your specific workflows rather than forcing you to adapt to someone else's. From initial concept through development, testing, and deployment, we work closely with your team to make sure what we build actually gets used and actually solves the problem.",
    ],
    included:
      "Requirements and scoping, custom application development, integration with existing systems, testing and deployment, post-launch support.",
  },
  {
    slug: "branding",
    title: "Branding",
    tagline: "Helping businesses stand out with strong visual identity and strategy.",
    body: [
      "Good branding isn't just a logo — it's a consistent, deliberate identity that shows up everywhere your business is seen: your website, your signage, your social media, your proposals.",
      "We help businesses develop that identity from the ground up, or refine an existing brand that's grown inconsistent over time. This includes logo design, color and typography systems, brand guidelines, and messaging strategy — everything needed to make a business instantly recognizable.",
    ],
    included:
      "Logo and visual identity design, brand guidelines documentation, messaging and positioning strategy, brand rollout across materials.",
  },
];

export const CLIENTS = [
  "KHL",
  "Embakasi Bedicta Academy",
  "Antique",
  "Gokyle Tours and Safaris",
  "Lancaster Security Ltd",
  "Pure Care Services",
];

export const CATEGORIES = [
  "Tech Trends",
  "Cybersecurity Tips",
  "Branding Strategy",
  "Cloud Adoption",
] as const;

export type Post = {
  slug: string;
  title: string;
  category: (typeof CATEGORIES)[number];
  excerpt: string;
  date: string;
  readTime: string;
  image: "security" | "network" | "branding" | "web" | "analytics";
  body: { heading: string; paragraphs: string[] }[];
};

export const POSTS: Post[] = [
  {
    slug: "signs-your-business-network-needs-an-upgrade",
    title: "5 Signs Your Business Network Needs an Upgrade",
    category: "Tech Trends",
    excerpt: "Slow mornings and dropped calls are symptoms — here's how to read them.",
    date: "2026-08-18",
    readTime: "6 min read",
    image: "network",
    body: [
      {
        heading: "The network is usually the last thing anyone blames",
        paragraphs: [
          "When files take forever to open or video calls stutter, most teams blame the laptop or the internet provider. More often the bottleneck sits between the two: ageing switches, overloaded access points, or cabling that was never designed for the number of people now using it.",
          "The good news is that network problems announce themselves fairly clearly if you know what to look for.",
        ],
      },
      {
        heading: "What to watch for",
        paragraphs: [
          "Dead zones in parts of the office, devices that drop off Wi-Fi at predictable times of day, a network that slows down every time someone uploads a large file, equipment that no longer receives firmware updates, and a setup nobody has documented.",
          "Any two of those together usually means the network is at capacity rather than broken.",
        ],
      },
      {
        heading: "Upgrading without over-buying",
        paragraphs: [
          "An upgrade doesn't have to mean replacing everything. Start with a survey of actual usage and coverage, fix the weakest link, and plan the rest in stages so spend follows need.",
        ],
      },
    ],
  },
  {
    slug: "cybersecurity-basics-every-small-business-should-have",
    title: "Cybersecurity Basics Every Small Business Should Have in Place",
    category: "Cybersecurity Tips",
    excerpt: "The short list of protections that stops most real-world attacks.",
    date: "2026-08-02",
    readTime: "7 min read",
    image: "security",
    body: [
      {
        heading: "Most attacks are opportunistic",
        paragraphs: [
          "Small businesses are rarely singled out. They are swept up by automated attacks looking for reused passwords, unpatched software, and inboxes with no filtering.",
          "That's encouraging, because opportunistic attacks are also the easiest to defend against.",
        ],
      },
      {
        heading: "The essentials",
        paragraphs: [
          "Multi-factor authentication on email and finance systems. A password manager so staff stop reusing credentials. Automatic updates on every device. Tested backups kept separate from the main system. And thirty minutes of phishing awareness training every quarter.",
        ],
      },
      {
        heading: "What is usually overkill",
        paragraphs: [
          "Enterprise threat-hunting platforms and 24/7 security operations centres rarely make sense for a team of fifteen. Spend the budget on the basics first — they cover the overwhelming majority of incidents.",
        ],
      },
    ],
  },
  {
    slug: "is-it-time-to-rebrand",
    title: "Is It Time to Rebrand? Here's How to Tell",
    category: "Branding Strategy",
    excerpt: "A practical test for whether your brand is dated or just unfamiliar to you.",
    date: "2026-07-21",
    readTime: "5 min read",
    image: "branding",
    body: [
      {
        heading: "Boredom is not a business case",
        paragraphs: [
          "You see your own brand more than anyone else does, so it dates faster in your eyes than in your customers'. Before starting a rebrand, separate your fatigue from real signals.",
        ],
      },
      {
        heading: "Real signals",
        paragraphs: [
          "Your offering has changed and the name or look no longer describes it. Your materials are inconsistent because nobody documented the rules. You're moving into a market where the current identity reads as amateur. Or you're being confused with a competitor.",
        ],
      },
      {
        heading: "Refresh before rebuild",
        paragraphs: [
          "Often a disciplined refresh — tightened typography, a defined palette, and a proper set of guidelines — solves the problem at a fraction of the cost and keeps the recognition you have already earned.",
        ],
      },
    ],
  },
  {
    slug: "cloud-vs-on-premise",
    title: "Cloud vs. On-Premise: What Actually Makes Sense for a Growing Business",
    category: "Cloud Adoption",
    excerpt: "An honest comparison, including the costs nobody mentions upfront.",
    date: "2026-07-06",
    readTime: "8 min read",
    image: "analytics",
    body: [
      {
        heading: "It is rarely all or nothing",
        paragraphs: [
          "Most growing businesses end up somewhere in the middle: email, documents, and customer systems in the cloud, with a local server for the things that genuinely need to be on site.",
        ],
      },
      {
        heading: "Where cloud wins",
        paragraphs: [
          "Predictable monthly cost instead of large capital purchases, remote access by default, and someone else handling hardware failure and patching.",
        ],
      },
      {
        heading: "Where on-premise still wins",
        paragraphs: [
          "Very large local files, equipment that must keep working through internet outages, and workloads where bandwidth costs would exceed the savings. Plan the mix around how your team actually works.",
        ],
      },
    ],
  },
  {
    slug: "what-makes-a-website-convert",
    title: "What Makes a Website Actually Convert Visitors Into Customers",
    category: "Tech Trends",
    excerpt: "Clarity, speed and one obvious next step beat clever design every time.",
    date: "2026-06-24",
    readTime: "6 min read",
    image: "web",
    body: [
      {
        heading: "Say what you do in one line",
        paragraphs: [
          "Visitors decide within seconds whether they are in the right place. A specific, plainly worded headline outperforms an abstract slogan almost every time.",
        ],
      },
      {
        heading: "Make the next step obvious",
        paragraphs: [
          "One primary action per page — call, book, enquire — repeated at natural decision points. Competing buttons split attention and reduce enquiries.",
        ],
      },
      {
        heading: "Speed is a conversion feature",
        paragraphs: [
          "Compressed images, minimal scripts, and a fast host do more for enquiries than another round of visual polish.",
        ],
      },
    ],
  },
  {
    slug: "real-cost-of-a-data-breach",
    title: "Understanding the Real Cost of a Data Breach for Small Businesses",
    category: "Cybersecurity Tips",
    excerpt: "The invoice is only part of it — downtime and trust cost more.",
    date: "2026-06-09",
    readTime: "7 min read",
    image: "security",
    body: [
      {
        heading: "Three kinds of cost",
        paragraphs: [
          "Direct recovery, lost trading time, and reputational damage. The first is the smallest and the only one most businesses budget for.",
        ],
      },
      {
        heading: "Downtime dominates",
        paragraphs: [
          "A week of disrupted operations usually costs more than the technical clean-up, especially where invoicing or delivery depends on the affected system.",
        ],
      },
      {
        heading: "Prevention is cheap by comparison",
        paragraphs: [
          "Backups, multi-factor authentication and a written incident plan cost a fraction of a single serious incident.",
        ],
      },
    ],
  },
  {
    slug: "brand-identity-that-lasts",
    title: "Building a Brand Identity That Doesn't Need a Redesign Every Year",
    category: "Branding Strategy",
    excerpt: "Durable identities are systems, not single logos.",
    date: "2026-05-27",
    readTime: "5 min read",
    image: "branding",
    body: [
      {
        heading: "Design the system, not the artwork",
        paragraphs: [
          "A logo is one asset. What keeps a brand coherent is the palette, typography, spacing and tone rules that sit behind it.",
        ],
      },
      {
        heading: "Avoid trend-locked choices",
        paragraphs: [
          "Effects that date quickly tie your identity to a moment. Restraint ages better.",
        ],
      },
      {
        heading: "Write it down",
        paragraphs: [
          "Guidelines let staff, printers and partners apply the brand consistently without asking, which is what makes it feel established.",
        ],
      },
    ],
  },
  {
    slug: "choosing-the-right-database",
    title: "A Non-Technical Guide to Choosing the Right Database for Your Business",
    category: "Tech Trends",
    excerpt: "What the choice actually affects, in plain language.",
    date: "2026-05-12",
    readTime: "6 min read",
    image: "analytics",
    body: [
      {
        heading: "Start with the questions you need answered",
        paragraphs: [
          "The reports and lookups your business depends on shape the structure far more than any technology preference.",
        ],
      },
      {
        heading: "Structure beats software choice",
        paragraphs: [
          "A well-organised database on ordinary technology outperforms a badly organised one on something fashionable.",
        ],
      },
      {
        heading: "Plan for growth and for leaving",
        paragraphs: [
          "Check you can export everything easily. Portability protects you far more than any single platform's feature list.",
        ],
      },
    ],
  },
];

export const PROJECTS = [
  {
    title: "TUK Ticketing System",
    summary:
      "A digital ticketing platform for a tuk tuk transport operator — mobile ticket purchase, kiosk issuing, driver verification and daily revenue reporting in one system.",
    tags: ["Software Development", "Database Management", "Data Analysis"],
  },
  {
    title: "Tenant Management System",
    summary:
      "A property management platform covering units, leases, rent invoicing and maintenance requests, giving landlords a live view of collections and arrears.",
    tags: ["Software Development", "Cloud Services", "Web Development"],
  },
];
