import Home from "./pages/Home";
import Server from "./pages/Server";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./tools/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="server" element={<Server />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
