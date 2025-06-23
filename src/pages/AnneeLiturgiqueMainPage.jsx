import { MusicNoteList } from "react-bootstrap-icons";
import ButtonPulse from "../view/components/ButtonPulse";
import OtherPage from "../view/components/OtherPage";
import PrefaceContent from "../view/components/PrefaceContent";
import TocTitle from "../view/components/TocTitle";
import AnneeLiturgiqueContent from "../view/components/AnneeLiturgiqueContent";
import anneeLiturgiqueData from "../models/AnneeLiturgique";

export default function AnneeLiturgiqueMainPage() {
  return (
    <>
      <OtherPage
        titre={<TocTitle titre="ANNÉE LITURGIQUE" />}
        contenu={
          <PrefaceContent
            prefaceText={
              <AnneeLiturgiqueContent
                anneeLiturgiqueData={anneeLiturgiqueData}
              />
            }
          />
        }
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
