import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.scss';
import { initNavigation } from '@noriginmedia/react-spatial-navigation';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
// import { ThemeProvider } from "@mui/material/styles";
import FocusableButtonGrid from '../Containers/FocusableButton/buttonGrid';
import MySpotlightApp from '../Containers/Input/spotable';

initNavigation();

function App() {
  return (
    <div className="app">
      {/* <ThemeProvider theme={phorusTheme}> */}
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
                  <Link to="/">back</Link>
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
      {/* </ThemeProvider> */}
    </div>
  );
}

export default ThemeDecorator(App);
// export default App;
