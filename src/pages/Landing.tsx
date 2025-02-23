import { useLoaderData } from "react-router-dom";
import axios from "axios";
import CocktailList from "../components/CocktailList";

export const loader = async () => {
  const searchTerm = "a";
  const response = await axios.get(
    `${import.meta.env.VITE_COCKTAIL_SEARCH_URL}${searchTerm}`
  );
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  const { drinks } = useLoaderData();
  console.log(drinks);

  return (
    <>
      <CocktailList drinks={drinks} />
    </>
  );
};

export default Landing;
