export const SITE = {
  name: 'masb0ymas',
  author: 'N. Fajri',
  role: 'Software Engineer',
  email: 'me@masb0ymas.com',
  url: 'https://masb0ymas.com',
  contactUrl: 'https://s.id/contact-masb0ymas',
  cvUrl: 'https://drive.google.com/file/d/1eNZidVlnXwcSqT_kIyxH96CwxzwQ3uK4/view?usp=sharing',
} as const

export type SocialLink = {
  label: string
  href: string
  icon: 'x' | 'bluesky' | 'linkedin' | 'github' | 'mail' | 'cv'
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'X (Twitter)', href: 'https://x.com/masb0ymas', icon: 'x' },
  { label: 'Bluesky', href: 'https://bsky.app/profile/masb0ymas.bsky.social', icon: 'bluesky' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/masb0ymas', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/masb0ymas', icon: 'github' },
  { label: 'Email', href: `mailto:${SITE.email}`, icon: 'mail' },
  { label: 'Download CV', href: SITE.cvUrl, icon: 'cv' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Project', href: '/project' },
  { label: 'About', href: 'https://masb0ymas.com/about' },
  { label: 'Contact', href: SITE.contactUrl },
] as const

export const SERVICES = [
  {
    title: 'Frontend Development',
    description:
      'Creating responsive and user-friendly interfaces using React, Next.js, and Tailwind CSS.',
    icon: 'frontend',
  },
  {
    title: 'UI/UX Implementation',
    description:
      'I translate Figma and design mockups into responsive, pixel-perfect user interfaces.',
    icon: 'uiux',
  },
  {
    title: 'Third Party Integration',
    description:
      'I integrate third-party services and APIs to enhance functionality and user experience.',
    icon: 'integration',
  },
  {
    title: 'Backend Development',
    description:
      'Build a scalable and secure backend using Node.js, TypeScript, Laravel, and Golang.',
    icon: 'backend',
  },
  {
    title: 'DevOps',
    description:
      'I manage and optimize the deployment process, ensuring smooth and efficient delivery of web apps.',
    icon: 'devops',
  },
  {
    title: 'Technical Leadership',
    description:
      'I lead and mentor technical teams, fostering a culture of innovation and excellence.',
    icon: 'leadership',
  },
] as const

export const FEATURED_POSTS = [
  {
    title: 'Bagaimana cara setup Git dan GitHub pada local device',
    href: 'https://masb0ymas.com/blog/bagaimana-cara-setup-git-dan-github-pada-local-device',
    cover: '/blog/setup-git-github.png',
    coverAlt: 'Illustration of Git and GitHub setup on a local device',
    date: '02 Des 2025',
    iso: '2025-12-02',
    excerpt:
      'Panduan lengkap dan komprehensif tentang bagaimana cara melakukan setup dan konfigurasi Git serta GitHub pada perangkat lokal Anda. Tutorial ini mencakup proses instalasi Git, pengaturan identitas pengguna, konfigurasi SSH keys, dan berbagai perintah dasar Git untuk memulai version control.',
    tags: ['git', 'github'],
  },
  {
    title: 'How to Use GitHub Actions for CI/CD and Push to Google Artifact Registry',
    href: 'https://masb0ymas.com/blog/how-to-use-github-action-for-ci-cd-and-push-to-google-artifact-registry',
    cover: '/blog/ci-cd-github-actions.webp',
    coverAlt: 'GitHub Actions workflow build success on Google Artifact Registry',
    date: '04 Nov 2024',
    iso: '2024-11-04',
    excerpt:
      'A guide to setting up a CI/CD workflow using GitHub Actions to automate the build and deployment process and push artifacts to Google Artifact Registry.',
    tags: ['Docker', 'CI/CD', 'GitHub Actions', 'Google Artifact Registry'],
  },
] as const

export const FEATURED_PROJECTS = [
  {
    title: 'Seadev',
    href: 'https://masb0ymas.com/project/seadev',
    description:
      'Cost-effective engineering talent to help your startup thrive. Skilled developers provide high-quality, affordable technical solutions tailored to emerging businesses.',
    tags: ['Engineering', 'Talent', 'Startup'],
  },
  {
    title: 'Boatwork',
    href: 'https://masb0ymas.com/project/boatwork',
    description:
      'Professional boat and yacht services specializing in comprehensive repairs, state-of-the-art audio system enhancements, custom modifications, and routine maintenance.',
    tags: ['Yacht', 'Boat', 'Audio'],
  },
  {
    title: 'Moneyflow ID',
    href: 'https://masb0ymas.com/project/moneyflow-id',
    description:
      'A comprehensive web application designed to help you take control of your financial life by tracking and managing your cash flow effectively, from income and expenses to budgets and savings goals.',
    tags: ['Cashflow', 'Income', 'Expense', 'Budgeting'],
  },
  {
    title: 'Web Programming Hack',
    href: 'https://masb0ymas.com/project/web-programming-hack',
    description:
      'A bootcamp for web programming that also offers an opportunity to work abroad. Our intensive training program equips participants with essential coding skills, modern frameworks, and best practices for full-stack development.',
    tags: ['Bootcamp', 'Web Programming'],
  },
] as const

export const OPEN_SOURCE_REPOS = [
  { repo: 'express-api-typeorm' },
  { repo: 'express-api-sequelize' },
  { repo: 'express-api' },
  { repo: 'gofi' },
  { repo: 'gintama' },
  { repo: 'audiopintar' },
] as const

/** Palette-matched GitHub stat cards (self-hosted grs + public streak service). */
export const GITHUB_STATS_CARD_URL =
  'https://grs.masb0ymas.com/api/?username=masb0ymas&show_icons=true&hide_border=true' +
  '&bg_color=191919&title_color=FFB703&text_color=FAFAFA&icon_color=FFB703&border_radius=10'

export const GITHUB_STREAK_CARD_URL =
  'https://streak-stats.demolab.com?user=masb0ymas&hide_border=true' +
  '&background=191919&border=262628&ring=F35B04&fire=FFB703&currStreakNum=FAFAFA' +
  '&sideNums=FAFAFA&currStreakLabel=FFB703&sideLabels=A2ADB6&dates=8ECAE6'

export function repoUrl(repo: string) {
  return `https://github.com/masb0ymas/${repo}`
}

export function repoCardImage(repo: string) {
  const params = new URLSearchParams({
    username: 'masb0ymas',
    repo,
    bg_color: '191919',
    title_color: 'FFB703',
    text_color: 'FAFAFA',
    border_color: '3F4247',
    icon_color: 'FFB703',
    border_radius: '10',
  })
  return `https://grs.masb0ymas.com/api/pin/?${params.toString()}`
}
