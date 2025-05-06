import { AnimatedMotionDivWithBackground } from "@/components/motion/MotionDiv"

export const AboutMe = () => {
  return (
    <AnimatedMotionDivWithBackground>
      <p className="text-md lg:text-xl text-white py-2 font-light">
        My <span className="text-cyan-500">n</span>ame is{" "}
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Michał Saturczak
        </span>
        , I live in Cracow, Poland. I am 23. Currently I am finishing my
        engineer degree at{" "}
        <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-transparent bg-clip-text">
          @AGH
        </span>{" "}
        in Cracow.{" "}
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
    </AnimatedMotionDivWithBackground>
  )
}
