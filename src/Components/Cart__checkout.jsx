function Cartchechout(){
    return(
        <form className="container-details" method="get">
        <div className="Cart_container">
            <h2 className="personal-data-header">Checkout</h2>
        <div className="feilds-input">
        <input type="text" name="Card-number" id="" placeholder="Card number" />
        <h6>E.g:49...,51...,36...,37...</h6>
        <input type="text" name="Name" id="" placeholder="Name" />
        <div className="flex">
        <input type="text" name="Vaild Thru" id="" placeholder="Vaild Thru" />
        <input type="text" name="CvC" id="" placeholder="Vaild Thru" />

        </div>


</div>
</div>
</form>

        
    )
}
export default Cartchechout