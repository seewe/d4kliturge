import liturgeIco from "../../assets/liturgeico1.png";
function LiturgeLogo({ size }) {
  return (
    <>
      <img
        alt=""
        src={liturgeIco}
        width={size}
        height={size}
        className="d-inline-block align-top"
      />{" "}
    </>
  );
}

export default LiturgeLogo;
