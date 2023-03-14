import PokemonGrid from "@/components/PokemonGrid";
import { getAllPokemon } from "@/services/pokeapi";
import { loadingStyles, options } from "@/utils/constants";
import Head from "next/head";
import useSWR from "swr";

export default function Client() {
  const { data: allPokemon } = useSWR("/pokemon", getAllPokemon, options);

  if (!allPokemon) return <div style={loadingStyles}>Loading...</div>;

  return (
    <section>
      <Head>
        <title>Client Side Generation</title>
        <meta name="description" content="Client Side Generated Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonGrid allPokemon={allPokemon} />
    </section>
  );
}
