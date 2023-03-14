import styles from "@/styles/PokemonItem.module.scss";
import { TPokemonItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function PokemonItem(props: TPokemonItem) {
  const { name, sprite, url } = props;
  const router = useRouter();

  const id = url.split("/").at(-2);

  return (
    <li className={styles.item}>
      <Link
        style={{ width: "100%" }}
        href={`${router.pathname}/${id}`}
        prefetch={false}
      >
        <h2 className={styles.header}>{name}</h2>
        <div className={styles.image}>
          <Image src={sprite!} alt={name} width={96} height={96} />
        </div>
      </Link>
    </li>
  );
}

export default PokemonItem;
