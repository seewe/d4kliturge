import { Image } from "react-bootstrap";
import { Paypal, Stripe } from "react-bootstrap-icons";

const modalDetail = {
  mtn: () => {
    return (
      <>
        <p className="fs-5 text-center">
          Vous pouvez faire un don par MTN mobile money au numéro suivant
        </p>
        <p className="fs-4">
          <strong>Nom : </strong> xxxxxxxxxx
        </p>
        <p className="fs-4">
          <strong>Numéro de compte : </strong> +237 777 77 77 77
        </p>
      </>
    );
  },
  mtnTitle: () => {
    return (
      <>
        <p className="fs-3 fw-bold text-center mb-0">
          <Image
            src="../../../src/assets/mtn.svg"
            fluid
            className="mx-2 p-2 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
          />{" "}
          MTN mobil money
        </p>
      </>
    );
  },
  orange: () => {
    return (
      <>
        <p className="fs-5 text-center">
          Vous pouvez faire un don par Orange mobile money au numéro suivant
        </p>
        <p className="fs-4">
          <strong>Nom du compte : </strong> xxxxxxxxxx
        </p>
        <p className="fs-4">
          <strong>Numéro : </strong> +237 999 99 99 99
        </p>
      </>
    );
  },
  orangeTitle: () => {
    return (
      <>
        <p className="fs-3 fw-bold text-center mb-0">
          <Image
            src="../../../src/assets/orangemoneyico.png"
            fluid
            className="mx-2 p-2 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
          />{" "}
          ORANGE mobile money
        </p>
      </>
    );
  },
  paypal: () => {
    return (
      <>
        <p className="fs-5 text-center">
          Vous pouvez faire un don par Paypal en cliquant le lien suivant :
        </p>
        <p className="text-center fs-3 fw-bold shadow contactButtonPaypal mx-5 py-2">
          <a
            href="https://www.paypal.com/donate/?hosted_button_id=YOUR_BUTTON_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            PayPal
          </a>
        </p>
      </>
    );
  },
  paypalTitle: () => {
    return (
      <>
        <p className="fs-3 fw-bold text-center mb-0">
          <Paypal
            size={60}
            className="mx-2 p-2 shadow rounded-4 text-primary border border-0 border-primary contactButtonPaypal"
          />{" "}
          Paypal
        </p>
      </>
    );
  },
  wise: () => {
    return (
      <>
        <p className="fs-5 text-center">
          Vous pouvez faire un don par Wise en cliquant le lien suivant :
        </p>
        <p className="text-center fs-3 fw-bold shadow contactButton mx-5 py-2">
          <a
            href="https://wise.com/me/VotreNomPublic"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none fst-normal"
          >
            Wise
          </a>
        </p>
      </>
    );
  },
  wiseTitle: () => {
    return (
      <>
        <p className="fs-3 fw-bold text-center mb-0">
          <Image
            src="../../../src/assets/wise.png"
            fluid
            className="mx-2 p-2 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonWise"
          />{" "}
          Wise
        </p>
      </>
    );
  },
  stripe: () => {
    return (
      <>
        <p className="fs-5 text-center">
          Vous pouvez faire un don par Stripe en cliquant le lien suivant :
        </p>
        <p className="text-center fs-3 fw-bold shadow contactButton mx-5 py-2">
          <a
            href="https://buy.stripe.com/test_YourStripeLinkID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            Stripe
          </a>
        </p>
      </>
    );
  },
  stripeTitle: () => {
    return (
      <>
        <p className="fs-3 fw-bold text-center mb-0">
          <Stripe
            size={60}
            className="mx-2 p-2 shadow rounded-4 contactButton contactButtonStripe"
          />{" "}
          Stripe
        </p>
      </>
    );
  },
  interac: () => {
    return (
      <>
        <p className="fs-5 text-center">
          Vous pouvez faire un don par virement Interac à l’adresse suivante :
        </p>
        <p className="fs-4">
          <strong>Email : </strong> don@gmail.com
        </p>
        <p className="fs-4">
          <strong>Question de sécurité : </strong> <em>Pourquoi ?</em>
        </p>
        <p className="fs-4">
          <strong>Réponse : </strong> <strong>don</strong>
        </p>
      </>
    );
  },
  interacTitle: () => {
    return (
      <>
        <p className="fs-3 fw-bold text-center mb-0">
          <Image
            src="../../../src/assets/InteracLogo.png"
            fluid
            className="mx-2 p-2 shadow rounded rounded-4 text-success border border-0 border-success contactButton contactButtonInter"
          />{" "}
          INTERAC
        </p>
      </>
    );
  },
};

export default modalDetail;
