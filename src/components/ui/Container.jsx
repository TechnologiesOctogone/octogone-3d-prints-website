/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

const Container = ({ title, children }) => {
    return (
        <section className="mt-12">
            <h2 className="text-2xl font-semibold pb-4 border-b-2 border-zinc-50">
                {title}
            </h2>

            <div className="mt-6 flex flex-col gap-4">
                {children}
            </div>
        </section>
    );
};

export default Container;
