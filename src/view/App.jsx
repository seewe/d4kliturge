import { BrowserRouter, Route, Routes } from "react-router";
import HomeMainPage from "../pages/HomeMainPage";
import TocMainPage from "../pages/TocMainPage";
import PrefaceMainPage from "../pages/PrefaceMainPage";
import ChantMainPage from "../pages/ChantMainPage";
import AnneeLiturgiqueMainPage from "../pages/AnneeLiturgiqueMainPage";
import ConfidentialiteMainPage from "../pages/ConfidentialiteMainPage";
import NavBarOffCanvas from "./components/NavBarOffCanvas";
import Footer from "./components/Footer";
import PageNotFound from "../pages/PageNotFound";
import FaireUnDonMainPage from "../pages/FaireUnDonMainPage";
import { AppProvider } from "../context/AppContext";

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <NavBarOffCanvas />
        <Routes>
          <Route path="/" element={<HomeMainPage />} />
          <Route path="/preface" element={<PrefaceMainPage />} />
          <Route
            path="/anneeliturgique"
            element={<AnneeLiturgiqueMainPage />}
          />
          <Route
            path="/confidentialite"
            element={<ConfidentialiteMainPage />}
          />
          <Route path="/tabledematiere" element={<TocMainPage />} />
          <Route path="/chant/:ch" element={<ChantMainPage />} />
          <Route path="/faireundon" element={<FaireUnDonMainPage />} />
          <Route path="*" element={<PageNotFound id={0} />} />
        </Routes>
        <Footer />
      </AppProvider>
    </BrowserRouter>
  );
}
