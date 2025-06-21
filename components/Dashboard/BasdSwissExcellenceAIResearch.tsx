import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const imageTexts = [
    {
        description: "We should always have a human approach to AI."
    },
    {
        description: "Self-Regulated Learning Across Modaites"
    },
    {
        description: "Anything-in, Anything-out: A New Modular AI Model"
    }
];

export default function BasdSwissExcellenceAIResearch() {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const containerRect = containerRef.current?.getBoundingClientRect();
            if (!containerRect) return;

            const triangleY = containerRect.top + containerRect.height / 2;

            const newActiveIndex = imageRefs.current.findIndex(ref => {
                if (!ref) return false;
                const rect = ref.getBoundingClientRect();
                return triangleY >= rect.top && triangleY <= rect.bottom;
            });

            if (newActiveIndex !== -1 && newActiveIndex !== activeIndex) {
                setActiveIndex(newActiveIndex);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeIndex]);


    return (
        <div className="max-w-[1500px] px-8 text-center mx-auto">
            <div className="xl:hidden text-center">
                <div className="text-[40px] font-bold my-8 w-[90%] mx-auto">Based on Swiss Excellence in AI Research</div>
                <div className="text-2xl text-neutral-500 mt-4">
                    Scholé is based on cutting-edge scientific research in machine learning developed at the EPFL Machine Learning for Education research group and supported by the EPFL AI Center and EPFL LEARN Center.
                </div>
            </div>
            <div className="flex gap-8 relative text-center">
                <div ref={containerRef} className="py-8 w-1/3 justify-end xl:justify-between xl:w-1/2 sticky flex gap-8 top-0 [height:fit-content]">
                    <div className="hidden xl:block w-3/5">
                        <div className="text-[40px] font-bold my-8 w-[90%] mx-auto">Based on Swiss Excellence in AI Research</div>
                        <div className="text-2xl text-neutral-500 mt-4">
                            Scholé is based on cutting-edge scientific research in machine learning developed at the EPFL Machine Learning for Education research group and supported by the EPFL AI Center and EPFL LEARN Center.
                        </div>
                    </div>
                    <div className="relative w-full xl:w-2/5">
                        {imageTexts.map((text, index) => (
                            <div
                                key={index}
                                className={`transition-all duration-700 absolute top-[50%] xl:[transform:translate(0,-50%)] text-[3vw] p-2 md:text-3xl md:p-4 rounded-lg bg-[var(--color-text)] text-[var(--color-primary)] ${activeIndex === index
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                    }`}
                            >
                                <div className="absolute top-[50%] left-full -mt-2 border-l-[10px] border-t-[5px] border-b-[15px] border-solid border-transparent border-l-[var(--color-text)]"></div>
                                {text.description}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col gap-8 px-8 py-16 w-2/3 xl:w-1/2 bg-[var(--text-secondary)] rounded-lg">
                    {[
                        "/Vinitra Swamy and Paola Mejia.jpg",
                        "/Navigating Self-regulated Learning Dimensions.webp",
                        "/Machine Learning Neural Network.jpg"
                    ].map((src, index) => (
                        <div
                            key={index}
                            ref={(el: HTMLDivElement | null) => {
                                imageRefs.current[index] = el;
                            }}
                            className="relative"
                        >
                            <Image
                                src={src}
                                className="!h-auto !relative"
                                alt={`Research image ${index + 1}`}
                                fill
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
