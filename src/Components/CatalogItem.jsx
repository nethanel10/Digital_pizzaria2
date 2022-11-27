function CatalogItem(props){
    return(
        <div>
            <h3 className="gray-line">{props.name}---------------------{props.price} <button className="btn-plus">+</button></h3>
        </div>
    )

}
export default CatalogItem;