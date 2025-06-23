import { useParams } from "react-router";
import ChantPage from "../view/components/ChantPage";

export default function ChantMainPage() {
  const { ch } = useParams();
  return (
    <>
      <ChantPage id={ch} />
    </>
  );
}
