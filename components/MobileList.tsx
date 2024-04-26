"use client";
import { motion } from "framer-motion";
import {
  IconBrandCpp,
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import animations from "@/lib/motion";

export default function MobileList() {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "spring", delay: 0.5, duration: 1 }}
        className="text-center text-2xl font-medium mt-28 mb-8 mx-5"
      >
        Techno<span className="text-pink-500">lo</span>gies I ha
        <span className="text-pink-500">ve</span>{" "}
        <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
          experience
        </span>{" "}
        with:
      </motion.p>
      <motion.ul
        variants={animations.parentList}
        initial="hidden"
        animate="show"
        className="flex flex-row justify-center align-middle items-center gap-2 my-4"
      >
        <motion.li
          variants={animations.listItemDown}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandHtml5 size={60} color="#22d3ee" />
        </motion.li>
        <motion.li
          variants={animations.listItemDown}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandCss3 size={60} color="#38bdf8" />
        </motion.li>
        <motion.li
          variants={animations.listItemDown}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandTailwind size={60} color="#c084fc" />
        </motion.li>
        <motion.li
          variants={animations.listItemDown}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandJavascript size={60} color="#e879f9" />
        </motion.li>
        <motion.li
          variants={animations.listItemDown}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandTypescript size={60} color="#e879f9" />
        </motion.li>
      </motion.ul>
      <motion.ul
        variants={animations.parentList}
        initial="hidden"
        animate="show"
        className="flex flex-row justify-center align-middle items-center gap-2 my-4"
      >
        <motion.li
          variants={animations.listItem}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandReact size={60} color="#c084fc" />
        </motion.li>
        <motion.li
          variants={animations.listItem}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandNextjs size={60} color="#c084fc" />
        </motion.li>
        <motion.li
          variants={animations.listItem}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandFramerMotion size={60} color="#c084fc" />
        </motion.li>
        <motion.li
          variants={animations.listItem}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandGit size={60} color="#818cf8" />
        </motion.li>
        <motion.li
          variants={animations.listItem}
          whileHover={{ scale: 1.2 }}
          whileFocus={{ scale: 1.2 }}
        >
          <IconBrandCpp size={60} color="#38bdf8" />
        </motion.li>
      </motion.ul>
    </div>
  );
}
