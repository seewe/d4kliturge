import { BellSlashFill } from "react-bootstrap-icons";

export default function getChantDetails(num, chants) {
  const ch = `ch_${String(num).padStart(3, "0")}`;
  const chant = chants[ch];
  if (num == 0) {
    return {
      titre: "PAGE NOT FOUND",
      contenu: () => {
        return (
          <>
            <p className="mt-5"></p>
            <i
              className="bi bi-4-circle-fill text-muted"
              style={{ fontSize: "90px" }}
            ></i>{" "}
            <i
              className="bi bi-0-square text-danger"
              style={{ fontSize: "90px" }}
            ></i>{" "}
            <i
              className="bi bi-4-circle-fill text-muted"
              style={{ fontSize: "90px" }}
            ></i>
            <p className="fw-bold text-muted mt-5" style={{ fontSize: "20px" }}>
              Error 404. This page doesn't exist !
            </p>
          </>
        );
      },
      categorie: "Error",
      found: false,
    };
  }
  if (!chant) {
    return {
      titre: "Pas de titre",
      contenu: () => {
        return (
          <>
            <BellSlashFill
              className="fw-bold fs-1 mt-5 text-muted opacity-2"
              size={200}
            />
            <p></p>
            <p className="fw-bold text-danger">
              Le contenu de chant est inexistant
            </p>
          </>
        );
      },
      categorie: "chant non existant",
      found: false,
    };
  }
  return {
    titre: chant.titre,
    contenu: chant.contenu,
    categorie: chant.categorie,
    found: true,
  };
}
