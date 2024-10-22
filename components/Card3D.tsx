"use client";
import Image from "next/image";
import React from "react";
import CardBody from "./ui/CardBody";
import CardItem from "./ui/CardItem";
import CardContainer from "./ui/CardContainer";
import Link from "next/link";
import {
  IconApi,
  IconBrandCss3,
  IconBrandFramerMotion,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandGithub,
  IconDatabase,
  IconBrandReactNative,
  IconBrandNodejs,
  IconAuth2fa,
  IconBrandThreejs,
  IconBrandOauth,
  IconBrandPrisma,
  IconBrandPhp,
} from "@tabler/icons-react";

const iconMapping: { [key: string]: JSX.Element } = {
  nextjs: <IconBrandNextjs size={40} key="nextjs" />,
  typescript: <IconBrandTypescript size={40} key="typescript" />,
  tailwind: <IconBrandTailwind size={40} key="tailwind" />,
  reactnative: <IconBrandReactNative size={40} key="reactnative" />,
  api: <IconApi size={40} key="api" />,
  database: <IconDatabase size={40} key="database" />,
  prisma: <IconBrandPrisma size={40} key="prisma" />,
  authorization: <IconAuth2fa size={40} key="authorization" />,
  react: <IconBrandReact size={40} key="react" />,
  framermotion: <IconBrandFramerMotion size={40} key="framermotion" />,
  html: <IconBrandHtml5 size={40} key="html" />,
  css: <IconBrandCss3 size={40} key="css" />,
  javascript: <IconBrandJavascript size={40} key="javascript" />,
  nodejs: <IconBrandNodejs size={40} key="nodejs" />,
  threejs: <IconBrandThreejs size={40} key="threejs" />,
  oauth: <IconBrandOauth size={40} key="oauth" />,
  php: <IconBrandPhp size={40} key="php" />,
};

export default function Card3D({
  projectName,
  projectDescription,
  projectGh,
  projectPage,
  projectPhoto,
  icons,
  index,
}: {
  projectName?: string;
  projectDescription?: string;
  projectGh?: string;
  projectPage?: string;
  projectPhoto: string;
  icons: string[];
  index: number;
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] bg-gradient-to-tl from-blue-500 via-indigo-600 to-purple-700 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  border-blue-500 w-[20rem] sm:w-[30rem] h-auto  rounded-xl p-6 border  my-8">
        <CardItem
          translateZ="50"
          className="text-2xl font-bold text-white dark:text-white"
        >
          {projectName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-white text-md max-w-sm mt-2 dark:text-neutral-300"
        >
          {projectDescription}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            priority={index == 0 || index == 1 ? true : false}
            src={projectPhoto}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="60"
          className="flex flex-row gap-2 mt-6 justify-center w-full"
        >
          {icons.map((icon) => iconMapping[icon])}
        </CardItem>
        <div className="flex justify-between items-center mt-8">
          {projectGh && (
            <CardItem
              translateZ={20}
              as={Link}
              href={projectGh}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              <IconBrandGithub />
            </CardItem>
          )}
          {projectPage && (
            <Link href={projectPage} target="_blank">
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Page
              </CardItem>
            </Link>
          )}
        </div>
      </CardBody>
    </CardContainer>
  );
}
