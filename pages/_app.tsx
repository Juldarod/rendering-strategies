import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const pokeFont = localFont({
  src: [
    { path: "../fonts/legacy.ttf", weight: "100" },
    { path: "../fonts/modern.ttf", weight: "200" },
    { path: "../fonts/solid.ttf", weight: "500" },
    { path: "../fonts/hollow.ttf", weight: "600" },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={pokeFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
