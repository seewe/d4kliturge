import { Badge } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { extractNumber } from "../../js/utilsFunctions";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";

export default function NavBarElmtBody({ navBarBodyChant }) {
  const navigate = useNavigate();
  const { setShowOffCan } = useContext(appContext);
  const handleCloseOffCan = () => setShowOffCan(false);
  return (
    <ListGroup as="ol">
      {Object.entries(navBarBodyChant).map(([key, chant]) => (
        <a
          onClick={() => {
            navigate(`/chant/${extractNumber(chant.id)}`);
            window.scrollTo({ top: 0, behavior: "smooth" });
            handleCloseOffCan();
          }}
          type="button"
          className="text-body text-decoration-none fw-bold"
          key={key}
        >
          <ListGroup.Item
            key={key}
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fs-7">{chant.titre}</div>
              <Badge className="accBadge text-dark" pill>
                {chant.categorie}
              </Badge>
            </div>
          </ListGroup.Item>
        </a>
      ))}
    </ListGroup>
  );
}
