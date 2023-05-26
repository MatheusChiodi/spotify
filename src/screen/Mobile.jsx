import Header from "../components/Header";
import ListMusic from "../components/Mobile/ListMusic";
import NewSongsAdded from "../components/Mobile/NewSongsAdded";
import PlayList from "../components/Mobile/PlayList";

export default function Mobile() {
  return (
    <>
      <Header />
      <div className="m-0 p-0 overflow-y-scroll h-[78%] overflow-hidden">
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
          <div className='m-0 p-0 mb-3'>
            <h1 className="text-gray-50 font-medium text-[18px] m-0 p-0">
              New Releases
            </h1>
            <ListMusic />
          </div>
          <div className='m-0 p-0 mb-3'>
            <h1 className="text-gray-50 font-medium text-[18px] m-0 p-0">
              New Releases
            </h1>
            <ListMusic />
          </div>
          <div className='m-0 p-0 mb-3'>
            <h1 className="text-gray-50 font-medium text-[18px] m-0 p-0">
              New Releases
            </h1>
            <ListMusic />
          </div>
         
        </div>
      </div>
    </>
  );
}
