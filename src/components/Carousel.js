import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [otherIndex1, setOtherIndex1] = useState(null);
    const [otherIndex2, setOtherIndex2] = useState(null);
    const [direction, setDirection] = useState(null);

    const items = [
        {
            id: 1,
            bgColor: '#0099ff',
            title: 'ELEVATE YOUR SPACES WITH EXCELLENCE',
            desc: 'Lorem ipsum dolor sit amet consectetur...',
            img: 'Images/pink.png'
        },
        {
            id: 2,
            bgColor: '#dedfe1',
            title: 'TRANSFORMING SPACES, ELEVATING EXPERIENCES',
            desc: 'Lorem ipsum dolor sit amet consectetur...',
            img: 'Images/green.png'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleNext = () => {
        setDirection('next');
        setActiveIndex(prev => {
            const newIndex = (prev + 1) % items.length;
            updateIndices(newIndex);
            return newIndex;
        });
    };

    const handlePrev = () => {
        setDirection('prev');
        setActiveIndex(prev => {
            const newIndex = (prev - 1 + items.length) % items.length;
            updateIndices(newIndex);
            return newIndex;
        });
    };

    const updateIndices = (newActiveIndex) => {
        setOtherIndex1((newActiveIndex - 1 + items.length) % items.length);
        setOtherIndex2((newActiveIndex + 1) % items.length);
    };

    const getClassName = (index) => {
        if (index === activeIndex) return 'active';
        if (index === otherIndex1) return 'other_1';
        if (index === otherIndex2) return 'other_2';
        return '';
    };

    return (
        <div className={`carousel ${direction}`}>
            <div className="list">
                {items.map((item, index) => (
                    <div key={item.id} className={`item ${getClassName(index)}`}>
                        <div className="main-content" style={{ backgroundColor: item.bgColor }}>
                            <div className="content">
                                <h2>{item.title}</h2>
                                <p className="description">{item.desc}</p>
                            </div>
                        </div>
                        <figure className="image">
                            <img src={item.img} alt='' />
                            {/* <figcaption>{item.title}</figcaption> */}
                        </figure>
                    </div>
                ))}
            </div>
            <div className="arrows">
                <button onClick={handlePrev} id="prev">{'<'}</button>
                <button onClick={handleNext} id="next">{'>'}</button>
            </div>
        </div>
    );
};

export default Carousel;