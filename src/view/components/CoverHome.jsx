import searchChantTitle from "../../models/searchChantTitle";
import ButtonUnpulse from "./ButtonUnpulse";
import CoverDonButton from "./CoverDonButton";
import CoverTitle from "./CoverTitle";
import ResearchChant from "./ReseachChant";
import { TbMusicHeart } from "react-icons/tb";
import { HiThumbUp } from "react-icons/hi";
import { useNavigate } from "react-router";
import { SiGmail } from "react-icons/si";
import { FaShareAlt } from "react-icons/fa";

export default function CoverHome({ title, subtitle, imgSrc, label, link }) {
  const navigate = useNavigate();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Liturge",
          text: "Receuil de chants liturgiques chrétiens",
          url: "https://play.google.com/store/apps/details?id=co.median.android.exedbw&pcampaignid=web_share",
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      alert("Sharing is not supported on this browser");
    }
  };

  const handleRateApp = () => {
    const playStoreUrl =
      "https://play.google.com/store/apps/details?id=co.median.android.exedbw";
    window.open(playStoreUrl, "_blank");
  };

  return (
    <div className="cover-div">
      <div className="cover-div-inner">
        <div className="cover-div-research">
          <ResearchChant items={searchChantTitle} className="w-100" />
        </div>
        <CoverTitle title={title} subtitle={subtitle} imgSrc={imgSrc} />
        <div
          className="d-flex justify-content-around align-items-center"
          style={{ marginTop: "20%", marginBottom: "5%" }}
        >
          <ButtonUnpulse
            label="favoris"
            icon={<TbMusicHeart className="fw-bold" size={20} />}
            onClick={() => {
              navigate("/favorites");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
          <ButtonUnpulse
            label="écrire"
            icon={<SiGmail className="fw-bold" size={20} />}
            link="mailto:eebouele@gmail.com?subject=Feedback%20on%20Liturge%20App&body=Your%20feedback%20here"
          />
          <ButtonUnpulse
            label="aimer"
            icon={<HiThumbUp className="fw-bold" size={20} />}
            onClick={handleRateApp}
          />
          <ButtonUnpulse
            label="partager"
            icon={<FaShareAlt className="fw-bold" size={20} />}
            onClick={handleShare}
          />
        </div>
        <CoverDonButton label={label} link={link} />
      </div>
    </div>
  );
}
