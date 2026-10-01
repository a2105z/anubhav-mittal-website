import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Wrapper from "../../shared/components/Wrapper";
import SectionHeader from "../../shared/components/SectionHeader";
import {
  FORMSPREE_ENDPOINT,
  LINKEDIN_LINK,
  LOCATION,
} from "../../constants/links";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[15px] text-brand-ink placeholder-slate-400 transition-all focus:outline-none focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/10";

const labelClass =
  "block text-[11.5px] uppercase tracking-eyebrow font-medium text-slate-500 mb-2";

const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      setErrorMsg(
        "The contact form isn't configured yet. Please reach out via LinkedIn."
      );
      return;
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Something went wrong sending your message. Please try again, or reach out via LinkedIn."
      );
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-10">
        <Wrapper>
          <SectionHeader
            eyebrow="Contact"
            title="Get in touch."
            description="For board service, advisory mandates, speaking engagements, or media inquiries — please share a brief note below."
          />
        </Wrapper>
      </section>

      <section className="pb-24 sm:pb-32">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-card"
            >
              {status === "success" ? (
                <div className="py-10 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-brand-navy/5 flex items-center justify-center">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-brand-navy"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="mt-4 text-xl font-semibold text-brand-ink tracking-tight">
                    Message sent.
                  </h4>
                  <p className="mt-2 text-[14.5px] text-slate-500">
                    Thank you for reaching out. Anubhav will be in touch
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[13px] text-brand-navy hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className={labelClass}>
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Briefly, what's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Share a few sentences."
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-[13.5px] text-rose-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="group inline-flex items-center gap-2 rounded-full bg-brand-navy text-white px-6 py-3 text-sm font-medium tracking-wide transition-all hover:bg-brand-ink hover:shadow-soft disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send message"}
                    {status !== "submitting" && (
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
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Side card */}
            <motion.aside
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5 space-y-4"
            >
              <a
                href={LINKEDIN_LINK}
                target="_blank"
                rel="noreferrer"
                className="group block bg-white border border-slate-200 rounded-2xl p-6 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-cardHover"
              >
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-colors">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11.5px] uppercase tracking-eyebrow text-brand-bronze">
                      Connect
                    </p>
                    <p className="mt-1 text-brand-ink text-[15.5px] font-semibold tracking-tight">
                      Anubhav Mittal on LinkedIn
                    </p>
                    <p className="mt-1 text-[13.5px] text-slate-500">
                      The fastest way to reach Anubhav directly.
                    </p>
                  </div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-slate-300 group-hover:text-brand-navy transition-colors mt-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </a>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card">
                <p className="text-[11.5px] uppercase tracking-eyebrow text-brand-bronze">
                  Based in
                </p>
                <p className="mt-1 text-brand-ink text-[15.5px] font-semibold tracking-tight">
                  {LOCATION}
                </p>
                <p className="mt-1 text-[13.5px] text-slate-500">
                  Greater Chicago Area
                </p>
              </div>
            </motion.aside>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default ContactForm;
