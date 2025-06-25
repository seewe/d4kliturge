import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";
import NavigationButton from "./NavigationButton";
import { useEffect, useState } from "react";

export default function NavigationFooter({ id }) {
  const next = Math.min(Number(id) + 1, 208);
  const prev = Math.max(Number(id) - 1, 1);

  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const checkAtBottom = () => {
      const scrollable =
        document.documentElement.scrollHeight > window.innerHeight;
      const reachedBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight*0.5;

      if (!scrollable || reachedBottom) {
        setAtBottom(true);
      } else {
        setAtBottom(false);
      }
    };

    checkAtBottom(); // Initial check
    window.addEventListener("scroll", checkAtBottom);
    window.addEventListener("resize", checkAtBottom); // In case window resizes

    return () => {
      window.removeEventListener("scroll", checkAtBottom);
      window.removeEventListener("resize", checkAtBottom);
    };
  }, []);

  return (
    <>
      <div
        id="nav-footer"
        className={` fixed-bottom pt-3 pb-5 px-2 mb-4 border border-transparent border-0 my-component ${
          atBottom ? "at-bottom" : ""
        }`}
      >
        <div className="d-flex flex-row">
          <NavigationButton
            label={`ch ${String(prev).padStart(3, "0")}`}
            icon={<CaretLeftFill />}
            link={`/chant/${prev}`}
            side="left"
          />
          <NavigationButton
            label={`ch ${String(next).padStart(3, "0")}`}
            icon={<CaretRightFill />}
            link={`/chant/${next}`}
            side="right"
            className="btn flex-fill bd-highlight shadow ch-nav-btn fw-bold"
          />
        </div>
      </div>
    </>
  );
}
