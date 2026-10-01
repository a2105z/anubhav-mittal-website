import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
          className="text-white font-light text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[5.25rem] md:leading-[1.02] tracking-tight"
        >
          Anubhav Mittal
        </motion.h1>

        <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-brand-gold/70 to-transparent my-6 sm:my-8" />

        <Subheader delay={ANIMATION_OFFSET + 0.2} />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: ANIMATION_OFFSET + 0.5,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-9 sm:mt-12 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-brand-navy px-6 py-3 text-sm font-medium tracking-wide transition-all hover:bg-brand-ivory hover:shadow-soft"
          >
            About Anubhav
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
          </Link>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 text-white/90 px-6 py-3 text-sm font-medium tracking-wide transition-all hover:border-white/60 hover:text-white"
          >
            Get in touch
          </Link>

          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center justify-center h-11 w-11 rounded-full border border-white/20 text-white/80 transition-all hover:border-white/60 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </motion.div>
      </div>
    </BackgroundPaths>
  );
};

export default Hero;
