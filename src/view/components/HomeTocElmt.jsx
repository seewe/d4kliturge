import { useNavigate } from "react-router";

export default function HomeTocElmt({ title, description, icon, link }) {
  const navigate = useNavigate();
  return (
    <a
      type="button"
      className="text-body text-decoration-none emaill mx-0 w-100"
      onClick={() => {
        navigate(link);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className="card bg-transparent mb-3 shadow">
        <i className={`bi bi-${icon} position-absolute icon-home-toc`}></i>
        <div className="card-body w-100">
          <h5 className="card-title fw-bold emaill">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </a>
  );
}
