import '../css/pontosDaCarne.css';
function pontosDaCarne() {
    return (
        <>
            <section className="secao-pontos">
                <div className="header-pontos">
                    <h2>Guia de Pontos: A Ciência da Suculência</h2>
                    <p>O segredo não está no tempo, mas na temperatura interna. Use este guia para nunca mais errar.</p>
                </div>

                <div className='imagem-pontos'>
                    <div className="scroll-down" style={{fontSize:'18px', margin:'0'}}>scroll-down <br/><span>&#8964;</span></div>
                    <div className="info-pontos">
                        <p className='ponto-description'>Mal passada</p>
                        <p className='ponto-tempterature'><span>🌡️</span>52-55°C</p>
                    </div>
                    <div className="ponto mal-passada">
                    </div>
                    <div className="ponto ao-ponto">
                    </div>
                    <div className='ponto bem-passada'>
                    </div>
                </div>
            </section>
        </>
    )
}
export default pontosDaCarne;