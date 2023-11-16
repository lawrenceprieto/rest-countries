import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/rest-countries" element={<HomePage />} />
          <Route path="/country/:countryName" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
