"use client";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";

export function GridPatternDemo() {
  return (
    <div className="relative flex h-[600px] w-full flex-col -mt-32 -ml-90 items-center justify-center overflow-hidden bg-background">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
export function GridPatternDemo2() {
  return (
    <div className="relative flex h-[500px] w-full flex-col -mt-32 ml-90 items-center justify-center overflow-hidden bg-background">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}

const Teams = () => {
  return (
    <section className="relative container mx-auto p-4">
      {/* Grid sebagai Background */}
      <div className="absolute inset-0 -z-10">
        <GridPatternDemo />
      </div>

      <div>
        <h2 className="font-bold text-center mt-3 text-[#272727] text-3xl lg:text-5xl lg:leading-tight">
          Meet the Experts <br /> Behind ByteForge
        </h2>
        <p className="text-sm text-center lg:text-base max-w-3xl mt-7 mx-auto text-neutral-500 font-normal dark:text-neutral-300">
          At ByteForge, each member brings unique expertise and a shared
          commitment to delivering cutting-edge technology solutions.
        </p>
      </div>
      <div className="mx-3 md:mx-24">
        <h2 className="font-bold mt-10  text-[#272727] p-2 text-xl lg:text-6xl lg:leading-tight">
          Leadership Team
        </h2>
        <p className="text-sm lg:text-base  mt-4 mx-auto text-neutral-500 font-normal dark:text-neutral-300">
          Our leadership team consists of experienced professionals dedicated to
          driving innovation and excellence in the tech industry.
        </p>
      </div>
    </section>
  );
};

export default Teams;
