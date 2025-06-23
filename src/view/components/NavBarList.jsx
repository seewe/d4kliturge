import Accordion from "react-bootstrap/Accordion";
import NavBarElmt from "./NavBarElmt";

export default function NavBarList({ listChants }) {
  return (
    <Accordion
      defaultActiveKey="salutation"
      size="sm"
      className="accordion accordion-flush "
    >
      {Object.entries(listChants).map(([categorie, chants]) => (
        <NavBarElmt
          key={categorie}
          eventKey={categorie}
          accHeader={categorie}
          accBody={chants}
        />
      ))}
    </Accordion>
  );
}
