import BackgroundGradient from "@/components/ui/background-gradient";
import { MotionDiv } from "@/components/motion/MotionDiv";

export default function Whoami3() {
  return (
    <MotionDiv
      className="lg:w-7/12 max-w-[80%] lg:max-w-full"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 2.8, duration: 0.8 }}
    >
      <BackgroundGradient className="rounded-[22px] p-4 lg:p-10 bg-black">
        <p className="text-lg lg:text-xl text-white py-2 font-light">
          My <span className="text-cyan-500">p</span>assion lies in{" "}
          <span className="text-pink-500">s</span>elf development, running and
          working out at the gym.{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
            Love
          </span>{" "}
          to take new challenge<span className="text-blue-500">s</span>, learn
          something new and surpass my previous records. Everyday is good day{" "}
          <span className="text-purple-500">t</span>
          <span className="text-pink-500">o</span>{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            become
          </span>{" "}
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
            better
          </span>
          .
        </p>
      </BackgroundGradient>
    </MotionDiv>
  );
}
