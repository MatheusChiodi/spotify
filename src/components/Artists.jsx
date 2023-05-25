import { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class Artists extends Component {
  render() {
    const items = [
      {
        image: 'perfil.jpeg',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        author: 'Autor'
      },
      {
        image: 'perfil.jpeg',
        author: 'Autor'
      },
      // ... adicione mais objetos com as informações de cada item
    ];

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <>
      <div className="mt-3">
      <h1 className="text-gray-50 font-medium text-[18px] mb-1 ps-2">
        Artists
      </h1>
      <Slider {...settings} className="text-center">
        {items.map((item, index) => (
          <div className="flex flex-col items-center justify-center hover:bg-[#303030] p-1 rounded-md duration-500 cursor-pointer" key={index}>
            <img src={item.image} className="w-[100px] h-[80px] rounded-xl" />
            <p className="text-gray-400 text-[11px] mx-auto text-center">
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
