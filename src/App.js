import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';
import Weather from './pages/Weather';

function App() {
  return (
    <BrowserRouter>
      
   <Routes>
   <Route path='/' element={<Weather/>}/>

   </Routes>      
      </BrowserRouter>
  );
}

export default App;
