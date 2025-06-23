import Accordion from "react-bootstrap/Accordion";
import NavBarElmtBody from "./NavBarElmtBody";

export default function NavBarElmt({ eventKey, accHeader, accBody }) {
  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header className="navBarAccTitle">
          {accHeader.toUpperCase()}
        </Accordion.Header>
        <Accordion.Body className="p-0">
          {" "}
          <NavBarElmtBody navBarBodyChant={accBody} />
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
