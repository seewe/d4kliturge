import { Image } from "react-bootstrap";
import modalDetail from "../../models/FaireUnDonModal";
import orange from "../../assets/orangemoneyico.png";
import { useContext } from "react";
import { appContext } from "../../context/appContext";

export default function FaireUnDonOrange() {
  const { setTheme, setTitle, setContent, setShow } = useContext(appContext);
  const handleOrange = () => {
    setTitle(<modalDetail.orangeTitle />);
    setContent(<modalDetail.orange />);
    setTheme("rgb(255, 141, 48)");
    setShow(true);
  };
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleOrange}
      >
        <Image
          src={orange}
          fluid
          className="mx-1 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
