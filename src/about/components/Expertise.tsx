import { motion } from "framer-motion";

const TILES: { title: string; description: string }[] = [
  {
    title: "Enterprise CFO",
    description:
      "The finance mandate at scale — capital, cash, the operating plan, and the conversation with the CEO and the board.",
  },
  {
    title: "Financial Planning & Analysis",
    description:
      "Annual operating plans, rolling forecasts, long-range plans, and monthly performance reviews.",
  },
  {
    title: "Capital Allocation",
    description:
      "Investment frameworks, return thresholds, and governance for CapEx, M&A, and organic growth.",
  },
  {
    title: "Mergers & Acquisitions",
    description:
      "Acquisitions, divestitures, and joint ventures from evaluation through close, integration, and value capture.",
  },
  {
    title: "Investor Relations",
    description:
      "Earnings, board reporting, and the equity narrative for public and PE-backed companies.",
  },
  {
    title: "Controllership",
    description:
      "Financial reporting, internal controls, SOX / ICFR, and external audit.",
  },
  {
    title: "Treasury and capital structure",
    description:
      "Liquidity, financing, cost of capital, and balance-sheet strategy.",
  },
  {
    title: "Supply chain finance",
    description:
      "Pricing, cost, inventory, manufacturing performance, and S&OP alignment.",
  },
];

const Expertise: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {TILES.map((tile, i) => (
        <motion.div
          key={tile.title}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-white border border-slate-200 rounded-2xl p-5 shadow-card"
        >
          <h4 className="text-brand-ink text-[15px] font-semibold tracking-tight">
            {tile.title}
          </h4>
          <p className="mt-2 text-[13.5px] leading-relaxed text-slate-500">
            {tile.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Expertise;
