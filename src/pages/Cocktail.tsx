import axios from "axios";
import { Link, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { LoaderData } from "./types";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params;

  if (!id) {
    throw new Response("Not Found", { status: 404 });
  }

  const { data } = await axios.get(
    `${import.meta.env.VITE_COCKTAIL_ID_URL}${id}`
  );

  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData() as LoaderData;

  const singleDrink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructuions,
  } = singleDrink;

  return (
    <div>
      <header className="text-center">
        <Link
          to="/"
          className="bg-indigo-600 hover:bg-indigo-800 text-white p-3 rounded-xl"
        >
          Back Home
        </Link>
        <h3 className="text-3xl my-10">{name}</h3>
      </header>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-center mt-8 px-4 gap-8">
        <img src={image} alt={name} className="rounded-lg w-full max-w-lg" />

        <div className="mt-6 md:mt-0 space-y-4 max-w-lg w-full md:text-left">
          <p className="font-bold">
            <span className="bg-indigo-400 text-indigo-600 rounded-md p-1 mr-2">
              Name:
            </span>
            {name}
          </p>
          <p className="font-bold">
            <span className="bg-indigo-400 text-indigo-600 rounded-md p-1 mr-2">
              Category:
            </span>
            {category}
          </p>
          <p className="font-bold">
            <span className="bg-indigo-400 text-indigo-600 rounded-md p-1 mr-2">
              Info:
            </span>
            {info}
          </p>
          <p className="font-bold">
            <span className="bg-indigo-400 text-indigo-600 rounded-md p-1 mr-2">
              Glass:
            </span>
            {glass}
          </p>
          <p className="font-bold">
            <span className="bg-indigo-400 text-indigo-600 rounded-md p-1 mr-2">
              Instructions:
            </span>
            {instructuions}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cocktail;
