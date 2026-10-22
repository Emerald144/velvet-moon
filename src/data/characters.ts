import type { Character } from "../types/character";
import miraPortrait from "../assets/characters/mira.jpg";

export const CHARACTERS: Character[] = [
  {
    id: "mira",
    name: "Mira",
    role: "Protagonist",
    personality: ["Curious", "Nervous", "Determined"],
    description:
    "An ordinary girl starting a new life at Velvet Moon Academy.",
    portrait: miraPortrait,
  },
];