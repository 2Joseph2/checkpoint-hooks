import MovieCard from "./MovieCard"

const MovieList = ({movieList,likeHandler}) => {
    return ( 
        <div className="cards">
            {movieList.map((el)=>{
                return <MovieCard el={el} likeHandler={likeHandler}/>
            })}
        </div>
     );
}
 
export default MovieList;