"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Coffee House</h1>

        {/* Navigation Links */}
        <nav className="flex gap-6 items-center">
          <Link
            href="/dashboard/shop"
            className={`px-2 py-1 transition ${
              pathname === "/dashboard/shop"
                ? "underline text-dark-500 font-semibold"
                : "text-dark-700 hover:text-yellow-900"
            }`}
          >
            Shop
          </Link>

          {/* Our Story with Dropdown - Fix: Used flex for alignment */}
          <div
            className="relative flex items-center"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <Link
              href="/dashboard"
              className={`px-2 py-1 transition ${
                pathname === "/dashboard"
                  ? "underline text-dark-500 font-semibold"
                  : "text-dark-700 hover:text-yellow-900"
              }`}
            >
              Our Story
            </Link>

            {/* Dropdown Menu - Positioned Below */}
            <div
              className={`absolute left-0 top-full mt-1 min-w-max bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-200 z-50 ${
                isDropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <Link
                href="/dashboard/our-story/our-mission"
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
                  pathname === "/dashboard/our-story/our-mission"
                    ? "underline text-dark-500 font-semibold"
                    : "text-gray-700 hover:text-yellow-900"
                }`}
              >
                Our Mission
              </Link>
              <Link
                href="/dashboard/our-story/our-team"
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
                  pathname === ""
                    ? "underline text-dark-500 font-semibold"
                    : "text-gray-700 hover:text-yellow-900"
                }`}
              >
                Our Team
              </Link>
              <Link
                href="/dashboard/our-story/about"
                className={`block px-4 py-2 text-gray-700 hover:bg-gray-200 ${
                  pathname === "/dashboard/our-story/about"
                    ? "underline text-dark-500 font-semibold"
                    : "text-gray-700 hover:text-yellow-900"
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
                ? "underline dark-blue-500 font-semibold"
                : "text-dark-700 hover:text-yellow-900"
            }`}
          >
            Our Menu
          </Link>

          <Link
            href="/dashboard/store-locator"
            className={`px-2 py-1 transition ${
              pathname === "/dashboard/store-locator"
                ? "underline text-dark-500 font-semibold"
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
