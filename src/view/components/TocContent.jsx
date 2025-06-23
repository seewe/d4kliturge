import TocContentCategory from "./TocContentCategory";

export default function TocContent({ chantCategoryList }) {
  return (
    <div id="tocPageId" style={{ margin: "20px 0 70px" }}>
      {Object.entries(chantCategoryList).map(([catName, catNumber]) => (
        <TocContentCategory
          key={catName}
          chantCategory={catName}
          chantNumber={catNumber}
        />
      ))}
    </div>
  );
}
