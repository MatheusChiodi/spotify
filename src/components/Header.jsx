import { Bell, History, Settings } from 'lucide-react';
import { useState,useEffect  } from 'react';

export default function Header() {

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour >= 12 && hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);	

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

    
    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="flex items-center justify-between pt-3 pb-1 px-3 sm:px-6 text-gray-50 m-0">
      {screenSize === 'md' ? ( 
        
        <>
          <h1 className="text-[26px] flex font-bold">{greeting}</h1>
          <Bell className="w-[20px] h-[20px] cursor-pointer hover:text-gray-400 transition-all duration-500" />
          <History className="w-[20px] h-[20px] cursor-pointer hover:text-gray-400 transition-all duration-500" />
          <Settings className="w-[20px] h-[20px] cursor-pointer hover:text-gray-400 transition-all duration-500" />
        </>
      ) : (
        <>
        <h1 className="text-[26px] flex font-bold">For You</h1>
        <div className="flex bg-[#303030] text-[#757575] rounded-2xl hover:text-gray-50 transition-all duration-700 cursor-pointer p-0 m-0">
          <input
            type="text"
            placeholder="Search Album, Artist, Playlist"
            name="search"
            id="search"
            className="text-[12px] flex items-center justify-center w-full px-9 py-1 rounded-2xl bg-[#303030] hover:placeholder:text-gray-50 cursor-pointer transition-all duration-700"
          />
        </div>
        <p className="text-green-500 font-medium text-[16px]">
          <i className="fab fa-spotify me-[2px]"></i>
          Spotify
        </p>
        <p className="text-[16px] hover:text-green-500 duration-300 cursor-pointer">
          Settings
        </p>
        <p className="text-[16px] hover:text-green-500 duration-300 cursor-pointer">
          Matheus Chiodi
        </p>
        <img src="logo.png" className="w-[40px] h-[40px] cursor-pointer " />
        </>
      )}
    </div>
  );
}
