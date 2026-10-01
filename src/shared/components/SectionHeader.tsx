import { motion } from "framer-motion";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  nowrap?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  nowrap = false,
}) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";
  const eyebrowColor = light ? "text-brand-gold" : "text-brand-bronze";
  const titleColor = light ? "text-white" : "text-brand-ink";
  const descColor = light ? "text-white/65" : "text-slate-500";

  return (
    <div className={`${nowrap ? "max-w-none" : "max-w-3xl"} ${alignment}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className={`uppercase tracking-eyebrow text-[11px] font-medium ${eyebrowColor}`}
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className={`mt-2 font-light tracking-tight leading-tight ${titleColor} ${
          nowrap
            ? "whitespace-nowrap text-[clamp(1.2rem,3.6vw,2.6rem)]"
            : "text-3xl sm:text-4xl md:text-[2.6rem]"
        }`}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${descColor}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
