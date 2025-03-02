import BackgroundGradient from "@/components/ui/background-gradient";
import StravaData from "./StravaData";
import { MotionDiv } from "./MotionDiv";
import { StravaStats } from "@/lib/types";

export default function Whoami4({ stravaData }: { stravaData: StravaStats }) {
  return (
    <MotionDiv
      className="lg:w-5/12"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", delay: 3.5, duration: 0.8 }}
    >
      <BackgroundGradient className="rounded-[22px] p-6 lg:p-10 bg-black">
        <StravaData
          count={stravaData.ytd_run_totals.count}
          distance={stravaData.ytd_run_totals.distance}
          moving_time={stravaData.ytd_run_totals.moving_time}
          elevation_gain={stravaData.ytd_run_totals.elevation_gain}
        />
      </BackgroundGradient>
    </MotionDiv>
  );
}
