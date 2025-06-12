import { useState } from "react";
import Garage from "../components/Garage";
import AddVehiculeForm from "../components/form/AddVehiculeForm";
import ToastService from "../services/ToastService";

const Home = () => {
  const [vehicules, setVehicules] = useState([]);


  const handleAddVehicule = (vehicule) => {
    setVehicules([...vehicules, vehicule]);
    ToastService.success("Véhicule ajouté avec succès !");
  };

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%'}}> 
      <h1>Mon Garage</h1>
      <AddVehiculeForm onAdd={handleAddVehicule} />
      <Garage vehicules={vehicules} />
    </div>
  );
};

export default Home;