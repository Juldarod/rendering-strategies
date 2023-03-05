export type TAbilityLanguage = {
  language: { name: string };
};

export type TPokemonItem = {
  name: string;
  url: string;
  sprite?: string;
};

export type TAbilitiesItem = {
  ability: { name: string; url: string };
};

export type TStatsItem = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export type TTypesItem = {
  type: { name: string };
};

export type TAllPokemonResponse = {
  results: Array<TPokemonItem>;
};

export type TPokemonResponse = {
  name: string;
  abilities: Array<TAbilitiesItem>;
  types: Array<TTypesItem>;
  height: number;
  weight: number;
  stats: Array<TStatsItem>;
  sprites: {
    other: { ["official-artwork"]: { front_default: string } };
  };
};

export type TAbilityResponse = {
  names: Array<TAbilityLanguage & { name: string }>;
  effect_entries: Array<TAbilityLanguage & { effect: string }>;
};

export type TAllPokemonData = Array<TPokemonItem>;

export type TPokemonData = {
  name: string;
  abilities: Array<TAbilityData>;
  types: Array<string>;
  height: number;
  weight: number;
  stats: Array<{
    name: string;
    value: number;
  }>;
  sprite: string;
};

export type TAbilityData = {
  name: string;
  description: string;
};
