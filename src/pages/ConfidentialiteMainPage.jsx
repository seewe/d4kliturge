import { MusicNoteList } from "react-bootstrap-icons";
import ButtonPulse from "../view/components/ButtonPulse";
import OtherPage from "../view/components/OtherPage";
import PrefaceContent from "../view/components/PrefaceContent";
import TocTitle from "../view/components/TocTitle";
import ConfidentialiteText from "../models/ConfidentialiteText";

export default function ConfidentialiteMainPage() {
  return (
    <>
      <OtherPage
        titre={<TocTitle titre="CONFIDENTIALITÉ" />}
        contenu={<PrefaceContent prefaceText={<ConfidentialiteText />} />}
        nextPage={
          <ButtonPulse
            label="Liste des chants"
            icon={<MusicNoteList />}
            link="/tabledematiere"
          />
        }
      />
    </>
  );
}
