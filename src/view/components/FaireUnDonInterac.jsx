import { Image } from "react-bootstrap";
import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";
import interacLogo from "../../assets/InteracLogo.png";

export default function FaireUnDonInterac() {
  const { handleInterac } = useContext(lienContext);
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleInterac}
      >
        <Image
          src={interacLogo}
          fluid
          className="mx-1 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonInter"
        />
      </a>
    </>
  );
}
