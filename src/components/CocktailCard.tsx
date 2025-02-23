import { Link } from "react-router-dom";
import { CocktailCardType } from "../types";

const CocktailCard = ({ image, name, id, info, glass }: CocktailCardType) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white">
      <img className="w-full h-56 object-cover" src={image} alt={name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-600 mt-2">{info}</p>
        <p className="text-gray-500 text-sm mt-1">Glass: {glass}</p>
      </div>
      <div className="p-4">
        <Link
          to={`/cocktail/${id}`}
          className="text-indigo-600 hover:text-indigo-800"
        >
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default CocktailCard;
