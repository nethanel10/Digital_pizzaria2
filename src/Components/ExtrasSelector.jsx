import React from "react";
import {useState,useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios";
const Modal=({open, onClose, setIsOpen})=>{
    const navigate=useNavigate()
    const [Pizza,setpizza]=useState()
    const [data, setData] = useState({
        count: 1,
        extras: []
    })
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

    useEffect(() => {
        if(open.isOpen) setData({
        count: 1,
        extras: []
    })
    }, [open.isOpen])

    const handleExtraClick = (e, extraId) => {
        const {checked} = e.target
        if(checked && !data.extras.includes(extraId)) setData({...data, extras: [...data.extras, parseInt(extraId)]})
    }

    const addToCart = (id) => { 
        const oldData = JSON.parse(localStorage.getItem("products")) ?? []
        const newData = [...oldData, {...data, id: parseInt(id)}]
        localStorage.setItem("products", JSON.stringify(newData))
        setIsOpen({...open, isOpen: false})
        navigate("/Mycart")
    }
    if(!open.isOpen) return null
return(
    <div className="overlay">
        <div className="modalcontainer">
            <p onClick={ onClose}> x</p>
            {/* <h2>select extra</h2> */}
        {Pizza?.filter(i => i.id ===open.selectedId).map(item=> 
        <>
            <h2 className="header-2">you chose {item.name}</h2>
            {Pizza?.filter(extra => extra.type ===2).map(extra=> <div className="container-checkbox"><input type="checkbox" onClick={(e) => {handleExtraClick(e, extra.id)}}  className="checkbox"></input  ><h2>{ extra.name}</h2></div>)}
            <button className="btn-add" onClick={() => {addToCart(item.id)}
            }>Add to cart </button>
        </>
            )}
        </div>

    </div>
)
}
export default Modal
