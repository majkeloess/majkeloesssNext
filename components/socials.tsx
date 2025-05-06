import { AnimatedMotionDivWithBackground } from "@/components/motion/MotionDiv"

import Link from "next/link"
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStrava,
} from "@tabler/icons-react"
import { MotionLi } from "./motion/MotionLi"

type SocialItem = {
  href: string
  icon: React.ReactNode
  color: string
}

const socialItems: SocialItem[] = [
  {
    href: "https://www.linkedin.com/in/majkeloess/",
    icon: <IconBrandLinkedin size={60} color="#c084fc" />,
    color: "#c084fc",
  },
  {
    href: "https://github.com/majkeloess",
    icon: <IconBrandGithub size={60} color="#38bdf8" />,
    color: "#38bdf8",
  },
  {
    href: "https://www.strava.com/athletes/113560517",
    icon: <IconBrandStrava size={60} color="#22d3ee" />,
    color: "#22d3ee",
  },
]

const ListItem = ({ href, icon }: SocialItem) => {
  return (
    <MotionLi whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
      <Link href={href} target="_blank">
        {icon}
      </Link>
    </MotionLi>
  )
}

const SocialList = () => {
  return (
    <ul className="flex lg:flex-col flex-row items-center justify-evenly w-full lg:h-48">
      {socialItems.map((item) => (
        <ListItem key={item.href} {...item} />
      ))}
    </ul>
  )
}

export const Socials = () => {
  return (
    <AnimatedMotionDivWithBackground>
      <SocialList />
    </AnimatedMotionDivWithBackground>
  )
}
