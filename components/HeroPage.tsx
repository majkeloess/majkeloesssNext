import Link from "next/link";

const HeroPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 z-50">
        <Link href="/whoami">
          <button className="text-[#38bdf8] text-[10vw] leading-[120px] uppercase">
            whoami
          </button>
        </Link>
        <Link href="/projects">
          <button className="text-[#e879f9] text-[10vw] leading-[96px] uppercase">
            projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroPage;
