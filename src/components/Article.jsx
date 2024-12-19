import React from 'react'

export default function Article() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-center px-4 md:px-0 mt-20 gap-y-5 md:gap-x-7 pb-10">
            <div>
                <img
                    src="https://cdn.dsmcdn.com/ty1612/pimWidgetApi/mobile_20241212090954_3208386KadinMobile202412121102.jpg"
                    alt=""
                    className="rounded-xl"
                />
            </div>
            <div>
                <img
                    src="https://cdn.dsmcdn.com/ty1610/pimWidgetApi/mobile_20241206070915_3208705EvAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpAmpYasamMobile202412051801.jpg"
                    alt=""
                    className="rounded-xl"
                />
            </div>
            <div>
                <img
                    src="https://cdn.dsmcdn.com/ty1606/pimWidgetApi/mobile_20241128055249_3163898KadinMobile2024091718031.jpg"
                    alt=""
                    className="rounded-xl"
                />
            </div>
        </div>
    )
}
