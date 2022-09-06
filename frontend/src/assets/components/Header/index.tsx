import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        < cabeçalho >
            < div className=" dsmeta-logo-container " >
                < img src={logo} alt=" DSMeta " />
                < h1 > DSMeta </ ​​h1 >
                < p >
                    Desenvolvido por
                    < a href=" https://www.instagram.com/devsuperior.ig " > @devsuperior.ig </ a >
                </ p >
            </ div >
        </ cabeçalho >
    )
}

export default Header