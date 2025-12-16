import '../css/meatMap.css'

/**
 * Componente React que renderiza o mapa SVG da anatomia do boi.
 * @param {object} props - Propriedades do componente.
 * @param {string} props.fillColor - Cor de preenchimento dos cortes (ex: '#800000').
 * @param {string} props.strokeColor - Cor da borda dos cortes (ex: '#c8c8c8').
 * @param {string} props.textColor - Cor dos números de texto (ex: '#ffebeb').
 * @param {number} props.viewBoxWidth - Largura do ViewBox.
 * @param {number} props.viewBoxHeight - Altura do ViewBox.
 * @returns {JSX.Element} O elemento SVG.
 */
const MeatMapSVG = ({
    fillColor = '#800000',
    strokeColor = '#c8c8c8',
    textColor = '#ffebeb',
    viewBoxWidth = 290,
    viewBoxHeight = 214,
    // Adicione um manipulador de clique opcional para interatividade
    onPathClick = () => { },
}) => {

    const defaultStyle = {
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth: 0.4,
        strokeDasharray: 'none',
        strokeOpacity: 1,
    };

    // Função para tratar o clique e passar o ID
    const handleClick = (event) => {
        // Pega o ID do elemento clicado (path)
        const cutId = event.currentTarget.id;
        onPathClick(cutId);
        const elementoAlvo = document.getElementById('info-cuts-wrapper');

        if (elementoAlvo) {
            elementoAlvo.scrollIntoView({
                behavior: 'smooth', // Para rolagem suave
                block: 'nearest'      // Para alinhar o topo do elemento com o topo da viewport
            });
        } else {
            console.error("Elemento com ID 'info-cuts-wrapper' não encontrado.");
        }
    };

    return (
        <svg
            version="1.1"
            id="svg46"
            width={viewBoxWidth}
            height={viewBoxHeight}
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs id="defs50" />
            <g
                id="layer1"
                style={{
                    width: '100%',
                    display: 'inline',
                    fill: fillColor,
                    stroke: strokeColor,
                    strokeWidth: 0.4,
                    strokeDasharray: 'none',
                    strokeOpacity: 1,
                }}
                transform="matrix(0.97561498,0,0,1.0000271,0.29981558,-0.00289381)"
            >
                {/* ATENÇÃO: Os IDs originais do SVG foram mantidos (ex: path492, pescoco) 
                  para garantir a compatibilidade com o CutsMap.js que você criou.
                  Adicionamos o manipulador onClick a todos os paths.
                */}
                <path
                    style={{ ...defaultStyle }}
                    d="m 69.304261,31.29029 c -0.514589,10.772761 -0.62178,11.324531 -0.62178,11.324531 l -1.646607,11.08365 -2.84112,13.291521 -2.361337,6.601065 -3.552686,7.570914 -5.56793,7.518308 c 2.752138,0.399809 5.141793,0.758335 7.751526,0.951467 2.97551,1.659968 5.059553,2.942586 7.437371,4.387054 L 85.46538,82.570072 79.346471,64.027838 C 77.672598,56.603002 77.290182,49.55316 76.508515,42.387389 l -1.28153,-14.226958 z"
                    id="3"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle }}
                    d="M 68.744549,30.800941 C 65.189399,27.092965 61.399716,24.9838 57.49882,23.632777 c -2.107947,-0.07606 -3.989424,-0.756878 -6.499932,0.242067 l -36.380714,40.499416 -2.219908,4.89964 0.331822,4.090485 c 1.426196,3.575786 2.621118,4.701598 3.849438,6.181199 3.8734,4.625196 4.540509,4.31757 6.082604,5.351985 1.521278,0.991651 3.180885,1.017469 4.824504,1.154916 l 5.671014,-1.626726 4.660507,1.987616 3.966561,1.882646 8.039367,0.848254 1.862247,-0.413078 0.814425,-1.054961 1.382194,-1.532466 3.972341,-5.483897 3.429731,-7.721145 2.482883,-7.471428 1.708916,-7.42638 2.17537,-11.454139 1.070261,-7.709925 0.222857,-5.915843 z"
                    id="0"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle }}
                    d="m 76.105142,28.492133 c 0.419374,6.083613 0.432313,12.739468 1.303298,18.304948 0.265779,7.087378 1.255321,12.727673 2.788134,17.334575 1.771351,7.010694 3.864967,11.925842 5.843437,17.58973 7.656696,-3.047824 14.952959,-4.105897 22.012559,-3.857468 C 105.68813,63.089753 101.95078,46.713097 100.03124,38.970296 91.894529,37.313045 84.307289,33.639145 76.105142,28.492133 Z"
                    id="4"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle }}
                    d="m 76.145889,27.792339 c 22.601593,16.156944 43.517871,11.642197 46.742661,11.12604 3.98611,-0.783283 6.47081,-1.650172 9.17079,-3.139499 0,0 30.0728,19.330347 -0.041,-0.0031 C 113.83573,-3.6397804 76.850607,26.606193 76.145889,27.792339 Z"
                    id="5"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle }}
                    d="m 143.41037,40.536791 c 4.85639,0.930864 8.95566,1.698199 25.39824,1.82088 -0.25594,2.004972 2.49255,18.323569 -3.48569,23.528009 -8.77864,1.026232 -18.68855,0.905389 -27.46718,0.265914 4.52739,-6.301563 7.00896,-8.144552 5.55463,-25.614803 z"
                    id="8"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle }}
                    d="m 133.28595,36.313351 c 2.35129,1.597457 6.32731,3.075055 9.36032,3.844514 0.92717,5.470038 0.5304,11.453754 -0.12275,17.536946 -2.02738,5.479144 -5.15064,7.865359 -8.72417,8.559725 l -26.7482,0.0714 c -2.11569,-6.809488 -3.98477,-14.10585 -5.60545,-26.687994 19.81957,2.107316 24.69317,-1.005677 31.84025,-3.324594 z"
                    id="7"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }} // strokeDashoffset não é no default
                    d="m 169.44455,42.214316 c 0.82935,9.124099 0.60476,17.61986 -2.69618,23.816042 9.97734,2.075288 24.5526,0.04526 33.11651,4.065637 0.70274,-8.975452 -0.0481,-9.711297 2.97432,-31.835573 -8.54201,2.546412 -21.9705,2.774734 -33.39465,3.953894 z"
                    id="9"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 107.16582,66.871363 c -0.39058,1.57529 28.93235,-0.636002 71.95204,1.08312 5.0494,8.921317 10.1536,19.581168 15.33472,25.816632 2.26878,7.379935 5.16494,13.677885 8.00458,20.073295 -2.06074,0.33821 -8.00734,4.76677 -17.30478,6.19904 2.2354,0.18541 -17.16237,4.47994 -59.20726,7.55377 -9.47638,-18.95062 -15.10455,-39.580937 -18.7793,-60.725857 z"
                    id="13"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 180.47976,68.461767 c 6.41381,-0.502911 13.30869,0.238677 19.58526,2.537071 2.6258,9.685306 2.96753,19.744282 7.43331,28.755222 -7.86142,0.72163 -16.82524,-9.296288 -27.01857,-31.292293 z"
                    id="11"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 195.41198,94.381879 c 2.61755,6.600301 5.09246,13.646951 8.00001,19.339791 2.33593,1.49427 8.59406,0.33366 12.9452,0.46386 l -8.16975,-13.53932 c -6.52368,0.60662 -9.29524,-3.250383 -12.77546,-6.264331 z"
                    id="12"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 202.44692,45.981659 c 12.27061,7.502415 25.21178,12.66284 40.40517,14.801571 -3.22755,12.249145 -8.19825,29.745695 -12.45728,39.41672 -7.53494,0.6154 -15.48272,-2.062141 -23.3671,-4.233936 -10.15765,-31.588505 -5.75145,-32.617478 -4.58079,-49.984355 z"
                    id="15"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0, strokeDasharray: '1.6, 0.4' }}
                    d="m 154.0306,55.916596 c 21.67924,2.735621 22.02933,0.03682 51.79244,-2.219041 6.0377,2.007302 4.97361,12.51185 -0.8774,13.874656 -14.42184,-3.081562 -33.46285,-5.95806 -53.13776,-7.731302 v 0 c -3.43666,-1.537132 -3.65082,-2.110192 2.22272,-3.924313 z"
                    id="10"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 207.25201,96.67984 c 7.33326,2.165791 14.65677,4.39085 22.37266,4.23295 -0.27383,7.28807 -4.09229,12.25036 -7.28161,17.45561 -6.66715,-5.11434 -11.13784,-13.32494 -15.09105,-21.68856 z"
                    id="17"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 67.91692,94.450065 c 2.283929,3.355766 16.324742,-18.610336 40.41381,-15.790805 3.61302,18.411626 9.729,34.41534 16.84091,49.46095 1.80598,8.89016 1.06254,11.30619 1.23042,15.83832 -1.61391,4.47097 -3.94654,4.31566 -6.0618,5.0728 -12.04346,2.86092 -20.24246,3.44555 -21.995612,1.02768 C 95.45795,146.2021 81.680703,119.19724 67.91692,94.450065 Z"
                    id="6"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 52.70028,89.372876 c 6.838466,0.141576 11.124888,2.115521 14.278393,4.902901 L 96.644892,148.99379 C 81.325248,144.96614 73.290587,126.09139 61.708765,114.44591 60.93859,94.227466 56.120767,95.511782 52.70028,89.372876 Z"
                    id="2"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 99.008397,151.74241 c 6.040353,0.442 5.632813,1.87606 22.008763,-2.14474 -1.04369,9.11181 -4.44382,13.36026 -7.65545,17.99773 l -8.4131,0.003 c -3.18656,-4.39354 -4.22702,-10.3734 -5.940213,-15.85599 z"
                    id="1"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 105.12611,168.34577 c 0.0357,10.51105 -6.399222,25.87805 -9.265715,27.69736 l 19.924125,-0.24284 c -1.5679,-2.74354 -3.20055,-6.30325 -4.87085,-10.33748 l 5.6321,0.11499 c -1.25884,-2.97472 -2.25244,-2.98187 -2.5454,-17.2497 z"
                    id="23"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 126.70973,128.91752 1.10259,13.22054 c 19.54813,-15.67193 36.95064,-6.07753 54.25331,4.69252 15.74332,-20.06522 31.38428,-17.03277 46.99594,-7.38668 l -2.31825,-15.92779 c -3.64871,-2.47918 -6.96306,-5.2368 -9.76934,-8.41754 l -15.40109,0.17382 c -20.11531,10.34583 -50.63201,9.55797 -74.86316,13.64513 z"
                    id="0"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 203.7952,38.267877 c 0.0882,-4.713013 40.84621,-4.469778 40.89713,0.825791 -1.02915,8.525572 -0.0442,11.990439 -2.51245,20.516011 -11.10994,-0.832583 -25.87886,-5.232396 -39.59149,-14.602248 0.28458,-2.368025 0.11076,-5.209297 1.20681,-6.739554 z"
                    id="14"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 245.81849,39.486924 c 0.82064,6.449093 -6.26386,40.695931 -15.69213,65.278596 9.41239,0.2773 9.20657,18.16703 11.74078,31.03932 l 7.56802,0.21955 3.17991,-14.80276 c 19.58914,-4.44793 9.62239,-32.209299 14.43359,-48.313945 4.31707,-17.589975 -5.07827,-27.417719 -21.23017,-33.420761 z"
                    id="19"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0, strokeDasharray: '1.6, 0.4' }}
                    d="m 210.16804,72.035007 c 12.87562,-7.403188 41.59276,8.103327 33.64797,21.819909 -11.93471,13.333114 -46.77039,0.102726 -33.64797,-21.819909 z"
                    id="16"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 254.15422,60.276605 c -2.71891,0.613939 3.33607,17.924401 -0.39761,30.431029 -6.48702,15.104626 -8.55766,19.001906 -3.66655,23.854456 7.44529,2.66321 11.02402,-10.23293 13.87471,-26.058765 1.22862,-14.564799 1.50593,-30.369354 -9.81055,-28.22672 z"
                    id="20"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 267.93663,59.806284 c 11.59047,20.357823 7.57238,48.867306 8.48349,74.802486 -0.90522,8.62831 -2.94602,9.92565 -5.00293,11.11897 0.63145,-14.05128 -6.45436,-11.48065 -0.35472,-29.99194 1.94253,-27.39781 -1.51994,-40.622823 -3.37475,-43.468572 0.78653,-3.493821 1.03842,-7.489046 0.24891,-12.460944 z"
                    id="0"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 230.04712,105.69731 -7.32051,13.48083 c 8.68096,4.85561 4.64076,9.37756 7.70367,22.88911 2.32762,-1.13131 5.25167,-2.78296 10.38248,-6.35982 -2.33181,-11.86587 -1.6244,-28.23587 -10.76564,-30.01012 z"
                    id="18"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 231.48791,142.64804 c 5.69502,-4.05972 11.44791,-7.52355 17.70486,-5.79627 l 3.37149,8.1022 -6.57471,19.86535 c -3.52098,2.39745 -6.99751,3.1021 -10.3699,-0.15941 z"
                    id="21"
                    onClick={handleClick}
                />
                <path
                    style={{ ...defaultStyle, strokeDashoffset: 0 }}
                    d="m 235.50265,165.76882 c 4.34747,3.03065 7.26959,1.19025 10.58013,0.67728 -0.0463,6.39587 -2.86361,15.59817 -0.13891,19.18761 l -4.93813,0.15708 5.48257,12.33789 -18.52804,-0.18365 c 7.03302,-11.11124 5.30923,-19.51261 7.54238,-32.17621 z"
                    id="0"
                    onClick={handleClick}
                />
                <path
                    style={{
                        opacity: 0.772946,
                        fill: fillColor,
                        stroke: '#ffffff',
                        strokeWidth: 0.404963,
                        strokeDasharray: '1.61985, 0.404963',
                        strokeDashoffset: 0,
                        strokeOpacity: 1,
                    }}
                    d="m 130.90803,85.183061 c 3.30672,13.044281 2.49378,23.751929 8.96763,33.884979 7.52036,8.4028 0.71948,-24.201897 7.39893,-41.47962 -12.07919,-10.725572 -13.49589,0.284077 -16.36656,7.594641 z"
                    id="22"
                    onClick={handleClick}
                />

                {/* Bloco de Textos (Números) */}
                <text xmlSpace="preserve" x="106.81414" y="156.70776" id="text2170">
                    <tspan id="tspan2168" x="106.81414" y="156.70776" />
                </text>
                <text xmlSpace="preserve" x="108.75912" y="155.12866" id="text2224">
                    <tspan id="tspan2222" x="108.75912" y="155.12866" />
                </text>

                {/* Números Visíveis */}
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold' }} x="107.30873" y="164.69719">
                    <tspan x="107.30873" y="164.69719" style={{ fontSize: '8px' }}>1</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="68.465927" y="116.40773">
                    <tspan x="68.465927" y="116.40773">2</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="68.669029" y="71.520836">
                    <tspan x="68.669029" y="71.520836">3</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="86.759506" y="56.2714">
                    <tspan x="86.759506" y="56.2714">4</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="103.48561" y="30.305315">
                    <tspan x="103.48561" y="30.305315">5</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="99.000626" y="118.07437">
                    <tspan x="99.000626" y="118.07437">6</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="121.83655" y="55.65134">
                    <tspan x="121.83655" y="55.65134">7</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="149.14218" y="52.792538">
                    <tspan x="149.14218" y="52.792538">8</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="187.05403" y="50.895153">
                    <tspan x="187.05403" y="50.895153">9</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="185.96898" y="63.115936">
                    <tspan x="185.96898" y="63.115936">10</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="191.27379" y="84.807335">
                    <tspan x="191.27379" y="84.807335">11</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold' }} x="203.00835" y="109.83437">
                    <tspan x="203.00835" y="109.83437" style={{ fontSize: '6px' }}>12</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="148.28531" y="99.455818">
                    <tspan x="148.28531" y="99.455818">13</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="219.34138" y="67.505371">
                    <tspan x="219.34138" y="67.505371">15</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="222.72125" y="88.031883">
                    <tspan x="222.72125" y="88.031883" >16</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '10px' }} x="222.26607" y="50.595276">
                    <tspan x="222.26607" y="50.595276">14</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold' }} x="215.90536" y="109.45922">
                    <tspan x="215.90536" y="109.45922" style={{ fontSize: '6.66667px' }}>17</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="228.60527" y="124.91893">
                    <tspan x="228.60527" y="124.91893">18</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '9px' }} x="242.57513" y="77.287758">
                    <tspan x="242.57513" y="77.287758">19</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold' }} x="255.58685" y="88.037865">
                    <tspan x="255.58685" y="88.037865" style={{ fontSize: '6.66667px' }}>20</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold', fontSize: '8.74938px' }} x="237.50116" y="153.3748">
                    <tspan x="237.50116" y="153.3748">21</tspan>
                </text>
                <text style={{ fill: textColor, fillOpacity: 1, fontWeight: 'bold' }} x="272.40497" y="122.88312">
                    <tspan x="272.40497" y="122.88312" />
                </text>
                <text
                    style={{ fill: textColor, fontWeight: 'bold', stroke: '#ffffff', strokeWidth: 0.404963, fillOpacity: 1 }}
                    x="131.38074"
                    y="90.825172"
                    transform="scale(1.0124338,0.98771889)"
                >
                    <tspan x="131.38074" y="90.825172" style={{ fontSize: '8.09925px' }}>22</tspan>
                </text>
                <text
                    style={{ fill: textColor, fontWeight: 'bold', stroke: '#ffffff', strokeWidth: 0.404963, fillOpacity: 1 }}
                    x="103.70636"
                    y="184.90714"
                    transform="scale(1.0124338,0.98771889)"
                >
                    <tspan x="103.70636" y="184.90714" style={{ fontSize: '6.74938px' }}>23</tspan>
                </text>
            </g>
        </svg>
    );
};

export default MeatMapSVG;