/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

const Logo = ({ href = "/" }) => {
    return (
        <a href={href} className="logo flex items-center gap-3">
            <img
                src="images/octogone-logo-white.svg"
                alt="Octogone 3D Prints Logo"
                width={44}
                height={44}
            />
            <div>
                <p className="text-lg font-medium leading-tight">Octogone</p>
                <p className="text-xs text-zinc-400 leading-tight">3D Prints</p>
            </div>
        </a>
    );
}

export default Logo;
