import './css/application.css';
import {Routes,Route} from 'react-router-dom';
import Favorites from './pages/favorites.jsx';
import Home from './pages/home.jsx';
import NavBar from './components/navbar.jsx';
import {MovieProvider} from './contexts/movieContext.jsx';
function App() {
  return (
    <MovieProvider>
      <NavBar/>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/favorites" element={<Favorites/>}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}
export default App;