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
    location: "Walnut Creek, California, United States",
    startDate: "2027",
    endDate: "2041",
    summary:
      "Fourteen years at Central Garden & Pet in Walnut Creek, a pet and garden company. He served as Senior Vice President, Strategic Growth & Investments (Chief Strategy Officer) from 2027 to 2029, as Senior Vice President and President, Pet Consumer Products, and Head of Enterprise Strategy from 2029 to 2033, and as President and Chief Executive Officer from 2033 to 2041, growing the company from about $3.1 billion to about $8 billion and helping it become a Fortune 500 publicly traded company.",
    roles: [
      {
        title: "President and Chief Executive Officer",
        dateRange: "2033 — 2041",
        location: "Walnut Creek, California, United States",
        highlights: [
          "Lead Central Garden & Pet as President and Chief Executive Officer from 2033 to 2041 — growing net sales from ~$3.1B to ~$8B across Pet and Garden and helping the company become a Fortune 500 publicly traded company, with Pennington, Kaytee, Nylabone, and Aqueon, and with strategy, the P&L, sales, and cash in one office.",
          "Complete four acquisitions and bring them into the operating company — from the case through close, the plant and brand handover, and value capture — holding each to return, cash, and a Year-3 lookback so acquired sales earn the shelf rather than sit beside the plan.",
          "Hold the organic book on the path to ~$8B with the segment presidents — price, distribution, trade, and the retailer book — so garden seasons and pet resets close on volume and mix, and organic growth stays positive while the four acquisitions scale.",
          "Expand the Executive Leadership Team as the company scales to ~$8B — building the commercial, supply chain, and segment leadership a Fortune 500 portfolio requires, and running one operating cadence versus plan, forecast, and prior year with the Board and the ELT.",
          "Set capital structure and the dividend with the Chief Financial Officer across CENT and CENTA — aligning the equity narrative and board reporting with a Fortune 500 company at ~$8B of net sales.",
        ],
      },
      {
        title: "Senior Vice President and President, Pet Consumer Products, and Head of Enterprise Strategy",
        dateRange: "2029 — 2033",
        location: "Walnut Creek, California, United States",
        highlights: [
          "From 2029, serve as Senior Vice President and President, Pet Consumer Products, and Head of Enterprise Strategy — Kaytee, Nylabone, and Aqueon — with the pet P&L, sales, and company strategy in one office.",
          "Lead sales and the commercial team for the pet aisle — price, distribution, trade, and the customer book — delivering the segment on volume and mix against plan, forecast, and prior year.",
          "Run the pet business ahead of plan on margin and cash, with productivity and mix into the brands that earn the shelf, and working capital that still covers every reset.",
          "Set cost, inventory, and the seasonal reset with supply chain, plant, and finance leaders — holding brand investment and capacity to return, cash, and a Year-3 lookback.",
          "Hold enterprise strategy and the pet P&L to the same volume, margin, and cash, and take the seat into President and Chief Executive Officer in 2033.",
        ],
      },
      {
        title: "Senior Vice President, Strategic Growth & Investments (Chief Strategy Officer)",
        dateRange: "2027 — 2029",
        location: "Walnut Creek, California, United States",
        highlights: [
          "Lead enterprise strategy, capital allocation, and portfolio governance across Pet and Garden for Central Garden & Pet, a ~$3.1B company — Pennington, Kaytee, Nylabone, and Aqueon — with more than 95% of sales in the United States.",
          "Set the long-range plan and the investment cases with the CEO, CFO, and the Board, including William E. Brown, Chairman and founder — business cases, return thresholds, and a review cadence tied to volume, margin, and cash.",
          "Hold price, distribution, trade, and the retailer book to the plan with the segment presidents and commercial leaders — the garden reset and the pet aisle.",
          "In 2029, move from this seat into Senior Vice President and President, Pet Consumer Products, and Head of Enterprise Strategy, so company strategy and the pet P&L close on the same volume, margin, and cash.",
          "Lead acquisitions, brand investment, and capacity from evaluation through execution — holding each case to return, cash, and a Year-3 lookback — through the end of this seat in 2029.",
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
      "Nearly ten years at Archer-Daniels-Midland in Chicago, a global agribusiness and nutrition company. He was Vice President, Global Business Development; Vice President and Chief Financial Officer of Nutrition, about an $8 billion business, and of Global Pet Solutions, nearly $1 billion, co-owning the P&L in both; and Vice President, Corporate Development and Mergers & Acquisitions.",
    roles: [
      {
        title:
          "Vice President, Global Business Development",
        dateRange: "2025 - 2026",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Lead enterprise-wide capital allocation, investment planning, special projects, and governance across business units and regions for ~$1.5B of annual CapEx and strategic investments.",
          "Set the enterprise investment agenda with the CEO, CFO, and the Executive Leadership Team — business cases, scenarios, return thresholds, and the review cadence that holds execution to value and to capital discipline.",
          "Hold financial plans, capital, and execution to profitable growth, productivity, margin, and cash with the business-unit presidents, CFOs, and commercial, operations, and supply leaders.",
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
          "Owned the plan across five operating segments — the annual plan, the forecast, the long-range plan, and S&OP — and took forecast accuracy from 56% to 9%.",
          "Drove value creation through disciplined capital allocation and productivity — delivering +150 bps of ROIC improvement.",
          "Ran the operating cadence as co-owner of the P&L — monthly reviews versus plan, forecast, and prior year — and drove the corrective actions with the president and the functional leaders.",
          "Co-led pricing, cost, and inventory decisions with the Nutrition leadership team, accountable for +110 bps of margin and ~$190M of working-capital release.",
          "Led finance modernization through SAP S/4HANA implementation and Power BI dashboards integrating SAP, Oracle, and Hyperion data — automating financial consolidation and enhancing visibility into operational and financial performance across the global portfolio.",
          "Carried Nutrition's numbers into quarterly earnings with Investor Relations and Corporate Controllership — the message, the drivers, the non-GAAP bridges, and the CFO Q&A — and aligned management reporting with disclosures, the MD&A, SOX remediation, and a clean audit opinion.",
        ],
      },
      {
        title: "Vice President and Chief Financial Officer, Global Pet Solutions",
        dateRange: "2021 - 2023",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Member of the Pet Solutions leadership team; co-owned the P&L and the plan that delivered ~20% CAGR for a nearly $1 billion business.",
          "Owned the plan and the executive reviews — the annual plan, the forecast, the long-range plan — and drove the calls that delivered sales, earnings, and cash.",
          "Co-owned pricing, mix, manufacturing performance, and inventory with Commercial, Operations, Supply Chain, and Plant Finance, and held demand and supply plans to margin.",
          "Took out approximately $50M of cost and released cash through working capital, inventory, suppliers, and restructuring, with productivity and margin that held.",
          "Built the finance team and co-owned portfolio, pricing, and commercial execution with the President, so the P&L closed on volume, margin, and cash.",
        ],
      },
      {
        title: "Vice President, Corporate Development and Mergers & Acquisitions",
        dateRange: "2017 - 2023",
        location: "Chicago, Illinois, United States",
        highlights: [
          "Led the transactions from the case through value capture — acquisitions, divestitures, joint ventures, partnerships, and organic investment — and set structure and financing with the CEO and CFO to hold return, risk, and the balance sheet.",
          "Completed ~$10B of acquisitions, divestitures, joint ventures, and strategic investments — delivering disciplined execution, portfolio optimization, and long-term shareholder value across multiple business segments.",
          "Led carve-out and IPO readiness for an ADM business segment — establishing standalone financial statements, governance, and operating model. Negotiated Term Loan A and Term Loan B financing and evaluated capital structure alternatives to optimize liquidity, financial flexibility, and shareholder value during COVID-era market volatility.",
          "Developed and institutionalized ADM's enterprise M&A playbook — establishing approval gates, diligence standards, valuation methodologies, integration planning, and post-close value capture — and drove enterprise-wide adoption through change management and consistent decision-making.",
          "Owned enterprise CapEx — the evaluation, the CEO and CFO case review, the tracking, and the Year-3 lookback — and carried valuation, sum-of-the-parts, and the venture pipeline with Investor Relations and Corporate Venture Capital.",
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
      "Four years at Kellogg in Battle Creek, a global consumer foods company. He was Vice President, North America Financial Planning & Analysis, and Chief-of-Staff to North America President, for a business of about $9 billion, and before that Senior Director and Director, Corporate Development and Strategy.",
    roles: [
      {
        title:
          "Vice President, North America Financial Planning & Analysis, and Chief-of-Staff to North America President",
        dateRange: "2015 - 2017",
        location: "Battle Creek, Michigan, United States",
        highlights: [
          "Owned FP&A for Kellogg North America (~$9B) with the business-unit presidents and CFOs across five businesses and Canada — the operating plan, the forecast, the long-range plan, and S&OP — turning pricing, mix, trade, and volume into the decisions.",
          "As Chief-of-Staff to North America President, set the agenda and ran the operating reviews across five businesses and Canada, so pricing, trade, volume, and cost closed against plan, forecast, and prior year.",
          "Ran the North America operating cadence — monthly reviews versus plan, forecast, and prior year — and named the drivers, the risks, and the calls.",
          "Led the financial turnaround plan for Kellogg North America (~$9B), delivering ~$250M of revenue and ~$100M of operating profit improvement.",
          "Set trade spend, pricing, and mix with Commercial and Sales, and lifted revenue quality and margin on the branded portfolio.",
          "Put one planning system across the five businesses — common assumptions, metrics, and governance — so North America decided and executed together.",
        ],
      },
      {
        title: "Senior Director / Director, Corporate Development and Strategy",
        dateRange: "2013 - 2015",
        location: "Battle Creek, Michigan, United States",
        highlights: [
          "Led global corporate development and strategy across acquisitions, joint ventures, divestitures, and strategic alliances — from opportunity identification through execution, integration, and value capture. Selected for Kellogg's Global Leaders and Harvard Executive Development programs.",
          "Led diligence and the investment case on ~$2B of deals — valuation, downside, and the risk-adjusted recommendation — took them to the CEO, CFO, and Board, and negotiated structure across Asia, Africa, and Latin America.",
          "Ran governance and delivery for Kellogg's ~$1.8B global restructuring (~$500M annual savings).",
          "Set Kellogg's e-commerce growth strategy with Marketing, Category Management, Revenue Management, and Digital — the shopper data, the digital shelf, assortment, and the retailer.",
          "Set the growth agenda on next-generation natural, trade spend, and breakfast, across brands and categories.",
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
      "Six years at Booz & Company in New York and Dubai. He advised Fortune 500 companies, sovereign wealth funds, and private equity firms on strategy, mergers, and restructuring, as Senior Engagement Manager, Engagement Manager, and Strategy Associate in consumer and retail.",
    roles: [
      {
        title: "Senior Engagement Manager, Consumer and Retail",
        dateRange: "2011 - 2013",
        location: "Dubai, United Arab Emirates",
        highlights: [
          "Designed and put in place a new go-to-market, a tighter product and R&D portfolio, and a supply chain from plant to distribution for a global CPG company, delivering ~$50M of annual EBIT.",
          "Set a performance-based global trade architecture for a consumer products company after finding the waste in trade investment, and led the rollout through train-the-trainer.",
          "Built the five-year plan with the executive team for a consumer products company — growth, commercial, operations, and finance into the initiatives, the KPIs, the budget, and the roadmap.",
          "Built the five-year plan and operating model for a Middle East sovereign wealth fund's new infrastructure company — PPP roads and railroads, and the portfolio across MENA, Central Asia, and South Asia.",
          "Advised C-suites across the US, MENA, and Asia on the strategy, the deals, and the restructurings.",
        ],
      },
      {
        title: "Engagement Manager, Consumer and Retail",
        dateRange: "2009 - 2011",
        location: "New York City, New York, United States",
        highlights: [
          "Co-managed the program that delivered ~$350M of annual EBIT at a global consumer chemicals company — the go-to-market, the R&D portfolio, and the supply-chain footprint.",
          "Led a four-person team that set the five-year plan and the KPI framework for a regional consumer goods leader.",
          "Led the C-level workshops on the long-term financial, operating, and talent priorities.",
          "Reset marketing ROI for a leading financial institution, moving spend toward digital and cable.",
          "Found ~$30M of operating synergies on a statewide health-system merger and led the integration playbooks.",
        ],
      },
      {
        title: "Strategy Associate, Consumer and Retail",
        dateRange: "2007 - 2009",
        location: "New York City, New York, United States",
        highlights: [
          "Led a global private-equity firm's evaluation of a shipping company on net asset value and market cap.",
          "Built the risk framework — governance, strategic intent, and the downside.",
          "Led a four-person team on a 20-year concept plan for a marina network in an emerging economy.",
          "Sized the yachting market, the real-estate partnerships, and the capital required.",
          "Built the cost and activity-based models for a leading property-and-casualty insurer.",
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
      "One summer at Google in Mountain View, during Harvard Business School. He was a Business, Sales and Operations Intern, rebuilding quality review and scoring so online sales operations could scale.",
    roles: [
      {
        title: "Business, Sales and Operations Intern",
        dateRange: "2006 - 2006",
        location: "Mountain View, California, United States",
        highlights: [
          "Rebuilt quality review so online sales operations could scale through the India office's hyper-growth.",
          "Redesigned quality scoring from the statistics, and raised productivity and accuracy.",
          "Sat in business, sales, and operations at a defining stage for Google.",
          "Set the metrics, the reporting cadence, and the operating-model questions with sales operations leadership.",
          "Carried that operating-model work into the later commercial finance and transformation seats.",
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
      "Six years with the Government of India in New Delhi, as an officer of the Indian Civil Services. He was Assistant Director in the Ministry of Home Affairs, Assistant Chief Finance and Accounts Officer in the Ministry of Telecom, and, at the start, an Officer Trainee.",
    roles: [
      {
        title: "Assistant Director, Ministry of Home Affairs",
        dateRange: "2003 - 2005",
        location: "New Delhi, Delhi, India",
        highlights: [
          "Carried national Border Management policy to senior ministry leadership.",
          "Led the Parliamentary elections in Manipur, at scale and under scrutiny.",
          "Held policy, security, and the operation together on a federal mandate.",
          "Wrote the decision papers for senior bureaucrats and elected leadership.",
          "Managed the stakeholders across a complex public-sector brief.",
        ],
      },
      {
        title:
          "Assistant Chief Finance and Accounts Officer, Ministry of Telecom",
        dateRange: "2001 - 2003",
        location: "New Delhi, Delhi, India",
        highlights: [
          "Valued federal telecom investments through a period of sweeping deregulation.",
          "Judged what deregulation would do to federal capital programs and policy.",
          "Ran finance and accounting governance at national scale — capex, opex, and program reporting.",
          "Took the financial case on the regulatory transition to senior leadership.",
          "This seat started the controlling, capital budgeting, and policy-aligned planning that followed.",
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
      "Two years at Hindustan Unilever in Mumbai and Hyderabad, a global consumer goods company. He was a management trainee, rotating through marketing, sales, manufacturing, and finance.",
    roles: [
      {
        title: "Management Trainee",
        dateRange: "1997 - 1999",
        location: "Mumbai, Maharashtra, India | Hyderabad, Telangana, India",
        highlights: [
          "Selected for Hindustan Unilever's flagship Rotational Leadership Program in Mumbai and Hyderabad.",
          "Rotated across marketing, sales and distribution, manufacturing operations, and finance for consumer products.",
          "Put two cost restructurings in place, worth ~$200K of annual savings.",
          "Learned the consumer P&L, the route to market, and commercial finance on the rotation.",
          "Those two years set the cost, route, and finance habits behind the later P&L seats.",
        ],
      },
    ],
  },
];
