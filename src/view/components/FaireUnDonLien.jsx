import { createContext, useState } from "react";
import FaireUnDonDetails from "./FaireUnDonDetails";
import modalDetail from "../../models/FaireUnDonModal";
import FaireUnDonInterac from "./FaireUnDonInterac";
import FaireUnDonMTN from "./FaireUnDonMTN";
import FaireUnDonOrange from "./FaireUnDonOrange";
import FaireUnDonPaypal from "./FaireUnDonPaypal";
import FaireUnDonWise from "./FaireUnDonWise";
import FaireUnDonStripe from "./FaireUnDonStripe";
export const modalContext = createContext();
export const lienContext = createContext();

export default function FaireUnDonLien() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  const [theme, setTheme] = useState(" ");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMTN = () => {
    setTitle(<modalDetail.mtnTitle />);
    setContent(<modalDetail.mtn />);
    setTheme("rgb(250, 222, 65)");
    handleShow();
  };

  const handleOrange = () => {
    setTitle(<modalDetail.orangeTitle />);
    setContent(<modalDetail.orange />);
    setTheme("rgb(255, 141, 48)");
    handleShow();
  };

  const handlePaypal = () => {
    setTitle(<modalDetail.paypalTitle />);
    setContent(<modalDetail.paypal />);
    setTheme("rgb(75, 147, 255)");
    handleShow();
  };
  const handleWise = () => {
    setTitle(<modalDetail.wiseTitle />);
    setContent(<modalDetail.wise />);
    setTheme("rgb(138, 199, 97)");
    handleShow();
  };
  const handleStripe = () => {
    setTitle(<modalDetail.stripeTitle />);
    setContent(<modalDetail.stripe />);
    setTheme("rgb(125, 118, 252)");
    handleShow();
  };

  const handleInterac = () => {
    setTitle(<modalDetail.interacTitle />);
    setContent(<modalDetail.interac />);
    setTheme("rgb(255, 187, 0)");
    handleShow();
  };

  return (
    <div className="mx-0 my-3 pt-3 pb-0 lien-don">
      <div className="text-center">
        <lienContext.Provider
          value={{
            handleMTN,
            handleOrange,
            handlePaypal,
            handleWise,
            handleStripe,
            handleInterac,
          }}
        >
          <FaireUnDonMTN />
          <FaireUnDonOrange />
          <FaireUnDonPaypal />
          <FaireUnDonWise />
          <FaireUnDonStripe />
          <FaireUnDonInterac />
        </lienContext.Provider>

        <modalContext.Provider
          value={{
            title,
            content,
            show,
            handleClose,
            theme,
          }}
        >
          <FaireUnDonDetails />
        </modalContext.Provider>
      </div>
    </div>
  );
}
