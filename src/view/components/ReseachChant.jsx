import { useState } from "react";
import { fuzzyHighlight } from "../../js/utilsFunctions";
import { Form, InputGroup } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useNavigate } from "react-router";
import { extractNumber } from "../../js/utilsFunctions";

export default function ResearchChant({ items }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const matched = Object.entries(items)
    .map(([key, value]) => {
      const highlightedKey = fuzzyHighlight(key, query);
      const highlightedValue = fuzzyHighlight(value, query);
      if (highlightedKey || highlightedValue) {
        return {
          key,
          value,
          displayKey: highlightedKey || key,
          displayValue: highlightedValue || value,
        };
      }
      return null;
    })
    .filter(Boolean);

  return (
    <div
      style={{
        position: "relative",
        justifyContent: "center",
        paddingLeft: "10%",
        paddingRight: "10%",
      }}
      className="ResultList"
    >
      <InputGroup className="mt-4 mb-0 shadow border-0 w-100 rounded rounded-3 bg-transparent text-center">
        <InputGroup.Text
          id="inputGroup-sizing-sm"
          className="searchIcon fw-bold border-0  rounded-start"
        >
          {<Search />}
        </InputGroup.Text>
        <Form.Control
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="Cherchez un chant . . ."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="researchInput border-0 rounded-end text-center fw-bold"
        />
      </InputGroup>

      {query.trim() !== "" && (
        <ul
          className="reseachResultList w-70"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            maxHeight: "600px",
            overflowY: "auto",
            background: "white",
            border: "1px solid #ccc",
            borderRadius: "0.25rem",
            marginTop: 0,
            listStyle: "none",
            zIndex: 1000,
            marginLeft: "10%",
            marginRight: "10%",
            paddingLeft: "0%",
          }}
        >
          {matched.length > 0 ? (
            matched.map(({ key, displayValue }) => (
              <li
                key={key}
                className="reseachResultItem"
                style={{
                  padding: "4px 5px",
                  borderBottom: "1px solid #eee",
                  fontSize: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  navigate(`/chant/${extractNumber(key)}`);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }} // or custom callback
              >
                <span
                  dangerouslySetInnerHTML={{
                    __html: `<strong>${displayValue}</strong>`,
                  }}
                />
              </li>
            ))
          ) : (
            <li style={{ padding: "15px 12px", color: "#999" }}>
              Aucun résultat trouvé.
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

// Usage:
// <ResearchComponent items={items} />

// Usage example:
// <ResearchComponent items={['Apple', 'Banana', 'Orange']} />
