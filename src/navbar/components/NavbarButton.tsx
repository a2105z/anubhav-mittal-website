import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const NavbarButton: React.FC<{
  label: string;
  path: string;
  delay: number;
  isTransparent: boolean;
}> = ({ label, path, delay, isTransparent }) => {
  const location = useLocation();
  const active =
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

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
      <Link
        to={path}
        className={`relative inline-flex items-center px-3 py-2 text-[13.5px] tracking-[0.04em] transition-opacity ${colorClass} ${opacityClass}`}
      >
        {label}
        {active && (
          <motion.span
            layoutId="nav-underline"
            transition={{ type: "spring", stiffness: 380, damping: 32 }}
            className={`absolute left-3 right-3 bottom-0 h-[2px] rounded-full ${underlineColor}`}
          />
        )}
      </Link>
    </motion.div>
  );
};

export default NavbarButton;
