"use client"
import {SliderData} from "@/utils/queryHelpers";
import {useRef, useState} from "react";

import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import 'swiper/css';

const SwiperWrap = () => {
    const left = useRef(null);
    const right = useRef(null);
    const [, setInit] = useState(false);
    // used to init references for buttons

    return (
        <div className={"mx-auto my-10 w-5/6 relative"}>
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: left.current,
                    nextEl: right.current
                }}
                autoplay= {{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
                direction={'horizontal'}
                initialSlide={1}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onInit={() => setInit(true)}
            >
                {SliderData.map((slide)=>{
                    return <SwiperSlide className={"bg-white"} key={slide.title}>
                        <div className={"flex"}>
                            <Link href={"/video"} className={"max-2xl:w-1/2 w-1/3 max-lg:w-1/3 max-sm:hidden"}>
                                <Image priority={true} width={0} height={0} sizes={"20vw"} className={"w-full h-full max-lg:object-contain"} src={slide.image} alt=""/>
                            </Link>
                            <div className={"cursor-grab bg-primary_text text-white py-2.5 pl-5 pr-10 w-full max-2xl:w-1/2 max-lg:w-full"}>
                                <h3 className={"font-medium text-lg"}>{slide.title}</h3>
                                <p className={"pt-5 pb-7 font-thin max-lg:text-sm max-lg:pt-3 max-lg:pb-5"}>{slide.text}</p>
                                <button className={"bg-primary px-3"}>More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                })}
            </Swiper>
            <div ref={left} className={"w-10 rounded-full h-10 drop-shadow-lg cursor-pointer absolute bg-white top-[calc(50%-20px)] left-[-20px] z-20"}>
                <i className={"fas fa-chevron-left"}/>
            </div>
            <div ref={right} className={"w-10 rounded-full drop-shadow-lg h-10 cursor-pointer absolute bg-white top-[calc(50%-20px)] z-20 right-[-20px]"}>
                <i className={"fas fa-chevron-right"}/>
            </div>
        </div>

    );
};

export default SwiperWrap;