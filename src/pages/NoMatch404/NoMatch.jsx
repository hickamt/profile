import NoMatchIMG from "./peugeot-404.png"

const NoMatch = () => {
  return (
    <>
      <h1 className="page-not-found text-center mt-3">404 Found It!</h1>
      <img
        className="img-404 img-fluid"
        src={NoMatchIMG}
        alt="404 Page Not Found"></img>
    </>
  );
};

export default NoMatch;
