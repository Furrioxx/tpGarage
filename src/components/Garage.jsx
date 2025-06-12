import React from "react";
import Voiture from "./Voiture";
import Camion from "./Camion";
import Moto from "./Moto";

const Garage = ({ vehicules }) => {
  if (vehicules.length === 0)
    return <p>Le garage est vide.</p>;

  return (
    <div style={{ width: '1000px' }}>
      <h2>Véhicules dans le garage :</h2>
      {vehicules.map((v, idx) => {
        switch (v.type) {
          case "voiture":
            return <Voiture key={idx} {...v} />;
          case "camion":
            return <Camion key={idx} {...v} />;
          case "moto":
            return <Moto key={idx} {...v} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Garage;