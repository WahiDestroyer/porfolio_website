import { Routes, Route, BrowserRouter } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./components/layout/Index";
import ErrorPage from "./pages/ErrorPage";
import Process from "./pages/Process"



function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/process" element={<Process/>}/>
        </Route>
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 