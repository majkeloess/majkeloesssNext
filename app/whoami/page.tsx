import Navigation from "@/components/Navigation";
import WhoAmI from "@/components/WhoAmI";
import { Metadata } from "next";

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
