function CartpersonalDetails(){
    const options = ['Cash','Creditcard'];
    return(
                    <form className="container-details" method='GET' action='/Mycart/checkout' >
                        <div className="Cart_container">
                            <h2 className="personal-data-header">Personal Details</h2>
                        <div className="feilds">
            <div className="details-left">
            <h3>First name</h3>
        <input type="text"  id="" />
        <h3>last name</h3>
        <input type="text"  id="" />
        <h3>phone</h3>
        <input type="tel"  id="" />
         </div>
         <div className="details-right">
        <h3>Adrees</h3>
        <input type="text"  id="" />
        <h3>Apartment</h3>
        <input type="number"  id="" />
        <h3>payment method</h3>
         <select   >
         {options.map((option, index) => {
						return <option key={index} >
							{option}
						</option>
					})}

         </select>
         </div>

            </div>
            <input type="submit" value="checkout" className="check-out-button"></input>


                        </div>
        </form>

    
    )
}
export default CartpersonalDetails
