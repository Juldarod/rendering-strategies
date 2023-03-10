export type TAbilityLanguage = {
  language: { name: string };
};

export type TPokemonItem = {
  name: string;
  url: string;
  sprite?: string;
};

export type TAllPokemonResponse = {
  results: Array<TPokemonItem>;
};

export type TPokemonResponse = {
  name: string;
  abilities: Array<{ ability: { name: string; url: string } }>;
  types: Array<{
    type: { name: string };
  }>;
  height: number;
  weight: number;
  stats: Array<{
    base_stat: number;
    stat: {
      name: string;
    };
  }>;
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
