import FavoriteList from "./FavoriteList";
import TocTitle from "./TocTitle";
import OtherPage from "./OtherPage";
import { ChantsMenu } from "../../models/Chants";

export default function FavoritePage() {
  return (
    <OtherPage
      titre={<TocTitle titre="CHANTS FAVORIS" />}
      contenu={<FavoriteList listChants={ChantsMenu} />}
      nextPage={""}
    />
  );
}
