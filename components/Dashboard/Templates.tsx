import Image from "next/image";
import GrowIcon from "../GrowIcon";

export default function Templates() {
    return (
        <div className="mx-auto max-w-[900px] text-center">
            <div className="text-2xl text-[#FFA500]">
                <GrowIcon className="mr-3 inline [vertical-align:baseline]" />
                <span>Templates</span>
            </div>
            <div className="text-[60px] font-bold">Start closer to the finish line with templates made by industry experts
            </div>
            <div className="grid grid-cols-3 gap-4 my-24">
                <div className="flex flex-col gap-4 bg-[var(--color-secondary)] rounded-lg p-8">
                    <div className="pb-4"><Image src="/Logo-light.png" alt="logo" width={100} height={100} /></div>
                    <div className="text-2xl">Verified by experts</div>
                    <div className="text-sm text-neutral-500">Templates created by the leading experts to help you deliver a powerful story</div>
                </div>
                <div className="flex flex-col gap-4 bg-[var(--color-secondary)] rounded-lg p-8">
                    <div className="pb-4"><Image src="/Logo-light.png" alt="logo" width={100} height={100} /></div>
                    <div className="text-2xl">Contextual guidance</div>
                    <div className="text-sm text-neutral-500">Best practice guidance is baked into the template - without leaving Chronicle
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-[var(--color-secondary)] rounded-lg p-8">
                    <div className="pb-4"><Image src="/Logo-light.png" alt="logo" width={100} height={100} /></div>
                    <div className="text-2xl">Templates for everything</div>
                    <div className="text-sm text-neutral-500">Whether it&apos;s all hands or pitch decks, start closer to the finish line with a template
                    </div>
                </div>
            </div>
            <div className="max-w-[1000px]">
                <div className="flex gap-4 justify-center my-4">
                    <div className="bg-[var(--color-secondary)] rounded-lg px-4 py-2">
                        <GrowIcon className="mr-3 inline [vertical-align:text-bottom]" />
                        <span>Pitch decks</span>
                    </div>
                    <div className="bg-[var(--color-secondary)] rounded-lg px-4 py-2">
                        <GrowIcon className="mr-3 inline [vertical-align:text-bottom]" />
                        <span>All hands</span>
                    </div>
                    <div className="bg-[var(--color-secondary)] rounded-lg px-4 py-2">
                        <GrowIcon className="mr-3 inline [vertical-align:text-bottom]" />
                        <span>Investor update</span>
                    </div>
                    <div className="bg-[var(--color-secondary)] rounded-lg px-4 py-2">
                        <GrowIcon className="mr-3 inline [vertical-align:text-bottom]" />
                        <span>Product roadmap</span>
                    </div>
                </div>
                <div className="flex gap-4 justify-center my-4">
                    <div className="bg-[var(--color-secondary)] rounded-lg px-4 py-2">
                        <GrowIcon className="mr-3 inline [vertical-align:text-bottom]" />
                        <span>Research findings</span>
                    </div>
                    <div className="bg-[var(--color-secondary)] rounded-lg px-4 py-2">
                        <GrowIcon className="mr-3 inline [vertical-align:text-bottom]" />
                        <span>Marketing strategy</span>
                    </div>
                    <div className="bg-[var(--color-secondary)] rounded-lg px-4 py-2">
                        <GrowIcon className="mr-3 inline [vertical-align:text-bottom]" />
                        <span>North star goals</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
