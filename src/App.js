import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const SliderContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const SlideImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const PhotoSlider = () => {
    const photos = [
        'https://image.arrivalguides.com/500x500/03/7bf557a6b37438430b62dde70af75256.jpg',
        'https://img1.cgtrader.com/items/3890856/4c882e6699/large/360-degree-snowy-mountains-3d-model-obj-stl-blend.jpg',
        'https://thumbor.bigedition.com/img/FYumbNUre2r0odGdoCUlFmsh5MA=/500x500/filters:format(webp):quality(80)/granite-web-prod/7a/4d/7a4d56649aab4fafbf8764d29146aae4.jpg',

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <SliderContainer>
            <Slider {...settings}>
                {photos.map((photoUrl, index) => (
                    <div key={index}>
                        <SlideImage src={photoUrl} alt={`Slide ${index + 1}`}/>
                    </div>
                ))}
            </Slider>
        </SliderContainer>
    );
};

export default PhotoSlider;

