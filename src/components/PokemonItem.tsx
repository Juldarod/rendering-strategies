import { TPokemonItem } from "@/types";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "@/styles/PokemonItem.module.scss";
import Image from "next/image";

function PokemonItem(props: TPokemonItem) {
  const { name, sprite, url } = props;
  const router = useRouter();

  const id = url.split("/").at(-2);

  return (
    <li className={styles.item}>
      <h2 className={styles.header}>{name}</h2>
      <div className={styles.image}>
        <Link href={`${router.pathname}/${id}`} prefetch={false}>
          <Image src={sprite!} alt={name} width={96} height={96} />
        </Link>
      </div>
    </li>
  );
}

export default PokemonItem;
