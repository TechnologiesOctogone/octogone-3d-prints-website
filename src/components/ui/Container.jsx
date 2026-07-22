/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

/**
 * Components
 */
import ExpandToggle from "./ExpandToggle";

const Container = ({ title, children, collapsible = false, expanded = true, onToggleExpand, toggleLabel }) => {
    return (
        <section className="mt-12">
            <div className="flex items-center justify-between pb-4 border-b-2 border-zinc-50">
                <h2 className="text-2xl font-semibold">
                    {title}
                </h2>

                {collapsible && (
                    <ExpandToggle expanded={expanded} onClick={onToggleExpand} label={toggleLabel} collapsedRotationClass="rotate-90" />
                )}
            </div>

            <div className="mt-6 flex flex-col gap-4">
                {children}
            </div>
        </section>
    );
};

export default Container;
