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
          size={50}
          className="mx-2 p-2 shadow rounded-4 text-primary border border-0 border-primary contactButton"
        />
      </a>
    </>
  );
}
