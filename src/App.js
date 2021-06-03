import Navbar from "./components/Navbar";
import Contactbar from "./components/Contactbar";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ServicesPage from "./pages/ServicesPage";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Contactbar />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/services">
            <ServicesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
