import { TAbilityLanguage } from "@/types";

export function getIdFromUrl(url: string): string {
  return url.split("/").at(-2)!;
}

export function findEnglishOption(item: TAbilityLanguage): boolean {
  return item.language.name === "en";
}

export function capitalize(word: string) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function formatBiometrics(biometric: number) {
  return (Number(biometric) / 10).toLocaleString("en-INTL", {
    minimumFractionDigits: 1,
  });
}
