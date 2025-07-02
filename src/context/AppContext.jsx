import { createContext, useState } from "react";

const appContext = createContext();

function AppProvider({ children }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  const [theme, setTheme] = useState(" ");
  const [showOffCan, setShowOffCan] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <appContext.Provider
      value={{
        title,
        setTitle,
        content,
        setContent,
        show,
        setShow,
        theme,
        setTheme,
        showOffCan,
        setShowOffCan,
        query,
        setQuery,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export { AppProvider, appContext };
