export default function Music() {
  var music = [
    {
      id: '1',
      image: 'perfil.jpeg',
      title: 'Título da Música 1',
      autor: 'Autor',
    },
    {
      id: '2',
      image: 'perfil.jpeg',
      title: 'Título da Música 1',
      autor: 'Autor',
    },
    {
      id: '3',
      image: 'perfil.jpeg',
      title: 'Título da Música 1',
      autor: 'Autor',
    },
    {
      id: '4',
      image: 'perfil.jpeg',
      title: 'Título da Música 1',
      autor: 'Autor',
    },
    {
      id: '5',
      image: 'perfil.jpeg',
      title: 'Título da Música 1',
      autor: 'Autor',
    },
  ];
  return (
    <div className="m-0 p-0 overflow-hidden overflow-y-auto scrollbar-hide">
      {music.map((item) => (
        <div
          key={item.id}
          className="flex hover:bg-[#303030] p-2 me-2 rounded-xl cursor-pointer transition-all duration-300"
        >
          <img src={item.image} className="w-[60px] h-[60px] rounded-xl" />
          <div>
            <p className="ms-3 font-medium text-[16px]">{item.title}</p>
            <p className="ms-3 text-[15px] text-gray-200">{item.autor}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
