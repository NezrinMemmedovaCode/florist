import { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MainContext } from '../../context/MainProvider';

function Basket() {
    const {basket,deleteproducts}=useContext(MainContext)
  return (
    <div>
          <HelmetProvider>
   
   <Helmet>
     <title>Basket</title>
   </Helmet>
   

</HelmetProvider>
<div className="home3">

<div className="cards">

{basket.map((x)=><div className="card" key={x.id}>
    <img src={x.img} alt="" />
    <h2>{x.name}</h2>
    <p>${x.price}</p>
    <button onClick={()=>deleteproducts(x)}><i className="fa-solid fa-trash"></i></button>
    




</div>)}
</div>
</div>
    </div>

  )
}

export default Basket