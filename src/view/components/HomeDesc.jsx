import { TbMailHeart } from "react-icons/tb";
import { useNavigate } from "react-router";

export default function HomeDesc() {
  const navigate = useNavigate();
  return (
    <p className="card-text mt-3 mb-4 home-desc-text">
      Ce recueil de chants liturgiques est mis sous format numérique pour
      faciliter l'accès à la parole de Dieu. Ce projet bénévole marque notre
      attachement à la parole de Dieu et à l'évangélisation à travers les chants
      religieux. Nous sommes heureux d'apporter notre contribution à la grande
      mission d'évangélisation. Nous restons ouverts à tous vos commentaires ou
      pour tout nouveau chant que vous souhaiterez voir ajouté dans cette belle
      initiative. Aidez nous à améliorer ce projet et n'hésitez pas à nous
      écrire{" "}
      <a
        href="mailto:eebouele@gmail.com"
        className="emaill text-decoration-none fw-bold"
      >
        <TbMailHeart size={40} />
      </a>{" "}
      .
    </p>
  );
}
