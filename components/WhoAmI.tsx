import Whoami1 from "@/components/Whoami1";
import Whoami2 from "@/components/Whoami2";
import Whoami3 from "@/components/Whoami3";
import Whoami4 from "@/components/Whoami4";
import { getData } from "@/lib/appData";

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
        <Whoami4 stravaData={strava} />
      </div>
    </div>
  );
}
