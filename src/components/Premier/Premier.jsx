import React from 'react';
import Poster from '../Poster/Poster';
import Slider from 'react-slick';

const Premier = () => {
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024, // For large screens (desktop)
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    
                },
            },
            {
                breakpoint: 768, // For medium screens (tablets)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 480, // For small screens (mobile)
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const premieres = [
        {
            src: 'https://tinyurl.com/u3jpvzs5',
            alt: 'Movie 1',
            title: 'Treasure',
            subtitle: 'English',
        },
        {
            src: 'https://tinyurl.com/u3jpvzs5',
            alt: 'Movie 1',
            title: 'Treasure',
            subtitle: 'English',
        },
        {
            src: 'https://tinyurl.com/u3jpvzs5',
            alt: 'Movie 1',
            title: 'Treasure',
            subtitle: 'English',
        },
        {
            src: 'https://tinyurl.com/u3jpvzs5',
            alt: 'Movie 1',
            title: 'Treasure',
            subtitle: 'English',
        },
        {
            src: 'https://tinyurl.com/u3jpvzs5',
            alt: 'Movie 1',
            title: 'Treasure',
            subtitle: 'English',
        },
        {
            src: 'https://tinyurl.com/u3jpvzs5',
            alt: 'Movie 1',
            title: 'Treasure',
            subtitle: 'English',
        },
    ];

    return (
        <>
            <div className='flex flex-col items-start p-4'>
                <h3 className='text-white text-xl font-bold'>Premiers</h3>
                <p className='text-white text-sm'>Brand new Releases every Friday</p>
            </div>
            {/* Wrapper for centering the slider */}
            <div className="container mx-auto px-10 sm:px-2"> 
                <Slider {...settings}>
                    {premieres.map((image, index) => (
                        <div key={index} className="px-2"> {/* Adding padding around each item */}
                            <Poster {...image} isDark />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default Premier;
