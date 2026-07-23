/**
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone .
 * Toute reproduction, utilisation ou diffusion, partielle ou totale,
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

export const FieldLabel = ({ children, required, error }) => (
    <div className="flex items-center justify-between mb-2">
        <label className="text-zinc-200 text-sm font-semibold">
            {children}
            {required && <span className="text-red-500" aria-hidden="true"> *</span>}
        </label>
        {error && <span className="text-red-400 text-xs font-medium">{error}</span>}
    </div>
);

export const fieldClass = (hasError) => "text-field" + (hasError ? " !ring-red-500 !bg-red-500/10" : "");
