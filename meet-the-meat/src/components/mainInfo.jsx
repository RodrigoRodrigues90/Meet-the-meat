import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import '../css/mainInfo.css'
import { CutsMap } from '../components/cutsMap.js'

function mainInfo({ number }) {
    let name = CutsMap[number].name;
    let description = CutsMap[number].description;
    let preparo = CutsMap[number].tempoPreparo;
    let gordura = CutsMap[number].gordura;
    let melhorUso = CutsMap[number].melhorUso;

    useEffect(() => {
        // Configuração do ScrollReveal
        const sr = ScrollReveal({
            origin: 'left',
            distance: '20px',
            duration: 2000,
            delay: 200,
            reset: true // Define se a animação repete ao subir o scroll
        });

        // Aplica aos elementos via classe CSS
        sr.reveal('.description-main-info', { origin: 'right' });
        sr.reveal('.content-main-info img');
    }, []);
    return (
        <>
            <section className='wrapper-main-info'>
                <div className="content-main-info">
                    <img src={CutsMap[number].Image} />
                    <div className="description-main-info">
                        <h1>{name}</h1>
                        <div className="stats-grid">
                            <div className="stat-item">
                                <span className="icon">⏳</span>
                                <span className="label">Preparo</span>
                                <span className="value">{preparo}</span>
                            </div>
                            <div className="stat-item">
                                <span className="icon">🥩</span>
                                <span className="label">Gordura</span>
                                <span className="value">{gordura}</span>
                            </div>
                            <div className="stat-item">
                                <span className="icon">🔥</span>
                                <span className="label">Melhor Uso</span>
                                <span className="value">{melhorUso}</span>
                            </div>
                        </div>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="wrapper-cortes-especiais">
                    <h1>Dicas e receitas</h1>
                    <iframe
                        src={CutsMap[number].video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </section>
        </>
    )
}
export default mainInfo;