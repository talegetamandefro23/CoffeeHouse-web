"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function StoreLocatorPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample store data (Replace with actual API data)
  const stores = [
    { name: "Store 1", location: "Downtown, City" },
    { name: "Store 2", location: "Uptown, City" },
    { name: "Store 3", location: "Midtown, City" },
    { name: "Store 4", location: "Eastside, City" },
    { name: "Store 5", location: "Westend, City" },
  ];

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    store.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Store Locator Banner */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <img
          src="/images/store-locator-banner.jpg" // Ensure this image is in public/images
          alt="Store Locator"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white">Find a Store Near You</h1>
        </div>

      </section>

      {/* Store Search Input */}
      <section className="p-8 text-center">
        <input
          type="text"
          placeholder="Search for a store..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-3 w-full sm:w-1/2 lg:w-1/3 mx-auto border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </section>

      {/* Store List */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold text-center">Nearby Stores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredStores.length > 0 ? (
            filteredStores.map((store, index) => (
              <Card key={index} className="bg-white shadow-lg rounded-lg">
                <CardHeader>
                  <CardTitle>{store.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{store.location}</p>
                  <Link
                    href={`/store/${store.name}`}
                    className="text-blue-500 hover:underline mt-4 inline-block"
                  >
                    View Details
                  </Link>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">No stores found.</p>
          )}
        </div>
      </section>

      {/* Footer
      <footer className="text-center py-4 text-gray-500">© 2025 Coffee House</footer> */}
    </div>
  );
}
