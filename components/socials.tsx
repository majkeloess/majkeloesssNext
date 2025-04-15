import Link from "next/link";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandStrava,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { MotionLi } from "./motion/MotionLi";

type SocialItem = {
  href: string;
  icon: React.ReactNode;
  color: string;
};

const socialItems: SocialItem[] = [
  {
    href: "https://www.instagram.com/majkeloess/",
    icon: <IconBrandInstagram size={64} color="#e879f9" />,
    color: "#e879f9",
  },
  {
    href: "https://www.linkedin.com/in/majkeloess/",
    icon: <IconBrandLinkedin size={64} color="#c084fc" />,
    color: "#c084fc",
  },
  {
    href: "https://github.com/majkeloess",
    icon: <IconBrandGithub size={64} color="#38bdf8" />,
    color: "#38bdf8",
  },
  {
    href: "https://www.strava.com/athletes/113560517",
    icon: <IconBrandStrava size={64} color="#22d3ee" />,
    color: "#22d3ee",
  },
];

const ListItem = ({ href, icon }: SocialItem) => {
  return (
    <MotionLi whileHover={{ scale: 1.2 }} whileFocus={{ scale: 1.2 }}>
      <Link href={href} target="_blank">
        {icon}
      </Link>
    </MotionLi>
  );
};

export default function SocialList() {
  return (
    <ul className="flex lg:flex-col flex-row items-center gap-2">
      {socialItems.map((item) => (
        <ListItem key={item.href} {...item} />
      ))}
    </ul>
  );
}
