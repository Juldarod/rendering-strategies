import PokemonItem from "@/components/PokemonItem";
import styles from "@/styles/PokemonGrid.module.scss";
import { TAllPokemonData } from "@/types";
import Link from "next/link";
import { Fragment } from "react";

function PokemonGrid({ allPokemon }: { allPokemon: TAllPokemonData }) {
  return (
    <>
      <h1 className={styles.h1}>
        <Link href="/">Pokédex</Link>
      </h1>
      <ul className={styles.container}>
        {allPokemon.map((pokemon) => (
          <Fragment key={pokemon.name}>
            <PokemonItem
              name={pokemon.name}
              url={pokemon.url}
              sprite={pokemon.sprite}
            />
          </Fragment>
        ))}
      </ul>
    </>
  );
}

export default PokemonGrid;
