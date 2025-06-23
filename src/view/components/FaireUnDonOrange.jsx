import { Image } from "react-bootstrap";
import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";

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
          src="../../../src/assets/orangemoneyico.png"
          fluid
          className="mx-2 p-2 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
