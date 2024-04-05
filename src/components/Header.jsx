import logo from '../../src/assets/logo.jpg'

function Header({className}) {
    return(
        <div className={className}>
            <img src={logo} alt="imagem de logo" className={className} />
        </div>
    )
}

export default Header