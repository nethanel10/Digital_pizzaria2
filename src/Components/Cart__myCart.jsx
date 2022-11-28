import {useNavigate} from "react-router-dom"
function Cartmycart(){
let navigate=useNavigate()
    return(
        <div className="cartmycart">
    <div className="Cart_container">
    <div className="header">
                <h1>MyCart</h1>
            </div>
            <div className="content">

                <button className="next" onClick={()=>{
                    navigate("/Mycart/personaldetails")
                }}> 
                next
                </button>
            </div>

    </div>
    </div>
    )
}
export default Cartmycart;