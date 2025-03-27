"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface PageProps {
  children: ReactNode;
}

export default function Page({ children }: PageProps) {
  const pathname = usePathname(); // Get the current route

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Coffee House</h1>

        {/* Navigation Links */}
        <nav className="flex gap-6">
          {[
            { name: "Shop", path: "/dashboard/shop" },
            { name: "Our Story", path: "/dashboard" },
            { name: "Our Menu", path: "/dashboard/our-menu" },
            { name: "Store Locator", path: "/dashboard/store-locator" },
            { name: "About", path: "/dashboard/about" },
          ].map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`px-2 py-1 transition ${
                pathname === link.path
                  ? "underline text-blue-500 font-semibold"
                  : "text-dark-700 hover:text-yellow-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </header>

      <main className="container mx-auto p-4">{children}</main>
      
    </div>
  );
}
