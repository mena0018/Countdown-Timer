import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { DataType } from "../../types/data";
import styles from "./Home.module.scss";


export default function Home() {
  
   const now = new Date().getTime();
   const countDownDate = new Date("Septembre 1, 2022").getTime();
   const distance = countDownDate - now;

   const days    = Math.floor(distance / (1000 * 60 * 60 * 24))
   const hours   = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
   const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60 ))
   const seconds = Math.floor(distance % (1000 * 60) / 1000 )

   const [datas, setDatas] = useState<DataType[]>([]);

      
      useEffect(() => {
            let timer =  setInterval(() => {

            setDatas([
               { type: "days",    value:  days },
               { type: "hours",   value:  hours },
               { type: "minutes", value:  minutes },
               { type: "seconds", value:  seconds },
            ])
         }, 1000)

         return (() => clearInterval(timer)) 
      }, [days, hours, minutes, seconds])
      

   return (
      <div className={styles.container_global}>
         <h1 className={styles.title}>We're launching soon</h1>

         <div className={styles.list_card}>

            {datas.map( (item: DataType, index:number ) => 
               <div key={index} className={styles.card_container}>
                  <Card type={item.type} value={item.value}  />
               </div>
            )}

         </div>
      </div>
  )
}
