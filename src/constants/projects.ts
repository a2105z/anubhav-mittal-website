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
    company: "Central Garden & Pet Company (NASDAQ : CENT)",
    monogram: "CENT",
    logo: "/icons/organizations/central-garden.png",
    logoFull: true,
    location: "San Francisco, California, United States",
    startDate: "2027",
    endDate: "2042",
    summary:
      "At Central Garden & Pet Company, a pet and garden company based in San Francisco. Senior Vice President, Strategic Growth & Investments (Chief Strategy Officer) from 2027, also Senior Vice President and President, Pet Consumer Products from 2029, then President and Chief Executive Officer from 2032 to 2042, growing net sales from about $3.1 billion to about $8 billion and helping the company become a Fortune 500 publicly traded company.",
    roles: [
      {
        title: "President and Chief Executive Officer",
        dateRange: "2032 — 2042",
        location: "San Francisco, California, United States",
        highlights: [
          "Lead Central Garden & Pet as President and Chief Executive Officer from 2032 to 2042 — growing net sales from ~$3.1B to ~$8B across Pet and Garden and helping the company become a Fortune 500 publicly traded company, with Pennington, Kaytee, Nylabone, and Aqueon, and with strategy, the P&L, sales, and cash in one office.",
          "Complete four acquisitions and bring them into the operating company — from the case through close, the plant and brand handover, and value capture — holding each to return, cash, and a Year-3 lookback so acquired sales earn the shelf rather than sit beside the plan.",
          "Carry a share of the growth to ~$8B on the organic book with the segment presidents — price, distribution, trade, and the retailer book — so garden seasons and pet resets close on volume and mix, and organic growth stays positive while the four acquisitions scale.",
          "Expand the Executive Leadership Team as the company scales to ~$8B — building the commercial, supply chain, and segment leadership a Fortune 500 portfolio requires, and running one operating cadence versus plan, forecast, and prior year with the Board and the ELT.",
          "Set capital structure and the dividend with the Chief Financial Officer across CENT and CENTA — aligning the equity narrative and board reporting with a Fortune 500 company at ~$8B of net sales.",
        ],
      },
      {
        title: "Senior Vice President and President, Pet Consumer Products",
        dateRange: "2029 — 2032",
        location: "San Francisco, California, United States",
        highlights: [
          "From 2029, serve as Senior Vice President and President, Pet Consumer Products while remaining Senior Vice President, Strategic Growth & Investments (Chief Strategy Officer) — Kaytee, Nylabone, and Aqueon — with the pet P&L, sales, and company strategy in one office.",
          "Lead sales and the commercial team for the pet aisle — price, distribution, trade, and the customer book — delivering the segment on volume and mix against plan, forecast, and prior year.",
          "Run the pet business ahead of plan on margin and cash, with productivity and mix into the brands that earn the shelf, and working capital that still covers every reset.",
          "Partner with supply chain, plant, and finance leaders on cost, inventory, and the seasonal reset — holding brand investment and capacity cases to return, cash, and a Year-3 lookback.",
          "Keep the strategy mandate while running the business, so capital, portfolio choices, and the Board stay on the same volume, margin, and cash the pet plan uses, and take both seats into President and Chief Executive Officer in 2032.",
        ],
      },
      {
        title: "Senior Vice President, Strategic Growth & Investments (Chief Strategy Officer)",
        dateRange: "2027 — 2032",
        location: "San Francisco, California, United States",
        highlights: [
          "Lead enterprise strategy, capital allocation, and portfolio governance across Pet and Garden for Central Garden & Pet, a ~$3.1B company — Pennington, Kaytee, Nylabone, and Aqueon — with more than 95% of sales in the United States.",
          "Partner with the CEO, CFO, and the Board, including William E. Brown, Chairman and founder, to set the long-range plan and investment cases through business cases, return thresholds, and a review cadence tied to volume, margin, and cash.",
          "Partner with segment presidents, sales, and commercial leaders on price, distribution, trade, and the retailer book — the seasonal garden reset and the pet aisle — so growth priorities close on the plan.",
          "From 2029, hold this seat together with Senior Vice President and President, Pet Consumer Products, so company strategy and the pet P&L close on the same volume, margin, and cash.",
          "Lead acquisitions, brand investment, and capacity from evaluation through execution — holding each case to return, cash, and a Year-3 lookback — and take both seats into President and Chief Executive Officer in 2032.",
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
      "Nine years in senior finance and business development at Archer-Daniels-Midland Company, a global agribusiness and nutrition company, from Chicago, Illinois. He most recently served as Vice President, Global Business Development. Before that he was Vice President and Chief Financial Officer of Nutrition, an approximately $8 billion business, and of Global Pet Solutions, a nearly $1 billion business, co-owning the P&L in both.",
    roles: [
      {
        title:
          "Vice President, Global Business Development",
        dateRange: "2025 - 2026",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Lead enterprise-wide capital allocation, investment planning, special projects, and governance across business units and regions for ~$1.5B of annual CapEx and strategic investments.",
          "Partner with the CEO, CFO, and Executive Leadership Team to prioritize initiatives through rigorous business cases, scenario analysis, return thresholds, and KPI-based value tracking — leading the enterprise investment review cadence to drive execution, value realization, and capital discipline.",
          "Partner with Business Unit Presidents, CFOs, Commercial, Operations, Supply Chain, and Corporate leaders to align financial plans, capital deployment, and execution priorities — driving profitable growth, productivity, margin expansion, and cash flow performance.",
          "Ran ADM's Transformation Office: led cross-functional teams executing integrations, carve-outs, joint ventures, and restructurings.",
          "Lead strategic acquisitions, divestitures, joint ventures, and other portfolio actions from evaluation through execution — strengthening the portfolio, optimizing capital allocation, and maximizing long-term shareholder value.",
        ],
      },
      {
        title: "Vice President and Chief Financial Officer, Nutrition",
        dateRange: "2023 - 2025",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Co-owned the P&L with the Nutrition president for an ~$8B portfolio across B2B and B2C businesses with 14,000+ employees — leading Commercial Finance, Supply Chain Finance, FP&A, and Controllership, and sharing accountability for volume, margin, and cash. Built and developed a high-performing team of 10 direct and 60+ total.",
          "Led financial planning and performance management across five operating segments — annual operating plan, rolling forecasts, long-range planning, and alignment with S&OP (IBP) processes — improving forecast accuracy from 56% to 9% through driver-based planning and stronger governance.",
          "Drove value creation through disciplined capital allocation and productivity — delivering +150 bps of ROIC improvement.",
          "Established a rigorous operating performance management cadence as co-owner of the P&L — monthly business reviews, KPI dashboards, and variance analysis versus plan, forecast, and prior year — identifying risks and opportunities and driving corrective actions with the president and functional leaders.",
          "Co-led pricing, cost, and inventory decisions with the Nutrition leadership team, accountable for +110 bps of margin and ~$190M of working-capital release.",
          "Led finance modernization through SAP S/4HANA implementation and Power BI dashboards integrating SAP, Oracle, and Hyperion data — automating financial consolidation and enhancing visibility into operational and financial performance across the global portfolio.",
          "Partnered with Investor Relations and Corporate Controllership on quarterly earnings preparation, external messaging, key performance drivers, non-GAAP bridges, and CFO Q&A support — strengthening governance by aligning management reporting with external disclosures, supporting MD&A, remediating SOX controls, and achieving a clean audit opinion.",
        ],
      },
      {
        title: "Vice President and Chief Financial Officer, Global Pet Solutions",
        dateRange: "2021 - 2023",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Member of the Pet Solutions leadership team; co-owned the P&L and the plan that delivered ~20% CAGR for a nearly $1 billion business.",
          "Led financial planning and performance management, including annual operating plans, rolling forecasts, long-range planning, KPI reviews, and executive business reviews — identifying risks and opportunities and driving corrective actions to deliver sales, earnings, and cash flow commitments.",
          "Partnered with Commercial, Operations, Supply Chain, Controllers, and Plant Finance teams to align pricing, product mix, manufacturing performance, cost accounting, inventory optimization, and S&OP-driven demand and supply plans — improving execution and profitability across the portfolio.",
          "Strengthened cash generation and supply chain resilience through working capital optimization, inventory management, supplier initiatives, and restructuring programs — delivering approximately $50M of cost savings, sustained productivity improvements, and margin expansion.",
          "Built a high-performing finance team and co-owned portfolio, pricing, and commercial execution with the President, so the P&L closed on volume, margin, and cash.",
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
      "Four years in senior finance and strategy at Kellogg Company, a global consumer foods company, from Battle Creek, Michigan. He served as Vice President, North America Financial Planning & Analysis, and Chief-of-Staff to North America President for an ~$9B business, and led corporate development, including mergers and a global restructuring program.",
    roles: [
      {
        title:
          "Vice President, North America Financial Planning & Analysis, and Chief-of-Staff to North America President",
        dateRange: "2015 - 2017",
        location: "Battle Creek, Michigan, United States",
        highlights: [
          "Led FP&A and performance management for Kellogg North America (~$9B revenue) — partnering with BU Presidents and CFOs across five businesses and Canada; owned annual operating plan, rolling forecasts, long-range planning, and alignment with S&OP and commercial planning processes, translating pricing, mix, trade investment, and volume drivers into actionable decisions.",
          "As Chief-of-Staff to North America President, set the President's agenda across five businesses and Canada — preparing the operating reviews and aligning business-unit presidents, sales, and functions so pricing, trade, volume, and cost decisions closed against plan, forecast, and prior year.",
          "Established a disciplined operating cadence — monthly business reviews, KPI dashboards, and variance analysis vs. plan, forecast, and prior year — clearly articulating drivers, risks, and opportunities and enabling leadership to take timely corrective actions.",
          "Led the financial turnaround plan for Kellogg North America (~$9B), delivering ~$250M of revenue and ~$100M of operating profit improvement.",
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
          "Ran governance and delivery for Kellogg's ~$1.8B global restructuring (~$500M annual savings).",
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
