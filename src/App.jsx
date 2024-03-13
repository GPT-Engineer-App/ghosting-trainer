import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Configuration from "./pages/Configuration.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </Router>
  );
}

export default App;
