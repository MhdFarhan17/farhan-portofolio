import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="container-page pb-24 pt-40">
      <h1 className="text-5xl font-semibold md:text-7xl">Off the map.</h1>
      <p className="mt-4 max-w-md text-lg text-muted">This page does not exist. Head back to base camp.</p>
      <Link to="/" className="btn btn-primary mt-8">
        Back home
      </Link>
    </section>
  );
}
