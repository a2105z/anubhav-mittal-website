export type ExperienceRoleLink = {
  label: string;
  href: string;
};

export type ExperienceRole = {
  title: string;
  dateRange: string;
  location?: string;
  highlights: string[];
  links?: ExperienceRoleLink[];
};

export type Experience = {
  company: string;
  monogram: string;
  logo: string;
  logoFull?: boolean;
  location?: string;
  startDate: string;
  endDate: string;
  summary: string;
  roles: ExperienceRole[];
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Ag Growth International Inc. (TSX : AFN · OTC : AGGZF)",
    monogram: "AGI",
    logo: "/icons/organizations/agi.png",
    logoFull: true,
    location: "Winnipeg, Manitoba, Canada",
    startDate: "2026",
    endDate: "2032",
    summary:
      "Six years at Ag Growth International Inc., a Winnipeg company with ~C$1.4B of revenue that designs and builds equipment to store, handle, and process grain, seed, fertilizer, feed, and food. For the first three years he led corporate development and strategy. For the last two years he held that seat together with the global food and feed P&L.",
    roles: [
      {
        title: "Senior Vice President, Global Food and Feed",
        dateRange: "2030 - 2032",
        location: "Winnipeg, Manitoba, Canada",
        highlights: [
          "Hold the global food and feed P&L from Winnipeg as a dual role with Corporate Development and Strategy — equipment and engineering for food processors, feed mills, and grain handlers, inside a ~C$1.4B company listed on the Toronto Stock Exchange.",
          "Own price, mix, project margin, and working capital for the food and feed book across Canada, the United States, and the international commercial business, including Brazil and EMEA, on one monthly review against plan, forecast, and prior year.",
          "Turn the order book into delivered projects — storage, handling, and processing systems — without the cost overruns that have shown up on equipment-only jobs, and hold warranty and bad-debt charges to the case that was approved.",
          "Pair the P&L with the corporate-development seat, so an acquisition, a product transfer, or a new plant is underwritten against the food and feed returns it has to earn, not against a standalone deal memo.",
          "Build a food and feed growth plan the Chief Executive Officer can take to the board — Canada feed equipment, international commercial projects, and the Farm cycle kept as separate drivers rather than one blended number.",
        ],
      },
      {
        title: "Senior Vice President, Corporate Development and Strategy",
        dateRange: "2026 - 2032",
        location: "Winnipeg, Manitoba, Canada",
        highlights: [
          "Lead corporate development and strategy for Ag Growth International from Winnipeg — a TSX-listed equipment company (TSX : AFN, OTC : AGGZF) with ~C$1.4B of revenue, manufacturing in Canada, the United States, Brazil, India, France, and Italy.",
          "Own acquisitions, divestitures, joint ventures, and product-line transfers from the first screen through close and the Year-3 lookback, with return thresholds set against the Farm and Commercial portfolios rather than a single hurdle rate.",
          "Set the strategy for where the company grows: international commercial projects in grain, food, and feed, versus a North American Farm market that stays cyclical, and put that choice in front of the Chief Executive Officer and the board as one capital plan.",
          "Hold the investment review for CapEx, new capacity, and the international project book — business case, downside, and a named owner for value capture after close.",
          "Keep strategy and, from 2030, the global food and feed P&L in one office, so the deal thesis and the operating result are the same conversation.",
        ],
      },
    ],
  },
  {
    company: "Archer-Daniels-Midland Company (NYSE : ADM)",
    monogram: "ADM",
    logo: "/icons/organizations/adm.png",
    location: "Chicago, Illinois, United States",
    startDate: "2017",
    endDate: "2026",
    summary:
      "Nine years in senior finance and corporate development at Archer-Daniels-Midland Company, a global agribusiness and nutrition company, from Chicago, Illinois. He served as chief financial officer of Nutrition and Global Pet Solutions, then led enterprise capital allocation and mergers and acquisitions.",
    roles: [
      {
        title:
          "Vice President, Global Business Development and Strategic Finance",
        dateRange: "2025 - 2026",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Lead enterprise-wide capital allocation, investment planning, special projects, and governance across business units and regions for ~$1.5B of annual CapEx and strategic investments.",
          "Partner with the CEO, CFO, and Executive Leadership Team to prioritize initiatives through rigorous business cases, scenario analysis, return thresholds, and KPI-based value tracking — leading the enterprise investment review cadence to drive execution, value realization, and capital discipline.",
          "Partner with Business Unit Presidents, CFOs, Commercial, Operations, Supply Chain, and Corporate leaders to align financial plans, capital deployment, and execution priorities — driving profitable growth, productivity, margin expansion, and cash flow performance.",
          "Lead the enterprise Transformation Office, translating strategic investments into execution by directing integration, carve-outs, joint ventures, restructuring, and other cross-functional transformation initiatives to deliver planned financial and operational outcomes.",
          "Lead strategic acquisitions, divestitures, joint ventures, and other portfolio actions from evaluation through execution — strengthening the portfolio, optimizing capital allocation, and maximizing long-term shareholder value.",
        ],
      },
      {
        title: "Vice President, Finance (Chief Financial Officer) - Nutrition Business Unit",
        dateRange: "2023 - 2025",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Led global finance for an ~$8B Nutrition portfolio across B2B and B2C businesses with 14,000+ employees — overseeing Commercial Finance, Supply Chain Finance, FP&A, and Controllership. Built and developed a high-performing team of 10 direct and 60+ total.",
          "Led financial planning and performance management across five operating segments — annual operating plan, rolling forecasts, long-range planning, and alignment with S&OP (IBP) processes — improving forecast accuracy from 56% to 9% through driver-based planning and stronger governance.",
          "Drove value creation through disciplined capital allocation, productivity initiatives, and working capital optimization — delivering +150 bps of ROIC improvement, +110 bps of margin expansion, and ~$190M in working capital reduction.",
          "Established a rigorous operating performance management cadence through monthly business reviews, KPI dashboards, and variance analysis versus plan, forecast, and prior year — proactively identifying risks and opportunities and driving corrective actions with business and functional leaders.",
          "Partnered with Commercial, Operations, Supply Chain, Controllers, and Plant Finance teams on pricing, cost accounting, manufacturing performance, inventory optimization, and commodity and FX exposure analysis to improve profitability and support disciplined decisions.",
          "Led finance modernization through SAP S/4HANA implementation and Power BI dashboards integrating SAP, Oracle, and Hyperion data — automating financial consolidation and enhancing visibility into operational and financial performance across the global portfolio.",
          "Partnered with Investor Relations and Corporate Controllership on quarterly earnings preparation, external messaging, key performance drivers, non-GAAP bridges, and CFO Q&A support — strengthening governance by aligning management reporting with external disclosures, supporting MD&A, remediating SOX controls, and achieving a clean audit opinion.",
        ],
      },
      {
        title: "Vice President, Finance (Chief Financial Officer) - Global Pet Solutions Business Subunit",
        dateRange: "2021 - 2023",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Led finance for ADM's ~$700M global Pet Solutions business unit across B2B ingredients and B2C branded products — partnering with business leadership to translate strategy into financial plans, capital allocation decisions, and performance targets that supported ~20% CAGR while improving profitability and capital efficiency.",
          "Led financial planning and performance management, including annual operating plans, rolling forecasts, long-range planning, KPI reviews, and executive business reviews — identifying risks and opportunities and driving corrective actions to deliver sales, earnings, and cash flow commitments.",
          "Partnered with Commercial, Operations, Supply Chain, Controllers, and Plant Finance teams to align pricing, product mix, manufacturing performance, cost accounting, inventory optimization, and S&OP-driven demand and supply plans — improving execution and profitability across the portfolio.",
          "Strengthened cash generation and supply chain resilience through working capital optimization, inventory management, supplier initiatives, and restructuring programs — delivering approximately $50M of cost savings, sustained productivity improvements, and margin expansion.",
          "Built a high-performing finance team and served as strategic thought partner to the President on portfolio, pricing, and commercial execution.",
        ],
      },
      {
        title: "Vice President, Corporate Development and Mergers & Acquisitions",
        dateRange: "2017 - 2023",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Led global acquisitions, divestitures, joint ventures, strategic partnerships, and organic investments from opportunity assessment through execution and value capture — developing investment cases, transaction structures, and financing strategies that optimized returns, risk allocation, and balance sheet outcomes in partnership with the CEO and CFO.",
          "Completed ~$10B of acquisitions, divestitures, joint ventures, and strategic investments — delivering disciplined execution, portfolio optimization, and long-term shareholder value across multiple business segments.",
          "Led carve-out and IPO readiness for an ADM business segment — establishing standalone financial statements, governance, and operating model. Negotiated Term Loan A and Term Loan B financing and evaluated capital structure alternatives to optimize liquidity, financial flexibility, and shareholder value during COVID-era market volatility.",
          "Developed and institutionalized ADM's enterprise M&A playbook — establishing approval gates, diligence standards, valuation methodologies, integration planning, and post-close value capture — and drove enterprise-wide adoption through change management and consistent decision-making.",
          "Owned CapEx evaluation, business case review with the CEO and CFO, performance tracking, and Year-3 lookback audits enterprise-wide — partnering with IR and the Corporate Venture Capital team on valuation narrative, sum-of-the-parts, and venture pipeline across growth platforms.",
        ],
      },
    ],
  },
  {
    company: "Kellogg Company (NYSE : K)",
    monogram: "K",
    logo: "/icons/organizations/kellogg.png",
    logoFull: true,
    location: "Battle Creek, Michigan, United States",
    startDate: "2013",
    endDate: "2017",
    summary:
      "Four years in senior finance and strategy at Kellogg Company, a global consumer foods company, from Battle Creek, Michigan. He led North America financial planning for an ~$9B business and corporate development, including mergers and a global restructuring program.",
    roles: [
      {
        title: "Vice President, Financial Planning and Analysis - North America Region",
        dateRange: "2015 - 2017",
        location: "Battle Creek, Michigan, United States",
        highlights: [
          "Led FP&A and performance management for Kellogg North America (~$9B revenue) — partnering with BU Presidents and CFOs across five businesses and Canada; owned annual operating plan, rolling forecasts, long-range planning, and alignment with S&OP and commercial planning processes, translating pricing, mix, trade investment, and volume drivers into actionable decisions.",
          "Established a disciplined operating cadence — monthly business reviews, KPI dashboards, and variance analysis vs. plan, forecast, and prior year — clearly articulating drivers, risks, and opportunities and enabling leadership to take timely corrective actions.",
          "Played a key role in a business turnaround — leading financial planning and tracking for portfolio actions, go-to-market changes, and growth initiatives; delivered ~$250M revenue and ~$100M operating profit improvement through rigorous execution, cost restructuring, accountability, and performance management.",
          "Partnered with Commercial and Sales leadership to improve trade spend effectiveness, pricing strategy, and mix optimization — strengthening revenue quality and margin performance across the branded CPG portfolio.",
          "Standardized financial planning, forecasting, and performance management across five business units by establishing common planning assumptions, financial metrics, and governance — improving cross-business alignment, decision quality, and execution across Kellogg North America.",
        ],
      },
      {
        title: "Senior Director / Director, Corporate Development and Strategy",
        dateRange: "2013 - 2015",
        location: "Battle Creek, Michigan, United States",
        highlights: [
          "Led global corporate development and strategy across acquisitions, joint ventures, divestitures, and strategic alliances — from opportunity identification through execution, integration, and value capture. Selected for Kellogg's Global Leaders and Harvard Executive Development programs.",
          "Led commercial, operational, and financial due diligence for ~$2B of investments — developing DCF-based valuations, NPV/IRR analyses, downside scenarios, and risk-adjusted investment recommendations. Presented investment proposals to the CEO, CFO, and Board, and negotiated transaction structures across Asia, Africa, and Latin America.",
          "Managed Project K — Kellogg's ~$1.8B global restructuring program targeting ~$500M in annual savings — establishing governance, execution discipline, and KPI-based value realization reporting for the Global Leadership Team.",
          "Led development of Kellogg's e-commerce growth strategy — partnering across Marketing, Category Management, Revenue Management, and Digital to identify growth opportunities through shopper analytics, digital shelf optimization, assortment strategy, and retailer collaboration.",
          "Drove cross-functional strategy projects on next-generation natural, trade-spend effectiveness, and the breakfast category — shaping the growth agenda across brands and categories.",
        ],
      },
    ],
  },
  {
    company: "Booz & Company",
    monogram: "B&Co",
    logo: "/icons/organizations/booz.png",
    location: "Dubai, Dubai, United Arab Emirates | New York City, New York, United States",
    startDate: "2007",
    endDate: "2013",
    summary:
      "Six years advising Fortune 500 companies, sovereign wealth funds, and private equity firms on strategy, mergers, and operational restructuring at Booz & Company, from New York City, New York and Dubai.",
    roles: [
      {
        title: "Senior Engagement Manager, Consumer and Retail",
        dateRange: "2011 - 2013",
        location: "Dubai, United Arab Emirates",
        highlights: [
          "Designed and implemented a new go-to-market strategy for a global CPG company — optimizing product and R&D portfolios and redesigning the end-to-end supply chain from manufacturing through distribution — delivering ~$50M in annual EBIT improvement.",
          "Designed a global trade promotion strategy for a consumer products company — identifying significant trade investment inefficiencies and implementing a performance-based trade architecture that improved commercial investment effectiveness. Led global rollout through train-the-trainer programs.",
          "Developed a five-year strategic plan for a consumer products company — facilitating executive workshops and translating growth, commercial, operational, and financial priorities into strategic initiatives, KPIs, budgets, and execution roadmaps.",
          "Built the five-year strategic business plan and operating model for a Middle East sovereign wealth fund's new infrastructure investment company — sizing PPP roads and railroads opportunities and prioritizing the investment portfolio across MENA, Central Asia, and South Asia.",
          "Advised C-suites across the US, MENA, and Asia on corporate strategy, M&A, and large-scale operational restructuring.",
        ],
      },
      {
        title: "Engagement Manager, Consumer and Retail",
        dateRange: "2009 - 2011",
        location: "New York City, New York, United States",
        highlights: [
          "Co-managed implementation of ~$350M annual EBIT improvement at a global consumer chemicals company — rebuilding the go-to-market strategy, R&D portfolio, and end-to-end supply chain footprint.",
          "Led a four-consultant team to develop a five-year strategic plan and KPI framework for a regional consumer goods leader.",
          "Organized C-level executive workshops on long-term financial, operational, and human capital priorities.",
          "Reshaped marketing ROI strategy for a leading financial institution — shifting spend toward digital and cable.",
          "Identified ~$30M in operational synergies on a major statewide health system merger and led post-merger integration playbooks.",
        ],
      },
      {
        title: "Strategy Associate, Consumer and Retail",
        dateRange: "2007 - 2009",
        location: "New York City, New York, United States",
        highlights: [
          "Led a global PE firm's acquisition evaluation of a leading shipping company on net asset value and market cap.",
          "Built quantitative and qualitative risk frameworks integrating governance, strategic intent, and downside scenarios.",
          "Led a four-consultant team developing a 20-year concept plan for a marina network in an emerging economy.",
          "Sized yachting market potential, real estate partnership models, and investment requirements end-to-end.",
          "Built Excel and Access cost models and ABC analyses for a leading P&C insurance company.",
        ],
      },
    ],
  },
  {
    company: "Google LLC (NASDAQ : GOOG)",
    monogram: "G",
    logo: "/icons/organizations/google.png",
    location: "Mountain View, California, United States",
    startDate: "2006",
    endDate: "2006",
    summary:
      "One summer in business, sales, and operations at Google LLC in Mountain View, California, during Harvard Business School, rebuilding quality review and scoring so online sales operations could scale.",
    roles: [
      {
        title: "Business, Sales and Operations Intern",
        dateRange: "2006 - 2006",
        location: "Mountain View, California, United States",
        highlights: [
          "Re-engineered quality review processes to scale online sales operations during the India office's hyper-growth.",
          "Redesigned the quality scoring system using statistical analyses — driving measurable productivity and accuracy gains.",
          "Operated at the intersection of business, sales, operations, and analytics at a defining stage for Google.",
          "Partnered with sales operations leadership on metric design, reporting cadence, and operating model questions.",
          "Built early reps in tech-enabled operating model design that informed later commercial finance and transformation work.",
        ],
      },
    ],
  },
  {
    company: "Government of India",
    monogram: "GoI",
    logo: "/icons/organizations/govt-india.png",
    location: "New Delhi, Delhi, India",
    startDate: "1999",
    endDate: "2005",
    summary:
      "Six years as a senior officer in the Indian Civil Services, in New Delhi, across the Ministries of Home Affairs and Telecom, from national selection through federal policy, elections, and finance.",
    roles: [
      {
        title: "Assistant Director, Ministry of Home Affairs",
        dateRange: "2003 - 2005",
        location: "New Delhi, Delhi, India",
        highlights: [
          "Advised senior ministry leadership on the formulation of national Border Management policy.",
          "Led the conduct of Parliamentary elections in the State of Manipur at scale and under high stakeholder scrutiny.",
          "Operated at the intersection of policy, security, and large-scale operational execution at the federal level.",
          "Built executive-level briefings and decision frameworks for senior bureaucrats and elected leadership.",
          "Developed an enduring discipline for stakeholder management in highly complex public-sector environments.",
        ],
      },
      {
        title:
          "Assistant Chief Finance and Accounts Officer, Ministry of Telecom",
        dateRange: "2001 - 2003",
        location: "New Delhi, Delhi, India",
        highlights: [
          "Built project valuation analyses for federal telecom investments during a period of sweeping deregulation.",
          "Analyzed the strategic implications of telecom deregulation on federal capital programs and policy.",
          "Operated finance and accounting governance at national scale across capex, opex, and program reporting.",
          "Advised senior leadership on the financial implications of regulatory transition in a public-sector context.",
          "Built early foundations in financial controlling, capital budgeting, and policy-aligned financial planning.",
        ],
      },
      {
        title: "Officer Trainee, Indian Civil Service",
        dateRange: "1999 - 2001",
        location: "Mussoorie, Uttarakhand, India | New Delhi, Delhi, India",
        highlights: [
          "Completed the rotational leadership training at the National Academy of Administration in Mussoorie.",
          "Rotated through the Federal Ministries of Telecom, Finance, and Defense on cross-functional assignments.",
          "Gained exposure to the Indian Army, National Security Guards, and federal investigation and intelligence agencies.",
          "Awarded the President of India Gold Medal for proficiency in public administration and excellence in investigation and law.",
          "Awarded the Mehta Trophy for graduating top of class — among the most decorated cadets in his civil service cohort.",
        ],
      },
    ],
  },
  {
    company: "Hindustan Unilever Limited (NSE : HINDUNILVR)",
    monogram: "HUL",
    logo: "/icons/organizations/unilever.png",
    location: "Mumbai, Maharashtra, India | Hyderabad, Telangana, India",
    startDate: "1997",
    endDate: "1999",
    summary:
      "Two years as a management trainee at Hindustan Unilever Limited, a global consumer goods company, in Mumbai, Maharashtra and Hyderabad, Telangana, rotating through marketing, sales, manufacturing, and finance.",
    roles: [
      {
        title: "Management Trainee",
        dateRange: "1997 - 1999",
        location: "Mumbai, Maharashtra, India | Hyderabad, Telangana, India",
        highlights: [
          "Selected for Hindustan Unilever's flagship Rotational Leadership Program in Mumbai and Hyderabad.",
          "Rotated across marketing, sales and distribution, manufacturing operations, and finance for consumer products.",
          "Initiated and implemented two cost restructuring measures generating ~$200K of annual savings.",
          "Built foundational understanding of consumer goods P&L, route-to-market execution, and commercial finance.",
          "Established the operating disciplines that have shaped a 30-year finance and strategy career trajectory.",
        ],
      },
    ],
  },
];
