import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Table as TableIcon } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

// --- Components ---

const FinancialTable = ({ title, headers, rows, note }) => (
  <div className="w-full bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden mb-6 sm:mb-8">
    <div className="p-3 sm:p-4 border-b border-zinc-800 bg-zinc-900/80 flex items-center gap-2">
      <TableIcon size={16} className="text-emerald-500 flex-shrink-0" />
      <h3 className="text-xs sm:text-sm font-bold text-zinc-200 uppercase tracking-wider">{title}</h3>
    </div>
    <div className="overflow-x-auto -mx-4 sm:mx-0">
      <div className="inline-block min-w-full align-middle px-4 sm:px-0">
        <table className="w-full text-xs sm:text-sm text-left text-zinc-400">
        <thead className="text-xs text-zinc-500 uppercase bg-zinc-900 border-b border-zinc-800">
          <tr>
            {headers.map((header, i) => (
                <th key={i} className="px-3 sm:px-4 md:px-6 py-2 sm:py-3 font-medium tracking-wider whitespace-nowrap">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {rows.map((row, i) => (
            <tr key={i} className="bg-zinc-900/20 hover:bg-zinc-800/50 transition-colors">
              {row.map((cell, j) => (
                  <td key={j} className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 whitespace-nowrap ${j === 0 ? 'font-medium text-zinc-200' : ''}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    {note && <div className="p-2 sm:p-3 text-xs text-zinc-500 bg-zinc-900/30 border-t border-zinc-800 italic">{note}</div>}
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
      email: "Nk4286@nyu.edu",
      abstract: "This paper examines whether the post-2022 AI infrastructure expansion represents genuine demand or a reflexive, vendor-financed cycle. Using financial data from Oracle, Microsoft, Amazon, Alphabet, and Nvidia, we document three interlinked dynamics: 1. A sharp rise in capital intensity (CapEx/OCF ratios above 1.0 for Oracle and rising steadily for Microsoft), 2. Exploding backlogs and Remaining Performance Obligations (RPO), largely long-dated and unmonetized, and 3. Heavy reliance on vendor financing and abundant credit markets that enable this expansion. We argue that the resulting feedback loop belief → financing → backlog → valuation → further financing, resembles the self-reinforcing mechanisms of the dot-com capex bubble, but with modern features such as AI-specific vendor financing and balance-sheet recycling of free cash flow by chipmakers like Nvidia. We contrast these dynamics with the 2008 financial crisis, noting that today's vulnerabilities stem not from household leverage but from corporate over-investment and deferred cash realization. Finally, we discuss early signs of sentiment cooling illustrated by the tech rally's recent loss of momentum and assess potential soft- and hard-landing paths for the AI sector."
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
    title: "3. The Reflexive Loop in AI Infrastructure",
    type: "text",
    content: `The current artificial intelligence infrastructure boom exhibits a pattern of feedback between belief, financing, and capacity creation. This feedback mechanism can be described as a reflexive loop, in which expectations of growth influence real economic behavior that then reinforces those same expectations.

    **3.1. Mechanics of Reflexivity in Technology Markets**
    In reflexive systems, perceptions and fundamentals are interdependent. When investors and corporate leaders believe that artificial intelligence will transform the economy, this belief motivates both financing activity and capacity expansion. The increase in capital expenditure validates the narrative of growth by showing tangible progress in data centers, semiconductor capacity, and research infrastructure. As a result, valuations and credit availability rise, creating additional incentives to invest further. The process forms a closed loop in which belief drives action, and action reinforces belief.

    **3.2. Vendor Financing and Demand Amplification**
    A defining feature of the current cycle is the role of vendor financing. Semiconductor and hardware suppliers, such as Nvidia, and hyperscale cloud providers, such as Oracle, have extended favorable credit or long-term supply contracts to customers that may not yet have sufficient revenue to justify these purchases. These arrangements allow infrastructure projects to continue even when near-term cash flows are insufficient, effectively pulling future demand into the present.

    Vendor financing alters the normal demand signal in the market. Instead of end users driving purchasing decisions based on immediate needs, suppliers help create the demand themselves through financial leverage or flexible payment structures. This creates an upward bias in reported demand metrics such as booked revenue, backlog, or remaining performance obligations.

    **3.3. Backlogs, Accounting Recognition, and Apparent Growth**
    Many large cloud providers report growing backlogs as a sign of strong demand. However, under accounting standards, these backlogs often include multi-year contracts that may not translate into cash receipts for several years. For example, Oracle's $455 billion in total RPO includes agreements, such as its $300 billion deal with OpenAI, that will not begin contributing materially until 2027. While these figures raise investor confidence, they also delay the conversion of expected value into realized cash.

    The reflexivity lies in how these accounting numbers influence market psychology. Large backlogs justify continued expansion and higher valuations, while the expansion itself sustains the belief that demand is strong. The loop can persist as long as capital markets remain willing to finance it.

    **3.4. Financial Conditions as an Enabler**
    The low-interest-rate environment that persisted through 2023 and early 2024 encouraged corporations to borrow heavily for infrastructure buildouts. Debt markets, led by institutional investors seeking yield, absorbed large bond and note issuances from major technology firms. As a result, companies could maintain high levels of capital expenditure even when their operating cash flow did not keep pace.

    The interaction between cheap financing and reflexive optimism created a form of structural leverage across the technology supply chain.

    **3.5. The Vendor Financing Network**
    The reflexive loop in the artificial intelligence economy can be observed most clearly through the financing and contractual relationships among a small cluster of dominant firms. Bloomberg's network mapping (2025) shows how Nvidia, Oracle, OpenAI, Microsoft, and AMD are linked through a dense web of investments, service contracts, and reciprocal financing arrangements.

    Nvidia, with a market capitalization exceeding 4.5 trillion dollars, sits at the center of this network. The company has agreed to invest up to 100 billion dollars in OpenAI, while simultaneously supplying OpenAI's partners and vendors with its high-margin GPUs. Oracle, another key node, signed a 300 billion dollar cloud-compute contract with OpenAI that begins in 2027. To fulfill this deal, Oracle must spend tens of billions of dollars on Nvidia hardware, financed partly through new debt issuance.

    AMD's participation deepens the feedback loop further. OpenAI has agreed to deploy six gigawatts of AMD GPUs, and in return, AMD granted OpenAI warrants to purchase up to 160 million AMD shares. This arrangement resembles equity-linked vendor financing, where a supplier provides not only products but also financial incentives that tie the customer's success to its own valuation.

    Nvidia has also taken minority equity positions in multiple smaller AI model developers, including xAI, Figure AI, Mistral, and Nscale. These companies, in turn, become future GPU buyers, creating the appearance of organic demand while Nvidia's balance sheet underwrites their capacity to purchase. In effect, Nvidia converts free cash flow into future booked sales by financing its customers, a process that boosts short-term revenue and sustains its high valuation.

    This web of interdependent transactions generates what can be described as synthetic demand. Each company records growth in backlog or valuation based on contracts financed by another participant in the same ecosystem. The result is a circular flow of capital that expands balance sheets and inflates expectations of future utilization, even though the ultimate end-user consumption remains untested. Such behavior mirrors earlier speculative periods when companies extended credit or equity to customers to create short-term growth signals. The difference today is scale. The sums involved in the artificial intelligence ecosystem, exceeding hundreds of billions of dollars in interlinked commitments, represent one of the largest vendor-financed expansions in modern corporate history.`
  },
  {
    id: "network-viz",
    title: "Figure 1. Interconnected Vendor Financing and Service Relationships Among Major AI Firms (Bloomberg, 2025)",
    type: "custom-viz",
    content: "Network Map of Vendor Financing"
  },
  {
    id: "methodology",
    title: "4. Data and Methodology",
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

    *(a) CapEx/OCF Ratios (2022–2025)*
    Oracle's ratio climbed from 0.47 in 2022 to 1.02 in 2025, indicating that its capital spending surpassed internal cash generation by fiscal 2025. In contrast, Microsoft and Alphabet maintained ratios below 0.5, showing healthier internal financing. Amazon's ratio exceeded 1.3 in 2022 due to aggressive infrastructure expansion, before moderating later. Nvidia's ratios remained below 0.4, reflecting strong profitability and disciplined capital allocation.

    The divergence highlights that Oracle is expanding faster than its cash flow base can sustain, a hallmark of vendor-financed growth.

    *(b) Remaining Performance Obligations (RPO) and Deferred Revenue*
    Oracle reported total RPO of $455 billion, equivalent to 7.9 times its trailing twelve-month revenue. Only 10 percent of this backlog is expected to convert to revenue within twelve months, indicating long-dated contracts such as the $300 billion OpenAI deal that begins in 2027. Microsoft's RPO multiple is 4.9x with 35 percent current, and Google Cloud's is 2.2x with 55 percent current, both signaling stronger near-term realization. Amazon's AWS backlog stands at $195 billion, but disclosure of current portions remains limited.

    These numbers show that Oracle's apparent demand surge is largely back-loaded, with limited short-term cash inflows relative to its commitments.

    *(c) Debt Issuance and Financing Structure (2024–2025)*
    Oracle issued $8 billion in 2024 and $18 billion in 2025, increasing net debt by $9.6 billion at coupon rates between 4.45 and 6.10 percent. This financing supports its data center buildout and pre-funded commitments under future cloud contracts. Alphabet's $7.8 billion issuance in 2025 and Amazon's prior $12.75 billion in 2022 remain moderate, while Microsoft and Nvidia reported no significant new borrowing during this period.

    The difference underscores that Oracle's aggressive leverage is enabling it to fund a backlog-driven expansion, while others rely primarily on retained earnings.`
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
    This study draws on publicly available financial statements, SEC filings, Bloomberg market data, and contemporaneous reporting from The Wall Street Journal covering fiscal years 2022 through 2025. The data set includes major technology and cloud infrastructure vendors, namely Oracle, Microsoft, Amazon, Alphabet, and Nvidia, which together account for the majority of global AI-related capital expenditure and compute supply.

    Several limitations are important to consider when interpreting the results:
    1. Fiscal alignment: Each company follows a distinct fiscal calendar, resulting in minor discrepancies when comparing annual metrics. The analysis uses the most recent trailing twelve-month data to minimize these timing differences.
    2. Derived metrics: Some ratios, such as CapEx-to-Operating Cash Flow, rely on quarterly extrapolations where complete annual data were unavailable. This introduces approximation error, though sensitivity checks show minimal impact on overall patterns.
    3. Vendor financing disclosure: Data regarding Nvidia's minority equity stakes and related-party transactions are limited to publicly reported investments and secondary news confirmations. Internal terms of financing or revenue recognition arrangements are not fully disclosed.
    4. Contractual timing: Remaining Performance Obligations (RPO) measure future contractual commitments but not realized usage. The difference between reported backlog and near-term cash realization may overstate short-term demand visibility.
    5. Sector scope: The analysis focuses on U.S.-listed public companies. It excludes privately held AI startups and non-U.S. data-center operators that also contribute to global AI infrastructure spending.

    These limitations do not materially change the core findings but suggest caution when generalizing results beyond the specific firms and period analyzed. The conclusions apply most directly to the leading U.S. technology vendors driving the current AI infrastructure cycle.`
  },
  {
    id: "results",
    title: "5. Results and Interpretation",
    type: "text",
    content: `**5.1. Diverging Investment Patterns**
    The data presented in Table 1 show that capital expenditure intensity among the largest technology firms has started to diverge. Oracle's CapEx-to-Operating-Cash-Flow ratio exceeded unity by 2025, meaning that the company was spending more on fixed investment than it generated through operations. Microsoft, Google, and Nvidia, on the other hand, maintained ratios well below 0.5. This suggests two distinct groups: those scaling proportionally to cash generation, and those expanding through credit and long-term contracts.

    **5.2. Deferred Demand and Backlog Concentration**
    Table 2 highlights the varying structure of contractual backlogs. Oracle's Remaining-Performance-Obligations multiple of 7.9 times trailing revenue, with only 10 percent expected to convert within twelve months, indicates that most of its booked demand will materialize only after 2027. Microsoft and Google display stronger near-term realization with current portions of 35 percent and 55 percent.

    This disparity shows that a large share of Oracle's apparent demand exists primarily on paper. The three-hundred-billion-dollar OpenAI contract inflates current metrics even though cash receipts are deferred for several years. These long-dated commitments act as a financial amplifier: they maintain the illusion of continuous demand and justify further expansion even before utilization occurs.

    **5.3. Financing the Build-Out**
    Table 3 demonstrates that financing structures mirror the backlog pattern. Oracle issued twenty-six billion dollars of new bonds during 2024 and 2025, increasing net debt by nearly ten billion dollars. Coupon rates between 4.45 and 6.10 percent confirm investment-grade status but also reveal that the company is committing to multi-decade liabilities to sustain construction. Other firms, such as Microsoft and Nvidia, reported little or no new borrowing and instead relied on internally generated cash.

    Taken together, these figures indicate that part of the artificial-intelligence infrastructure expansion is debt-driven. Oracle's negative free-cash-flow gap and rising leverage illustrate a model where future contractual revenues are used as collateral for current borrowing. This pattern resembles earlier vendor-financing cycles, in which suppliers underwrote customer purchases to preserve sales growth.

    **5.4. Vendor-Financed Reflexivity**
    Figure 1 places these quantitative results in a network context. Nvidia's equity positions in OpenAI, xAI, and Figure AI, AMD's warrant arrangement granting OpenAI the right to acquire 160 million shares, and Oracle's enormous receivable from OpenAI together create a circular flow of capital. Each firm records growth from another's financing activity.

    This circulation turns expectation into measurable performance. Nvidia's investments generate new customers, Oracle's contracts expand backlog, and OpenAI's commitments validate demand projections. The loop strengthens belief in perpetual growth, even though the underlying end-user utilization remains untested.

    **5.5. Comparison with Previous Cycles**
    The quantitative evidence parallels aspects of both the late-1990s dot-com expansion and the mid-2000s credit boom. In both cases, expectations of long-term transformation encouraged aggressive capital formation and high valuations before underlying profitability was proven.

    The difference lies in the nature of the assets and the balance-sheet exposure. The dot-com cycle was driven by equity optimism, the 2008 crisis by mortgage leverage, while the current pattern combines elements of both through corporate debt and contractual backlog.

    The immediate risk is not insolvency but an earnings compression if utilization fails to meet projected levels.

    **5.6. Implications**
    Across Tables 1 to 3 and Figure 1, a consistent picture emerges. Capital expenditure has become disconnected from operating cash flow, backlogs are dominated by long-term obligations, and vendor financing has blurred the line between genuine and synthetic demand. These dynamics form a reflexive loop in which reported growth precedes real growth.

    If artificial-intelligence adoption continues to expand rapidly, this loop could unwind gradually through genuine revenue realization, leading to a soft landing. If demand remains below expectations, delayed contracts and leverage could trigger a hard landing marked by valuation corrections, project cancellations, and the write-down of overbuilt data-center capacity.

    The evidence at present suggests that optimism and financing are running ahead of sustainable utilization.`
  },
  {
    id: "case-studies",
    title: "6. Case Studies: Reflexivity in Practice",
    type: "text",
    content: `    **6.1. Oracle and OpenAI: Debt-Funded Deferred Realization**
    The Oracle–OpenAI agreement illustrates how vendor financing transforms expectations into recorded growth. The five-year, three-hundred-billion-dollar contract, scheduled to begin in 2027, accounts for most of Oracle's recent surge in remaining performance obligations, which reached four hundred and fifty-five billion dollars in 2025. Oracle is building the data centers and purchasing the necessary chips from Nvidia and AMD years before OpenAI's payments are due. Its operating cash flow of twenty-one billion dollars is insufficient to finance this construction, which has led the company to issue twenty-six billion dollars in new debt across 2024 and 2025.

    As a result, Oracle's debt-to-equity ratio has risen above four hundred percent, and its capital expenditures now exceed its operating cash inflows. This sequence reverses the traditional business cycle. Instead of customers funding suppliers through revenue, suppliers borrow to meet anticipated customer demand. The backlog inflates Oracle's reported growth, but the underlying cash realization will not occur for several years. If OpenAI's revenues or investor funding weaken, Oracle could face a mismatch between debt obligations and incoming payments.

    **6.2. Nvidia's Ecosystem Investments: Equity-Funded Demand Creation**
    Nvidia represents the supply-side mirror image of Oracle's behavior. The company uses its strong cash generation to invest directly in potential customers, effectively financing its own demand. By 2025, Nvidia had invested more than one hundred billion dollars in fifty-one artificial intelligence startups, including OpenAI, xAI, Figure AI, and Mistral. These firms rely on Nvidia's chips, creating an ecosystem where Nvidia's capital fuels demand for its own products.

    Revenue is recognized when the GPUs are delivered, even though much of the funding originated from Nvidia's own investments. This creates an accounting feedback loop in which cash outflows appear as revenue inflows within the same ecosystem.

    The strategy is reminiscent of vendor-financing behavior seen in the telecommunications sector in the late 1990s, when equipment makers extended credit to network operators to stimulate purchases. Nvidia differs in its profitability and scale, but the underlying reflexivity remains: it turns investment capital into near-term sales and valuation momentum.

    **6.3. AMD and OpenAI: Strategic Dependence through Equity Incentives**
    In 2025, AMD entered a six-gigawatt GPU supply agreement with OpenAI and granted the company warrants to purchase up to one hundred and sixty million AMD shares. The warrant deal functions as a hybrid of equity-linked financing and strategic dependency. AMD secures a major customer and visibility in the AI market, while OpenAI receives favorable supply terms and potential equity upside.

    For AMD, this arrangement acts as a partial vendor-financing mechanism: it provides OpenAI with an implicit subsidy in the form of future share participation rather than direct cash credit. This structure reflects how secondary players, unable to compete directly with Nvidia's balance sheet strength, use creative equity-based incentives to secure demand. It broadens the reflexive loop by introducing new financial channels that bind hardware suppliers and model developers together.

    **6.4. Microsoft and OpenAI: Controlled Exposure and Internal Funding**
    Microsoft provides an important counterpoint to the more aggressive financing behaviors of Oracle, Nvidia, and AMD. As OpenAI's largest strategic backer, Microsoft has invested tens of billions of dollars in equity and infrastructure while maintaining disciplined capital spending relative to operating cash flow. Its CapEx-to-OCF ratio remains below 0.5, and its debt issuance has been minimal during the same period.

    Rather than relying on long-term receivables or external borrowing, Microsoft finances its artificial-intelligence expansion through internally generated cash and balance-sheet strength. This allows it to sustain exposure to the AI boom while preserving liquidity and flexibility. Microsoft's approach demonstrates that participation in the AI build-out does not require over-leverage or speculative accounting. It also highlights how firms with strong operating models can absorb cyclical corrections without balance-sheet strain.

    **6.5. Comparative Insights**
    These four case studies represent different expressions of reflexivity within the artificial-intelligence economy. Oracle's expansion reflects debt-financed anticipation of demand. Nvidia's ecosystem strategy demonstrates self-financed demand creation. AMD's warrant structure illustrates strategic dependency through equity-linked incentives. Microsoft's model shows risk-controlled participation grounded in operational discipline.

    Together, they map the spectrum of financial engineering that underpins the AI infrastructure cycle. Each approach amplifies the appearance of growth in distinct ways, yet all rely on the assumption that end-user adoption will eventually justify the capital already deployed. The next section examines how these mechanisms parallel and differ from earlier speculative cycles, particularly the dot-com expansion and the 2008 credit crisis.`
  },
  {
    id: "market-context",
    title: "7. Market Context: Credit Euphoria and Tech Concentration",
    type: "text",
    content: `    **7.1. Credit expansion and ultra-tight spreads**
    United States corporate bond markets were highly accommodative through 2024 and into 2025. According to SIFMA, total U.S. corporate bond issuance reached about 2.0 trillion dollars in 2024, an increase of 30.6 percent year over year. Long-term fixed income issuance overall rose 26 percent to 10.4 trillion dollars. These data indicate broad credit availability for large issuers. Investment grade spreads remained near cycle tights. ICE BofA option-adjusted spreads for single-A corporates were about 0.64 to 0.66 percent in late October 2025. The broader corporate master OAS was around 0.80 percent in October 2025. These levels suggest investors were pricing low default risk and strong liquidity for high quality borrowers. High yield risk premia also stayed relatively contained. ICE BofA high yield OAS hovered near 300 basis points through 2025, reinforcing the view that financing conditions were easy across ratings cohorts. Convertible financing opened up as well. Issuers placed 119 billion dollars of convertibles in 2024, and by late September 2025 companies had already sold 81.2 billion dollars, the highest year-to-date pace in five years, with portfolio managers noting strong participation by AI-linked issuers.

    Interpretation: Tight spreads and strong primary issuance lower the cost of capital for hyperscalers and suppliers. This environment supports pre-funded data-center build-outs, long-dated cloud contracts, and vendor financing structures, even when near-term operating cash flows lag reported demand. The credit backdrop therefore acts as an enabler of the reflexive loop described earlier.

    **7.2. Tech equity concentration**
    Equity leadership remained narrowly focused. The Magnificent Seven accounted for roughly 34 to 35 percent of S&P 500 market capitalization by August to September 2025, a two-decade high for concentration. The group's dominance amplified index-level sensitivity to developments in the AI supply chain.

    Interpretation: Concentration increases the market impact of any change in beliefs about AI adoption or returns on AI capital expenditure. When few firms carry a large share of total market value, revisions to their earnings outlook, capital intensity, or competitive position can transmit quickly to broader indices.

    **7.3. Early signs of sentiment inflection**
    In late January 2025, the release of an efficient Chinese model, DeepSeek, catalyzed a sharp reassessment of competitive moats and capital spending assumptions. U.S. technology shares sold off, with aggregate losses approaching 1 trillion dollars at the worst point, and Nvidia alone experiencing a record single-day market value decline of about 465 to 593 billion dollars, before a partial rebound the next day. At the same time, product expectations reset. The GPT-5 launch drew visible user backlash for perceived underperformance and routing issues, which contributed to a cooling of the most aggressive AI narratives. Mainstream coverage documented disappointment relative to earlier marketing, along with OpenAI's subsequent adjustments. Flows around the DeepSeek shock were mixed. Retail investors bought the dip aggressively in Nvidia according to Vanda data, while institutional commentary highlighted renewed questions about the durability of AI-driven capital plans.

    Interpretation: These events illustrate how a change in expectations can propagate through a concentrated market. Competitive surprises and product-cycle disappointments can weaken the belief component of the reflexive loop, which in turn can tighten financing conditions for the most levered or backlog-dependent builders.

    **7.4. Synthesis for the AI build-out**
    The combination of record corporate issuance, historically tight credit spreads, and extreme equity concentration is typical of late-cycle optimism. Abundant credit allows vendors to lock in multi-year capacity and to extend financing to customers, while market leadership by a small set of firms amplifies narrative swings. When confidence is high, backlog growth and long-term take-or-pay contracts are interpreted as proof of durable demand. When confidence wavers, those same obligations are reinterpreted as utilization risk and cash-conversion risk, particularly for companies whose capital expenditure exceeds operating cash flow.

    This market context aligns with the findings in Sections 3 to 5. It helps explain how Oracle could fund a multi-year build against future receivables, how Nvidia could recycle free cash flow into customer investments, and how both behaviors could appear sustainable while spreads remain compressed. If credit conditions tighten or if equity investors demand faster cash realization, the reflexive loop may weaken, and capital plans may adjust accordingly.`
  },
  {
    id: "comparison",
    title: "8. Comparison to Previous Cycles",
    type: "text",
    content: `    **8.1. Parallels with the dot com expansion**
    The late 1990s internet buildout provides the closest historical analogue to the present artificial intelligence cycle. In both episodes, firms invested heavily in infrastructure on the basis of rapid adoption assumptions. Backlogs and forward contracts served as proof points for the growth narrative, while equity valuations rewarded scale and leadership more than near term profitability. In each case, capital formation preceded durable monetization. When utilization lagged capacity, capital expenditure slowed sharply and expectations reset. The risk today is similar. If enterprise use cases and consumer willingness to pay do not grow as quickly as anticipated, earnings compression and guidance cuts are likely to follow, particularly among vendors that scaled through external financing.

    **8.2. Parallels with the 2008 credit boom**
    The mid 2000s cycle was driven by leverage and the recycling of credit through structured obligations. Although the assets and sectors differ, the current pattern shares two important features. First, balance sheets are being extended against expectations of future cash flows that have not yet materialized. Second, financial engineering creates circular support for valuations when one firm's contract becomes another firm's collateral or narrative proof point. The present cycle is less about household credit and more about corporate intermediation, but it still depends on continued market access to fund long dated commitments.

    **8.3. Key differences that matter for risk assessment**
    There are also important distinctions. The assets being built today have productive optionality. Data centers and power capacity can be repurposed and chips can be redeployed, which lowers the risk of absolute capital loss compared with vacant housing or abandoned fiber routes. Corporate balance sheets, especially among the largest platforms, are stronger than the average financial intermediary in 2008. Banking system contagion risk is therefore lower. These differences point to valuation and earnings risk rather than a system wide solvency event. The likely transmission channel is a slowdown in capital spending, a reduction in backlog conversion, and a repricing of high multiple equities, rather than a failure of core financial plumbing.

    **8.4. Where similarities and differences intersect**
    The present cycle combines the optimism and timing mismatch of the dot com era with the balance sheet mechanics of the credit boom. Vendor financing and equity linked incentives can turn belief into recorded growth, while tight credit spreads and strong issuance make it inexpensive to support that growth. If the market narrative weakens, the same structures can invert. Backlogs are reinterpreted as utilization risk, and multi year projects face a higher cost of capital. The result is an earnings downshift and a capital expenditure retrenchment, even if demand continues to grow at a slower pace.

    **8.5. Early warning indicators**
    The following indicators map directly to the metrics in Sections 3 through 6 and provide a forward test of whether the cycle is normalizing or rolling over.

    • Backlog realization. Rising deferred revenue and faster conversion of the current portion of remaining performance obligations would support a soft landing. A rising share of non-current RPO and persistent delays would support a hard landing.
    • CapEx to operating cash flow. Ratios drifting toward or below one indicates self-funding and discipline. Ratios that remain above one at firms without surplus cash indicate reliance on external financing and higher sensitivity to spreads.
    • Credit spreads and issuance windows. Stable investment grade and high yield option-adjusted spreads combined with steady primary issuance support buildouts. Widening spreads and failed deals would pressure backlog-funded projects first.
    • Unit pricing and capacity utilization. Stable or improving realized pricing for GPU instances, inference services, and managed models would validate demand. Rapid price discounting or rising idle capacity would indicate overbuild.
    • Equity concentration and breadth. Narrow leadership dominated by a few names increases macro sensitivity to individual guidance. Improving breadth lowers the probability that a single disappointment cascades across the complex.

    **8.6. Scenario alignment**
    • Soft landing. Backlog converts, pricing remains stable, and credit conditions stay open. CapEx slows to a sustainable share of operating cash flow, and high multiple leaders transition from narrative growth to cash generating growth.
    • Hard landing. Conversion disappoints, pricing weakens, and spreads widen. Vendors with CapEx above operating cash flow reduce projects, renegotiate commitments, and guide down. Equities re-rate lower, and the capital cycle resets.`
  },
  {
    id: "policy",
    title: "9. Policy and Managerial Implications",
    type: "text",
    content: `    The findings of this study carry several implications for corporate decision-makers, investors, and regulators observing the ongoing expansion of AI infrastructure.

    **For corporate managers:**
    Firms should exercise caution when expanding capital expenditures primarily on the basis of pre-booked or vendor-financed backlogs. While large Remaining Performance Obligations (RPO) create an appearance of stable future demand, these commitments may not translate into immediate revenue or cash inflows. Managers are encouraged to align investment pace with realized utilization rates rather than forward-booked capacity.

    **For investors:**
    CapEx-to-Operating Cash Flow (OCF) ratios and the share of current RPO portions can serve as early indicators of potential overextension. Sustained CapEx levels exceeding internal cash generation, coupled with backlogs that are largely long-dated, suggest rising dependency on external financing and greater cyclical vulnerability. Investors should evaluate whether growth in vendor or customer financing aligns with genuine end-user adoption.

    **For regulators and policymakers:**
    The concentration of financing and capacity commitments within a few dominant vendors introduces systemic exposure similar to previous episodes of sectoral overinvestment. Monitoring credit issuance tied to AI data-center expansion and vendor-related equity financing can help identify buildup of sectoral leverage. Enhanced disclosure of vendor-financed transactions and related-party commitments would improve transparency for both investors and regulators.`
  },
  {
    id: "conclusion",
    title: "10. Conclusion",
    type: "text",
    content: `    Evidence across firm-level metrics and macro conditions supports the view that the AI infrastructure boom reflects reflexive, vendor-financed dynamics rather than purely demand-driven expansion. Oracle's CapEx–OCF imbalance and unprecedented RPO leverage exemplify the mechanism, while Nvidia's cash surplus represents the counterparty outcome.

    The analysis suggests that the apparent demand driving AI infrastructure spending may be amplified by financial structures and contractual pre-commitments that mask the underlying utilization rate. These patterns resemble earlier cycles where belief-driven financing created temporary growth before economic realization caught up, such as the dot-com and post-2008 credit expansions.

    A soft landing scenario would require actual enterprise adoption to close the utilization gap before debt servicing costs rise or credit spreads widen. Conversely, if financing conditions tighten while backlogs remain unrealized, the sector may face a correction as capital discipline reasserts itself.

    Whether this cycle matures into a productive AI infrastructure phase or collapses under its own financial reflexivity will depend not only on technological progress but also on the discipline of capital allocation. Monitoring vendor-financed growth through transparent cash metrics is therefore essential.`
  },
  {
    id: "references",
    title: "11. References",
    type: "text",
    content: `**Academic Literature**

    • Soros, G. (1987). *The Alchemy of Finance: Reading the Mind of the Market*. John Wiley & Sons.

    • Lamont, O. (1997). Cash Flow and Investment: Evidence from Internal Capital Markets. *Journal of Finance*, 52(1), 83-109.

    • Stein, J. C. (2003). Agency, Information and Corporate Investment. In G. M. Constantinides, M. Harris, & R. M. Stulz (Eds.), *Handbook of the Economics of Finance* (Vol. 1, pp. 111-165). Elsevier.

    • Bertrand, M., & Mullainathan, S. (2001). Are CEOs Rewarded for Luck? The Ones Without Principals Are. *Quarterly Journal of Economics*, 116(3), 901-932.

    • Froot, K. A., & Stein, J. C. (1998). Risk Management, Capital Budgeting, and Capital Structure Policy for Financial Institutions: An Integrated Approach. *Journal of Financial Economics*, 47(1), 55-82.

    **Financial Data Sources**

    • Oracle Corporation (ORCL), SEC 10-K and 10-Q filings, Annual Reports, Bond Offering Prospectuses, and Investor Relations Press Releases (2022–2025)

    • Microsoft Corporation (MSFT), SEC 10-K and 10-Q filings, Annual Reports, and Investor Relations Materials (2022–2025)

    • Alphabet Inc. (GOOG), SEC 10-K and 10-Q filings, Annual Reports, and Investor Communications (2022–2025)

    • Amazon.com, Inc. (AMZN), SEC 10-K and 10-Q filings, AWS Segment Disclosures, Annual Reports (2022–2025)

    • Nvidia Corporation (NVDA), SEC 10-K and 10-Q filings, Annual Reports, and Investor Presentations (2022–2025)

    • AMD (Advanced Micro Devices), SEC 10-K filings and shareholder presentations (where referenced)

    **News Articles & Market Reports**

    • Oracle, OpenAI Sign $300 Billion Cloud Deal - WSJ

    • Tech Rally Shows Signs of Losing Steam - WSJ

    • Goldman Sachs Plans Layoffs Despite Surging Profits

    • 'Theory Of Reflexivity' And Does It Matter? | Seeking Alpha

    • Microsoft Accelerates AI Investment to Fend Off Stiff AI Competition - September 30, 2025 - Zacks.com

    • Nvidia's AI chip demand still booming but slowing sales growth worries investors | Reuters

    • Nvidia's results spark nearly $300 billion rally in AI stocks | Reuters

    • Microsoft and OpenAI extend partnership - The Official Microsoft Blog

    • https://finimize.com/content/tech-and-ai-firms-flood-the-market-with-convertible-bonds

    • The $4 Trillion Moment: How Microsoft's AI Bet Paid Off Big Time - Research and Ranking

    • Shares close mixed, Nvidia's 3% rise offsets debt ceiling jitters | Reuters

    • Microsoft bonds are seen as safer than Treasury bills due this summer as the default X-date nears

    • AI investment boom hits the bond market | Vontobel Asset Management

    • Big Tech's Costly AI Race Is Fueling Hundreds of Billions of Dollars in Debt Deals

    • Alphabet Inc. (GOOG) Cash Flow - Yahoo Finance

    • Amazon.com Announces Fourth Quarter Results

    • Amazon: Record Backlog And Abundance Of Use Cases (Rating Upgrade) (NASDAQ:AMZN) | Seeking Alpha

    • An AWS Backlog and Strong Retail Business Signal an Amazon Stock Rebound Is Coming

    • Microsoft Q4: The Greatest of All Time!! - Cloud Wars

    • https://www.microsoft.com/en-us/investor/earnings/fy-2023-q2/metrics#:~:text=%24155

    • https://finance.yahoo.com/quote/NVDA/cash-flow/

    • NVIDIA (NVDA) Cash Flow Statement

    • Amazon has a massive backlog for its cloud services

    • Amazon (AMZN) Cash Flow Statement

    • Alphabet (GOOG) Cash Flow Statement

    • Microsoft Fiscal Year 2023 Fourth Quarter Earnings Conference Call

    • Microsoft (MSFT) Cash Flow Statement

    • Oracle Announces Fiscal 2025 Fourth Quarter and Fiscal Full Year Financial Results

    • Oracle Announces Fiscal 2024 Fourth Quarter and Fiscal Full Year Financial Results

    • Oracle Announces Fiscal 2023 Fourth Quarter and Fiscal Full Year Financial Results`
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
  { name: 'Google', multiple: 2.2, currentPortion: 55, revenue: 50.0, backlog: 108.2 },
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
const table3Headers = ["Company", "2024 Issuance ($B)", "2025 Issuance ($B)", "Net Debt Change", "Coupon Range", "Maturity Ladder", "Key Detail"];
const table3Rows = [
  ["Oracle", "8.0", "18.0", "+ $9.6 B", "4.45-6.10%", "5 - 40 yr, 7 tranches", "$18 B Sept 2025 40 yr @ 137 bps / Tsy"],
  ["Microsoft", "0", "0", "N/A", "2.70-4.50%", "5 - 40 yr multi-part", "Minimal new issuance"],
  ["Amazon", "12.75", "0", "N/A", "1.20-1.50%", "10 - 40 yr 7-8 parts", "$12.75 B Apr 2022 40 yr @ 130 bps"],
  ["Alphabet", "0", "7.8", "N/A", "4.00-5.30%", "5 - 40 yr 4 tranches", "$7.8 B Apr 2025 USD + EUR"],
  ["Nvidia", "0", "0", "0", "2.92% avg", "2026 - 2060", "Minimal debt reliance ($8.5 B total)"],
];

// --- Components ---

const Navigation = ({ activeSection, scrollToSection, isOpen, setIsOpen }) => {
  const isSubItem = (title) => {
    return title.includes('Figure') || title.includes('Table') || title.includes('4.4') || title.includes('Interpretation');
  };

  const isMainSection = (title) => {
    return /^\d+\./.test(title.trim()) && !isSubItem(title);
  };

  return (
    <div 
      data-nav
      className={`fixed top-0 right-0 h-full z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} w-72 border-l border-zinc-800 bg-zinc-950/98 backdrop-blur-md`}
    >
      <div className="p-5 flex flex-col h-full">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-zinc-800">
          <span className="text-emerald-500 uppercase tracking-widest text-xs font-bold">Contents</span>
          <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors" aria-label="Close navigation">
            <X size={20} />
        </button>
      </div>
        
        <nav className="flex-1 overflow-y-auto pr-1 space-y-0.5 scrollbar-hide">
          {sections.map((section, index) => {
            const isSub = isSubItem(section.title);
            const isMain = isMainSection(section.title);
            const isActive = activeSection === section.id;
            
            return (
          <button
            key={section.id}
            onClick={() => {
              scrollToSection(section.id);
              setIsOpen(false);
            }}
                className={`w-full text-left py-2 px-3 rounded transition-all duration-200 ${
                  isSub 
                    ? `ml-5 pl-3 border-l border-zinc-800 text-xs leading-relaxed ${isActive ? 'text-emerald-300 bg-emerald-900/15 border-l-emerald-500' : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/50'}`
                    : isMain
                    ? `font-medium text-sm leading-relaxed ${isActive ? 'text-emerald-400 bg-emerald-900/20 border-l-2 border-emerald-500 pl-2.5' : 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-900/50'}`
                    : `text-sm leading-relaxed ${isActive ? 'text-emerald-400 bg-emerald-900/20 border-l-2 border-emerald-500 pl-2.5' : 'text-zinc-400 hover:text-zinc-300 hover:bg-zinc-900/50'}`
            }`}
          >
            {section.title}
          </button>
            );
          })}
      </nav>
    </div>
  </div>
);
};

const Hero = ({ content }) => (
  <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 max-w-5xl relative mx-auto py-12 md:py-16">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-zinc-100 mb-4 sm:mb-6 leading-tight text-center w-full">
      {content.title}
    </h1>
    <h2 className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light mb-6 sm:mb-8 leading-relaxed text-center w-full px-2">
      {content.subtitle}
    </h2>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 w-full justify-center items-center">
      <div className="text-center sm:text-left">
        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Author</p>
        <p className="text-sm sm:text-base text-zinc-200 font-medium">{content.author}</p>
      </div>
      <div className="text-center sm:text-left">
        <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Affiliation</p>
        <p className="text-sm sm:text-base text-zinc-400">{content.affiliation}</p>
      </div>
      {content.email && (
        <div className="text-center sm:text-left">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-1">Email</p>
          <p className="text-sm sm:text-base text-zinc-400 break-all">{content.email}</p>
      </div>
      )}
    </div>
    <div className="bg-zinc-900/50 p-4 sm:p-6 rounded-lg border border-zinc-800 backdrop-blur-sm w-full">
      <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-serif italic text-justify">
        {content.abstract}
      </p>
    </div>
    <div className="animate-bounce absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2">
      <ChevronDown className="text-zinc-600" size={24} />
    </div>
  </div>
);

const TextSection = ({ title, content }) => {
  const formatContent = (text) => {
    const lines = text.split('\n').filter(line => line.trim());
    const elements = [];
    
    lines.forEach((line, idx) => {
      const trimmed = line.trim();
      
      // Handle subsection headers (e.g., **3.1. Title**)
      if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        const headerText = trimmed.slice(2, -2);
        elements.push(
          <h3 key={idx} className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-4 sm:mt-6 mb-3 pt-4 border-t border-zinc-800 first:border-t-0 first:pt-0">
            {headerText}
          </h3>
        );
        return;
      }
      
      // Handle bullet points
      if (trimmed.startsWith('* ') || trimmed.startsWith('• ')) {
        const bulletText = trimmed.substring(2).trim();
        // Check if it's a bold bullet
        if (bulletText.startsWith('**') && bulletText.includes(':**')) {
          const parts = bulletText.split(':**');
          const label = parts[0].slice(2);
          const value = parts.slice(1).join(':**');
          elements.push(
            <li key={idx} className="mb-2 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <span className="font-semibold text-zinc-200">{label}:</span> {value}
            </li>
          );
        } else {
          elements.push(
            <li key={idx} className="mb-2 text-sm sm:text-base text-zinc-300 leading-relaxed ml-4 list-disc">
              {bulletText}
            </li>
          );
        }
        return;
      }
      
      // Handle numbered lists
      if (/^\d+\./.test(trimmed)) {
        const listText = trimmed.replace(/^\d+\.\s*/, '');
        elements.push(
            <li key={idx} className="mb-2 text-sm sm:text-base text-zinc-300 leading-relaxed ml-4 list-decimal">
              {listText}
            </li>
        );
        return;
      }
      
      // Handle italic text (e.g., *Stage 1:*)
      if (trimmed.startsWith('*') && trimmed.includes('*') && trimmed.indexOf('*') !== trimmed.lastIndexOf('*')) {
        const parts = trimmed.split('*');
          elements.push(
            <p key={idx} className="mb-4 text-zinc-300 leading-relaxed font-serif text-base sm:text-lg md:text-xl text-justify">
        {parts.map((part, i) => {
                if (i % 2 === 1) {
                  return <em key={i} className="text-zinc-200 font-semibold not-italic">{part}</em>;
          }
          return part;
        })}
            </p>
          );
        return;
      }
      
      // Handle references (bullet points with •)
      if (trimmed.startsWith('•')) {
        const refText = trimmed.substring(1).trim();
        elements.push(
          <p key={idx} className="mb-2 text-zinc-400 leading-relaxed font-serif text-sm sm:text-base md:text-lg ml-2 sm:ml-4">
            • {refText}
          </p>
        );
        return;
      }
      
      // Regular paragraph
      elements.push(
        <p key={idx} className="mb-4 text-zinc-300 leading-relaxed font-serif text-base sm:text-lg md:text-xl text-justify">
          {trimmed}
      </p>
    );
  });
    
    return elements;
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4 w-full">
        <span className="w-8 sm:w-12 h-1 bg-emerald-500 block"></span>
        <span className="break-words">{title}</span>
      </h2>
      <div className="prose prose-invert max-w-none w-full text-justify">
        {formatContent(content)}
      </div>
    </div>
  );
};

const SectionWrapper = ({ children, title, description }) => (
  <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 w-full">
      <span className="w-8 sm:w-12 h-1 bg-emerald-500 block flex-shrink-0"></span>
      <span className="break-words">{title}</span>
    </h2>
    {description && (
      <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed text-center px-2">
        {description}
      </p>
    )}
    <div className="w-full overflow-x-auto">
      {children}
    </div>
  </div>
);

const CapexChart = () => (
  <SectionWrapper 
    title="Table 1: Capital Intensity Divergence"
    description="Oracle's CapEx/OCF ratio breaks 1.0 in 2025, signaling reliance on external financing. In contrast, Nvidia and Microsoft maintain healthy internal funding ratios."
  >
    <FinancialTable 
      title="CapEx / Operating Cash Flow Ratios"
      headers={table1Headers}
      rows={table1Rows}
      note="Source: Company Filings. Ratio > 1.0 indicates CapEx exceeds Operating Cash Flow."
    />

    <div className="h-[300px] sm:h-[400px] md:h-[450px] w-full bg-zinc-900/50 p-3 sm:p-4 md:p-6 rounded-xl border border-zinc-800 mt-6 sm:mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={capexData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
          <XAxis dataKey="year" stroke="#71717a" tick={{ fill: '#71717a', fontSize: 12 }} />
          <YAxis stroke="#71717a" tick={{ fill: '#71717a', fontSize: 12 }} label={{ value: 'CapEx / OCF Ratio', angle: -90, position: 'insideLeft', fill: '#71717a', style: { fontSize: '12px' } }} />
          <RechartsTooltip 
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
            itemStyle={{ color: '#fff', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ paddingTop: '10px', color: '#a1a1aa', fontSize: '12px' }} />
          <Line type="monotone" dataKey="Oracle" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="Microsoft" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Google" stroke="#ef4444" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Amazon" stroke="#f59e0b" strokeWidth={2} strokeDasharray="5 5" dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Nvidia" stroke="#a855f7" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </SectionWrapper>
);

const RpoChart = () => (
  <SectionWrapper 
    title="Table 2: The Backlog Illusion"
    description="Oracle's RPO (Remaining Performance Obligations) is 7.9x its annual revenue, but only 10% is current. This indicates 'demand' is locked in long-term, unmonetized contracts."
  >
    <FinancialTable 
      title="RPO, Revenue & Cash-Flow Comparison"
      headers={table2Headers}
      rows={table2Rows}
      note="Source: Company Filings. RPO/Rev Multiple indicates years of backlog relative to current revenue."
    />

    <div className="h-[300px] sm:h-[400px] md:h-[450px] w-full bg-zinc-900/50 p-3 sm:p-4 md:p-6 rounded-xl border border-zinc-800 mt-6 sm:mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={rpoData} layout="vertical" margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" horizontal={false} />
          <XAxis type="number" stroke="#71717a" domain={[0, 9]} tick={{ fill: '#71717a', fontSize: 12 }} />
          <YAxis dataKey="name" type="category" stroke="#e4e4e7" width={80} tick={{ fill: '#e4e4e7', fontSize: 12 }} />
          <RechartsTooltip 
            cursor={{fill: 'rgba(255, 255, 255, 0.05)'}}
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ paddingTop: '10px', color: '#a1a1aa', fontSize: '12px' }} />
          <Bar dataKey="multiple" name="Backlog Multiple (RPO/Rev)" fill="#3f3f46" radius={[0, 4, 4, 0]}>
            {rpoData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Oracle' ? '#10b981' : '#3f3f46'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </SectionWrapper>
);

const DebtChart = () => (
  <SectionWrapper 
    title="Table 3: Debt Issuance (2024-2025)"
    description="Oracle has significantly outpaced peers in new debt issuance to fund its expansion, adding $26B in two years."
  >
    <FinancialTable 
      title="Cloud Vendor Debt Issuance"
      headers={table3Headers}
      rows={table3Rows}
      note="Source: Bloomberg Bond Issuance Data. Net Debt Change reflects new issuance less repayments."
    />

    <div className="h-[300px] sm:h-[400px] md:h-[450px] w-full bg-zinc-900/50 p-3 sm:p-4 md:p-6 rounded-xl border border-zinc-800 mt-6 sm:mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={debtData} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3f3f46" vertical={false} />
          <XAxis dataKey="name" stroke="#71717a" tick={{ fill: '#71717a', fontSize: 12 }} />
          <YAxis stroke="#71717a" tick={{ fill: '#71717a', fontSize: 12 }} label={{ value: 'Billions ($)', angle: -90, position: 'insideLeft', fill: '#71717a', style: { fontSize: '12px' } }} />
          <RechartsTooltip 
            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', color: '#fff', borderRadius: '8px', fontSize: '12px' }}
          />
          <Legend wrapperStyle={{ paddingTop: '10px', color: '#a1a1aa', fontSize: '12px' }} />
          <Bar dataKey="total" name="Total Issuance ($B)" fill="#ef4444" radius={[4, 4, 0, 0]}>
            {debtData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.name === 'Oracle' ? '#ef4444' : '#3f3f46'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </SectionWrapper>
);

const ReflexiveNetwork = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-12 md:py-16 max-w-5xl mx-auto">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-100 mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4 w-full">
        <span className="w-8 sm:w-12 h-1 bg-emerald-500 block flex-shrink-0"></span>
        <span className="break-words">Figure 1. Interconnected Vendor Financing and Service Relationships Among Major AI Firms (Bloomberg, 2025)</span>
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-zinc-400 mb-6 sm:mb-8 max-w-3xl leading-relaxed text-center px-2">
        Network mapping of interconnected vendor financing and service relationships among major AI firms. This visualization illustrates how Nvidia, Oracle, OpenAI, Microsoft, and AMD are linked through investments, hardware/software agreements, services, and venture capital arrangements (Source: Bloomberg, 2025).
      </p>

      <div className="relative w-full min-h-[300px] sm:min-h-[400px] md:min-h-[500px] bg-zinc-900/50 rounded-xl border-2 border-zinc-800 overflow-hidden flex items-center justify-center p-4 sm:p-6 md:p-8 group hover:border-emerald-500/50 transition-colors duration-300">
        <img 
          src="/network-diagram.webp" 
          alt="Bloomberg Network Map of Vendor Financing - Network diagram showing relationships between OpenAI, Nvidia, Microsoft, Oracle, AMD, and other AI companies through investments, hardware/software, services, and venture capital" 
          className="w-full h-auto object-contain rounded-lg shadow-2xl max-h-[60vh] sm:max-h-[70vh] md:max-h-[75vh] transition-transform duration-300 group-hover:scale-[1.02]"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://placehold.co/1200x800/18181b/52525b?text=Network+Diagram+Image+Placeholder";
          }}
        />
        
        <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-zinc-900/90 backdrop-blur-sm px-2 sm:px-4 py-1 sm:py-2 rounded-lg border border-zinc-800">
          <p className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider font-semibold">
            Source: Bloomberg News (2025)
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

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && window.innerWidth < 768) {
        const nav = document.querySelector('[data-nav]');
        const button = document.querySelector('[data-menu-button]');
        if (nav && !nav.contains(event.target) && !button?.contains(event.target)) {
          setIsMenuOpen(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div className="bg-zinc-950 min-h-screen text-zinc-200 font-sans selection:bg-emerald-500/30 selection:text-emerald-200 overflow-x-hidden">
      
      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        data-menu-button
        className={`fixed top-4 z-50 p-2 bg-zinc-900 rounded-full border border-zinc-800 text-zinc-400 hover:text-white transition-all duration-300 ${isMenuOpen ? 'right-[19rem]' : 'right-4'}`}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex">
        <main className={`flex-1 w-full transition-all duration-300 ${isMenuOpen ? 'md:mr-72' : ''}`}>
          {sections.map((section) => (
            <div key={section.id} id={section.id} className="border-b border-zinc-900/50 last:border-0 min-h-0">
              {section.type === 'cover' && <Hero content={section.content} />}
              {section.type === 'text' && <TextSection title={section.title} content={section.content} />}
              {section.type === 'chart-capex' && <CapexChart />}
              {section.type === 'chart-rpo' && <RpoChart />}
              {section.type === 'chart-debt' && <DebtChart />}
              {section.type === 'custom-viz' && <ReflexiveNetwork />}
            </div>
          ))}
          
          <div className="py-12 md:py-16 px-6 text-center border-t border-zinc-900 text-zinc-600">
            <p className="text-zinc-500">Paper by Nayan Kanaparthi</p>
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
