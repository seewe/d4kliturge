import { BalloonHeart } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

export default function CoverDonButton({ label, link }) {
  const navigate = useNavigate();
  return (
    <div
      className="text-center rounded rounded-pill text-white mx-5 text-justify-content"
      style={{ marginBottom: "15%" }}
      id="don"
    >
      <a
        className="btn fw-bold fs-4 py-0"
        onClick={() => {
          navigate(link);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        {label} <BalloonHeart />
      </a>
    </div>
  );
}
