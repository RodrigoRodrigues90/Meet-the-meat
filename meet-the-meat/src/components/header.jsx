import HeaderFlags from "../assets/flags"
import { BsInfoCircleFill } from "react-icons/bs";
// Certifique-se de importar seu arquivo CSS
import '../css/header.css'; 

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-content">

                <div className="about">
                    <div className="about-label">
                        <BsInfoCircleFill className="info-icon" />
                        <span>About</span>
                    </div>
                </div>

                {/* Corrigi o className de 'header-' para 'header-flags-container' para clareza */}
                <div className="header-flags-container">
                    <HeaderFlags />
                </div>
            </div>
        </div>
    );
}

// Renomeei a função para começar com letra maiúscula (convenção React)
export default Header;