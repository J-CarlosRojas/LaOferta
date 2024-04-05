import Manager from "./assets/modulos/Manager";
import "./App.css";

function App() {
  return (
    <div>
      <div className=" flex justify-center bg-amarillo p-6 ">
        <h1 className=" font-principal text-8xl text-cyan-800 sombra_titulo">
          La Oferta
        </h1>
      </div>
      <Manager></Manager>
    </div>
  );
}

export default App;
