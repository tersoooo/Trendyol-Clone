import React from 'react'
import {IoMdHeartEmpty, IoMdStar, IoMdStarHalf} from "react-icons/io";
import {FaShippingFast} from "react-icons/fa";

export default function PopulerCart({image,shipping = false, cash = false, title, point, price, title2}) {
    return (
        <div className="flex">
            <h3 className="bg-white border flex flex-col px-2 gap-y-2 relative rounded-xl">
                <div className="flex flex-col ">
                    <img
                        src={image}
                        alt=""
                        className="h-[357px] object-cover py-6"
                    />
                </div>
                <div className="absolute right-3 top-3 bg-white p-1 rounded-full cursor-pointer">
                    <IoMdHeartEmpty size={22} className="hover:text-primary-color"/>
                </div>
                {shipping ? (
                    <div
                        className="bg-[#535353] w-20 flex text-center px-1 items-center rounded-xl absolute left-3 top-3">
                        <FaShippingFast className="text-white" size={24}/>
                        <span className="text-[9px] leading-tight text-white font-bold">KARGO BEDAVA</span>
                    </div>
                ) : null}
                {cash ? (
                    <div className="absolute bottom-20 left-0 w-[70px] hover:scale-110 transition-all">
                        <img
                            src="https://cdn.dsmcdn.com/mnresize/250/250/indexing-sticker-stamp/venus/6b9160df-05dc-495f-b8c9-7983f01825dc.png"
                            alt=""/>
                    </div>
                ) : null}
                <div>
                    <h4 className="text-center"> <strong>{title}</strong> {title2}</h4>
                </div>
                <div className="flex gap-x-2 items-center">
                    <span>{point}</span>
                    <span className="flex">
                                <IoMdStar/>
                                <IoMdStar/>
                                <IoMdStar/>
                                <IoMdStar/>
                                <IoMdStarHalf/>
                            </span>
                    <span>(467)</span>
                </div>
                <div>
                    <span className="text-primary-color font-bold text-balance">{price}</span>
                </div>
            </h3>
        </div>
    )
}
