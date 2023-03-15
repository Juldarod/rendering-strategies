import {
  TAbilityData,
  TAbilityResponse,
  TAllPokemonData,
  TAllPokemonResponse,
  TPokemonData,
  TPokemonResponse,
} from "@/types";
import { API_URL, kanto } from "@/utils/constants";
import { findEnglishOption, getIdFromUrl } from "@/utils/util";

export async function getAllPokemon(): Promise<TAllPokemonData> {
  const response = await fetch(`${API_URL}/pokemon/${kanto}`);
  const data: TAllPokemonResponse = await response.json();

  const allPokemon = await Promise.all(
    data.results.map(async (pokemon) => {
      const pokemonInfo = await (await fetch(pokemon.url)).json();

      return {
        name: pokemon.name,
        url: pokemon.url,
        sprite: pokemonInfo.sprites.front_default,
      };
    })
  );

  return allPokemon;
}

export async function getPokemon(id: string): Promise<TPokemonData> {
  const response = await fetch(`${API_URL}/pokemon/${id}`);
  const data: TPokemonResponse = await response.json();

  return {
    name: data.name,
    abilities: await Promise.all(
      data.abilities.map(
        async (item) => await getAbility(getIdFromUrl(item.ability.url))
      )
    ),
    types: data.types.map((item) => item.type.name),
    height: data.height,
    weight: data.weight,
    stats: data.stats.map((item) => ({
      name: item.stat.name,
      value: item.base_stat,
    })),
    sprite: data.sprites.other["official-artwork"].front_default,
  };
}

export async function getAbility(id: string): Promise<TAbilityData> {
  const response = await fetch(`${API_URL}/ability/${id}`);
  const data: TAbilityResponse = await response.json();

  return {
    name: data.names.find((item) => findEnglishOption(item))!.name,
    description:
      data.effect_entries.find((item) => findEnglishOption(item))
        ?.short_effect || null,
  };
}
