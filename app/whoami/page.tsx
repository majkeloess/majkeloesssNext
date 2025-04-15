import { Navigation } from "@/components/navigation";
import WhoAmI from "@/components/whoami-root";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "whoami",
};

export default function WhoamiPage() {
  return (
    <div className="bg-black">
      <Navigation title="whoami" />
      <WhoAmI />
    </div>
  );
}
