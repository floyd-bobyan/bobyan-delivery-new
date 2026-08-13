import Image from "next/image";
import features from "../assets/bobyan-features.png"
import featureContents from "../assets/bobyan-feature-contents.svg"
import styles from "./styles/features.module.css";

const FeaturesSection: React.FC = () => {
  return (
    <div className={styles["features-section"]}>
      <div className={styles["features-section-top"]}>
        <div className={styles["features-top-text"]}>
            <div className={styles["features-header"]}>Built for <span className={styles["font-yellow"]}>performance</span>.</div>
            <div className={styles["features-header"]}>Backed by <span className={styles["font-red"]}>experience</span>.</div>
            <div className={styles["features-description"]}>We provide trained, reliable delivery riders and handle complete rider operations for leading platforms. From onboarding to daily performance, we manage everything so you can focus on growth.</div>
        </div>
        <Image src={features} alt="Features Section" className={styles["features-top-image"]} />
      </div>
      <Image alt="Bobyan Services" src={featureContents} className={styles["features-section-bottom"]} />
    </div>
  );
};

export default FeaturesSection