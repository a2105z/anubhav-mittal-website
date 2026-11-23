import { motion } from "framer-motion";

type Tile = {
  eyebrow: string;
  title: string;
  description: string;
};

const TILES: Tile[] = [
  {
    eyebrow: "Distinctions",
    title: "President of India Gold Medal",
    description:
      "Awarded for proficiency in public administration and excellence in investigation and law during his Indian Civil Service training — alongside the Mehta Trophy for graduating top of class.",
  },
  {
    eyebrow: "Academic Honors",
    title: "Top 5% at IIT Kanpur",
    description:
      "Graduated in the top 5% of his B.Tech class, winning the Duncan's Industries Award for outstanding undergraduate project and the IIT Proficiency Prize for the best B.Tech project of his cohort.",
  },
  {
    eyebrow: "Citizenship",
    title: "United States citizen",
    description: "Based in Walnut Creek.",
  },
];

const INTERESTS = [
  "Cricket",
  "Table Tennis",
  "Horse Riding",
  "Pistol Shooting",
  "Mentorship",
  "Long-form Writing",
];

const Personal: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {TILES.map((tile, i) => (
          <motion.div
            key={tile.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border border-slate-200 p-5"
          >
            <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
              {tile.eyebrow}
            </p>
            <h4 className="mt-1.5 text-brand-ink text-[15px] font-medium tracking-tight leading-snug">
              {tile.title}
            </h4>
            <p className="mt-3 text-[13.5px] leading-relaxed text-slate-600">
              {tile.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="border border-slate-200 px-5 py-4"
      >
        <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
          Interests
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {INTERESTS.map((label) => (
            <span
              key={label}
              className="inline-flex items-center border border-slate-200 px-3 py-1 text-[12.5px] text-slate-600"
            >
              {label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Personal;
