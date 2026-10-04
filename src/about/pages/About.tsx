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
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[420px] mx-auto md:mx-0"
    >
      <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-brand-navy/5" />
      <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl bg-brand-bronze/10" />
      <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-soft bg-gradient-to-br from-brand-navy to-brand-slate">
        {!errored ? (
          <img
            src={assetPath("/images/anubhav.png")}
            alt="Anubhav Mittal"
            className="w-full h-full object-cover object-[center_18%]"
            onError={() => setErrored(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-white p-8 text-center">
            <p className="font-serif text-7xl tracking-wide">AM</p>
            <p className="mt-4 text-[11px] uppercase tracking-eyebrow text-white/60">
              Anubhav Mittal
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Bio */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-5 lg:col-span-4">
              <PortraitFrame />
            </div>

            <div className="md:col-span-7 lg:col-span-8">
              <SectionHeader
                eyebrow="About"
                title="North American CPG and agribusiness finance"
              />

              <div className="mt-8 space-y-5 text-[16px] sm:text-[17px] leading-[1.75] text-slate-700">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                >
                  Anubhav Mittal is Senior Vice President, Corporate Development
                  and Investor Relations at Ag Growth International, Inc. in Winnipeg. He has more than 30 years
                  of experience in senior finance across North American consumer
                  packaged goods and agribusiness, including service as a
                  business-unit chief financial officer.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: 0.12 }}
                >
                  His career includes Kellogg Company, Archer-Daniels-Midland
                  Company, and Ag Growth International, Inc. At Kellogg, he led FP&amp;A and strategy for
                  North America, a business of approximately{" "}
                  <span className="text-brand-ink font-semibold">
                    $9&nbsp;billion
                  </span>
                  . At ADM, he served as Chief Financial Officer of the
                  Nutrition Business Unit (approximately{" "}
                  <span className="text-brand-ink font-semibold">
                    $8&nbsp;billion
                  </span>
                  ) and of Global Pet Solutions Business Subunit, and later led
                  global business development and strategic finance. From 2026 to
                  2032 he is Senior Vice President, Corporate Development and
                  Investor Relations at Ag Growth International, Inc. in Winnipeg, Manitoba,
                  and from 2030 to 2032 he also holds Senior Vice President,
                  Global Food and Feed, the P&amp;L for that business.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: 0.19 }}
                >
                  He has led or co-led approximately{" "}
                  <span className="text-brand-ink font-semibold">
                    $12&nbsp;billion
                  </span>{" "}
                  of transactions, including post-close integration and value
                  capture.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: 0.26 }}
                >
                  He began his career at Hindustan Unilever Limited and later served
                  as a senior officer in the Indian Civil Services. He was
                  awarded the President of India Gold Medal. He holds an MBA
                  from Harvard Business School, an MSA from the University of
                  Illinois Gies College of Business, and a B.Tech from IIT
                  Kanpur, where he graduated in the top 5% of his class. He
                  is a CFA charterholder, a CPA, and a CMA. He lives in
                  Chicago.
                </motion.p>
              </div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.32 }}
                className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 border-t border-slate-200 pt-8"
              >
                {[
                  { value: "$8B", label: "Division as CFO" },
                  { value: "$12B+", label: "Transactions led" },
                  { value: "30+", label: "Years of experience" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl sm:text-3xl font-light tracking-tight text-brand-ink">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-eyebrow text-slate-400">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Areas of Expertise */}
      <section className="py-16 sm:py-24 bg-brand-mist/60 border-y border-slate-200/70">
        <Wrapper>
          <SectionHeader title="Areas of expertise" />
          <div className="mt-10 sm:mt-12">
            <Expertise />
          </div>
        </Wrapper>
      </section>

      {/* Education */}
      <section className="py-16 sm:py-24">
        <Wrapper>
          <SectionHeader eyebrow="Education" title="Where he studied." />
          <div className="mt-10">
            <Education />
          </div>
        </Wrapper>
      </section>

      {/* Credentials */}
      <section className="py-16 sm:py-24 bg-brand-mist/60 border-y border-slate-200/70">
        <Wrapper>
          <SectionHeader title="Professional credentials" />
          <div className="mt-10">
            <Credentials />
          </div>
        </Wrapper>
      </section>

      {/* Personal */}
      <section className="pb-20 sm:pb-28">
        <Wrapper>
          <SectionHeader title="Honors and interests" />
          <div className="mt-10 sm:mt-12">
            <Personal />
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default About;
