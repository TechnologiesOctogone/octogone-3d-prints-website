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

/**
 * Primary Button
 */

const ButtonPrimary = ({
    href,
    target='_self',
    label,
    icon,
    classes=""
}) => {

    const {t} = useTranslation();

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary" + classes}
            >
                {t(label)}
                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary" + classes}>
                {t(label)}
                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                : undefined
                }
            </button>
        )
    }
}


/**
 * Outline Button
 */

const ButtonOutline = ({
    href,
    target='_self',
    label,
    icon,
    classes
}) => {

    const {t} = useTranslation();

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline" + classes}
            >
                {t(label)}
                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline" + classes}>
                {t(label)}
                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                : undefined
                }
            </button>
        )
    }
}

export {
    ButtonPrimary,
    ButtonOutline
}