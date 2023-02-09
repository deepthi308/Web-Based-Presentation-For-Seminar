import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout"
import Home from "./pages/Home";
import Thanks from "./pages/Thanks";
import Topic1 from "./pages/Topic1";
import Topic2 from "./pages/Topic2";
import "./app.css"


function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>

      <Route path="/" element={<Layout />}>
      <Route index element={<Home />}/>
      <Route path="/topic1" element={<Topic1 />}/>
      <Route path="/topic2" element={<Topic2 />}/>
      <Route path="/thanks" element={<Thanks />}/>
      </Route>

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
