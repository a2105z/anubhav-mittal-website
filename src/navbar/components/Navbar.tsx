import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavbarButton from "./NavbarButton";

const NAV_ITEMS: { label: string; path: string }[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Experience", path: "/experience" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const Navbar: React.FC<{ isTransparent: boolean }> = ({ isTransparent }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-transparent"
          : "bg-white/85 backdrop-blur-xl border-b border-slate-200/70 shadow-[0_1px_2px_rgba(11,27,43,0.04)]"
      }`}
    >
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className={`tracking-[0.18em] uppercase text-[0.78rem] sm:text-[0.85rem] font-medium transition-colors ${
              isTransparent
                ? "text-white hover:text-white/80"
                : "text-brand-ink hover:text-brand-navy"
            }`}
          >
            <span className="font-semibold">Anubhav</span>{" "}
            <span className="opacity-90">Mittal</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item, i) => (
              <NavbarButton
                key={item.path}
                label={item.label}
                path={item.path}
                delay={0.04 * i}
                isTransparent={isTransparent}
              />
            ))}
          </nav>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className={`md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-brand-ink hover:bg-slate-100"
            }`}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className={`md:hidden overflow-hidden border-t ${
              isTransparent
                ? "bg-brand-navy/95 backdrop-blur-xl border-white/10"
                : "bg-white/95 backdrop-blur-xl border-slate-200/70"
            }`}
          >
            <div className="px-5 py-3 flex flex-col">
              {NAV_ITEMS.map((item) => {
                const active =
                  item.path === "/"
                    ? location.pathname === "/"
                    : location.pathname.startsWith(item.path);
                const baseColor = isTransparent
                  ? "text-white"
                  : "text-brand-ink";
                const dividerColor = isTransparent
                  ? "border-white/10"
                  : "border-slate-200/70";
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-2 py-3 text-[15px] tracking-wide border-b last:border-b-0 ${dividerColor} ${baseColor} transition-opacity ${
                      active
                        ? "font-semibold opacity-100"
                        : "opacity-90 hover:opacity-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
