import { unstable_noStore } from "next/cache";
import { StravaStats, stravaStatsSchema } from "@/lib/types";

export async function getData(): Promise<StravaStats> {
  unstable_noStore();
  const token = await fetch("https://www.strava.com/api/v3/oauth/token", {
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
      cache: "reload",
    }
  );
  const jsonData = await data.json();
  return stravaStatsSchema.parse(jsonData);
}
