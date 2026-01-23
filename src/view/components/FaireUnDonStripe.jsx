import { useContext } from "react";
import modalDetail from "../../models/FaireUnDonModal";
import { Stripe } from "react-bootstrap-icons";
import { appContext } from "../../context/AppContext";

export default function FaireUnDonStripe() {
  const { setTheme, setTitle, setContent, setShow } = useContext(appContext);
  const handleStripe = () => {
    setTitle(<modalDetail.stripeTitle />);
    setContent(<modalDetail.stripe />);
    setTheme("rgb(125, 118, 252)");
    setShow(true);
  };
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleStripe}
      >
        <Stripe className="mx-1 p-1 shadow rounded-4 contactButton contactButtonStripe" />
      </a>
    </>
  );
}
