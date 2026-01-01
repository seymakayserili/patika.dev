import { useEffect, useState } from "react";
import { getStarships, searchStarships } from "../services/swapi";
import StarshipCard from "../components/StarshipCard";
import SearchBar from "../components/SearchBar";

function Home() {
  const [starships, setStarships] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🔑 TEK YERDEN FETCH
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        if (search.trim() === "") {
          const data = await getStarships(page);
          setStarships(data.results);
          setHasMore(Boolean(data.next));
        } else {
          const data = await searchStarships(search);
          setStarships(data.results);
          setHasMore(false);
        }
      } catch {
        setError("API şu anda erişilemiyor.");
        setStarships([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search, page]);

  const loadMore = () => {
    if (!search) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div>
      <h1>Star Wars Starships</h1>

      <SearchBar value={search} onChange={setSearch} />

      {loading && <p>Yükleniyor...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

     <div className="starship-grid">
  {starships.map((ship) => (
    <StarshipCard key={ship.url} ship={ship} />
  ))}
</div>

     {hasMore && !search && !loading && (
  <div style={{ textAlign: "center", margin: "30px 0" }}>
    <button onClick={loadMore}>Daha Fazla</button>
  </div>
)}

    </div>
  );
}

export default Home;
