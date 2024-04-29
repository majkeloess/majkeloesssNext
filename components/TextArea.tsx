import { MotionDiv } from "./MotionDiv";
import animations from "@/lib/motion";
export default function TextArea() {
  return (
    <MotionDiv
      variants={animations.textVariant(1.1)}
      initial="hidden"
      whileInView="show"
    >
      <p className="text-base md:text-lg lg:text-xl mt-4 text-white font-normal inter-var text-center">
        Hi, I am
      </p>
      <p className="text-6xl lg:text-8xl text-white font-bold inter-var text-center">
        majkeloe
        <span className="text-purple-600">s</span>
        <span className="text-cyan-500">s</span>
      </p>
      <p className="text-base md:text-lg lg:text-xl mt-4 text-white font-normal inter-var text-center">
        Computer Science student with a passion for webDevelopment
      </p>
    </MotionDiv>
  );
}
