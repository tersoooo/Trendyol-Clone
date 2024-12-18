import React from 'react'
import { BiSearch } from "react-icons/bi";
import { FiUser } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";

export default function Navbar() {
    return (
        <div className="grid grid-cols-4 items-center">
            <div className="flex">
                <img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt=""
                     className="w-[146px] h-[100px] "
                />
            </div>
            <div className="col-span-2 relative">
                <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                    className="w-[600px] bg-gray-100 py-2 px-4 rounded border-2 border-transparent focus:!border-primary-color outline-none transition-colors"
                />
                <BiSearch className="absolute right-14 top-3 text-primary-color font-bold" size={23} />

            </div>
            <div className="flex gap-x-7">
                <div className="flex items-center gap-x-1 group">
                    <FiUser className="group-hover:text-primary-color transition-colors" />
                    <a href="#" className="text-sm group-hover:text-primary-color transition-colors">Giriş Yap</a>
                </div>
                <div className="flex items-center gap-x-1 group">
                    <FaRegHeart className="group-hover:text-primary-color transition-colors"/>
                    <a href="#" className="text-sm group-hover:text-primary-color transition-colors">Favorilerim</a>
                </div>
                <div className="flex items-center gap-x-1 group">
                    <SlBasket className="group-hover:text-primary-color transition-colors"/>
                    <a href="#" className="text-sm group-hover:text-primary-color transition-colors">Sepetim</a>
                </div>
            </div>
        </div>
    )
}
