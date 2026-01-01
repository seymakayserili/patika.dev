const BASE_URL = "https://swapi.py4e.com/api";

export const getStarships = async (page = 1) => {
  const res = await fetch(`${BASE_URL}/starships/?page=${page}`);
  return res.json();
};

export const searchStarships = async (query) => {
  const res = await fetch(`${BASE_URL}/starships/?search=${query}`);
  return res.json();
};

export const getStarshipById = async (id) => {
  const res = await fetch(`${BASE_URL}/starships/${id}/`);
  return res.json();
};
