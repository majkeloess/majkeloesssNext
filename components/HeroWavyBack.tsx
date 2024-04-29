import React from "react";
import dynamic from "next/dynamic";
import TextArea from "./TextArea";
import ButtonArea from "./ButtonArea";

const WavyBackground = dynamic(() => import("@/components/ui/wavy-background"));

export default function HeroBackground() {
  return (
    <WavyBackground className="lg:pb-40 pb-40 flex flex-col items-center gap-10">
      <div className="flex lg:flex-row flex-col-reverse gap-10 items-center">
        <div>
          <div className="flex flex-col gap-10 items-center">
            <TextArea />
            <ButtonArea />
          </div>
        </div>
      </div>
    </WavyBackground>
  );
}
