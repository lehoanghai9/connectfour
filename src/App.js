import TheGame from "./TheGame";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from "./Main";
import { Rules } from "./Rules";

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/game" element={<TheGame/>} />
        <Route path="/rules" element={< Rules/>} />

      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
