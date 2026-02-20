import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./app/page";
import Page from "./app/properties/page";


export function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Page />} />
        {/* <Route path="/property/:id" element={<PropertyDetailsPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}