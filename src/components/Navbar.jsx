import React, {useState} from 'react'
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi";
import {IoIosFlash} from "react-icons/io";

export default function Navbar() {

    const isMobile = useMediaQuery({ maxWidth: 640 })
    const [isVisible, setIsVisible] = useState(false)

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 items-center">
            <div className="flex px-2 md:px-0">
                <img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt=""
                     className="w-[146px] h-[100px] "
                />
            </div>
            {isMobile ? (
                <div className="flex justify-end gap-x-5 px-4 ">
                    <button>
                        <FiUser />
                    </button>
                    <button>
                        <SlBasket />
                    </button>
                    <button
                        onClick={() => setIsVisible(!isVisible)}
                    >
                        <GiHamburgerMenu size={20} className="relative"/>
                    </button>
                    {isVisible && (
                        <div className="absolute top-20 left-0 h-[510px] z-10 bg-[#ddd] w-full">
                            <div className="flex justify-center mt-4">
                                <input type="text" className="w-2/3 px-2 focus:outline-none focus:border-2 py-0.5 focus:border-[#333] rounded border-2  border-primary-color" placeholder="Aradığınız ürün, kategori veya markayı girin.." />
                            </div>
                            <ul className="flex flex-col items-center justfiy-center pt-5 gap-y-4 text-sm text-center">
                                <li>
                                    <a href="#" className="text-text-color text-lg font-semibold hover:text-primary-color">Kadın</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color text-lg font-semibold hover:text-primary-color">Erkek</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color text-lg font-semibold hover:text-primary-color">Anne &
                                        Çocuk</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color text-lg font-semibold hover:text-primary-color">Ev &
                                        Yaşam</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-text-color text-lg font-semibold hover:text-primary-color">Süpermarket</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color text-lg font-semibold hover:text-primary-color">Kozmetik</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color text-lg font-semibold hover:text-primary-color">Ayakkabı &
                                        Çanta</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-text-color text-lg font-semibold hover:text-primary-color">Elektronik</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color text-lg font-semibold hover:text-primary-color">Çok
                                        Satanalar</a>
                                </li>
                                <li className="flex items-center justify-center">
                                    <IoIosFlash size={17}/>
                                    <a href="#" className="text-text-color text-lg   font-semibold hover:text-primary-color">Flaş
                                        Ürünler</a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <>
                <div className="col-span-2 relative">
                        <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                               className="w-[600px] bg-gray-100 py-2 px-4 rounded border-2 border-transparent focus:!border-primary-color outline-none transition-colors"
                        />
                        <BiSearch className="absolute right-14 top-3 text-primary-color font-bold" size={23}/>

                    </div>
                    <div className="flex gap-x-7">
                        <div className="flex items-center gap-x-1 group">
                            <FiUser className="group-hover:text-primary-color transition-colors"/>
                            <a href="#" className="text-sm group-hover:text-primary-color transition-colors">Giriş
                                Yap</a>
                        </div>
                        <div className="flex items-center gap-x-1 group">
                            <FaRegHeart className="group-hover:text-primary-color transition-colors"/>
                            <a href="#"
                               className="text-sm group-hover:text-primary-color transition-colors">Favorilerim</a>
                        </div>
                        <div className="flex items-center gap-x-1 group">
                            <SlBasket className="group-hover:text-primary-color transition-colors"/>
                            <a href="#" className="text-sm group-hover:text-primary-color transition-colors">Sepetim</a>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
}
