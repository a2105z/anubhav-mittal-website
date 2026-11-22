import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";
import MediaCard, { MediaArticle } from "../components/MediaCard";

const ARTICLES: MediaArticle[] = [
  {
    publication: "USA Today",
    publicationLabel: "USA Today",
    url: "https://www.usatoday.com/press-release/story/38024/anubhav-mittal-brings-10b-ma-track-record-to-adms-global-strategy/",
    title:
      "Anubhav Mittal Brings $10B Mergers & Acquisitions Track Record to ADM's Global Strategy",
    summary:
      "A national feature on roughly $10B in strategic transactions and the mandate across acquisitions, divestitures, joint ventures, and capital investments.",
    date: "July 2026",
    cover: "/media/usatoday.png",
    accent: "from-[#0b1b2b] via-[#12263d] to-[#050b13]",
  },
  {
    publication: "Social Media Explorer",
    publicationLabel: "Social Media Explorer",
    url: "https://socialmediaexplorer.com/content-sections/precision-at-scale-the-career-and-professional-philosophy-of-anubhav-mittal/",
    title:
      "Precision at Scale: The Career and Professional Philosophy of Anubhav Mittal",
    summary:
      "A career retrospective on the operating and transaction record built across ADM, Kellogg, and Booz.",
    date: "June 2026",
    cover: "/media/sme.png",
    accent: "from-[#102033] via-brand-navy to-[#071018]",
  },
  {
    publication: "FingerLakes1.com",
    publicationLabel: "FingerLakes1",
    url: "https://www.fingerlakes1.com/2026/04/17/anubhav-mittal-on-cfo-leadership-corporate-development-capital-discipline-and-what-it-takes-to-drive-real-value/",
    title:
      "Anubhav Mittal on CFO Leadership, Corporate Development, Capital Discipline, and What It Takes to Drive Real Value",
    summary:
      "A long-form profile on the operator and dealmaker work behind roughly $10B in transactions at ADM, Kellogg, and Booz.",
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
      "A profile on the academic foundation and the execution behind roughly $10B in transactions.",
    date: "April 2026",
    cover: "/media/republicaneagle.png",
    accent: "from-[#3a1a1a] via-[#1c1410] to-brand-ink",
  },
];

const Media: React.FC = () => {
  return (
    <div id="media" className="scroll-mt-20 bg-white">
      <section className="pt-16 sm:pt-20 pb-8 border-t border-slate-200">
        <Wrapper>
          <SectionHeader
            eyebrow="Media"
            title="Selected press"
            description="Profiles on his work as a CPG P&L operating executive — capital, transactions, and how the business is run."
          />
        </Wrapper>
      </section>

      <section className="pb-16 sm:pb-20">
        <Wrapper>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ARTICLES.map((article, idx) => (
              <MediaCard
                key={article.url}
                article={article}
                delay={0.04 + idx * 0.05}
              />
            ))}
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Media;
