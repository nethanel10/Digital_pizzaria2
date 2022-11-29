import axios from "axios"
import {useState,useEffect} from 'react'
function Extraselector(){

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
            {Pizza?.filter(i => i.id ==="1").map(item=> <h2>you chose {item.name}</h2>)}

            </div>
        </div>
     
     
    )
}
export default Extraselector;