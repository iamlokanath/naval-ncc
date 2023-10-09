import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus";
import MainPage from "./components/MainPage";
import Activities from "./components/Activities";
import Acheiviments from "./components/Acheiviments";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage/>}/>

          <Route path = "/about" element={<Aboutus/>}/>
          <Route path = "/activities" element={<Activities/>}/>
          <Route path = "/acheiviments" element={<Acheiviments/>}/>

        </Routes>
        
    </BrowserRouter>
    </div>
  );
}

export default App;
