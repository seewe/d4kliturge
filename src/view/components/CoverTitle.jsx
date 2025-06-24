import liturgeIco from "../../assets/liturgeico1.png";
export default function CoverTitle({ title, subtitle }) {
  return (
    <div className="row g-1" style={{ margin: "0%" }}>
      <div className="col-8 p-0">
        <h2 className="card-title text-center fw-bold pt-3">{title}</h2>
        <h4 className="card-title text-center fw-bold pt-2">{subtitle}</h4>
      </div>
      <div className="col-4 p-0">
        <img
          alt="liturge"
          src={liturgeIco}
          width="100"
          height="100"
          className="rounded rounded-3"
        />{" "}
      </div>
    </div>
  );
}
