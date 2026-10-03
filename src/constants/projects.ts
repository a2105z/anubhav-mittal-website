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
    company: "The Campbell's Company (NASDAQ : CPB)",
    monogram: "CPB",
    logo: "/icons/organizations/campbells.png",
    location: "Camden, New Jersey, United States",
    startDate: "2035",
    endDate: "2040",
    summary:
      "Five years as Executive Vice President and Chief Financial Officer of The Campbell's Company, a North American packaged-food company with ~$10B of net sales across meals, beverages, and snacks. He led treasury, controllership, capital allocation, and Investor Relations from Camden, New Jersey.",
    roles: [
      {
        title: "Executive Vice President and Chief Financial Officer",
        dateRange: "2035 - 2040",
        location: "Camden, New Jersey, United States",
        highlights: [
          "Lead enterprise finance as Executive Vice President and Chief Financial Officer of The Campbell's Company from Camden — a North American packaged-food company with ~$10B of net sales across Meals & Beverages and Snacks, including Campbell's, Goldfish, Snyder's of Hanover, Pepperidge Farm, Rao's, and Prego.",
          "Partner with the Chief Executive Officer and the Board on one operating plan for soup, sauces, and snacks — pricing, mix, and productivity held to the same variance cadence versus plan, forecast, and prior year.",
          "Return organic net sales growth to about +3%, with volume positive in snacks and meals rather than price alone, and expand gross margin ~+90 bps and operating margin ~+60 bps.",
          "Release ~$240M of working capital across inventory, receivables, and payables without missing peak soup season or a snack promotion.",
          "Lift trade-spend return and take roughly 10% of unproductive trade out of the plan, redirecting it to the brands and customers that were earning their cost.",
          "Lead treasury, the debt stack, and Investor Relations through a commodity year — earnings quality, non-GAAP bridges, and a North American CPG story the Street can own.",
          "Lead controllership and SOX / ICFR, hold CapEx to a Year-3 lookback, and improve company ROIC ~+110 bps, funding the plan from cash the company generates.",
        ],
      },
    ],
  },
  {
    company: "Clarity Investment Partners",
    monogram: "CIP",
    logo: "/icons/organizations/clarity.jpg",
    location: "Chicago, Illinois, United States",
    startDate: "2026",
    endDate: "Present",
    summary:
      "Since 2026 as Co-Founder and Managing Partner of Clarity Investment Partners, a Chicago real estate private equity firm with ~$150M of annual revenue and about $1.2B of assets. He acquires distressed and underutilized properties, repositions them, and holds them for rent or sells them after the value is created.",
    roles: [
      {
        title: "Co-Founder and Managing Partner",
        dateRange: "2026 - Present",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Co-founded and lead Clarity Investment Partners from Chicago, a value-add real estate private equity firm that buys distressed and underutilized properties, renovates and repositions them, and then holds them for rental income or sells them.",
          "Underwrite acquisitions, capital structure, and the hold-versus-sell case — leverage sized to the asset, not to a target IRR on a spreadsheet — and bring in outside capital alongside the firm's own equity.",
          "Build a portfolio of about $1.2B of real estate and ~$150M of annual revenue across rental income and dispositions, with realized exits at about a 2.0x equity multiple and a high-teens net IRR.",
          "Run asset management after close: renovation budgets, lease-up, operating costs, and the decision to hold or sell, each with a named owner and a lookback against the case that was approved.",
          "Keep the firm as a principal-investing platform alongside the corporate finance career — capital allocation, underwriting, and asset management practiced as an owner, from Chicago.",
        ],
      },
    ],
  },
  {
    company: "The Simply Good Foods Company (NASDAQ : SMPL)",
    monogram: "SMPL",
    logo: "/icons/organizations/simply-good.png",
    location: "Denver, Colorado, United States",
    startDate: "2032",
    endDate: "2035",
    summary:
      "Three years as Executive Vice President and Chief Financial Officer of The Simply Good Foods Company, a North American nutritional snacking company with ~$1.5B of net sales across Quest, Atkins, and OWYN. He led treasury, controllership, planning, and Investor Relations from Denver, Colorado.",
    roles: [
      {
        title: "Executive Vice President and Chief Financial Officer",
        dateRange: "2032 - 2035",
        location: "Denver, Colorado, United States",
        highlights: [
          "Lead enterprise finance as Executive Vice President and Chief Financial Officer of The Simply Good Foods Company from Denver — Quest, Atkins, and OWYN, about $1.5B of net sales in protein bars, chips, shakes, and powders sold through mass, club, and e-commerce.",
          "Partner with the Chief Executive Officer on the operating plan for a North American nutritional-snacking portfolio — price, mix, and marketing investment held to one set of return thresholds and one monthly review.",
          "Hold organic net sales growth near +8%, led by Quest and OWYN rather than price alone, and expand gross margin ~+70 bps as the mix shifts into protein.",
          "Release ~$35M of working capital across inventory, receivables, and payables in a co-manufactured network without missing a Walmart or Amazon reset.",
          "Cut forecast error by about half through a driver-based plan tied to retailer shipments, so a co-manufacturer review and a Denver review land on the same number.",
          "Lead treasury, liquidity, and Investor Relations for a Nasdaq-listed company — earnings quality, the acquisition case, and a protein-snacking story that holds when a brand slows.",
          "Lead controllership and internal controls, hold brand investment and acquisitions to a Year-3 lookback, and improve company ROIC ~+120 bps.",
        ],
      },
    ],
  },
  {
    company: "Mondelez International, Inc. (NASDAQ : MDLZ)",
    monogram: "MZ",
    logo: "/icons/organizations/mondelez.png",
    logoFull: true,
    location: "East Hanover, New Jersey, United States",
    startDate: "2029",
    endDate: "2032",
    summary:
      "Three years as Chief Financial Officer of Mondelez North America, an ~$11B snacking business in biscuits and chocolate. He led commercial finance, planning, working capital, and the regional operating cadence from East Hanover, New Jersey.",
    roles: [
      {
        title:
          "Senior Vice President, Finance (Chief Financial Officer) - North America Region",
        dateRange: "2029 - 2032",
        location: "East Hanover, New Jersey, United States",
        highlights: [
          "Lead finance as Chief Financial Officer of an ~$11B Mondelez North America from East Hanover and return the region to ~+4% organic net sales growth, with volume positive in biscuits and chocolate rather than price alone.",
          "Expand gross margin ~+120 bps and operating margin ~+80 bps — pricing realization, mix into Oreo, Ritz, and chocolate, and productivity that stays in the P&L after cocoa moves.",
          "Release ~$280M of working capital across inventory, receivables, and payables without missing peak-season service in the U.S. or Canada.",
          "Lift trade-spend return and take roughly 10% of unproductive trade out of the plan, redirecting it to the brands and customers that were earning their cost.",
          "Cut forecast error by about half through a driver-based operating plan tied to S&OP, so a plant review and an East Hanover review land on the same number.",
          "Improve regional ROIC ~+140 bps by holding CapEx and slotting investment to a Year-3 lookback, and fund the growth plan from cash the region generates.",
          "Hold North America's major investments and acquisitions to the cases approved in Chicago — revenue, margin, and cash — and build a finance bench the center can draw from.",
        ],
      },
    ],
  },
  {
    company: "T. C. Jacoby & Company, Inc.",
    monogram: "TCJ",
    logo: "/icons/organizations/jacoby.png",
    logoFull: true,
    location: "St. Louis, Missouri, United States",
    startDate: "2026",
    endDate: "2029",
    summary:
      "Three years as Executive Vice President and Chief Financial Officer of T. C. Jacoby & Company, Inc., a privately held dairy merchant with ~$60M of sales in fluid milk, cream, butter, cheese, and milk powders. He led treasury, controllership, internal controls, and the trading and ERP systems from St. Louis, Missouri.",
    roles: [
      {
        title: "Executive Vice President and Chief Financial Officer",
        dateRange: "2026 - 2029",
        location: "St. Louis, Missouri, United States",
        highlights: [
          "Lead T. C. Jacoby & Company as Executive Vice President and Chief Financial Officer from St. Louis, reporting to the Chief Executive Officer — Accounting and Finance, Treasury, Controllership, Risk Management, Software Development and Information Technology, and enterprise reporting for a third-generation merchant trading fluid milk, cream, butter, cheese, whey, and milk powders.",
          "Own controllership for the physical book — mark-to-market, consolidations across subsidiaries, joint ventures, and cooperative structures, related-entity transactions, tax, and currency — and cut the monthly close from 11 business days to 4, with statements ownership and lenders can use without a second pass.",
          "Lead treasury against Chicago Mercantile Exchange and Federal Milk Marketing Order settlements — customer credit, inventory financing, and payables — releasing ~$14M of working capital and cutting credit losses about 30% without missing a load.",
          "Hold internal controls, the audit, and lender reporting to one standard — material post-close adjustments taken to zero, a clean audit opinion, and the ownership package out in two days instead of eight.",
          "Own order-to-cash and purchase-to-pay from the contract through settlement, invoice, and the general ledger, so a sales order, a carrier, and the books land on the same quantity and the same price.",
          "Lead ERP and commodity-trading systems as one architecture — cybersecurity, data governance, and a chart of accounts the commercial desk and the controller both close on — and take automated settlement matching from about 20% to about 75%.",
          "Put AI on the exceptions the close used to clear by hand — invoices, mark-to-market breaks, and Federal Milk Marketing Order settlements — cutting manual touches about 40% while Controllership still owns the number.",
          "Translate the strategic plan into departmental KPIs, a monthly operating review, and a resource plan the Chief Executive Officer can delegate — growth, acquisitions, and customer service discussed against one set of numbers rather than a stack of spreadsheets.",
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
