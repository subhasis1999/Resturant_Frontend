import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import './App.css'



import Home from "./pages/Home";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
    <Toaster />
  </BrowserRouter>
);

export default App;
