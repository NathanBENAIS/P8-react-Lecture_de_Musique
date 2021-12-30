import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Enemy",
      artist: "Imagine Dragons",
      img_src: "./images/img_Enemy.jpg",
      src: "./music/Enemy.mp3"
    },
    {
      title: "Lil-Nas-X",
      artist: "Industry Baby ft.Jack Harlow",
      img_src: "./images/img_LNX.png",
      src: "./music/Lil-Nas-X-Industry-Baby.mp3"
    },
    {
      title: "Pesetas",
      artist: "Riles",
      img_src: "./images/img_Prestas.jpg",
      src: "./music/Pesetas.mp3"
    },
    {
      title: "The Real Slim Shady",
      artist: "Eminem",
      img_src: "./images/img_TRSS.png",
      src: "./music/The-Real-Slim-Shady.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;