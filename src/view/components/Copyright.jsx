export default function Copyright({ label, link }) {
  return (
    <div
      className="text-center rounded rounded-pill bg-transparent my-5 mx-3"
      id="copyright"
    >
      <a
        type="button"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-transparent fw-bold fs-6 py-2 px-0  mx-0"
      >
        <i
          className="bi bi-c-circle text-muted"
          style={{ fontSize: "20px" }}
        ></i>{" "}
        {label}
      </a>
    </div>
  );
}
