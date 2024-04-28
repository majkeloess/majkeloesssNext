import BackgroundGradient from "@/components/ui/background-gradient";
import { MotionDiv } from "./MotionDiv";
import SocialList from "./SocialList";

export default function Whoami2() {
  return (
    <MotionDiv
      className="lg:w-1/6"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 1.5, duration: 1 }}
    >
      <BackgroundGradient className="rounded-[22px] p-4 lg:p-10 bg-black">
        <SocialList />
      </BackgroundGradient>
    </MotionDiv>
  );
}
