import { useContext } from "react";
import modalDetail from "../../models/FaireUnDonModal";
import { Paypal } from "react-bootstrap-icons";
import { appContext } from "../../context/appContext";

export default function FaireUnDonPaypal() {
  const { setTitle, setTheme, setContent, setShow } = useContext(appContext);
  const handlePaypal = () => {
    setTitle(<modalDetail.paypalTitle />);
    setContent(<modalDetail.paypal />);
    setTheme("rgb(75, 147, 255)");
    setShow(true);
  };
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
          className="mx-3 p-1 shadow rounded-4 text-primary border border-0 border-primary contactButton"
        />
      </a>
    </>
  );
}
