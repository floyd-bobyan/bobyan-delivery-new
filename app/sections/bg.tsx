"use client";

import { usePathname } from "next/navigation";
import { menues } from "./headers";

const Background: React.FC = () => {
  const pathname = usePathname();
  const bgType = menues?.find((menu) => menu?.url === pathname)?.bg;

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Group 1 → Top Right */}
      <div className="absolute top-[-15vh] right-[-20vh]">
        <div className="relative">
          <div className="w-[50vh] h-[50vh] rounded-full border-2 border-[#ACA1C1]" />
          <div className="w-[50vh] h-[50vh] rounded-full border-2 border-[#ACA1C1] absolute top-[-40px] right-[20px]" />
        </div>
      </div>

      {/* Group 2 → Middle Left */}
      {!["MD", "SM"]?.includes(bgType || "") && (
        <div className="absolute top-[100vh] left-[-25vh]">
          <div className="relative">
            <div className="w-[50vh] h-[50vh] rounded-full border-2 border-[#ACA1C1]" />
            <div className="w-[50vh] h-[50vh] rounded-full border-2 border-[#ACA1C1] absolute top-[-40px] right-[20px]" />
          </div>
        </div>
      )}

      {/* Group 3 → Bottom Right */}    
      {!["SM"]?.includes(bgType || "") && (
        <div className="absolute top-[160vh] right-[-25vh]">
          <div className="relative">
            <div className="w-[50vh] h-[50vh] rounded-full border-2 border-[#ACA1C1]" />
            <div className="w-[50vh] h-[50vh] rounded-full border-2 border-[#ACA1C1] absolute top-[-40px] right-[20px]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Background;
