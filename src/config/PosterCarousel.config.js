const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
       
        {
            breakpoint: 1024, // Medium screens (tablets, small laptops)
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite:true
            },
        },
        {
            breakpoint: 768, // Smaller tablets
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide:2,
            },
        },
        {
            breakpoint: 480, // Mobile phones
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
    ],
};


export default settings;