export type Project = {
  slug: string
  title: string
  cover: string
  coverAlt: string
  description: string
  tags: readonly string[]
}

/** All projects from masb0ymas.com/project. Detail pages live on the production site. */
export const PROJECTS: Project[] = [
  {
    slug: 'web-programming-hack',
    title: 'Web Programming Hack',
    cover: '/project/web-programming-hack.webp',
    coverAlt: 'Web Programming Hack cover',
    description:
      'Web Programming Hack is a bootcamp for web programming, and it also offers an opportunity to work abroad. Our intensive training program equips participants with essential coding skills, modern frameworks, and best practices for full-stack development. Join our community of aspiring developers and unlock global career opportunities in the tech industry.',
    tags: ['Bootcamp', 'Web Programming'],
  },
  {
    slug: 'seadev',
    title: 'Seadev',
    cover: '/project/seadev.webp',
    coverAlt: 'Seadev cover',
    description:
      'Cost-effective engineering talent to help your startup thrive. Our team of skilled developers and engineers provides high-quality, affordable technical solutions tailored to emerging businesses. We focus on delivering high-quality work while keeping costs manageable, enabling startups to build robust products without breaking the budget. Partner with us to accelerate your growth journey.',
    tags: ['Engineering', 'Talent', 'Startup'],
  },
  {
    slug: 'boatwork',
    title: 'Boatwork',
    cover: '/project/boatwork.webp',
    coverAlt: 'Boatwork cover',
    description:
      'Professional boat and yacht services specializing in comprehensive repairs, state-of-the-art audio system enhancements, custom modifications, and routine maintenance. Our expert technicians deliver exceptional quality workmanship for all marine vessels, ensuring optimal performance, safety, and enjoyment on the water, with attention to detail and personalized service.',
    tags: ['Yacht', 'Boat', 'Audio'],
  },
  {
    slug: 'moneyflow-id',
    title: 'Moneyflow ID',
    cover: '/project/moneyflow-id.webp',
    coverAlt: 'Moneyflow ID cover',
    description:
      'Moneyflow ID is a comprehensive web application designed to help you take control of your financial life by tracking and managing your cash flow effectively. The platform offers intuitive tools for monitoring income sources, categorizing expenses, creating personalized budgets, generating financial reports, and setting savings goals to improve your overall financial health and decision-making.',
    tags: ['Cashflow', 'Income', 'Expense', 'Budgeting'],
  },
  {
    slug: 'arif-analytics',
    title: 'Arif Analytics',
    cover: '/project/arif-analytics.webp',
    coverAlt: 'Arif Analytics cover',
    description:
      'Data Analysis platform utilizing AI to analyze your data. You can also chat with your result to gain deeper insights, explore patterns, and extract actionable intelligence from complex datasets. Our advanced algorithms provide comprehensive visualization and interpretation of your data in real-time.',
    tags: ['Data Analysis', 'AI'],
  },
  {
    slug: 'defi-calculator',
    title: 'DeFi Calculator',
    cover: '/project/defi-calculator.webp',
    coverAlt: 'DeFi Calculator cover',
    description:
      'DeFi Calculator is a comprehensive web application designed to simplify complex decentralized finance calculations in the Web3 ecosystem. Our tool helps users analyze yield farming opportunities, liquidity pool returns, impermanent loss risks, and token swap values across multiple blockchain networks, enabling informed investment decisions with real-time data integration and customizable parameters for both novice and experienced DeFi participants.',
    tags: ['DeFi', 'Web3', 'Calculator'],
  },
  {
    slug: 'kickstarter',
    title: 'Kickstarter',
    cover: '/project/kickstarter.webp',
    coverAlt: 'Kickstarter cover',
    description:
      'Kickstarter on web3 revolutionizes project fundraising by leveraging blockchain technology to provide transparent, secure, and decentralized crowdfunding. Create campaigns with smart contracts that automatically execute when funding goals are met, eliminating intermediaries and reducing fees while providing immutable records of all transactions and supporter contributions.',
    tags: ['Funding'],
  },
]

export function projectUrl(slug: string) {
  return `/project/${slug}`
}
