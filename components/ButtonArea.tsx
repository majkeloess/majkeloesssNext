import MainButton from "./MainButton";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";
import animations from "@/lib/motion";
export default function ButtonArea() {
  return (
    <MotionDiv
      className="flex flex-row gap-6"
      variants={animations.textVariant(1.5)}
      initial="hidden"
      whileInView="show"
    >
      <Link href="/whoami">
        <MainButton text="whoami" />
      </Link>
      <Link href="/projects">
        <MainButton text="projects" />
      </Link>
    </MotionDiv>
  );
}
