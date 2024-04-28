import BackgroundGradient from "@/components/ui/background-gradient";
import StravaData from "./StravaData";
import { MotionDiv } from "./MotionDiv";

export default function Whoami4({
  count,
  distance,
  moving_time,
  elevation_gain,
}: {
  count: number;
  distance: number;
  moving_time: number;
  elevation_gain: number;
}) {
  return (
    <MotionDiv
      className="lg:w-5/12"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 2.5, duration: 1 }}
    >
      <BackgroundGradient className="rounded-[22px] p-6 lg:p-10 bg-black">
        <StravaData
          count={count}
          distance={distance}
          moving_time={moving_time}
          elevation_gain={elevation_gain}
        />
      </BackgroundGradient>
    </MotionDiv>
  );
}
