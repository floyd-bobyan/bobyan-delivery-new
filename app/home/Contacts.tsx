import Image from "next/image";
import styles from "./styles/contacts.module.css";
import bgLogo from "../assets/bobyan-page-logo.png";

const ContactSection: React.FC = () => {
  return (
    <div className={styles["contacts-section"]} id="contact">
      <div className={styles["section-bg"]}>
        <Image
          alt="Bobyan Logo BG"
          src={bgLogo}
          className={styles["bobyan-logo-bg"]}
        />
      </div>
      <div className={styles["section-content"]}>
        <div className={styles["content-wrapper"]}>
          <div className={styles["contact-item-header"]}>Call Our Team</div>
          <div className={styles["contact-item-content-row"]}>
            <div className={styles["phone-number"]}>+965 6507 9703</div>
            <div className={styles["phone-number"]}>+965 6640 6682</div>
            <div className={styles["phone-number"]}>+965 6665 2889</div>
          </div>
        </div>
        <div className={styles["content-wrapper"]}>
          <div className={styles["contact-item-header"]}>Visit our office</div>
          <div className={styles["contact-item-content-column"]}>
            <div className={styles["address-cell"]}>Floor 4, Office No. 5,</div>
            <div className={styles["address-cell"]}>
              Dar Al-Jazera Consultants Building,{" "}
            </div>
            <div className={styles["address-cell"]}>
              Khaled Bin Al Waleed Street,
            </div>
            <div className={styles["address-cell"]}>Sharq - Kuwait</div>
          </div>
        </div>
        <div className={styles["content-wrapper"]}>
          <div className={styles["contact-item-header"]}>Mail Us</div>
          <div className={styles["contact-item-content-row"]}>
            info@bobyandelivery.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
