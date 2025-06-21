import Image from "next/image";

export default function GridBoxes() {
    return (
        <>
            <div className="mx-auto max-w-[1000px] bg-[var(--color-secondary)] p-8 rounded-lg transition:transform duration-[0.6s] hover:[transform:scale(1.1)] mb-4">
                <div className="flex items-center flex-col gap-6 w-1/2 text-center p-8">
                    <div className="text-[#FFA500] text-sm">VISUALISE INFO</div>
                    <div className="text-2xl font-bold">Built for business. Feels like play.</div>
                    <div className="text-sm">Widgets are carefully crafted to help you distill powerful messages from your information and data.</div>
                </div>
                <div></div>
            </div>
            <div className="flex gap-4 mx-auto max-w-[1000px]">
                <div className="flex flex-col gap-4 bg-[var(--color-secondary)] p-8 rounded-lg transition:transform duration-[0.6s] hover:[transform:scale(1.1)]">
                    <div><Image src="/Logo-light.png" alt="image load is failed." width={100} height={100} /></div>
                    <div className="flex items-center flex-col gap-6 text-center p-left-8">
                        <div className="text-[#FFA500] text-sm">CUSTOMISE</div>
                        <div className="text-2xl font-bold">Easy to customise. Hard to get wrong.</div>
                        <div className="text-sm">Widgets are designed to customized easily. They always look stunning, no matter how you edit.</div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 bg-[var(--color-secondary)] p-8 rounded-lg transition:transform duration-[0.6s] hover:[transform:scale(1.1)]">
                    <div><Image src="/Logo-light.png" alt="image load is failed." width={100} height={100} /></div>
                    <div className="flex items-center flex-col gap-6 text-center p-left-8">
                        <div className="text-[#FFA500] text-sm">EMBED</div>
                        <div className="text-2xl font-bold">A window into your work.</div>
                        <div className="text-sm">Simply paste a link to any of the hundreds of tools you use and Chronicle will seamlessly package your outputs.</div>
                    </div>
                </div>
            </div>
        </>
    );
}
