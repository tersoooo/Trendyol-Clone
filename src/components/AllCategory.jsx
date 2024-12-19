import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { useMediaQuery } from "react-responsive";

export default function AllCategory() {

    const isMobile = useMediaQuery({ maxWidth: 1280 })


    return (
            <>
                {!isMobile && (
                    <div className="flex gap-x-44">
                        <div className="flex items-center gap-x-1">
                            <GiHamburgerMenu size={18}/>
                            <span
                                className="text-sm w-36 font-semibold text-text-color cursor-pointer">TÜM KATEGORİLER</span>
                        </div>
                        <div className="flex-1">
                            <ul className="flex lg:gap-x-4 text-sm ">
                                <li>
                                    <a href="#"
                                       className="text-text-color font-semibold hover:text-primary-color">Kadın</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-text-color font-semibold hover:text-primary-color">Erkek</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color font-semibold hover:text-primary-color">Anne
                                        &
                                        Çocuk</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color font-semibold hover:text-primary-color">Ev &
                                        Yaşam</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-text-color font-semibold hover:text-primary-color">Süpermarket</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-text-color font-semibold hover:text-primary-color">Kozmetik</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color font-semibold hover:text-primary-color">Ayakkabı
                                        &
                                        Çanta</a>
                                </li>
                                <li>
                                    <a href="#"
                                       className="text-text-color font-semibold hover:text-primary-color">Elektronik</a>
                                </li>
                                <li>
                                    <a href="#" className="text-text-color font-semibold hover:text-primary-color">Çok
                                        Satanalar</a>
                                </li>
                                <li className="flex items-center">
                                    <IoIosFlash size={17}/>
                                    <a href="#" className="text-text-color font-semibold hover:text-primary-color">Flaş
                                        Ürünler</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
            </>

    )
}
