import Catalogsection from "../Components/Catalogsection";

function Ourcatalog(){
    return(
        <div className="Ourcatalog">
            <h1 className="Ctalog-header">Catalog</h1>
            <div className="section ">
            <div className="sec ">
     <Catalogsection name="Pizza Catalog" className="sec1"/>
        <Catalogsection name="DRINKS Catalog" className="sec2"/>
     </div>

     <div >
     <Catalogsection name="EXTRAS Catalog"/>
     </div>
        </div>
        

            </div>

    )
}
export default Ourcatalog;