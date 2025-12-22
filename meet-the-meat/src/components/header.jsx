import HeaderFlags from "../assets/flags"
import '../css/header.css'; 

function Header() {
    return (
        <div className="header-wrapper">
            <div className="header-content">

               

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