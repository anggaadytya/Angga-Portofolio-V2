import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import {
  IoPlayCircle,
  IoPauseCircle,
  IoPlayBack,
  IoPlayForward,
} from "react-icons/io5";
import { MUSIC } from "@/constant/music";

const size = "w-10 h-10";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [lastPlayedTime, setLastPlayedTime] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.src = MUSIC[currentSongIndex].sound;
      if (isPlaying) {
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {})
            .catch((error) => {
              console.error("Audio playback error:", error);
            });
        }
        if (lastPlayedTime !== 0) {
          audio.currentTime = lastPlayedTime;
          setLastPlayedTime(0);
        }
      } else {
        audio.pause();
      }
    }
  }, [currentSongIndex, isPlaying, lastPlayedTime]);

  const playPauseHandler = () => {
    setIsPlaying((prevIsPlaying) => {
      if (prevIsPlaying) {
        const audio = audioRef.current;
        if (audio) {
          setLastPlayedTime(audio.currentTime);
        }
      }
      return !prevIsPlaying;
    });
  };

  const nextSongHandler = () => {
    const newIndex = (currentSongIndex + 1) % MUSIC.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true); // Untuk memastikan lagu berikutnya diputar setelah pergantian lagu
  };

  const prevSongHandler = () => {
    const newIndex = (currentSongIndex - 1 + MUSIC.length) % MUSIC.length;
    setCurrentSongIndex(newIndex);
    setIsPlaying(true); // Untuk memastikan lagu sebelumnya diputar setelah pergantian lagu
  };

  const handleEnded = () => {
    nextSongHandler();
  };

  return (
    <div className="music-player">
      <div className="song-info">
        <Image
          src={MUSIC[currentSongIndex].image}
          alt="Cover"
          width={100}
          height={100}
          className="object-cover w-full h-full rounded-md"
        />
        <div>
          <h3 className="font-bold dark:text-neutral-200 tracking-wider ">
            {MUSIC[currentSongIndex].title}
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {MUSIC[currentSongIndex].artist}
          </p>
        </div>
      </div>
      <div className="flex gap-x-3 justify-around items-center py-3">
        <button onClick={prevSongHandler} aria-label="Previous Song">
          <IoPlayBack />
        </button>
        <button onClick={playPauseHandler} aria-label="Play/Pause">
          {isPlaying ? (
            <IoPauseCircle className={size} />
          ) : (
            <IoPlayCircle className={size} />
          )}
        </button>
        <button onClick={nextSongHandler} aria-label="Next Song">
          <IoPlayForward />
        </button>
      </div>
      <audio ref={audioRef} onEnded={handleEnded} />
    </div>
  );
};

export default MusicPlayer;
