import React from 'react';
import { Carousel } from 'react-carousel-minimal';

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
    return (
        <div
            style={{
                backgroundImage: `url("https://thumbs.dreamstime.com/b/%D0%B2%D0%B8%D0%BD%D1%82%D0%B0%D0%B6%D0%BD%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B9-%D1%82%D0%B5%D0%BA%D1%81%D1%82%D1%83%D1%80%D0%B5-%D0%B3%D0%B0%D0%B7%D0%B5%D1%82%D1%8B-119949717.jpg")`,
            }}
        >
            <div
            // style={{
            //     padding: '0 20px',
            // }}
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
                    captionBackgoundColoe="dark"
                    slideBackgroundColor="darkgrey"
                    slideImageFit="cover"
                    thumbnailWidth="100px"
                    style={{
                        textAlign: 'center',
                        maxWidth: '850px',
                        maxHeight: '500px',
                        margin: '40px auto',
                    }}
                />
            </div>
        </div>
    );
};

export default About;
