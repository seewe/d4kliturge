import { Image } from "react-bootstrap";
import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";

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
          src="../../../src/assets/wise.png"
          fluid
          className="mx-2 p-2 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
