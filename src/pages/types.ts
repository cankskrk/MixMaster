export interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  strAlcoholic: string;
  strCategory: string;
  strGlass: string;
  strInstructions: string;
  // …plus all the ingredient fields
}

export interface LoaderData {
  id: string;
  data: { drinks: Drink[] };
}
