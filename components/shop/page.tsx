import Link from "next/link";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width image section */}
      <section className="relative w-screen h-[500px]">
        <img
          src="/images/shop-banner.jpg" // Make sure this image exists in the public/images folder
          alt="Shop Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for text contrast */}
        <div className="absolute inset-0 flex justify-center items-center text-center">
          <h1 className="text-4xl font-bold text-white">Welcome to Our Shop</h1>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example product card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/product1.jpg" // Example product image
              alt="Product 1"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Coffee Mug</h3>
              <p className="text-gray-500">$10.00</p>
              <Link
                href="/shop/product/1"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Product
              </Link>
            </div>
          </div>

          {/* Example product card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/product2.jpg" // Example product image
              alt="Product 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Coffee Beans</h3>
              <p className="text-gray-500">$20.00</p>
              <Link
                href="/shop/product/2"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Product
              </Link>
            </div>
          </div>

          {/* Example product card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="/images/product3.jpg" // Example product image
              alt="Product 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">Coffee Beans Pack</h3>
              <p className="text-gray-500">$25.00</p>
              <Link
                href="/shop/product/3"
                className="mt-4 inline-block text-blue-500 hover:underline"
              >
                View Product
              </Link>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
