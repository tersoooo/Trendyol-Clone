import React from 'react'
import Slider from "react-slick";
import {HiArrowSmRight} from "react-icons/hi";
import {IoMdStar, IoMdStarHalf} from "react-icons/io";
import {IoMdHeartEmpty} from "react-icons/io";
import {FaShippingFast} from "react-icons/fa";
import PopulerCart from "./PopulerCart.jsx";

export default function PopulerProducts() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };

    return (
        <div className="bg-[#efefef] h-[470px] text-sm rounded-xl">
            <div className="flex justify-between px-10">
                <div>
                    <h3 className="text-text-color text-lg py-4 font-semibold">Popüler Ürünler</h3>
                </div>
                <div className="flex items-center gap-x-1 ">
                    <div className="hover:bg-gray-200 flex p-1 rounded px-2 cursor-pointer">
                        <span className="font-semibold text-balance text-text-color">Tümünü Gör</span>
                        <HiArrowSmRight size={18}/>
                    </div>
                </div>
            </div>
            <Slider {...settings} className="pb-10">
                <div>
                <PopulerCart
                        title="Bershka"
                        title2="İçi suni kürklü biker ceket"
                        price="2890 TL"
                        image="https://cdn.dsmcdn.com/ty1484/product/media/images/prod/QC/20240815/11/ec5f767b-3fcd-3920-99b5-307fdd8d54d4/1_org_zoom.jpg"
                        shipping={true}
                        cash={true}
                        point="4.7"
                    />
                </div>
                <div>
                    <PopulerCart
                        title="POMELO FASHİON"
                        title2="Katlamalı Kazak"
                        price="1290 TL"
                        image="https://cdn.dsmcdn.com/ty1532/product/media/images/prod/QC/20240907/20/d4c35783-d5de-3ba8-ac37-03f001a333b8/1_org.jpg"
                        point="4.6"
                    />
                </div>
                <div>
                    <PopulerCart
                        title="PEMBİŞ HOMEWEAR"
                        title2="Teddy Örme"
                        price="1.311 TL"
                        image="https://cdn.dsmcdn.com/ty1576/prod/QC/20241002/23/b88b53e4-35f9-3dfc-9fff-22ee3ca41df8/1_org.jpg"
                        point="3.7"
                    />
                </div>
                <div>
                    <PopulerCart
                        title="lolembutik"
                        title2="V Yaka Uzun Mavi Şifon"
                        price="2890 TL"
                        image="https://cdn.dsmcdn.com/ty1570/prod/QC/20240925/21/4ea6e8b3-cedc-37e8-8d2a-7b55dfe0b06d/1_org.jpg"
                        shipping={true}
                        cash={true}
                        point="4.7"
                    />
                </div>
                <div>
                    <PopulerCart
                        title="SHEIN"
                        title2="Pembe deri kalp detaylı çanta"
                        price="1290 TL"
                        image="https://cdn.dsmcdn.com/ty1552/product/media/images/ty1536/prod/QC/20240912/15/5d1ad44a-12e7-3697-8171-8d8c86910400/1_org.jpg"
                        shipping={true}
                        cash={true}
                        point="4.7"
                    />
                </div>
                <div>
                    <PopulerCart
                        title="TEKSMODA"
                        title2="Çocuk Bornozu"
                        price="2890 TL"
                        image="https://cdn.dsmcdn.com/ty1336/product/media/images/prod/QC/20240529/00/3532de0f-4cce-35e1-bbd0-3c085989d839/1_org.jpg"
                        shipping={true}
                        point="4.7"
                    />
                </div>
            </Slider>
        </div>
    )
}