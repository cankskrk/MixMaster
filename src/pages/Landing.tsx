import { useLoaderData } from "react-router-dom";
import axios from "axios";

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

  return <div>Landing</div>;
};

export default Landing;
