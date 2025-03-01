import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Service from "./components/Service";
import Contact from "./components/Contact";
import MoreDetails from "./components/MoreDetails";
import Sample from "./components/Sample";

const basename = import.meta.env.VITE_BASE_URL || "/";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/samples" element={<Sample />} />
        <Route path="/more-details" element={<MoreDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
