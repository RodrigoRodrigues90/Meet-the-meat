import { useRef, useState } from 'react';
import '../css/pontosDaCarne.css';

function PontosDaCarne() {
    const containerRef = useRef(null);
    const [scrollRatio, setScrollRatio] = useState(0);

    const handleScroll = () => {
        if (containerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            const totalScrollable = scrollHeight - clientHeight;
            const currentRatio = scrollTop / totalScrollable;
            setScrollRatio(currentRatio);
        }
    };

    // Lógica simples para definir opacidade baseada no ratio
    // Mal-passada: aparece no início (0 a 0.3)
    // Ao-ponto: aparece no meio (0.3 a 0.7)
    // Bem-passada: aparece no fim (0.7 a 1)
    const getOpacity = (ponto) => {
        if (ponto === 'mal') return scrollRatio < 0.33 ? 1 : 0;
        if (ponto === 'ao') return scrollRatio >= 0.33 && scrollRatio < 0.66 ? 1 : 0;
        if (ponto === 'bem') return scrollRatio >= 0.66 ? 1 : 0;
        return 0;
    };

    // Lógica para mudar o texto dinamicamente
    const getText = () => {
        if (scrollRatio < 0.33) return { desc: "Mal passada", temp: "52-55°C" };
        if (scrollRatio < 0.66) return { desc: "Ao ponto", temp: "60-65°C" };
        return { desc: "Bem passada", temp: "71°C+" };
    };

    const info = getText();

    return (
        <section className="secao-pontos">
            <div className="header-pontos">
                <h2>Guia de Pontos: A Ciência da Suculência</h2>
                <p>O segredo não está no tempo, mas na temperatura interna. Use este guia para nunca mais errar.</p>
            </div>

            <div className="sticky-container" ref={containerRef} onScroll={handleScroll}>
                <div className='imagem-pontos'>
                    <div className="scroll-down">
                        Role para ver os pontos <br /><span>&#8964;</span>
                    </div>

                    <div className="info-pontos">
                        <p className='ponto-description'>{info.desc}</p>
                        <p className='ponto-tempterature'><span>🌡️</span>{info.temp}</p>
                    </div>

                    <div className="ponto mal-passada" style={{ opacity: getOpacity('mal') }} />
                    <div className="ponto ao-ponto" style={{ opacity: getOpacity('ao') }} />
                    <div className='ponto bem-passada' style={{ opacity: getOpacity('bem') }} />
                </div>
                
                <div className='scroll-div'/>
            </div>
        </section>
    );
}

export default PontosDaCarne;