import PokemonGrid from "@/components/PokemonGrid";
import { getAllPokemon } from "@/services/pokeapi";
import { options } from "@/utils/constants";
import useSWR from "swr";

export default function Client() {
  const { data: allPokemon } = useSWR("/pokemon", getAllPokemon, options);

  if (!allPokemon) return <div>Loading...</div>;

  return (
    <div>
      <h1>Client</h1>
      <PokemonGrid allPokemon={allPokemon} />
    </div>
  );
}
