import { HouseFill, MusicNoteList } from "react-bootstrap-icons";
import { useLocation, useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <footer className="fixed-bottom">
        <div className="bg-transparent p-0">
          <div className="d-flex flex-row bd-highlight">
            <a
              id="btnHome"
              type="button"
              className={`flex-fill bd-highlight fs-5 fw-bold hovermenu pt-2 pb-0 text-center ${
                location.pathname === "/"
                  ? "btn-menu-active "
                  : "btn-menu-no-active "
              }`}
              onClick={() => navigate("/")}
            >
              <HouseFill />
            </a>
            <a
              id="btnTabMat"
              type="button"
              className={`flex-fill bd-highlight fs-5 fw-bold hovermenu pt-2 pb-0 text-center ${
                location.pathname === "/tabledematiere"
                  ? "btn-menu-active "
                  : "btn-menu-no-active "
              }`}
              onClick={() => {
                navigate("/tabledematiere");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <MusicNoteList />
            </a>
          </div>
        </div>
        <div className="phone-footer-bar border border-0"> </div>
      </footer>
    </>
  );
}
