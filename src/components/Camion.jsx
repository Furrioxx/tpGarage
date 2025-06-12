import Vehicule from "./Vehicule";
import CamionKlaxon from "../assets/camion.mp3";


const Camion = ({ marque, annee, couleur, capacite }) => {

  return (
    <Vehicule marque={marque} annee={annee} couleur={couleur} url={CamionKlaxon}>
      <p>Capacité : {capacite} tonnes</p>
    </Vehicule>
  );
};

export default Camion;