import { motion } from "framer-motion";
import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";
import LogoBlock from "../../shared/components/LogoBlock";

const ease = [0.22, 1, 0.36, 1] as const;

const DEGREES = [
  {
    logo: "/icons/organizations/hbs.png",
    monogram: "HBS",
    school: "Harvard Business School",
    detail: "MBA · Finance, Strategy, and General Management",
    dates: "2005 – 2007",
    location: "Boston, Massachusetts",
  },
  {
    logo: "/icons/organizations/iit-kanpur.png",
    monogram: "IIT",
    school: "Indian Institute of Technology, Kanpur",
    detail: "B.Tech, Mechanical Engineering",
    dates: "1993 – 1997",
    location: "Kanpur, India",
  },
];

const AWARDS = [
  "President of India Gold Medal",
  "Mehta Trophy, top of the Indian Civil Service class",
  "Top 5% of the IIT Kanpur class",
  "Duncan's Industries Award",
  "IIT Proficiency Prize",
];

const CREDENTIALS = [
  {
    logo: "/icons/organizations/cfa.png",
    monogram: "CFA",
    title: "CFA charterholder",
    year: "2012",
    issuer: "CFA Institute",
  },
  {
    logo: "/icons/organizations/cma.png",
    monogram: "CMA",
    title: "CMA",
    year: "2024",
    issuer: "Institute of Management Accountants",
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

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {DEGREES.map((degree, i) => (
            <motion.article
              key={degree.school}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start gap-4">
                <LogoBlock
                  src={degree.logo}
                  monogram={degree.monogram}
                  alt={degree.school}
                  size="md"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
                    {degree.dates} · {degree.location}
                  </p>
                  <h3 className="mt-1 text-[16px] font-medium tracking-tight text-brand-ink">
                    {degree.school}
                  </h3>
                  <p className="mt-1 text-[14.5px] text-slate-600">
                    {degree.detail}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AWARDS.map((award, i) => (
            <motion.article
              key={award}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease }}
              className="border border-slate-200 bg-white p-5"
            >
              <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
                Award
              </p>
              <h3 className="mt-1.5 text-[15px] font-medium leading-snug tracking-tight text-brand-ink">
                {award}
              </h3>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
          {CREDENTIALS.map((credential, i) => (
            <motion.article
              key={credential.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="border border-slate-200 bg-white p-5"
            >
              <div className="flex items-start gap-4">
                <LogoBlock
                  src={credential.logo}
                  monogram={credential.monogram}
                  alt={credential.title}
                  size="md"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
                    {credential.year}
                  </p>
                  <h3 className="mt-1 text-[16px] font-medium tracking-tight text-brand-ink">
                    {credential.title}
                  </h3>
                  <p className="mt-0.5 text-[14.5px] text-slate-600">
                    {credential.issuer}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Academic;
