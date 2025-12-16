import { useState } from "react";
import '../css/home.css'
import MeatMap from '../components/meatMap'
import SteakSvg from '../assets/Steak_svg'
import MainInfo from '../components/mainInfo'
import { CutsMap } from '../components/cutsMap'

function homePage() {
    const [selectedCutNumber, setSelectedCutNumber] = useState(1);

    const handleCutSelect = (cutIdString) => {
        const cutIdNumber = parseInt(cutIdString, 10);
        setSelectedCutNumber(cutIdNumber);
    };
    const cutsArray = Object.values(CutsMap)
        .sort((a, b) => a.number - b.number);

    const splitIndex = 11;

    const columnLeft = cutsArray.slice(0, splitIndex); // Cortes 1 a 10
    const columnRight = cutsArray.slice(splitIndex); // Cortes 11 em diante
    // Função para renderizar a lista de cortes
    const renderCutsList = (cuts) => (
        <ul className="cuts-list">
            {cuts.map((cut) => (
                <li key={cut.number} className="cut-item">
                    <span className="cut-number">{cut.number}.</span>
                    <span className="cut-name">{cut.name}</span>
                </li>
            ))}
        </ul>
    );
    return (
        <>
            <div className="main-home">
                <div className="title-wrapper">
                    <h1>MEET THE MEAT</h1>
                    <div className="subtitle-wrapper"> <h2><SteakSvg prop='scaleX(-1)' />Site só para carnívoros<SteakSvg /></h2></div>
                    <div className="info-content"><p>Conheça os principais cortes de carne bovina em um guia detalhado, explorando as caracteristicas de cada peça, com as melhores dicas de preparo e receitas. </p></div>
                </div>
                <div className="map-wrapper">
                    <p>Escolha a peça para destacar.</p>
                    <MeatMap onPathClick={handleCutSelect} />
                    <div className="table-cortes-wrapper">
                        <div className="cuts-columns-container">
                            <div className="column-left">
                                {renderCutsList(columnLeft)}
                            </div>
                            <div className="column-right">
                                {renderCutsList(columnRight)}
                            </div>
                        </div>
                    </div>
                </div>
                <div id="info-cuts-wrapper">
                    {selectedCutNumber !== 0 && (
                        <MainInfo number={selectedCutNumber} />
                    )}
                </div>
            </div>

        </>
    )
}
export default homePage