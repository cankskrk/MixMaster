import { Drink } from "../types";
import CocktailCard from "./CocktailCard";

interface CocktailListProps {
  drinks?: Drink[];
}

const CocktailList = ({ drinks }: CocktailListProps) => {
  if (!drinks) {
    return <h4 className="text-center">No matching cocktails found...</h4>;
  }

  const formattedDrinks = drinks.map((item: Drink) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg mx-auto">
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CocktailList;
