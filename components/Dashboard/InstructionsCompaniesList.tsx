import Image from "next/image";

export default function InstructionsCompaniesList() {
  const ImageArray = [...Array(7)].map((_, i) => (
    <div key={i} className="flex-shrink-0 px-4">
      <Image
        src={`/SlidebarImages/(${i + 1}).png`}
        alt="logo"
        width={200}
        height={200}
        style={{ width: '200px', objectFit: 'contain' }}
      />
    </div>
  ));

  return (
    <>
      <div className="m-16">
        <div className="text-[40px] text-center m-8">Backed up by leading institutions and companies</div>
        <div className="relative w-full overflow-hidden bg-white max-w-[1200px] mx-auto">
          <div className="flex animate-scroll items-center">
            {ImageArray}
            {ImageArray}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
}
