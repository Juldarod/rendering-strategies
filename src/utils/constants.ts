export const API_URL = "https://pokeapi.co/api/v2";

export const options = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
};

export const kanto = "?offset=0&limit=151";
export const johto = "?offset=151&limit=100";

export const loadingStyles = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: '3rem',
  fontWeight: 500,
};