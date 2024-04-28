import animations from "@/lib/motion";
import Link from "next/link";
import { MotionDiv } from "./MotionDiv";

export default function NavProjects() {
  return (
    <MotionDiv
      variants={animations.navVariants}
      initial="hidden"
      whileInView="show"
      className="fixed w-full z-50 bg-black"
    >
      <p className=" m-5 xl:text-xl text-xl lg:text-2xl text-white font-bold inter-var text-center xl:text-left">
        <Link href="/">
          majkeloe<span className="text-purple-500">s</span>
          <span className="text-blue-400">s</span>
        </Link>{" "}
        &gt; <span className="text-indigo-400">p</span>rojects
      </p>
      <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400"></div>
    </MotionDiv>
  );
}
