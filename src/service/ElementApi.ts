import Element from "../model/Element";
// import { elements } from "./periodic-table.json";
import axios from "axios";

let elementList: Element[] = [];

axios.get("http://127.0.0.1:5000/getall").then((response) => {
  elementList = response.data as Element[];
});
console.log(elementList);
export default elementList;
