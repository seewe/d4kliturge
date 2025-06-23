import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";
import { Stripe } from "react-bootstrap-icons";

export default function FaireUnDonStripe() {
  const { handleStripe } = useContext(lienContext);
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleStripe}
      >
        <Stripe
          size={50}
          className="mx-2 p-2 shadow rounded-4 contactButton contactButtonStripe"
        />
      </a>
    </>
  );
}
