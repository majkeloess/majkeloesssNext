import Whoami1 from "@/components/whoami-me";
import Whoami2 from "@/components/whoami-socials";
import Whoami3 from "@/components/whoami-about";
import Whoami4 from "@/components/whoami-strava";
import { getData } from "@/lib/app-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "whoami",
};

export default async function WhoAmI() {
  const strava = await getData();

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="lg:w-7/12 flex lg:flex-row  gap-8 lg:mt-24 mt-24 items-center flex-col">
        <Whoami1 />
        <Whoami2 />
      </div>
      <div className="lg:w-7/12 flex flex-col lg:flex-row gap-8 mt-10 items-center">
        <Whoami3 />
        <Whoami4 stravaData={strava} />
      </div>
    </div>
  );
}
