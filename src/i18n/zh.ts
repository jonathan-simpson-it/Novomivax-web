import type { Dict } from './en';

export const zh: Dict = {
  meta: {
    siteName: 'NOVOMI VAX',
    defaultTitle: 'NOVOMI VAX | AI精准肿瘤治疗疫苗',
    defaultDescription:
      'AI精准新抗原与病原抗原驱动的肿瘤治疗疫苗公司，总部位于香港。用身体免疫记忆对抗癌症。',
    ogTitle: 'NOVOMI VAX | 用身体免疫记忆对抗癌症',
    ogDescription: 'AI精准新抗原与病原抗原，调动身体免疫记忆对抗癌症。总部位于香港。',
  },
  pages: {
    home: { title: 'NOVOMI VAX | AI精准肿瘤治疗疫苗', description: 'AI精准新抗原与病原抗原驱动的肿瘤治疗疫苗公司，总部位于香港。' },
    about: { title: '关于我们 | NOVOMI VAX', description: '2025年10月28日成立于香港，成立9个月内完成人体概念验证。' },
    technology: { title: '技术与平台 | NOVOMI VAX', description: 'BSTCV广谱肿瘤治疗疫苗与ANTCV AI新抗原肿瘤治疗疫苗。' },
    pipeline: { title: '产品管线 | NOVOMI VAX', description: 'NV-001至NV-004四条管线，以及至2035年的长期路线图。' },
    clinical: { title: '临床数据 | NOVOMI VAX', description: 'NV-001 GBM IIT人体数据：3例患者PFS达20至38+个月，超越标准治疗阈值。' },
    team: { title: '团队 | NOVOMI VAX', description: '创始人、科学顾问委员会与核心管理层。' },
    contact: { title: '联系我们 | NOVOMI VAX', description: '合作咨询、投资人关系与媒体联系。' },
  },
  nav: {
    home: '首页',
    about: '关于我们',
    technology: '技术与平台',
    pipeline: '产品管线',
    clinicalData: '临床数据',
    team: '团队',
    contact: '联系我们',
    switchLang: 'EN',
    switchLangLabel: '切换到英文',
    menuLabel: '切换导航菜单',
  },
  hero: {
    eyebrow: '肿瘤治疗疫苗',
    title: 'AI精准新抗原与病原抗原，调动身体免疫记忆对抗癌症。',
    subtitle:
      'NOVOMI VAX是一家总部位于香港、由AI精准新抗原与病原抗原驱动的肿瘤治疗疫苗公司，通过重编程肿瘤微环境，使人体自身的免疫系统能够识别并攻击实体瘤。',
    primaryCta: '合作咨询',
    secondaryCta: '投资人联系',
    scienceCta: '了解科学原理',
    scrollHint: '向下滚动',
  },
  home: {
    intro: {
      eyebrow: '关于我们',
      heading: '一家重编程免疫"冷"肿瘤、使其成为免疫系统可识别靶点的香港生物科技公司。',
      paragraph:
        'NOVOMI VAX是一家总部位于香港的医疗初创公司，专注于免疫学、AI与转化医学的交叉领域。我们正在开发肿瘤治疗疫苗，将AI预测的新抗原与病原抗原相结合，旨在激活人体自身的抗肿瘤免疫系统对抗实体瘤。',
      cta: '了解更多',
      facts: [
        { label: '成立', value: '香港，2025年10月' },
        { label: '人体概念验证', value: '成立9个月内完成' },
        { label: '研发投入', value: 'RMB 4,000万' },
        { label: '总部', value: '香港大学医学院' },
      ],
    },
    science: {
      eyebrow: '科学原理',
      heading: '工作原理',
      intro:
        'NOVOMI VAX正在开发广谱mRNA疫苗平台，旨在重编程肿瘤微环境，将"冷"实体瘤转化为免疫学上的"热"肿瘤，使人体自身的免疫系统能够发起攻击。',
      disclaimer:
        '本内容仅供参考及研究概述之用，不构成医疗建议，亦不代表任何已批准的疗法声明。',
      stages: [
        {
          heading: '全新路径：标记肿瘤，提供可成药靶点',
          body: '当前免疫疗法对"冷"实体瘤失效，源于三大核心问题：',
          problems: [
            '异质性、抗原逃逸与适应性耐药：肿瘤细胞突变并逃避免疫识别',
            '无可成药靶点：免疫系统无从识别',
            '免疫抑制性肿瘤微环境（TME）：肿瘤周围区域主动抑制免疫应答',
          ],
          note: '我们需要：一个免疫系统能够识别的可成药靶点。',
          diagram: {
            current: '当前状态',
            blocked: '受阻',
            needed: '所需',
            target: '可成药靶点',
            barriers: ['异质性', '无靶点', '免疫抑制性TME'],
          },
        },
        {
          heading: '一药多效：可成药靶点与异质性',
          body: 'NOVOMI VAX的mRNA疫苗平台同时应对三大屏障：',
          points: [
            '为肿瘤提供可成药靶点：标记肿瘤，使免疫系统能够识别',
            '克服抗原异质性：即使肿瘤细胞各异依然有效',
            '重编程免疫抑制性TME，使其转为免疫许可状态',
          ],
          diagram: {
            cards: [
              { title: '可成药靶点', text: '标记肿瘤，供免疫系统识别' },
              { title: '克服异质性', text: '肿瘤细胞各异依然有效' },
              { title: '重编程TME', text: '使微环境转为免疫许可状态' },
            ],
          },
        },
        {
          heading: '将冷肿瘤转化为热肿瘤',
          body: '疫苗分三个阶段重编程肿瘤微环境：',
          steps: [
            'mRNA疫苗递送至肿瘤环境',
            '标记肿瘤细胞，使其被免疫系统识别',
            '免疫系统被激活：肿瘤"升温"，免疫细胞浸润并攻击',
          ],
        },
        {
          heading: '通过抗原扩散实现远隔效应',
          body: '在原发性肿瘤之外，平台触发更广泛的免疫激活级联：',
          cascade: [
            '清除标记的肿瘤细胞：免疫系统摧毁最初靶向的细胞',
            '抗原扩散：肿瘤细胞被破坏后，更多肿瘤抗原被释放并识别',
            '产生更广泛的肿瘤特异性T细胞：免疫系统学习更多靶点',
            '全身性肿瘤清除：免疫系统可攻击治疗部位以外的肿瘤',
          ],
          note: '治疗一个部位，引发全身抗肿瘤应答，这就是"远隔效应"。',
          cascadeTitles: ['清除', '抗原扩散', '更广泛的T细胞', '系统性清除'],
        },
      ],
    },
    platforms: {
      eyebrow: '技术平台',
      heading: '两大平台，同一使命',
      intro: 'BSTCV提供现货型广谱肿瘤重编程；ANTCV以AI预测新抗原实现个体化免疫激活。',
      bstcv: {
        name: 'BSTCV',
        fullName: 'Broad Spectrum Therapeutic Cancer Vaccine',
        tagline: '现货型广谱重编程，跨肿瘤类型有效',
        stats: [
          { value: '6+', label: '原发肿瘤模型验证' },
          { value: '2', label: '转移模型验证' },
          { value: '现货型', label: '无需个性化生产' },
        ],
      },
      antcv: {
        name: 'ANTCV',
        fullName: 'AI Neoantigen Therapeutic Cancer Vaccine',
        tagline: 'AI筛选新抗原，实现个体化免疫激活',
        stats: [
          { value: '99.91%', label: 'AI模型PPV（测试集）' },
          { value: '51.85%', label: '体外验证率' },
          { value: '50%', label: '多癌种响应率' },
        ],
      },
      cta: '了解技术平台',
    },
    pipeline: {
      eyebrow: '产品管线',
      heading: '四条管线同步推进',
      intro: 'NV-001至NV-004，覆盖术后MRD清除、后线治疗与新辅助治疗。',
      rows: [
        { code: 'NV-001', route: 'ANTCV肽疫苗', focus: '术后MRD（GBM+结直肠癌）', progress: 'IIT试验阳性结果' },
        { code: 'NV-002', route: 'ANTCV mRNA', focus: '术后MRD（泛实体瘤）', progress: 'mRNA-LNP GLP及CMC完成' },
        { code: 'NV-003', route: 'BSTCV', focus: '新辅助+IO耐药', progress: 'CMC启动' },
        { code: 'NV-004', route: 'ABTCV', focus: '晚期/难治性肿瘤', progress: '设计阶段' },
      ],
      cta: '查看产品管线',
    },
    milestones: {
      eyebrow: '发展里程碑',
      heading: '从成立到首批患者',
      items: [
        { date: '2025年10月', text: 'NOVOMI VAX在香港注册成立' },
        { date: '2025年', text: '技术平台建立' },
        { date: '2025年', text: '国家级颠覆性技术项目储备库入库' },
        { date: '2027年', text: 'IND里程碑（预计）', future: true },
      ],
      cta: '我们的故事',
    },
    team: {
      eyebrow: '团队',
      heading: '由资深科学家领衔',
      intro: '创始人拥有数十年疫苗与合成生物学经验，并获世界级临床与AI顾问支持。',
      members: [
        { name: 'Prof. JD Huang', nameZh: '黄建东', role: '联合创始人兼CSO' },
        { name: 'Prof. Tian Xu', nameZh: '许田', role: '联合创始人兼董事长' },
      ],
      cta: '认识团队',
    },
    ctaBand: {
      heading: '携手合作，将肿瘤疫苗带给患者。',
      paragraph: '我们欢迎生命科学VC、药企与生物技术伙伴，以及临床与学术合作者的交流。',
      primary: '合作咨询',
      secondary: '投资人联系',
    },
    contactStrip: {
      email: 'enhe00000@connect.hku.hk',
      phone: '+852 84970818',
      address: '香港薄扶林沙宣道21号实验室大楼L3-61',
      cta: '联系我们',
    },
  },
  about: {
    hero: {
      eyebrow: '关于我们',
      title: '一家以AI精准技术赋能身体免疫记忆的肿瘤治疗疫苗公司。',
      intro: 'NOVOMI VAX是一家由AI精准新抗原与病原抗原驱动的肿瘤治疗疫苗公司。公司于香港成立，成立9个月内即完成人体概念验证。',
      cta: '我们的使命',
    },
    profile: {
      eyebrow: '公司简介',
      heading: '从成立到人体概念验证，仅用9个月',
      paragraphs: [
        'NOVOMI VAX于2025年10月28日在香港成立，并在成立后9个月内完成人体概念验证。',
        '已投入RMB 4,000万用于NV-001/002/003的研发、临床前、毒理及CMC开发。',
        '公司总部及研发基地目前位于香港大学医学院。',
      ],
      facts: [
        { label: '成立日期', value: '2025年10月28日，香港' },
        { label: '人体概念验证', value: '成立9个月内完成' },
        { label: '研发投入', value: 'RMB 4,000万' },
        { label: '总部及研发基地', value: '香港大学医学院' },
      ],
    },
    missionVision: {
      mission: {
        eyebrow: '使命',
        heading: '激活人体自身抗肿瘤免疫系统，根治实体瘤',
        text: '激活人体自身抗肿瘤免疫系统，根治实体瘤。',
      },
      vision: {
        eyebrow: '愿景',
        heading: '成为全球领先的肿瘤治疗性mRNA疫苗生物智能平台',
        text: '成为全球领先的肿瘤治疗性mRNA疫苗生物智能平台。',
      },
    },
    timeline: {
      eyebrow: '发展历程',
      heading: '从成立到IND',
      items: [
        { date: '2025年10月28日', text: '香港公司注册' },
        { date: '2025年', text: '技术平台建立' },
        { date: '2025年', text: '国家级颠覆性技术项目储备库入库' },
        { date: '2027年', text: 'IND里程碑（预计）', future: true },
      ],
    },
    ctaBand: {
      heading: '深入了解平台背后的科学。',
      primary: '技术与平台',
      secondary: '联系我们',
    },
  },
  technology: {
    hero: {
      eyebrow: '技术与平台',
      title: '两大平台，针对癌症治疗的不同阶段。',
      intro:
        'BSTCV为新辅助及免疫治疗耐药场景提供现货型广谱肿瘤重编程；ANTCV以AI预测新抗原实现术后个体化免疫激活。',
    },
    overview: {
      eyebrow: '总览',
      heading: '广谱重编程，AI精准靶向',
      text: '两大平台基于同一洞察：人体本身已拥有对抗癌症的免疫记忆。疫苗通过重编程肿瘤使这一记忆发挥作用，并在更大规模上扩增肿瘤特异性免疫。',
    },
    bstcv: {
      eyebrow: '平台01',
      name: 'BSTCV',
      fullName: 'Broad Spectrum Therapeutic Cancer Vaccine',
      tag: 'NV-003',
      scenarios: {
        heading: '适用场景',
        items: ['新辅助治疗（Scenario 1）', '肿瘤免疫治疗耐药后线治疗（Scenario 2）'],
      },
      mechanism: {
        heading: '核心机制',
        text: '广谱，覆盖6+肿瘤模型，不依赖驱动突变。',
      },
      advantages: {
        heading: '核心优势',
        items: [
          '现货型，无需个性化生产，低成本',
          '低毒性，门诊使用',
          '可激活冷肿瘤/TMB-L肿瘤，与ICI联用有协同效应',
          '系统效应：清除远端及转移病灶',
        ],
      },
      data: {
        heading: '数据支撑',
        text: '6+原发肿瘤模型 + 2种转移模型 + 人体数据对比强效验证。',
      },
      diagram: {
        title: 'BSTCV作用机制',
        steps: [
          { title: '病原抗原重编程肿瘤', text: '以异源抗原标记肿瘤细胞' },
          { title: '激活预存免疫记忆', text: '调动人体已有的免疫防御' },
          { title: '快速扩增肿瘤特异性免疫', text: '产生广谱、全身性抗肿瘤应答' },
        ],
      },
    },
    antcv: {
      eyebrow: '平台02',
      name: 'ANTCV',
      fullName: 'AI Neoantigen Therapeutic Cancer Vaccine',
      tag: 'NV-001 / NV-002',
      scenarios: {
        heading: '适用场景',
        items: ['术后微小病灶清除（Scenario 3）'],
      },
      mechanism: {
        heading: '核心机制',
        items: [
          'NeoVaxMHC AI模型从肿瘤测序中筛选患者特异性新抗原',
          '串联方案：共享Vac1建立预免疫，个性化Vac2放大肿瘤特异性杀伤',
          '皮下门诊给药，联合辅助治疗',
        ],
      },
      advantages: {
        heading: '核心优势',
        items: [
          'AI模型PPV 99.91%（测试集）',
          '体外验证率51.85%',
          '多癌种响应率50%（7/13, 8/12, 10/20）',
        ],
      },
      diagram: {
        title: 'ANTCV作用机制',
        steps: [
          { title: 'AI新抗原预测', text: 'NeoVaxMHC从测序数据中筛选患者特异性新抗原' },
          { title: '串联免疫激活', text: '共享Vac1预免疫，个性化Vac2放大' },
          { title: '长期免疫监视', text: '肿瘤特异性免疫长期维持' },
        ],
      },
    },
    ctaBand: {
      heading: '了解平台背后的数据。',
      primary: '临床数据',
      secondary: '产品管线',
    },
  },
  pipeline: {
    hero: {
      eyebrow: '产品管线',
      title: '四条管线，一张至2035年的路线图。',
      intro: '从术后MRD清除到新辅助与后线治疗，每条管线都针对明确的临床需求。',
    },
    table: {
      heading: '管线总览',
      note: '当前进度（2026年8月20日）',
      cols: { program: '管线', route: '平台/路线', focus: '适应症', progress: '当前进度', goal: '下18个月目标' },
      rows: [
        {
          code: 'NV-001',
          route: 'ANTCV肽疫苗',
          focus: '术后MRD（GBM+结直肠癌）',
          progress: 'IIT试验阳性结果',
          goal: 'IND申请（2027）',
        },
        {
          code: 'NV-002',
          route: 'ANTCV mRNA',
          focus: '术后MRD（泛实体瘤）',
          progress: '研究完成，mRNA-LNP GLP及CMC完成',
          goal: '启动三甲医院IIT',
        },
        {
          code: 'NV-003',
          route: 'BSTCV',
          focus: '新辅助+IO耐药',
          progress: '国家级颠覆性技术项目入库，CMC启动',
          goal: '完成GLP及CMC，启动IIT（2027）；IND准备（2028 filing）',
        },
        {
          code: 'NV-004',
          route: 'ABTCV',
          focus: '晚期/难治性肿瘤',
          progress: '设计阶段',
          goal: '候选物研究（2028起）',
        },
      ],
    },
    roadmap: {
      eyebrow: '长期路线图',
      heading: '通往注册之路',
      phases: [
        { period: '2027', items: ['NV-001 IND申报', 'NV-002 IIT启动', 'NV-003 IIT启动'] },
        { period: '2028', items: ['NV-003 IND申报', 'NV-004候选物研究'] },
        { period: '2028–2033', items: ['各管线Phase I-III'] },
        { period: '2034–2035', items: ['FDA / NMPA / EMA申报'] },
      ],
    },
    ctaBand: {
      heading: '想了解某个管线的更多信息？',
      primary: '联系我们',
      secondary: '临床数据',
    },
  },
  clinical: {
    hero: {
      eyebrow: '临床数据',
      title: '人体数据，最有说服力的证明。',
      intro: 'NV-001 GBM IIT数据（N=3）：所有3例患者均超越标准治疗及历史试验PFS阈值，PFS达20至38+个月。',
    },
    nv001: {
      eyebrow: 'NV-001',
      heading: 'GBM IIT数据（N=3）',
      intro: '所有3例患者均超越标准治疗及历史试验PFS阈值，PFS达20至38+个月。',
      chart: {
        title: '3例患者的无进展生存期',
        rangeLabel: '患者PFS范围',
        from: '20个月',
        to: '38+个月',
        threshold: '标准治疗/历史试验PFS阈值',
        patients: [
          { label: '患者1', value: '38+个月', detail: '无进展生存，持续随访中' },
          { label: '患者2–3', value: '20+个月', detail: '超越标准治疗及历史试验阈值' },
        ],
      },
      bullets: [
        '仅出现1级治疗相关AE',
        '与辅助TMZ联合给药方案依从性高',
      ],
    },
    nv003: {
      eyebrow: 'NV-003',
      heading: '临床前数据',
      intro: '6+原发肿瘤模型 + 2种转移模型强效验证。',
      points: [
        '原发肿瘤 vs 对照对比展示',
        '转移模型及系统效应展示',
      ],
    },
    disclaimer:
      '本内容仅供参考及研究概述之用，不构成医疗建议，亦不代表任何已批准的疗法声明。',
    ctaBand: {
      heading: '查看完整管线与路线图。',
      primary: '产品管线',
      secondary: '联系我们',
    },
  },
  team: {
    hero: {
      eyebrow: '团队',
      title: '科学家、临床专家与顾问，都是深耕多年的行家。',
      intro: '创始人拥有深厚的疫苗与合成生物学经验，顾问委员会塑造了整个领域，管理层扎根转化医学。',
    },
    founders: {
      heading: '创始人',
      intro: '两位联合创始人拥有数十年的研究与生物科技创业经验。',
      members: [
        {
          name: 'Prof. JD Huang',
          nameZh: '黄建东',
          role: '联合创始人兼CSO',
          subtitle: '香港大学教授',
          bio: [
            'L&T慈善基金会教授',
            'Bay Vax Biotech及DELONIX联合创始人',
            '疫苗研发及合成生物学领域公认专家',
            '发表大中华区首篇Science合成生物学论文',
            '加州大学洛杉矶分校博士；复旦大学学士',
          ],
        },
        {
          name: 'Prof. Tian Xu',
          nameZh: '许田',
          role: '联合创始人兼董事长',
          subtitle: '西湖大学',
          bio: [
            '西湖大学创始副校长/讲席教授',
            '前耶鲁大学遗传学副主席，HHMI研究员',
            '创立10+家生物科技公司，其中9家纳斯达克上市或被收购',
          ],
        },
      ],
    },
    advisory: {
      heading: '科学顾问委员会',
      intro: '肿瘤免疫、临床医学与AI肿瘤学领域的世界级顾问。',
      members: [
        {
          name: 'Prof. Lieping Chen',
          nameZh: '陈列平',
          role: '肿瘤免疫科学顾问',
          subtitle: '耶鲁大学',
          bio: [
            '耶鲁大学免疫生物学教授',
            'PD-L1（B7-H1）发现者（1999）',
            '首个抗PD-1人体临床试验主导者（2006）',
            '美国国家科学院院士（2021）、美国国家医学院院士',
            '发表400+篇论文',
          ],
        },
        {
          name: 'Prof. Maie St. John',
          nameZh: '',
          role: '临床顾问',
          subtitle: '约翰霍普金斯大学',
          bio: [
            '耳鼻咽喉头颈外科教授及系主任',
            '约翰霍普金斯大学医学院',
            'Anelot教授',
          ],
        },
        {
          name: 'Dr. Qinghui Li',
          nameZh: '李庆辉',
          role: 'AI/IT肿瘤学顾问',
          subtitle: '生物信息学与AI',
          bio: [
            '10年生物信息学研发及商业转化经验',
            '前上海伯豪生物/云健康基因学生信负责人',
            '复星医药肿瘤新抗原疫苗项目联合创始人兼COO',
          ],
        },
      ],
    },
    management: {
      heading: '核心管理层',
      intro: '临床、运营与技术负责人均具备一线转化医学经验。',
      members: [
        {
          name: 'Dr. Jinquan Liu',
          nameZh: '',
          role: '临床负责人',
          subtitle: '北京协和医学院MD',
          bio: [
            '9年临床经验',
            '北京协和医学院皮肤肿瘤方向MD',
            '参与多项临床试验，具备丰富的试验注册经验',
          ],
        },
        {
          name: 'Mr. ENHE',
          nameZh: '恩和',
          role: '总经理',
          subtitle: '港大-BICI联合博士项目',
          bio: [
            '港大-BICI联合博士项目转化医学研究',
            '北京协和医院工作经验',
            '中山大学医学院研究经验',
          ],
        },
        {
          name: 'Dr. Renhao Li',
          nameZh: '李任豪',
          role: '首席技术官',
          subtitle: '香港大学生物医药博士',
          bio: [
            '病毒与疫苗研究中心（CVVT）博士后',
            '香港大学生物医药博士',
            '8年肿瘤疫苗开发经验',
          ],
        },
      ],
    },
    ctaBand: {
      heading: '与我们一起，将肿瘤疫苗带给患者。',
      primary: '联系我们',
      secondary: '合作咨询',
    },
  },
  contact: {
    hero: {
      eyebrow: '联系我们',
      title: '一起探讨肿瘤治疗的未来。',
      intro: '我们欢迎投资人、潜在合作伙伴与学术合作者的垂询。为便于处理您的留言，请简要说明您的意向。',
    },
    details: {
      heading: '联系方式',
      addressLabel: '公司地址（香港）',
      address: '香港薄扶林沙宣道21号实验室大楼L3-61',
      emails: [
        { label: '业务合作', value: 'enhe00000@connect.hku.hk' },
        { label: '投资人关系', value: 'enhe00000@connect.hku.hk' },
        { label: '媒体联系', value: 'enhe00000@connect.hku.hk' },
      ],
      phoneLabel: '电话',
      phone: '+852 84970818',
    },
    form: {
      heading: '发送留言',
      name: '姓名',
      email: '邮箱',
      message: '留言内容',
      submit: '发送留言',
      note: '我们通常在数个工作日内回复所有垂询。',
    },
  },
  footer: {
    tagline: 'AI精准新抗原与病原抗原，调动身体免疫记忆对抗癌症。',
    navHeading: '网站导航',
    contactHeading: '联系方式',
    disclaimer:
      '本网站信息仅供一般公司及研究概述之用，不构成医疗建议，亦不推广或声称任何已批准的疗法产品。',
    copyright: '© 2026 NOVOMI VAX 版权所有。',
  },
  common: {
    learnMore: '了解更多',
  },
};
