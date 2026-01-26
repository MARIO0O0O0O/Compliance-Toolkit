import Link from 'next/link';
import { Scale, Mail, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Compliance Audit', href: '/consultancy#audit' },
    { name: 'HR Policy Review', href: '/consultancy#policy' },
    { name: 'Training Programs', href: '/consultancy#training' },
    { name: 'Ongoing Support', href: '/consultancy#support' },
  ],
  resources: [
    { name: 'Free Tools', href: '/tools' },
    { name: 'Compliance Blog', href: '/blog' },
    { name: 'CA Labor Law Updates', href: '/blog?tag=updates' },
    { name: 'Checklists', href: '/tools#checklists' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/consultancy#contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-california-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-california-gold">
                <Scale className="h-6 w-6 text-california-blue" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  CA Compliance
                </span>
                <span className="block text-xs text-gray-300">
                  HR Consultancy
                </span>
              </div>
            </Link>
            <p className="text-sm text-gray-300">
              Expert HR compliance consulting for California businesses.
              10+ years of municipal government experience.
              Tech-first approach to efficiency.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-california-gold"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-california-gold"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@cacompliance.com"
                className="text-gray-300 hover:text-california-gold"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-california-gold">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-california-gold">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-california-gold">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} California Compliance Consultancy. All rights reserved.
            <br />
            <span className="text-xs">
              This website provides general information and is not legal advice.
              Consult with a qualified attorney for specific legal questions.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
