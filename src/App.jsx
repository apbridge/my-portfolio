import { useState } from 'react';
import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import GDPage from './pages/GraphicDesignPage';
import WDPage from './pages/WebsiteDesignPage';
import UXPage from './pages/UXDesignPage';
import TDPage from './pages/TDPage';
import IllPage from './pages/IllustrationPage';
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import CDPage from "./pages/GDPages/CharacterPage";
import CaDPage from "./pages/GDPages/CalendarPage";
import TypePage from "./pages/GDPages/TypePage";
import MarPage from "./pages/GDPages/MarketingPage";
import PPage from "./pages/GDPages/PostersPage";
import BPage from "./pages/GDPages/BingoPage";
import LWPage from "./pages/GDPages/LineworkPage";
import InfoPage from "./pages/GDPages/InfographicPage";
import HSPage from "./pages/GDPages/HighSchoolPage";
import PCPage from "./pages/GDPages/PhotoColllagePage";
import CalcPage from "./pages/WebPages/CalcPage";
import ColorPage from "./pages/WebPages/ColorPage";
import BCPage from "./pages/WebPages/ConnectPage";
import DCPage from "./pages/WebPages/DataConnPage";
import DMSPage from "./pages/WebPages/DataManSysPage";
import FormsPage from "./pages/WebPages/FormsPage";
import HoverPage from "./pages/WebPages/HoverPage";
import IDEPage from "./pages/WebPages/IDEPage";
import MGPage from "./pages/WebPages/MiniGamesPage";
import PortPage from "./pages/WebPages/PortfolioPage";
import PAPage from "./pages/WebPages/ProfileAppPage";
import RecPage from "./pages/WebPages/RecreationPage";
import RicPage from "./pages/WebPages/RichellePage";
import SPage from "./pages/WebPages/SlidingPage";
import ZoomPage from "./pages/WebPages/ZoomPage";
import Land from "./pages/IllPages/Landscape";
import Purple from "./pages/IllPages/PurpleCry";
import Space from "./pages/IllPages/SpaceBrain";
import Still from "./pages/IllPages/StillLife";
import Plants from "./pages/IllPages/VariousPlants";
import Yoshi from "./pages/IllPages/Yoshi";


function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <>
        <div className="appWrapper">
          <NavBar />
          <main className="mainContent">
            <Routes>
              {/* Home Page */}
              <Route path="/" element={<HomePage />} />

              {/* Graphic Design Page */}
              <Route path="/graphic-design" element={<GDPage />} />

              {/* Website Design Page */}
              <Route path="/website-design" element={<WDPage />} />

              {/* UX Design Page */}
              <Route path="/ux-design" element={<UXPage />} />

              {/* 3D Modeling Page */}
              <Route path="/3d-modeling" element={<TDPage />} />

              {/* Illustration Page */}
              <Route path="/illustration" element={<IllPage />} />

              {/* 404 Not Found Page */}
              <Route path="*" element={<NotFound />} />

              {/* Characters Design Page */}
              <Route path="/character-design" element={<CDPage />} />

              {/* Calendars Design Page */}
              <Route path="/calendar-design" element={<CaDPage />} />

              {/* Logo Design Page */}
              <Route path="/type-design" element={<TypePage />} />

              {/* Marketing Design Page */}
              <Route path="/marketing" element={<MarPage />} />

              {/* Poster Design Page */}
              <Route path="/posters" element={<PPage />} />

              {/* Sxster Bingo Page */}
              <Route path="/bingo" element={<BPage />} />

               {/* Linework Page */}
               <Route path="/linework" element={<LWPage />} />

               {/* Infographic Page */}
               <Route path="/infographic" element={<InfoPage />} />

                {/* High School Page */}
                <Route path="/hs" element={<HSPage />} />

                {/* Photo Collage Page */}
                <Route path="/collage" element={<PCPage />} />

                {/* Calculator Page */}
                <Route path="/calculator" element={<CalcPage />} />

                {/* Color Converter Page */}
                <Route path="/color-converter" element={<ColorPage />} />

                {/* Boiler Connect Page */}
                <Route path="/student-connect" element={<BCPage />} />

                {/* Data Connections Page */}
                <Route path="/data-connections" element={<DCPage />} />

                {/* DMS Page */}
                <Route path="/dms" element={<DMSPage />} />

                {/* Forms Page */}
                <Route path="/forms" element={<FormsPage />} />

                {/* Hover Images Page */}
                <Route path="/hover-images" element={<HoverPage />} />

                {/* IDE Page */}
                <Route path="/ide" element={<IDEPage />} />

                {/* Mini Games Page */}
                <Route path="/mini-games" element={<MGPage />} />

                {/* My Portfolio Page */}
                <Route path="/portfolio" element={<PortPage />} />

                {/* Profile App Page */}
                <Route path="/profile-app" element={<PAPage />} />

                {/* Website Recreation Page */}
                <Route path="/website-recreation" element={<RecPage />} />

                {/* Richelle Page */}
                <Route path="/richelle-in-a-handbasket" element={<RicPage />} />

                {/* Sliding Images Page */}
                <Route path="/sliding-images" element={<SPage />} />

                {/* Zoom Images Page */}
                <Route path="/zoom-images" element={<ZoomPage />} />

                {/* Landscape Drawing Page */}
                <Route path="/landscape" element={<Land />} />

                {/*Purple Cry Drawing Page */}
                <Route path="/purple-cry" element={<Purple />} />

                {/* Space Brain Drawing Page */}
                <Route path="/space-brain" element={<Space />} />

                {/* Still Life Drawing Page */}
                <Route path="/still-life" element={<Still />} />

                {/* Various Plants Drawing Page */}
                <Route path="/various-plants" element={<Plants />} />

                {/* Yoshi Drawing Page */}
                <Route path="/yoshi" element={<Yoshi />} />
            </Routes>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </>
    </HashRouter>
  );
};

export default App;
