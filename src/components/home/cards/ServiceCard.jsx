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
 * Utils
 */
import { useTranslation } from "react-i18next";


const ServiceCard = ({
    symbol,
    label,
    description,
    classes
}) => {

    const {t} = useTranslation();

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <button className={"grid w-full grid-cols-[3rem,auto,3rem] gap-3 mb-2 transition-colors ring-2 ring-inset text-left text-lg ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 " + classes}

            onClick={() => { toggleDropdown() }}>

                <div className="w-12 h-12 m-auto p-1 rounded-lg overflow-hidden">
                    <img src={symbol} alt={symbol} className="w-10 m-auto"/>
                </div>

                <h3 className="max-w[60ch] mt-auto mb-auto">{t(label)}</h3>

            
                <span className="material-symbols-rounded m-auto">
                    {isOpen ? "arrow_drop_up" : "arrow_drop_down"};
                </span>

            {isOpen ? 
            <p className="text-base col-start-1 mb-2 sm:col-start-2 col-span-3 sm:col-span-1 p-1 sm:p-0 max-w[60ch] text-zinc-400 overflow-hidden">
                    {t(description)}
            </p>
            :""
}

        </button>
    )
}


export default ServiceCard;