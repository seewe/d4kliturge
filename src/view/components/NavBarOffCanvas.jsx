import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavBarList from "./NavBarList";
import LiturgeLogo from "./LiturgeLogo";
import { ChantsMenu } from "../../models/Chants";
import ResearchChant from "./ReseachChant";
import searchChantTitle from "../../models/searchChantTitle";
import { useNavigate } from "react-router";
import FaireUnDonLien from "./FaireUnDonLien";
import CoverDonButton from "./CoverDonButton";
import { createContext, useContext } from "react";
import { appContext } from "../../context/AppContext";
export const offCanvasContext = createContext();

export default function NavBarOffCanvas() {
  const { showOffCan, setShowOffCan } = useContext(appContext);
  const navigate = useNavigate();
  const handleCloseOffCan = () => setShowOffCan(false);
  const handleShowOffCan = () => setShowOffCan(true);

  return (
    <>
      <Navbar
        expand={false}
        className="mb-3 pt-0 pb-0 d-lg-block fixed-top shadow mainNav"
      >
        <div className="phone-tools-bar"> </div>
        <Container fluid>
          <Navbar.Brand
            type="button"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="navBarTitle">
              <LiturgeLogo size={30} />
              {"Liturge".toUpperCase()}
            </span>
          </Navbar.Brand>
          <Navbar.Toggle
            onClick={handleShowOffCan}
            aria-controls={`offcanvasNavbar-expand-md`}
            className="mb-1 fs-6 p-1 "
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            style={{ width: "90%" }}
            show={showOffCan}
            onHide={handleCloseOffCan}
            placement="start"
          >
            <div className="phone-tools-bar"> </div>
            <Offcanvas.Header
              style={{
                paddingRight: "10px",
                paddingLeft: "20px",
                paddingTop: "5px",
                paddingBottom: "5px",
              }}
              closeButton
            >
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-md`}
                className="pt-0"
              >
                <LiturgeLogo size={30} />
                <a
                  type="button"
                  className="navBarPaneTitle fs-4 text-decoration-none"
                  onClick={() => {
                    navigate("/tabledematiere");
                    handleCloseOffCan();
                  }}
                >
                  {" "}
                  Les chants
                </a>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <ResearchChant items={searchChantTitle} />
            <Offcanvas.Body className="px-0 mt-3">
              <Nav className="justify-content-end flex-grow-1 pe-0">
                <NavBarList listChants={ChantsMenu} />
              </Nav>
            </Offcanvas.Body>
            <CoverDonButton label={"Faire un don"} link={"/faireundon"} />
            <FaireUnDonLien className="mt-2" />
            <div className="phone-footer-bar"> </div>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
