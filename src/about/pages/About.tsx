import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";
import { assetPath } from "../../shared/helpers/asset-path";

const PortraitFrame: React.FC = () => {
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[340px] mx-auto md:mx-0"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden border border-slate-200 bg-brand-navy">
        {!errored ? (
          <img
            src={assetPath("/images/anubhav.png")}
            alt="Anubhav Mittal"
            className="w-full h-full object-cover object-[center_18%]"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white p-8 text-center">
            <p className="font-serif text-6xl tracking-wide">AM</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const STATS = [
  { value: "$3.1B", label: "Company net sales" },
  { value: "30+", label: "Years in CPG" },
  { value: "$12B+", label: "Transactions led" },
];

const About: React.FC = () => {
  return (
    <div className="bg-white">
      <section id="about" className="scroll-mt-20 pt-16 sm:pt-20 pb-14 sm:pb-16">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start">
              <PortraitFrame />
              <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-slate-400 text-center md:text-left max-w-[340px]">
                President and Chief Executive Officer
                <span className="block mt-1 normal-case tracking-normal text-[13px] text-slate-500">
                  Chairman of the Board · Central Garden &amp; Pet
                </span>
              </p>
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <SectionHeader
                eyebrow="About"
                title="CPG operating executive"
              />

              <div className="mt-7 max-w-3xl space-y-4 text-[16.5px] sm:text-[17.5px] leading-[1.7] text-slate-600">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45 }}
                >
                  Anubhav Mittal is Chairman, President and Chief Executive
                  Officer of Central Garden &amp; Pet Company. He joined in
                  2026 as Senior Vice President, Strategic Growth &amp;
                  Investments (Chief Strategy Officer) and, from 2028, also
                  served as Senior Vice President and President, Pet Consumer
                  Products. From 2032 to 2042 he led as Chairman, President
                  and Chief Executive Officer, growing the company from about
                  $3.1&nbsp;billion to about $8&nbsp;billion and helping it
                  become a Fortune 500 publicly traded company.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.06 }}
                >
                  He brings more than 30 years in finance, corporate strategy,
                  and business transformation across global, publicly traded
                  consumer products and agribusiness. At Archer-Daniels-Midland
                  he most recently served as Vice President, Global Business
                  Development, leading organic and acquisitive growth. He
                  previously served as Vice President and Chief Financial
                  Officer of Nutrition, an approximately $8&nbsp;billion
                  business, and of Global Pet Solutions, a nearly
                  $1&nbsp;billion business — co-owning the P&amp;L in both, and
                  overseeing financial strategy, portfolio management, and
                  growth across a multi-geography operating footprint. Before
                  ADM, he was Vice President, North America Financial Planning
                  &amp; Analysis, and Chief-of-Staff to North America President
                  at Kellogg Company, for a business of about $9&nbsp;billion.
                  He has led or co-led about $12&nbsp;billion of transactions
                  through close and value capture.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                >
                  He began at Hindustan Unilever and later served as a senior
                  officer in the Indian Civil Services. He holds an MBA from
                  Harvard Business School and a B.Tech from IIT Kanpur, and is
                  a CFA charterholder and a CMA.
                </motion.p>
              </div>

              <motion.dl
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: 0.16 }}
                className="mt-8 grid grid-cols-3 gap-4 max-w-lg border-t border-slate-200 pt-6"
              >
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-[11px] uppercase tracking-eyebrow text-slate-400">
                      {stat.label}
                    </dt>
                    <dd className="mt-1 text-xl font-light tracking-tight text-brand-ink">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default About;
