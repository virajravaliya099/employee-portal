import './App.css';
import Routes from './routes/Index';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  const defaultTheme = createTheme();

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
