// "use client";

// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { IconBrandYoutubeFilled } from "@tabler/icons-react";
// import createGlobe from "cobe";
// import { MoveRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useEffect, useRef } from "react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       title: "Experienced tech consultants with industry expertise",
//       description:
//         "We help businesses understand, adopt, and optimize technology to enhance efficiency and competitiveness.",
//       skeleton: <SkeletonOne />,
//       className:
//         "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
//     },
//     {
//       title: "Customized Digital Solutions",
//       description:
//         "ByteForge delivers tailored technology solutions designed to address your company’s specific challenges and goals.",
//       skeleton: <SkeletonTwo />,
//       className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
//     },
//     {
//       title: "Explore ByteForge on YouTube",
//       description: "Stay tuned for our official launch!",
//       skeleton: <SkeletonThree />,
//       className:
//         "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
//     },
//     {
//       title: "Seamless Global Integration",
//       description:
//         "Expand your business reach effortlessly with scalable and efficient technology solutions.",
//       skeleton: <SkeletonFour />,
//       className: "col-span-1 lg:col-span-3 border-b lg:border-none",
//     },
//   ];
//   return (
//     <div
//       className="relative z-20 py-5 lg:pt-24 md:pb-8 max-w-7xl mx-auto"
//       id="why-choose-us"
//     >
//       <div className="px-10">
//         <h3 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-[#272727] dark:text-white">
//           Why Choose ByteForge?
//         </h3>

//         <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
//           Partner with ByteForge for seamless, innovative, and scalable
//           technology solutions designed to support your business needs.
//         </p>
//       </div>

//       <div className="relative p-4 space-y-4">
//         <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
//           {features.map((feature) => (
//             <FeatureCard key={feature.title} className={feature.className}>
//               <FeatureTitle>{feature.title}</FeatureTitle>
//               <FeatureDescription>{feature.description}</FeatureDescription>
//               <div className=" h-full w-full">{feature.skeleton}</div>
//             </FeatureCard>
//           ))}
//         </div>
//         <Link href="/about">
//           <Button>
//             Learn More <MoveRight />
//           </Button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// const FeatureCard = ({
//   children,
//   className,
// }: {
//   children?: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
//       {children}
//     </div>
//   );
// };

// const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p className=" max-w-5xl mx-auto text-left tracking-tight text-[#272727] dark:text-white text-xl md:text-2xl md:leading-snug">
//       {children}
//     </p>
//   );
// };

// const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
//   return (
//     <p
//       className={cn(
//         "text-sm md:text-base  max-w-4xl text-left mx-auto",
//         "text-neutral-500 text-center font-normal dark:text-neutral-300",
//         "text-left max-w-sm mx-0 md:text-sm my-2"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export const SkeletonOne = () => {
//   return (
//     <div className="relative flex py-8 px-2 gap-10 h-full">
//       <div className="w-full  p-5  mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  ">
//           {/* TODO */}
//           <Image
//             src="/discuss.png"
//             alt="header"
//             width={400}
//             height={400}
//             className="max-h-[400px] w-full aspect-square object-cover object-left-top rounded-sm"
//           />
//         </div>
//       </div>

//       <div className="absolute bottom-0 z-40 inset-x-0 h-60 bg-gradient-to-t from-white dark:from-[#272727] via-white dark:via-[#272727] to-transparent w-full pointer-events-none" />
//       <div className="absolute top-0 z-40 inset-x-0 h-60 bg-gradient-to-b from-white dark:from-[#272727] via-transparent to-transparent w-full pointer-events-none" />
//     </div>
//   );
// };

// export const SkeletonThree = () => {
//   return (
//     <Link
//       href="https://www.youtube.com/"
//       target="__blank"
//       className="relative flex gap-10  h-full group/image"
//     >
//       <div className="w-full  mx-auto bg-transparent dark:bg-transparent group h-full">
//         <div className="flex flex-1 w-full h-full flex-col space-y-2  relative">
//           {/* TODO */}
//           <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto " />
//           <Image
//             src="/mockup.png"
//             alt="header"
//             width={800}
//             height={800}
//             className="h-full w-full aspect-square object-cover object-center rounded-sm blur-none group-hover/image:blur-md transition-all duration-200"
//           />
//         </div>
//       </div>
//     </Link>
//   );
// };

// export const SkeletonTwo = () => {
//   const images = [
//     "/data-com.png",
//     "/statData.png",
//     "/tabdigi.png",
//     "/statData.png",
//   ];

//   const imageVariants = {
//     hover: { scale: 1.1, rotate: 0, zIndex: 100 },
//     tap: { scale: 1.1, rotate: 0, zIndex: 100 },
//   };

//   return (
//     <div className="relative flex flex-col items-start p-4 pt-7 gap-10 h-full overflow-hidden">
//       {/* Baris Pertama */}
//       <div className="flex flex-1 w-full h-full flex-col space-y-3">
//         {/* TODO */}
//         <Image
//           src="/tabdigi.png"
//           alt="header"
//           width={400}
//           height={400}
//           className="max-h-[200px] w-full aspect-square object-cover object-left-top rounded-sm"
//         />
//         <Image
//           src="/statData.png"
//           alt="header"
//           width={400}
//           height={400}
//           className="max-h-[200px] w-full aspect-square object-cover  object-left-top rounded-sm"
//         />
//       </div>
//       {/* Gradient Effect */}
//       <div className="absolute left-0 z-[100] inset-y-0 w-20 bg-gradient-to-r from-white dark:from-[#272727] to-transparent h-full pointer-events-none" />
//       <div className="absolute right-0 z-[100] inset-y-0 w-20 bg-gradient-to-l from-white dark:from-[#272727] to-transparent h-full pointer-events-none" />
//     </div>
//   );
// };

// export const SkeletonFour = () => {
//   return (
//     <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
//       <Globe className="absolute -right-10 md:right-5 -bottom-80 md:-bottom-72" />
//     </div>
//   );
// };

// export const Globe = ({ className }: { className?: string }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     let phi = 0;

//     if (!canvasRef.current) return;

//     const globe = createGlobe(canvasRef.current, {
//       devicePixelRatio: 2,
//       width: 600 * 2,
//       height: 600 * 2,
//       phi: 0,
//       theta: 0,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,
//       baseColor: [0.3, 0.3, 0.3],
//       markerColor: [0.1, 0.8, 1],
//       glowColor: [1, 1, 1],
//       markers: [
//         // longitude latitude
//         { location: [37.7595, -122.4367], size: 0.03 },
//         { location: [40.7128, -74.006], size: 0.1 },
//       ],
//       onRender: (state) => {
//         // Called on every animation frame.
//         // `state` will be an empty object, return updated params.
//         state.phi = phi;
//         phi += 0.01;
//       },
//     });

//     return () => {
//       globe.destroy();
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
//       className={className}
//     />
//   );
// };

// export default WhyChooseUs;

"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconBrandYoutubeFilled } from "@tabler/icons-react";
import createGlobe from "cobe";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useMemo } from "react";

const WhyChooseUs = () => {
  // Memoized Feature List
  const features = useMemo(
    () => [
      {
        title: "Experienced tech consultants with industry expertise",
        description:
          "We help businesses understand, adopt, and optimize technology to enhance efficiency and competitiveness.",
        skeleton: <SkeletonOne />,
        className:
          "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
      },
      {
        title: "Customized Digital Solutions",
        description:
          "ByteForge delivers tailored technology solutions designed to address your company’s specific challenges and goals.",
        skeleton: <SkeletonTwo />,
        className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
      },
      {
        title: "Explore ByteForge on YouTube",
        description: "Stay tuned for our official launch!",
        skeleton: <SkeletonThree />,
        className:
          "col-span-1 lg:col-span-3 lg:border-r  dark:border-neutral-800",
      },
      {
        title: "Seamless Global Integration",
        description:
          "Expand your business reach effortlessly with scalable and efficient technology solutions.",
        skeleton: <SkeletonFour />,
        className: "col-span-1 lg:col-span-3 border-b lg:border-none",
      },
    ],
    []
  );

  return (
    <div
      className="relative z-20 py-5 lg:pt-24 md:pb-8 max-w-7xl mx-auto"
      id="why-choose-us"
    >
      <div className="px-10">
        <h3 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-[#272727] dark:text-white">
          Why Choose ByteForge?
        </h3>
        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          Partner with ByteForge for seamless, innovative, and scalable
          technology solutions designed to support your business needs.
        </p>
      </div>

      <div className="relative p-4 space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
        <Link href="/about">
          <Button>
            Learn More <MoveRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

// Feature Components
const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("p-4 sm:p-8 relative overflow-hidden", className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-[#272727] dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="text-sm  max-w-sm text-left mx-0 md:text-sm my-2 text-neutral-500 dark:text-neutral-300">
      {children}
    </p>
  );
};

// Skeleton Components
const SkeletonOne = () => (
  <div className="relative flex py-8 px-2 gap-10 h-full">
    <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
      <Image
        src="/discuss.png"
        alt="header"
        width={400}
        height={400}
        className="max-h-[400px] w-full aspect-square object-cover object-left-top rounded-sm"
        loading="lazy"
      />
    </div>
  </div>
);

const SkeletonTwo = () => (
  <div className="relative flex flex-col items-start p-4 pt-7 gap-10 h-full overflow-hidden">
    <Image
      src="/tabdigi.png"
      alt="header"
      width={400}
      height={400}
      className="max-h-[200px] w-full aspect-square object-cover rounded-sm"
      loading="lazy"
    />
    <Image
      src="/statData.png"
      alt="header"
      width={400}
      height={400}
      className="max-h-[200px] w-full aspect-square object-cover rounded-sm"
      loading="lazy"
    />
  </div>
);

const SkeletonThree = () => (
  <Link
    href="https://www.youtube.com/"
    target="__blank"
    className="relative flex gap-10 h-full group/image"
  >
    <IconBrandYoutubeFilled className="h-20 w-20 absolute z-10 inset-0 text-red-500 m-auto" />
    <Image
      src="/mockup.png"
      alt="header"
      width={800}
      height={800}
      className="h-full w-full aspect-square object-cover rounded-sm group-hover/image:blur-md transition-all duration-200"
      loading="lazy"
    />
  </Link>
);

const SkeletonFour = () => (
  <div className="h-60 md:h-60 flex flex-col items-center relative bg-transparent dark:bg-transparent mt-10">
    <Globe className="absolute -right-10 md:right-5 -bottom-80 md:-bottom-72" />
  </div>
);

// Optimized Globe Component
const Globe = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const globeInstance = useRef<any>(null);

  useEffect(() => {
    let phi = 0;
    if (!canvasRef.current) return;

    // Prevent re-initialization
    if (!globeInstance.current) {
      globeInstance.current = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: 600 * 2,
        height: 600 * 2,
        phi: 0,
        theta: 0,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.3, 0.3],
        markerColor: [0.1, 0.8, 1],
        glowColor: [1, 1, 1],
        markers: [
          { location: [37.7595, -122.4367], size: 0.03 },
          { location: [40.7128, -74.006], size: 0.1 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.01;
        },
      });
    }

    return () => {
      if (globeInstance.current) {
        globeInstance.current.destroy();
        globeInstance.current = null;
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: 600, height: 600, maxWidth: "100%", aspectRatio: 1 }}
      className={className}
    />
  );
};

export default WhyChooseUs;
