import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { AnimalID } from "./components/AnimalID/AnimalID";
import { Animals } from "./components/pages/Animals";

import { Layout } from "./components/pages/Layout/Layout";
import { Home } from "./Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />}></Route>
          <Route path="/animals" element={<Animals />}></Route>
          <Route path="/animal/:id" element={<AnimalID />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
