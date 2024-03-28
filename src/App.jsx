import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Weather from "./pages/Weather";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/weather/:city" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
