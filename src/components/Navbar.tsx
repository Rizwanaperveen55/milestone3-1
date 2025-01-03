'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu toggle
import ThemeSwitcher from "@/components/ThemeSwitcher"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/' },
    
  ];

  return (
    <nav className="bg-light-primary dark:bg-dark-primary text-light-secondary dark:text-dark-secondary w-full fixed z-10 shadow-md">
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      {/* Logo */}
      
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
          >
            {item.label}
          </Link>
        ))}
        <ThemeSwitcher />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? (
            <FiX className="text-2xl text-light-secondary dark:text-dark-secondary" />
          ) : (
            <FiMenu className="text-2xl text-light-secondary dark:text-dark-secondary" />
          )}
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden bg-light-primary dark:bg-dark-primary">
        <div className="space-y-4 px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)} // Close menu on link click
              className="block text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <ThemeSwitcher />
        </div>
      </div>
    )}
  </nav>
  );
}
