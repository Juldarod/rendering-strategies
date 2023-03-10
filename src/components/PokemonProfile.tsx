import { TPokemonData } from "@/types";
import Image from "next/image";
import { useId } from "react";

import styles from "@/styles/PokemonProfile.module.scss";

function PokemonProfile({
  name,
  abilities,
  types,
  stats,
  height,
  weight,
  sprite,
}: TPokemonData) {
  const typeId = useId();
  const abilityId = useId();
  const statId = useId();

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <h1 className={styles.name}>{name}</h1>
        <Image src={sprite} alt={name} width={300} height={300} />
        <ul className={styles.types}>
          {types.map((type) => (
            <li key={`${type}-${typeId}`}>{type}</li>
          ))}
        </ul>
      </div>
      <div className={styles.info}>
        <ul className={styles.abilities}>
          {abilities.map((ability) => (
            <li key={`${ability.name}-${abilityId}`} className={styles.ability}>
              {ability.name}
              {": "}
              {ability.description}
            </li>
          ))}
        </ul>
        <div className={styles.size}>Height: {height}</div>
        <div className={styles.size}>Weight: {weight}</div>
        <ul className={styles.stats}>
          {stats.map((stat) => (
            <li key={`${stat.name}-${statId}`}>
              <span>{stat.name}</span>
              {": "}
              <span>{stat.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonProfile;
