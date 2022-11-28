function CatalogItem(props){
    return(
        <div>
            <h3 className="line">{props.name} ------------  {props.price}</h3>
        </div>
    )

}
export default CatalogItem;