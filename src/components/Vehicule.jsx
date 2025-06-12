import React from "react";
import PlayMusicComponent from "./form/PlayMusicComponent";

const Vehicule = ({ marque, annee, couleur, children, url }) => {
  
  const afficherDetails = () =>
    `Marque: ${marque}, Année: ${annee}, Couleur: ${couleur}`;

  return (
    <div style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
      <p>{afficherDetails()}</p>
      {children}
      <PlayMusicComponent label={"Klaxonner"} url={url} />
    </div>
  );
};

export default Vehicule;