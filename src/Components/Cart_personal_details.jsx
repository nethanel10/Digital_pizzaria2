function CartpersonalDetails(){
    return(
                    <form className="container-details" method="get">
                        <div className="Cart_container">
                            <h2 className="personal-data-header">personal details</h2>
                        <div className="feilds">
            <div className="details-left">
            <h3>First name</h3>
        <input type="text" name="Firstname" id="" />
        <h3>last name</h3>
        <input type="text" name="Lastname" id="" />
        <h3>phone</h3>
        <input type="tel" name="Phone" id="" />
         </div>
         <div className="details-right">
        <h3>Adrees</h3>
        <input type="text" name="Adress" id="" />
        <h3>Apartment</h3>
        <input type="number" name="Apartment" id="" />
        <h3>payment method</h3>
         <select name="Paymentmethod">
        <option value="Cash">Cash</option>
        <option value="credit card">Credit card</option>

         </select>
         </div>

            </div>
            <input type="submit" value="checkout" className="check-out-button"></input>

                        </div>
        </form>

    
    )
}
export default CartpersonalDetails
