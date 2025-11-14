"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

type NavItem = {
  title: string;
  url: string;
};

const navItems: Array<NavItem> = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Learning Hub", url: "/learning-hub" },
  { title: "Schools Network", url: "/school-network" },
  { title: "Login", url: "/login" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black sticky top-0 w-full z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            priority
            className="rounded"
          />
        </Link>

        {/* Hamburger button (mobile) */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`
            absolute top-full inset-x-0 bg-white border-t border-foreground/30
            transition-max-h duration-[800ms] ease-in-out overflow-hidden
            ${isOpen ? "max-h-75" : "max-h-0"}
            md:static md:max-h-full md:flex md:space-x-6 md:border-0 md:bg-transparent md:overflow-visible
          `}
        >
          {navItems.map(({ title, url }) => {
            const isActive = url === pathname;
            const isLogin = title === "Login";

            return (
              <li key={url} className="md:my-0 my-2">
                <Link
                  href={url}
                  className={`
          block px-4 py-2 rounded-md font-medium transition duration-400 ease-in-out 
          ${
            isLogin
              ? "bg-primary text-background duration-400 ease-in-out transition-all transform hover:scale-105 "
              : isActive
              ? "text-red-300"
              : "text-foreground hover:bg-secondary duration-400 ease-in-out transition-all transform hover:scale-105"
          }
        `}
                  onClick={() => setIsOpen(false)}
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
