import { TPokemonItem } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/pokemon-item.module.scss";

function PokemonItem(props: TPokemonItem) {
  const { name, sprite, url } = props;
  const router = useRouter();

  const id = url.split("/").at(-2);

  return (
    <li className={styles.item}>
      <Link href={`${router.pathname}/${id}`} prefetch={false}>
        <h2 className={styles.header}>{name}</h2>
        <img className={styles.image} src={sprite} alt={name} />
      </Link>
    </li>
  );
}

export default PokemonItem;
