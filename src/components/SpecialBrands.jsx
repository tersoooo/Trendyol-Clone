import React from 'react'
import Slider from "react-slick";

export default function SpecialBrands() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 2000,
                    infinite: false,
                    dots: false,
                },
            },
        ],
    };

    return (
        <div>
            <h3 className="text-text-color font-bold text-xl pb-5 px-4 lg:px-0">Sana Özel Markalar</h3>
            <div className="slider-container">
                <Slider {...settings} key={window.innerWidth}>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/2/13/Karaca_202302131917.jpg"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/4/26/Bershka_202304260943.png"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Lumberjack_202301270443.png"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Karacahome_202301270325.jpg"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Madamecoco_202301270522.png"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/27/Schafer_202301271715.jpg"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/26/CoolSexy_202301262111.jpg"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/26/ColinS_202301262231.jpg"
                            alt=""
                            className="w-[117px] h-[117px] object-cover"
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}
