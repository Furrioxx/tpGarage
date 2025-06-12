import React, { useState } from "react";
import Vehicule from "./Vehicule";
import VoitureKlaxon from "../assets/voiture.mp3";


const Voiture = ({ marque, annee, couleur, nbPortes }) => {

  return (
    <Vehicule marque={marque} annee={annee} couleur={couleur} url={VoitureKlaxon}>
      <p>Nombre de portes : {nbPortes}</p>
    </Vehicule>
  );
};

export default Voiture;