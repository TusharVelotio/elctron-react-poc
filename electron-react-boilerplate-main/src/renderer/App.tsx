import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import WS from '../Containers/websocket/ws';
import FocusableButtonGrid from '../Containers/FocusableButton/buttonGrid';
import MySpotlightApp from '../Containers/Input/spotable';

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
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
              </div>{' '}
              <div>
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
              </div>{' '}
              <div>
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
                <MySpotlightApp />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
