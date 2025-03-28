import React from "react";
import Dashboard from "@/components/dashboard";
import Mission from "@/components/our-story/our-mission/mission";

export default function page() {
  return (
    <div>
      <Dashboard>
        <Mission />
      </Dashboard>
    </div>
  );
}
