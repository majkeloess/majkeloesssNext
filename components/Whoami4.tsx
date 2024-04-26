"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import BackgroundGradient from "@/components/ui/background-gradient";
import StravaData from "./StravaData";
import { motion } from "framer-motion";
export default function Whoami4() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      className="lg:w-5/12"
      ref={ref}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 2.5, duration: 1 }}
    >
      <BackgroundGradient className="rounded-[22px] p-6 lg:p-10 bg-black">
        <StravaData />
      </BackgroundGradient>
    </motion.div>
  );
}
