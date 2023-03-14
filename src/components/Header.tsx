import styles from "@/styles/Header.module.scss";
import Link from "next/link";

function Header({ renderType }: { renderType?: string }) {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <Link href={`/${renderType}`}>All Pokémon</Link>
      </nav>
    </header>
  );
}

export default Header;
