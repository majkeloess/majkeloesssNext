import {
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react"
import animations from "@/lib/motion"
import { MotionUl } from "./motion/MotionUl"
import { MotionLi } from "./motion/MotionLi"

const ListItem = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <MotionLi
      variants={animations.listItem}
      whileHover={{ scale: 1.2 }}
      whileFocus={{ scale: 1.2 }}
    >
      {icon}
    </MotionLi>
  )
}

export const TechnologyList = () => {
  return (
    <MotionUl
      variants={animations.parentList}
      initial="hidden"
      animate="show"
      className="flex flex-row justify-center align-middle items-center gap-1 mt-32 flex-wrap px-12 md:px-0"
    >
      <MotionLi variants={animations.listItem}>
        <p className=" text-2xl font-normal mx-5 text-center md:text-left md:mb-0 mb-4">
          Techno<span className="text-pink-500">lo</span>gies I ha
          <span className="text-pink-500">ve</span>{" "}
          <span className="bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
            experience
          </span>{" "}
          with:
        </p>
      </MotionLi>
      <ListItem icon={<IconBrandHtml5 size={48} color="#22d3ee" />} />
      <ListItem icon={<IconBrandCss3 size={48} color="#38bdf8" />} />
      <ListItem icon={<IconBrandTailwind size={48} color="#c084fc" />} />
      <ListItem icon={<IconBrandJavascript size={48} color="#e879f9" />} />
      <ListItem icon={<IconBrandTypescript size={48} color="#e879f9" />} />
      <ListItem icon={<IconBrandReact size={48} color="#c084fc" />} />
      <ListItem icon={<IconBrandNextjs size={48} color="#c084fc" />} />
      <ListItem icon={<IconBrandFramerMotion size={48} color="#c084fc" />} />
      <ListItem icon={<IconBrandGit size={48} color="#818cf8" />} />
    </MotionUl>
  )
}
