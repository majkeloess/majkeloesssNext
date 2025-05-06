"use client"
import { motion } from "framer-motion"
import BackgroundGradient from "../ui/background-gradient"

export const MotionDiv = motion.div

export const AnimatedMotionDivWithBackground = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1.5 }}
      className={className}
    >
      <BackgroundGradient className={className}>{children}</BackgroundGradient>
    </MotionDiv>
  )
}
