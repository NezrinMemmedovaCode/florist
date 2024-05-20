import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function Detail() {
    const {id}=useParams()
    const [detail, setdetail] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/products/${id}`)
        .then(res=>res.json())
        .then(data=>setdetail(data))
    
    }, [])

  console.log(detail)


  return (
    <div className="home3">

<div className="cards">

<div className="card">
    <img src={detail.img} alt="" />
    <h2>{detail.name}</h2>
    <p>${detail.price}</p>
    
    




</div>
</div>
</div>
  )
}

export default Detail