import { motion } from "framer-motion";

const Subheader: React.FC<{ delay: number }> = ({ delay }) => {
  return (
    <div className="space-y-2.5">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-white font-light text-[1.3rem] leading-snug sm:text-[1.6rem] tracking-tight"
      >
        Chairman, President and Chief Executive Officer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay + 0.08,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-white/75 text-[13px] sm:text-sm tracking-wide"
      >
        Central Garden &amp; Pet
        <span className="mx-2 text-white/30">·</span>
        San Francisco
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: delay + 0.16,
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pt-1 text-[12px] sm:text-[13px] uppercase tracking-eyebrow text-brand-gold/90"
      >
        CPG P&amp;L Operating Executive
      </motion.p>
    </div>
  );
};

export default Subheader;
