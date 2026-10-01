import { motion } from "framer-motion";

const Subheader: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-white font-light text-[clamp(0.46rem,1.4vw,1.1rem)] tracking-wide whitespace-nowrap"
      >
        CPG Finance Operator & Investor
        <span className="text-brand-gold"> | </span>
        Three-Time Public-Company Chief Financial Officer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay + 0.1,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-white/80 text-xs sm:text-sm uppercase tracking-eyebrow"
      >
        CFA  ·  CPA  ·  CMA  ·  MSA, Illinois Gies School of Business  ·  MBA,
        Harvard Business School
      </motion.p>
    </div>
  );
};

export default Subheader;
