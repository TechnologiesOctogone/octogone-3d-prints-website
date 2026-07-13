/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useState, useEffect, useRef } from "react";


/**
 * Components
 */
import { ButtonPrimary, ButtonOutline } from "./Button";

/**
 * Hooks
 */
import useOnScreen from "../hooks/on_screen";
import useNavbar from "../hooks/use_navbar";

/**
 * Utils
 */
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";

const heroBannerImage = [
    "images/HeroBanner/PXL_20250125_174117319.MP~3.png",
    "images/HeroBanner/PXL_20250125_174230064.png",
    "images/HeroBanner/PXL_20250125_174341672~2.png",
    "images/HeroBanner/PXL_20250125_174447486~2.png",
];


const Hero = () => {

    const {t} = useTranslation();

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const { setCurrent, current } = useNavbar();

    useEffect(() => {
        if (isVisible && current !== ref)
            setCurrent(document.getElementsByClassName("home")[0]);
    }, [isVisible]);

    const getRandomImage = (images) => {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    
    const [randomImage, setRandomImage] = useState('');

    useEffect(() => {
        setRandomImage(getRandomImage(heroBannerImage));
      }, []);



    return (
        <section id="home" ref={ref} className="pt-24 lg:pt-36">
            <div className="container items-center md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            {t('heroPrintersReady', {count: 2,})}
                        </div>
                    </div>

                    <h2 className=" mt-5 mb-8 lg:mb-10">
                        <Trans i18nKey="heroSlogan">
                            <p className="inline headline-1 ">Open the door of </p>
                            <span className="inline infinite">infinite</span>
                            <p className="inline headline-1"> customizations.</p>
                        </Trans>
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label="heroMainButton"
                            icon="keyboard_double_arrow_right"
                            href="#contact"
                            classes=""
                        />

                        <ButtonOutline
                            label="heroSecondButton"
                            href="#services"
                            icon="arrow_downward"
                            classes=""
                        />
                    </div>
                </div>

                <div className="hidden md:block">
                    <figure>
                        <img
                            className="w-full max-w-[480px] ml-auto rounded-[25px] overflow-hidden"
                            src={randomImage}
                            alt="Hero Cover Image"
                            width={1200}
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;
