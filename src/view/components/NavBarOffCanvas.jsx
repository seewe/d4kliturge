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

export default function NavBarOffCanvas() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar
        expand={false}
        className="mb-3 pt-4 d-lg-block fixed-top shadow mainNav"
      >
        <Container fluid>
          <Navbar.Brand
            type="button"
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="navBarTitle">
              <LiturgeLogo className="navBarTitleIcon" />
              {"Liturge".toUpperCase()}
            </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            style={{ width: "90%" }}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-md`}
                className="pt-3"
              >
                <LiturgeLogo />
                <span className="navBarPaneTitle"> Les chants</span>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <ResearchChant items={searchChantTitle} />
            <Offcanvas.Body className="px-0 mt-4">
              <Nav className="justify-content-end flex-grow-1 pe-0">
                <NavBarList listChants={ChantsMenu} />
              </Nav>
            </Offcanvas.Body>
            <span className="text-center fs-3 fw-bold shadow mt-3 mx-5 rounded-pill">
              Faire un don
            </span>
            <FaireUnDonLien />
            <span className="mb-5"> </span>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
