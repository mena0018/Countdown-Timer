import styles from "./Footer.module.scss";
import Montain from "../../images/pattern-hills.svg";
import FacebookIcon from "../../images/icon-facebook.svg";
import InstagramIcon from "../../images/icon-instagram.svg";
import PinterestIcon from "../../images/icon-pinterest.svg";


export default function Footer() {
   
  return (
    <footer className={styles.nav}>
      <ul>
         <li className={styles.social_media}>
            <img src={FacebookIcon} alt="Facebook Logo Icon" />
         </li>

         <li className={styles.social_media}>
            <img src={PinterestIcon} alt="Pinterest Logo Icon" />
         </li>

         <li className={styles.social_media}>
            <img src={InstagramIcon} alt="Instagram Logo Icon" />
         </li>
      </ul>
      <img src={Montain} alt="Pattern Hills" />
    </footer>
  )
}
