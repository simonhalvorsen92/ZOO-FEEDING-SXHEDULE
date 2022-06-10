import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/pages/Layout/Layout";
import { AnimalID } from "./components/pages/AnimalID";
import { Animals } from "./components/pages/Animals";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Home />}></Route>
          <Route path="/animals" element={<Animals />}></Route>
          <Route path="/animal:id" element={<AnimalID />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
