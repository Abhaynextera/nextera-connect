import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Review() {
    const [reviewImages, setReviewImages] = useState([
        { id: 1, src: 'https://logowik.com/content/uploads/images/glassdoor-new-20235206.logowik.com.webp', alt: 'Review Badge 1' },
        { id: 2, src: 'https://static.theprint.in/wp-content/uploads/2023/11/ANI-20231124081154.jpg?compress=true&quality=80&w=800&dpr=2', alt: 'Review Badge 2' },
        { id: 3, src: 'https://www.tranktechnologies.com/assets/new-assets/footer-badges/top-software-developers.png', alt: 'Review Badge 3' },
        { id: 4, src: 'https://logowik.com/content/uploads/images/crunchbase8681.logowik.com.webp', alt: 'Review Badge 4' },
        { id: 5, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRXajz6np_4fLf0XrC90ln1fyRkTcgLBnsTg&s', alt: 'Review Badge 5' }
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
