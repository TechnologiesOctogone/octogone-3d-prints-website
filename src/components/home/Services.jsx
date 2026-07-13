/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import { useEffect, useRef } from "react";


/**
 * Components
 */
import ServiceCard from "./ServiceCard";

/**
 * Utilities
 */
import { useTranslation } from "react-i18next";

/**
 * Hooks
 */
import useOnScreen from "../hooks/on_screen";
import useNavbar from "../hooks/use_navbar";

const ServicesTree = [
  {
    title: "serviceDesignSectionTitle",
    ServiceList: [
      {
        symbol: "ideation.svg",
        label: "serviceDesignIdeation",
        description:
          "serviceDesignIdeationDescription",
      },
      {
        symbol: "modelisation.svg",
        label: "serviceDesignModeling",
        description:
          "serviceDesignModelingDescription",
      },
      {
        symbol: "material.svg",
        label: "serviceDesigMaterial",
        description:
          "serviceDesigMaterialDescription",
      },
    ],
  },
  {
    title: "servicePrintingSectionTitle",
    ServiceList: [
      {
        symbol: "print_on_demand.svg",
        label: "servicePrintingOnDemand",
        description:
          "servicePrintingOnDemandDescription",
      },
      {
        symbol: "print_on_catalog.svg",
        label: "servicePrintingCatalog",
        description:
          "servicePrintingCatalogDescription",
      },
      {
        symbol: "prototyping.svg",
        label: "servicePrintingPrototyping",
        description:
          "servicePrintingPrototypingDescription",
      },
      {
        symbol: "scale.svg",
        label: "servicePrintingScaling",
        description:
          "servicePrintingScalingDescription",
      },
      {
        symbol: "process.svg",
        label: "servicePrintingPostProcess",
        description:
          "servicePrintingPostProcessDescription",
      },
      {
        symbol: "quality.svg",
        label: "servicePrintingQuality",
        description:
          "servicePrintingQualityDescription",
      },
    ],
  },
  {
    title: "serviceAdvisingSectionTitle",
    ServiceList: [
      /*{
        symbol: "advising.svg",
        label: "serviceAdvisingBusiness",
        description:
          "serviceAdvisingBusinessDescription",
      },*/
      {
        symbol: "training.svg",
        label: "serviceAdvisingTraining",
        description:
          "serviceAdvisingTrainingDescription",
      },
      
      {
        symbol: "design.svg",
        label: "serviceAdvisingDFM",
        description:
          "serviceAdvisingDFMDescription",
      },
      /*{
        symbol: "management.svg",
        label: "Part and Product Management",
        description:
          "TODO",
      },*/
    ],
  },
];

const Services = () => {

  const {t} = useTranslation();

  const ref = useRef(null);
  const isVisible = useOnScreen(ref);
  const { current, setCurrent } = useNavbar();

  useEffect(() => {
    if(isVisible && current !== ref)
        setCurrent(document.getElementsByClassName("services")[0])
}, [isVisible]);

  return (
    <section id="services" className="section" ref={ref}>
      <div className="container">
        <h2 className="headline-2">{t("serviceSectionTitle")}</h2>

        <p className="text-zinc-400 mt-3 mb-8 text-base">
            {t("serviceSectionDescription")}
        </p>

        <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 grid-flow-row ">
          {ServicesTree.map((category) => (
            <div key={category.title} className={ category.title==="servicePrintingSectionTitle" ? "grid row-span-2" :""}>
              <div> {/* J'ai besoins de cette div pour assurer que le span ne sépare pas le titre et la liste sur deux lignes.*/}
                <h3 className="headline-3 mb-2">{t(category.title)}</h3>
                <ul>
                  {category.ServiceList.map((service) => (
                    <li key={service.label}>
                      <ServiceCard
                        key={service.label}
                        symbol={"images/Services/"+service.symbol}
                        label={service.label}
                        description={service.description}
                        classes=""
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
