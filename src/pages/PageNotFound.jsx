import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <main className="not-found">
      <h1>Lost in space</h1>
      <p>This page does not exist.</p>
      <Link to="/" className="btn">
        Back to home
      </Link>
    </main>
  );
}

export default PageNotFound;
