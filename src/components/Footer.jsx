import React from 'react'
import {FaFacebook, FaInstagram} from "react-icons/fa";
import {ImYoutube} from "react-icons/im";
import {FaXTwitter} from "react-icons/fa6";
import FooterLegal from "./FooterLegal.jsx";

export default function Footer() {
    return (
        <div className="bg-[#f5f5f5]">
            <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center lg:grid-cols-5 mx-auto container">
                <div className="mt-20">
                    <h3 className="text-2xl flex items-center justify-center font-bold text-text-color pb-10 hover:text-primary-color cursor-pointer">Trendyol</h3>
                    <ul className="space-y-5 flex flex-col items-center">
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Biz Kimiz</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Kariyer</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Sürdürebilirlik</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">İletişim</a>
                        </li>
                    </ul>
                </div>
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-text-color pb-10 hover:text-primary-color cursor-pointer">Kampanyalar</h3>
                    <ul className="space-y-5 flex flex-col items-center">
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Kampanyalar</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Alışveriş Kredisi</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Elit Üyelik</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Hediye Fikirleri</a>
                        </li>
                    </ul>
                </div>
                <div className="mt-10">
                    <h3 className="text-2xl font-bold flex items-center justify-center text-text-color pb-10 hover:text-primary-color cursor-pointer">
                        Satıcı
                    </h3>
                    <ul className="space-y-5 flex flex-col items-center">
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Trendyol'da Satış
                                Yap</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Temel Kavramlar</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Trendyol Akademi</a>
                        </li>
                    </ul>
                </div>
                <div className="mt-20">
                    <h3 className="text-2xl font-bold text-text-color pb-10 flex flex-col items-center hover:text-primary-color cursor-pointer">Yardım</h3>
                    <ul className="space-y-5 flex flex-col items-center">
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Sıkça Sorulan
                                Sorular</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Canlı Yardım /
                                Asistan</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">Nasıl İade
                                Edebilirim</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm font-Inter hover:text-primary-color">İşlem Rehberi</a>
                        </li>
                    </ul>
                </div>
                <div className="-mt-12">
                    <h3 className="text-2xl font-bold text-text-color pb-10 hover:text-primary-color cursor-pointer">
                        Sosyal Medya
                    </h3>
                    <ul className="flex gap-x-3 items-center">
                        <li>
                            <a href="#" className="text-blue-800">
                                <FaFacebook size={30}/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-pink-800">
                                <FaInstagram size={30}/>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-red-500">
                                <ImYoutube size={30}/>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FaXTwitter size={30}/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-1 px-5 lg:px-0 gap-y-10 lg:grid-cols-3 lg:gap-x-10 mx-auto container mt-10">
                <div>
                    <h3 className="text-2xl font-bold text-text-color pb-5">
                        Güvenlik Sertifikası
                    </h3>
                    <div className="grid grid-cols-4 place-items-center">
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-etbis.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-trust-stamp.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-pci-dss.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-iso.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />

                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-text-color pb-5">
                        Güvenli Alışveriş
                    </h3>
                    <div className="grid grid-cols-4 place-items-center">
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-troy.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-mastercard.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-visa.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-american-express.png"
                            alt=""
                            className="object-cover w-[56px] h-[56px]"
                        />
                    </div>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-text-color pb-5">
                        Mobil Uygulamalar
                    </h3>
                    <div className="grid grid-cols-1 gap-y-5 md:grid-cols-3 md:gap-x-5 place-items-center">
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-app-store.png"
                            alt=""
                            className="object-cover"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-google-play.png"
                            alt=""
                            className="object-cover"
                        />
                        <img
                            src="https://cdn.dsmcdn.com/web/production/footer-app-gallery.png"
                            alt=""
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="bg-[#1c1c1c]">
                <FooterLegal />
            </div>
        </div>
    )
}
