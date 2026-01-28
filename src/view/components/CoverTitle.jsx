import { FaCross } from "react-icons/fa";
import liturgeIco from "../../assets/liturgeico1.png";

export default function CoverTitle({ title, subtitle }) {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="crossGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(32, 32, 32, 1)" />
            <stop offset="70%" stopColor="rgba(250, 148, 65, 0.88)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="col-12 text-center">
        <img
          alt="liturge"
          src={liturgeIco}
          width="90"
          height="90"
          className="rounded rounded-3 shadow-lg coverIcon"
          style={{
            marginBottom: "-30px",
            padding: "8px",
          }}
        />{" "}
      </div>
      <div
        className="row g-1 shadow-lg mx-4"
        style={{
          paddingTop: "2%",
          paddingBottom: "2%",
          backgroundColor: "#f8f9fa31",
          borderRadius: "30px",
          border: "2px solid rgba(255, 255, 255, 0.87)",
        }}
      >
        <div className="col-12 coverMainTitle">
          <h1 className="card-title text-center fw-bold pt-5">{title}</h1>
          <h3 className="card-title text-center fw-bold pt-2">{subtitle}</h3>
          <p className="text-center mt-3">
            <FaCross
              size={100}
              style={{
                fill: "url(#crossGradient)",
              }}
            />
          </p>
        </div>
      </div>
    </>
  );
}
