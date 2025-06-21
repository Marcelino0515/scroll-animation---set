import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export default function MeetingScholeTeam() {
    const ImageArray = [...Array(3)].map((_, i) => (
        <div key={i} className="h-[400px] w-auto">
        <Image
            key={i}
            src={`/SlidebarImages/people${i + 1}.png`}
            alt="logo"
            fill
        />
        </div>
    ));

    return (
        <>
            <div className="text-[60px] text-center mt-40 mb-12">Meet the Scholé Team</div>
            <div className="text-center text-xl">Passionate researchers driving the future of learning.</div>
            <div id="team-images" className="flex justify-center mx-8 my-12">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    className="w-full bg-transparent max-w-[800px]"
                >
                    {ImageArray.map((image, index) => (
                        <SwiperSlide key={index}>
                            {image}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="bg-[var(--color-secondary)] text-center bg-[url('/ScholeTeam.jpeg')] bg-cover bg-center bg-no-repeat bg-opacity-20 w-full aspect-[4/3] relative">
                <div className="absolute w-full h-full top-0 left-0 bg-[rgba(255,255,255,0.2)]"></div>
                <div className="mx-auto px-20 pt-[20%] max-w-[1000px] text-3xl font-bold">We&apos;re growing! Scholé is excited to welcome Aybars, Adrien, Yannis, Jeremy, Othmane and Rohit to our team at EPFL.</div>
                {/* {/* <Image className="mx-auto" src="/Schole.jpeg" alt="image load is failed." width={1000} height={1000} /> */}
            </div>
            <div className="flex flex-col gap-10 p-10 md:p-20 lg:p-40 text-center">
                <div className="text-3xl font-bold">Let&apos;s Join Forces!</div>
                <div className="text-[60px] font-bold">Discover Your Future-Ready Workforce</div>
                <div>Want to explore what Scholé can do for you and your organization? Reach out to us.</div>
                <button className="mx-auto px-4 py-2 font-bold rounded-lg transition-colors duration-600 bg-[var(--color-tertiary)] text-black hover:text-white hover:bg-[var(--color-secondary)]">Partner With Scholé</button>
            </div>
        </>
    );
}
