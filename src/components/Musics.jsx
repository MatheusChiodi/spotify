export default function Music() {
  var music = [
    {
      id: 1,
      image: 'img1.png',
      title: 'Noites Estreladas',
      author: 'Lucas Moraes',
    },
    {
      id: 2,
      image: 'img2.png',
      title: 'Sombra e Luz',
      author: 'Mariana Dias',
    },
    {
      id: 3,
      image: 'img3.png',
      title: 'Rumo',
      author: 'Pedro Navegantes',
    },
    {
      id: 4,
      image: 'img4.png',
      title: 'Memórias',
      author: 'Júlia Carvalho',
    },
    {
      id: 5,
      image: 'img5.png',
      title: 'Amanhecer',
      author: 'Banda Horizonte',
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
            <p className="ms-3 text-[15px] text-gray-200">{item.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
