import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStrava,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MotionLi } from "./MotionLi";

export default function SocialList() {
  return (
    <ul className="flex lg:flex-col flex-row items-center gap-2">
      <MotionLi whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
        <Link href="https://www.instagram.com/majkeloess/" target="_blank">
          <IconBrandInstagram size={64} color="#e879f9" />
        </Link>
      </MotionLi>
      <MotionLi whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
        <Link href="https://www.linkedin.com/in/majkeloess/" target="_blank">
          <IconBrandLinkedin size={64} color="#c084fc" />
        </Link>
      </MotionLi>
      <MotionLi whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
        <Link href="https://github.com/majkeloess" target="_blank">
          <IconBrandGithub size={64} color="#38bdf8" />
        </Link>
      </MotionLi>
      <MotionLi whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
        <Link href="https://www.strava.com/athletes/113560517" target="_blank">
          <IconBrandStrava size={64} color="#22d3ee" />
        </Link>
      </MotionLi>
    </ul>
  );
}
