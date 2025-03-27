import Dashboard from "@/components/dashboard";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Dashboard>
      <h1 className="text-4xl font-bold mb-4">Welcome to My Website</h1>
      <p className="text-lg text-gray-600">Build modern websites with Next.js & ShadCN.</p>
      <Button className="mt-4">Get Started</Button>
    </Dashboard>
  );
}
