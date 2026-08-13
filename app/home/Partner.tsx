import Image from "next/image";

import styles from "./styles/partners.module.css";
import partners from "../assets/delivery-partners.svg";

const PartnerSection: React.FC = () => {
  return (
    <div className={styles["partners-section"]}>
      <Image alt="Bobyan Delivery Partners" src={partners} className={styles["partners-image"]} />
      <div className={styles["partners-details"]}>
        <div className={styles["partner-details-title"]}>Your <span className="text-[#DD0107]">Delivery</span> Network, Simplified</div>
        <div className={styles["partner-details-text"]}>We connect businesses with reliable delivery partners and empower riders to grow with confidence.</div>
        <div className={styles["btn-secondary"]}>PARTNER WITH US</div>
      </div>
    </div>
  );
};

export default PartnerSection