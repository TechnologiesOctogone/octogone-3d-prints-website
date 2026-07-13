/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/


/**
 * Node Module
 */
import React from "react";

function NotFound() {
    return (
        <div className="max-w-[240px] mx-auto pt-12 text-center">
            <img
                src="images/octogone-logo-full-white.svg"
                alt="Octogone 3D Prints Logo"
                className="pl-8 mt-12"
                width={180}
                height={180}
            />
            <h1 className="text-sky-400 text-center mt-5 text-2xl">Page not found (404)</h1>
            <p className="text-zinc-400  mt-2">The page you are looking for does not exist.</p>
            <a
                href="/"
                className="mt-5 mx-auto btn btn-secondary"
            >
                Return to the Homepage
                <span className="material-symbols-rounded">
                    keyboard_double_arrow_right
                </span>
                
            </a>
        </div>
    );
}

export default NotFound;
