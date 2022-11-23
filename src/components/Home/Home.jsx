import React from "react";
import '../Home/Home.css'


const Home = (props) => {
    const platosLista = props.platos.map((dish) => {
        return (
            <div className="Home">
               
                Plato:<h2>{dish.name}</h2>
                Descricion: <h2>{dish.description}</h2>
                Precio: <h2>{dish.price}</h2>
                
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