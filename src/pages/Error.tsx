import { Link, useRouteError } from "react-router-dom";
import img from "../assets/not-found.svg";
import { RouteError } from "../types";

const Error = () => {
  const error = useRouteError() as RouteError;

  if (error.status === 404) {
    return (
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh!</h3>
        <p>We can't seem to find page you are looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    );
  }
  return (
    <div>
      <h3>Something went wrong</h3>
    </div>
  );
};

export default Error;
