import StravaData from "@/components/strava-data"
import { AnimatedMotionDivWithBackground } from "@/components/motion/MotionDiv"
import { getStravaData } from "@/lib/app-data"

export const Strava = async () => {
  const stravaData = await getStravaData()

  return (
    <AnimatedMotionDivWithBackground className="w-full">
      <StravaData stravaData={stravaData} />
    </AnimatedMotionDivWithBackground>
  )
}
