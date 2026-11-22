import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";
import Education from "./Education";
import Credentials from "./Credentials";

const AWARDS = [
  {
    title: "President of India Gold Medal",
    description:
      "Awarded for proficiency in public administration and excellence in investigation and law during his Indian Civil Service training.",
  },
  {
    title: "Mehta Trophy",
    description:
      "Graduated top of the Indian Civil Service class — among the most decorated cadets in his cohort.",
  },
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

        <div className="mt-8">
          <Education />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {AWARDS.map((award, i) => (
            <motion.article
              key={award.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="border border-slate-200 bg-white p-5"
            >
              <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
                Award
              </p>
              <h3 className="mt-1.5 text-[16px] font-medium tracking-tight text-brand-ink">
                {award.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
                {award.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-5">
          <Credentials />
        </div>
      </Wrapper>
    </section>
  );
};

export default Academic;
