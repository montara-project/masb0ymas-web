export type ExperienceStat = { label: string; value: string }

export type Experience = {
  company: string
  role: string
  type: string
  location: string
  description: string
  stats: ExperienceStat[]
  contributions: readonly string[]
  achievements?: readonly string[]
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'Boatwork',
    role: 'Frontend Engineer',
    type: 'Part-time',
    location: 'Florida, United States - Remote',
    description:
      'Boatwork is a platform that connects customers with contractors specializing in boats, yachts, and ships. Through the platform, you can maintain, modify, and clean your vessel.',
    stats: [
      { label: 'Duration', value: 'Nov 2024 - Present' },
      { label: 'Team Size', value: '2 Members' },
      { label: 'Projects', value: '1 Delivered' },
    ],
    contributions: [
      'Improved the Web UI and added more pages about Boatwork.',
      'Maintained the codebase and fixed minor bugs.',
    ],
  },
  {
    company: 'Moneyflow ID',
    role: 'Software Engineer',
    type: 'Self-employed',
    location: 'Semarang, Indonesia',
    description:
      'Moneyflow is a comprehensive cash flow management platform designed to empower individuals and small to medium-sized enterprises (SMEs) to effectively manage their finances. The application provides real-time tracking of income and expenses, facilitating informed financial decision-making.',
    stats: [
      { label: 'Duration', value: 'Jun 2023 - Present' },
      { label: 'Team Size', value: '1 Member' },
      { label: 'Projects', value: '1 Delivered' },
    ],
    contributions: [
      'I have built a cashflow tracking system using Next.js with PWA support (mobile-friendly).',
      'I have integrated OCR to make receipt scanning easier, which speeds up the process of inputting cashflow data such as expenses and income.',
    ],
    achievements: [
      'I am learning more about how PWA and OCR work and how to implement them in my project.',
      'I also set up CI/CD using GitHub Actions, which makes deployment easier.',
    ],
  },
  {
    company: 'Arif Analytics',
    role: 'Software Engineer',
    type: 'Part-time',
    location: 'Australia - Remote',
    description:
      'Arif is an AI-powered analytics platform designed to streamline and enhance data analysis. Leveraging advanced artificial intelligence, Arif automates the extraction of key insights, summaries, and feature identification from diverse data sets. Users can engage with the platform through natural language queries, enabling them to ask specific questions and receive precise answers regarding the analysis results.',
    stats: [
      { label: 'Duration', value: 'Jan 2025 - Aug 2025' },
      { label: 'Team Size', value: '7+ Members' },
      { label: 'Projects', value: '1 Delivered' },
    ],
    contributions: [
      'Built an AI Data Analyst Platform from scratch and selected the technologies to be used.',
      'Developed the backend using Golang with a PostgreSQL database.',
      'Developed the frontend using Next.js server actions to improve data fetching before the client is ready.',
      'Managed the entire service with Docker, and integrated third-party tools to handle container logging and Docker image management.',
    ],
    achievements: [
      'I improved deployment by using a PaaS like Dokploy. Previously, I set up manual deployment with Traefik and custom configurations. This often caused conflicts in environment variables when running many services or websites.',
    ],
  },
  {
    company: 'Amori Inc.',
    role: 'Mobile Developer',
    type: 'Contract',
    location: 'United States - Remote',
    description:
      'Amori is a dating platform powered by AI, where you can consult an AI Assistant. The AI Assistant will be able to learn about you and your relationship.',
    stats: [
      { label: 'Duration', value: 'Apr 2025 - Jul 2025' },
      { label: 'Team Size', value: '4+ Members' },
      { label: 'Projects', value: '1 Delivered' },
    ],
    contributions: [
      'Development of the Amori iOS App',
      'Development of a daily check-in question feature',
      'Improvement of the onboarding relationship feature',
      'Fixing of minor bugs in several UI elements and app flows',
    ],
    achievements: [
      'I have learned more about mobile structure per module.',
      'I have learned that to minimize bugs in a mobile app, instead of relying on encapsulation methods, the best approach is to create a new screen to handle the same layout with different functionality.',
    ],
  },
  {
    company: 'PT. Visi Nusapati Utama',
    role: 'Software Engineer',
    type: 'Full-time',
    location: 'Center Jakarta, Indonesia - Onsite',
    description:
      'Karcisbola is a ticketing platform that makes it easier for people to buy football match tickets at the stadium, and it also includes a raffle system. And then I development the Trasmi. Trasmi Broker is an insurance brokerage firm that partners with multiple banks to handle incoming insurance data, which is subsequently delivered to the banks after processing.',
    stats: [
      { label: 'Duration', value: 'Apr 2021 - Oct 2024' },
      { label: 'Team Size', value: '4+ Members' },
      { label: 'Projects', value: '2+ Delivered' },
    ],
    contributions: [
      'I developed the backend with Node.js and the frontend with Next.js.',
      'I implemented third-party services, such as a payment gateway.',
      'I have learned about how an insurance broker works, and I adjusted the business flow using the backend to manage new insurance data—such as filtering records and matching data to the correct person while the insurance is still active.',
      'I chose several tech to process the Excel data with 100K rows to smooth the process.',
    ],
    achievements: [
      'I improved the data processing from CSV or Excel files with around 100K rows and optimized the filtering step to prepare the data for the next stage.',
      'I researched many clouds to reduce costs in terms of deployment, both staging and production.',
      'I improved my starter kit by adding Docker container support to make it easier to deploy services or websites.',
    ],
  },
  {
    company: 'PT. Nusantara Teknologi Solution',
    role: 'Fullstack Developer',
    type: 'Full-time',
    location: 'West Jakarta, Indonesia - Onsite',
    description:
      'Nusantech is a Software House and IT Consulting company where I began my career as a Web Developer. During my time here, I gained valuable experience working on government and private sector projects while developing professionally in a supportive environment.',
    stats: [
      { label: 'Duration', value: 'Jun 2019 - Apr 2021' },
      { label: 'Team Size', value: '10+ Members' },
      { label: 'Projects', value: '3+ Delivered' },
    ],
    contributions: [
      'Delivered projects for government and private sector clients.',
      'Built and maintained starter kits to accelerate development of new services and websites.',
      'Mentored vocational school interns in web development.',
    ],
    achievements: [
      'Developed and maintained reusable starter kits (frontend & backend).',
      'Gained experience mentoring vocational school interns.',
    ],
  },
]

export type Education = {
  field: string
  program: string
  period: string
}

export const EDUCATION: Education[] = [
  {
    field: 'English',
    program: 'Speaking Practice - Class meet by mentor from Kampung Inggris',
    period: '2025 - Present',
  },
  {
    field: 'Universitas Putra Indonesia "YPTK" Padang',
    program: 'Computer Science - Bachelor Degree',
    period: '2013 - 2017',
  },
]
