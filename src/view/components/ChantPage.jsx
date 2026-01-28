import { Chants } from "../../models/Chants";
import ChantContent from "./ChantContent";
import getChantDetails from "./getChantDetails";
import ChantTitle from "./ChantTitle";
import NavigationFooter from "./NavigationFooter";

export default function ChantPage({ id }) {
  const ch_details = getChantDetails(id, Chants);
  return (
    <>
      <ChantTitle chant={ch_details} />
      <ChantContent
        contenu={<ch_details.contenu />}
        categorie={ch_details.categorie}
      />
      <NavigationFooter id={id} />
    </>
  );
}
