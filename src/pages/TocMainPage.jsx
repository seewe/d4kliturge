import chantTocData from "../models/chantTocData";
import TocPage from "../view/components/TocPage";

export default function TocMainPage() {
  return (
    <>
      <TocPage chantTocData={chantTocData} />
    </>
  );
}
