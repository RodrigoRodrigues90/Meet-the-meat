import ReactCountryFlag from "react-country-flag";

function HeaderFlags() {
    const size = window.innerWidth < 765 ? '1.5rem' : '2rem';
    let width = size;
    let height = size;
    return (
        <div style={{ display: 'flex', gap: '15px' }}>


            <ReactCountryFlag
                countryCode="BR"
                svg
                style={{ width: width, height: height, cursor: 'pointer' }}
                title="Português"
            />

            <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: width, height: height, cursor: 'pointer' }}
                title="English"
            />

            <ReactCountryFlag
                countryCode="ES"
                svg
                style={{ width: width, height: height, cursor: 'pointer' }}
                title="Español"
            />

        </div>
    );
}
export default HeaderFlags;