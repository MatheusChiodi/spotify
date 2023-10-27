import { useState,useEffect  } from 'react';

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

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        {screenSize === 'md' ? ( 
          <div className="w-[100%] h-[100%] bg-[#303030] p-3">
            <div className="m-0 p-0 bg-[#232323] h-[100%] w-[100%] mx-auto rounded-md">
              <Header />
              <div className="m-0 p-0 overflow-y-scroll h-[90%] overflow-hidden">
                <div className="flex w-full-center px-3 sm:px-6 items-center">
                  <p className="text-[12px] text-gray-200 bg-[#303030] px-3 sm:px-6 py-[1px] rounded-xl hover:bg-[#373737] transition-all cursor-pointer duration-700">
                    Music
                  </p>
                  <p className="text-[12px] ms-4 text-gray-200 bg-[#303030] px-3 sm:px-6 py-[1px] rounded-xl hover:bg-[#373737] transition-all cursor-pointer duration-700">
                    Podcasts & Shows
                  </p>
                </div>
                <PlayList />
                <div className='px-3 sm:px-6 mt-3'>
                  <NewSongsAdded />

                  <div className='mt-5'>
                    <h1 className='text-gray-50 font-bold'>
                      Recent Music
                    </h1>
                    <ListMusic />
                  </div>

                  <div className='mt-5'>
                    <h1 className='text-gray-50 font-bold'>
                      Most Played
                    </h1>
                    <ListMusic />
                  </div>

                  <div className='mt-5'>
                    <h1 className='text-gray-50 font-bold'>
                      Recently Added
                    </h1>
                    <ListMusic />
                  </div>

                  <div className='mt-5'>
                    <h1 className='text-gray-50 font-bold'>
                      Brazil is Listening
                    </h1>
                    <ListMusic />
                  </div>

                  <div className='mt-5'>
                    <h1 className='text-gray-50 font-bold'>
                      Made For Matheus Chiodi
                    </h1>
                    <ListMusic />
                  </div>
                </div>
              </div> 
            </div>
            
          </div>
        ) : (
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
                    className={`m-0 p-0 w-full transition-opacity duration-500 ${isExpanded ? 'h-[60px]' : 'hidden'}`}
                  >
                    <NewReleases />
                    <EditorPicks />
                    <Artists />
                  </div>

                  <div id="musics" className={`text-gray-50 ${isExpanded ? 'hidden' : ''}`}>
                    <Music />
                    <Music />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
