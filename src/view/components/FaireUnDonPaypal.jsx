import { lienContext } from "./FaireUnDonLien";
import { useContext } from "react";
import { Paypal } from "react-bootstrap-icons";

export default function FaireUnDonPaypal() {
  const { handlePaypal } = useContext(lienContext);
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handlePaypal}
      >
        <Paypal
          size={40}
          className="mx-1 p-1 shadow rounded-4 text-primary border border-0 border-primary contactButton"
        />
      </a>
    </>
  );
}
