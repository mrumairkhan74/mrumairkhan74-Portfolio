import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import Navbar from "./component/pages/Navbar";
import { useState, useEffect } from "react";
import Loading from "./component/background/Loading";
import Footer from "./component/pages/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
