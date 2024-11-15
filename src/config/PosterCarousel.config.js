const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1200, // Larger screens
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 1024, // Medium screens (tablets, small laptops)
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 768, // Smaller tablets
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // Mobile phones
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};


export default settings;