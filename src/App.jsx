import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './index.css';
function App() {
  return (
    <BrowserRouter basename="/Shri_shail_mal">
      <div className="p-6">
        
     
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
        
      
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
