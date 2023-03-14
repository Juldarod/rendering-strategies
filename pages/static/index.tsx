import PokemonGrid from "@/components/PokemonGrid";
import { getAllPokemon } from "@/services/pokeapi";
import { TAllPokemonData } from "@/types";
import Head from "next/head";

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
    <section>
      <Head>
        <title>Static Site Generation</title>
        <meta name="description" content="Static Site Generated Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PokemonGrid allPokemon={allPokemon} />
    </section>
  );
}
