import { DataType } from "../../types/data";
import styles from "./Card.module.scss";
import {useTrail, animated } from "react-spring"
import { useEffect, useState } from 'react';
import cx from "classnames"


export default function Card({ type, value }: DataType) {

   const[isFlip, setIsFlip] = useState(false)
   useEffect(() => { setIsFlip(true) }, [value])

   const trail = useTrail(1, {
      from: { opacity: 0, x: 20},
      to: { opacity: 1, x: 0}
   })

   let formattedValue = value < 10 ? `0${value}` : value

  return (
     <>
      {trail.map((cardStyle, index) => {
         return <animated.div style={cardStyle} key={index}>

            <div className={styles.wrapper}>
               <div className={isFlip ? cx(styles.top, styles.top_flip) 
                  : styles.top}></div>

               <p className={styles.value}>{formattedValue}</p>
               
               <div className={isFlip ? cx(styles.bottom, styles.bottom_flip) 
                  : styles.bottom} onAnimationEnd={() => setIsFlip(false)}></div>
            </div>
            
            <p className={styles.type}>{type}</p>
         </animated.div>
      })}
     </>
  )
}
