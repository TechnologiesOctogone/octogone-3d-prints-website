/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            headerButton: "Let's Print",

            navHome: "Home",
            navServices: "Services",
            navProjects: "Projects",
            navContact: "Contact us",


            heroPrintersReady_one: "{{count}} Printer Ready",
            heroPrintersReady_other: "{{count}} Printers Ready",
            heroSlogan:
                '<0 className="inline headline-1">Open the door of </0> <1 className="inline infinite">infinite</1> <2 className="inline headline-1"> customizations.</2>',
            heroMainButton:"Let's Print",
            heroSecondButton: "Our Services",

            aboutDescription:
                "Welcome! Octogone 3D Prints\u2122 is a 3D printing service that offers a complete support and customization experience. Our mission is to promote creativity and technical expertise at every stage of the printing value chain to give you the best journey in the 3D printing world. Quality and control is the cornerstone of our practice to ensure outcomes that meet your expectations.",
            aboutProject: "Project Done",
            aboutYear: "Years of Experience",

            serviceSectionTitle : "Discover our Services",
            serviceSectionDescription : "Discover our range of services to create, innovate, and 3D print your next idea.",

            serviceDesignSectionTitle : "Design",
            serviceDesignIdeation : "Ideation",
            serviceDesignIdeationDescription : "We provide an efficient ideation process to clarify your vision, your needs and what's necessary or not. This first step is mandatory to ensure the final product will meet all the refined specifications and have the best outcomes right from the beginning.",
            serviceDesignModeling : "Technical modelling",
            serviceDesignModelingDescription : "The modelling phase is a state of art process to ensure features, form-factor and design are perfectly balanced. Take advantage of our expertise to create and give life to your perfect idea.",
            serviceDesigMaterial : "Material and Printing Technology Selection",
            serviceDesigMaterialDescription : "3D printed products must meet their purpose in all the possible ways. We carefully select the printing technology and material for every part to ensure the final product will pass all the specifications and satisfy every expectation.",

            servicePrintingSectionTitle : "3D Printing",
            servicePrintingOnDemand : "Print on Demand",
            servicePrintingOnDemandDescription : "Need a unique prototype, a spare part that you can't find, or a personalized gift? Our on-demand 3D printing meets all your needs, whatever your projects.",
            servicePrintingCatalog : "Catalog Printing",
            servicePrintingCatalogDescription : "The 3D printing community is large and creative. If you don't have a printer, we can simply print the file from an online catalog if its license authorized it.",
            servicePrintingPrototyping : "Prototyping",
            servicePrintingPrototypingDescription : "Product design must meet precise specifications. By prototyping the product using 3D printing, it offers a cost effective way to make sure the final product will meet all its objectives.",
            servicePrintingScaling : "Large Scale Printing",
            servicePrintingScalingDescription : "Large scale printing is quite difficult to handle when you have access to few printers. With our production capacity, we can provide a high production rate, without compromise on the quality.",
            servicePrintingPostProcess : "Post Processing",
            servicePrintingPostProcessDescription : "Finishing is often the key to several specifications. If you want a paint finish or use the 3d Printed as a mold , we can finish the parts to specific usages.",
            servicePrintingQuality : "Quality Assurance",
            servicePrintingQualityDescription : "Quality, repeatability and reliability is part of our process foundation. Our personalization service relies on a quality assurance process to make sure every part will satisfy your needs.",

            serviceAdvisingSectionTitle : "Advising",
            serviceAdvisingBusiness : "Business Advising",
            serviceAdvisingBusinessDescription : "By running 3D printing services, we have a strong expertise, and we can provide you with the knowledge and the tools to implement this technology in your day-to-day activities. Therefore, we help organizations take strategic decisions on 3D printing implementation and usage.",
            serviceAdvisingTraining : "Training",
            serviceAdvisingTrainingDescription : "To introduce young people through fun workshops, or increase your technicians' knowledge, we can provide a full training program to anyone who wants to deep dive in this amazing technology.",
            serviceAdvisingDFM : "Design for Printing",
            serviceAdvisingDFMDescription : "Most of the companies want to design their own prototypes or large scale printing products. Did you know there were specific considerations you want to take in account when designing such a model? We can help you have the best experience from the drawing phase.",

            projectsSectionTitle : "Projects Portfolio Highlight",

            projectLayoutDescription : "Project Description",

            projectsLanternTitle : "Decorative lantern - Wedding table",
            projectsLanternTag1 : "Design",
            projectsLanternDescription : "The customer wanted a lantern to decorate her wedding table. She shared her inspirations with us, and we designed the model. The main issue was design for the manufacturing aspect due to complex shapes as each piece is independent to facilitate printing and final use.The 48 lanterns produced are assembled and labeled for all guests. This project made a big impression on us, because although the complexity was moderate, the expectations were high. However, we're proud to have been part of such an important moment in life.",

            projectsMercyTitle : "Mercy & Widowmaker action figure - Overwatch - Blizzard",
            projectsMercyTag1 : "Technology selection",
            projectsMercyDescription : "The customer wanted two large-format figures. We discussed feasibility, as the original file was not suitable for 3D printing. We searched with him through the many catalogs available to find the perfect models! The biggest challenge was to ensure the quality of the prints. Maximizing the build volume of our printers and the considerable quantity of materials involved, every measure was taken to ensure the success of the prints in view of their complex geometry.",

            projectsIPadtitle : "Simplistic iPad support",
            projectsIPadDescription : "The customer wanted a stand for his iPad that was simple and inspired by Apple designs. Unfortunately, the various model catalogs did not offer him a design that he liked and that was well thought out for printing. We suggested that he get as close as possible to the design of the latest iMac and design a stand that would be simple and satisfying to use. The main issue was the hinge, which had to be invisible and functional, and whose angle had to be chosen without jerking. The customer was very surprised by the attention to design and prototyping required to achieve this objective but very satisfied with the results.",

            projectsTrayTitle : "Cable Tray - Parametric Modeling",
            projectsTrayTag1 : "Design",
            projectsTrayDescription : "For an internal need, we developed these parametric wiring trunking systems. Inspired by the best industrial standards, we have major cabling needs. Although they have to be printed in short sections, we can choose precise dimensions and custom transition elements for each of our projects requiring impeccable wiring.",

            projectsBoxTitle : "Decorative Box",
            projectsBoxTag1 : "Material Selection",
            projectsBoxDescription : "We designed these decorative boxes for a customer who wanted to add an original accessory to her interior. She wanted to make sure she could place edibles in them and was concerned that the base material would not be suitable. We concluded that the PLA would be suitably selected, and our printers adapted accordingly. The only contraindication would be liquid products. We ensured the quality of the finished products to avoid any plastic ingestion during use.",

            projectsPhoneTitle : "Lowpoly Phone Stand",
            projectsPhoneDescription : "The customer wanted to offer its employees corporate accessories for the end of the year. We were asked to supply telephone holders with the company logo. We therefore prioritized speed and cost of production, while retaining a wide choice of colors. We therefore designed a low-poly inspired model that highlights the materials used and optimizes printing time. We produced over a hundred pieces for the occasion.",

            contactSectionTitle : "Let's print your next idea!",
            contactSectionDescription : "Reach out today to discuss your needs and start collaborating on something amazing!",
            contactInfo : 'Contact us at: <1 href="mailto:info@octogone3dprints.com" className="text-zinc-400 hover:text-zinc-50">info@octogone3dprints.com</1>  <br />or click on the button below: ',
            contactButton : "Contact us",

            requestPageTitle : "Print Request",
            backButton : "Back",


            footerSlogan: "Start an amazing creative journey!",
            footerSitemapHeader: "Sitemap", // Sitemap details is the same as nav
            footerSocialHeader: "Socials", // Socials details doesn't need to be translated
            footerCopy: "Octagone Technology - All Rights Reserved",
        },
    },
    fr: {
        translation: {
            headerButton: "Imprimez",

            navHome: "Accueil",
            navServices: "Services",
            navProjects: "Projets",
            navContact: "Contact",

            heroPrintersReady_one: "{{count}} imprimante prête",
            heroPrintersReady_other: "{{count}} imprimantes prêtes",
            heroSlogan:
                '<0 className="inline headline-1 ">Ouvrez la porte des </0> <2 className="inline infinite">personnalisations</2> <1 className="inline headline-1"> infinies.</1>',
            heroMainButton:"Imprimez",
            heroSecondButton: "Nos services",

            aboutDescription:
                "Bienvenue ! Octogone 3D Prints\u2122 est un service d'impression 3D qui offre un support complet et une expérience personnalisée. Notre mission est de promouvoir la créativité et l'expertise technique à chaque étape de la chaîne de valeur de l'impression afin de vous offrir le meilleur parcours dans le monde de l'impression 3D. La qualité et le contrôle sont la pierre angulaire de notre pratique afin de garantir des résultats à la hauteur de vos attentes.",
            aboutProject: "Projets réalisés",
            aboutYear: "Années d'expérience",

            serviceSectionTitle : "Découvrez nos services",
            serviceSectionDescription : "Découvrez notre gamme de services pour créer, innover et imprimer en 3D votre prochaine idée.",

            serviceDesignSectionTitle : "Conception",
            serviceDesignIdeation : "Idéation",
            serviceDesignIdeationDescription : "Nous proposons un processus d'idéation efficace pour clarifier votre vision, vos besoins et ce qui est nécessaire ou non. Cette première étape est obligatoire pour garantir que le produit final répondra à toutes les spécifications et produira les meilleurs résultats dès le début.",
            serviceDesignModeling : "Modélisation technique",
            serviceDesignModelingDescription : "La phase de modélisation est un processus méthodique qui garantit un équilibre parfait entre fonctionnalités, forme et le design. Profitez de notre expertise pour créer et donner vie à votre imagination.",
            serviceDesigMaterial : "Sélection des matériaux et des technologies d'impression",
            serviceDesigMaterialDescription : "Les produits imprimés en 3D doivent répondre à leur objectif de toutes les manières possibles. Nous sélectionnons soigneusement la technologie d'impression et le matériau de chaque pièce pour garantir que le produit final répondra à toutes les spécifications et satisfera toutes les attentes.",

            servicePrintingSectionTitle : "Impression 3D",
            servicePrintingOnDemand : "Impression à la demande",
            servicePrintingOnDemandDescription : "Besoin d'un prototype unique, d'une pièce détachée introuvable ou d'un cadeau personnalisé ? Notre impression 3D à la demande répond à tous vos besoins, quels que soient vos projets.",
            servicePrintingCatalog : "Impression par catalogues",
            servicePrintingCatalogDescription : "La communauté de l'impression 3D est vaste et créative. Si vous n'avez pas d'imprimante, nous pouvons simplement imprimer le fichier à partir d'un catalogue en ligne si sa licence l'autorise.",
            servicePrintingPrototyping : "Prototypage",
            servicePrintingPrototypingDescription : "La conception d'un produit doit répondre à des spécifications précises. Le prototypage du produit à l'aide de l'impression 3D offre une solution rentable pour garantir que le produit final répondra à tous ses objectifs.",
            servicePrintingScaling : "Impression à grande échelle",
            servicePrintingScalingDescription : "L'impression à grande échelle est assez difficile à gérer lorsque vous n'avez accès qu'à quelques imprimantes. Grâce à notre capacité de production, nous pouvons fournir un taux de production élevé, sans compromis sur la qualité.",
            servicePrintingPostProcess : "Post-traitement",
            servicePrintingPostProcessDescription : "La finition est souvent la clé de plusieurs spécifications. Si vous souhaitez une finition de peinture ou utiliser l'impression 3D comme moule, nous pouvons finir les pièces pour des utilisations spécifiques.",
            servicePrintingQuality : "Assurance qualité",
            servicePrintingQualityDescription : "La qualité, la répétabilité et la fiabilité font partie intégrante de notre processus. Notre service de personnalisation s'appuie sur un processus d'assurance qualité pour garantir que chaque pièce répondra à vos besoins.",

            serviceAdvisingSectionTitle : "Conseil",
            serviceAdvisingBusiness : "Conseil d'affaire",
            serviceAdvisingBusinessDescription : "En proposant des services d'impression 3D, nous disposons d'une solide expertise et pouvons vous fournir les connaissances et les outils nécessaires pour mettre en œuvre cette technologie dans vos activités quotidiennes. Par conséquent, nous aidons les organisations à prendre des décisions stratégiques sur la mise en œuvre et l'utilisation de l'impression 3D.",
            serviceAdvisingTraining : "Formations",
            serviceAdvisingTrainingDescription : "Pour initier les plus jeunes à travers des ateliers ludiques, ou pour accroître les connaissances de vos techniciens, nous pouvons proposer un programme de formation complet à tous ceux qui souhaitent s'immerger dans cette technologie étonnante.",
            serviceAdvisingDFM : "Conception pour l'impression",
            serviceAdvisingDFMDescription : "La plupart des entreprises souhaitent concevoir leurs propres prototypes ou produits d'impression à grande échelle. Saviez-vous qu'il y avait des considérations spécifiques à prendre en compte lors de la conception d'un tel modèle ? Nous pouvons vous aider à tirer le meilleur parti de la phase de dessin.",

            projectsSectionTitle : "Projets en vedette",

            projectLayoutDescription : "Description du Projet",

            projectsLanternTitle : "Lanterne décorative - Table de Mariage",
            projectsLanternTag1 : "Conception",
            projectsLanternDescription : "La cliente voulait une lanterne afin de décorer sa table de mariage. Elle nous a partagé ses inspirations et nous avons dessiné ce modèle. L’enjeu principal était le design pour la fabrication, car chaque pièce est indépendante pour faciliter l’impression et l’utilisation finale. Les 48 lanternes produites sont assemblées et étiquetées pour l’ensemble des invités. Ce projet nous a marqué, car même si la complexité est modérée, les attentes étaient hautes. Cependant, nous sommes fiers d’avoir participé à un moment aussi important de la vie.",

            projectsMercyTitle : "Figurine Mercy & Widowmaker - Overwatch Blizzard",
            projectsMercyTag1 : "Sélection de la technologie",
            projectsMercyDescription : "Le client voulait deux figurines au format large. Nous avons discuté de la faisabilité, car le fichier original ne se prêtait pas à l’impression 3D. Nous avons cherché avec lui dans les nombreux catalogues qui existent afin de dénicher les modèles parfaits ! Le plus grand défi était d’assurer la qualité des impressions. Maximisant le volume de nos imprimantes, la quantité de matériaux non négligeable, toutes les mesures ont été prises afin d’assurer le succès des impressions au vu de leur géométrie complexe.",

            projectsIPadtitle : "Support iPad Simpliste",
            projectsIPadDescription : "Le client souhaitait un support pour son iPad qui soit simple et inspiré des designs d’Apple. Malheureusement, les différents catalogues de modèles ne lui proposaient pas de design qui lui plaisait et qui soit bien pensé pour l’impression. Nous lui avons proposé de se rapprocher au maximum du design de l’iMac le plus récent pour dessiner un support qui soit simple et satisfaisant à utiliser. L’enjeu principal était la charnière qui doit être invisible, fonctionnelle et dont l’angle doit être choisi sans à-coups. Le client a été très surpris de l’attention portée au design et aux prototypages nécessaires pour atteindre cet objectif mais très satisfait du résultat final.",

            projectsTrayTitle : "Goulotte de câblage sur mesure",
            projectsTrayTag1 : "Design",
            projectsTrayDescription : "Pour un besoin interne, nous avons développé ces goulottes de câblage paramétriques. Inspiré des meilleurs standards industriels, nous avons de grands besoins de câblage. Bien qu’elles doivent être imprimées en courte section, nous pouvons choisir les dimensions précises et des éléments de transition sur mesure pour chacun de nos projets nécessitant un câblage impeccable.",

            projectsBoxTitle : "Boite décorative ",
            projectsBoxTag1 : "Sélection des matériaux ",
            projectsBoxDescription : "Nous avons dessiné ces boîtes décoratives pour une cliente qui souhaitait ajouter un accessoire original dans son intérieur. Elle voulait s’assurer de pouvoir y déposer des comestibles et s’inquiétait que le matériau de base ne soit pas adapté. Nous avons conclu que le PLA serait sélectionné adéquatement et que nos imprimantes seraient adaptées en conséquence. La seule contre-indication serait les produits liquides. Nous nous sommes assurés de la qualité des produits finis pour éviter toute ingestion de plastique lors de l’utilisation.",

            projectsPhoneTitle : "Support téléphone Lowpoly",
            projectsPhoneDescription : "Le client souhaitait offrir à ses employés des accessoires à l’image de l’entreprise pour la fin d’année. Nous avons été contactés pour des supports de téléphone avec le logo de l’entreprise. Nous avons donc mis la priorité sur la rapidité et les coûts de production en conservant un large choix de couleurs. Nous avons donc dessiné un modèle d’inspiration low-poly qui met bien en relief les matériaux utilisés et optimise le temps d’impression. Nous avons produit plus d’une centaine de pièces pour l’occasion.",


            contactSectionTitle : "Imprimons votre prochaine idée !",
            contactSectionDescription : "Contactez-nous dès aujourd'hui pour discuter de vos besoins et commencer à collaborer sur quelque chose d'extraordinaire !",
            contactInfo : 'Contactez nous à : <1 href="mailto:info@octogone3dprints.com" className="text-zinc-400 hover:text-zinc-50">info@octogone3dprints.com</1>  <br />Ou cliquez sur le bouton ci-dessous : ',
            contactButton : "Contactez nous",

            requestPageTitle : "Demande d'impression",
            backButton : "Retour",


            footerSlogan: "Commencez un incroyable voyage créatif !",
            footerSitemapHeader: "Plan du site", // Sitemap details is the same as nav
            footerSocialHeader: "Réseaux", // Socials details doesn't need to be translated
            footerCopy: "Technologies Octogone - Tous droits réservés",
        },
    },
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "fr", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
