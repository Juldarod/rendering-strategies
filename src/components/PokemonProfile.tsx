import { TPokemonData } from "@/types";
import { useId } from "react";

function PokemonProfile({
  name,
  abilities,
  types,
  stats,
  weight,
  sprite,
}: TPokemonData) {
  const typeId = useId();
  const abilityId = useId();
  const statId = useId();

  return (
    <div>
      <h1>{name}</h1>
      <img src={sprite} alt={name} />
      <ul>
        {types.map((type) => (
          <li key={`${type}-${typeId}`}>{type}</li>
        ))}
      </ul>
      <ul>
        {abilities.map((ability) => (
          <li key={`${ability.name}-${abilityId}`}>
            <span>{ability.name}</span>
            {": "}
            <span>{ability.description}</span>
          </li>
        ))}
      </ul>
      <div>Weight: {weight}</div>
      <ul>
        {stats.map((stat) => (
          <li key={`${stat.name}-${statId}`}>
            <span>{stat.name}</span>
            {": "}
            <span>{stat.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonProfile;
