import '../css/home.css'
import MeatMap from '../components/meatMap'
import SteakSvg from '../assets/Steak_svg'
function homePage() {
    return (
        <>
            <div className="main-home">
                <div className="title-wrapper">
                    <h1>MEET THE MEAT</h1>
                    <div className="subtitle-wrapper"> <h2><SteakSvg prop='scaleX(-1)'/>Site só para carnívoros<SteakSvg/></h2></div>
                    <div className="info-content"><p>Conheça os principais cortes de carne bovina em um guia detalhado, explorando as caracteristicas de cada peça, com as melhores dicas de preparo e receitas. </p></div>
                </div>
                <div className="map-wrapper">
                    <p>Escolha a peça para destacar.</p>
                    <MeatMap />
                </div>
            </div>
        </>
    )
}
export default homePage