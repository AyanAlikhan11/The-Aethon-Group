// lib/constants.ts

export const SITE_CONFIG = {
  name: 'The Aethon Group',
  description: 'Premier strategic consulting firm delivering transformative solutions for enterprise growth and operational excellence.',
  url: 'https://www.theaethongroup.com',
  ogImage: '/images/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/theaethongroup',
    linkedin: 'https://linkedin.com/company/theaethongroup',
    facebook: 'https://facebook.com/theaethongroup',
    instagram: 'https://instagram.com/theaethongroup',
  },
  contact: {
    email: 'info@theaethongroup.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Business Avenue',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'USA',
    },
  },
}

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Strategic Planning', href: '/services/strategic-planning' },
      { name: 'Business Transformation', href: '/services/transformation' },
      { name: 'Leadership Advisory', href: '/services/leadership' },
      { name: 'Market Analysis', href: '/services/market-analysis' },
      { name: 'Innovation Consulting', href: '/services/innovation' },
      { name: 'Risk Management', href: '/services/risk-management' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  {
    name: 'Insights',
    href: '/insights',
    submenu: [
      { name: 'Blog', href: '/insights/blog' },
      { name: 'Case Studies', href: '/insights/case-studies' },
      { name: 'Whitepapers', href: '/insights/whitepapers' },
      { name: 'Webinars', href: '/insights/webinars' },
    ],
  },
  { name: 'Contact', href: '/contact' },
]

export const SERVICES = [
  {
    id: 'strategic-planning',
    title: 'Strategic Planning',
    description: 'Develop comprehensive strategies that align with your vision and drive sustainable growth.',
    icon: 'Target',
    color: 'blue',
    href: '/services/strategic-planning',
  },
  {
    id: 'transformation',
    title: 'Business Transformation',
    description: 'Navigate complex transformations with confidence through our proven methodologies.',
    icon: 'TrendingUp',
    color: 'emerald',
    href: '/services/transformation',
  },
  {
    id: 'leadership',
    title: 'Leadership Advisory',
    description: 'Empower your leadership team with insights and frameworks for exceptional performance.',
    icon: 'Users',
    color: 'purple',
    href: '/services/leadership',
  },
  {
    id: 'market-analysis',
    title: 'Market Analysis',
    description: 'Gain competitive advantage through deep market insights and data-driven decisions.',
    icon: 'BarChart3',
    color: 'orange',
    href: '/services/market-analysis',
  },
  {
    id: 'innovation',
    title: 'Innovation Consulting',
    description: 'Foster a culture of innovation and bring breakthrough ideas to market faster.',
    icon: 'Lightbulb',
    color: 'pink',
    href: '/services/innovation',
  },
  {
    id: 'risk-management',
    title: 'Risk Management',
    description: 'Identify, assess, and mitigate risks to protect and enhance enterprise value.',
    icon: 'Shield',
    color: 'cyan',
    href: '/services/risk-management',
  },
]

export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'News', href: '/news' },
  ],
  services: [
    { name: 'Strategic Planning', href: '/services/strategic-planning' },
    { name: 'Business Transformation', href: '/services/transformation' },
    { name: 'Leadership Advisory', href: '/services/leadership' },
    { name: 'Market Analysis', href: '/services/market-analysis' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Whitepapers', href: '/whitepapers' },
    { name: 'Webinars', href: '/webinars' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
}

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
}

export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
}