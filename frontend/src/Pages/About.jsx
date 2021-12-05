import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import SetTitle from '../hooks/setTitle';

const About = () => {
    const data = [
        {
            image: 'https://im0-tub-ru.yandex.net/i?id=53350369968fa69c8dd32b178368a6bd-l&ref=rim&n=13&w=1080&h=810',
            caption: 'Наша миссия',
        },
        {
            image: 'https://cs4.pikabu.ru/post_img/big/2014/04/17/11/1397759084_1954910027.jpg',
            caption: 'Познакомить весь мир',
        },
        {
            image: 'https://photonomy.ru/uploads/images/photos/DRZKRwQxZQuXxZnEtsgw3vQdepEkMZWD.jpg',
            caption: 'С новостями и событиями',
        },
        {
            image: 'https://documents.infourok.ru/10c02bf1-2742-4a83-81fa-8c9bb3f41829/0/image019.jpg',
            caption: 'С историей природы и экологии',
        },
        {
            image: 'https://mycampinglife.ru/wp-content/uploads/2021/09/kamchatka.jpg',
            caption: 'Камчатского края',
        },
    ];
    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: 'Roboto',
    };
    const imageStyle = {
        background: 'black',
        opacity: '0.6',
    };
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    };

    SetTitle('О проекте');

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Carousel
                data={data}
                time={1}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                imageStyle={imageStyle}
                radius="15px"
                slideNumberStyle={slideNumberStyle}
                captionPosition="center"
                captionBackgroundColor="dark"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnailWidth="100px"
                style={{
                    textAlign: 'center',
                    minWidth: '850px',
                    marginTop: '50px',
                }}
            />
        </div>
    );
};

export default About;
