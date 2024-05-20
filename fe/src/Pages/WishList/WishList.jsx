import { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainContext } from '../../context/MainProvider';

function WishList() {
    const {wish,deletewish}=useContext(MainContext)
  return (
    <div>
        <HelmetProvider>
   
   <Helmet>
     <title>WishList</title>
   </Helmet>
   

</HelmetProvider>
<div className="home3">

<div className="cards">

{wish.map((x)=><div className="card" key={x.id}>
    <img src={x.img} alt="" />
    <h2>{x.name}</h2>
    <p>${x.price}</p>
    <button onClick={()=>deletewish(x)}><i className="fa-solid fa-trash"></i></button>
    




</div>)}
</div>
</div>



 

    </div>
  )
}

export default WishList