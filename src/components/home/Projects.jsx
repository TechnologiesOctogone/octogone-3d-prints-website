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
import ProjectCard from "./ProjectCard";

/**
 * Hooks
 */
import useOnScreen from "../hooks/on_screen";
import useNavbar from "../hooks/use_navbar";

/**
 * Utils
 */
import { useTranslation } from "react-i18next";



const projects = [
    {
        imgSrc: [
            "images/Projects/Wedding_Lantern/PXL_20240420_215908948.MP.jpg",
            "images/Projects/Wedding_Lantern/PXL_20240420_220034625.MP.jpg",
            "images/Projects/Wedding_Lantern/PXL_20240420_215901978.jpg",
            "images/Projects/Wedding_Lantern/PXL_20240420_215858312.MP.jpg",
        ],
        title: "projectsLanternTitle",
        tags: ["projectsLanternTag1", "servicePrintingOnDemand", "servicePrintingPostProcess"],
        description:
            "projectsLanternDescription",
    },
    {
        imgSrc: [
            "images/Projects/Overwatch_Figurine/PXL_20250107_001127574.PORTRAIT.jpg",
            "images/Projects/Overwatch_Figurine/PXL_20250107_001024401.PORTRAIT~2.jpg",
            "images/Projects/Overwatch_Figurine/PXL_20250107_000934090.PORTRAIT.jpg",
            "images/Projects/Overwatch_Figurine/PXL_20250107_001229298.PORTRAIT.jpg",
        ],
        title: "projectsMercyTitle",
        tags: ["projectsMercyTag1", "servicePrintingCatalog", "servicePrintingQuality"],
        description:
            "projectsMercyDescription",
    },
    {
        imgSrc: [
            "images/Projects/iPad_Stand/PXL_20250107_020010338.PORTRAIT.jpg",
            "images/Projects/iPad_Stand/PXL_20250107_020223840.PORTRAIT.jpg",
            "images/Projects/iPad_Stand/PXL_20250107_020230083.PORTRAIT.jpg",
            "images/Projects/iPad_Stand/PXL_20250107_015102353.PORTRAIT~2.jpg",
            "images/Projects/iPad_Stand/PXL_20250107_015157631.PORTRAIT.ORIGINAL.jpg",
            "images/Projects/iPad_Stand/PXL_20250107_015349375.PORTRAIT.ORIGINAL.jpg",
            "images/Projects/iPad_Stand/PXL_20250107_015354981.PORTRAIT.ORIGINAL.jpg",
        ],
        title: "projectsIPadtitle",
        tags: ["serviceDesignIdeation", "serviceDesignModeling", "servicePrintingPrototyping", "servicePrintingQuality"],
        description:
            "projectsIPadDescription",
    },
    {
        imgSrc: [
            "images/Projects/Cable_Tray/PXL_20240420_215007536.MP.jpg",
            "images/Projects/Cable_Tray/PXL_20240420_214732915.jpg",
            "images/Projects/Cable_Tray/PXL_20240420_215142424.jpg",
            "images/Projects/Cable_Tray/PXL_20240420_215532470.MP.jpg",
            "images/Projects/Cable_Tray/PXL_20240420_215317136.jpg",
            "images/Projects/Cable_Tray/PXL_20240420_215219113.jpg",
        ],
        title: "projectsTrayTitle",
        tags: ["serviceDesignModeling", "servicePrintingPrototyping", "servicePrintingScaling", "projectsTrayTag1"],
        description:
            "projectsTrayDescription",
    },
    {
        imgSrc: [
            "images/Projects/Box_Screwable_Lid/PXL_20240420_183530319.jpg",
            "images/Projects/Box_Screwable_Lid/PXL_20240420_190127786.MP.jpg",
            "images/Projects/Box_Screwable_Lid/PXL_20240420_185814659.MP.jpg",
            "images/Projects/Box_Screwable_Lid/PXL_20240420_183530319.jpg",
            "images/Projects/Box_Screwable_Lid/PXL_20240420_182518055.jpg",
            "images/Projects/Box_Screwable_Lid/PXL_20240420_183107582.jpg",
            "images/Projects/Box_Screwable_Lid/PXL_20240420_183159801.jpg",
        ],
        title: "projectsBoxTitle",
        tags: ["projectsBoxTag1", "servicePrintingOnDemand", "servicePrintingQuality"],
        description:
            "projectsBoxDescription",
    },
    {
        imgSrc: [
            "images/Projects/Phone_Stand/PXL_20240420_220334158.MP.jpg",
            "images/Projects/Phone_Stand/PXL_20240420_220417956.jpg",
            "images/Projects/Phone_Stand/PXL_20240420_220445203.jpg",
        ],
        title: "projectsPhoneTitle",
        tags: ["serviceDesignIdeation", "servicePrintingScaling", "servicePrintingOnDemand"],
        description:
            "projectsPhoneDescription",
    },
];

const Projects = ({ setShowModal, setModalContent }) => {

    const {t} = useTranslation();

    const ref = useRef(null);
    const isVisible = useOnScreen(ref);
    const { current, setCurrent } = useNavbar();

    useEffect(() => {
        if(isVisible && current !== ref)
            setCurrent(document.getElementsByClassName("projects")[0])
    }, [isVisible]);

    return (
        <section ref={ref} id="projects" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 ">
                    {t("projectsSectionTitle")}
                </h2>

                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {projects.map(
                        ({ imgSrc, title, tags, description }, key) => (
                            <ProjectCard
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                description={description}
                                setShowModal={setShowModal}
                                setModalContent={setModalContent}
                                classes=""
                            />
                        )
                    )}
                </div>
            </div>
        </section>
    );
};

export default Projects;
