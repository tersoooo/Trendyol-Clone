import React from 'react'

export default function Banner() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 place-items-center md:gap-x-5 pb-10">
            <div>
                <a href="#">
                    <img
                        src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Sepet_202304181225.png"
                        alt=""
                    />
                </a>
            </div>
            <div>
                <a href="#">
                    <img
                        src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Onecikan_202304181225.png"
                        alt=""/>
                </a>
            </div>
            <div>
                <a href="#">
                    <img
                        src="https://cdn.dsmcdn.com/mnresize/500/500/marketing/datascience/automation/2023/4/18/Flash_202304181225.png"
                        alt=""/>
                </a>
            </div>
        </div>
    )
}
