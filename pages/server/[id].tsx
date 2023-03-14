import PokemonProfile from "@/components/PokemonProfile";
import { getPokemon } from "@/services/pokeapi";
import { TPokemonData } from "@/types";
import { ParsedUrlQuery } from "querystring";

export async function getServerSideProps({
  params,
}: {
  params: ParsedUrlQuery;
}) {
  const { id } = params;

  const data = await getPokemon(id as string);

  return {
    props: {
      ...data,
    },
  };
}

function ServerSidePokemon({
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
      renderType="server"
    />
  );
}

export default ServerSidePokemon;
