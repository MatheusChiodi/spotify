export default function PlayList() {
  const playList = [
    {
      id: 1,
      name: 'Nome da PlayList',
      image: 'perfil.jpeg',
    },
    {
      id: 2,
      name: 'Nome da PlayList',
      image: 'perfil.jpeg',
    },
    {
      id: 3,
      name: 'Nome da PlayList',
      image: 'perfil.jpeg',
    },
    {
      id: 4,
      name: 'Nome da PlayList',
      image: 'perfil.jpeg',
    },
    {
      id: 5,
      name: 'Nome da PlayList',
      image: 'perfil.jpeg',
    },
    {
      id: 6,
      name: 'Nome da PlayList',
      image: 'perfil.jpeg',
    },
  ];

  const limitedPlayList = playList.slice(0, 6); // Limita a exibição a apenas 6 itens

  return (
    <>
      <div className="grid grid-cols-2 px-3 sm:px-6 mt-3">
        {limitedPlayList.map((item) => (
          <div
            key={item.id}
            className="mb-2 me-2 flex items-center bg-[#303030] rounded-md hover:bg-[#373737] transition-all cursor-pointer duration-700"
          >
            <img src={item.image} className="w-[60px] h-[60px] rounded-s-md" />
            <p className="ms-3 text-gray-50 font-bold text-[14px] sm:text-[20px] transition-all duration-300">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
