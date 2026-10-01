import { useState } from "react";
import { motion } from "framer-motion";
import { assetPath } from "../../shared/helpers/asset-path";

export interface MediaArticle {
  publication: string;
  publicationLabel: string;
  url: string;
  title: string;
  summary: string;
  date?: string;
  cover?: string;
  accent?: string;
}

interface CoverArtInnerProps {
  publication: string;
  publicationLabel: string;
  src?: string;
  accent?: string;
}

const CoverArtInner: React.FC<CoverArtInnerProps> = ({
  publication,
  publicationLabel,
  src,
  accent = "from-brand-navy via-brand-slate to-brand-ink",
}) => {
  const [errored, setErrored] = useState(false);
  const showFallback = !src || errored;

  if (showFallback) {
    return (
      <div
        className={`absolute inset-0 bg-gradient-to-br ${accent} flex flex-col items-center justify-center text-center px-6`}
      >
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-brand-bronze/[0.10] blur-3xl" />
        <p className="relative text-[10.5px] uppercase tracking-eyebrow text-brand-gold/85">
          {publication}
        </p>
        <p className="relative mt-3 font-serif text-2xl sm:text-3xl text-white/95 leading-tight">
          {publicationLabel}
        </p>
        <div className="relative mt-4 h-px w-12 bg-brand-gold/60" />
      </div>
    );
  }

  return (
    <img
      src={assetPath(src)}
      alt={publicationLabel}
      onError={() => setErrored(true)}
      className="absolute inset-0 w-full h-full object-cover"
    />
  );
};

const ArrowIcon: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

interface MediaCardProps {
  article: MediaArticle;
  delay?: number;
  featured?: boolean;
}

const MediaCard: React.FC<MediaCardProps> = ({
  article,
  delay = 0,
  featured = false,
}) => {
  if (featured) {
    return (
      <motion.a
        href={article.url}
        target="_blank"
        rel="noreferrer"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cardHover hover:border-slate-300"
      >
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)]">
          <div className="relative aspect-[16/9] md:aspect-auto md:min-h-[420px] overflow-hidden bg-brand-navy">
            <CoverArtInner
              publication={article.publication}
              publicationLabel={article.publicationLabel}
              src={article.cover}
              accent={article.accent}
            />
            <div className="hidden md:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white/95 pointer-events-none" />
          </div>

          <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow">
              <span className="inline-flex items-center gap-1.5 text-brand-bronze font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-bronze" />
                Featured
              </span>
              <span className="h-3 w-px bg-slate-300" />
              <span className="text-slate-500">{article.publication}</span>
              {article.date && (
                <>
                  <span className="h-3 w-px bg-slate-300" />
                  <span className="text-slate-400">{article.date}</span>
                </>
              )}
            </div>

            <h3 className="mt-4 text-brand-ink text-2xl sm:text-3xl md:text-[1.9rem] lg:text-4xl font-semibold tracking-tight leading-[1.15]">
              {article.title}
            </h3>

            <p className="mt-4 sm:mt-5 text-[15px] sm:text-[15.5px] leading-relaxed text-slate-600 max-w-xl">
              {article.summary}
            </p>

            <div className="mt-6 sm:mt-7 inline-flex items-center gap-1.5 text-[14px] font-medium text-brand-navy group-hover:text-brand-bronze transition-colors">
              <span className="group-hover:underline">Read the feature</span>
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </div>
      </motion.a>
    );
  }

  return (
    <motion.a
      href={article.url}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group block bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:shadow-cardHover hover:border-slate-300"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-brand-navy">
        <CoverArtInner
          publication={article.publication}
          publicationLabel={article.publicationLabel}
          src={article.cover}
          accent={article.accent}
        />
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-eyebrow">
          <span className="text-brand-bronze">{article.publication}</span>
          {article.date && (
            <span className="text-slate-400">{article.date}</span>
          )}
        </div>

        <h3 className="mt-3 text-brand-ink text-lg sm:text-xl font-semibold tracking-tight leading-snug">
          {article.title}
        </h3>

        <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
          {article.summary}
        </p>

        <div className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-brand-navy group-hover:text-brand-bronze transition-colors">
          <span className="group-hover:underline">Read more</span>
          <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </motion.a>
  );
};

export default MediaCard;
