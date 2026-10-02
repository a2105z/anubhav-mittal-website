import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { LINKEDIN_LINK, LOCATION } from "../../constants/links";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-brand-ink text-[14.5px] font-semibold tracking-tight">
              Anubhav Mittal, CFA, CPA, CMA
            </p>
            <p className="mt-0.5 text-[12.5px] text-slate-500">
              Senior Vice President, Global Capital Markets and Treasurer, Mondelez · {LOCATION}
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={LINKEDIN_LINK}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-500 hover:text-brand-navy transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <p className="text-[12px] text-slate-400">
              © {year} Anubhav Mittal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
