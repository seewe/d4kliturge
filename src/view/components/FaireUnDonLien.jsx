import FaireUnDonDetails from "./FaireUnDonDetails";
import FaireUnDonInterac from "./FaireUnDonInterac";
import FaireUnDonPaypal from "./FaireUnDonPaypal";
import FaireUnDonWise from "./FaireUnDonWise";

export default function FaireUnDonLien() {
  return (
    <div className="mx-0 my-3 pt-3 pb-0 lien-don">
      <div className="text-center">
        <FaireUnDonPaypal />
        <FaireUnDonWise />
        <FaireUnDonInterac />
        <FaireUnDonDetails />
      </div>
    </div>
  );
}
