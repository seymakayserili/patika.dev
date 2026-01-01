import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getStarshipById } from "../services/swapi";

function StarshipDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ship, setShip] = useState(null);

  useEffect(() => {
    getStarshipById(id).then(setShip);
  }, [id]);

  if (!ship) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => navigate("/")}>← Geri</button>

      <h1>{ship.name}</h1>
      <p><strong>Model:</strong> {ship.model}</p>
      <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
      <p><strong>Passengers:</strong> {ship.passengers}</p>
      <p><strong>Crew:</strong> {ship.crew}</p>
      <p><strong>Max Speed:</strong> {ship.max_atmosphering_speed}</p>
      <p><strong>Cargo Capacity:</strong> {ship.cargo_capacity}</p>
    </div>
  );
}

export default StarshipDetail;
