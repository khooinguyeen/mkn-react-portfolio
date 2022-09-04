import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoMKN from '../../assets/images/CHUOI 5.png'
// import LogoS from '../../assets/images/logo-s.png'
// import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons' 
import { faLinkedin, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/mkn-react-portfolio">
            <img src={LogoMKN} alt="logo" />
            {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/mkn-react-portfolio/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/mkn-react-portfolio/about/">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/mkn-react-portfolio/contact/">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.google.com.vn/?hl=vi'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.google.com.vn/?hl=vi'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.google.com.vn/?hl=vi'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.google.com.vn/?hl=vi'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar