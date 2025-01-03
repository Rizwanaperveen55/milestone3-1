import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { href: 'https://facebook.com', icon: <FaFacebook /> },
    { href: 'https://twitter.com', icon: <FaTwitter /> },
    { href: 'https://instagram.com', icon: <FaInstagram /> },
    { href: 'https://linkedin.com', icon: <FaLinkedin /> },
  ];

  return (
    <footer className="bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary py-8">
      <div className="container mx-auto px-6">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Brand Info */}
          <div>
            <h2 className="text-2xl font-bold text-light-accent dark:text-dark-accent mb-4">
              MyBrand
            </h2>
            <p className="text-light-secondary dark:text-dark-secondary">
              Empowering your business with innovative solutions. Let’s build something great together.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold text-light-accent dark:text-dark-accent mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent text-2xl transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-light-secondary dark:border-dark-secondary pt-6 text-center">
          <p className="text-light-secondary dark:text-dark-secondary">
            &copy; {currentYear} . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
