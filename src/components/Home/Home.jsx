import React from "react";
import '../Home/Home.css'


const Home = (props) => {
    const platosLista = props.platos?.map((plato) => {
        console.log('hola',plato?.src)
        return (
            <div className="Home">
                <img src={plato.src} width="500px" height="400px" alt=""  />
                <br />
                Plato:<h2>{plato.name}</h2>
                Descricion: <h2>{plato.description}</h2>
                Precio: <h2>{plato.price}€</h2>
                
            </div>
        );
    });
    return (
        <div>
            <p>{platosLista}</p>
        </div>
    );
};

export default Home;