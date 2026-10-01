import { useState } from "react";
import { assetPath } from "../helpers/asset-path";

interface LogoBlockProps {
  src?: string;
  monogram: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  rounded?: "md" | "lg" | "xl" | "full";
  contain?: boolean;
}

/**
 * Renders a company/institution logo with a graceful typographic fallback.
 * Drop a PNG/SVG at the `src` path; if it's missing or fails to load,
 * a navy monogram block is rendered so the page still looks finished.
 */
const LogoBlock: React.FC<LogoBlockProps> = ({
  src,
  monogram,
  alt,
  size = "md",
  rounded = "lg",
  contain = true,
}) => {
  const [errored, setErrored] = useState(false);

  const sizeClass =
    size === "sm"
      ? "h-12 w-12"
      : size === "lg"
      ? "h-20 w-20"
      : "h-16 w-16";

  const roundedClass =
    rounded === "full"
      ? "rounded-full"
      : rounded === "xl"
      ? "rounded-xl"
      : rounded === "md"
      ? "rounded-md"
      : "rounded-lg";

  const showFallback = !src || errored;

  return (
    <div
      className={`${sizeClass} ${roundedClass} flex-shrink-0 flex items-center justify-center overflow-hidden border border-slate-200 bg-white`}
    >
      {showFallback ? (
        <div
          className={`w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-navy to-brand-slate text-white font-serif text-base sm:text-lg tracking-wide ${roundedClass}`}
          aria-label={alt}
        >
          {monogram}
        </div>
      ) : (
        <img
          src={assetPath(src)}
          alt={alt}
          onError={() => setErrored(true)}
          className={`w-full h-full ${
            contain ? "object-contain p-2" : "object-cover"
          }`}
        />
      )}
    </div>
  );
};

export default LogoBlock;
