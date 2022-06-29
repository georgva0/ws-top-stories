//import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopStoriesPage from "./pages/TopStoriesPage";
import MostReadPage from "./pages/MostReadPage";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navbar";
import ScrollButton from "./components/ScrollButton";
import { Content } from "./components/Styles";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path="/" element={<TopStoriesPage />} />
        <Route path="/top-stories" element={<TopStoriesPage />} />
        <Route path="/most-read" element={<MostReadPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Content />
      <ScrollButton />
    </Router>
  );
}

export default App;
