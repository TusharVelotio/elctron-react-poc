import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import InputComponent from './input';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>Electron app
          <InputComponent/>
        </div>} />
      </Routes>
    </Router>
  );
}
