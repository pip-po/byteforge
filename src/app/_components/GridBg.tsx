import Image from "next/image";
import { ReactNode } from "react";

interface GridBackgroundProps {
  children: ReactNode;
}

const GridBg = ({ children }: GridBackgroundProps) => {
  return (
    <div className="relative w-full h-[280px] md:h-[400px] overflow-hidden bg-gradient-to-t from-transparent via-[#334155]/2 to-transparent">
      {/* Background Image */}
      <Image
        src="/grid2.png"
        alt="Background Grid"
        fill
        quality={100}
        priority
        style={{ objectFit: "cover" }}
        className="opacity-15"
      />

      {/* Fade Effects */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />

      {/* Content Layer */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GridBg;
