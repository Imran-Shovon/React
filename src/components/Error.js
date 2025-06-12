import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    // console.error(error.error);
  return (
    <div className="error">
      <h1>Oops!</h1>
      <h1>Something went wrong</h1>
      <p>{error.status} {error.statusText}</p>
    </div>
  );
}
export default Error;