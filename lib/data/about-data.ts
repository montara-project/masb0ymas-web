export type ExperienceStat = { label: string; value: string }

export type Experience = {
  company: string
  role: string
  type: string
  location: string
  description: string
  stats: ExperienceStat[]
  contributions?: readonly string[]
  achievements?: readonly string[]
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'Montara Project',
    role: 'Senior Software Engineer',
    type: 'Self-employed',
    location: 'Semarang, Indonesia',
    description:
      'Building and delivering modern web products across fintech, education, and Web3, with a focus on scalable architecture, product development, and high-quality user experiences.',
    stats: [
      { label: 'Duration', value: 'Jun 2023 - Present' },
      { label: 'Products', value: '2 Shipped' },
      { label: 'Stack', value: 'React · Node · Go' },
    ],
    contributions: [
      'Moneyflow.ID: Built a PWA-based cash flow management platform for individuals and SMEs, enabling users to track income, expenses, savings, and financial activity across devices.',
      'Moneyflow.ID: Designed and implemented a scalable frontend architecture using React.js and TanStack Start, focused on maintainability, performance, and continuous product growth.',
      'House of Wizard: Built a Web3 and Data Analysis learning platform connecting learners with expert mentors through private 1:1 sessions, webinars, courses, certifications, and a community-driven experience.',
      'Worked across the full product lifecycle, from product architecture and frontend/backend development to deployment and infrastructure.',
    ],
    achievements: [
      'Integrated OCR-based receipt scanning to automate transaction data entry, reducing manual input and improving the expense-tracking experience.',
      'Established CI/CD pipelines with GitHub Actions to streamline deployments and accelerate feature delivery.',
      'Developed platform capabilities for the Web3 ecosystem, including smart contract integration and digital learning workflows.',
    ],
  },
  {
    company: 'PT Voyago Digital Indonesia',
    role: 'Frontend Developer',
    type: 'Part-time',
    location: 'Jakarta, Indonesia',
    description:
      'During my time as a Frontend Developer at Voyago Tour & Travel, I delivered several key contributions supporting the company’s digital presence and business operations.',
    stats: [
      { label: 'Duration', value: 'Apr 2026 - Present' },
      { label: 'Projects', value: '1 Delivered' },
      { label: 'Stack', value: 'React · NextJs' },
    ],
    contributions: [
      'Built and delivered a functional tour and travel website to support the company’s digital presence and business operations.',
      'Integrated a Backend-for-Frontend (BFF) architecture and handled multiple backend requests efficiently from the frontend.',
      'Developed the application with Next.js, leveraging TanStack Query for client-side data fetching and state management, alongside dynamic forms and data tables.',
      'Implemented AWS Cognito OAuth authentication and managed user login sessions securely on the frontend.',
    ],
  },
  {
    company: 'Minang IT CAMP',
    role: 'Community Volunteer',
    type: 'Volunteer',
    location: 'Padang Area, West Sumatera, Indonesia',
    description:
      'Minang IT CAMP is a tech community in the Padang area, West Sumatera, where I volunteer to support the local developer community.',
    stats: [
      { label: 'Duration', value: 'Oct 2017 - Present' },
      { label: 'Tenure', value: '9 Years' },
    ],
    contributions: [
      'Ongoing volunteer involvement with the Minang IT CAMP community since October 2017.',
    ],
  },
  {
    company: 'Arif Analytics',
    role: 'Technical Lead',
    type: 'Part-time',
    location: 'Australia - Remote',
    description:
      'Arif is an AI-powered analytics platform designed to streamline and enhance data analysis. Leveraging advanced artificial intelligence, Arif automates the extraction of key insights, summaries, and feature identification from diverse data sets. Users can engage with the platform through natural language queries, enabling them to ask specific questions and receive precise answers regarding the analysis results.',
    stats: [
      { label: 'Duration', value: 'Jan 2025 - Feb 2026' },
      { label: 'Projects', value: '1 Built' },
      { label: 'Stack', value: 'React · NextJs · Go' },
    ],
    contributions: [
      'Built an AI-driven analytics platform from the ground up using Golang, PostgreSQL, and Next.js, enabling users to query data using natural language.',
      'Engineered backend services that improved data extraction and processing accuracy, supporting faster insight generation.',
      'Implemented Server Actions in Next.js to reduce perceived loading time, improving the overall user experience.',
      'Containerised all services using Docker and integrated logging + image management tools, improving deployment consistency.',
    ],
    achievements: [
      'Streamlined deployment by migrating from manual Traefik setups to a PaaS (Dokploy), reducing environment-variable conflicts and cutting deployment time significantly.',
    ],
  },
  {
    company: 'Boatwork',
    role: 'Frontend Engineer',
    type: 'Part-time',
    location: 'Florida, United States - Remote',
    description:
      'Boatwork is a platform that connects customers with contractors specializing in boats, yachts, and ships. Through the platform, you can maintain, modify, and clean your vessel.',
    stats: [
      { label: 'Duration', value: 'Nov 2024 - Oct 2025' },
      { label: 'Focus', value: 'UI/UX · Frontend' },
      { label: 'Stack', value: 'React · NextJs' },
    ],
    achievements: [
      'Improved the platform’s UI/UX and added new pages, increasing customer navigation efficiency and reducing user friction across the site.',
      'Stabilized the codebase by fixing UI bugs and optimizing component structure, improving frontend reliability and maintainability.',
      'Collaborated with the engineering team to refine frontend architecture, contributing to a more scalable development workflow.',
    ],
  },
  {
    company: 'Amori',
    role: 'Mobile Developer',
    type: 'Contract',
    location: 'United States - Remote',
    description:
      'Amori is a dating platform powered by AI, where you can consult an AI Assistant. The AI Assistant will be able to learn about you and your relationship.',
    stats: [
      { label: 'Duration', value: 'Apr 2025 - Jul 2025' },
      { label: 'Platform', value: 'iOS' },
      { label: 'Stack', value: 'React Native · Styled Component' },
    ],
    achievements: [
      'Delivered key features for the iOS app, including daily check-ins and improved onboarding flows, enhancing user engagement and retention.',
      'Improved app structure by reorganizing modules, reducing UI bugs, and making the codebase easier to maintain.',
      'Built new UI screens to handle feature variations cleanly, lowering bug occurrences and improving long-term scalability of mobile features.',
    ],
  },
  {
    company: 'Trasmi Broker',
    role: 'Software Engineer',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    description:
      'Trasmi Broker is an insurance brokerage firm that partners with multiple banks to handle incoming insurance data, which is subsequently delivered to the banks after processing.',
    stats: [
      { label: 'Duration', value: 'Aug 2022 - Oct 2024' },
      { label: 'Scale', value: '100K+ Records' },
      { label: 'Stack', value: 'React · Node' },
    ],
    achievements: [
      'Rebuilt an unmaintainable legacy insurance broker system into a modern, stable platform that improved operational efficiency for brokers.',
      'Processed and optimized large datasets (100K+ rows) with custom filtering and matching logic, enabling faster and more accurate insurance record validation.',
      'Implemented backend workflows that aligned with real-world brokerage processes, improving data accuracy and reducing manual work.',
      'Enhanced ETL operations for imported CSV/Excel files, significantly accelerating data preparation time for downstream systems.',
    ],
  },
  {
    company: 'Karcisbola',
    role: 'Software Engineer',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    description:
      'Karcisbola is a ticketing platform that makes it easier for people to buy football match tickets at the stadium, and it also includes a raffle system.',
    stats: [
      { label: 'Duration', value: 'Apr 2021 - Nov 2023' },
      { label: 'Focus', value: 'Ticketing & Payments' },
      { label: 'Stack', value: 'React · Node' },
    ],
    achievements: [
      'Built and maintained ticketing platform features using Node.js + Next.js, improving purchase flow and reliability during high-traffic match days.',
      'Integrated third-party payment gateways, ensuring secure and seamless transactions at scale.',
      'Replaced outdated proxy infrastructure with Traefik, resulting in better routing, fewer downtime incidents, and smoother deployments.',
      'Reduced cloud deployment costs through research and performance tuning, optimising both staging and production environments.',
    ],
  },
  {
    company: 'Nusantech',
    role: 'Full Stack Developer',
    type: 'Full-time',
    location: 'Jakarta, Indonesia',
    description:
      'Nusantech is a Software House and IT Consulting company where I began my career as a Web Developer (Jun 2019 - Sep 2020) before growing into a Full Stack Developer role (Sep 2020 - Apr 2021). During my time here, I gained valuable experience working on government and private sector projects while developing professionally in a supportive environment.',
    stats: [
      { label: 'Duration', value: 'Jun 2019 - Apr 2021' },
      { label: 'Clients', value: 'Gov & Private' },
      { label: 'Stack', value: 'React · Node' },
    ],
    achievements: [
      'Delivered multiple government and private-sector projects end-to-end, consistently meeting client deadlines and requirements.',
      'Built reusable frontend and backend starter kits that accelerated development for the engineering team.',
      'Mentored vocational school interns, helping them build foundational web development skills and contribute to real projects.',
      'Improved development efficiency by maintaining internal tools and templates, reducing project setup time across teams.',
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
