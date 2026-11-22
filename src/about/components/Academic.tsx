import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";

const DEGREES = [
  {
    school: "Harvard Business School",
    detail: "MBA · Finance, Strategy, and General Management",
    dates: "2005 – 2007",
  },
  {
    school: "Indian Institute of Technology, Kanpur",
    detail: "B.Tech, Mechanical Engineering",
    dates: "1993 – 1997",
  },
];

const AWARDS = [
  "President of India Gold Medal",
  "Mehta Trophy, top of the Indian Civil Service class",
  "Top 5% of the IIT Kanpur class",
  "Duncan's Industries Award",
  "IIT Proficiency Prize",
];

const Academic: React.FC = () => {
  return (
    <section
      id="academic"
      className="scroll-mt-20 border-t border-slate-200 bg-white py-16 sm:py-20"
    >
      <Wrapper>
        <SectionHeader
          eyebrow="Background"
          title="Academic background and awards"
        />

        <div className="mt-8 max-w-3xl">
          <ul className="divide-y divide-slate-200 border-y border-slate-200">
            {DEGREES.map((degree, i) => (
              <motion.li
                key={degree.school}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
              >
                <div>
                  <p className="text-[16px] font-medium tracking-tight text-brand-ink">
                    {degree.school}
                  </p>
                  <p className="mt-0.5 text-[14.5px] text-slate-500">
                    {degree.detail}
                  </p>
                </div>
                <p className="text-[12px] uppercase tracking-eyebrow text-slate-400 sm:shrink-0">
                  {degree.dates}
                </p>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.08 }}
            className="mt-8"
          >
            <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
              Awards
            </p>
            <p className="mt-3 text-[15.5px] leading-relaxed text-slate-600">
              {AWARDS.join(" · ")}
            </p>
            <p className="mt-4 text-[14.5px] text-slate-500">
              CFA charterholder, 2012 · CMA, 2024
            </p>
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Academic;
