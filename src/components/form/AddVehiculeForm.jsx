import React, { useState } from "react";
import InputComponent from "./InputComponent";
import SelectComponent from "./SelectComponent";
import ButtonComponent from "./ButtonComponent";

const AddVehiculeForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
        type: '',
        marque: '',
        annee: '',
        couleur: '',
        specifique: '',
    });

  const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.marque || !formData.annee || !formData.couleur || !formData.specifique) {
      alert("Veuillez remplir tous les champs.");
      return;
    }
    let vehicule = { type: formData.type, marque: formData.marque, annee: formData.annee, couleur: formData.couleur };
    if (formData.type === "voiture") vehicule.nbPortes = formData.specifique;
    if (formData.type === "camion") vehicule.capacite = formData.specifique;
    if (formData.type === "moto") vehicule.cylindree = formData.specifique;
    onAdd(vehicule);
    setFormData({
      type: '',
      marque: '',
      annee: '',
      couleur: '',
      specifique: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <SelectComponent
        label={"Type"}
        id={"type"}
        value={formData.type}
        onChange={handleChange}
        options={[
          { value: "voiture", label: "Voiture" },
          { value: "camion", label: "Camion" },
          { value: "moto", label: "Moto" }
        ]}
      />
      <InputComponent label={"Marque"} id={"marque"} value={formData.marque} onChange={handleChange}/>
      <InputComponent label={"Année"} type="number" id={"annee"} value={formData.annee} onChange={handleChange}/>
      <InputComponent label={"Couleur"} id={"couleur"} value={formData.couleur} onChange={handleChange}/>
      {formData.type === "voiture" && (
        <InputComponent label={"Nombre de portes"} type="number" id={"specifique"} value={formData.specifique} onChange={handleChange}/>
      )}
      {formData.type === "camion" && (
        <InputComponent label={"Capacité (tonnes)"} type="number" id={"specifique"} value={formData.specifique} onChange={handleChange}/>
      )}
      {formData.type === "moto" && (
        <InputComponent label={"Cylindrée (cc)"} type="number" id={"specifique"} value={formData.specifique} onChange={handleChange}/>
      )}
      <ButtonComponent label={"Ajouter"} onClick={handleSubmit} />
    </form>
  );
};

export default AddVehiculeForm;