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
import { MotionUl } from "./MotionUl";
import { MotionLi } from "./MotionLi";

export default function DeviceList() {
  return (
    <MotionUl
      variants={animations.parentList}
      initial="hidden"
      animate="show"
      className="flex flex-row justify-center align-middle items-center gap-1 mb-12 mt-32"
    >
      <MotionLi variants={animations.listItem}>
        <p className=" text-2xl font-medium mx-5">
          Techno<span className="text-pink-500">lo</span>gies I ha
          <span className="text-pink-500">ve</span>{" "}
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
            experience
          </span>{" "}
          with:
        </p>
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandHtml5 size={60} color="#22d3ee" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandCss3 size={60} color="#38bdf8" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandTailwind size={60} color="#c084fc" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandJavascript size={60} color="#e879f9" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandTypescript size={60} color="#e879f9" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandReact size={60} color="#c084fc" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandNextjs size={60} color="#c084fc" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandFramerMotion size={60} color="#c084fc" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandGit size={60} color="#818cf8" />
      </MotionLi>
      <MotionLi
        variants={animations.listItem}
        whileHover={{ scale: 1.2 }}
        whileFocus={{ scale: 1.2 }}
      >
        <IconBrandCpp size={60} color="#38bdf8" />
      </MotionLi>
    </MotionUl>
  );
}
