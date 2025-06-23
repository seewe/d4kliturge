import { Accordion } from "react-bootstrap";
import {
  Calendar3,
  CalendarDay,
  PatchQuestionFill,
} from "react-bootstrap-icons";

export default function AnneeLiturgiqueContentElmt({
  elmtID,
  periode,
  duree,
  justification,
  nombreDimanche,
  nombreLiturgique,
  borderColor,
}) {
  return (
    <Accordion
      defaultActiveKey="0"
      flush
      className="mb-4 border border-1 px-0 shadow"
      style={{ background: { borderColor } }}
    >
      <Accordion.Item eventKey={elmtID}>
        <Accordion.Button
          className="fw-bold fs-4 px-3"
          style={{ background: `${borderColor}` }}
        >
          {periode}
        </Accordion.Button>
        <Accordion.Body>
          <ul className="list-group list-group-flush">
            <li className="list-group-item py-3">
              <span className="fw-bold fs-4">Durée</span>
              <br />
              <i
                className={`bi bi-calendar3 position-absolute fw-bold anliItem`}
                style={{ color: `${borderColor}` }}
              ></i>
              {duree}
            </li>
            <li className="list-group-item py-3">
              <span className="fw-bold fs-4">Justification</span>
              <br />
              <i
                className={`bi bi-patch-question-fill position-absolute fw-bold anliItem`}
                style={{ color: `${borderColor}` }}
              ></i>
              {justification}
            </li>
            <li className="list-group-item py-3">
              <span className="fw-bold fs-4">Nombre de dimanche</span>
              <br />
              <i
                className={`bi bi-123 position-absolute fw-bold anliItem`}
                style={{ color: `${borderColor}` }}
              ></i>
              {nombreDimanche}
            </li>
            <li className="list-group-item py-3">
              <span className="fw-bold fs-4">Nombre liturgiques</span>
              <br />
              <i
                className={`bi bi-calendar-day position-absolute fw-bold anliItem`}
                style={{ color: `${borderColor}` }}
              ></i>
              {nombreLiturgique}
            </li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
