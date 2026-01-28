import Accordion from "react-bootstrap/Accordion";
import FavoriteElmt from "./FavoriteElmt";
import { MdMusicOff } from "react-icons/md";

export default function FavoriteList({ listChants }) {
  // Filter to only show categories that have favorite chants
  const filteredChants = Object.entries(listChants).reduce(
    (acc, [categorie, chants]) => {
      const favoriteChants = Object.entries(chants).reduce(
        (favAcc, [key, chant]) => {
          if (chant.favorite === true) {
            favAcc[key] = chant;
          }
          return favAcc;
        },
        {},
      );

      if (Object.keys(favoriteChants).length > 0) {
        acc[categorie] = favoriteChants;
      }
      return acc;
    },
    {},
  );

  if (Object.keys(filteredChants).length === 0) {
    return (
      <div className="text-center text-muted py-4 mx-4">
        <MdMusicOff size={100} className="mb-3" />
        <p>Aucun chant favori pour le moment.</p>
        <p>Ajoutez vos chants préférés pour les retrouver facilement !</p>
      </div>
    );
  }

  return (
    <div className="mx-3 my-5 rounded-4 shadow">
      <Accordion
        defaultActiveKey="salutation"
        size="sm"
        className="accordion accordion-flush "
      >
        {Object.entries(filteredChants).map(([categorie, chants]) => (
          <FavoriteElmt
            key={categorie}
            eventKey={categorie}
            accHeader={categorie}
            accBody={chants}
          />
        ))}
      </Accordion>
    </div>
  );
}
