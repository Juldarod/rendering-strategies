import styles from "@/styles/PokemonProfile.module.scss";
import { TPokemonData } from "@/types";
import { capitalize } from "@/utils/util";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useId } from "react";
import Header from "./Header";
import TypeLabel from "./TypeLabel";

function PokemonProfile({
  name,
  abilities,
  types,
  stats,
  height,
  weight,
  sprite,
  renderType,
}: TPokemonData) {
  const typeId = useId();
  const abilityId = useId();
  const statId = useId();

  const formattedHeight = `Height: ${Number(height) / 10}m`;
  const formattedWeight = `Weight: ${weight}Kg`;

  return (
    <>
      <Head>
        <title>{`${capitalize(name)} | ${capitalize(renderType!)}`}</title>
        <meta name="description" content={`${capitalize(name)} Stats`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header renderType={renderType} />
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.profile}>
              <h1 className={styles.name}>{name}</h1>
              <Image src={sprite} alt={name} width={300} height={300} />
              <ul className={styles.types}>
                {types.map((type) => (
                  <TypeLabel key={`${type}-${typeId}`} type={type} />
                ))}
              </ul>
              <ul className={styles.biometrics}>
                <li className={styles.size}>{formattedHeight}</li>
                <li className={styles.size}>{formattedWeight}</li>
              </ul>
            </div>
            <div className={styles.info}>
              <div className={styles.infoContent}>
                <ul className={styles.stats}>
                  {stats.map((stat) => (
                    <li key={`${stat.name}-${statId}`} className={styles.stat}>
                      <span className={styles.statName}>
                        {stat.name.replace("special-", "sp.")}
                      </span>
                      <span className={styles.statValue}>{stat.value}</span>
                    </li>
                  ))}
                </ul>
                <ul className={styles.abilities}>
                  {abilities.map((ability) => (
                    <Fragment key={`${ability.name}-${abilityId}`}>
                      {ability.description ? (
                        <li className={styles.ability}>
                          <span className={styles.abilityName}>
                            <span>Ability</span>
                            <span>{ability.name}</span>
                          </span>
                          <span className={styles.abilityDescription}>
                            {ability.description}
                          </span>
                        </li>
                      ) : null}
                    </Fragment>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonProfile;
