
import { moveBall } from "./dom/teclado.js";

const d=document;

//evento del teclado.
 d.addEventListener("keydown",e=>{
    moveBall(e,".ball",".stage");
 })



 
