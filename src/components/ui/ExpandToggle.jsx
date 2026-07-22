/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

const ExpandToggle = ({ expanded, label, onClick, collapsedRotationClass = "" }) => (
    <button
        type="button"
        aria-label={label}
        onClick={onClick}
        className="w-8 h-8 grid place-items-center rounded-lg hover:bg-zinc-800 shrink-0"
    >
        <span className={"material-symbols-rounded transition-transform duration-300 " + (expanded ? "-rotate-90" : collapsedRotationClass)}>
            chevron_right
        </span>
    </button>
);

export default ExpandToggle;
