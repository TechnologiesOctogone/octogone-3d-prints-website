/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useState } from "react";

/**
 * Components
 */
import Logo from "../components/layout/Logo";
import Footer from "../components/layout/Footer";
import FileSection from "../components/request/FileSection";

/**
 * Utils
 */
import i18n from "../utils/i18n";
import { useTranslation } from "react-i18next";

const RequestPage = () => {

    const { t } = useTranslation();
    const [langSwitch, setLangSwitch] = useState("EN"); // The language is in french by default

    const switchLaguage = () => {
        if (langSwitch === "EN") {
            i18n.changeLanguage("en");
            setLangSwitch("FR");
        }
        else {
            i18n.changeLanguage("fr");
            setLangSwitch("EN");
        }
    }

    return (
        <>
            <header className="
                fixed top-0 left-0 w-full
                h-20 flex items-center z-40
                bg-zinc-900"
            >
                <div className="container flex justify-between items-center">
                    <Logo />

                    <div className="flex items-center gap-3">
                        <button className="btn btn-outline" type="submit" onClick={switchLaguage}>{langSwitch}</button>

                        <a href="/" className="btn btn-outline">
                            <span className="material-symbols-rounded">
                                arrow_back
                            </span>
                            <span className="hidden md:inline">{t("backButton")}</span>
                        </a>
                    </div>
                </div>
            </header>

            <main className="container pt-32">
                <h1 className="headline-2">{t("requestPageTitle")}</h1>
                <p className="text-zinc-400 mt-3 mb-10">{t("requestPageDescription")}</p>

                <FileSection />
            </main>

            <Footer homeHref="/" />
        </>
    );
}

export default RequestPage;
