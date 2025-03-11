// "use client";

// import { useInView, useMotionValue, useSpring } from "motion/react";
// import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

// import { cn } from "@/lib/utils";

// interface NumberTickerProps extends ComponentPropsWithoutRef<"span"> {
//   value: number;
//   startValue?: number;
//   direction?: "up" | "down";
//   delay?: number;
//   decimalPlaces?: number;
// }

// export function NumberTicker({
//   value,
//   startValue = 0,
//   direction = "up",
//   delay = 0,
//   className,
//   decimalPlaces = 0,
//   ...props
// }: NumberTickerProps) {
//   const ref = useRef<HTMLSpanElement>(null);
//   const motionValue = useMotionValue(direction === "down" ? value : startValue);
//   const springValue = useSpring(motionValue, {
//     damping: 60,
//     stiffness: 100,
//   });
//   const isInView = useInView(ref, { once: true, margin: "0px" });

//   useEffect(() => {
//     if (isInView) {
//       const timer = setTimeout(() => {
//         motionValue.set(direction === "down" ? startValue : value);
//       }, delay * 1000);
//       return () => clearTimeout(timer);
//     }
//   }, [motionValue, isInView, delay, value, direction, startValue]);

//   useEffect(
//     () =>
//       springValue.on("change", (latest) => {
//         if (ref.current) {
//           ref.current.textContent = Intl.NumberFormat("en-US", {
//             minimumFractionDigits: decimalPlaces,
//             maximumFractionDigits: decimalPlaces,
//           }).format(Number(latest.toFixed(decimalPlaces)));
//         }
//       }),
//     [springValue, decimalPlaces],
//   );

//   return (
//     <span
//       ref={ref}
//       className={cn(
//         "inline-block tabular-nums tracking-wider text-black dark:text-white",
//         className,
//       )}
//       {...props}
//     >
//       {startValue}
//     </span>
//   );
// }

"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  startValue?: number;
  direction?: "up" | "down";
  delay?: number;
  decimalPlaces?: number;
  className?: string;
  [key: string]: any; // Allow other props to be passed
}

export function NumberTicker({
  value,
  startValue = 0,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Initialize motionValue with the appropriate starting value based on direction
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(direction === "down" ? startValue : value);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [motionValue, isInView, delay, value, direction, startValue]);

  useEffect(() => {
    // Create a formatter function outside the listener
    const formatter = Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    });

    const updateTextContent = (latest: number) => {
      if (ref.current) {
        ref.current.textContent = formatter.format(
          Number(latest.toFixed(decimalPlaces))
        );
      }
    };

    // Subscribe to springValue changes
    const unsubscribe = springValue.onChange(updateTextContent);

    // Return a cleanup function to unsubscribe
    return () => unsubscribe();
  }, [springValue, decimalPlaces]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-black dark:text-white",
        className
      )}
      {...props}
    >
      {startValue} {/* Initial content while animating */}
    </span>
  );
}
