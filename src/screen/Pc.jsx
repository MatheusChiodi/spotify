import Header from "../components/Header";
import Music from "../components/Musics";
import TypesMusic from "../components/TypesMusic";
import Play from "../components/Play";
import NewReleases from "../components/NewReleases";
import EditorPicks from "../components/EditorPicks";
import Artists from "../components/Artists";

import { useState } from "react";

export default function Pc() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleView = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
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
    </>
  );
}
