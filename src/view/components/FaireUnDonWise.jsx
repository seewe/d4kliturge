import { Image } from "react-bootstrap";
import modalDetail from "../../models/FaireUnDonModal";
import wise from "../../assets/wise.png";
import { useContext } from "react";
import { appContext } from "../../context/appContext";

export default function FaireUnDonWise() {
  const { setTitle, setTheme, setContent, setShow } = useContext(appContext);
  const handleWise = () => {
    setTitle(<modalDetail.wiseTitle />);
    setContent(<modalDetail.wise />);
    setTheme("rgb(138, 199, 97)");
    setShow(true);
  };
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
          className="mx-3 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
