import { useNavigate } from "react-router";

export default function ButtonPulse({ label, icon, link }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="text-center px-5 rounded rounded-pill bg-transparent buttonPulse">
        <a
          type="button"
          className="btn btn-transparent fw-bold fs-6"
          onClick={() => {
            navigate(link);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {icon} {label}
        </a>
      </div>
    </>
  );
}
