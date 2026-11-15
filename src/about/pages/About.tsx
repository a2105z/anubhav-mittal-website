import { motion } from "framer-motion";
import { useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";
import Expertise from "../components/Expertise";
import Education from "../components/Education";
import Credentials from "../components/Credentials";
import Personal from "../components/Personal";
import { assetPath } from "../../shared/helpers/asset-path";

const PortraitFrame: React.FC = () => {
  const [errored, setErrored] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[280px] mx-auto md:mx-0"
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
      <section className="pt-24 sm:pt-28 pb-12 sm:pb-16">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4 lg:col-span-3 flex flex-col items-center md:items-start">
              <PortraitFrame />
              <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-slate-400 text-center md:text-left max-w-[280px]">
                President and Chief Executive Officer
                <span className="block mt-1 normal-case tracking-normal text-[13px] text-slate-500">
                  Central Garden &amp; Pet · San Francisco
                </span>
              </p>
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <SectionHeader
                eyebrow="About"
                title="CPG operating executive"
              />

              <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-[1.7] text-slate-600">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45 }}
                >
                  Anubhav Mittal is President and Chief Executive Officer of
                  Central Garden &amp; Pet Company. He joined in 2026 as Senior
                  Vice President and Chief Strategy Officer and, from 2028,
                  also served as Senior Vice President and President, Pet
                  Consumer Products, before becoming President and Chief
                  Executive Officer in 2031. He is a
                  consumer packaged goods operating executive with more than 30
                  years across branded CPG and agribusiness — P&amp;L,
                  commercial planning, and the capital decisions that sit
                  behind them.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.06 }}
                >
                  Before Central, he held senior operating and finance roles at
                  Kellogg Company and Archer-Daniels-Midland. At Kellogg he led
                  financial planning and strategy for North America, a business
                  of about $9&nbsp;billion. At ADM he served as Vice President
                  and Chief Financial Officer of Nutrition, about
                  $8&nbsp;billion, and of Global Pet Solutions, then led global
                  corporate development. He has led or co-led about
                  $12&nbsp;billion of transactions through close and value
                  capture.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: 0.12 }}
                >
                  He began at Hindustan Unilever and later served as a senior
                  officer in the Indian Civil Services. He holds an MBA from
                  Harvard Business School, an MSA from the University of
                  Illinois Gies College of Business, and a B.Tech from IIT
                  Kanpur. He is a CFA charterholder, a CPA, and a CMA.
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

      <section className="py-12 sm:py-14 border-t border-slate-200">
        <Wrapper>
          <SectionHeader eyebrow="Focus" title="How he operates" />
          <div className="mt-7">
            <Expertise />
          </div>
        </Wrapper>
      </section>

      <section className="py-12 sm:py-14 border-t border-slate-200">
        <Wrapper>
          <SectionHeader eyebrow="Education" title="Academic background" />
          <div className="mt-7">
            <Education />
          </div>
        </Wrapper>
      </section>

      <section className="py-12 sm:py-14 border-t border-slate-200">
        <Wrapper>
          <SectionHeader eyebrow="Credentials" title="Professional standing" />
          <div className="mt-7">
            <Credentials />
          </div>
        </Wrapper>
      </section>

      <section className="py-12 sm:py-16 border-t border-slate-200">
        <Wrapper>
          <SectionHeader eyebrow="Personal" title="Honors" />
          <div className="mt-7">
            <Personal />
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default About;
