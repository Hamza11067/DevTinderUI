import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <BrowserRouter basename="/"> 
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route index element={<div>Home Page</div>} />
            <Route path="about" element={<div>About Page</div>} />
            <Route path="contact" element={<div>Contact Page</div>} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
