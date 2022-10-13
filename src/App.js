import './App.css';
import Header from './components/Header';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material/styles'
import { Routes, Route, Outlet, Link } from "react-router-dom"

//  for testing
import Counter from './features/counter/Counter'

import Home from './components/Home';
import Patients from './components/Patients';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header/>
        <Counter/>
        <Routes>
          <Route index element={ <Home/> }/>
          <Route path='patients' element={<Patients/>}/>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
