import { useState, useRef } from 'react';
import { PlayIcon, PauseIcon, BackwardIcon, ForwardIcon } from '@heroicons/react/24/solid';

export default function Player({ song }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="glass-effect rounded-xl p-6 mx-4 my-8">
      <div className="aspect-square rounded-lg overflow-hidden mb-6">
        <img 
          src={song.coverArt} 
          alt={song.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold">{song.title}</h2>
        <p className="text-gray-400">{song.artist}</p>
      </div>

      <div className="mb-4">
        <div className="h-1 bg-gray-600 rounded-full">
          <div 
            className="h-full bg-white rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="flex justify-center items-center gap-8">
        <button className="p-2">
          <BackwardIcon className="h-8 w-8" />
        </button>
        <button 
          className="p-4 bg-white rounded-full"
          onClick={togglePlay}
        >
          {isPlaying ? (
            <PauseIcon className="h-8 w-8 text-dark-primary" />
          ) : (
            <PlayIcon className="h-8 w-8 text-dark-primary" />
          )}
        </button>
        <button className="p-2">
          <ForwardIcon className="h-8 w-8" />
        </button>
      </div>

      <audio
        ref={audioRef}
        src={song.audioUrl}
        onTimeUpdate={(e) => {
          setProgress((e.target.currentTime / e.target.duration) * 100);
        }}
      />
    </div>
  );
}