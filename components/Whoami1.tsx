"use client";
import {
  IconUser,
  IconMapPin,
  IconSchool,
  IconLanguage,
  IconAdjustmentsHeart,
  IconMail,
} from "@tabler/icons-react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundGradient from "@/components/ui/background-gradient";

export default function Whoami1() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 1, duration: 1 }}
      className="lg:w-5/6"
    >
      <BackgroundGradient className="rounded-[22px] p-4 lg:p-10 bg-black">
        <ul className="flex flex-col text-lg gap-2 lg:text-xl  text-white mt-4 mb-2 ">
          <li className="flex flex-row gap-5 items-center">
            <IconUser size={35} />
            <p>
              Mi<span className="text-pink-500">c</span>
              <span className="text-purple-500">h</span>ał Saturczak
            </p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <IconAdjustmentsHeart size={35} />
            <p>22 years</p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <IconMapPin size={35} />
            <p>
              Cr<span className="text-indigo-500">a</span>cov, Poland
            </p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <IconSchool size={35} />
            <p>AGH University of Technology</p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <IconLanguage size={35} />
            <p>English, Polish</p>
          </li>
          <li className="flex flex-row gap-5 items-center">
            <IconMail size={35} />
            <Link href="mailto:msaturczakk@gmail.com" target="_blank">
              <p>
                <span className="text-pink-500">m</span>
                saturczakk@gmail.com
              </p>
            </Link>
          </li>
        </ul>
      </BackgroundGradient>
    </motion.div>
  );
}
