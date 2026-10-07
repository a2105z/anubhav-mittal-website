import { motion } from "framer-motion";
import LogoBlock from "../../shared/components/LogoBlock";

interface EducationEntry {
  logo: string;
  monogram: string;
  institution: string;
  location: string;
  degree: string;
  concentration?: string;
  dates: string;
  honors?: string[];
  activities?: string[];
  coursework?: string;
  kind?: "Degree" | "Executive Education";
}

const ENTRIES: EducationEntry[] = [
  {
    logo: "/icons/organizations/hbs.png",
    monogram: "HBS",
    institution: "Harvard Business School",
    location: "Boston, Massachusetts, United States",
    degree: "Master in Business Administration (MBA)",
    concentration: "Concentration in Finance and Strategy",
    dates: "2005 – 2007",
    kind: "Degree",
    honors: [
      "Elected CFO of the HBS Finance Club.",
      "Member of the PE/VC, Strategy, Technology, and General Management Clubs.",
      "Summer associate at Google's Mountain View HQ as a Business, Sales and Operations Intern.",
    ],
    coursework:
      "Coursework anchored in corporate finance, valuation, capital markets, M&A, competitive strategy, and general management.",
  },
  {
    logo: "/icons/organizations/iit-kanpur.png",
    monogram: "IIT",
    institution: "Indian Institute of Technology, Kanpur",
    location: "Kanpur, Uttar Pradesh, India",
    degree: "Bachelor of Technology (BTech), Mechanical Engineering",
    dates: "1993 – 1997",
    kind: "Degree",
    honors: [
      "Graduated in the top 5% of class — awarded the Merit Certificate for academic excellence.",
      "Won the Duncan's Industries Award for outstanding undergraduate project.",
      "Awarded the IIT Proficiency Prize for the best BTech project of the cohort.",
    ],
    coursework:
      "Coursework spanned thermodynamics, fluid mechanics, manufacturing systems, control systems, and applied mathematics — alongside leadership and student-led initiatives across hostel and academic life.",
  },
  {
    logo: "/icons/organizations/uiuc.png",
    monogram: "UIUC",
    institution: "University of Illinois Urbana-Champaign",
    location: "Urbana-Champaign, Illinois, United States",
    degree: "Master of Science (MS), Accountancy",
    dates: "2027 – 2028",
    kind: "Degree",
    coursework:
      "Graduate coursework in financial accounting, managerial accounting, auditing, taxation, and data analytics — deepening the technical foundation for business-unit finance, internal controls, and public-company reporting.",
  },
];

const EducationCard: React.FC<{ entry: EducationEntry; index: number }> = ({
  entry,
  index,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cardHover flex flex-col h-full"
  >
    <div className="flex items-start gap-4">
      <LogoBlock
        src={entry.logo}
        monogram={entry.monogram}
        alt={entry.institution}
        size="md"
      />
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
            {entry.dates}  ·  {entry.location}
          </p>
          {entry.kind === "Executive Education" && (
            <span className="inline-flex items-center rounded-full border border-brand-bronze/40 bg-brand-bronze/5 px-2 py-0.5 text-[10px] uppercase tracking-eyebrow font-medium text-brand-bronze">
              Executive Education
            </span>
          )}
        </div>
        <h4 className="mt-1.5 text-brand-ink text-lg font-semibold tracking-tight leading-snug">
          {entry.institution}
        </h4>
        <p className="mt-1 text-[14.5px] text-slate-700">{entry.degree}</p>
        {entry.concentration && (
          <p className="text-[13.5px] text-slate-500">{entry.concentration}</p>
        )}
      </div>
    </div>

    {entry.honors && entry.honors.length > 0 && (
      <ul className="mt-4 space-y-1.5 pl-0.5">
        {entry.honors.map((line, idx) => (
          <li
            key={idx}
            className="relative pl-4 text-[13.5px] leading-relaxed text-slate-600"
          >
            <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-brand-bronze" />
            {line}
          </li>
        ))}
      </ul>
    )}

    {entry.coursework && (
      <>
        <div className="mt-4 flex-1" aria-hidden />
        <p className="pt-4 border-t border-slate-200/70 text-[13px] leading-relaxed text-slate-500 italic">
          {entry.coursework}
        </p>
      </>
    )}
  </motion.div>
);

const Education: React.FC = () => {
  const [featured, ...rest] = ENTRIES;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center">
        <div className="w-full md:w-[calc(50%-0.625rem)]">
          <EducationCard entry={featured} index={0} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rest.map((entry, i) => (
          <EducationCard key={entry.institution} entry={entry} index={i + 1} />
        ))}
      </div>
    </div>
  );
};

export default Education;
