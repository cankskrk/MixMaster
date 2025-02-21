import { useRouteError } from "react-router-dom";

const SinglePageError = () => {
  const error = useRouteError() as { message?: string };
  console.log(error);
  return <h2>{error.message}</h2>;
};

export default SinglePageError;
