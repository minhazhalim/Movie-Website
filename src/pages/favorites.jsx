import '../css/favorites.css';
import {useMovieContext} from '../contexts/movieContext.jsx';
import MovieCard from '../components/movieCard.jsx';
function Favorites(){
     const {favorites} = useMovieContext();
     if(favorites){
          return (
               <div className='favorites'>
                    <h2>your favorites</h2>
                    <div className='movies-grid'>
                         {favorites.map((movie) => {
                              <MovieCard movie={movie} key={movie.id}/>
                         })}
                    </div>
               </div>
          );
     }
     return (
          <div className='favorites-empty'>
               <h2>no favorites movies yet</h2>
               <p>start adding movies to your favorites and will appear here!</p>
          </div>
     );
}
export default Favorites;