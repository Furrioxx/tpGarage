import Vehicule from "./Vehicule";
import MotoKlaxon from "../assets/moto.mp3";

const Moto = ({ marque, annee, couleur, cylindree }) => {

  return (
    <Vehicule marque={marque} annee={annee} couleur={couleur} url={MotoKlaxon}>
      <p>Cylindrée : {cylindree} cc</p>
    </Vehicule>
  );
};

export default Moto;