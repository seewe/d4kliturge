import Accordion from "react-bootstrap/Accordion";
import FavoriteElmtBody from "./FavoriteElmBody";

export default function FavoriteElmt({ eventKey, accHeader, accBody }) {
  return (
    <>
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header className="navBarAccTitle">
          {accHeader.toUpperCase()}
        </Accordion.Header>
        <Accordion.Body className="p-0">
          {" "}
          <FavoriteElmtBody favoriteChant={accBody} />
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}
