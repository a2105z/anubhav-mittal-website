import { motion } from "framer-motion";
import { BackgroundPaths } from "../components/BackgroundPaths";
import Subheader from "../components/Subheader";
import { LINKEDIN_LINK } from "../../constants/links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ANIMATION_OFFSET = 0.25;

const Hero: React.FC = () => {
  return (
    <BackgroundPaths>
      <div className="text-left">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: ANIMATION_OFFSET + 0.05,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-white font-light text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[4.75rem] md:leading-[1.02] tracking-tight"
        >
          Anubhav Mittal
        </motion.h1>

        <div className="h-px w-16 bg-brand-gold/50 my-5 sm:my-6" />

        <Subheader delay={ANIMATION_OFFSET + 0.2} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: ANIMATION_OFFSET + 0.5,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-2.5"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors hover:bg-brand-ivory"
          >
            Profile
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/45 text-white px-5 py-2.5 text-[13px] font-medium tracking-wide transition-colors hover:border-white hover:bg-white/10"
          >
            Get in touch
          </a>

          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-white/20 text-white/75 transition-colors hover:border-white/50 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </motion.div>
      </div>
    </BackgroundPaths>
  );
};

export default Hero;
