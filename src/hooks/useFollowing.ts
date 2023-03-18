import { useRouter } from "next/router";

function useFollowing() {
  const router = useRouter();
  const id = router.asPath.split("/").at(-1) || "";
  const pathname = router.asPath || "";

  function getPreviousPokemonRoute() {
    return id === "1"
      ? pathname.replace(id, "151")
      : pathname.replace(id, (Number(id) - 1).toString());
  }

  function getNextPokemonRoute() {
    return id === "151"
      ? pathname.replace(id, "1")
      : pathname.replace(id, (Number(id) + 1).toString());
  }

  return { getPreviousPokemonRoute, getNextPokemonRoute };
}

export default useFollowing;
