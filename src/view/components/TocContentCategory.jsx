import TocContentListChant from "./TocContentListChant";

export default function TocContentCategory({ chantCategory, chantNumber }) {
  return (
    <>
      <h4 className="text-center my-5 mx-4 fw-bold p-2 border border-0 shadow bg-light toc-content-title">
        {chantCategory}
      </h4>
      <div className="row g-1 justify-content-center">
        {chantNumber.map((chNumber) => (
          <TocContentListChant key={chNumber} chantNumber={chNumber} />
        ))}
      </div>
    </>
  );
}
