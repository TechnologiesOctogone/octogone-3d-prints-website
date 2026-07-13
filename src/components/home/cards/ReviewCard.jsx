/** 
 * @copyright Technologies Octogone. Tous droits réservés
 * Ce code est la propriété exclusive de Technologies Octogone . 
 * Toute reproduction, utilisation ou diffusion, partielle ou totale, 
 * sans l'autorisation écrite préalable de Technologies Octogone est strictement interdite.
*/

const ratings=new Array(5);

ratings.fill({
    icon:'star',
});

const ReviewCard = ({
    content,
    imgSrc,
    name,
    company
}) => {
  return (
    <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
        <div className="flex items-center gap-1 mb-3">
            {ratings.map(({icon}, key) => (
                <span 
                    key={key}
                    className="material-symbols-rounded text-yellow-300 text-[18px]"
                >
                    {icon}
                </span>
            ))}
        </div>

        
        <p className="text-zinc-400 mb-8">
            {content}
        </p>

        <div className="flex items-center gap-2 mt-auto">
            <figure className="img-box rounded-lg">
                <img 
                    src={imgSrc} 
                    alt={name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="img-cover"
                />
            </figure>

            <div>
                <p>{name}</p>
                <p className="text-xs text-zinc-400 tracking-wide">{company}</p>
            </div>
        </div>
    </div>
  )
}


export default ReviewCard;