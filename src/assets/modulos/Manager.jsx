import React, { useState, useEffect } from "react";
import DisplayOferta from "./DisplayOferta";
import SeleccionUsuario from "./SeleccionUsuario";
import ListaTapados from "./ListaTapados";
import Boton from "./Boton";
import Resultado from "./Resultado";


const Manager = () => {
  const premios = [
    0.1, 300, 5000, 25000, 45000, 50000, 60000, 75000, 90000, 100000,
  ]; // Array de premios disponibles
  const [carteles, setCarteles] = useState([]);
  const [cartelesSeleccionados, setCartelesSeleccionados] = useState(0); // Orden de selección del ususario
  const [pickUsuario, setPickUsuario] = useState(null);
  const [mediaPremios, setMediaPremios] = useState(0);
  const [ajusteOferta, setAjusteOferta] = useState(0.8);
  const [oferta, setOferta] = useState(0);
  const [premiosRestantes, setPremiosRestantes] = useState([]);
  const [modal, setModal] = useState(false)


  useEffect(() => {
    asignarPremiosACarteles();
  }, []);

  useEffect(() => {
    calcularPremiosRestantes();
  }, [carteles]);

  const asignarPremiosACarteles = () => {
    const premiosDisponibles = [...premios];
    const nuevosCarteles = [];

    for (let i = 0; i < 10; i++) {
      // numero de carteles
      const premioIndex = Math.floor(Math.random() * premiosDisponibles.length);
      const premioAsignado = premiosDisponibles[premioIndex];
      nuevosCarteles.push({
        premio: premioAsignado,
        destapado: false,
        bloqueado: false,
      });
      premiosDisponibles.splice(premioIndex, 1);
    }

    setCarteles(nuevosCarteles);
  };

  const handleSeleccionCartel = (index) => {
    // Verificar si el cartel ya ha sido seleccionado
    if (carteles[index].destapado) {
      return; // No hacer nada si el cartel ya está destapado
    }

    console.log("indice real de la seleccion  " + index);

    //Condicion para la seleccion del ususario
    if (cartelesSeleccionados == 0) {
      setPickUsuario(index);
      setCartelesSeleccionados(cartelesSeleccionados + 1);
    }

    //condición para las selecciones a destapar
    if (cartelesSeleccionados > 0 && pickUsuario != index) {
      const nuevosCarteles = [...carteles];
      nuevosCarteles[index].destapado = true;
      setCarteles(nuevosCarteles);
      setCartelesSeleccionados([cartelesSeleccionados + 1]);
      calcularMediaPremios();
      calcularOferta();
    }
  };

  // Función que prepara los premios restantes para mostrarlos en la lista de premios sin mostrar.
  const calcularPremiosRestantes = () => {
    const premiosRestantes = carteles
      .filter((cartel) => !cartel.destapado)
      .map((cartel) => cartel.premio)
      .sort((a, b) => a - b);
    setPremiosRestantes(premiosRestantes);
  };

  const calcularMediaPremios = () => {
    let sumaPremios = 0;
    let cartelesNoDestapados = 0;

    for (let i = 0; i < carteles.length; i++) {
      if (!carteles[i].destapado) {
        sumaPremios += carteles[i].premio;
        cartelesNoDestapados++;
        console.log(carteles[i].premio);
      }
    }

    console.log(" suma de los premios " + sumaPremios);
    if (cartelesNoDestapados === 0) {
      setMediaPremios(0);
    } else {
      setMediaPremios(sumaPremios / cartelesNoDestapados);
    }

    console.log("Media de los premios aun tapados " + mediaPremios);
  };

  const calcularOferta = () => {
    setAjusteOferta(ajusteOferta + ajusteOferta * 0.05);

    console.log("el ajuste de oferta es de :" + ajusteOferta);
  };

  useEffect(() => {
    // Calculamos la oferta cada vez que se actualiza el estado de ajusteOferta o mediaPremios
    const nuevaOferta = (mediaPremios * ajusteOferta).toFixed(2);
    setOferta(nuevaOferta);
  }, [mediaPremios, ajusteOferta]);

  
  const cambiarModal = ( ) => {
    setModal(!modal)
    console.log( 'estado del modal' + modal)
    console.log( carteles[pickUsuario].premio )
  }

 
  return (
    <div>
      <div>
        <DisplayOferta oferta={oferta < 1 ? "Oferta" : oferta} />
        <Boton onClick={cambiarModal} texto={"Aceptar Oferta"} />
      </div>

      <div className="flex flex-wrap space-x-4 items-center text-fuchsia-100">
        {carteles.map((cartel, index) => (
          <SeleccionUsuario
            key={index}
            premio={cartel.destapado ? cartel.premio : null}
            numeroSeleccion={index + 1}
            onClick={() => handleSeleccionCartel(index)}
            destapado={cartel.destapado}
          />
        ))}
      </div>
      <div>
        <ListaTapados premiosRestantes={premiosRestantes}></ListaTapados>
      </div>
         <Resultado cambiarModal={cambiarModal} modal={modal} />
    </div>
  );
};

export default Manager;
