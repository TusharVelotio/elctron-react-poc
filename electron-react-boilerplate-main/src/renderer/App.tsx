import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import WS from '../Containers/websocket/ws';
import FocusableButtonGrid from '../Containers/FocusableButton/buttonGrid';

initNavigation();

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/ws">ws</Link>
              <FocusableButtonGrid focusKey="BUTTON_GRID" />
            </div>
          }
        />
        <Route
          path="/ws"
          element={
            <div>
              <WS />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
