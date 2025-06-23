export default function PrefaceContent({ prefaceText }) {
  return (
    <div
      id="pagePreface"
      className="container"
      style={{ textAlign: "justify" }}
    >
      <div className="card border border-0 mb-5">
        <div className="card-body">{prefaceText}</div>
      </div>
    </div>
  );
}
