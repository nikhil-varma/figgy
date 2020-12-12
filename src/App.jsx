import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';

import Search from './components/Search';
import Trending from './components/Trending';
import {light, dark} from './themes/theme';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  width: 100%;
`;

export default function App() {
  const [theme, setTheme] = useState(dark);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Router>
            <div>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  <Link to="/search">Search</Link>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => {
                  setTheme(theme === dark ? light : dark);
                }}
              >
                Toggle Mode
              </button>
              <Route path="/" component={Trending} />
              <Route path="/about" component={Search} />
            </div>
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}
