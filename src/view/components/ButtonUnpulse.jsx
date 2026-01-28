import { useNavigate } from "react-router";

export default function ButtonUnpulse({ label, icon, link, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (link) {
      navigate(link);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className="text-center p-0 rounded-3 buttonUnpulse shadow-lg"
        style={{ backgroundColor: "rgba(250, 235, 215, 0.84)" }}
      >
        <a
          type="button"
          className="btn fw-bold fs-6 d-flex flex-column align-items-center justify-content-center"
          onClick={handleClick}
        >
          {icon} {label}
        </a>
      </div>
    </>
  );
}
