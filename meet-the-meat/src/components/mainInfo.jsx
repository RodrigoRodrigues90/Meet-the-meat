import '../css/mainInfo.css'
import { CutsMap } from '../components/cutsMap.js'

function mainInfo({ number }) {
    let name = CutsMap[number].name;
    let description = CutsMap[number].description;
    return (
        <>
            <section className='wrapper-main-info'>
                <div className="content-main-info">
                    <img src={CutsMap[number].Image} />
                    <div className="description-main-info">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="wrapper-cortes-especiais">
                    <h1>Dicas e receitas</h1>
                    <iframe 
                        src={CutsMap[number].video || " https://www.youtube.com/embed/dQw4w9WgXcQ"}
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