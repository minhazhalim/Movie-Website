import {useState,useEffect} from 'react';
import {searchMovies,getPopularMovies} from '../services/api.js';
import MovieCard from '../components/movieCard.jsx';
import '../css/home.css';
function Home(){
     const [searchQuery,setSearchQuery] = useState("");
     const [movies,setMovies] = useState([]);
     const [error,setError] = useState(null);
     const [loading,setLoading] = useState(true);
     useEffect(() => {
          const loadPopularMovies = async () => {
               try {
                    const popularMovies = await getPopularMovies();
                    setMovies(popularMovies);
               }catch(error){
                    console.log(error);
                    setError('Failed to Load Movies.....');
               }finally {
                    setLoading(false);
               }
          };
          loadPopularMovies();
     },[]);
     const handleSearch = async (event) => {
          event.preventDefault();
          if(!searchQuery.trim()) return;
          if(loading) return;
          setLoading(true);
          try {
               const searchResults = await searchMovies(searchQuery);
               setMovies(searchResults);
               setError(null);
          }catch(error){
               console.log(error);
               setError('Failed to Search Movies.....');
          }finally {
               setLoading(false);
          }
     };
     return (
          <div className="home">
               <form onSubmit={handleSearch} className="search-form">
                    <input
                         type="text"
                         placeholder="Search for Movies..."
                         className="search-input"
                         value={searchQuery}
                         onChange={(event) => setSearchQuery(event.target.value)}
                    />
                    <button type="submit" className="search-button">search</button>
               </form>
               {error && <div className="error-message">{error}</div>}
               {loading ? (
                    <div className="loading">Loading...</div>
               ) : (
                    <div className="movies-grid">
                         {movies.map((movie) => (
                              <MovieCard movie={movie} key={movie.id}/>
                         ))}
                    </div>
               )}
          </div>
     );
}
export default Home;