/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Node Modules
 */
import ImageSwiper from './ImageSwiper';

/**
 * Utils
 */
import { useTranslation } from "react-i18next";

const ProjectModal = ({isVisible, onClose, content}) => {

    const {t} = useTranslation();
    
    if( !isVisible ) return null;

    const handleClose = (e) => {
        if(e.target.id === "wrapper") onClose();
    }

    return (
    <div className="fixed overflow-y-auto inset-0 z-50 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id="wrapper" onClick={handleClose}>
        <div className="container mt-auto lg:mt-0  mb-3">
            <button 
                className="mt-5 w-10 h-10 grid place-items-center bg-zinc-900 rounded-xl ring-inset ring-2 ring-zinc-800 backdrop-blur-2xl hover:bg-zinc-800 transition-[transform,background-color] active:scale-95 mb-2 place-self-end"
                onClick={() => onClose()}
            >
                <span className="material-symbols-rounded">
                    {'close'}
                </span>
            </button>

            <div className="relative p-8 rounded-2xl bg-zinc-900 ring-2 ring-zinc-800">
                <div className="max-w-[520px] mx-auto lg:max-w-full">
                    <h2 className="text-2xl lg:text-4xl w-max-[40ch] mb-4 lg:mb-6">
                        {t(content.title)}
                    </h2>

                    <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-6">
                    {content.tags.map((label, key) => (
                        <span 
                            key={key}
                            className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                        >
                            {t(label)}
                        </span>
                    ))}
                    </div>

                    <div className='lg:flex lg:gap-8' >
                        <ImageSwiper images={content.imgSrc}/>

                        <div>
                            <h3 className="text-2xl lg:text-3xl w-max-[40ch] mt-6 mb-4 lg:mt-0">
                                {t("projectLayoutDescription")}
                            </h3>
                            <p className="text-zinc-300 md:text-lg">
                                {t(content.description)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectModal