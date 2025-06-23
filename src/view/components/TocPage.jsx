import TocTitle from "./TocTitle";
import TocContent from "./TocContent";
import chantTocData from "../../models/chantTocData";
import ButtonPulse from "./ButtonPulse";
import { ShieldLockFill } from "react-bootstrap-icons";
import ResearchChant from "./ReseachChant";
import searchChantTitle from "../../models/searchChantTitle";

export default function TocPage() {
  return (
    <>
      <TocTitle titre="LISTE DES CHANTS" />
      <ResearchChant items={searchChantTitle} />
      <TocContent chantCategoryList={chantTocData} />
      <ButtonPulse
        label="Confidentialité"
        icon={<ShieldLockFill />}
        link="/confidentialite"
      />
    </>
  );
}
