import FaireUnDonLien from "./FaireUnDonLien";

export default function FaireUnDonContent({ faireUnDonText }) {
  return (
    <>
      <div
        id="pageFaireDon"
        className="container px-3 my-5"
        style={{ textAlign: "justify" }}
      >
        <FaireUnDonLien />
        <hr />
        <div className="cover-div-don">
          <div className="cover-div-inner-don">
            <div className="card border border-0 my-2 mx-2 bg-transparent card-don">
              <div className="card-body bg-transparent">{faireUnDonText}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
