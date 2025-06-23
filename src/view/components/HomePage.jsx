import CoverHome from "./CoverHome";
import HomeToc from "./HomeToc";

export default function HomePage({ title, subtitle, label, link }) {
  return (
    <>
      <CoverHome title={title} subtitle={subtitle} label={label} link={link} />
      <HomeToc />
    </>
  );
}
