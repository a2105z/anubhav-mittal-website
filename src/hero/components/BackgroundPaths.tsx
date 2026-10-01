import { motion } from "framer-motion";
import { useMemo } from "react";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 12}C-${
      380 - i * 5 * position
    } -${189 + i * 12} -${312 - i * 5 * position} ${216 - i * 12} ${
      152 - i * 5 * position
    } ${343 - i * 12}C${616 - i * 5 * position} ${470 - i * 12} ${
      684 - i * 5 * position
    } ${875 - i * 12} ${684 - i * 5 * position} ${875 - i * 12}`,
    color: `rgba(184, 155, 94, ${0.04 + i * 0.012})`,
    width: 0.4 + i * 0.025,
  }));

  const isMobileViewport = useMemo(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= 640;
    }
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox={`0 0 696 ${isMobileViewport ? 800 : 316}`}
        fill="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={0.08 + path.id * 0.012}
            initial={{ pathLength: 0.3, opacity: 0.4 }}
            animate={{
              pathLength: 1,
              opacity: [0.18, 0.32, 0.18],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 28 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export interface BackgroundPathsProps {
  children: React.ReactNode;
}

export function BackgroundPaths({ children }: BackgroundPathsProps) {
  return (
    <div className="relative h-[100dvh] min-h-[560px] w-full flex items-center justify-center overflow-hidden bg-navy-radial px-4">
      {/* Subtle grain / vignette */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(6,15,26,0.55)_85%)]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-2 sm:px-6 md:px-10">
        {children}
      </div>

      {/* Soft fade at bottom edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#060f1a] to-transparent" />
    </div>
  );
}
