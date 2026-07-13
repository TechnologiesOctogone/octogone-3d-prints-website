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

const CtaBanner = () => {

    const { t } = useTranslation();

    return (
        <section className="section">
            <div className="container">
                <h2 className="headline-1 mb-8 lg:max-w-[48ch]">
                    {t("footerSlogan")}
                </h2>
            </div>
        </section>
    );
}

export default CtaBanner;
