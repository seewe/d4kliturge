import { FaCopyright } from "react-icons/fa6";

export default function Copyright({ label, link }) {
  return (
    <div
      className="text-center rounded-3 bg-transparent mt-5 mx-3"
      id="copyright"
    >
      <a
        type="button"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-transparent fw-bold fs-6 py-2 px-0  mx-0"
      >
        <FaCopyright size={25} /> {label}
      </a>
    </div>
  );
}
