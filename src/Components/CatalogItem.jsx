import { useNavigate } from "react-router-dom";
import Extraselector from "./ExtrasSelector";
import {useState} from 'react'
function CatalogItem(props){
    const[openmodal,setopenmodal]=useState(false)
    let navigate=useNavigate()
    return(
        <div className="Store-feild">
            <h3 className="line">{props.name} ------------  {props.price}  <button  onClick={()=>{
                setopenmodal(true)
            }}>+</button ></h3>
            <Extraselector open={openmodal}/>
        </div>
    )

}
export default CatalogItem;