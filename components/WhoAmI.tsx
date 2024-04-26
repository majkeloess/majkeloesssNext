"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundGradient from "@/components/ui/background-gradient";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconUser,
  IconMapPin,
  IconSchool,
  IconLanguage,
  IconAdjustmentsHeart,
  IconMail,
  IconBrandStrava,
} from "@tabler/icons-react";
import animations from "@/lib/motion";
import StravaData from "./StravaData";

export default function WhoAmI() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className="flex justify-center flex-col items-center mb-20">
      <div className="lg:w-7/12 flex lg:flex-row  gap-8 lg:mt-40 mt-24 items-center flex-col">
        <motion.div
          variants={animations.fadeIn("down", "spring", 1, 1)}
          initial="hidden"
          whileInView="show"
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
        {/* kolumna w rzedzie */}
        <motion.div
          className="lg:w-1/6"
          variants={animations.fadeIn("left", "spring", 1.5, 1)}
          initial="hidden"
          whileInView="show"
        >
          <BackgroundGradient className="rounded-[22px] p-4 lg:p-10 bg-black">
            <ul className="flex lg:flex-col flex-row items-center gap-2">
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileFocus={{ scale: 1.2 }}
              >
                <Link
                  href="https://www.instagram.com/majkeloess/"
                  target="_blank"
                >
                  <IconBrandInstagram size={64} color="#e879f9" />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileFocus={{ scale: 1.2 }}
              >
                <Link
                  href="https://www.linkedin.com/in/majkeloess/"
                  target="_blank"
                >
                  <IconBrandLinkedin size={64} color="#c084fc" />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileFocus={{ scale: 1.2 }}
              >
                <Link href="https://github.com/majkeloess" target="_blank">
                  <IconBrandGithub size={64} color="#38bdf8" />
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2 }}
                whileFocus={{ scale: 1.2 }}
              >
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
      </div>
      {/* tutaj drugra kolumna */}
      <div className="lg:w-7/12 flex flex-col lg:flex-row gap-8 mt-10 items-center">
        <motion.div
          className="lg:w-7/12 max-w-[80%] lg:max-w-full"
          variants={animations.fadeIn("right", "spring", 2, 1)}
          initial="hidden"
          whileInView="show"
        >
          <BackgroundGradient className="rounded-[22px] p-4 lg:p-10 bg-black">
            <p className="text-lg lg:text-xl text-white py-2">
              My <span className="text-cyan-500">p</span>assion lies in{" "}
              <span className="text-pink-500">s</span>elf development, running
              and working out at the gym.{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                Love
              </span>{" "}
              to take new challenge<span className="text-blue-500">s</span>,
              learn something new and surpass my previous records. Everyday is
              good day <span className="text-purple-500">t</span>
              <span className="text-pink-500">o</span>{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                become
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
                better
              </span>
              .
            </p>
          </BackgroundGradient>
        </motion.div>
        <motion.div
          ref={ref}
          className="lg:w-5/12"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", delay: 2.5, duration: 1 }}
        >
          <BackgroundGradient className="rounded-[22px] p-6 lg:p-10 bg-black">
            <StravaData />
          </BackgroundGradient>
        </motion.div>
      </div>
    </div>
  );
}
