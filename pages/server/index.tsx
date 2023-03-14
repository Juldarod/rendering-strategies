import PokemonGrid from "@/components/PokemonGrid";
import { getAllPokemon } from "@/services/pokeapi";
import { TAllPokemonData } from "@/types";
import Head from "next/head";

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
    <section>
      <Head>
        <title>Server Side Generation</title>
        <meta name="description" content="Server Side Generated Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonGrid allPokemon={allPokemon} />
    </section>
  );
}
