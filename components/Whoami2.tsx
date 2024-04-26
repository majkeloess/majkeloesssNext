"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundGradient from "@/components/ui/background-gradient";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStrava,
  IconBrandInstagram,
} from "@tabler/icons-react";

export default function Whoami2() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      className="lg:w-1/6"
      ref={ref}
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 1.5, duration: 1 }}
    >
      <BackgroundGradient className="rounded-[22px] p-4 lg:p-10 bg-black">
        <ul className="flex lg:flex-col flex-row items-center gap-2">
          <motion.li whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
            <Link href="https://www.instagram.com/majkeloess/" target="_blank">
              <IconBrandInstagram size={64} color="#e879f9" />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
            <Link
              href="https://www.linkedin.com/in/majkeloess/"
              target="_blank"
            >
              <IconBrandLinkedin size={64} color="#c084fc" />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
            <Link href="https://github.com/majkeloess" target="_blank">
              <IconBrandGithub size={64} color="#38bdf8" />
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
            <Link
              href="https://www.strava.com/athletes/113560517"
              target="_blank"
            >
              <IconBrandStrava size={64} color="#22d3ee" />
            </Link>
          </motion.li>
        </ul>
      </BackgroundGradient>
    </motion.div>
  );
}
