import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion, Variants } from "framer-motion";
import LogoBlock from "../../shared/components/LogoBlock";
import { Experience } from "../../constants/projects";

interface ExperienceItemProps {
  experience: Experience;
  delay?: number;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const roleVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  experience,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={delay}
      className="bg-white border border-slate-200 rounded-2xl shadow-card overflow-hidden transition-all duration-300 hover:shadow-cardHover"
    >
      {/* Company header */}
      <div className="px-5 sm:px-6 py-5 sm:py-6 flex gap-4 sm:gap-5 items-start border-b border-slate-200/70 bg-gradient-to-br from-white to-brand-mist/40">
        <LogoBlock
          src={experience.logo}
          monogram={experience.monogram}
          alt={experience.company}
          size="lg"
          rounded="xl"
          contain={!experience.logoFull}
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-brand-ink text-lg sm:text-xl font-semibold tracking-tight">
            {experience.company}
          </h3>
          {experience.location && (
            <p className="mt-0.5 text-[12.5px] uppercase tracking-eyebrow text-slate-400">
              {experience.location}
            </p>
          )}
          <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">
            {experience.summary}
          </p>
        </div>
      </div>

      {/* Roles */}
      <div className="px-5 sm:px-6 py-5 sm:py-6 space-y-5 sm:space-y-6">
        {experience.roles.map((role, idx) => (
          <motion.div
            key={`${role.title}-${idx}`}
            variants={roleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative pl-5 sm:pl-6"
          >
            <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-brand-bronze" />
            <span className="absolute left-[3px] top-3 bottom-0 w-px bg-slate-200" />

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="text-brand-ink text-[15.5px] sm:text-base font-semibold tracking-tight">
                {role.title}
              </h4>
              <p className="text-[11.5px] uppercase tracking-eyebrow text-slate-400 whitespace-nowrap">
                {role.dateRange}
              </p>
            </div>
            {role.location && (
              <p className="mt-1 text-[11.5px] uppercase tracking-eyebrow text-slate-400">
                {role.location}
              </p>
            )}

            <ul className="mt-2.5 space-y-1.5 text-[14px] leading-[1.65] text-slate-600 list-disc list-outside pl-4">
              {role.highlights.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>

            {role.links && role.links.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                {role.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[13px] text-brand-navy hover:text-brand-bronze transition-colors"
                  >
                    <ExternalLinkIcon className="h-4 w-4" />
                    <span className="group-hover:underline">{link.label}</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ExperienceItem;
