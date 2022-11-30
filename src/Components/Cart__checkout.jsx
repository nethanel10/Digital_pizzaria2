import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Cart_checkout(){
    let navigate=useNavigate()
return(
    <div className="Checkout_container">
        <div className="Cart_container">
            <h2>Checkout</h2>
        <div className="Cart_checkout">
<form>
    <input type='tel'
     name="number" 
     placeholder="Card Number" 
     className="Credit_card_feilds"

      />
    <input type='text'
     name="name" 
     placeholder="Name" 
     className="Credit_card_feilds"
      />
    <input type='text'
     name="expiry" 
     placeholder="MM/YY Expiry" 
     className="Credit_card_feilds"

      />
    <input type='tel'
     name="cvc" 
     placeholder="CVC" 
     className="Credit_card_feilds"

      />



     </form>
    </div>
    <button className="Finish-button" onClick={()=>{
         navigate("/finsh")
    }}>Finish</button>


        </div>

    </div>
)
}
export default Cart_checkout


