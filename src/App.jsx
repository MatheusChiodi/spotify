import { useState,useEffect  } from 'react';
import Pc from './screen/PC';

function App() {
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
          <div className="h-[100%] w-[100%] bg-[#303030] p-3">
            <div className="m-0 p-0 bg-[#232323] h-[100%] w-[100%] mx-auto rounded-md">
              
            </div>
          </div>
        ) : (
          <div className="h-[80%] w-[90%] xl:w-[60%] bg-[#303030] rounded-3xl p-3">
            <div className="m-0 p-0 bg-[#232323] h-[100%] w-[100%] mx-auto rounded-md">
             <Pc />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
