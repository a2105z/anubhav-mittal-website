import { motion } from "framer-motion";

const NavbarButton: React.FC<{
  label: string;
  href: string;
  active: boolean;
  delay: number;
  isTransparent: boolean;
  onNavigate?: () => void;
}> = ({ label, href, active, delay, isTransparent, onNavigate }) => {
  const colorClass = isTransparent ? "text-white" : "text-brand-ink";
  const opacityClass = active
    ? "opacity-100"
    : isTransparent
    ? "opacity-90 hover:opacity-100"
    : "opacity-70 hover:opacity-100";
  const underlineColor = isTransparent ? "bg-white" : "bg-brand-navy";

  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <a
        href={href}
        onClick={onNavigate}
        className={`relative inline-flex items-center px-3 py-2 text-[14px] tracking-[0.04em] transition-opacity ${colorClass} ${opacityClass}`}
      >
        {label}
        {active && (
          <motion.span
            layoutId="nav-underline"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className={`absolute left-3 right-3 bottom-0 h-[2px] rounded-full ${underlineColor}`}
          />
        )}
      </a>
    </motion.div>
  );
};

export default NavbarButton;
