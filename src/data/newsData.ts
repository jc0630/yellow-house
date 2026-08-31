export interface NewsArticle {
  id: string;
  slug: string;
  categoryZh: string;
  categoryEn: string;
  titleZh: string;
  titleEn: string;
  excerptZh: string;
  excerptEn: string;
  date: string;
  image: string;
  readTimeZh: string;
  readTimeEn: string;
  contentZh: {
    lead: string;
    sections: {
      heading: string;
      body: string;
    }[];
    summary: string;
  };
  contentEn: {
    lead: string;
    sections: {
      heading: string;
      body: string;
    }[];
    summary: string;
  };
}

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "news-1",
    slug: "japan-real-estate-market-outlook-2025",
    categoryZh: "市場動態",
    categoryEn: "Market Insights",
    titleZh: "2025年日本不動產市場展望：利率政策變動下的高端住宅與收益物業策略",
    titleEn: "2025 Japan Real Estate Outlook: Strategies for Prime Residences and Commercial Assets",
    excerptZh: "深入剖析日本央行貨幣政策正常化對東京都心高級住宅、收益型商用不動產之實質影響，以及海外高資產投資人的應對佈局。",
    excerptEn: "An in-depth analysis of the Bank of Japan's monetary policy shifts on prime Tokyo residences and commercial assets, and strategic actions for overseas investors.",
    date: "2025.01.15",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=85",
    readTimeZh: "5 分鐘閱讀",
    readTimeEn: "5 min read",
    contentZh: {
      lead: "隨著日本央行逐步調整貨幣寬鬆政策，市場對利率上升對不動產價格的影響高度關注。然而從實際供需與資金流向來看，東京都心核心資產展現了極強的抗震力與結構性優勢。",
      sections: [
        {
          heading: "一、都心高端住宅：供需失衡下的價格支撐",
          body: "東京都港區、澀谷區、千代田區等核心地段的高級住宅，由於可開發素地極端稀少，加上營建成本持續居高不下，新推案數量有限。來自全球高資產家族的資產避險配置需求依然強勁，使得優質住宅價格具備堅實底氣。"
        },
        {
          heading: "二、收益型不動產：從『表面利潤』轉向『實質租金調升能力』",
          body: "在利率溫和上升的環境下，投資人不能再僅看帳面毛投報率。具備良好地段、優質租戶組合及租金定期調漲機制的商業物業與整棟公寓，才能有效抵禦融資成本變動並持續維持正向現金流。"
        },
        {
          heading: "三、日圓匯率與海外投資人的長期窗口",
          body: "儘管日圓匯率出現震盪修復，相較於歷史平均水準仍具備顯著的相對估值吸引力。對於以長期持有、世代傳承或跨國分散風險為目標的海外買家而言，精選核心資產依然是極具戰略價值的佈局。"
        }
      ],
      summary: "面對市場新週期，唯有站在實際持有與運營管理的深層視角，精算各項稅賦、修繕與營運成本，方能建立穩健且具持續增值潛力的日本不動產組合。"
    },
    contentEn: {
      lead: "As the Bank of Japan normalizes its monetary policy framework, investors are closely examining the implications of interest rate adjustments. However, structural demand and capital flows continue to reinforce prime Tokyo assets.",
      sections: [
        {
          heading: "1. Prime Tokyo Residences: Unyielding Supply Constraints",
          body: "Core neighborhoods including Minato, Shibuya, and Chiyoda face severe land scarcity alongside elevated construction costs. Global family offices continue to view prime Japanese residential properties as premier safe-haven assets."
        },
        {
          heading: "2. Income Properties: Focusing on Organic Rent Growth",
          body: "In a moderate interest rate environment, gross yield metrics alone are insufficient. Investors must prioritize properties with prime locations, blue-chip tenant rosters, and contractual rent-escalation mechanisms."
        },
        {
          heading: "3. JPY Valuation and Long-Term Strategic Windows",
          body: "Despite currency fluctuations, the Japanese Yen retains substantial purchasing power parity appeal, offering international investors an attractive window for defensive cross-border diversification."
        }
      ],
      summary: "Navigating the new cycle requires an owner's discipline—thoroughly calculating maintenance reserves, operational risks, and taxes to build a resilient, appreciating asset base."
    }
  },
  {
    id: "news-2",
    slug: "japan-real-estate-taxation-guide-cross-border",
    categoryZh: "實務指南",
    categoryEn: "Practical Guide",
    titleZh: "海外投資者必讀：日本不動產取得、持有與處分之稅務全解析",
    titleEn: "Essential Tax Guide for Overseas Investors: Acquisition, Holding & Exit in Japan",
    excerptZh: "全面整理外國個人與法人購置日本不動產時涉及的不動產取得稅、固定資產稅、源泉徵收與讓渡所得稅實務細節。",
    excerptEn: "A comprehensive breakdown of Acquisition Tax, Fixed Asset Tax, Withholding requirements, and Capital Gains Tax for foreign individuals and corporations.",
    date: "2024.12.08",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=85",
    readTimeZh: "6 分鐘閱讀",
    readTimeEn: "6 min read",
    contentZh: {
      lead: "投資日本不動產除了評估物業本身價值，理解全生命週期的稅務架構是確保實質投資回報率的關鍵環節。本指南系統化解析各階段核心稅賦與合規要點。",
      sections: [
        {
          heading: "一、購置階段（Acquisition）",
          body: "主要包含不動產取得稅（通常於交屋後數月開徵）、登錄免許稅（產權登記規費）、印花稅以及仲介手續費之消費稅。精確編列取得初期約佔總價 6%～8% 之各項規費預算至關重要。"
        },
        {
          heading: "二、持有階段（Holding）",
          body: "每年需繳納固定資產稅及都市計畫稅（依課稅標準額計算）。若物業出租產生租金收入，非居住者需申報日本所得稅；透過設置日本納稅管理人可確保申報流程合規且無縫運作。"
        },
        {
          heading: "三、出售處分階段（Exit）",
          body: "讓渡所得稅依持有年限區分為短期讓渡（持有未滿 5 年）與長期讓渡（持有超過 5 年）。外國非居住者出售時，買方可能依法需預先扣繳 10.21% 之源泉所得稅，後續可透過隔年確定申報進行多退少補。"
        }
      ],
      summary: "合規透明的稅務規劃是跨國資產管理的基石。我們攜手日本頂尖稅理士法人，為客戶提供事前評估與專案稅務對策支援。"
    },
    contentEn: {
      lead: "Beyond property valuation, understanding the full tax lifecycle is crucial to safeguarding your true Net Operating Income when acquiring Japanese real estate.",
      sections: [
        {
          heading: "1. Acquisition Phase",
          body: "Key expenses include Real Estate Acquisition Tax, Registration and License Tax, Stamp Duties, and Brokerage Fees plus Consumption Tax, typically totaling 6% to 8% of purchase value."
        },
        {
          heading: "2. Holding Phase",
          body: "Annual Fixed Asset and City Planning Taxes apply based on assessed standard valuations. Rental income requires filing Japanese income tax through an appointed local Tax Administrator (Nozei Kanrinin)."
        },
        {
          heading: "3. Disposition & Exit Phase",
          body: "Capital gains tax rates differ between short-term (held under 5 years) and long-term (held over 5 years). Non-resident sales may also require 10.21% statutory withholding at closing, reconcilable in annual tax filing."
        }
      ],
      summary: "Transparent fiscal structuring protects capital integrity. We coordinate with accredited Japanese licensed tax accountants to optimize client tax posture."
    }
  },
  {
    id: "news-3",
    slug: "sustainable-property-management-tokyo",
    categoryZh: "管理實務",
    categoryEn: "Asset Management",
    titleZh: "日本出租公寓管理心法：如何將空室率降至 2% 以下並預防修繕風險",
    titleEn: "Disciplined Property Management: Keeping Vacancy Under 2% & Mitigating Structural Risk",
    excerptZh: "分享第一線 15 年房東實戰經驗，揭密租戶審查標準、定期修繕計畫制定，以及海外房東遠端管理的關鍵機制。",
    excerptEn: "Insights from 15 years on the frontlines of Japanese landlord operations: tenant screening, 10-year repair reserves, and seamless remote management.",
    date: "2024.10.20",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1600&q=85",
    readTimeZh: "4 分鐘閱讀",
    readTimeEn: "4 min read",
    contentZh: {
      lead: "許多海外買家在購置日本收益物業後，常因語言隔閡與管理疏漏導致收益率逐步侵蝕。事實上，日本成熟的租賃體系只要運用得當，能帶來極為穩定長遠的現金回報。",
      sections: [
        {
          heading: "一、嚴謹的租客審查與保證公司制度",
          body: "強制要求承租人加入日本合規家賃保證會社，並落實工作任職確認與緊急聯絡人核實。這項機制使業主在遭遇租金拖欠或租客退租糾紛時，能獲得 100% 完整的代償與法律保障。"
        },
        {
          heading: "二、預防性修繕（Preventive Maintenance）與長期修繕計畫",
          body: "不要等到外牆剝落或漏水才進行被動搶修。制定 10 年至 15 年之預防性檢測與防水塗裝規劃，並每個月自租金收益中提撥固定儲備金，方能維持建物在二級市場的頂級資產估值。"
        },
        {
          heading: "三、即時數位化報表與全透明修繕履歷",
          body: "為海外業主建立線上租金流水帳目與修繕工單履歷，所有修繕報價單皆提供明細與現場照片對比，杜絕資訊不對稱與隱形加價。"
        }
      ],
      summary: "以房東同理心守護每一棟物業，是 Yellow House 不可妥協的專業承諾。"
    },
    contentEn: {
      lead: "International investors often worry about remote property management across language barriers. When managed with disciplined local systems, Japanese rental assets provide exceptional cash flow stability.",
      sections: [
        {
          heading: "1. Institutional Tenant Vetting & Rent Guarantees",
          body: "Enforcing mandatory corporate rent-guarantee coverage (Yachin Hosho) and thorough employment verification ensures 100% rent protection and legal compliance under all circumstances."
        },
        {
          heading: "2. 10-Year Preventive Maintenance Plans",
          body: "Proactive exterior waterproofing, MEP inspections, and structured monthly reserve fund allocations prevent costly emergency repairs while maximizing terminal resale value."
        },
        {
          heading: "3. Transparent Digital Reporting & Repair Ledgers",
          body: "We provide overseas owners with itemized digital ledgers, transparent contractor estimates, and before/after photo documentation to eliminate information asymmetry."
        }
      ],
      summary: "Managing properties with the precision of an actual owner is Yellow House's unwavering commitment to client wealth preservation."
    }
  },
  {
    id: "news-4",
    slug: "japan-hospitality-license-inns-hotels-act",
    categoryZh: "法規政策",
    categoryEn: "Regulations",
    titleZh: "日本旅館業法與簡易宿所設立實務：從建築基準法到消防審驗全流程",
    titleEn: "Navigating Japanese Lodging Licenses: From Building Codes to Fire Safety Approvals",
    excerptZh: "剖析將日本住宅或別墅轉型為合法旅宿之法規門檻、用途變更申請要件與多語系遠端營運法規實務。",
    excerptEn: "A complete overview of legal requirements for converting residential properties into licensed lodging under Japan's Hotel and Ryokan Management Act.",
    date: "2024.08.12",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=85",
    readTimeZh: "5 分鐘閱讀",
    readTimeEn: "5 min read",
    contentZh: {
      lead: "日本觀光入境旅遊持續蓬勃，具備合法執照的包棟奢華旅宿與溫泉別墅成為熱門投資選項。然而，合法取得營業許可需要穿越嚴格的建築法規與消防審查。",
      sections: [
        {
          heading: "一、住宅法規與旅館業法之分水嶺",
          body: "民泊新法（住宅宿泊事業法）設有每年 180 天之營運上限；若欲實現 365 天全年無休營運，必須依據『旅館業法』申請簡易宿所或旅館・飯店營業執照。"
        },
        {
          heading: "二、建築基準法與消防設備規格",
          body: "建物樓地板面積、避難走廊寬度、排煙設備、自動火災報警器（特定小規模自火報）以及緊急照明設備均需通過消防署現地審驗合格，方能核發許可。"
        },
        {
          heading: "三、自治體地方條例（上乘條例）之合規調查",
          body: "各地方政府如東京都各區、箱根町或鎌倉市均設有額外的環境與景觀管理規範。前端詳實的法規調查是避免誤踩『幽靈物件』無法取得執照的最重要防線。"
        }
      ],
      summary: "Yellow House 整合一級建築師與行政書士團隊，提供從選點、執照申請到後續營運的一體化解決方案。"
    },
    contentEn: {
      lead: "Japan's booming inbound tourism has elevated licensed luxury villas into highly desirable yield assets. However, full compliance demands rigorous adherence to building and fire safety codes.",
      sections: [
        {
          heading: "1. Minpaku vs. 365-Day Hotel Business License",
          body: "While the Minpaku Act restricts operations to 180 days per year, obtaining a license under the Hotel & Ryokan Management Act unlocks unrestricted 365-day commercial operations."
        },
        {
          heading: "2. Building Code & Fire Safety Compliance",
          body: "Projects require strict compliance regarding egress corridors, smoke evacuation vents, automatic fire alarm systems, and emergency lighting, certified via municipal fire department inspections."
        },
        {
          heading: "3. Municipal Zoning & Local Ordinances",
          body: "Regions like Hakone, Kamakura, and central Tokyo enforce localized ordinances. Pre-acquisition due diligence is critical to ensure a property can legally secure commercial lodging approval."
        }
      ],
      summary: "Yellow House coordinates licensed architects and administrative scriveners to deliver seamless, fully compliant lodging acquisition and operations."
    }
  }
];
