"use client";
import { motion } from "framer-motion";
import React from "react";
import WavyBackground from "./ui/wavy-background";
import Link from "next/link";
import MainButton from "./MainButton";
import Footer from "./Footer";
import Image from "next/image";

import animations from "@/lib/motion";
export default function HeroBackground() {
  return (
    <WavyBackground className="lg:pb-40 pb-32 flex flex-col items-center gap-10">
      <div className="flex lg:flex-row flex-col-reverse gap-10 items-center">
        <div>
          <div className="flex flex-col gap-10 items-center">
            <motion.div
              variants={animations.textVariant(0.5)}
              initial="hidden"
              whileInView="show"
            >
              <p className="text-base md:text-lg lg:text-xl mt-4 text-white font-normal inter-var text-center">
                Hi, I am
              </p>
              <p className="text-6xl lg:text-8xl text-white font-bold inter-var text-center">
                {/* majke<span className="text-indigo-500 hidden xl:block">e</span> */}
                majkeloe
                <span className="text-purple-500">s</span>
                <span className="text-blue-400">s</span>
              </p>
              <p className="text-base md:text-lg lg:text-xl mt-4 text-white font-normal inter-var text-center">
                Computer Science student with a passion for webDevelopment
              </p>
            </motion.div>

            <motion.div
              className="flex flex-row gap-6"
              variants={animations.textVariant(1.0)}
              initial="hidden"
              whileInView="show"
            >
              <Link href="/whoami">
                <MainButton text="whoami" />
              </Link>
              <Link href="/projects">
                <MainButton text="projects" />
              </Link>
            </motion.div>
          </div>
        </div>
        <motion.div
          variants={animations.textVariant(0.5)}
          initial="hidden"
          whileInView="show"
          className="h-[18rem] w-[18rem] rounded-full border-2 bg-cover bg-center border-blue-400 bg-gray-700"
        >
          <Image
            src="/majkeloess.png"
            width={300}
            height={300}
            alt="majkeloess"
            priority={true}
          />
        </motion.div>
      </div>
      <motion.div
        variants={animations.zoomIn(0.5, 0.5)}
        initial="hidden"
        whileInView="show"
        className="fixed bottom-0 m-4"
      >
        <Footer />
      </motion.div>
    </WavyBackground>
  );
}
