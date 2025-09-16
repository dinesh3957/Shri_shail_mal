import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import './index.css';
function App() {
  return (
    <Router>
      <div className="p-6">
        
     
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
        
      
        </Routes>
      </div>
    </Router>
  );
}

export default App;
