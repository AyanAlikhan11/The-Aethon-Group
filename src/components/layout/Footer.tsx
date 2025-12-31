// components/layout/Footer.tsx
import Link from 'next/link'
import { 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight
} from 'lucide-react'
import Logo from '@/components/common/logo'

const footerLinks = {
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

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
        <div className="grid lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-6 text-white/70 leading-relaxed max-w-sm">
              Empowering organizations to achieve extraordinary results through 
              strategic excellence and innovative solutions.
            </p>
            
            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a 
                href="mailto:info@theaethongroup.com"
                className="flex items-center gap-3 text-white/70 hover:text-accent-gold transition-colors"
              >
                <Mail className="w-5 h-5" />
                info@theaethongroup.com
              </a>
              <a 
                href="tel:+15551234567"
                className="flex items-center gap-3 text-white/70 hover:text-accent-gold transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 (555) 123-4567
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>123 Business Avenue<br />New York, NY 10001</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6 text-accent-gold">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-accent-gold transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6 text-accent-gold">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-accent-gold transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6 text-accent-gold">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-white/70 hover:text-accent-gold transition-colors inline-flex items-center gap-1 group"
                    >
                      {link.name}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-heading font-semibold text-lg mb-6 text-accent-gold">Newsletter</h4>
              <p className="text-white/70 text-sm mb-4">
                Subscribe to receive insights and updates.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent-gold transition-all"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 rounded-xl bg-accent-gold text-primary-900 font-medium hover:bg-accent-gold-light transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} The Aethon Group. All rights reserved.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/50 text-sm hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}