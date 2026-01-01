import { Link } from "react-router-dom";

function StarshipCard({ ship }) {
  const id = ship.url.split("/").at(-2);

  return (
    <Link to={`/starship/${id}`} className="starship-card">
      <h3 className="starship-title">{ship.name}</h3>
      <p>
        <strong>Model:</strong> {ship.model}
      </p>
      <p>
        <strong>Max Speed:</strong> {ship.max_atmosphering_speed}
      </p>
    </Link>
  );
}

export default StarshipCard;
