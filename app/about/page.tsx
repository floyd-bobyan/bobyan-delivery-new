import Image from "next/image";
import styles from "./styles.module.css";
import pageLogo from "../assets/bobyan-page-logo.png";

const About: React.FC = () => {
  return (
    <div className={styles["about-page"]}>
      <div className={styles["page-left"]}>
        <div className={styles["page-title"]}>About Us,</div>
        <div className={styles["detail-title-red"]}>BOBYAN</div>
        <div className={styles["detail-title"]}>INTERNATIONAL</div>
        <div className={styles["detail-text"]}>
          At Bobyan Delivery, we connect businesses with a dedicated network of
          professional delivery partners across Kuwait. Our riders come from
          diverse backgrounds and are supported with fair compensation,
          training, and reliable resources. We provide complete assistance —
          from vehicle arrangements to ongoing support — ensuring every partner
          can perform with confidence and efficiency.
        </div>
        <div className={styles["buttons-container"]}>
          <div className={styles["button-primary"]}>Join Us</div>
          <div className={styles["button-secondary"]}>Partner With Us</div>
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

export default About;
