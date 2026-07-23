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
import ContactSection from "../components/request/ContactSection";
import AddressSection from "../components/request/AddressSection";

/**
 * Utils
 */
import i18n from "../utils/i18n";
import { useTranslation } from "react-i18next";
import {
    EMPTY_CONTACT_FIELDS,
    validateContactFields,
    EMPTY_ADDRESS_FIELDS,
    validateAddressFields,
    buildMailtoUrl,
} from "../components/request/requestConfig";

const RequestPage = () => {

    const { t } = useTranslation();
    const langSwitch = i18n.language === "en" ? "FR" : "EN"; // label shows the language you'd switch to
    const [files, setFiles] = useState([]);
    const [contactFields, setContactFields] = useState(EMPTY_CONTACT_FIELDS);
    const [contactExpanded, setContactExpanded] = useState(true);
    const [contactErrors, setContactErrors] = useState({});
    const [addressFields, setAddressFields] = useState(EMPTY_ADDRESS_FIELDS);
    const [addressExpanded, setAddressExpanded] = useState(true);
    const [addressErrors, setAddressErrors] = useState({});

    const switchLaguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "fr" : "en");
    }

    const handleContactFieldChange = (field, value) => {
        setContactFields((prev) => ({ ...prev, [field]: value }));
    };

    const handleContactToggleExpand = () => {
        if (contactExpanded) {
            const errors = validateContactFields(contactFields);
            if (Object.values(errors).some(Boolean)) {
                setContactErrors(errors);
                return;
            }
        }
        setContactErrors({});
        setContactExpanded((prev) => !prev);
    };

    const handleAddressFieldChange = (field, value) => {
        setAddressFields((prev) => ({ ...prev, [field]: value }));
    };

    const handleAddressToggleExpand = () => {
        if (addressExpanded) {
            const errors = validateAddressFields(addressFields);
            if (Object.values(errors).some(Boolean)) {
                setAddressErrors(errors);
                return;
            }
        }
        setAddressErrors({});
        setAddressExpanded((prev) => !prev);
    };

    const handleSubmit = () => {
        const contactValidation = validateContactFields(contactFields);
        const addressValidation = validateAddressFields(addressFields);
        const contactInvalid = Object.values(contactValidation).some(Boolean);
        const addressInvalid = Object.values(addressValidation).some(Boolean);

        if (contactInvalid || addressInvalid) {
            if (contactInvalid) { setContactErrors(contactValidation); setContactExpanded(true); }
            if (addressInvalid) { setAddressErrors(addressValidation); setAddressExpanded(true); }
            return;
        }

        setContactErrors({});
        setAddressErrors({});
        window.location.href = buildMailtoUrl(contactFields, addressFields, files);
    };

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

                <FileSection onFilesChange={setFiles} />

                <ContactSection
                    fields={contactFields}
                    errors={contactErrors}
                    expanded={contactExpanded}
                    onFieldChange={handleContactFieldChange}
                    onToggleExpand={handleContactToggleExpand}
                />

                <AddressSection
                    fields={addressFields}
                    errors={addressErrors}
                    expanded={addressExpanded}
                    onFieldChange={handleAddressFieldChange}
                    onToggleExpand={handleAddressToggleExpand}
                />

                <div className="flex justify-end mt-12">
                    <button type="button" className="btn btn-primary px-8" onClick={handleSubmit}>
                        {t("requestSubmitButton")}
                    </button>
                </div>
            </main>

            <Footer homeHref="/" />
        </>
    );
}

export default RequestPage;
