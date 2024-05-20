import { Helmet, HelmetProvider } from "react-helmet-async";
import "./Home.scss";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
function Home() {

    const [flowers, setflowers] = useState([])
    const [search, setsearch] = useState('')
    const {addbasket,addwish}=useContext(MainContext)

    useEffect(() => {
        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(data=>setflowers(data))
    
    }, [])
    function az(params) {
        flowers.sort((a,b) => (a[params] > b[params]) ? 1 : ((b[params] > a[params]) ? -1 : 0))

        
    }



    


  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <div className="home1">
        <div className="box">
        <div className="yazi">
          <span>Fresh Flower & Gift Shop</span>
          <h2>Making beautiful flowers a part of your life.</h2>
          <button>Shop Now</button>
        </div>
        </div>
      </div>
      <div className="home2">
        <div className="yazilar">
          <i className="fa-solid fa-truck"></i>
          <div className="yazi1">
            <h3>100% Freshness</h3>
            <p>Most people are unaware of the less common flower</p>
          </div>
          <i className="fa-solid fa-child-dress"></i>
          <div className="yazi2">
            <h3>Made by artist</h3>
            <p>Most people are unaware of the less common flower</p>
          </div>
          <i className="fa-solid fa-baby-carriage"></i>
          <div className="yazi3">
            <h3>Own courier</h3>
            <p>Most people are unaware of the less common flower</p>
          </div>
          <i className="fa-solid fa-phone-volume"></i>
          <div className="yazi4">
            <h3>100% Freshness</h3>
            <p>Most people are unaware of the less common flower</p>
          </div>
        </div>
      </div>

      <div className="home3">
        <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} />
        <button className="sort" onClick={()=>az("name")}><i className="fa-solid fa-magnifying-glass"></i></button>

       

        <h3>OUR FLOWER</h3>
        <h1>New Arrivals</h1>
        <div className="cards">

        {flowers
        .filter((x)=>x.name.toLowerCase().includes((search.toLocaleLowerCase())))

        .map((x)=><div className="card" key={x.id}>
            <Link to={`/Detail/${x._id}`}><img src={x.img} alt="" /></Link>
          
            <h2>{x.name}</h2>
            <p>${x.price}</p>
            <button onClick={()=>addbasket(x)}><i className="fa-solid fa-bag-shopping"></i></button>
            <button onClick={()=>addwish(x)}><i className="fa-regular fa-heart"></i></button>




        </div>)}
        </div>



      </div>
      <div className="home4">
        <div className="boxx">
            <div className="yaziii">
                <p>CUSTOM FLOWER</p>
                <h1>Let our flowers make your party more perfect.</h1>
                <div className="buttons">
                    <button className="pink">Order Now</button>
                    <button className="white"> Contact Us </button>
                </div>

            </div>

        </div>

      </div>

    </div>
  );
}

export default Home;
