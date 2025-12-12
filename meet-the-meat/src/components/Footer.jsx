import '../css/footer.css'; 

function Footer() {
    // Obtém o ano atual dinamicamente
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <p className="footer-content">
                &copy; {currentYear} Meet The Meet. Todos os direitos reservados.
            </p>
            <p>Desenvolvido por: <a href='https://rodrigorodrigues90.github.io/Portfolio/' target='blank'>Rodrigo Rodrigues</a></p>
        </footer>
    );
}

export default Footer;