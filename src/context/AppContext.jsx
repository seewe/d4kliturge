import { createContext, useState, useEffect } from "react";
import { Chants } from "../models/Chants";

const appContext = createContext();

function AppProvider({ children }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(" ");
  const [content, setContent] = useState(" ");
  const [theme, setTheme] = useState(" ");
  const [showOffCan, setShowOffCan] = useState(false);
  const [query, setQuery] = useState("");
  const [showFavoritesModal, setShowFavoritesModal] = useState(false);

  // Load favoriteList from localStorage on mount
  const [favoriteList, setFavoriteList] = useState(() => {
    const stored = localStorage.getItem("favoriteList");
    return stored ? JSON.parse(stored) : [];
  });

  // Sync Chants object with stored favorites on mount
  useEffect(() => {
    favoriteList.forEach((id) => {
      if (Chants[id]) {
        Chants[id].favorite = true;
      }
    });
  }, []);

  // Save favoriteList to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
  }, [favoriteList]);

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
        showFavoritesModal,
        setShowFavoritesModal,
        favoriteList,
        setFavoriteList,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export { AppProvider, appContext };
