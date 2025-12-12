import HeaderFlags from "../assets/flags"
function header() {
    return(
        <>
        <div className="header-wrapper" style={{backgroundColor:'white',width:'100%', height:'30px', boxShadow:'0px 0px 4px 0px grey', padding:'1em', zIndex:'999', position:'relative'}}>
            <div className="header-content" style={{width:"90%" , display:'flex', justifyContent:'flex-end', alignItens:'center'}} >
                <HeaderFlags/>
            </div>
        </div>
        </>
    ) 
}
export default header