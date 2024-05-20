import WhoAmI from "@/components/WhoAmI";
import NavWhoami from "@/components/NavWhoami";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "whoami",
};

export default function WhoamiPage() {
  return (
    <div className="bg-black">
      <NavWhoami />
      <WhoAmI />
    </div>
  );
}
