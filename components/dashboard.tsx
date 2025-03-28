"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  const pathname = usePathname(); // Get the current route
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Coffee House</h1>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          <Link
            href="/dashboard/shop"
            className={`px-2 py-1 transition ${
              pathname === "/dashboard/shop"
                ? "underline text-blue-500 font-semibold"
                : "text-dark-700 hover:text-yellow-900"
            }`}
          >
            Shop
          </Link>

          {/* Our Story with Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="/"
              className={`px-2 py-1 transition ${
                pathname === "/"
                  ? "underline text-blue-500 font-semibold"
                  : "text-dark-700 hover:text-yellow-900"
              }`}
            >
              Our Story
            </Link>

            <div
                    className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden transition-opacity duration-200 z-50 ${
                      isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                  >
                    <Link
                      href="/dashboard/our-mission"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Our Mission
                    </Link>
                    <Link
                      href="/dashboard/our-team"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                    >
                      Our Team
                    </Link>
                                <Link
                        href="/dashboard/about"
                        className={`px-2 py-1 transition ${
                          pathname === "/dashboard/about"
                            ? "underline text-blue-500 font-semibold"
                            : "text-dark-700 hover:text-yellow-900"
                        }`}
                      >
                        About
                      </Link>
                  </div>

          </div>

          <Link
            href="/dashboard/our-menu"
            className={`px-2 py-1 transition ${
              pathname === "/dashboard/our-menu"
                ? "underline text-blue-500 font-semibold"
                : "text-dark-700 hover:text-yellow-900"
            }`}
          >
            Our Menu
          </Link>

          <Link
            href="/dashboard/store-locator"
            className={`px-2 py-1 transition ${
              pathname === "/dashboard/store-locator"
                ? "underline text-blue-500 font-semibold"
                : "text-dark-700 hover:text-yellow-900"
            }`}
          >
            Store Locator
          </Link>

      
        </nav>
      </header>

      <main className="container mx-auto p-4">{children}</main>
    </div>
  );
}
