import Link from "next/link";

const HeroPage = () => {
  return (
    <div className="overflow-hidden h-screen w-screen relative">
      <div className="flex xl:gap-16 gap-8 xl:mt-12 mt-8 xl:ml-12 ml-8">
        <section>
          <h1 className="text-white xl:text-4xl text-2xl font-normal">
            frontend engineer
          </h1>
          <h3 className="text-white xl:text-sm text-xs text-right font-light">
            @majkeloess, 2025
          </h3>
        </section>
        <nav className="flex flex-col text-white text-2xl font-light">
          <Link
            className="text-[#e879f9] hover:text-[#c084fc] transition-colors duration-300"
            href="/projects"
          >
            projects
          </Link>
          <Link
            className="text-[#22d3ee] hover:text-[#38bdf8] transition-colors duration-300"
            href="/whoami"
          >
            whoami
          </Link>
        </nav>
      </div>
      <section>
        {[
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
          "majkeloess",
        ].map((char, index) => (
          <span
            style={{
              transform: `rotate(${5 * index}deg)`,
              opacity: `${100 - 6 * index}%`,
              fontSize: "200px",
            }}
            className="text-[#c084fc] absolute origin-left"
            // biome-ignore lint/suspicious/noArrayIndexKey: <expectted>
            key={char + index}
          >
            {char}
          </span>
        ))}
      </section>
    </div>
  );
};

export default HeroPage;
