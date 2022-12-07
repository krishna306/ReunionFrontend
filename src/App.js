import "./App.css";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./component/Navigation";
function App() {
  return <>
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path = "*" element ={<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  </>;
}

export default App;
