import { PauseCircle, PlayCircle, PlusCircle, SkipBack, SkipForward} from 'lucide-react';
import { useState } from 'react';
import { useRef } from 'react';

export default function NewSongsAdded() {  
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

  return (
    <>
      <h1 className='text-gray-50 font-bold'>
        New songs added
      </h1>
      <div className='w-[100%] flex mt-3 mb-2 items-center bg-[#303030] rounded-md hover:bg-[#373737] transition-all cursor-pointer duration-700'>
        <div className='w-[120px]'>
          <img src='perfil.jpeg' className="w-[120px] h-[120px] rounded-s-md" />
        </div>
        <div className='ms-3'>
          <h1 className='text-gray-50 font-bold text-[14px]'>Today-s Top Hits</h1>
          <p className='text-gray-500 text-[10px] pe-3'>
            Playlist • Bad Bunny is on top of the Hottest 50!
          </p>
          <div className='flex justify-between items-center pe-2 mt-2'>
            <PlusCircle className='text-gray-500 hover:text-gray-50 transition-all cursor-pointer duration-700' size={20} />
            {isPlaying ? (
              <PauseCircle
                size={30}
                className={`text-gray-50 hover:text-gray-400 cursor-pointer duration-300 $`}
                onClick={handlePlayPause}
              />
            ) : (
              <PlayCircle
                size={30}
                className={`text-gray-50 hover:text-green-500  transition-all cursor-pointer duration-700 $`}
                onClick={handlePlayPause}
              />
            )}
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
        {isPlaying ? (
          <div className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center w-[300px] mx-auto bg-[#303030] border-x border-t border-gray-500 rounded-t-md">
            <div className="flex items-center justify-center mt-1">
              <SkipBack
                size={15}
                className="text-gray-50 hover:text-gray-400 cursor-pointer me-1 duration-300"
              />
              {isPlaying ? (
                <PauseCircle
                  size={20}
                  className={`text-gray-50 hover:text-gray-400 cursor-pointer duration-300 $`}
                  onClick={handlePlayPause}
                />
              ) : (
                <PlayCircle
                  size={20}
                  className={`text-gray-50 hover:text-gray-400 cursor-pointer duration-300 $`}
                  onClick={handlePlayPause}
                />
              )}

              <SkipForward
                size={15}
                className="text-gray-50 hover:text-gray-400 cursor-pointer ms-1 duration-300"
              />
            </div>
            <div className="flex w-full justify-center items-center my-1 m-0 p-0 text-gray-50 px-3">
              <p className="text-[10px] me-1 mb-[-10px]">
                {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60)}
              </p>
              <div className="w-full h-1 bg-gray-200 rounded overflow-hidden mt-2 ">
                <div
                  className="h-full bg-green-500"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                />
              </div>
              <p className="text-[10px] ms-1 mb-[-10px]">
                {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
