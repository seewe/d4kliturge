import { useNavigate } from "react-router";
import { Chants } from "../../models/Chants";
import { Badge } from "antd";
import { IoMdHeart } from "react-icons/io";

export default function TocContentListChant({ chantNumber }) {
  const navigate = useNavigate();

  // Get chant by number (format: ch_001, ch_002, etc.)
  const chantId = `ch_${String(chantNumber).padStart(3, "0")}`;
  const chant = Chants[chantId];
  const isFavorite = chant?.favorite || false;

  return (
    <>
      <div
        className="col-2 text-center border border-0 rounded rounded-2 shadow-sm m-1 position-relative"
        style={{ background: "rgba(247, 199, 159, 0.322)" }}
      >
        {isFavorite && (
          <Badge
            pill="true"
            className="position-absolute top-0 end-0 p-0"
            style={{ fontSize: "0.6rem", backgroundColor: "transparent" }}
          >
            <IoMdHeart
              size={20}
              style={{
                color: "#ff8818ff",
                marginTop: "-10px",
                marginRight: "-6px",
              }}
            />
          </Badge>
        )}
        <a
          type="button"
          className="text-body text-decoration-none fw-bold tbm-item-link"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            navigate(`/chant/${chantNumber}`);
          }}
        >
          <div className="tbm-item p-1 tbm-item-number border border-0">
            {chantNumber}
          </div>
        </a>
      </div>
    </>
  );
}
