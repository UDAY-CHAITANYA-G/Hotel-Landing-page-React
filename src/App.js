import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Single from './pages/Single';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:id" element={<Single />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
