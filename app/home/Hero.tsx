"use client";

import Image from "next/image";
import { useAppDispatch } from "../redux/hooks";

import heroImage from "../assets/bobyan-hero-image.png";
import rocket from "../assets/bobyan-rocket.svg";
import styles from "./styles/hero.module.css";
import { openModal } from "../redux/slices/modals";

const HeroSection = () => {
    const dispatch = useAppDispatch();


  return (
    <div className={styles.heroContainer}>
      {/* LEFT */}
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>
          Your <span className="text-[#DD0107]">Delivery</span> Network,
          Simplified
        </h1>

        <p className={styles.heroText}>
          We connect businesses with reliable delivery partners and empower
          riders to grow with confidence.
        </p>

        <div className={styles.heroButtons}>
          <button className={styles.btnPrimary} onClick={() => dispatch(openModal("JOIN_US"))}>JOIN US</button>
          <button className={styles.btnSecondary}>PARTNER WITH US</button>
        </div>
      </div>

      {/* Mid */}
      <div className={styles.heroMid}>
        <Image
          src={heroImage}
          alt="Bobyan Delivery Hero"
          className={styles.heroImage}
        />
      </div>

      {/* Right */}
      <div className={styles.heroRight}>
        <div className={styles.heroStat}>
          <div className={styles.statNumber}>650+</div>
          <div className={styles.statText}>Delivery Riders</div>
        </div>
        <div className={styles.heroStat}>
          <Image alt="Bobyan Delivery Rocket" src={rocket} className={styles.statImage} />
        </div>
        <div className={styles.heroStat}>
          <div className={styles.statNumber}>4+</div>
          <div className={styles.statText}>Partners</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

//   LEFT SIDE
//   <div className="flex-1 flex flex-col gap-6 z-10">

//     {/* Heading */}
//     <h1 className="text-[52px] font-bold leading-tight text-[#4B4453]">
//       Your <span className="text-[#DD0107]">Delivery</span>
//       <br />
//       Network,
//       <br />
//       Simplified
//     </h1>

//     {/* Description */}
//     <p className="text-gray-500 max-w-md text-[15px]">
//       We connect businesses with reliable delivery partners and empower riders to grow with confidence.
//     </p>

//     {/* Buttons */}
//     <div className="flex gap-4 mt-2">
//       <button className="px-6 py-3 bg-[#4B4453] text-white rounded-full text-sm hover:opacity-90 transition">
//         JOIN WITH US
//       </button>
//       <button className="px-6 py-3 border border-[#4B4453] text-[#4B4453] rounded-full text-sm hover:bg-[#4B4453] hover:text-white transition">
//         PARTNER WITH US
//       </button>
//     </div>
//   </div>

//   {/* RIGHT SIDE */}
//   <div className="flex-1 flex items-start justify-center relative">

//     {/* Main Image */}
//     <div className="relative z-10">
//       <Image
//         src="/hero-rider.png" // replace with your image
//         alt="rider"
//         width={400}
//         height={500}
//         className="object-contain"
//       />
//     </div>

//     {/* Background Shape (Arch) */}
//     <div className="absolute w-[420px] h-[520px] bg-[#614C88] rounded-[200px] top-10 z-0"></div>

//     {/* RIGHT STATS */}
//     <div className="absolute right-0 top-20 flex flex-col gap-16">

//       {/* Stat 1 */}
//       <div>
//         <h2 className="text-[36px] font-semibold text-[#614C88]">650 +</h2>
//         <p className="text-gray-500 text-sm">Delivery Riders</p>
//       </div>

//       {/* Stat 2 */}
//       <div>
//         <h2 className="text-[36px] font-semibold text-[#614C88]">4 +</h2>
//         <p className="text-gray-500 text-sm">Delivery Partners</p>
//       </div>

//     </div>
//   </div>
