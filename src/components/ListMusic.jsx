import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class ListMusic extends Component {
  render() {
    const items = [
      {
        id: 1,
        image: 'img1.png',
        title: 'Noites',
        author: 'Lucas Moraes',
      },
      {
        id: 2,
        image: 'img2.png',
        title: 'A Sombra',
        author: 'Mariana Dias',
      },
      {
        id: 3,
        image: 'img3.png',
        title: 'Rumo',
        author: 'Pedro N',
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
        author: 'Banda H',
      },
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
              <div
                className="flex flex-col items-center justify-center hover:bg-[#303030] p-1 pb-1 rounded-md duration-500 cursor-pointer h-[120px]"
                key={index}
              >
                <img
                  src={item.image}
                  className="w-[100%] h-[100&] rounded-sm"
                />
                <p className="text-gray-50 font-medium text-[12px] mt-1 mx-auto text-center">
                  {item.title}
                </p>
                <p className="text-gray-400 text-[11px] mx-auto text-center pb-[1px] h-[30px] flex justify-center">
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
