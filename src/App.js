import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/fonts/font-awesome.min.css";
import "./assets/css/base.css";
import Home from "./Components/Home";
import Playlists from "./Components/Playlists";
import Events from "./Components/Events";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import { Routes, Route } from "react-router-dom";
import Quote from "./Components/Quote";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Events />} />
        <Route path="/playlists" element={<Playlists />} />
        <Route path="/request-a-quote" element={<Quote />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
