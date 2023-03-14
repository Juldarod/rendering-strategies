import PokemonProfile from "@/components/PokemonProfile";
import { getAllPokemon, getPokemon } from "@/services/pokeapi";
import { TPokemonItem } from "@/types";
import { loadingStyles, options } from "@/utils/constants";
import { getIdFromUrl } from "@/utils/util";
import { ParsedUrlQuery } from "querystring";
import useSWR from "swr";

export async function getStaticPaths() {
  const allPokemon = await getAllPokemon();

  return {
    paths: allPokemon.map(({ url }: TPokemonItem) => {
      const pokemonId = getIdFromUrl(url);
      return `/client/${pokemonId}`;
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: ParsedUrlQuery }) {
  const { id } = params;

  return {
    props: {
      id,
    },
  };
}

function ClientPokemon({ id }: { id: string }) {
  const { data: pokemon } = useSWR(id, getPokemon, options);

  if (!pokemon) return <div style={loadingStyles}>Loading...</div>;

  const { name, abilities, stats, types, sprite, height, weight } = pokemon;

  return (
    <PokemonProfile
      name={name}
      abilities={abilities}
      types={types}
      height={height}
      weight={weight}
      stats={stats}
      sprite={sprite}
      renderType="client"
    />
  );
}

export default ClientPokemon;
