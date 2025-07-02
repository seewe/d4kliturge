import { Image } from "react-bootstrap";
import modalDetail from "../../models/FaireUnDonModal";
import interacLogo from "../../assets/InteracLogo.png";
import { useContext } from "react";
import { appContext } from "../../context/appContext";

export default function FaireUnDonInterac() {
  const { setTheme, setTitle, setContent, setShow } = useContext(appContext);
  const handleInterac = () => {
    setTitle(<modalDetail.interacTitle />);
    setContent(<modalDetail.interac />);
    setTheme("rgb(255, 187, 0)");
    setShow(true);
  };
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleInterac}
      >
        <Image
          src={interacLogo}
          fluid
          className="mx-3 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonInter"
        />
      </a>
    </>
  );
}
