import { Link } from "react-router-dom";
import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";
import MediaCard, { MediaArticle } from "../components/MediaCard";

const FEATURED: MediaArticle = {
  publication: "USA Today",
  publicationLabel: "USA Today",
  url: "https://www.usatoday.com/press-release/story/38024/anubhav-mittal-brings-10b-ma-track-record-to-adms-global-strategy/",
  title:
    "Anubhav Mittal Brings $10B Mergers & Acquisitions Track Record to ADM's Global Strategy",
  summary:
    "A national feature detailing Anubhav's ~$10B in strategic transactions and his mandate directing ADM's global corporate development agenda across acquisitions, divestitures, joint ventures, and capital investments.",
  date: "July 2026",
  cover: "/media/usatoday.png",
  accent: "from-[#0b1b2b] via-[#12263d] to-[#050b13]",
};

const PROFILES: MediaArticle[] = [
  {
    publication: "FingerLakes1.com",
    publicationLabel: "FingerLakes1",
    url: "https://www.fingerlakes1.com/2026/04/17/anubhav-mittal-on-cfo-leadership-corporate-development-capital-discipline-and-what-it-takes-to-drive-real-value/",
    title:
      "Anubhav Mittal on CFO Leadership, Corporate Development, Capital Discipline, and What It Takes to Drive Real Value",
    summary:
      "A long-form profile on the blend of operator and dealmaker capabilities behind roughly $10B in transactions. Walks through the discipline behind his work at ADM, Kellogg, and Booz.",
    date: "April 2026",
    cover: "/media/fingerlakes1.png",
    accent: "from-[#1d3550] via-brand-navy to-[#060f1a]",
  },
  {
    publication: "Republican Eagle",
    publicationLabel: "Republican Eagle",
    url: "https://www.republicaneagle.com/news/anubhav-mittal-finance-leader-m-a-strategist-and-value-creator-at-a-global-scale/article_5333c197-7bc2-420b-a081-a88c858cdea2.html",
    title:
      "Anubhav Mittal: Finance Leader, Mergers & Acquisitions Strategist, and Value Creator at a Global Scale",
    summary:
      "A profile examining the academic foundations and strategic execution behind roughly $10B in transactions. Frames his career as built at the intersection of capital allocation and corporate strategy.",
    date: "April 2026",
    cover: "/media/republicaneagle.png",
    accent: "from-[#3a1a1a] via-[#1c1410] to-brand-ink",
  },
];

const Media: React.FC = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-4rem)]">
      <section className="pt-28 sm:pt-36 pb-10 sm:pb-14">
        <Wrapper>
          <SectionHeader
            eyebrow="Media"
            title="Featured commentary and press."
            description="Selected features and profiles on Anubhav's work in finance, corporate development, and value creation."
          />
        </Wrapper>
      </section>

      <section className="pb-8 sm:pb-10">
        <Wrapper>
          <MediaCard article={FEATURED} featured delay={0} />
        </Wrapper>
      </section>

      <section className="pb-24 sm:pb-32">
        <Wrapper>
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <span className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
                Executive Profiles
              </span>
              <span className="h-px flex-1 bg-slate-200" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {PROFILES.map((article, idx) => (
                <MediaCard
                  key={article.url}
                  article={article}
                  delay={0.06 + idx * 0.06}
                />
              ))}
            </div>
          </div>

          <div className="mt-14 sm:mt-20">
            <div className="bg-brand-mist/60 border border-slate-200/70 rounded-2xl px-6 py-6 sm:px-8 sm:py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-[11px] uppercase tracking-eyebrow text-brand-bronze">
                  Media inquiries
                </p>
                <p className="mt-1 text-brand-ink text-[15.5px] font-semibold tracking-tight">
                  Interview, panel, or speaking engagement?
                </p>
                <p className="mt-1 text-[13.5px] text-slate-500">
                  Anubhav welcomes thoughtful conversations with journalists,
                  conference organizers, and executive forums.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-5 py-2.5 text-sm font-medium tracking-wide transition-all hover:bg-brand-ink hover:shadow-soft"
              >
                Get in touch
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Media;
