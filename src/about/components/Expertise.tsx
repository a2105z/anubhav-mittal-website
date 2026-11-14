import { motion } from "framer-motion";

const TILES: { title: string; description: string }[] = [
  {
    title: "P&L leadership",
    description:
      "The operating plan, volume, margin, and cash — owned with the business, not beside it.",
  },
  {
    title: "Commercial execution",
    description:
      "Price, distribution, trade, and the retailer book, closed against the plan.",
  },
  {
    title: "Capital allocation",
    description:
      "Where capital goes across brands, capacity, and acquisitions, held to return.",
  },
  {
    title: "Portfolio and M&A",
    description:
      "Acquisitions and divestitures from the case through integration and value capture.",
  },
  {
    title: "Operating cadence",
    description:
      "Reviews versus plan, forecast, and prior year, with a short list of decisions.",
  },
  {
    title: "Supply and margin",
    description:
      "Cost, mix, plants, and inventory sized to the shelf and the season.",
  },
  {
    title: "Board and investors",
    description:
      "The equity story, the dividend, and the conversation with the board.",
  },
  {
    title: "Category leadership",
    description:
      "Pet and garden brands run as a portfolio, with growth where the shelf pays.",
  },
];

const Expertise: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">
      {TILES.map((tile, i) => (
        <motion.div
          key={tile.title}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: i * 0.03 }}
          className="border-r border-b border-slate-200 px-5 py-5"
        >
          <h4 className="text-brand-ink text-[14px] font-medium tracking-tight">
            {tile.title}
          </h4>
          <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
            {tile.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Expertise;
