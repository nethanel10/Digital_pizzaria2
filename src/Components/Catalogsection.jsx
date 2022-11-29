import CatalogItem from "./CatalogItem"
import {useState,useEffect} from "react"
import axios from "axios"
function Catalogsection(){
    const [Pizza,setpizza]=useState()
    const fetchData=async ()=>{
        try{
let res=await axios.get("https://6384d2e23fa7acb14f01c505.mockapi.io/products")
setpizza(res.data)
console.log(res.data)
        }
        catch(err){
            console.log(err)

        }
    }
    useEffect(()=>{
        fetchData()
    },[])

    
    if (Pizza ) return(
        <div className="container-section">
        <div className="flex-section">
        <section  >
           <h1>Pizza</h1> 
            {Pizza?.filter(i => i.type === 1).map(item=> <CatalogItem {...item}/>)}

        
        </section>
            <section className="left-flex"  >
                <h1>Drinks</h1> 
                 {Pizza?.filter(i => i.type === 3).map(item=> <CatalogItem {...item}/>)}
     
             
            </section>

        </div>
<div>
    <section>
        <h1>Extras</h1>
        {Pizza?.filter(i => i.type === 2).map(item=> <CatalogItem {...item}/>)}

    </section>
</div>
        </div>
     
     
    )
}
export default Catalogsection;