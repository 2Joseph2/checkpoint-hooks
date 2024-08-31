import Header from "./Header";

const Home = () => {
    return ( 
        <div className="home">
            <Header></Header>
            <section className="cont">
                <div className="img"><img src="https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg" alt="dune" /></div>
                <div className="desc">
                    <p>2021</p><br />
                    <h2>Dune</h2><br />
                    <p>A noble family becomes embroiled in a war for control over the galaxy's most valuable asset <br /> while its heir becomes troubled by visions of a dark future.</p><br />
                    <p>2021 ‧ Sci-fi/Adventure ‧ 2h 35m</p><br />
                    <button>Watch trailer</button>
                </div>
            </section>
        </div>
     );
}
 
export default Home;