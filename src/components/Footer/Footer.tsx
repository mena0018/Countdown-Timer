import styles from "./Footer.module.scss";
import FacebookIcon from "../../images/icon-facebook.svg";
import InstagramIcon from "../../images/icon-instagram.svg";
import PinterestIcon from "../../images/icon-pinterest.svg";


export default function Footer() {
   
  return (
    <footer className={styles.nav}>

      <div className={styles.social_media}>
         <img src={FacebookIcon} alt="Facebook Logo Icon" />
         <img src={PinterestIcon} alt="Pinterest Logo Icon" />
         <img src={InstagramIcon} alt="Instagram Logo Icon" />
      </div>

    </footer>
  )
}
