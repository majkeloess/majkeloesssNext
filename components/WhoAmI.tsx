"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundGradient from "@/components/ui/background-gradient";

import StravaData from "./StravaData";
import Whoami1 from "./Whoami1";
import Whoami2 from "./Whoami2";
import Whoami3 from "./Whoami3";
import Whoami4 from "./Whoami4";

export default function WhoAmI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center flex-col items-center mb-20">
      <div className="lg:w-7/12 flex lg:flex-row  gap-8 lg:mt-40 mt-24 items-center flex-col">
        <Whoami1 />
        <Whoami2 />
      </div>
      {/* tutaj drugra kolumna */}
      <div className="lg:w-7/12 flex flex-col lg:flex-row gap-8 mt-10 items-center">
        <Whoami3 />
        <Whoami4 />
      </div>
    </div>
  );
}
