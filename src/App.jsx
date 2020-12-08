import React, {useState} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {GifGrid} from './components/GifGrid';
import {light, dark} from './themes/theme';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textColor};
  width: 100%;
`;

const App = () => {
  const [theme, setTheme] = useState(dark);
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <button
          type="button"
          onClick={() => {
            setTheme(theme === dark ? light : dark);
          }}
        >
          Toggle Mode
        </button>
        <GifGrid width={500} onGifClick={() => ({})} />
      </Container>
    </ThemeProvider>
  );
};

export default App;
