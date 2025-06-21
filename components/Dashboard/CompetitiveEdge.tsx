import Image from "next/image";
import GrowIcon from "../GrowIcon";
import FadeInSection from "../FadeInSection";

export default function CompetitiveEdge() {
    return (
        <div className="mx-8 bg-[var(--color-secondary)] rounded-lg">
            <div className="flex flex-col lg:flex-row items-center mx-auto max-w-[1000px] text-center lg:text-left px-40 lg:px-4 py-24 my-24 gap-8">
                <div className="lg:w-1/2">
                    <div className="text-[#FFA500] text-2xl">
                        <GrowIcon className="mr-3 inline [vertical-align:baseline]" />
                        <span>Your Competitive Edge</span>
                    </div>
                    <div className="text-[60px] font-bold leading-tight my-8">Meet Olé: Your AI Learning Companion</div>
                    <div className="text-neutral-500">Your AI teaching assistant, Olé, curates personalized data science learning paths tailored to your team&apos;s setting. With Olé, employees can successfully navigate their upskilling journey, ensuring they are prepared for tomorrow&apos;s challenges.</div>
                </div>
                <FadeInSection fadey='up' className="lg:w-1/2">
                    <Image src="/ChatGif.gif" className="lazy-gif !h-auto !relative" alt="gif load failed." fill />
                </FadeInSection>
            </div>
        </div>
    );
}
