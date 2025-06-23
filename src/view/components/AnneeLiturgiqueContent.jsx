import AnneeLiturgiqueContentElmt from "./AnneeLiturgiqueContentElmt";

export default function AnneeLiturgiqueContent({ anneeLiturgiqueData }) {
  return (
    <>
      <div className="d-flex row justify-content-center mx-0 pt-5">
        {anneeLiturgiqueData.map((anli) => (
          <AnneeLiturgiqueContentElmt
            key={anli.elmtID}
            elmtID={anli.elmtID}
            periode={anli.periode}
            duree={anli.duree}
            justification={anli.justification}
            nombreDimanche={anli.nombreDimanche}
            nombreLiturgique={anli.nombreLiturgique}
            borderColor={anli.borderColor}
          />
        ))}
      </div>
    </>
  );
}
