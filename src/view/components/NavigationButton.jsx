import { useNavigate } from "react-router";

export default function NavigationButton({ label, icon, link, side }) {
  const navigate = useNavigate();
  if (side == "left") {
    return (
      <>
        <a
          className="flex-fill bd-highlight shadow fw-bold mx-5 navLeft text-decoration-none w-50"
          type="button"
          onClick={() => {
            navigate(link);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {icon} {label}
        </a>
      </>
    );
  } else {
    return (
      <>
        <a
          className="flex-fill bd-highlight shadow fw-bold mx-5 navRight text-decoration-none w-50"
          type="button"
          onClick={() => {
            navigate(link);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {label} {icon}
        </a>
      </>
    );
  }
}
