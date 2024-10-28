import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InputComponent from './input';
import WS from '../websocket/ws';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Electron app
              <InputComponent />
              <WS />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
