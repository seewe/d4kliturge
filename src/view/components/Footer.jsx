import { HouseFill, MusicNoteList } from "react-bootstrap-icons";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="fixed-bottom">
        <div className="bg-white p-0 border-top border-light border-3 shadow-lg">
          <div className="d-flex flex-row bd-highlight">
            <a
              id="btnHome"
              className="btn flex-fill bd-highlight rounded rounded-0 fs-5 fw-bold hovermenu pt-3 pb-5 btn-menu-no-active"
              onClick={() => navigate("/")}
            >
              <HouseFill />
            </a>
            <a
              id="btnTabMat"
              className="btn flex-fill bd-highlight rounded rounded-0 fs-5 fw-bold hovermenu pt-3 pb-5 btn-menu-no-active"
              onClick={() => {
                navigate("/tabledematiere");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <MusicNoteList />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
