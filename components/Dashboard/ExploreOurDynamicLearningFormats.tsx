import Image from "next/image";
import GrowIcon from "../GrowIcon";
import FadeInSection from "../FadeInSection";

export default function ExploreOurDynamicLearningFormats() {
    return (
        <div className="flex flex-col text-center lg:flex-row lg:text-left items-center gap-16 mx-auto my-20 p-4 max-w-[1000px] overflow-hidden">
            <FadeInSection fadex='right' fadey="down" distance={200} duration={0.5} className="py-8 w-full lg:w-1/2">
                <div className="text-[#FFA500] text-xl">
                    <GrowIcon className="mr-3 inline [vertical-align:baseline]" />
                    <span>You decide how - we generate it on the fly!</span>
                </div>
                <div className="text-[60px] font-bold my-8 leading-tight">Explore Our Dynamic Learning Formats</div>
                <ul className="text-xl text-neutral-500">
                    <li>Engaging videos that captivate and educate.</li>
                    <li>Insightful podcasts for on-the-go learning.</li>
                    <li>AI role-plays that simulate real-world scenarios.</li>
                </ul>
            </FadeInSection>
            <FadeInSection fadex='left' fadey="down" distance={200} duration={0.5} className="flex flex-col gap-8 px-8 py-16 lg:w-1/2 bg-[var(--color-secondary)] rounded-lg relative group">
                <Image src="/Multimodality.png" className="!h-auto !relative" alt="img load failed." fill />
                <div className="text-3xl">Multimodality</div>
                <p className="text-xl">At Scholé, we believe that adult learners should learn what they want, when they want, the way they want -- whether that means a podcast for the morning commute, a smartphone game for a 5-minute break, or a video with interactive questions.</p>
                <div className="absolute w-px h-[86px] left-0 top-[80%] z-[1] opacity-0 [background:linear-gradient(0deg,_rgba(59,_56,_65,_0)_22.4%,_#FFA500_60.94%,_rgba(59,_56,_65,_0))] [transition:top_0.8s,opacity_0.4s_linear] group-hover:top-[20%] group-hover:opacity-100 [will-change:top,opacity]"></div>
            </FadeInSection>
        </div>
    );
}
