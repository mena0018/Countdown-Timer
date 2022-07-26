import { DataType } from "../../types/data";
import styles from "./Card.module.scss";
import {useTrail, animated } from "react-spring"


export default function Card({ type, value }: DataType) {

   const trail = useTrail(1, {
      from: { opacity: 0, x: 20},
      to: { opacity: 1, x: 0}
   })

  return (
     <>
      {trail.map((cardStyle, index) => {

         return <animated.div style={cardStyle} key={index}>

            <div className={`${styles.wrapper} ${type}`}>
               <div className={styles.point_left}></div>
               <div className={styles.point_right}></div>
               <p className={styles.value}>{value}</p>
            </div>
            
            <p className={styles.type}>{type}</p>
         </animated.div>
      })}
     </>
  )
}
