import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./Routes/Layout";
import { LandingPage } from "./Routes/LandingPage";
import { About } from "./Routes/AboutPage";
import { Projects } from "./Routes/Projects/Projects";
import { Contact } from "./Routes/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path="About" element={<About />} />

          <Route path="Projects" element={<Projects />} />

          <Route path="Contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<h1>this page doesnt exist</h1>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
