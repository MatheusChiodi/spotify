import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ListMusic extends Component {
  render() {
    const items = [
      {
        image: 'perfil.jpeg',
        title: 'Título da Música 1',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        title: 'Título da Música 2',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        title: 'Título da Música 2',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        title: 'Título da Música 2',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        title: 'Título da Música 2',
        author: 'Autor'
      },
      // ... adicione mais objetos com as informações de cada item
    ];

    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
    return (
      <>
      <div className="m-0 p-0">
        <Slider {...settings} className="text-center">
          {items.map((item, index) => (
            <div className="flex flex-col items-center justify-center hover:bg-[#303030] p-1 rounded-md duration-500 cursor-pointer" key={index}>
              <img src={item.image} className="w-[100%] h-[120px] rounded-sm" />
              <p className="text-gray-50 font-medium text-[12px] mt-1 mx-auto text-center">
                {item.title}
              </p>
              <p className="text-gray-400 text-[11px] mx-auto text-center pb-[1px]">
                {item.author}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      </>
      
    );
  }
}
