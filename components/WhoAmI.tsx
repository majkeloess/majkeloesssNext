import Whoami1 from "@/components/Whoami1";
import Whoami2 from "@/components/Whoami2";
import Whoami3 from "@/components/Whoami3";
import Whoami4 from "@/components/Whoami4";

async function getData() {
  const token = await fetch("https://www.strava.com/api/v3/oauth/token", {
    next: {
      revalidate: 86400,
    },
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
  });

  const tokenData = await token.json();

  const data = await fetch(
    "https://www.strava.com/api/v3/athletes/113560517/stats",
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${tokenData.access_token}`,
      },
      cache: "no-store",
    }
  );
  const jsonData = await data.json();
  //console.log(jsonData);
  return jsonData;
}

export default async function WhoAmI() {
  const strava = await getData();

  return (
    <div className="flex justify-center flex-col items-center mb-20">
      <div className="lg:w-7/12 flex lg:flex-row  gap-8 lg:mt-40 mt-24 items-center flex-col">
        <Whoami1 />
        <Whoami2 />
      </div>
      <div className="lg:w-7/12 flex flex-col lg:flex-row gap-8 mt-10 items-center">
        <Whoami3 />
        <Whoami4
          count={strava.ytd_run_totals.count}
          distance={strava.ytd_run_totals.distance}
          moving_time={strava.ytd_run_totals.moving_time}
          elevation_gain={strava.ytd_run_totals.elevation_gain}
        />
      </div>
    </div>
  );
}
