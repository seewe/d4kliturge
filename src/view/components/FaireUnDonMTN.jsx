import { Image } from "react-bootstrap";
import modalDetail from "../../models/FaireUnDonModal";
import mtn from "../../assets/mtn.svg";
import { useContext } from "react";
import { appContext } from "../../context/appContext";

export default function FaireUnDonMTN() {
  const { setTheme, setTitle, setContent, setShow } = useContext(appContext);
  const handleMTN = () => {
    setTitle(<modalDetail.mtnTitle />);
    setContent(<modalDetail.mtn />);
    setTheme("rgb(250, 222, 65)");
    setShow(true);
  };
  return (
    <>
      <a
        type="button"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleMTN}
      >
        <Image
          src={mtn}
          fluid
          className="mx-1 p-1 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
        />
      </a>
    </>
  );
}
