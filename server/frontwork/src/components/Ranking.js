import React, { useState, useEffect } from "react";
import '../css/Ranking.css';

function Ranking() {
    const images = [
        '/vehicle_image/PF2K.jpg',
        '/vehicle_image/PF6.jpg',
        '/vehicle_image/S-450.jpg',
        '/vehicle_image/S-3500.jpg',
        '/vehicle_image/YL500s.jpg',
        '/vehicle_image/나드리100.jpg',
        '/vehicle_image/나드리110.jpg',
        '/vehicle_image/나드리200.jpg',
        '/vehicle_image/나드리210.jpg',
        '/vehicle_image/나드리500.jpg'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 500);

        return () => clearInterval(timer);
    }, [currentIndex, images.length]);

    return (
        <div className="animation-container">
            <div id="main_box">

                <div className={`image-container ${currentIndex === 0 ? 'active' : 'inactive'}`}>
                    <p id="ranking-p">&nbsp;Best&nbsp;10</p>
                    <div className={`image-info ${currentIndex === 0 ? 'active' : 'inactive'}`}>
                        <p id="first_num"><span>1등</span></p>
                        {/* 다른 정보를 표시하려면 여기에 추가 */}
                    </div>
                    <img
                        className="main-image"
                        src={process.env.PUBLIC_URL + images[0]}
                        alt={`Image 1`}
                    />
                    <div className={`image-info ${currentIndex === 0 ? 'active' : 'inactive'}`}>
                      
                        {/* 다른 정보를 표시하려면 여기에 추가 */}
                    </div>
                </div>
            </div>
           

            <div id = "best_grid">
                    {[1, 2, 3].map((groupIndex) => (
                        <div 
                            key={groupIndex}
                            className={`image-container ${
                                currentIndex > (groupIndex - 1) * 3 &&
                                currentIndex <= groupIndex * 3
                                    ? 'active'
                                    : 'inactive'
                            }`}
                        >
                            {images
                                .slice(groupIndex * 3 - 2, groupIndex * 3 + 1)
                                .map((image, index) => (
                                    <div key={index + groupIndex * 3 - 1} className={`sub-image-container ${index === (currentIndex - groupIndex * 3 + 1) % 3 ? 'active' : 'inactive'}`}>
                                        <div className={`image-info ${index === (currentIndex - groupIndex * 3 + 1) % 3 ? 'active' : 'inactive'}`}>
                                            <p>{`${index + groupIndex * 3 -1}등 `}</p>
                                        
                                        </div>

                                        <img
                                            className={`sub-image ${index === (currentIndex - groupIndex * 3 + 1) % 3 ? 'active' : 'inactive'}`}
                                            src={process.env.PUBLIC_URL + image}
                                            alt={`Image ${index + groupIndex * 3}`}
                                        />
                                        
                                        {/* {index + groupIndex * 3 - 1 === 2 && (
                                        <div>
                                            {`짱짱`}
                                        </div>
                                        )} */}
                                    </div>
                                ))}


                        </div>
                    ))}
            </div>
           
        </div>
    );
}

export default Ranking;