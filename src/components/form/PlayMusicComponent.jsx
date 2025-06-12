import ButtonComponent from "./ButtonComponent";

export default function PlayMusicComponent({ url, label }) {
    const audio = new Audio(url);

    const playMusic = () => {
        audio.play().catch((error) => {
            console.error("Erreur lors de la lecture de la musique :", error);
        });
    };

    return (
        <ButtonComponent label={label} onClick={playMusic} />
    );
}