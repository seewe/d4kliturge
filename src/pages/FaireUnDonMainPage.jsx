import ButtonPulse from "../view/components/ButtonPulse";
import OtherPage from "../view/components/OtherPage";
import TocTitle from "../view/components/TocTitle";
import FaireUnDonContent from "../view/components/FaireUnDonContent";
import FaireUnDonText from "../models/FaireUnDonText";
import LiturgeLogo from "../view/components/LiturgeLogo";

export default function FaireUnDonMainPage() {
  return (
    <>
      <OtherPage
        titre={<TocTitle titre="FAIRE UN DON" />}
        contenu={<FaireUnDonContent faireUnDonText={<FaireUnDonText />} />}
        nextPage={
          <ButtonPulse
            label={"Liturge".toUpperCase()}
            icon={<LiturgeLogo size={20} />}
            link="/"
          />
        }
      />
    </>
  );
}
