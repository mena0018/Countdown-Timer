import { DataType } from "../../types/data";
import styles from "./Card.module.scss";


export default function Card({ type, value }: DataType) {

  return (
    <>
      <p>{value}</p>
      <p>{type}</p>
    </>
  )
}
