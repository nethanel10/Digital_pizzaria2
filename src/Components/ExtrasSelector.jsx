import axios from "axios"
import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom"
function Extraselector(){
let navigate=useNavigate()
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


    return(
        <div className="container-section-1">
            <div className="Cart_container-1">
            {Pizza?.filter(i => i.id ==="1").map(item=> <div><h2 className="header-2">you chose {item.name}</h2>  </div>)}
            {Pizza?.filter(i => i.type ===2).map(item=> <div className="container-checkbox"><input type="checkbox"  className="checkbox"></input  ><h2>{item.name}</h2></div>)}
<button className="btn-add" onClick={()=>{
    navigate("/Mycart")
}}>Add to cart </button>
            </div>
        </div>
     
     
    )
}
export default Extraselector;