import { Image } from "react-bootstrap";
import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";
import mtn from "../../assets/mtn.svg";

export default function FaireUnDonMTN() {
  const { handleMTN } = useContext(lienContext);
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleMTN}
      >
        <Image
          src={mtn}
          fluid
          className="mx-1 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
