/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Utils
 */
import { useTranslation } from "react-i18next";

const aboutItems = [
    {
        label: "aboutProject",
        number: 23
    },
    {
        label: "aboutYear",
        number: 5
    }
];

const About = () => {

    const {t} = useTranslation();

  return (
    <section 
        id="about"
        className="section"
    >
        <div className="container">
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
                <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[70ch]"> {t("aboutDescription")}</p>

                <div className="flex flex-wrap items-center gap-4 md:gap-7">
                    {
                        aboutItems.map(({label, number}, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-3xl">{number}</span>
                                    <span className="text-sky-400 font-bold md:text-3xl">+</span>
                                </div>

                                <p className="text-sm text-zinc-400">{t(label)}</p>
                            </div>
                        ))
                    }

                    <img 
                        src="images/octogone-logo-white.svg"
                        alt="Logo"
                        width={30}
                        height={30}
                        className="ml-auto md:w-[40px] md:h-[40px]"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About