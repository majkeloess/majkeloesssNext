import WhoAmI from "@/components/whoami"
import type { Metadata } from "next"
import { Navigation } from "@/components/nav"

export const metadata: Metadata = {
  title: "whoami",
}

export const experimental_ppr = true

export default function WhoamiPage() {
  return (
    <div className="bg-black">
      <Navigation title="whoami" />
      <WhoAmI />
    </div>
  )
}
