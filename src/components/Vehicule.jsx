import React, { useState } from "react";
import PlayMusicComponent from "./form/PlayMusicComponent";

const Vehicule = ({ marque, annee, couleur, children, url }) => {
  const [showModal, setShowModal] = useState(false);

  const afficherDetails = () =>
    `Marque: ${marque}, Année: ${annee}, Couleur: ${couleur}`;

  return (
    <div style={{ border: "1px solid #ccc", margin: 8, padding: 8 }}>
      <p>{afficherDetails()}</p>
      {children}
      <div className="mb-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <PlayMusicComponent label={"Klaxonner"} url={url} />
        <button
          className="btn btn-secondary"
          style={{ marginLeft: 8 }}
          onClick={() => setShowModal(true)}
        >
          Détails
        </button>
      </div>
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10000,
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: 24,
              borderRadius: 8,
              minWidth: 300,
              color: "#213547",
              boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
            }}
          >
            <h3>Détail du véhicule</h3>
            <p>
              Marque : {marque}
            </p>
            <p>
              Année : {annee}
            </p>
            <p>
              Couleur : {couleur}
            </p>
            {children}
            <button
              className="btn btn-primary"
              onClick={() => setShowModal(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vehicule;