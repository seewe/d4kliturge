import { Calendar3 } from "react-bootstrap-icons";
import PrefaceText from "../models/prefaceText";
import ButtonPulse from "../view/components/ButtonPulse";
import OtherPage from "../view/components/OtherPage";
import PrefaceContent from "../view/components/PrefaceContent";
import TocTitle from "../view/components/TocTitle";

export default function PrefaceMainPage() {
  return (
    <>
      <OtherPage
        titre={<TocTitle titre="PRÉFACE" />}
        contenu={<PrefaceContent prefaceText={<PrefaceText />} />}
        nextPage={
          <ButtonPulse
            label="Année Liturgique"
            icon={<Calendar3 />}
            link="/anneeliturgique"
          />
        }
      />
    </>
  );
}
