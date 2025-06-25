import bgImg161 from "../../assets/161.jpg";
import bgImg172 from "../../assets/172.jpg";
import bgImg174 from "../../assets/174.jpg";
import bgImg187 from "../../assets/187.jpg";

export default function ChantTitle({ titre }) {
  function sample(arr) {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  const cover_img = sample([bgImg161, bgImg172, bgImg174, bgImg187]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${cover_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          padding: "0%",
          margin: "0%",
          borderRadius: "0 0 0 50px",
        }}
      >
        <div className="chant-title-container">
          <h5 className="card-title text-center fw-bold py-2 chant-card-title">
            {titre}
          </h5>
        </div>
      </div>
    </>
  );
}
