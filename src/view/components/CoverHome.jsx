import searchChantTitle from "../../models/searchChantTitle";
import CoverDonButton from "./CoverDonButton";
import CoverTitle from "./CoverTitle";
import ResearchChant from "./ReseachChant";
import { HiThumbUp } from "react-icons/hi";
import { useNavigate } from "react-router";
import { SiGmail } from "react-icons/si";
import { FaShareAlt } from "react-icons/fa";
import { Share } from "@capacitor/share";
import { FaHeartCircleCheck } from "react-icons/fa6";

export default function CoverHome({ title, subtitle, imgSrc, label, link }) {
  const navigate = useNavigate();

  const handleShare = async () => {
    try {
      await Share.share({
        title: "Liturge",
        text: "Receuil de chants liturgiques chrétiens",
        url: "https://play.google.com/store/apps/details?id=co.median.android.exedbw&pcampaignid=web_share",
        dialogTitle: "Partager Liturge",
      });
    } catch (error) {
      console.log("Error sharing:", error);
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
          <a
            className="btn fw-bold fs-6 py-1 d-flex flex-column align-items-center justify-content-between shadow "
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "solid 2px rgba(255, 255, 255, 1)",
            }}
            onClick={() => {
              navigate("/favorites");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <FaHeartCircleCheck className="fw-bold" size={20} /> favoris
          </a>
          <a
            className="btn fw-bold fs-6 py-1 d-flex flex-column align-items-center justify-content-between shadow"
            href="mailto:info@dataforknow.com?subject=Feedback%20on%20Liturge%20App&body=Your%20feedback%20here"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "solid 2px rgba(255, 255, 255, 1)",
            }}
          >
            <SiGmail className="fw-bold" size={20} /> écrire
          </a>
          <a
            className="btn fw-bold fs-6 py-1 d-flex flex-column align-items-center justify-content-between shadow"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "solid 2px rgba(255, 255, 255, 1)",
            }}
            onClick={handleRateApp}
          >
            <HiThumbUp className="fw-bold" size={20} /> aimer
          </a>
          <a
            className="btn fw-bold fs-6 py-1 d-flex flex-column align-items-center justify-content-between shadow"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              border: "solid 2px rgba(255, 255, 255, 1)",
            }}
            onClick={handleShare}
          >
            <FaShareAlt className="fw-bold" size={20} /> partage
          </a>
        </div>
        <CoverDonButton label={label} link={link} />
      </div>
    </div>
  );
}
