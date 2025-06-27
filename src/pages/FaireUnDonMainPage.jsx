import ButtonPulse from "../view/components/ButtonPulse";
import OtherPage from "../view/components/OtherPage";
import TocTitle from "../view/components/TocTitle";
import FaireUnDonContent from "../view/components/FaireUnDonContent";
import { HouseFill } from "react-bootstrap-icons";
import FaireUnDonText from "../models/FaireUnDonText";

export default function FaireUnDonMainPage() {
  return (
    <>
      <OtherPage
        titre={<TocTitle titre="FAIRE UN DON" />}
        contenu={<FaireUnDonContent faireUnDonText={<FaireUnDonText />} />}
        nextPage={
          <ButtonPulse label="Page d'acceuil" icon={<HouseFill />} link="/" />
        }
      />
    </>
  );
}
