"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimationWrapperProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
  once?: boolean
  duration?: number
}

export default function AnimationWrapper({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
  duration = 0.5,
}: AnimationWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  })

  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 },
  }

  const variants = {
    hidden: directionVariants[direction],
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <div ref={ref} className={className}>
      <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={variants}>
        {children}
      </motion.div>
    </div>
  )
}
