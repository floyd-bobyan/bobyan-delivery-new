import Image from "next/image";
import styles from "./styles.module.css";
import pageLogo from "../assets/bobyan-page-logo.png";

const Partner: React.FC = () => {
  return (
    <div className={styles["partner-page"]}>
      <div className={styles["page-left"]}>
        <div className={styles["page-title"]}>Partner With Us,</div>
        <div className={styles["detail-title-red"]}>BOBYAN</div>
        <div className={styles["detail-title"]}>INTERNATIONAL</div>
        <div className={styles["detail-text"]}>
          For partnership inquiries, feel free to contact us or reach out via
          email using the details below
        </div>
        <div className={styles["address-wrapper"]}>
          <div className={styles["address-title"]}>Mail Us</div>
          <div className={styles["address-description"]}>info@bobyandelivery.com</div>
        </div>
        <div className={styles["address-wrapper"]}>
          <div className={styles["address-title"]}>Visit our office</div>
          <div className={styles["address-description"]}>Bobyan Delivery</div>
          <div className={styles["address-description"]}>Floor 4, Office No. 5, </div>
          <div className={styles["address-description"]}>Dar Al-Jazera Consultants Building,</div>
          <div className={styles["address-description"]}>Khaled Bin Al Waleed Street,</div>
          <div className={styles["address-description"]}>Sharq - Kuwait</div>
        </div>
      </div>
      <div className={styles["page-right"]}>
        <Image
          alt="Bobyan Page Logo"
          src={pageLogo}
          className={styles["page-right-image"]}
        />
      </div>
    </div>
  );
};

export default Partner;
