import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./views/Home/Home"
import Landing from './views/Landing/Landing';
import CountryDetail from './views/CountryDetail/CountryDetail';
import NotFound from './views/NotFound/NotFound';
import CreateActivity from './views/CreateActivity/CreateActivity';


function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/' element={<Landing/>}/>
      <Route path="/country/:id" element={<CountryDetail/>}/>
      <Route path='*' element={<NotFound/>}/>
      <Route path='/create-activity' element={<CreateActivity/>}/>
    </Routes>
  );
}

export default App;
