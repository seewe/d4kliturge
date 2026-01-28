import { Badge } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { extractNumber } from "../../js/utilsFunctions";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { appContext } from "../../context/AppContext";
import { FaHeart } from "react-icons/fa6";

export default function FavoriteElmtBody({ favoriteChant }) {
  const navigate = useNavigate();
  const { setShowOffCan } = useContext(appContext);
  const handleCloseOffCan = () => setShowOffCan(false);
  return (
    <ListGroup as="ol">
      {Object.entries(favoriteChant).map(([key, chant]) => (
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
            {chant.favorite && (
              <div className="ms-2 me-auto d-flex align-items-center justify-content-between w-100">
                <div className="fs-7 d-flex gap-2">
                  {chant.titre}
                  <Badge className="accBadge text-dark px-2 py-1" pill>
                    {chant.categorie}
                  </Badge>
                </div>
                <Badge
                  pill
                  className="d-flex align-items-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #ffffffff 0%, #ff9f46ff 100%)",
                    color: "#000000ff",
                  }}
                >
                  <FaHeart size={12} />
                </Badge>
              </div>
            )}
          </ListGroup.Item>
        </a>
      ))}
    </ListGroup>
  );
}
