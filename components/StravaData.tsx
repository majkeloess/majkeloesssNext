"use client";
import { IconRun } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface Stats {
  count: number;
  distance: number;
  moving_time: number;
  elevation_gain: number;
}
const StravaData = () => {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    fetch("https://www.strava.com/api/v3/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        client_id: `${process.env.NEXT_PUBLIC_STRAVA_CLIENT_ID}`,
        client_secret: `${process.env.NEXT_PUBLIC_STRAVA_CLIENT_SECRET}`,
        grant_type: "refresh_token",
        refresh_token: `${process.env.NEXT_PUBLIC_STRAVA_REFRESH_TOKEN}`,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        return fetch("https://www.strava.com/api/v3/athletes/113560517/stats", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${res.access_token}`,
          },
        });
      })
      .then((response) => response.json())
      .then((data) => setStats(data.ytd_run_totals))
      .catch((error) => console.error(error));
  }, []);

  if (!stats) {
    return (
      <p className="text-xl lg:text-2xl text-white mt-4 mb-2 text-center">
        <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Loading data...
        </span>
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-row text-2xl lg:text-sm xl:text-2xl items-center">
        <p>My </p>
        <IconRun size={50} color="#38bdf8" />
        <p>
          stats this yea<span className="text-purple-500">r</span>:{" "}
        </p>
      </div>
      <div className="text-xl  text-white mt-4 mb-2 text-center">
        <ul className="w-[300px] xl:w-[300px] lg:w-[200px]">
          <li className="mb-2">
            <div className="flex flex-row justify-between ">
              <p>
                Total r<span className="text-pink-500">u</span>ns
              </p>
              <p> {stats.count}</p>
            </div>
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-400"></div>
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>Distance</p>
              <p>{Math.ceil(stats.distance / 1000)} km</p>
            </div>
            <div className="h-1 bg-gradient-to-r from-pink-500 via-indigo-500 to-purple-400"></div>
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>Time</p>
              <p className="">{Math.ceil(stats.moving_time / 60)} min </p>
            </div>
            <div className="h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500"></div>
          </li>
          <li className="mb-2">
            <div className="flex flex-row justify-between">
              <p>
                Elevatio<span className="text-blue-400">n</span>
              </p>
              <p>{stats.elevation_gain} m</p>
            </div>
            <div className="h-1 bg-gradient-to-r from-purple-400 via-pink-300 to-pink-500"></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StravaData;
