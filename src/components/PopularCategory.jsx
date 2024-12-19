import React from 'react'

export default function PopularCategory() {
    return (
        <div className="pt-24 pb-10">
            <h3 className="text-text-color font-bold text-xl pb-5">Popüler Kategoriler</h3>
            <div className="grid place-items-center gap-y-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
                <div className="w-[186px]">
                    <img
                        src="https://cdn.dsmcdn.com/marketing/datascience/automation/2023/1/3/Kazak_Kadin_202301031347.jpg"
                        alt=""
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="w-[186px]">
                    <img
                        src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Ic_Giyim_202212271854.jpg"
                        alt=""
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="w-[186px]">
                    <img
                        src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/30/Pantolon_202212302146.jpg"
                        alt=""
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="w-[186px]">
                    <img
                        src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/30/Sweat_202212302146.jpg"
                        alt=""
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="w-[186px]">
                    <img
                        src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Bluz_202212271854.jpg"
                        alt=""
                        className="rounded-xl object-cover"
                    />
                </div>
                <div className="w-[186px]">
                    <img
                        src="https://cdn.dsmcdn.com/marketing/datascience/automation/2022/12/27/Pijama_Takimi_K_202212271855.jpg"
                        alt=""
                        className="rounded-xl object-cover"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:grid-cols-2 md:gap-x-5 lg:gap-x-5 mt-4 px-5">
                <div>
                    <img
                        src="https://cdn.dsmcdn.com/ty1615/tr-event-banner/611d8ea6-35f2-4038-9976-f70069addcf5tr_3210572.jpeg"
                        alt=""
                        className="hover:scale-105 rounded-xl transition-all"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.dsmcdn.com/ty1608/pimWidgetApi/mobile_20241206081915_111111KadinMobile202412061101.jpg"
                        alt=""
                        className="hover:scale-105 rounded-xl transition-all"
                    />
                </div>
                <div>
                    <img
                        src="https://cdn.dsmcdn.com/ty1608/pimWidgetApi/mobile_20241202180223_2866650KadinMobile202412021627.jpg"
                        alt=""
                        className="hover:scale-105 rounded-xl transition-all"
                    />
                </div>
            </div>
        </div>
    )
}
