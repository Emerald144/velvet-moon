import { useState } from "react";
import academyBg from "../assets/bg_velvetmoon.jpg";
import { CHARACTERS } from "../data/characters";
import { Starfield } from "./ui/Starfield";
import { Modal } from "./Modal";

interface Props {
  hasSave: boolean;
  onNewGame: (name: string) => void;
  onContinue: () => void;
  onLoad: () => void;
  onSettings: () => void;
}

export function App({ hasSave, onNewGame, onContinue, onLoad, onSettings }: Props) {
  const [naming, setNaming] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [name, setName] = useState("Mira");

  const item = "w-56 rounded-full border border-border bg-midnight/40 px-6 py-3 font-display text-xl tracking-wide text-silver backdrop-blur transition hover:border-pink hover:text-cream disabled:opacity-40 disabled:hover:border-border";

  return (
    <main className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-night px-4">
      <img src={academyBg} alt="" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover opacity-60 animate-scene-in" />
      <div className="absolute inset-0 bg-veil" />
      <Starfield />
      <div className="moon-orb absolute right-[8%] top-[8%] h-28 w-28 rounded-full animate-float sm:h-40 sm:w-40" aria-hidden />

      <div className="relative z-10 flex flex-col items-center text-center animate-fade-in">
        <p className="mb-2 text-sm uppercase tracking-[0.5em] text-lavender">A visual novel</p>
        <h1 className="text-glow text-6xl font-semibold tracking-wider text-cream sm:text-8xl">VELVET MOON</h1>
        <p className="mt-3 font-display text-xl italic text-pink sm:text-2xl">Every choice changes the story.</p>

        <nav className="mt-12 flex flex-col items-center gap-3">
          <button className={`${item} btn-moon border-transparent hover:text-midnight`} onClick={() => setNaming(true)}>New Game</button>
          <button className={item} onClick={onContinue} disabled={!hasSave}>Continue</button>
          <button className={item} onClick={onLoad}>Load Game</button>
          <button className={item} onClick={() => setGallery(true)}>Gallery</button>
          <button className={item} onClick={onSettings}>Settings</button>
        </nav>
      </div>

      {naming && (
        <Modal title="Who are you?" onClose={() => setNaming(false)}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (hasSave && !confirm("Start a new story? Your autosave will be replaced (save slots are kept).")) return;
              onNewGame(name.trim() || "Mira");
            }}
          >
            <label className="mb-2 block text-sm text-lavender" htmlFor="pname">Your first name (family name: Aster)</label>
            <input
              id="pname"
              value={name}
              maxLength={20}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border bg-muted px-4 py-3 text-lg text-cream outline-none focus:border-pink"
            />
            <button type="submit" className="btn-moon mt-5 w-full rounded-full py-3 font-display text-xl font-semibold">
              Begin the story
            </button>
          </form>
        </Modal>
      )}

      {gallery && (
        <Modal title="Gallery" onClose={() => setGallery(false)}>
          <p className="mb-4 text-sm text-lavender">Illustrations unlock as you play. Full gallery coming soon.</p>
          <ul className="grid grid-cols-2 gap-3">
            {CHARACTERS.map((character) => (
              <li key={character.id} className="rounded-xl bg-muted p-3 text-center">
                <img
            src={character.portrait}
            alt={character.name}
            loading="lazy"
            className="mx-auto h-32 w-full rounded-lg object-contain"
          />

          <p className="mt-2 font-display text-cream">
            {character.name}
          </p>

          <p className="text-xs text-lavender">
            {character.role}
          </p>

          <p className="mt-2 text-sm text-cream/80">
            {character.description}
          </p>
        </li>
      ))}
    </ul>
  </Modal>
)}
    </main>
  );
}
export default App;
