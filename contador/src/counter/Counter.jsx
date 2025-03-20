import { useState } from "react";
import { use } from "react";


function  Counter_F (){
    const[contador,setContador]= useState(0);
    
    return(
        <div>
            <p>has hecho un clic {contador} veces a este boton</p>

            <button onClick={()=>{setContador(contador+1)}} >incrementer </button>

        </div>
    );
}
export default Counter_F;