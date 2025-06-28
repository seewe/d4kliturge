import searchChantTitle from "../../models/searchChantTitle";
import CoverDonButton from "./CoverDonButton";
import CoverTitle from "./CoverTitle";
import ResearchChant from "./ReseachChant";

export default function CoverHome({ title, subtitle, imgSrc, label, link }) {
  return (
    <div className="cover-div">
      <div className="cover-div-inner">
        <div className="cover-div-research">
          <ResearchChant items={searchChantTitle} className="w-100" />
        </div>
        <CoverTitle title={title} subtitle={subtitle} imgSrc={imgSrc} />
        <CoverDonButton label={label} link={link} />
      </div>
    </div>
  );
}
