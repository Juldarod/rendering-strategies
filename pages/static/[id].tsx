import PokemonProfile from "@/components/PokemonProfile";
import { getAllPokemon, getPokemon } from "@/services/pokeapi";
import { TPokemonData, TPokemonItem } from "@/types";
import { ParsedUrlQuery } from "querystring";

export async function getStaticPaths() {
  const allPokemon = await getAllPokemon();

  return {
    paths: allPokemon.map((pokemon: TPokemonItem) => {
      const pokemonId = pokemon.url.split("/").at(-2);

      return `/static/${pokemonId}`;
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: ParsedUrlQuery }) {
  const { id } = params;

  const data = await getPokemon(id as string);

  return {
    props: {
      ...data,
    },
  };
}

function StaticPokemon({
  name,
  abilities,
  stats,
  types,
  sprite,
  height,
  weight,
}: TPokemonData) {
  return (
    <PokemonProfile
      name={name}
      abilities={abilities}
      types={types}
      height={height}
      weight={weight}
      stats={stats}
      sprite={sprite}
      renderType="static"
    />
  );
}

export default StaticPokemon;
