import { useState, useRef, useEffect } from 'react';

import Header from './components/Header';
import TypesMusic from './components/TypesMusic';
import Music from './components/Musics';
import Play from './components/Play';
import NewReleases from './components/NewReleases';
import EditorPicks from './components/EditorPicks';
import Artists from './components/Artists';
import NewSongsAdded from './components/NewSongsAdded';
import ListMusic from './components/ListMusic';
import PlayList from './components/PlayList';

import {
  PlusCircle,
  PauseCircle,
  PlayCircle,
  SkipBack,
  SkipForward,
} from 'lucide-react';

function App() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    function handleResize() {
      const { innerWidth } = window;
      if (innerWidth <= 768) {
        setScreenSize('md');
      } else {
        setScreenSize('');
      }
    }

    // Adiciona um event listener para atualizar o tamanho da tela sempre que a janela for redimensionada
    window.addEventListener('resize', handleResize);

    // Chama a função de redimensionamento para definir o tamanho da tela inicialmente
    handleResize();

    // Remove o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!isSeeking) return;
      const progressBar = document.getElementById('progress-bar');
      const progressBarWidth = progressBar.offsetWidth;
      const offsetX = event.pageX - progressBar.getBoundingClientRect().left;
      const durationInSeconds = duration;
      const newCurrentTime = (offsetX / progressBarWidth) * durationInSeconds;
      setCurrentTime(newCurrentTime);
    };

    const handleMouseUp = () => {
      if (!isSeeking) return;
      setIsSeeking(false);
      audioRef.current.currentTime = currentTime;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isSeeking, currentTime, duration]);

  const handlePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  function play() {
    audioRef.current.play();
  }

  function pause() {
    audioRef.current.pause();
  }

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  function handleMouseDown() {
    setIsSeeking(true);
  }

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
    <>
      {screenSize === 'md' ? (
        <div className="w-[100%] h-screen bg-[#303030] p-3 flex items-center justify-center">
          <div className="m-0 p-0 bg-[#232323] w-[100%] mx-auto rounded-md">
            <Header />
            <div className="m-0 p-0 overflow-y-scroll h-[80%] overflow-hidden">
              <div className="flex w-full-center px-3 sm:px-6 items-center">
                <p className="text-[12px] text-gray-200 bg-[#303030] px-3 sm:px-6 py-[1px] rounded-xl hover:bg-[#373737] transition-all cursor-pointer duration-700">
                  Music
                </p>
                <p className="text-[12px] ms-4 text-gray-200 bg-[#303030] px-3 sm:px-6 py-[1px] rounded-xl hover:bg-[#373737] transition-all cursor-pointer duration-700">
                  Podcasts & Shows
                </p>
              </div>
              <PlayList />
              <div className="px-3 sm:px-6 mt-3">
                <>
                  <h1 className="text-gray-50 font-bold">New songs added</h1>
                  <div className="w-[100%] flex mt-3 mb-2 items-center bg-[#303030] rounded-md hover:bg-[#373737] transition-all cursor-pointer duration-700">
                    <div className="w-[120px]">
                      <img
                        src="logo.png"
                        className="w-[120px] h-[120px] rounded-s-md"
                      />
                    </div>
                    <div className="ms-3">
                      <h1 className="text-gray-50 font-bold text-[14px]">
                        Today-s Top Hits
                      </h1>
                      <p className="text-gray-500 text-[10px] pe-3">
                        Playlist • Bad Bunny is on top of the Hottest 50!
                      </p>
                      <div className="flex justify-between items-center pe-2 mt-2">
                        <PlusCircle
                          className="text-gray-500 hover:text-gray-50 transition-all cursor-pointer duration-700"
                          size={20}
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
                      <div className="absolute bottom-0 inset-x-0 flex flex-col items-center justify-center w-[300px] mx-auto bg-[#303030] border-x border-t border-gray-500 rounded-t-md z-50">
                        <div className="flex items-center justify-center mt-1">
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
                        <div className="flex w-full justify-center items-center mb-2 m-0 p-0 text-gray-50 px-3">
                          <p className="text-xs me-1 mb-[-10px]">
                            {Math.floor(currentTime / 60)}:
                            {Math.floor(currentTime % 60)}
                          </p>
                          <div
                            className="w-full h-2 bg-gray-200 rounded overflow-hidden mt-2 cursor-pointer"
                            onClick={seek}
                            onMouseDown={handleMouseDown}
                            id="progress-bar"
                          >
                            <div
                              className="h-full bg-green-500 cursor-pointer"
                              style={{
                                width: `${(currentTime / duration) * 100}%`,
                              }}
                            />
                          </div>
                          <p className="text-xs ms-1 mb-[-10px]">
                            {Math.floor(duration / 60)}:
                            {Math.floor(duration % 60)}
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </>

                <div className="mt-5">
                  <h1 className="text-gray-50 font-bold">Recent Music</h1>
                  <ListMusic />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="h-[80%] w-[90%] xl:w-[60%] bg-[#303030] rounded-3xl p-3">
            <div className="m-0 p-0 bg-[#232323] h-[100%] w-[100%] mx-auto rounded-md">
              <div className="h-[14%]">
                <Header />
              </div>

              <div className="flex px-3 m-0 h-[86%]">
                <div className="flex flex-col h-[100%] w-1/2 text-gray-50">
                  <TypesMusic />
                  <Music />
                  <button
                    className="mx-auto w-[100px] text-center text-green-500 hover:text-green-600 cursor-pointer m-0 p-0 text-[15px] duration-300"
                    onClick={toggleView}
                    id="viewMore"
                  >
                    {isExpanded ? 'View more +' : 'View less -'}
                  </button>
                  <div className="mb-2 mt-auto">
                    <Play />
                  </div>
                </div>

                <div className="flex flex-col w-1/2 h-[99%] overflow-y-auto scrollbar-hide">
                  <div
                    id="right"
                    className={`m-0 p-0 w-full transition-opacity duration-500 ${
                      isExpanded ? 'h-[60px]' : 'hidden'
                    }`}
                  >
                    <NewReleases />
                    <EditorPicks />
                    <Artists />
                  </div>

                  <div
                    id="musics"
                    className={`text-gray-50 ${isExpanded ? 'hidden' : ''}`}
                  >
                    <Music />
                    <Music />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
