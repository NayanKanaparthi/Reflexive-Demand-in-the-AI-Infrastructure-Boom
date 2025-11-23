import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Table as TableIcon } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// --- Components ---

const FinancialTable = ({ title, headers, rows, note }) => (
  <div className="w-full bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden mb-8">
    <div className="p-4 border-b border-zinc-800 bg-zinc-900/80 flex items-center gap-2">
      <TableIcon size={16} className="text-emerald-500" />
      <h3 className="text-sm font-bold text-zinc-200 uppercase tracking-wider">{title}</h3>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-zinc-400">
        <thead className="text-xs text-zinc-500 uppercase bg-zinc-900 border-b border-zinc-800">
          <tr>
            {headers.map((header, i) => (
              <th key={i} className="px-6 py-3 font-medium tracking-wider whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {rows.map((row, i) => (
            <tr key={i} className="bg-zinc-900/20 hover:bg-zinc-800/50 transition-colors">
              {row.map((cell, j) => (
                <td key={j} className={`px-6 py-4 whitespace-nowrap ${j === 0 ? 'font-medium text-zinc-200' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {note && <div className="p-3 text-xs text-zinc-500 bg-zinc-900/30 border-t border-zinc-800 italic">{note}</div>}
  </div>
);

// --- Content Data ---

const sections = [
  {
    id: "cover",
    title: "Cover",
    type: "cover",
    content: {
      title: "Reflexive Demand in the AI Infrastructure Boom",
      subtitle: "Vendor Financing, Backlogs, & the CapEx–Cash Flow Imbalance (2022–2025)",
      author: "Nayan Kanaparthi",
      affiliation: "New York University, M.S. in Management of Technology",
      abstract: "This paper examines whether the post-2022 AI infrastructure expansion represents genuine demand or a reflexive, vendor-financed cycle. Using financial data from Oracle, Microsoft, Amazon, Alphabet, and Nvidia, we document three interlinked dynamics: (1) A sharp rise in capital intensity (CapEx/OCF ratios above 1.0 for Oracle), (2) Exploding backlogs and Remaining Performance Obligations (RPO), largely long-dated and unmonetized, and (3) Heavy reliance on vendor financing. We argue that the resulting feedback loop—belief → financing → backlog → valuation → further financing—resembles the self-reinforcing mechanisms of the dot-com bubble, albeit with modern AI-specific features."
    }
  },
  {
    id: "introduction",
    title: "1. Introduction",
    type: "text",
    content: `Between 2022 and 2025, the artificial intelligence industry experienced one of the fastest capital buildouts in the history of modern technology. Data center operators, cloud providers, and semiconductor companies committed trillions of dollars in aggregate spending to support the training and deployment of large language models. This acceleration has been described by many analysts as a new technological revolution, yet the financial underpinnings of this expansion reveal patterns that warrant careful study.

    During this period, firms such as Nvidia, Oracle, Microsoft, Amazon, and Google increased capital expenditures far beyond the growth rate of their operating cash flows. In parallel, contractual backlogs, often reported as remaining performance obligations, expanded sharply as companies booked multi-year cloud and compute contracts. These commitments created the appearance of rising demand, even though much of the spending was based on expectations of future utilization rather than immediate consumption. Vendor financing practices, in which suppliers provide favorable payment terms or lend indirectly to customers, further amplified this dynamic by allowing infrastructure growth to outpace realized revenue.

    The reflexive nature of this process lies in how belief feeds on itself. Expectations of large-scale adoption encourage suppliers and financiers to build more capacity, which increases apparent demand and reinforces investor confidence. This feedback loop can persist for extended periods, as it did during earlier speculative episodes such as the late-1990s internet boom and the mid-2000s credit expansion.

    This paper explores whether the current wave of artificial intelligence infrastructure investment represents sustainable growth or a self-reinforcing financial cycle. It focuses on three core questions. First, how have capital expenditure and operating cash flow diverged across major technology vendors? Second, to what extent are rising backlogs and long-term contracts translating into near-term cash conversion? Third, how are financing conditions, including corporate debt issuance and vendor credit, enabling this expansion?

    To address these questions, the study combines quantitative analysis of financial filings with qualitative examination of case studies involving Oracle's agreement with OpenAI and Nvidia's ecosystem financing strategy. The goal is to provide a grounded assessment of how reflexivity, leverage, and anticipation of demand interact within the current artificial intelligence investment cycle.`
  },
  {
    id: "literature",
    title: "2. Literature Review",
    type: "text",
    content: `The concept of reflexivity, first introduced by George Soros (1987), describes feedback loops between perception and reality in financial markets. When expectations drive actions that, in turn, reinforce those expectations, markets can enter self-reinforcing phases that become detached from underlying fundamentals. In the context of technology and infrastructure spending, this framework helps explain how belief in future AI demand may stimulate financing and capacity growth that temporarily validate those same beliefs.

    Research on capital expenditure cycles supports this interpretation. Lamont (1997) and Stein (2003) demonstrate that firms often increase investment during periods of easy credit even when expected returns decline, as low financing costs and investor optimism reduce capital discipline. These cycles often reverse when liquidity tightens or demand realization slows, leading to overcapacity and write-downs. The current AI infrastructure expansion, driven by large data-center projects and long-term cloud contracts, displays similar characteristics of procyclical investment behavior.

    Studies on vendor financing and demand signaling (Bertrand and Mullainathan, 2001; Froot and Stein, 1998) show that companies can create apparent demand through financing arrangements that subsidize customer purchases. This approach sustains short-term revenue visibility while transferring financial risk to later periods. The recent trend of chipmakers and cloud providers investing directly in AI startups that also serve as their customers reflects this same mechanism.

    Taken together, these strands of literature establish the theoretical foundation for the paper's main hypothesis: that the AI infrastructure boom reflects a reflexive cycle driven by capital availability, contractual commitments, and market narratives that reinforce one another.`
  },
  {
    id: "reflexivity",
    title: "3. The Reflexive Loop",
    type: "text",
    content: `The current artificial intelligence infrastructure boom exhibits a pattern of feedback between belief, financing, and capacity creation. This feedback mechanism can be described as a reflexive loop, in which expectations of growth influence real economic behavior that then reinforces those same expectations.

    **3.1. Mechanics of Reflexivity in Technology Markets**
    In reflexive systems, perceptions and fundamentals are interdependent. When investors and corporate leaders believe that artificial intelligence will transform the economy, this belief motivates both financing activity and capacity expansion. The increase in capital expenditure validates the narrative of growth by showing tangible progress in data centers, semiconductor capacity, and research infrastructure. As a result, valuations and credit availability rise, creating additional incentives to invest further. The process forms a closed loop in which belief drives action, and action reinforces belief.

    **3.2. Vendor Financing and Demand Amplification**
    A defining feature of the current cycle is the role of vendor financing. Semiconductor and hardware suppliers, such as Nvidia, and hyperscale cloud providers, such as Oracle, have extended favorable credit or long-term supply contracts to customers that may not yet have sufficient revenue to justify these purchases. These arrangements allow infrastructure projects to continue even when near-term cash flows are insufficient, effectively pulling future demand into the present.

    Vendor financing alters the normal demand signal in the market. Instead of end users driving purchasing decisions based on immediate needs, suppliers help create the demand themselves through financial leverage or flexible payment structures. This creates an upward bias in reported demand metrics such as booked revenue, backlog, or remaining performance obligations.

    **3.3. Backlogs, Accounting Recognition, and Apparent Growth**
    Many large cloud providers report growing backlogs as a sign of strong demand. However, under accounting standards, these backlogs often include multi-year contracts that may not translate into cash receipts for several years. For example, Oracle's $317 billion in future contract revenue includes agreements, such as its $300 billion deal with OpenAI, that will not begin contributing materially until 2027. While these figures raise investor confidence, they also delay the conversion of expected value into realized cash.

    **3.4. Financial Conditions as an Enabler**
    The low-interest-rate environment that persisted through 2023 and early 2024 encouraged corporations to borrow heavily for infrastructure buildouts. Debt markets, led by institutional investors seeking yield, absorbed large bond and note issuances from major technology firms. As a result, companies could maintain high levels of capital expenditure even when their operating cash flow did not keep pace.

    **3.5. The Vendor Financing Network**
    The reflexive loop in the artificial intelligence economy can be observed most clearly through the financing and contractual relationships among a small cluster of dominant firms. Bloomberg's network mapping (2025) shows how Nvidia, Oracle, OpenAI, Microsoft, and AMD are linked through a dense web of investments, service contracts, and reciprocal financing arrangements.`
  },
  {
    id: "network-viz",
    title: "Fig 1. Network Map",
    type: "custom-viz",
    content: "Network Map of Vendor Financing"
  },
  {
    id: "methodology",
    title: "4. Data & Methodology",
    type: "text",
    content: `**4.1. Objective and Data Sources**
    This section examines whether the financial structure of the artificial intelligence infrastructure boom reflects sustainable cash-generating growth or an overextension of leverage. We use company-level financial data for Oracle, Microsoft, Amazon, Alphabet, and Nvidia from fiscal years 2022 through 2025.
    The data set integrates:
    1. Capital Expenditure to Operating Cash Flow (CapEx/OCF) Ratios.
    2. Remaining Performance Obligations (RPO) and Deferred Revenue.
    3. Corporate Debt Issuance and Maturity Profiles.

    **4.2. Analytical Framework**
    The analysis follows a two-stage structure:
    *Stage 1: Capital Efficiency Analysis.* CapEx/OCF ratios are evaluated year by year to determine whether investment levels are being supported by operating inflows or by external sources of capital.
    *Stage 2: Deferred Demand and Leverage Analysis.* RPO-to-revenue multiples and current portions of backlog are compared across vendors to assess the temporal distribution of recognized demand.

    **4.3. Key Metrics and Indicators**
    Below, we present the core data supporting our analysis across three dimensions: Capital Intensity, Backlog Quality, and Debt Issuance.`
  },
  {
    id: "data-capex",
    title: "Table 1. CapEx Analysis",
    type: "chart-capex",
    content: "Analysis of Capital Expenditure Intensity (2022-2025)"
  },
  {
    id: "data-backlog",
    title: "Table 2. Backlog Analysis",
    type: "chart-rpo",
    content: "Remaining Performance Obligations vs. Revenue"
  },
  {
    id: "data-debt",
    title: "Table 3. Debt Issuance",
    type: "chart-debt",
    content: "Cloud Vendor Debt Issuance (2024-2025)"
  },
  {
    id: "data-interpretation",
    title: "4.4 Interpretation",
    type: "text",
    content: `**4.4. Interpretation of Financial Behavior**
    When combined, these metrics suggest that the artificial intelligence infrastructure boom is being financed in part by contractual optimism and credit leverage rather than realized economic utilization. Oracle's elevated CapEx/OCF ratio and ballooning RPO contrast sharply with the steadier profiles of Microsoft and Google, whose backlogs are more immediately monetizable. Nvidia, meanwhile, sustains its growth by recycling free cash flow into equity investments in its own customers, effectively manufacturing downstream demand.

    **4.5. Data Coverage and Limitations**
    This study draws on publicly available financial statements, SEC filings, Bloomberg market data, and contemporaneous reporting covering fiscal years 2022 through 2025. Limitations include fiscal calendar alignment differences, derived metrics where quarterly data was extrapolated, and limited disclosure regarding private internal financing terms.`
  },
  {
    id: "results",
    title: "5. Results",
    type: "text",
    content: `**5.1. Diverging Investment Patterns**
    The data presented in Table 1 show that capital expenditure intensity among the largest technology firms has started to diverge. Oracle's CapEx-to-Operating-Cash-Flow ratio exceeded unity by 2025, meaning that the company was spending more on fixed investment than it generated through operations. Microsoft, Google, and Nvidia, on the other hand, maintained ratios well below 0.5. This suggests two distinct groups: those scaling proportionally to cash generation, and those expanding through credit and long-term contracts.

    **5.2. Deferred Demand and Backlog Concentration**
    Table 2 highlights the varying structure of contractual backlogs. Oracle's RPO multiple of 7.9 times trailing revenue, with only 10 percent expected to convert within twelve months, indicates that most of its booked demand will materialize only after 2027. Microsoft and Google display stronger near-term realization with current portions of 35 percent and 55 percent. This disparity shows that a large share of Oracle's apparent demand exists primarily on paper.

    **5.3. Financing the Build-Out**
    Table 3 demonstrates that financing structures mirror the backlog pattern. Oracle issued $26 billion of new bonds during 2024 and 2025, increasing net debt by nearly $10 billion. Other firms, such as Microsoft and Nvidia, reported little or no new borrowing. This indicates that part of the AI infrastructure expansion is debt-driven, where future contractual revenues are used as collateral for current borrowing.

    **5.4. Vendor-Financed Reflexivity**
    Nvidia's equity positions in OpenAI, xAI, and Figure AI, and AMD's warrant arrangement with OpenAI create a circular flow of capital. Each firm records growth from another's financing activity. This circulation turns expectation into measurable performance.

    **5.5. Comparison with Previous Cycles**
    The quantitative evidence parallels aspects of both the late-1990s dot-com expansion and the mid-2000s credit boom. In both cases, expectations of long-term transformation encouraged aggressive capital formation and high valuations before underlying profitability was proven.

    **5.6. Implications**
    Capital expenditure has become disconnected from operating cash flow, backlogs are dominated by long-term obligations, and vendor financing has blurred the line between genuine and synthetic demand. These dynamics form a reflexive loop in which reported growth precedes real growth.`
  },
  {
    id: "case-studies",
    title: "6. Case Studies",
    type: "text",
    content: `**6.1. Oracle and OpenAI: Debt-Funded Deferred Realization**
    The Oracle-OpenAI agreement illustrates how vendor financing transforms expectations into recorded growth. The five-year, $300 billion contract, scheduled to begin in 2027, accounts for most of Oracle's recent surge in RPO. Oracle is building data centers and purchasing chips years before OpenAI's payments are due. Its operating cash flow is insufficient to finance this construction, leading to $26 billion in new debt issuance. This sequence reverses the traditional business cycle: suppliers borrow to meet anticipated customer demand.

    **6.2. Nvidia's Ecosystem Investments: Equity-Funded Demand Creation**
    Nvidia represents the supply-side mirror image of Oracle. By 2025, Nvidia had invested more than $100 billion in 51 AI startups. These firms rely on Nvidia's chips, creating an ecosystem where Nvidia's capital fuels demand for its own products. Revenue is recognized when GPUs are delivered, even though much of the funding originated from Nvidia's own investments.

    **6.3. AMD and OpenAI: Strategic Dependence through Equity Incentives**
    In 2025, AMD entered a 6GW GPU supply agreement with OpenAI and granted the company warrants to purchase up to 160 million AMD shares. This arrangement ties AMD's future valuation to OpenAI's success and functions as a hybrid of equity-linked financing and strategic dependency.

    **6.4. Microsoft and OpenAI: Controlled Exposure**
    Microsoft provides a counterpoint. As OpenAI's largest backer, it has invested tens of billions but maintains disciplined capital spending relative to OCF (ratio below 0.5). Microsoft finances its expansion through internally generated cash, demonstrating that participation in the AI build-out does not require over-leverage.

    **6.5. Comparative Insights**
    These cases map the spectrum of financial engineering: Oracle (debt-financed anticipation), Nvidia (self-financed demand creation), AMD (equity-linked incentives), and Microsoft (risk-controlled participation).`
  },
  {
    id: "market-context",
    title: "7. Market Context",
    type: "text",
    content: `**7.1. Credit expansion and ultra-tight spreads**
    US corporate bond markets were highly accommodative through 2024 and 2025. Total US corporate bond issuance reached $2.0 trillion in 2024 (+30.6% YoY). Investment grade spreads remained near cycle tights (~0.64%). This environment supports pre-funded data-center build-outs and vendor financing structures.

    **7.2. Tech equity concentration**
    The "Magnificent Seven" accounted for roughly 35% of S&P 500 market cap by late 2025. This concentration increases the market impact of any change in beliefs about AI adoption.

    **7.3. Early signs of sentiment inflection**
    In Jan 2025, the release of DeepSeek catalyzed a sharp reassessment of competitive moats. Nvidia experienced a record single-day market value decline. Simultaneously, user backlash regarding GPT-5 performance contributed to a cooling of aggressive narratives.

    **7.4. Synthesis**
    The combination of record issuance and tight spreads acts as an enabler of the reflexive loop. When confidence is high, backlog growth is proof of demand. When confidence wavers, those obligations are reinterpreted as utilization risk.`
  },
  {
    id: "comparison",
    title: "8. Historical Comparison",
    type: "text",
    content: `**8.1. Parallels with the dot com expansion**
    Both the late 90s and current cycle saw firms investing heavily based on rapid adoption assumptions. Backlogs served as proof points for growth narratives. When utilization lagged capacity, CapEx slowed sharply.

    **8.2. Parallels with the 2008 credit boom**
    The current pattern shares two features with 2008: balance sheets extended against expectations of future cash flows, and financial engineering creating circular support for valuations.

    **8.3. Key differences**
    The assets built today (chips, data centers) have productive optionality, lowering the risk of absolute capital loss compared to 2008 housing. Corporate balance sheets of platform giants are also stronger.

    **8.4. Where similarities intersect**
    The present cycle combines dot-com optimism with credit-boom balance sheet mechanics. If the narrative weakens, backlogs will be reinterpreted as utilization risk.

    **8.5. Early warning indicators**
    * **Backlog realization:** Rising non-current RPO suggests risk.
    * **CapEx/OCF:** Ratios > 1.0 indicate reliance on external financing.
    * **Credit spreads:** Widening spreads would pressure backlog-funded projects.
    * **Unit pricing:** Discounting GPU instances would indicate overbuild.

    **8.6. Scenario alignment**
    * **Soft landing:** Backlog converts, CapEx slows to sustainable levels.
    * **Hard landing:** Conversion disappoints, spreads widen, equities re-rate lower.`
  },
  {
    id: "policy",
    title: "9. Implications",
    type: "text",
    content: `**For corporate managers:**
    Exercise caution when expanding CapEx primarily on pre-booked or vendor-financed backlogs. Align investment pace with realized utilization rates rather than forward-booked capacity.

    **For investors:**
    CapEx/OCF ratios and the share of current RPO are key early indicators. Sustained CapEx exceeding internal cash generation coupled with long-dated backlogs suggests rising vulnerability.

    **For regulators:**
    The concentration of financing and capacity commitments introduces systemic exposure. Monitoring credit issuance tied to AI expansion and vendor-related equity financing is essential.`
  },
  {
    id: "conclusion",
    title: "10. Conclusion",
    type: "text",
    content: `Evidence across firm-level metrics and macro conditions supports the view that the AI infrastructure boom reflects reflexive, vendor-financed dynamics rather than purely demand-driven expansion. Oracle's CapEx-OCF imbalance and unprecedented RPO leverage exemplify the mechanism, while Nvidia's cash surplus represents the counterparty outcome.

    The analysis suggests that the apparent demand driving AI infrastructure spending may be amplified by financial structures and contractual pre-commitments that mask the underlying utilization rate. These patterns resemble earlier cycles where belief-driven financing created temporary growth before economic realization caught up.

    A soft landing scenario would require actual enterprise adoption to close the utilization gap before debt servicing costs rise or credit spreads widen. Conversely, if financing conditions tighten while backlogs remain unrealized, the sector may face a correction as capital discipline reasserts itself.`
  },
  {
    id: "references",
    title: "11. References",
    type: "text",
    content: `• Oracle, Microsoft, Alphabet, Amazon, Nvidia: SEC 10-K/10-Q filings (2022-2025).
    • Bloomberg News (2025): "Interconnected Vendor Financing...".
    • WSJ: "Oracle, OpenAI Sign $300 Billion Cloud Deal", "Tech Rally Shows Signs of Losing Steam".
    • Soros, G. (1987). The Alchemy of Finance.
    • Lamont (1997) & Stein (2003): Research on capital expenditure cycles.
    • Bertrand & Mullainathan (2001): Vendor financing and demand signaling.`
  }
];

// --- Chart & Table Data ---

const capexData = [
  { year: '2022', Oracle: 0.473, Microsoft: 0.268, Google: 0.344, Amazon: 1.361, Nvidia: 0.107 },
  { year: '2023', Oracle: 0.507, Microsoft: 0.321, Google: 0.317, Amazon: 0.621, Nvidia: 0.325 },
  { year: '2024', Oracle: 0.368, Microsoft: 0.375, Google: 0.419, Amazon: 0.716, Nvidia: 0.038 },
  { year: '2025', Oracle: 1.019, Microsoft: 0.474, Google: null, Amazon: null, Nvidia: 0.050 },
];

const rpoData = [
  { name: 'Oracle', multiple: 7.9, currentPortion: 10, revenue: 57.4, backlog: 455 },
  { name: 'Microsoft', multiple: 4.9, currentPortion: 35, revenue: 75.0, backlog: 368 },
  { name: 'Google', multiple: 2.2, currentPortion: 55, revenue: 125.3, backlog: 108.2 },
  { name: 'Amazon', multiple: 1.9, currentPortion: 0, revenue: 103.0, backlog: 195 }, 
];

const debtData = [
  { name: 'Oracle', issuance24: 8.0, issuance25: 18.0, total: 26.0, coupon: "4.45-6.1%" },
  { name: 'Amazon', issuance24: 12.75, issuance25: 0, total: 12.75, coupon: "1.2-1.5%" },
  { name: 'Alphabet', issuance24: 0, issuance25: 7.8, total: 7.8, coupon: "4.0-5.3%" },
  { name: 'Microsoft', issuance24: 0, issuance25: 0, total: 0, coupon: "N/A" },
  { name: 'Nvidia', issuance24: 0, issuance25: 0, total: 0, coupon: "N/A" },
];

// Table 1: CapEx/OCF Ratios
const table1Headers = ["Company", "2022", "2023", "2024", "2025"];
const table1Rows = [
  ["Oracle (ORCL)", "0.473", "0.507", "0.368", "1.019"],
  ["Microsoft (MSFT)", "0.268", "0.321", "0.375", "0.474"],
  ["Google (GOOG)", "0.344", "0.317", "0.419", "N/A"],
  ["Amazon (AMZN)", "1.361", "0.621", "0.716", "N/A"],
  ["Nvidia (NVDA)", "0.107", "0.325", "0.038", "0.050"],
];

// Table 2: Cloud Infrastructure Vendors RPO
const table2Headers = ["Vendor", "Total RPO ($B)", "RPO/Rev (x)", "Current %", "Rev ($B)", "OCF ($B)", "CapEx ($B)"];
const table2Rows = [
  ["Microsoft Azure", "368.0", "4.9", "35% (≤12mo)", "75.0", "136.2", "64.6"],
  ["Amazon AWS", "195.0", "1.9", "N/D", "103.0", "115.9", "83.0"],
  ["Google Cloud", "108.2", "2.2", "55% (≤24mo)", "50.0", "125.3", "52.5"],
  ["Oracle OCI", "455.0", "7.9", "10% (≤12mo)", "57.4", "20.8", "21.2"],
  ["Nvidia", "N/A", "N/A", "N/A", "130.5", "64.1", "3.2"],
];

// Table 3: Debt Issuance
const table3Headers = ["Company", "2024 Issuance ($B)", "2025 Issuance ($B)", "Net Debt Change", "Coupon Range"];
const table3Rows = [
  ["Oracle", "8.0", "18.0", "+ $9.6 B", "4.45-6.10%"],
  ["Microsoft", "0", "0", "N/A", "2.70-4.50%"],
  ["Amazon", "12.75", "0", "N/A", "1.20-1.50%"],
  ["Alphabet", "0", "7.8", "N/A", "4.00-5.30%"],
  ["Nvidia", "0", "0", "0", "2.92% avg"],
];

// --- Components ---

const Navigation = ({ activeSection, scrollToSection, isOpen, setIsOpen }) => (
  <div className={`fixed top-0 right-0 h-full z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:w-64 md:border-l md:border-zinc-800 bg-zinc-950/95 backdrop-blur-md`}>
    <div className="p-6 flex flex-col h-full">
      <div className="flex justify-between items-center mb-8 md:hidden">
        <span className="text-zinc-400 uppercase tracking-widest text-xs font-bold">Contents</span>
        <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white">
          <X size={24} />
        </button>
      </div>
      <div className="hidden md:block mb-8">
         <span className="text-emerald-500 uppercase tracking-widest text-xs font-bold">Contents</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => {
              scrollToSection(section.id);
              setIsOpen(false);
            }}
            className={`w-full text-left py-2 px-3 rounded text-sm transition-colors duration-200 ${
              activeSection === section.id
                ? 'text-emerald-400 bg-emerald-900/20 border-l-2 border-emerald-500'
                : 'text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900'
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  </div>
);

const Hero = ({ content }) => (
  <div className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 max-w-4xl relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-cyan-600"></div>
    <span className="inline-block py-1 px-2 rounded bg-emerald-900/30 text-emerald-400 text-xs font-mono mb-6 border border-emerald-800">
      RESEARCH PAPER PRESENTATION
    </span>
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-zinc-100 mb-6 leading-tight">
      {content.title}
    </h1>
    <h2 className="text-xl md:text-2xl text-zinc-400 font-light mb-8 leading-relaxed">
      {content.subtitle}
    </h2>
    <div className="flex flex-col md:flex-row gap-8 mb-12 border-l-2 border-zinc-800 pl-6">
      <div>
        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Author</p>
        <p className="text-zinc-200 font-medium">{content.author}</p>
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Affiliation</p>
        <p className="text-zinc-400">{content.affiliation}</p>
      </div>
    </div>
    <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 backdrop-blur-sm">
      <p className="text-zinc-300 leading-relaxed font-serif italic text-lg">
        "{content.abstract}"
      </p>
    </div>
    <div className="animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-24 md:transform-none">
      <ChevronDown className="text-zinc-600" size={32} />
    </div>
  </div>
);

const TextSection = ({ title, content }) => {
  const formattedContent = content.split('\n').map((paragraph, idx) => {
    if (!paragraph.trim()) return <br key={idx} />;
    
    const parts = paragraph.split(/(\*\*.*?\*\*)/g);
    return (
      <p key={idx} className="mb-6 text-zinc-300 leading-loose font-serif text-lg md:text-xl">
        {parts.map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-white font-sans font-bold text-base uppercase tracking-wide mr-2 block mt-8 mb-2 border-b border-zinc-800 pb-2">{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-12 flex items-center gap-4">
        <span className="w-12 h-1 bg-emerald-500 block"></span>
        {title}
      </h2>
      <div className="prose prose-invert max-w-none">
        {formattedContent}
      </div>
    </div>
  );
};

const CapexChart = () => (
  <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 max-w-5xl">
    <h2 className="text-3xl font-bold text-zinc-100 mb-4">Table 1: Capital Intensity Divergence</h2>
    <p className="text-zinc-400 mb-12 max-w-2xl">
      Oracle's CapEx/OCF ratio breaks 1.0 in 2025, signaling reliance on external financing. 
      In contrast, Nvidia and Microsoft maintain healthy internal funding ratios.
    </p>
    
    {/* Data Table */}
    <FinancialTable 
      title="CapEx / Operating Cash Flow Ratios"
      headers={table1Headers}
      rows={table1Rows}
      note="Source: Company Filings. Ratio > 1.0 indicates CapEx exceeds Operating Cash Flow."
    />

    <div className="h-[400px] w-full bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={capexData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis dataKey="year" stroke="#666" />
          <YAxis stroke="#666" label={{ value: 'CapEx / OCF Ratio', angle: -90, position: 'insideLeft', fill: '#666' }} />
          <RechartsTooltip 
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Legend wrapperStyle={{ paddingTop: '20px' }} />
          <Line type="monotone" dataKey="Oracle" stroke="#10b981" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Microsoft" stroke="#3b82f6" strokeWidth={2} />
          <Line type="monotone" dataKey="Amazon" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Nvidia" stroke="#a855f7" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const RpoChart = () => (
  <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 max-w-5xl">
    <h2 className="text-3xl font-bold text-zinc-100 mb-4">Table 2: The Backlog Illusion</h2>
    <p className="text-zinc-400 mb-12 max-w-2xl">
      Oracle's RPO (Remaining Performance Obligations) is 7.9x its annual revenue, but only 10% is current.
      This indicates "demand" is locked in long-term, unmonetized contracts.
    </p>

    {/* Data Table */}
    <FinancialTable 
      title="RPO, Revenue & Cash-Flow Comparison"
      headers={table2Headers}
      rows={table2Rows}
      note="Source: Company Filings. RPO/Rev Multiple indicates years of backlog relative to current revenue."
    />

    <div className="h-[400px] w-full bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rpoData} layout="vertical" margin={{ left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" horizontal={false} />
          <XAxis type="number" stroke="#666" domain={[0, 9]} />
          <YAxis dataKey="name" type="category" stroke="#fff" width={80} />
          <RechartsTooltip 
            cursor={{fill: 'rgba(255, 255, 255, 0.05)'}}
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff' }}
          />
          <Legend />
          <Bar dataKey="multiple" name="Backlog Multiple (RPO/Rev)" fill="#3f3f46" radius={[0, 4, 4, 0]}>
            {rpoData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Oracle' ? '#10b981' : '#3f3f46'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const DebtChart = () => (
  <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 max-w-5xl">
    <h2 className="text-3xl font-bold text-zinc-100 mb-4">Table 3: Debt Issuance (2024-2025)</h2>
    <p className="text-zinc-400 mb-12 max-w-2xl">
      Oracle has significantly outpaced peers in new debt issuance to fund its expansion, adding $26B in two years.
    </p>

    {/* Data Table */}
    <FinancialTable 
      title="Cloud Vendor Debt Issuance"
      headers={table3Headers}
      rows={table3Rows}
      note="Source: Bloomberg Bond Issuance Data. Net Debt Change reflects new issuance less repayments."
    />

    <div className="h-[400px] w-full bg-zinc-900/50 p-6 rounded-xl border border-zinc-800">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={debtData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
          <XAxis dataKey="name" stroke="#666" />
          <YAxis stroke="#666" label={{ value: 'Billions ($)', angle: -90, position: 'insideLeft', fill: '#666' }} />
          <RechartsTooltip 
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff' }}
          />
          <Legend />
          <Bar dataKey="total" name="Total Issuance ($B)" fill="#ef4444" radius={[4, 4, 0, 0]}>
            {debtData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Oracle' ? '#ef4444' : '#3f3f46'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

const ReflexiveNetwork = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-24 max-w-5xl">
       <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8">
        Fig 1. The Reflexive Feedback Loop
      </h2>
      <p className="text-zinc-400 mb-12 max-w-2xl">
        Network mapping of interconnected vendor financing and service relationships among major AI firms (Source: Bloomberg, 2025).
      </p>

      <div className="relative w-full min-h-[400px] bg-zinc-900/30 rounded-xl border border-zinc-800 overflow-hidden flex items-center justify-center p-4 group">
        <img 
          src="/network-diagram.png" 
          alt="Bloomberg Network Map of Vendor Financing - Network diagram showing relationships between OpenAI, Nvidia, Microsoft, Oracle, AMD, and other AI companies through investments, hardware/software, services, and venture capital" 
          className="w-full h-auto object-contain rounded-lg shadow-lg max-h-[80vh]"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/800x500/18181b/52525b?text=Network+Diagram+Image+Placeholder";
          }}
        />
        
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <p className="text-white font-bold bg-black/50 p-4 rounded backdrop-blur-md">
             Source: Bloomberg
          </p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      <button 
        onClick={() => setIsMenuOpen(true)}
        className="fixed top-4 right-4 z-50 p-2 bg-zinc-900 rounded-full border border-zinc-800 md:hidden text-zinc-400 hover:text-white"
      >
        <Menu size={24} />
      </button>

      <div className="flex">
        <main className="flex-1 md:mr-64 w-full">
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="border-b border-zinc-900/50 last:border-0">
              {section.type === 'cover' && <Hero content={section.content} />}
              {section.type === 'text' && <TextSection title={section.title} content={section.content} />}
              {section.type === 'chart-capex' && <CapexChart />}
              {section.type === 'chart-rpo' && <RpoChart />}
              {section.type === 'chart-debt' && <DebtChart />}
              {section.type === 'custom-viz' && <ReflexiveNetwork />}
            </div>
          ))}
          
          <div className="py-24 px-6 text-center border-t border-zinc-900 text-zinc-600">
            <p className="mb-2">Based on the paper by Nayan Kanaparthi</p>
            <p className="text-xs uppercase tracking-widest">Situational Analysis • 2025</p>
          </div>
        </main>

        <Navigation 
          activeSection={activeSection} 
          scrollToSection={scrollToSection}
          isOpen={isMenuOpen}
          setIsOpen={setIsMenuOpen}
        />
      </div>
    </div>
  );
}