import { TAbilityLanguage } from "@/types";

export function getIdFromUrl(url: string): string {
  return url.split("/").at(-2)!;
}

export function findEnglishOption(item: TAbilityLanguage): boolean {
  return item.language.name === "en";
}
