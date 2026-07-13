/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * components
 */
import { ButtonPrimary } from "./Button";

/**
 * Utils
 */
import { useTranslation } from "react-i18next";

const sitemap = [
    {
        label: "navHome",
        href: "#home",
    },
    {
        label: "navServices",
        href: "#services",
    },
    {
        label: "navProjects",
        href: "#projects",
    },
    /*{
        label: "Reviews",
        href: "#reviews",
    },*/
    {
        label: "navContact",
        href: "#contact",
    },
];

const socials = [
    /*{
        label: "GitHub",
        href: "https://www.github.com/",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
    },
    {
        label: "Twitter X",
        href: "https://x.com/",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com",
    },
    {
        label: "Facebook",
        href: "https://www.facebook.com",
    },*/
];

const Footer = () => {

    const {t} = useTranslation();
    
    return (
        <footer className="section">
            <div className="container">
                <div className="lg:grid lg:grid-cols-">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[48ch] ">
                            {t("footerSlogan")}
                        </h2>
                    </div>

                    {/*<div className="grid grid-cols-2 gap-4 lg:pl-60">
                        <div>
                            <p className="mb-2 eveal-up">{t("footerSitemapHeader")}</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a href={href} className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 ">
                                            {t(label)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 ">{t("footerSocialHeader")}</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 "
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>*/}
                </div>

                <div className="flex items-center justify-between pt-10 pb-8 ">
                    <a href="#home" className="logo ">
                        <img
                            src="images/octogone-logo-white.svg"
                            width={40}
                            height={40}
                            alt="Logo"
                        />
                    </a>

                    <p className="text-zinc-500 text-sm">

                        Copyright &copy; {new Date().getFullYear()}{" "}
                        
                        <br />
                        <span className="text-zinc-200">
                            {t("footerCopy")}
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
