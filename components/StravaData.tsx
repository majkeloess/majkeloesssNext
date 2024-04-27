import { IconRun } from "@tabler/icons-react";

export default function StravaData({
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
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row text-2xl lg:text-sm xl:text-2xl items-center">
        <p className="flex items-center justify-center text-2xl lg:text-sm xl:text-2xl">
          My
          <IconRun size={50} color="#38bdf8" />
          this year:{" "}
        </p>
      </div>
      <div className="text-xl  text-white mt-4 mb-2 text-center">
        <ul className="w-[300px] xl:w-[250px] 2xl:w-[300px] lg:w-[200px]">
          <li className="mb-2">
            <div className="flex flex-row justify-between ">
              <p>
                Total r<span className="text-pink-500">u</span>ns
              </p>
              <p> {count}</p>
            </div>
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400"></div>
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>Distance</p>
              <p>{Math.ceil(distance / 1000)} km</p>
            </div>
            <div className="h-1 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-400"></div>
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>Time</p>
              <p className="">{Math.ceil(moving_time / 60)} min </p>
            </div>
            <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>
                Elevatio<span className="text-blue-400">n</span>
              </p>
              <p>{elevation_gain} m</p>
            </div>
            <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-300 to-pink-500"></div>
          </li>
        </ul>
      </div>
    </div>
  );
}
