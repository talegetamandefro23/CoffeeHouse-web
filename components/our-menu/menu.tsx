import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const menu = [
  {
    category: "Hot Drinks",
    items: [
      { name: "Espresso", price: "$2.50", image: "/images/espresso.jpg" },
      { name: "Cappuccino", price: "$3.50", image: "/images/cappuccino.jpg" },
      { name: "Latte", price: "$4.00", image: "/images/latte.jpg" },
      { name: "Mocha", price: "$4.50", image: "/images/mocha.jpg" },
    ],
  },
  {
    category: "Cold Drinks",
    items: [
      { name: "Iced Latte", price: "$4.00", image: "/images/iced-latte.jpg" },
      { name: "Cold Brew", price: "$4.50", image: "/images/cold-brew.jpg" },
      { name: "Iced Mocha", price: "$5.00", image: "/images/iced-mocha.jpg" },
      { name: "Frappe", price: "$5.50", image: "/images/frappe.jpg" },
    ],
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", price: "$2.50", image: "/images/croissant.jpg" },
      { name: "Muffin", price: "$3.00", image: "/images/muffin.jpg" },
      { name: "Cheesecake", price: "$4.00", image: "/images/cheesecake.jpg" },
      { name: "Brownie", price: "$3.50", image: "/images/brownie.jpg" },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Our Menu</h1>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        {menu.map((section, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {section.items.map((item, idx) => (
                <Card key={idx} className="shadow-lg transition-transform transform hover:scale-105">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-xl font-medium text-white">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 text-white">
                    <p className="text-lg">{item.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
