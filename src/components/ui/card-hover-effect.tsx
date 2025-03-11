// // "use client";
// // import { cn } from "@/lib/utils";
// // import { AnimatePresence, motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { ReactNode, useState } from "react";
// // export const HoverEffect = ({
// //   items,
// //   className,
// // }: {
// //   items: {
// //     image: string;
// //     icon: ReactNode;
// //     name: string;
// //     description: string;
// //   }[];
// //   className?: string;
// // }) => {
// //   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
// //   return (
// //     <div
// //       className={cn(
// //         "grid grid-cols-1 gap-5 md:grid-cols-2  lg:grid-cols-4 py-10",
// //         className
// //       )}
// //     >
// //       {items.map((item, idx) => (
// //         <div
// //           key={item.name}
// //           className="relative group  block p-2 h-full w-full"
// //           onMouseEnter={() => setHoveredIndex(idx)}
// //           onMouseLeave={() => setHoveredIndex(null)}
// //         >
// //           <AnimatePresence>
// //             {hoveredIndex === idx && (
// //               <motion.span
// //                 className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-xl"
// //                 layoutId="hoverBackground"
// //                 initial={{ opacity: 0 }}
// //                 animate={{
// //                   opacity: 1,
// //                   transition: { duration: 0.15 },
// //                 }}
// //                 exit={{
// //                   opacity: 0,
// //                   transition: { duration: 0.15, delay: 0.2 },
// //                 }}
// //               />
// //             )}
// //           </AnimatePresence>
// //           <Card>
// //             <Image
// //               src={item.image}
// //               alt={item.image}
// //               sizes=""
// //               width={500}
// //               height={500}
// //               className="w-full h-[150px] object-cover rounded-md"
// //             />
// //             <CardTitle>
// //               <div className="flex gap-2 font-semibold">
// //                 {item.icon} {item.name}
// //               </div>
// //             </CardTitle>

// //             <CardDescription>{item.description}</CardDescription>
// //           </Card>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };
// // export const Card = ({
// //   className,
// //   children,
// // }: {
// //   className?: string;
// //   children: React.ReactNode;
// // }) => {
// //   return (
// //     <div
// //       className={cn(
// //         "rounded-lg h-full w-full p-2 overflow-hidden bg-white shadow-md dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
// //         className
// //       )}
// //     >
// //       <div className="relative z-50">
// //         <div className="p-2">{children}</div>
// //       </div>
// //     </div>
// //   );
// // };
// // export const CardTitle = ({
// //   className,
// //   children,
// // }: {
// //   className?: string;
// //   children: React.ReactNode;
// // }) => {
// //   return (
// //     <h4
// //       className={cn("text-[#272727] font-bold tracking-normal mt-4", className)}
// //     >
// //       {children}
// //     </h4>
// //   );
// // };
// // export const CardDescription = ({
// //   className,
// //   children,
// // }: {
// //   className?: string;
// //   children: React.ReactNode;
// // }) => {
// //   return (
// //     <p
// //       className={cn(
// //         " text-[#272727] mt-2 tracking-wide leading-relaxed text-sm",
// //         className
// //       )}
// //     >
// //       {children}
// //     </p>
// //   );
// // };
// "use client";
// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import Image from "next/image";
// import { ReactNode, useState } from "react";

// interface Item {
//   image: string;
//   icon: ReactNode;
//   name: string;
//   description: string;
// }

// export const HoverEffect = ({
//   items,
//   className,
// }: {
//   items: Item[]; // Perbaikan: items adalah array dari Item
//   className?: string;
// }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div
//       className={cn(
//         "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 py-10",
//         className
//       )}
//     >
//       {items.map(
//         (
//           item: Item,
//           idx: number // Perbaikan: tipe data parameter item dan idx
//         ) => (
//           <div
//             key={item.name}
//             className="relative group block p-2 h-full w-full"
//             onMouseEnter={() => setHoveredIndex(idx)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <AnimatePresence mode="wait">
//               {hoveredIndex === idx && (
//                 <motion.span
//                   className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/block rounded-xl"
//                   layoutId="hoverBackground"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1, transition: { duration: 0.15 } }}
//                   exit={{ opacity: 0, transition: { duration: 0.15 } }}
//                 />
//               )}
//             </AnimatePresence>
//             <Card>
//               <Image
//                 src={item.image}
//                 alt={item.name}
//                 width={500}
//                 height={500}
//                 className="w-full h-[150px] object-cover rounded-md"
//               />
//               <CardTitle>
//                 <div className="flex gap-2 font-semibold">
//                   {item.icon} {item.name}
//                 </div>
//               </CardTitle>
//               <CardDescription>{item.description}</CardDescription>
//             </Card>
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// const Card = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-lg h-full w-full p-2 overflow-hidden bg-white shadow-md dark:border-white/group-hover:border-slate-700 relative z-20",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-2">{children}</div>
//       </div>
//     </div>
//   );
// };

// const CardTitle = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <h4
//       className={cn("text-[#272727] font-bold tracking-normal mt-4", className)}
//     >
//       {children}
//     </h4>
//   );
// };

// const CardDescription = ({
//   className,
//   children,
// }: {
//   className?: string;
//   children: React.ReactNode;
// }) => {
//   return (
//     <p
//       className={cn(
//         "text-[#272727] mt-2 tracking-wide leading-relaxed text-sm",
//         className
//       )}
//     >
//       {children}
//     </p>
//   );
// };

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import React, { ReactNode, useCallback, useState } from "react";
import { cn } from "@/lib/utils";

interface Item {
  image: string;
  icon: ReactNode;
  name: string;
  description: string;
}

export const HoverEffect = React.memo(
  ({ items, className }: { items: Item[]; className?: string }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleMouseEnter = useCallback(
      (idx: number) => setHoveredIndex(idx),
      []
    );
    const handleMouseLeave = useCallback(() => setHoveredIndex(null), []);

    return (
      <div
        className={cn(
          "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 py-10",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.name}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <AnimatePresence mode="sync">
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/80 rounded-xl"
                  layoutId={`hoverBackground-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15 } }}
                />
              )}
            </AnimatePresence>
            <Card>
              <Image
                src={item.image}
                alt={item.name}
                width={500}
                height={500}
                className="w-full h-[150px] object-cover rounded-md"
              />
              <CardTitle>
                <div className="flex gap-2 font-semibold">
                  {item.icon} {item.name}
                </div>
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </div>
        ))}
      </div>
    );
  }
);

const Card = React.memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <div
      className={cn(
        "rounded-lg h-full w-full p-3 overflow-hidden bg-white shadow-md dark:border-white/20 group-hover:border-slate-700 relative z-20 hover:scale-105 transition-transform duration-300",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  )
);

const CardTitle = React.memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <h4
      className={cn("text-[#272727] font-bold tracking-normal mt-4", className)}
    >
      {children}
    </h4>
  )
);

const CardDescription = React.memo(
  ({
    className,
    children,
  }: {
    className?: string;
    children: React.ReactNode;
  }) => (
    <p
      className={cn(
        "text-[#272727] mt-2 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
);
