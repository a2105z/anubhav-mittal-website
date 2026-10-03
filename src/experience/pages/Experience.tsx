import Wrapper from "../../shared/components/Wrapper";
import ExperienceItem from "../components/ExperienceItem";
import { EXPERIENCES } from "../../constants/projects";

const Experience: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="pt-28 sm:pt-36 pb-24 sm:pb-32">
        <Wrapper>
          <ol className="relative">
            {EXPERIENCES.map((experience, index) => {
              const isFirst = index === 0;
              const isLast = index === EXPERIENCES.length - 1;
              const dateRange = `${experience.startDate} — ${experience.endDate}`;
              return (
                <li
                  key={`${experience.company}-${index}`}
                  className="relative grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[160px_auto_minmax(0,2fr)] gap-x-4 sm:gap-x-8 pb-10 sm:pb-12 last:pb-0"
                >
                  {/* Date column (desktop) */}
                  <div className="hidden sm:flex items-start justify-end pt-7 pr-1">
                    <p className="text-[11.5px] uppercase tracking-eyebrow font-medium text-slate-400 whitespace-nowrap">
                      {dateRange}
                    </p>
                  </div>

                  {/* Center rail */}
                  <div className="flex items-stretch justify-center">
                    <div className="flex flex-col items-center h-full">
                      <div
                        className={`h-[2px] sm:h-[34px] border-l border-slate-200 ${
                          isFirst ? "opacity-0" : ""
                        }`}
                      />
                      <div className="w-3 h-3 rounded-full bg-brand-navy ring-4 ring-white shadow-[0_0_0_1px_rgba(11,27,43,0.08)]" />
                      <div
                        className={`flex-1 border-l border-slate-200 ${
                          isLast ? "opacity-0" : ""
                        }`}
                      />
                    </div>
                  </div>

                  <div className="pl-2 sm:pl-0">
                    {/* Mobile date */}
                    <p className="sm:hidden text-[11.5px] uppercase tracking-eyebrow font-medium text-slate-400 mb-2">
                      {dateRange}
                    </p>
                    <ExperienceItem
                      experience={experience}
                      delay={index * 0.05}
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </Wrapper>
      </section>
    </div>
  );
};

export default Experience;
