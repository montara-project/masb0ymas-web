export type LegalBlock = {
  heading: string
  paragraphs?: string[]
  bullets?: string[]
  subSections?: {
    heading: string
    paragraphs?: string[]
    bullets?: string[]
  }[]
  /** Renders the site email + website contact lines when true. */
  contact?: boolean
  /** A closing paragraph rendered after bullets/contact. */
  trailing?: string
}

export const PRIVACY_LAST_UPDATED = 'August 17, 2026'

export const PRIVACY_SECTIONS: LegalBlock[] = [
  {
    heading: '1. Introduction',
    paragraphs: [
      'This Privacy Policy describes how masb0ymas.com ("we", "our", or "us") collects, uses, and protects your information when you visit our website. We are committed to protecting your privacy and being transparent about our data practices.',
    ],
  },
  {
    heading: '2. Information We Collect',
    subSections: [
      {
        heading: '2.1 Information You Provide',
        paragraphs: ['We may collect information you voluntarily provide, including:'],
        bullets: [
          'Contact information when you reach out via email or contact forms',
          'Comments or feedback you submit on blog posts (if commenting is enabled)',
          'Information in messages or inquiries about projects or services',
        ],
      },
      {
        heading: '2.2 Automatically Collected Information',
        paragraphs: ['We may automatically collect certain information, including:'],
        bullets: [
          'IP address and general location information',
          'Browser type, device information, and operating system',
          'Pages visited, time spent on pages, and navigation patterns',
          'Referral sources and search terms used to find our website',
          'Date and time of visits',
        ],
      },
    ],
  },
  {
    heading: '3. How We Use Your Information',
    paragraphs: ['We use the collected information for the following purposes:'],
    bullets: [
      'To respond to your inquiries and provide customer support',
      'To improve our website content, user experience, and functionality',
      'To analyze website traffic and usage patterns',
      'To prevent fraud and ensure website security',
      'To comply with legal obligations',
      'To send occasional updates about new blog posts or projects (only if you opt-in)',
    ],
  },
  {
    heading: '4. Cookies and Tracking Technologies',
    subSections: [
      {
        heading: '4.1 Essential Cookies',
        paragraphs: [
          'We use essential cookies that are necessary for the website to function properly, including theme preferences (dark/light mode) and basic functionality.',
        ],
      },
      {
        heading: '4.2 Analytics Cookies',
        paragraphs: [
          'We may use analytics services like Google Analytics to understand how visitors interact with our website. These services may use cookies to collect anonymous usage data.',
        ],
      },
      {
        heading: '4.3 Managing Cookies',
        paragraphs: [
          'You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.',
        ],
      },
    ],
  },
  {
    heading: '5. Third-Party Services',
    paragraphs: ['Our website may integrate with third-party services, including:'],
    bullets: [
      'Analytics Services: Google Analytics or similar services to track website usage',
      'Hosting Services: Cloud hosting providers for website delivery',
      'Content Delivery Networks (CDNs): For faster content delivery',
      'Social Media Platforms: Links to social profiles and project repositories',
      'Email Services: For contact form submissions and communications',
    ],
  },
  {
    heading: '6. Data Sharing and Disclosure',
    paragraphs: [
      'We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:',
    ],
    bullets: [
      'With your explicit consent',
      'To comply with legal obligations or court orders',
      'To protect our rights, property, or safety, or that of others',
      'With service providers who assist in website operations (under confidentiality agreements)',
      'In connection with a business transfer or merger (with prior notice)',
    ],
  },
  {
    heading: '7. Blog and Content Interaction',
    subSections: [
      {
        heading: '7.1 Blog Comments',
        paragraphs: [
          'If commenting features are enabled on blog posts, any information you provide in comments may be publicly visible. Please do not share sensitive personal information in comments.',
        ],
      },
      {
        heading: '7.2 Content Subscriptions',
        paragraphs: [
          'If you opt-in to receive notifications about new blog posts or projects, we will use your email address solely for this purpose. You can unsubscribe at any time.',
        ],
      },
    ],
  },
  {
    heading: '8. Project Portfolio Data',
    paragraphs: [
      'Our project portfolio may include case studies and examples of work. Any client or project information displayed has been:',
    ],
    bullets: [
      'Anonymized or generalized to protect privacy',
      'Shared with explicit permission from clients',
      'Limited to publicly available information',
      'Presented in accordance with confidentiality agreements',
    ],
  },
  {
    heading: '9. Data Security',
    paragraphs: [
      'We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.',
    ],
    bullets: [
      'HTTPS encryption for all data transmission',
      'Regular security updates and monitoring',
      'Limited access to personal information',
      'Secure hosting infrastructure',
    ],
  },
  {
    heading: '10. Data Retention',
    paragraphs: [
      'We retain your information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law. Specifically:',
    ],
    bullets: [
      'Contact inquiries: Retained for up to 2 years for follow-up purposes',
      'Analytics data: Typically retained for 26 months (Google Analytics default)',
      'Website logs: Retained for up to 90 days for security purposes',
      'Email subscriptions: Until you unsubscribe',
    ],
  },
  {
    heading: '11. Your Rights',
    paragraphs: [
      'Depending on your location, you may have the following rights regarding your personal information:',
    ],
    bullets: [
      'Access: Request information about what personal data we hold',
      'Correction: Request correction of inaccurate personal information',
      'Deletion: Request deletion of your personal information',
      'Portability: Request a copy of your data in a structured format',
      'Objection: Object to processing of your personal information',
      'Restriction: Request restriction of processing',
    ],
    trailing: 'To exercise these rights, please contact us using the information provided below.',
  },
  {
    heading: "12. Children's Privacy",
    paragraphs: [
      'Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.',
    ],
  },
  {
    heading: '13. International Data Transfers',
    paragraphs: [
      'Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.',
    ],
  },
  {
    heading: '14. Changes to This Privacy Policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.',
    ],
  },
  {
    heading: '15. Contact Information',
    paragraphs: [
      'If you have any questions about this Privacy Policy or our data practices, please contact us:',
    ],
    contact: true,
    trailing:
      'We aim to respond to privacy inquiries within 30 days. This Privacy Policy is effective as of the date last updated above. By using our website, you acknowledge that you have read and understood this Privacy Policy.',
  },
]

export const TERMS_LAST_UPDATED = 'August 17, 2026'

export const TERMS_SECTIONS: LegalBlock[] = [
  {
    heading: '1. Acceptance of Terms',
    paragraphs: [
      'By accessing and using this website (masb0ymas.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    ],
  },
  {
    heading: '2. Description of Service',
    paragraphs: [
      'This website serves as a personal portfolio showcasing professional work, projects, and blog content. The service includes but is not limited to:',
    ],
    bullets: [
      'Portfolio showcase of projects and professional work',
      'Blog articles and technical content',
      'Contact information and professional networking',
      'Code examples and technical demonstrations',
    ],
  },
  {
    heading: '3. Intellectual Property Rights',
    subSections: [
      {
        heading: '3.1 Website Content',
        paragraphs: [
          'All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of masb0ymas or its content suppliers and is protected by copyright laws.',
        ],
      },
      {
        heading: '3.2 Blog Content',
        paragraphs: [
          'All blog posts, articles, and written content are original works unless otherwise specified. You may share and reference this content with proper attribution, but commercial use requires explicit permission.',
        ],
      },
      {
        heading: '3.3 Project Code',
        paragraphs: [
          'Code examples and project demonstrations are provided for educational purposes. Unless explicitly stated otherwise, code snippets are available under the MIT License. Complete project repositories may have their own specific licenses.',
        ],
      },
    ],
  },
  {
    heading: '4. User Conduct',
    paragraphs: ['You agree not to use this website to:'],
    bullets: [
      'Violate any applicable laws or regulations',
      'Infringe upon intellectual property rights',
      'Transmit harmful, offensive, or inappropriate content',
      'Attempt to gain unauthorized access to any part of the website',
      'Use automated systems to scrape or harvest content without permission',
      'Interfere with the proper functioning of the website',
    ],
  },
  {
    heading: '5. Blog and Content Guidelines',
    subSections: [
      {
        heading: '5.1 Comments and Feedback',
        paragraphs: [
          'If commenting features are available, users must provide respectful and constructive feedback. Spam, harassment, or inappropriate content will be removed.',
        ],
      },
      {
        heading: '5.2 Content Accuracy',
        paragraphs: [
          'While efforts are made to ensure accuracy, blog content and technical articles are provided for informational purposes. Users should verify information independently before implementation.',
        ],
      },
    ],
  },
  {
    heading: '6. Project Showcase Disclaimer',
    paragraphs: [
      'Projects displayed in the portfolio are for demonstration purposes. While functional examples may be provided:',
    ],
    bullets: [
      'No warranty is provided for project functionality',
      'Projects may use third-party services or APIs that could change',
      'Source code availability varies by project and client agreements',
      'Commercial use of showcased projects requires separate licensing',
    ],
  },
  {
    heading: '7. Privacy and Data Collection',
    paragraphs: [
      'Your privacy is important. This website may collect basic analytics data to improve user experience. For detailed information about data collection and usage, please refer to our Privacy Policy.',
    ],
  },
  {
    heading: '8. Third-Party Links and Services',
    paragraphs: [
      'This website may contain links to third-party websites or services. These links are provided for convenience, and we are not responsible for the content, privacy policies, or practices of these external sites.',
    ],
  },
  {
    heading: '9. Disclaimer of Warranties',
    paragraphs: [
      'This website and its content are provided "as is" without any warranties, express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.',
    ],
  },
  {
    heading: '10. Limitation of Liability',
    paragraphs: [
      'In no event shall masb0ymas be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of this website.',
    ],
  },
  {
    heading: '11. Modifications to Terms',
    paragraphs: [
      'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the new terms.',
    ],
  },
  {
    heading: '12. Contact Information',
    paragraphs: ['If you have any questions about these Terms of Service, please contact:'],
    contact: true,
  },
  {
    heading: '13. Governing Law',
    paragraphs: [
      'These terms shall be governed by and construed in accordance with applicable laws. Any disputes arising from these terms or your use of this website shall be resolved through appropriate legal channels.',
    ],
  },
]
