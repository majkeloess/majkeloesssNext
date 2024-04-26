"use client";
import { motion } from "framer-motion";

export default function MainButton({ text }: { text: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      className="px-8 py-2 rounded-2xl bg-gradient-to-tl from-blue-500 via-indigo-600 to-purple-700 text-white font-bold "
    >
      {text}
    </motion.button>
  );
}
