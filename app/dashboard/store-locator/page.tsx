import React from 'react'
import Location from "@/components/store-locator/map";
import Dashboard from "@/components/dashboard";

export default function Page() {
  return (
    <div>
    <Dashboard>
        <Location/>
    </Dashboard>
    </div>
  )
}
