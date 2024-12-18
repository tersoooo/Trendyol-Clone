import React from 'react'

export default function FooterLegal() {
    return (
        <div className="container mx-auto h-[47px] mt-10">
            <div className="flex justify-between items-center h-full text-white text-sm">
                <div>
                    <span className="">©2024 DSM Grup Danışmanlık İletişim ve Satış Tic. A.Ş. Her Hakkı Saklıdır.</span>
                </div>
                <div>
                    <ul className="flex gap-x-10 font-medium">
                        <li>
                            <a href="#" className="text-[12px] hover:text-primary-color">Çerez Tercihleri</a>
                        </li>
                        <li>
                            <a href="#" className="text-[12px] hover:text-primary-color">
                                KVKK ve Gizlilik Politikası
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[12px] hover:text-primary-color">
                                DSM Grup
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-[12px] hover:text-primary-color">
                                Kullanım Koşulları
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
