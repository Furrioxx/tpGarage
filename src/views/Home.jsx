import { useState } from "react";
import Garage from "../components/Garage";
import AddVehiculeForm from "../components/form/AddVehiculeForm";
import ToastService from "../services/ToastService";

const Home = () => {
  const [vehicules, setVehicules] = useState([
    { type: "voiture", marque: "Peugeot", annee: 2020, couleur: "rouge", nbPortes: 5 },
    { type: "camion", marque: "Renault", annee: 2018, couleur: "blanc", capacite: 12 },
    { type: "moto", marque: "Yamaha", annee: 2022, couleur: "noir", cylindree: 600 }
  ]);


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