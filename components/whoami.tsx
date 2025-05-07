import { Socials } from "@/components/socials";
import { AboutMe } from "@/components/about-me";
import { Strava } from "@/components/strava";
import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/app/loading";

export const metadata: Metadata = {
  title: "whoami",
};

export default async function WhoAmI() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex justify-center flex-col h-screen max-w-screen-md lg:mx-auto mx-4 pt-24 md:pt-0">
        <AboutMe />
        <div className="flex flex-col lg:flex-row gap-8 mt-8 w-full">
          <Strava />
          <Socials />
        </div>
      </div>
    </Suspense>
  );
}
