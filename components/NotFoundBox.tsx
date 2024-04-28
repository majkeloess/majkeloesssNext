import Link from "next/link";
import BackgroundGradient from "@/components/ui/background-gradient";

export default function NotFoundBox() {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 lg:p-10 bg-black text-2xl lg:text-4xl">
      {" "}
      <p>
        Are you lost<span className="text-indigo-500">?</span> Return{" "}
        <Link href="/">
          {" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Home
          </span>
        </Link>
      </p>
    </BackgroundGradient>
  );
}
