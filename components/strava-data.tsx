import { IconRun } from "@tabler/icons-react";
import type { StravaStats } from "@/lib/types";

export default function StravaData({
  stravaData,
}: {
  stravaData: StravaStats;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row text-2xl lg:text-sm xl:text-2xl items-center">
        <p className="flex items-center justify-center text-2xl lg:text-sm xl:text-2xl">
          My
          <IconRun size={50} color="#38bdf8" />
          this year:{" "}
        </p>
      </div>
      <div className="text-xl  text-white mt-4 mb-2 text-center font-light">
        <ul className="w-[300px] xl:w-[250px] 2xl:w-[300px] lg:w-[200px]">
          <li className="mb-2">
            <div className="flex flex-row justify-between ">
              <p>
                Total r<span className="text-pink-500">u</span>ns
              </p>
              <p> {stravaData.ytd_run_totals.count}</p>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400" />
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>Distance</p>
              <p>{Math.ceil(stravaData.ytd_run_totals.distance / 1000)} km</p>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-400" />
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>Time</p>
              <p className="">
                {Math.ceil(stravaData.ytd_run_totals.moving_time / 60)} min{" "}
              </p>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>
                Elevatio<span className="text-blue-400">n</span>
              </p>
              <p>{stravaData.ytd_run_totals.elevation_gain.toFixed(0)} m</p>
            </div>
            <div className="h-[1px] bg-gradient-to-r from-purple-400 via-pink-300 to-pink-500" />
          </li>
        </ul>
      </div>
    </div>
  );
}
