export default function TocTitle({ titre }) {
  return (
    <div
      className="cover-div"
      style={{ borderRadius: "0 0 50px 50px", marginBottom: "10%" }}
    >
      <div className="toc-title-container">
        <h2 className="card-title text-center fw-bold py-2 mx-4 rounded rounded-pill toc-title-label">
          {titre}
        </h2>
      </div>
    </div>
  );
}
