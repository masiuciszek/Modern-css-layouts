import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../utils/theme';
import GlobalStyles from '../styled/GlobalStyles';
import NavBar from './navbar/Navbar';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <main id="MainApp">
        {children}
      </main>
    </ThemeProvider>
  </>
);
export default Layout;
