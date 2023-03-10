import PokemonItem from "@/components/PokemonItem";
import { TAllPokemonData } from "@/types";
import { Fragment } from "react";

import styles from "@/styles/PokemonGrid.module.scss";

function PokemonGrid({ allPokemon }: { allPokemon: TAllPokemonData }) {
  return (
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
  );
}

export default PokemonGrid;
