import Player from '../components/Player';

export default function Home() {
  const currentSong = {
    title: "Midnight Dreams",
    artist: "Electronic Waves",
    coverArt: "https://images.unsplash.com/photo-1671226366569-77fe6dd13a95",
    audioUrl: "/sample.mp3"
  };

  return (
    <div className="min-h-screen pt-6">
      <header className="px-6 mb-8">
        <h1 className="text-2xl font-bold">Now Playing</h1>
      </header>
      
      <Player song={currentSong} />
      
      <div className="px-6">
        <h2 className="text-xl font-bold mb-4">Up Next</h2>
        <div className="space-y-4">
          {/* Add more songs here */}
        </div>
      </div>
    </div>
  );
}