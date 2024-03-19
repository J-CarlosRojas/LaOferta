import React, { Children } from "react";

const DisplayOferta = ({oferta}) =>{
    return(
        //Muestra la oferta de la maquina.
        <div>
            <p>{oferta}</p>
        </div>
    )
}

export default DisplayOferta;