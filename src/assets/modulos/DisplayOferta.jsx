import React, { Children } from "react";

const DisplayOferta = ({oferta}) =>{
    return(
        //Muestra la oferta de la maquina.
        <div>
            <p>La oferta es: </p>
            <p>{oferta}</p>
        </div>
    )
}

export default DisplayOferta;