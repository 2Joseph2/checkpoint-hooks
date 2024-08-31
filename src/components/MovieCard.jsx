
const MovieCard = ({el:{title,image,rating,time,liked} , likeHandler } ) => {
    return ( 
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{rating}</p>
            <p> {time} </p>
            <button onClick={()=>{
                likeHandler(title)
            }} style={{backgroundColor: liked ? "red" : "white" }}>{"\u2764"}</button>
        </div>
     );
}
 


export default MovieCard;