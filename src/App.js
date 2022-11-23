
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";


function App() {
  const platos = [
    {
      id: 1,
      name: "Gallo Pinto",
      description: "El gallo pinto​ o gallopinto​ es un plato tradicional de Centroamérica que consiste en una combinación de arroz con frijoles ",
      price: 15,
    },
    {
      id: 2,
      name: "Bandeja Paisa",
      description: "Tradicionalmente la bandeja paisa incluye un guiso de frijoles, arroz blanco, tocino o chicharrón, carne, chorizo, huevo frito, plátano maduro, aguacate y arepa. Sin embargo, vale destacar que la carne puede ser de res o de cerdo a la parrilla.",
      price: 20,
    },
    {
      id: 3,
      name: "Pupusas",
      description: "Tortilla gruesa de maíz o arroz hecha a mano que se rellena con uno o más ingredientes. Los ingredientes más comunes son el queso, el chicharrón, el ayote o los frijoles refritos.",
      price: 10,
    },
  ];

  return (
    <div className="App">
      <Header />
      <Home platos={platos} />
    </div>
  );
}

export default App;
