import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WebsocketComponent from '../websocket/ws';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsocketComponent />} />
      </Routes>
    </Router>
  );
}
