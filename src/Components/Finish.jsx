import axios from "axios"
import { useEffect } from "react"

function Finish(){

    const applyOrder = async () => {
        await axios.post("https://6384d2e23fa7acb14f01c505.mockapi.io/orders", {
            orderDate: new Date(),
            phone: localStorage.getItem("phone"),
            products: JSON.parse(localStorage.getItem("products"))
        })
        localStorage.setItem("products", JSON.stringify([]))
        
    }
    useEffect(() => {
        applyOrder()
    }, [])
    return(
        <div className="finish-container">
            <div className="finsh-message">
                <h2>Finished</h2>
            </div>
        </div>
    )
}
export default Finish