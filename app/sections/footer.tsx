import Link from "next/link";
import { menues } from "./headers";
import styles from "./styles.module.css";
import Image from "next/image";
import footerBG from "../assets/bobyan-footer-bg.svg";
import logoWhite from "../assets/bobyan-logo-white.svg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <div className={styles["footer-main"]}>
          <div className={styles["footer-section-left"]}>
            <Image
              alt="Bobyan Delivery Logo White"
              src={logoWhite}
              className={styles["footer-logo"]}
            />
            <div className={styles["footer-address"]}>
              Floor 4, Office No. 5, <br />
              Dar Al-Jazera Consultants Building, <br />
              Khaled Bin Al Waleed Street, <br />
              Sharq - Kuwait
            </div>
            <div className={styles["footer-email"]}>
              info@bobyandelivery.com
            </div>
          </div>
          <div className={styles["footer-section-mid"]}>
            {menues.map((menu) => (
              <Link
                key={menu.id}
                href={menu.url}
                className="cursor-pointer text-[14px] font-semibold hover:text-[#DD0107] transition"
              >
                {menu.name}
              </Link>
            ))}
          </div>
          <div className={styles["footer-section-right"]}>
            <div className={styles["footer-right-text"]}>FOLLOW US</div>
            <div className={styles["footer-right-icons"]}>
              <FaLinkedin />
              <FaFacebook />
              <FaInstagram />
            </div>
          </div>
        </div>
        <div className={styles["footer-copyright"]}>©2026 Bobyan Delivery</div>
      </div>
      <Image
        alt="Bobyan Logo Footer"
        src={footerBG}
        className={styles["footer-background"]}
      />
    </div>
  );
};

export default Footer;
