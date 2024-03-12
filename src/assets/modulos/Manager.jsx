import React from "react";
import DisplayOferta from "./DisplayOferta";

const Manager = () =>{

   const oferta = 'Prueba variable y DisplayOferta'

    return(
        <div> 
        <p>Prueba Manager</p>
        <DisplayOferta oferta={oferta} />
        
      </div>
    )
}

export default Manager;