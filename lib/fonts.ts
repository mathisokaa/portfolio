import { Bebas_Neue, Space_Grotesk, Fraunces } from "next/font/google";

export const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

export const spaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export const fraunces = Fraunces({
  weight: ["300", "500"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});
