import TocTitle from "./TocTitle";
import TocContent from "./TocContent";
import chantTocData from "../../models/chantTocData";
import ButtonPulse from "./ButtonPulse";
import { ShieldLockFill } from "react-bootstrap-icons";
import ResearchChant from "./ReseachChant";
import searchChantTitle from "../../models/searchChantTitle";
import ButtonUnpulse from "./ButtonUnpulse";
import { TbMusicHeart } from "react-icons/tb";
import { useNavigate } from "react-router";

export default function TocPage() {
  const navigate = useNavigate();
  return (
    <>
      <TocTitle titre="LISTE DES CHANTS" />
      <ResearchChant items={searchChantTitle} />
      <div className="mt-5 d-flex justify-content-center align-content-center">
        <ButtonUnpulse
          label="liste des chants favoris"
          icon={<TbMusicHeart className="fw-bold" size={20} />}
          onClick={() => {
            navigate("/favorites");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />
      </div>

      <TocContent chantCategoryList={chantTocData} />
      <ButtonPulse
        label="Confidentialité"
        icon={<ShieldLockFill />}
        link="/confidentialite"
      />
    </>
  );
}
