import ReactCountryFlag from "react-country-flag";

function HeaderFlags() {
    return (
        <div style={{ display: 'flex', gap: '15px' }}>


            <ReactCountryFlag
                countryCode="BR"
                svg
                style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}
                title="Português"
            />

            <ReactCountryFlag
                countryCode="US"
                svg
                style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}
                title="English"
            />

            <ReactCountryFlag
                countryCode="ES"
                svg
                style={{ width: '2rem', height: '2rem', cursor: 'pointer' }}
                title="Español"
            />

        </div>
    );
}
export default HeaderFlags;