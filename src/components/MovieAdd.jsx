const MovieAdd = ({addMovie}) => {
    return ( 
        <section>
            <div className="add">
                <p>Add Movie:</p>
                <input type="text" placeholder="title" id="title"/><br />
                <input type="text" placeholder="image link" id="image"/><br />
                <button onClick={()=>{addMovie()}}>Add</button>
            </div>
        </section>
     );
}
 
export default MovieAdd;