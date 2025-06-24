import { Image } from "react-bootstrap";
import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";
import orange from "../../assets/orangemoneyico.png";

export default function FaireUnDonOrange() {
  const {
    handleMTN,
    handleOrange,
    handlePaypal,
    handleWise,
    handleStripe,
    handleInterac,
  } = useContext(lienContext);
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOrange}
      >
        <Image
          src={orange}
          fluid
          className="mx-1 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
