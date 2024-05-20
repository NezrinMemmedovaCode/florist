import { createContext, useState } from "react"

export const MainContext=createContext()
function MainProvider({children}) {

    const [basket, setbasket] = useState([])
    const [wish, setwish] = useState([])
    function addwish(item) {
        setwish([...wish,item])
        
    }
    function addbasket(item) {
        setbasket([...basket,item])

        
    }

    function deletewish(item) {
        setwish([...wish.filter((x)=>x._id!==item._id)])

        
    }
    function deleteproducts(item) {
        setbasket([...basket.filter((x)=>x._id!==item._id)])

    }


  return (
    <div>
        
        <MainContext.Provider  value={{basket,addbasket,deleteproducts,addwish,wish,deletewish}}>


        {children}
        </MainContext.Provider>
    </div>
  )
}

export default MainProvider