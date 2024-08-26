import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
    const [reviewImages, setReviewImages] = useState([
        { id: 1, src: 'https://img.freepik.com/free-vector/gradient-logo_23-2148149233.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid', alt: 'Review Badge 1' },
        { id: 2, src: 'https://searchngoorg.wordpress.com/wp-content/uploads/2018/05/dummy-logo.jpg?w=640', alt: 'Review Badge 2' },
        { id: 3, src: 'https://img.freepik.com/free-vector/gradient-rounded-abstract-business-logotype_23-2148199344.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid', alt: 'Review Badge 3' },
        { id: 4, src: 'https://img.freepik.com/premium-vector/abstract-logo-company-made-with-color_341269-925.jpg', alt: 'Review Badge 4' },
        { id: 5, src: 'https://img.freepik.com/free-vector/gradient-logo_23-2148149233.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1724198400&semt=ais_hybrid', alt: 'Review Badge 5' }
    ]);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
            <h1 className='text-center text-uppercase pt-5'>Review <span className='text'>Us</span></h1>
            <div className='cm-footer-logo'>
                <Slider {...settings}>
                    {reviewImages.map(image => (
                        <div key={image.id} className='cm-footer-logo-wrapper'>
                            <img className='mx-auto d-block w-100' src={image.src} alt={image.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Review;
