import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShortenLink from './components/ShortenLink';
import LinkResult from './components/LinkResult';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenLink />} />
        <Route path="/result" element={<LinkResult />} />
      </Routes>
    </Router>
  );
}
export default App;
