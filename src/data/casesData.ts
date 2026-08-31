export interface CaseArticle {
  id: string;
  slug: string;
  categoryZh: string;
  categoryEn: string;
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  date: string;
  image: string;
  locationZh: string;
  locationEn: string;
  detailsZh: {
    overview: string;
    highlights: string[];
    strategy: string;
    outcome: string;
  };
  detailsEn: {
    overview: string;
    highlights: string[];
    strategy: string;
    outcome: string;
  };
}

export const CASES_DATA: CaseArticle[] = [
  {
    id: "case-1",
    slug: "minami-aoyama-luxury-residence",
    categoryZh: "住宅不動產",
    categoryEn: "Residential",
    titleZh: "港區南青山頂級低樓層豪邸取得與長期資產配置",
    titleEn: "Acquisition & Wealth Preservation: Minami-Aoyama Low-Rise Luxury Residence",
    descZh: "協助海外家族辦公室篩選南青山稀有低密度住宅，完成實地勘查、隱私動線評估與價格條件談判，達成跨世代資產傳承目標。",
    descEn: "Assisted an overseas family office in securing a rare low-density residence in Minami-Aoyama with full privacy layout evaluation and deal structuring.",
    date: "2024.11",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
    locationZh: "東京都港區南青山",
    locationEn: "Minami-Aoyama, Minato-ku, Tokyo",
    detailsZh: {
      overview: "客戶為注重隱私與資產耐久性的海外家族，鎖定東京都心核心地段的高級住宅。本案標地位於南青山幽靜街區，為知名品牌建商打造之低樓層頂級住宅。",
      highlights: [
        "稀有低密度住宅區，住戶單純且保全規格嚴密",
        "室內專有面積超過 180 平方米，附雙平面車位",
        "土地持分高，具備卓越的抗跌性與抗通膨保值實力"
      ],
      strategy: "從產權結構、管理公約、修繕積立金結餘及未來周邊開發限制進行全面性盡職調查，並協助買方透過專業稅務架構完成跨境交屋與登記。",
      outcome: "成功以低於周邊平均成交單價 4.5% 的優渥條件締結契約，滿足買方家族自住度假兼長期保值的配置需求。"
    },
    detailsEn: {
      overview: "The client is a private overseas family office seeking a core Tokyo trophy asset combining elite residential privacy with multi-generational wealth preservation.",
      highlights: [
        "Rare low-density prime neighborhood with 24/7 high-grade security",
        "Generous floor plan exceeding 180 sqm with 2 underground parking bays",
        "High land share ratio delivering resilient long-term capital preservation"
      ],
      strategy: "Conducted exhaustive due diligence across ownership structures, building bylaws, reserve fund balances, and cross-border tax implications to negotiate optimal closing terms.",
      outcome: "Successfully closed at 4.5% below prevailing neighborhood benchmarks, securing a pristine residence for vacation and defensive wealth allocation."
    }
  },
  {
    id: "case-2",
    slug: "shibuya-commercial-income-building",
    categoryZh: "商業與收益型",
    categoryEn: "Commercial",
    titleZh: "澀谷區整棟商業店面大樓收購與收益優化專案",
    titleEn: "Acquisition & Yield Optimization: Shibuya Multi-Tenant Commercial Building",
    descZh: "針對徒步 5 分鐘內整棟商用物業進行現金流重組，透過租戶組合升級與節能設備改造，成功提升實質淨投報率。",
    descEn: "Executed comprehensive cash flow restructuring on a whole commercial building 5 minutes from Shibuya station, boosting net operating income.",
    date: "2024.09",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    locationZh: "東京都澀谷區",
    locationEn: "Shibuya-ku, Tokyo",
    detailsZh: {
      overview: "本案為澀谷主要商圈周邊之整棟地上 6 層商用物業。原屋主因資產重組急需變現，本團隊以持有者視角迅速評估實際租約與硬體耐用年限。",
      highlights: [
        "距離主要車站步行僅 5 分鐘，常年維持極高客流與廣告效應",
        "具備彈性樓層分租機能，涵蓋零售餐飲與專業事務所",
        "土地臨路寬度充足，未來具備高度重建及容積利用潛力"
      ],
      strategy: "重新檢視原租賃契約條件，淘汰低效能能耗設備，並引進具品牌知名度的優質承租方以降低單一租戶違約風險。",
      outcome: "交屋後半年內淨收益率（NOI Yield）由 3.9% 提升至 4.8%，且物業整體估值成長超過 12%。"
    },
    detailsEn: {
      overview: "A 6-story commercial building located near Shibuya's core commercial district. The seller required swift liquidity for portfolio rebalancing.",
      highlights: [
        "5-minute walk to major transit hub with robust foot traffic and retail exposure",
        "Flexible floor plates supporting mix of ground-floor retail and upper-floor offices",
        "Substantial road frontage providing excellent redevelopment potential"
      ],
      strategy: "Renegotiated outdated lease terms, retrofitted energy-efficient HVAC systems, and introduced higher-tier corporate tenants to mitigate vacancy risk.",
      outcome: "Elevated the Net Operating Income (NOI) yield from 3.9% to 4.8% within six months, while increasing total asset appraisal value by over 12%."
    }
  },
  {
    id: "case-3",
    slug: "kamakura-coastal-villa-redevelopment",
    categoryZh: "土地開發與自建",
    categoryEn: "Development",
    titleZh: "神奈川鎌倉海景土地規劃與高級自建別墅專案",
    titleEn: "Land Acquisition & Bespoke Villa Development: Kamakura Coastal Project",
    descZh: "克服斜坡地法規與景觀限制，整合日本一級建築師事務所完成海景自建度假別墅，兼具自用休閒與合法旅宿執照。",
    descEn: "Overcame slope terrain regulations and coastal zoning restrictions to design and construct a bespoke luxury seaside villa with lodging license.",
    date: "2024.07",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85",
    locationZh: "神奈川縣鎌倉市",
    locationEn: "Kamakura, Kanagawa",
    detailsZh: {
      overview: "客戶期盼在古都鎌倉打造遠眺相模灣的私人度假莊園。本團隊從土地買賣、法規調查、水土保持到營造招標全程統籌。",
      highlights: [
        "無遮蔽太平洋海景視野，基地隱蔽性極高",
        "全棟採用木鋼複合抗震結構與大片落地隔熱景觀玻璃",
        "取得簡易宿所營運許可，非自住期間可委託合法代管營運"
      ],
      strategy: "協調地方自治會與鎌倉市景觀審查委員會，落實耐震與防潮防風工法，並精確控管施工預算與進度。",
      outcome: "如期於 14 個月內完工取得使用執照，成為兼具自用生活享受與高收益潛力的示範標竿案。"
    },
    detailsEn: {
      overview: "The client envisioned a private seaside estate overlooking Sagami Bay. Our team managed everything from land acquisition to regulatory approvals and construction.",
      highlights: [
        "Unobstructed panoramic Pacific Ocean views in a secluded enclave",
        "Engineered seismic timber-steel hybrid architecture with thermal panoramic glass",
        "Certified with lodging operator license for flexible luxury rental during non-use"
      ],
      strategy: "Navigated Kamakura's stringent scenic preservation bylaws, secured geotechnical stabilization, and managed builder bidding to maintain strict budget discipline.",
      outcome: "Completed on schedule within 14 months, creating an iconic coastal sanctuary offering pristine lifestyle and exceptional hospitality yield."
    }
  },
  {
    id: "case-4",
    slug: "shinjuku-residential-income-portfolio",
    categoryZh: "商業與收益型",
    categoryEn: "Commercial",
    titleZh: "新宿區整棟 RC 住宅公寓收購與包租代管整合",
    titleEn: "Acquisition & Full Asset Management: Shinjuku RC Residential Building",
    descZh: "協助高資產投資人取得新宿核心生活圈整棟鋼筋混凝土（RC）出租公寓，提供多語系招租與全方位物業託管。",
    descEn: "Facilitated the purchase of a reinforced concrete residential apartment block in central Shinjuku, providing end-to-end multi-lingual leasing management.",
    date: "2024.05",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    locationZh: "東京都新宿區",
    locationEn: "Shinjuku-ku, Tokyo",
    detailsZh: {
      overview: "整棟 16 戶單身與情侶格局之鋼筋混凝土公寓，屋齡 12 年，位於租賃需求極度旺盛的新宿主要地鐵站周邊。",
      highlights: [
        "100% 滿室出租現況交屋，租金收入即刻進帳",
        "RC 耐火抗震結構，維護成本低且銀行融資評價高",
        "專業租賃團隊常駐管理，平均空室天數小於 14 天"
      ],
      strategy: "在盡調階段逐戶核對租賃歷史與保證公司履歷，交屋後導入智慧門禁與電子合約系統提升管理效能。",
      outcome: "年化實質收益率維持 4.6% 以上，為海外屋主帶來長期無憂的日圓被動現金流。"
    },
    detailsEn: {
      overview: "A 16-unit reinforced concrete (RC) residential building with strong rental demand from corporate professionals near major Shinjuku metro stations.",
      highlights: [
        "Acquired fully tenanted with instant positive cash flow from day one",
        "High-grade RC seismic construction ensuring low ongoing structural upkeep",
        "Dedicated leasing team keeping average turnover vacancy under 14 days"
      ],
      strategy: "Audited lease ledger history and tenant guarantor credentials, deploying digital access control post-settlement to streamline operations.",
      outcome: "Sustained net annual yield over 4.6%, delivering stress-free cross-border passive income for the overseas owner."
    }
  },
  {
    id: "case-5",
    slug: "roppongi-penthouse-renovation-resale",
    categoryZh: "收購再販與翻新",
    categoryEn: "Renovation & Resale",
    titleZh: "六本木高樓層景觀宅收購、頂級改裝與再販專案",
    titleEn: "Value-Add: Roppongi High-Rise Penthouse Renovation & Resale",
    descZh: "收購屋況陳舊之都心精華地段大坪數住宅，結合日本當代侘寂美學重塑室內空間，三個月內以創紀錄溢價成交出售。",
    descEn: "Acquired a legacy high-floor unit in prime Roppongi, executing high-spec Japanese modern renovation and achieving a record exit valuation.",
    date: "2024.03",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
    locationZh: "東京都港區六本木",
    locationEn: "Roppongi, Minato-ku, Tokyo",
    detailsZh: {
      overview: "鎖定港區六本木具有地標景觀但室內裝潢老舊的中古高級物件，評估拆除重組之附加價值潛力後果斷收購。",
      highlights: [
        "直面東京鐵塔景觀的無價開闊視野",
        "引進頂級天然石材、隱藏式空調與進口名牌廚具衛浴",
        "重新規劃起居動線，增設獨立酒窖與衣帽間"
      ],
      strategy: "統籌工班與室內設計團隊於 60 天內完成精密改裝，並透過封閉式高資產買家網絡進行專案銷售。",
      outcome: "改裝完成後第 22 天即由海外買家以全現金全額買受，專案總投報率（ROI）達 21.8%。"
    },
    detailsEn: {
      overview: "Targeted an older spacious luxury condominium unit in Roppongi boasting panoramic Tokyo Tower views that suffered from outdated interior fittings.",
      highlights: [
        "Unrivaled direct view of Tokyo Tower and skyline",
        "Imported Italian marble, concealed climate systems, and bespoke German kitchen fixtures",
        "Optimized layout adding a private wine cellar and expanded walk-in dressing suite"
      ],
      strategy: "Directed architectural renovation within a tight 60-day window, followed by targeted private placement marketing across international family networks.",
      outcome: "Secured an all-cash purchase within 22 days of completion, generating a net project ROI of 21.8%."
    }
  },
  {
    id: "case-6",
    slug: "hakone-hotspring-ryokan-revitalization",
    categoryZh: "住宿設施營運",
    categoryEn: "Hospitality",
    titleZh: "箱根天然溫泉旅宿取得、品牌重塑與合法營運",
    titleEn: "Hospitality Transformation: Hakone Natural Onsen Villa Operations",
    descZh: "取得箱根知名溫泉區閒置別墅，完成溫泉引湯執照更新與奢華包棟改造，建構高平均房價（ADR）之精緻旅宿資產。",
    descEn: "Acquired a private onsen property in Hakone, renewed hot spring water rights, and converted it into an exclusive boutique villa.",
    date: "2024.01",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1600&q=85",
    locationZh: "神奈川縣足柄下郡箱根町",
    locationEn: "Hakone, Kanagawa",
    detailsZh: {
      overview: "箱根為日本最具代表性的國際觀光名所。本案為私人持有的傳統木造溫泉宅邸，經本公司整體評估後轉型為包棟奢華度假宿所。",
      highlights: [
        "源泉直通之室內檜木風呂與露天岩石風呂",
        "合法取得旅館業法簡易宿所營業許可",
        "配備多國語言智慧管家系統與遠端門禁管理"
      ],
      strategy: "更新溫泉管線與防火安全設備，建立與各大國際訂房平台之直連渠道，提供海外房東完全被動的管理分潤體系。",
      outcome: "自開幕以來平均住房率達 78%，旺季 ADR 超過 12 萬日圓，年化毛租金收益率逾 9.5%。"
    },
    detailsEn: {
      overview: "Located in Hakone's premier hot spring district, this traditional estate was acquired and repurposed into an ultra-luxury private rental sanctuary.",
      highlights: [
        "Direct natural thermal spring source with indoor cypress and outdoor stone baths",
        "Fully licensed under Japanese Hotel & Ryokan Management Laws",
        "Smart multilingual concierge and remote check-in infrastructure"
      ],
      strategy: "Refurbished thermal plumbing, elevated fire-safety standards, and linked global booking engines with transparent automated owner reporting.",
      outcome: "Achieved 78% average annual occupancy with peak ADR exceeding JPY 120,000, generating a gross hospitality yield of 9.5%."
    }
  },
  {
    id: "case-7",
    slug: "ginza-commercial-retail-strata",
    categoryZh: "商業與收益型",
    categoryEn: "Commercial",
    titleZh: "中央區銀座一丁目核心店面分層產權配置",
    titleEn: "Prime Retail Investment: Ginza 1-Chome Commercial Strata Acquisition",
    descZh: "鎖定銀座精品商圈稀有釋出之一樓臨街店面，協助外國法人完成跨國融資與長期租約穩定收益架構。",
    descEn: "Secured a rare ground-floor retail unit in prestigious Ginza, structuring favorable cross-border debt financing and guaranteed long leases.",
    date: "2023.11",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=85",
    locationZh: "東京都中央區銀座",
    locationEn: "Ginza, Chuo-ku, Tokyo",
    detailsZh: {
      overview: "銀座地段具備極高全球資產識別度。本標的位於銀座一丁目黃金街角，租客為知名高級珠寶鐘錶品牌。",
      highlights: [
        "銀座核心區極稀缺之一樓店面獨立產權",
        "國際知名精品租客簽署 10 年定期借家契約",
        "抗通膨保值指標資產，極易在二級市場轉手變現"
      ],
      strategy: "協助海外法人架構合規日本分支或 GK-TK 結構，並向日本在地銀行爭取低利長期融資方案。",
      outcome: "順利完成交割，享有穩健現金流之餘，土地公告地價每年維持穩健增長。"
    },
    detailsEn: {
      overview: "Ginza represents the pinnacle of Japanese commercial prestige. This acquisition secured a prime ground-floor retail unit leased to an international luxury watchmaker.",
      highlights: [
        "Extremely scarce ground-floor frontage property in core Ginza",
        "Anchored by creditworthy luxury brand on a 10-year fixed-term lease",
        "Unrivaled asset liquidity and defensive resilience against market volatility"
      ],
      strategy: "Structured compliant corporate vehicle and arranged competitive local bank financing with attractive fixed rates.",
      outcome: "Closed successfully, delivering predictable yields alongside steady year-on-year land valuation increases."
    }
  },
  {
    id: "case-8",
    slug: "yokohama-bayview-tower-condominium",
    categoryZh: "住宅不動產",
    categoryEn: "Residential",
    titleZh: "橫濱港未來海景超高層景觀塔樓住宅配置",
    titleEn: "Coastal Skyline Living: Minato Mirai Yokohama Luxury Tower Condominium",
    descZh: "為計畫部分時間移居日本的海外客戶，精選橫濱港未來地標超高層豪宅，完成全套傢俱配置與入境居住準備。",
    descEn: "Curated a landmark high-floor tower residence in Minato Mirai Yokohama for an international client planning partial relocation to Japan.",
    date: "2023.09",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
    locationZh: "神奈川縣橫濱市西區",
    locationEn: "Minato Mirai, Nishi-ku, Yokohama",
    detailsZh: {
      overview: "客戶重視國際化生活氛圍與開闊海景。本案位於橫濱港未來指標性 50 層超高層制震塔樓，配置 24 小時禮賓服務與專屬健身會所。",
      highlights: [
        "高樓層東南向，飽覽橫濱灣、彩虹大橋與富士山景致",
        "直通地鐵站之全天候地下連通步道",
        "五星級公共設施（景觀 Lounge、宴會廳、客房套房）"
      ],
      strategy: "提供從選屋、產權調查、換匯時點諮詢，到完工驗屋、高端日本傢俱訂製採購之一站式服務。",
      outcome: "客戶抵達日本即可無縫入住，並在非居住期間提供嚴密的空室巡查與定期通風保養。"
    },
    detailsEn: {
      overview: "The buyer desired an international lifestyle with marine views. Selected an elite 50-story tower condominium in Minato Mirai with full concierge services.",
      highlights: [
        "High-floor southeast orientation capturing views of Yokohama Bay and Mount Fuji",
        "Direct weather-protected underground access to the subway station",
        "Comprehensive amenities including sky lounge, guest suites, and fitness center"
      ],
      strategy: "Delivered turnkey support spanning unit selection, technical inspection, foreign exchange planning, and luxury furnishing procurement.",
      outcome: "Enabled flawless move-in ready handover, backed by regular maintenance and inspection during owner absence."
    }
  },
  {
    id: "case-9",
    slug: "meguro-residential-land-development",
    categoryZh: "土地開發與自建",
    categoryEn: "Development",
    titleZh: "目黑區閑靜住宅地分割開發與雙拼別墅規劃",
    titleEn: "Subdivision & Development: Prime Residential Enclave in Meguro",
    descZh: "整合目黑區大坪數老舊木造宅地，重新進行地目分割與建築容積最大化設計，建造兩棟當代節能獨立洋房。",
    descEn: "Acquired legacy land in Meguro, completing strategic parcel subdivision and architectural design for two contemporary high-efficiency residences.",
    date: "2023.07",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    locationZh: "東京都目黑區",
    locationEn: "Meguro-ku, Tokyo",
    detailsZh: {
      overview: "原基地為繼承後閒置之大面積老舊建物。本團隊評估周邊高級住宅需求強烈，決定進行拆除、分割與全新自建設計。",
      highlights: [
        "目黑優質學區與綠蔭街廓，自住家庭需求極高",
        "符合日本最高等級『耐震等級 3』與『斷熱等極 6』節能規格",
        "每戶配置獨立庭院、屋頂露台與雙車位車庫"
      ],
      strategy: "精算土地取得成本與營造預算，親自監督結構體施工與防水細節，落實持有者視角的品質承諾。",
      outcome: "兩棟別墅於上棟階段即分別由日商高階主管及外籍專業人士以預售方式全數簽約售出。"
    },
    detailsEn: {
      overview: "An estate inheritance property in Meguro. Our team identified strong residential demand and undertook demolition, land subdivision, and luxury home construction.",
      highlights: [
        "Prestige school district and tree-lined surroundings favored by executive families",
        "Engineered to highest Japanese Seismic Grade 3 and Thermal Efficiency Grade 6",
        "Each home features private landscaped garden, rooftop terrace, and double garage"
      ],
      strategy: "Controlled total acquisition and construction costs while personally supervising structural integrity and building envelope durability.",
      outcome: "Both custom homes were contracted off-plan prior to roof completion to multinational executives."
    }
  },
  {
    id: "case-10",
    slug: "shinjuku-resale-value-renovation",
    categoryZh: "收購再販與翻新",
    categoryEn: "Renovation & Resale",
    titleZh: "西新宿中古套房批次收購、系統化翻新與高投報釋出",
    titleEn: "Portfolio Renovation: Batch Acquisition & Resale in Nishi-Shinjuku",
    descZh: "在西新宿商業商圈一次性收購 4 戶老舊單身公寓，採用模組化精密改裝降低成本，創造雙位數資產增值回報。",
    descEn: "Acquired a batch of 4 older studio apartments in Nishi-Shinjuku, applying modular high-grade renovation to deliver double-digit capital appreciation.",
    date: "2023.05",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85",
    locationZh: "東京都新宿區西新宿",
    locationEn: "Nishi-Shinjuku, Shinjuku-ku, Tokyo",
    detailsZh: {
      overview: "針對都心租屋族群對現代化廚衛與乾濕分離的強烈需求，將 1990 年代老舊三合一衛浴公寓全面升級重組。",
      highlights: [
        "緊鄰東京都廳與新宿中央公園，商務租屋剛性需求強勁",
        "改裝為乾濕分離獨立衛浴、全室超耐磨木地板與隱藏收納",
        "配備高速光纖網路與智慧門鎖，吸引外商及 IT 工程師承租"
      ],
      strategy: "透過批次採購建材大幅壓低每戶改裝成本，翻新完成後立即以高於原租金 25% 完成招租並分批轉售給長期收租買家。",
      outcome: "4 戶總計於 8 個月內全數結案，平均單戶年化資本回報率超過 18.5%。"
    },
    detailsEn: {
      overview: "Upgraded 1990s units with outdated unit baths in central Tokyo into sleek, modern studios designed for tech and corporate professionals.",
      highlights: [
        "Steps from Tokyo Metropolitan Government Building and Shinjuku Central Park",
        "Converted to separated luxury shower rooms, oak flooring, and clever built-in storage",
        "Integrated gigabit fiber and digital keypad access"
      ],
      strategy: "Leveraged bulk material procurement to reduce cost, secured tenants at 25% rental premiums, and packaged them for individual yield-focused buyers.",
      outcome: "Completed all 4 asset exits within 8 months, realizing an average annualized capital gain exceeding 18.5%."
    }
  },
  {
    id: "case-11",
    slug: "chiba-suburban-logistic-land",
    categoryZh: "土地開發與自建",
    categoryEn: "Development",
    titleZh: "千葉高速公路交流道周邊物流倉儲用地規劃",
    titleEn: "Industrial Development: Suburban Logistics Land Planning in Chiba",
    descZh: "協助國際物流投資基金取得交流道旁萬坪工業用地，統籌農地變更、道路鋪設與地質改良等前端繁複法規流程。",
    descEn: "Guided an international logistics fund through land acquisition, zoning conversions, and infrastructure feasibility near major highway interchanges.",
    date: "2023.03",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=85",
    locationZh: "千葉縣",
    locationEn: "Chiba Prefecture",
    detailsZh: {
      overview: "因應電子商務蓬勃發展，大東京首都圈周邊具備便利高速公路節點的現代化倉儲物流用地極度搶手。",
      highlights: [
        "距東關東自動車道交流道僅 3 分鐘車程",
        "地勢平坦且周邊無密集住宅區，具備 24 小時貨車進出條件",
        "土地總面積超過 15,000 平方米"
      ],
      strategy: "協調地方政府落實都市計畫法規調查、土地境界確認與環境影響評估，排除各項隱藏開發障礙。",
      outcome: "成功協助投資方完成產權過戶並取得物流中心建築許可，創造卓越的土地升值潛力。"
    },
    detailsEn: {
      overview: "Driven by booming e-commerce, prime logistics plots adjacent to major Greater Tokyo arterial expressways are in intense demand.",
      highlights: [
        "3 minutes from Higashi-Kanto Expressway interchange",
        "Flat topography outside residential noise zones, permitting 24/7 heavy transport",
        "Total site parcel area exceeding 15,000 sqm"
      ],
      strategy: "Handled urban zoning verifications, boundary confirmations, and environmental compliance with municipal authorities.",
      outcome: "Facilitated smooth title transfer and development permits for modern warehouse construction, generating significant land value upside."
    }
  },
  {
    id: "case-12",
    slug: "isehara-residential-leasing-management",
    categoryZh: "商業與收益型",
    categoryEn: "Commercial",
    titleZh: "神奈川伊勢原整棟收益住宅長期代管與資產維護",
    titleEn: "Asset Management: Long-Term Leasing & Structural Care in Isehara",
    descZh: "在公司根據地神奈川伊勢原管理多棟收益型公寓，落實預防性修繕計畫與零糾紛租務管理，維持 98% 以上常態滿室率。",
    descEn: "Managing multiple multi-family residential assets in Kanagawa Isehara, maintaining 98%+ occupancy with preventive maintenance and zero disputes.",
    date: "2023.01",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85",
    locationZh: "神奈川縣伊勢原市",
    locationEn: "Isehara-shi, Kanagawa",
    detailsZh: {
      overview: "在公司總部所在地神奈川伊勢原深耕多年，本團隊親自管理多棟公寓，以房東第一線實戰心法為業主守護資產。",
      highlights: [
        "在地 15 年深厚人脈與優質房仲租賃聯網",
        "嚴謹的租戶身分審查與保證人制度，零租金拖欠率",
        "定期外牆塗裝與給排水維護，維持建築高淨值"
      ],
      strategy: "制定 10 年長期修繕計畫，按部就班累積修繕儲備金，避免突發性大額支出衝擊業主現金流。",
      outcome: "十年來平均稼動率始終維持在 98% 以上，為業主創造歷久不衰的穩固被動回報。"
    },
    detailsEn: {
      overview: "Rooted in our headquarters area of Kanagawa Isehara for over 15 years, our hands-on owner mentality safeguards client property value.",
      highlights: [
        "15 years of local brokerage partnerships and deep community network",
        "Rigorous tenant vetting and mandatory rent guarantee policies ensuring zero delinquency",
        "Proactive exterior maintenance and MEP upkeep protecting asset lifespan"
      ],
      strategy: "Implemented 10-year preventive maintenance programs, avoiding unexpected capital calls and smoothing landlord yields.",
      outcome: "Sustained a consistent 98%+ occupancy rate across a decade of trusted stewardship."
    }
  }
];
