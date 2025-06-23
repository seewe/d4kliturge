import { useNavigate } from "react-router";

export default function TocContentListChant({ chantNumber }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="col-2 text-center border border-0 rounded rounded-2 shadow-sm m-1"
        style={{ background: "rgba(247, 199, 159, 0.322)" }}
      >
        <a
          type="button"
          className="text-body text-decoration-none fw-bold tbm-item-link"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate(`/chant/${chantNumber}`);
          }}
        >
          <div className="tbm-item p-1 tbm-item-number border border-0">
            {chantNumber}
          </div>
        </a>
      </div>
    </>
  );
}
