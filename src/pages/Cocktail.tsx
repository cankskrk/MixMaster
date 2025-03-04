import axios from "axios";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

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
  const { id, data } = useLoaderData() as { id: string; data: undefined }; // Explicit type assertion

  return (
    <div>
      <h1>Cocktail ID: {id}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Cocktail;
