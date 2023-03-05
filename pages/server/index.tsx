import PokemonGrid from "@/components/PokemonGrid";
import { getAllPokemon } from "@/services/pokeapi";
import { TAllPokemonData } from "@/types";

export async function getServerSideProps() {
  const allPokemon = await getAllPokemon();

  return {
    props: {
      allPokemon,
    },
  };
}

export default function Server(props: { allPokemon: TAllPokemonData }) {
  const { allPokemon } = props;

  return (
    <div>
      <h1>Server</h1>
      <PokemonGrid allPokemon={allPokemon} />
    </div>
  );
}
