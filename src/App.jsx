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
