import PokemonGrid from "@/components/PokemonGrid";
import { getAllPokemon } from "@/services/pokeapi";
import { TAllPokemonData } from "@/types";

export async function getStaticProps() {
  const allPokemon = await getAllPokemon();

  return {
    props: {
      allPokemon,
    },
  };
}

export default function Static(props: { allPokemon: TAllPokemonData }) {
  const { allPokemon } = props;

  return (
    <div>
      <h1>Static</h1>
      <PokemonGrid allPokemon={allPokemon} />
    </div>
  );
}
