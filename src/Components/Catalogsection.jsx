import CatalogItem from "./CatalogItem"
function Catalogsection(props){
    return(
        <section  >
           <h1>{props.name}</h1> 
        <CatalogItem name price></CatalogItem>
        <CatalogItem name=""></CatalogItem>
        <CatalogItem name=""></CatalogItem>
        <CatalogItem name=""></CatalogItem>

        
        </section>
     
    )
}
export default Catalogsection;