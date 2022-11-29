import { useNavigate } from "react-router-dom";

function CatalogItem(props){
    let navigate=useNavigate()
    return(
        <div>
            <h3 className="line">{props.name} ------------  {props.price}  <button  onClick={()=>{
                navigate("/catalog/extraselector")
            }}>+</button></h3>
           
        </div>
    )

}
export default CatalogItem;