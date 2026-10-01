import { motion } from "framer-motion";
import LogoBlock from "../../shared/components/LogoBlock";

interface Credential {
  logo: string;
  monogram: string;
  title: string;
  issuer: string;
  year: string;
}

const CREDENTIALS: Credential[] = [
  {
    logo: "/icons/organizations/cfa.png",
    monogram: "CFA",
    title: "Chartered Financial Analyst (CFA)",
    issuer: "CFA Institute",
    year: "Issued 2012",
  },
  {
    logo: "/icons/organizations/cpa.png",
    monogram: "CPA",
    title: "Certified Public Accountant (CPA)",
    issuer: "American Institute of Certified Public Accountants",
    year: "Issued 2027",
  },
  {
    logo: "/icons/organizations/cma.png",
    monogram: "CMA",
    title: "Certified Management Accountant (CMA)",
    issuer: "Institute of Management Accountants",
    year: "Issued 2024",
  },
];

const Credentials: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {CREDENTIALS.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.5,
            delay: i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cardHover"
        >
          <div className="flex items-start gap-4">
            <LogoBlock
              src={c.logo}
              monogram={c.monogram}
              alt={c.title}
              size="md"
            />
            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
                {c.year}
              </p>
              <h4 className="mt-1 text-brand-ink text-lg font-semibold tracking-tight">
                {c.title}
              </h4>
              <p className="mt-0.5 text-[14.5px] text-slate-600">{c.issuer}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Credentials;
