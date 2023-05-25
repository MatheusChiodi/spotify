import { PauseCircle, PlayCircle, SkipBack, SkipForward } from 'lucide-react';
import { useState } from 'react';
import { useRef } from 'react';

export default function Play() {  
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  function play() {
    document.getElementById('song').play();
  }

  function pause() {
    document.getElementById('song').pause();
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  function seek(event) {
    const progressBar = event.target;
    const progressBarWidth = progressBar.offsetWidth;
    const offsetX = event.nativeEvent.offsetX;
    const durationInSeconds = duration;
    const newCurrentTime = (offsetX / progressBarWidth) * durationInSeconds;
    setCurrentTime(newCurrentTime);
    audioRef.current.currentTime = newCurrentTime;
  }

  return (
    <div className="bg-[#343434] rounded-xl p-2 w-[97%] mt-1 h-[100%] flex flex-col items-center justify-center">
      <div className="w-full">
        <div className="flex justify-between w-full m-0 p-0">
          <div className="flex m-0 p-0">
            <img src="perfil.jpeg" className="w-[50px] h-[50px] rounded-xl" />
            <div className="flex flex-col">
              <p className="ms-3 font-medium text-[16px]">Titulo da musica</p>
              <p className="ms-3 text-[15px] text-gray-200">Autor</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center me-2">
              <SkipBack
                size={20}
                className="text-gray-50 hover:text-gray-400 cursor-pointer me-1 duration-300"
              />
              {isPlaying ? (
                <PauseCircle
                  size={30}
                  className={`text-gray-50 hover:text-gray-400 cursor-pointer duration-300 $`}
                  onClick={handlePlayPause}
                />
              ) : (
                <PlayCircle
                  size={30}
                  className={`text-gray-50 hover:text-gray-400 cursor-pointer duration-300 $`}
                  onClick={handlePlayPause}
                />
              )}

              <SkipForward
                size={20}
                className="text-gray-50 hover:text-gray-400 cursor-pointer ms-1 duration-300"
              />
            </div>
          </div>
          
          <audio
            ref={audioRef}
            src="music.mp3"
            controls
            className="hidden"
            id="song"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          
        </div>
      </div>
      
      <div className="flex w-full justify-center items-center mt-1">
        <p className="text-[10px] me-1 mb-[-10px]">
          {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
        </p>
        <div className="w-full h-1 bg-gray-200 rounded overflow-hidden mt-2 cursor-pointer" onClick={seek}>
          <div
            className="h-full bg-green-500 cursor-pointer"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
        <p className="text-[10px] ms-1 mb-[-10px]">
          {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
        </p>
      </div>
      
      
    </div>
  );
}
