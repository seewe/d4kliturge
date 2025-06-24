import { Image } from "react-bootstrap";
import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";
import wise from "../../assets/wise.png";

export default function FaireUnDonWise() {
  const { handleWise } = useContext(lienContext);
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWise}
      >
        <Image
          src={wise}
          fluid
          className="mx-1 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
