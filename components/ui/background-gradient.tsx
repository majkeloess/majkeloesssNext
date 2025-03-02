import cn from "@/lib/utils";
import React from "react";

export default function BackgroundGradient({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("relative p-[2px] group", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,#22d3ee,transparent),radial-gradient(circle_farthest-side_at_100%_0,#c084fc,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#c084fc,transparent),radial-gradient(circle_farthest-side_at_0_0,#e879f9,#e879f9)]"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#22d3ee,transparent),radial-gradient(circle_farthest-side_at_100%_0,#c084fc,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#c084fc,transparent),radial-gradient(circle_farthest-side_at_0_0,#e879f9,#e879f9)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
