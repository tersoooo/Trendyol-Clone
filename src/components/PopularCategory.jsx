import React from 'react'

export default function PopularCategory() {
    return (
        <div className="pt-24">
            <h3 className="text-text-color font-bold text-xl pb-5">Popüler Kategoriler</h3>
            <div className="grid grid-cols-6">
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
        </div>
    )
}
