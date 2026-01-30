import { PiHandCoinsDuotone, PiHandHeartDuotone } from "react-icons/pi";
import { useNavigate } from "react-router";

export default function CoverDonButton({ label, link }) {
  const navigate = useNavigate();
  return (
    <div
      className="text-center rounded-3 text-white mx-5 text-justify-content shadow"
      style={{ marginTop: "2%", marginBottom: "0%" }}
      id="don"
    >
      <a
        className="btn fw-bold fs-4 py-0 d-flex align-items-center justify-content-between mx-3"
        onClick={() => {
          navigate(link);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <PiHandCoinsDuotone size={30} /> {label}{" "}
        <PiHandHeartDuotone size={30} />
      </a>
    </div>
  );
}
