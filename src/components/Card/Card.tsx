import { DataType } from "../../types/data";
import styles from "./Card.module.scss";


export default function Card({ type, value }: DataType) {

  return (
   <>
     <div className={styles.wrapper}>
      <div className={styles.point_left}></div>
      <div className={styles.point_right}></div>
       <p className={styles.value}>{value}</p>
     </div>

     <p className={styles.type}>{type}</p>
   </>
  )
}
