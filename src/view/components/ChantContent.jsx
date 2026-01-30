export default function ChantContent({ contenu, categorie }) {
  return (
    <>
      <div className="card text-left mx-3 border border-0 chant-body-card">
        <div className="card-body text-center chant-body-card-content">
          <div className="card-text text-start ms-2">{contenu}</div>
        </div>
        <div className="card-footer text-dark text-center fst-italic fw-bold">
          {categorie}
        </div>
      </div>
    </>
  );
}
