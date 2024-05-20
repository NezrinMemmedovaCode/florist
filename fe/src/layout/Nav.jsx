import { Link } from "react-router-dom"
import "./Nav.scss"
import { useContext, useState } from "react"
import { MainContext } from "../context/MainProvider"

function Nav() {
    const [drop, setdrop] = useState(false)
    
    const {basket}=useContext(MainContext)

    function show() {
        setdrop(!drop)

        
    }
    



  return (
    <div className="nav">
        <div className="basliq">
            <h1>Florist</h1>
            <i className="fa-solid fa-star"></i>
        </div>

        <div className="links">

        <Link to={"/"}>Home</Link>
        <Link to={"/Admin"}>Admin</Link>
        <Link to={"/Add"}>Add</Link>
        <Link to={"/Basket"}><i className="fa-solid fa-bag-shopping"></i> {basket.length}</Link>
        <Link to={"/WishList"}><i className="fa-regular fa-heart"></i></Link>
        
        </div>




        <button onClick={show}><i className="fa-solid fa-bars"></i></button>
        {drop && <>
            <Link to={"/"}>Home</Link>
        <Link to={"/Admin"}>Admin</Link>
        <Link to={"/Add"}>Add</Link>
        <Link to={"/Basket"}><i className="fa-solid fa-bag-shopping"></i></Link>
        <Link to={"/WishList"}><i className="fa-regular fa-heart"></i></Link>
        
        
        </>}
        
    </div>







  )
}

export default Nav