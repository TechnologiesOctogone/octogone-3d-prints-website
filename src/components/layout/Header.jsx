/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Nodes Modules
 */
import { useState } from "react"

/**
 * Components
 */
import Navbar from "./Navbar"

/**
 * Utils
 */
import i18n from "../utils/i18n";
import { useTranslation } from "react-i18next";

const Header = () => {

    const [navOpen, setNavOpen] = useState(false);
    const [langSwitch, setLangSwitch] = useState("EN"); // The language is in french by default
    const {t} = useTranslation();

    const switchLaguage = () => {
        if(langSwitch === "EN") {
            i18n.changeLanguage("en");
            setLangSwitch("FR");
        }
        else {
            i18n.changeLanguage("fr");
            setLangSwitch("EN");
        }
    }

  return (

    <header className="
        fixed top-0 left-0 w-full 
        h-20 flex items-center z-40
        bg-zinc-900"
    >
        <div className="
            container
            flex justify-between items-center
            md:grid md:grid-cols-[1fr,3fr,2fr]"
        >
            <h1>
                <a
                    href="#home"
                    className="logo"
                >
                    <img 
                        src="images/octogone-logo-full-white.svg"
                        alt="Octogone 3D Prints Logo"
                        width={140}
                        height={140}
                    />
                </a>
            </h1>

            <button className="md:hidden btn btn-outline" type="submit" onClick={switchLaguage}>{langSwitch}</button>

            <div className="
                relative
                md: justify-self-center">
                <button 
                    className="menu-btn md:hidden"
                    onClick={() => setNavOpen((prev) => !prev)}
                >
                    <span className="material-symbols-rounded">
                        {navOpen ? 'close' : 'menu'}
                    </span>

                </button>

                <Navbar navOpen={navOpen} />
            </div>

            <div className="max-md:hidden flex justify-end gap-8 ">

                <button className="btn btn-outline" type="submit" onClick={switchLaguage}>{langSwitch}</button>

                <a
                    href="#contact"
                    className="btn btn-secondary md:justify-self-end"
                >
                    {t("headerButton")}
                    <span className="material-symbols-rounded">
                        keyboard_double_arrow_right
                    </span>
                    
                </a>
            </div>

           
            
        </div>
    </header>
  )
}

export default Header