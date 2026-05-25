import { useEffect, useRef, useState } from "react";

export function TopBar() {
  const [dark, setDark] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleMusic = () => {
    if (!audioRef.current) {
      const a = new Audio(
        "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1718e49cdc.mp3?filename=lofi-study-112191.mp3",
      );
      a.loop = true;
      a.volume = 0.4;
      audioRef.current = a;
    }
    if (playing) audioRef.current.pause();
    else audioRef.current.play().catch(() => {});
    setPlaying(!playing);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <button
        onClick={toggleMusic}
        className="bg-cream/80 backdrop-blur border border-border px-3 py-2 rounded-full text-brown shadow-cozy font-soft text-sm hover:bg-cream"
        aria-label="Toggle music"
      >
        {playing ? "♪ on" : "♪ off"}
      </button>
      <button
        onClick={() => setDark((d) => !d)}
        className="bg-cream/80 backdrop-blur border border-border px-3 py-2 rounded-full text-brown shadow-cozy font-soft text-sm hover:bg-cream"
        aria-label="Toggle dark mode"
      >
        {dark ? "☀" : "☾"}
      </button>
    </div>
  );
}
