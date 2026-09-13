export type BlogPost = {
  slug: string
  title: string
  cover: string
  coverAlt: string
  date: string
  iso: string
  excerpt: string
  tags: readonly string[]
}

/** All posts from masb0ymas.com/blog, newest first. Detail pages live on the production site. */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'bagaimana-cara-setup-git-dan-github-pada-local-device',
    title: 'Bagaimana cara setup Git dan GitHub pada local device',
    cover: '/blog/setup-git-github.png',
    coverAlt: 'Illustration of Git and GitHub setup on a local device',
    date: '02 Des 2025',
    iso: '2025-12-02',
    excerpt:
      'Panduan lengkap dan komprehensif tentang bagaimana cara melakukan setup dan konfigurasi Git serta GitHub pada perangkat lokal Anda. Tutorial ini mencakup proses instalasi Git, pengaturan identitas pengguna, konfigurasi SSH keys, menghubungkan repository lokal dengan GitHub, dan berbagai perintah dasar Git yang diperlukan untuk memulai version control dalam proyek development Anda.',
    tags: ['git', 'github'],
  },
  {
    slug: 'how-to-use-github-action-for-ci-cd-and-push-to-google-artifact-registry',
    title: 'How to Use GitHub Actions for CI/CD and Push to Google Artifact Registry',
    cover: '/blog/ci-cd-github-actions.webp',
    coverAlt: 'GitHub Actions workflow build success on Google Artifact Registry',
    date: '04 Nov 2024',
    iso: '2024-11-04',
    excerpt:
      'A guide to setting up a CI/CD workflow using GitHub Actions to automate the build and deployment process and push artifacts to Google Artifact Registry.',
    tags: ['Docker', 'CI/CD', 'GitHub Actions', 'Google Artifact Registry'],
  },
  {
    slug: 'how-to-install-react-native-on-different-platforms',
    title: 'How to Install React Native on Different Platforms?',
    cover: '/blog/react-native.webp',
    coverAlt: 'React Native logo with mobile platforms',
    date: '02 Sep 2024',
    iso: '2024-09-02',
    excerpt:
      'How to Install React Native on Different Platforms? This guide provides a step-by-step tutorial on installing React Native across various platforms, including Windows, macOS, and Linux.',
    tags: ['React Native', 'CLI'],
  },
  {
    slug: 'how-to-use-environment-variables-in-sveltekit',
    title: 'How to Use Environment Variables in Sveltekit',
    cover: '/blog/sveltekit.webp',
    coverAlt: 'SvelteKit logo',
    date: '31 Agt 2024',
    iso: '2024-08-31',
    excerpt:
      'This blog post provides a comprehensive guide on using environment variables in SvelteKit to manage configurations and sensitive data securely.',
    tags: ['SvelteKit', 'Environment Variables'],
  },
  {
    slug: 'how-to-dump-and-restore-a-postgres-database-from-a-docker-container',
    title: 'How to dump and restore a PostgreSQL from a Docker Container',
    cover: '/blog/docker-postgresql.webp',
    coverAlt: 'PostgreSQL logo with Docker',
    date: '23 Agt 2024',
    iso: '2024-08-23',
    excerpt:
      "Learn how to efficiently dump and restore PostgreSQL databases from Docker containers in this quick guide. We'll provide clear, step-by-step instructions for backing up your data with the pg_dump command and restoring it using psql. Whether for backup purposes or database migration, this guide ensures you can manage PostgreSQL in a Docker environment with ease and confidence.",
    tags: ['postgresql', 'docker'],
  },
  {
    slug: 'how-do-you-implement-an-nft-smart-contract-with-remix-and-publish-it-on-open-sea',
    title: 'How do you implement an NFT Smart Contract with Remix and publish it on OpenSea?',
    cover: '/blog/nft-remix.webp',
    coverAlt: 'Remix IDE with Ethereum',
    date: '10 Agt 2024',
    iso: '2024-08-10',
    excerpt:
      "In this comprehensive guide, we'll walk you through the step-by-step process of creating and deploying an NFT smart contract using Remix, a powerful Ethereum IDE. Whether you're new to blockchain development or looking to refine your skills, this tutorial covers everything from setting up your development environment to writing and testing your smart contract code.",
    tags: ['web3', 'solidity', 'NFT', 'remix'],
  },
  {
    slug: 'creating-a-simple-nft-smart-contract-with-solidity-and-hardhat',
    title: 'Creating a Simple NFT Smart Contract with Solidity and Hardhat',
    cover: '/blog/nft-remix.webp',
    coverAlt: 'Remix IDE with Ethereum',
    date: '04 Agt 2024',
    iso: '2024-08-04',
    excerpt:
      "This tutorial provides a clear and concise introduction to creating a simple NFT smart contract using Solidity and Hardhat. You'll learn how to set up Hardhat, a powerful Ethereum development environment, and write a basic NFT contract in Solidity, the programming language for Ethereum. We'll guide you through each step, from project setup to contract deployment on a test network.",
    tags: ['web3', 'solidity', 'NFT'],
  },
  {
    slug: 'how-to-use-traefik-proxy-with-docker-compose',
    title: 'How to Use Traefik Proxy with Docker Compose?',
    cover: '/blog/traefik.webp',
    coverAlt: 'Traefik proxy architecture diagram',
    date: '21 Jul 2024',
    iso: '2024-07-21',
    excerpt:
      "In this tutorial, you'll learn how to integrate Traefik, a dynamic reverse proxy, with Docker Compose to manage and route traffic to your containerized applications. We'll guide you through the setup process, including configuring Traefik to automatically discover and route traffic to your services, setting up secure HTTPS connections, and handling multiple services with ease.",
    tags: ['docker', 'traefik'],
  },
  {
    slug: 'why-i-use-semantic-versioning',
    title: 'Why I Use Semantic Versioning?',
    cover: '/blog/semver.webp',
    coverAlt: 'Semantic versioning diagram',
    date: '20 Jul 2024',
    iso: '2024-07-20',
    excerpt:
      "Semantic versioning is more than just a versioning strategy—it's a powerful tool for maintaining clear and consistent communication within your development team and with your users. In this blog post, I'll explain why I rely on semantic versioning to manage software releases, and how it helps in tracking changes, ensuring compatibility, and preventing unexpected breaking changes.",
    tags: ['semver'],
  },
  {
    slug: 'how-to-release-a-version-of-a-web-app-using-github-workflow-with-github-actions',
    title: 'How to release a version of a web app using GitHub Workflow with GitHub Actions',
    cover: '/blog/github-actions-release.webp',
    coverAlt: 'GitHub tags used for releases',
    date: '14 Jul 2024',
    iso: '2024-07-14',
    excerpt:
      "Releasing a new version of your web app can be streamlined and automated using GitHub Workflow and GitHub Actions. In this step-by-step guide, you'll learn how to set up a CI/CD pipeline that automates the release process, from code integration to deployment. We'll cover how to create a workflow file, configure GitHub Actions to build and test your app, and automate versioning and deployment to your chosen environment.",
    tags: ['github-actions', 'docker'],
  },
]

export function blogPostUrl(slug: string) {
  return `https://masb0ymas.com/blog/${slug}`
}
