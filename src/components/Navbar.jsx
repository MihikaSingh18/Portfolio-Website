import logo from "../assets/assets/logo.jpg";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="#">
                <img src={logo} className="mx-2" width={50} height={33} alt="Logo"/>
            </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/mihika-singh-496244239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/mihikaa_singhh._?igsh=MTJoM2JmM2pxa2k0Yg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
            </a>

            <a href="https://github.com/MihikaSingh18" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>

            <a href="mailto:singhmihika777@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
                <FaEnvelope />
            </a>
        </div>
    </nav>
  );
};

export default NavBar;
