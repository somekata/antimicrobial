const mechanism = ["細胞壁合成阻害","蛋白合成阻害","DNA合成阻害","細胞膜傷害","外膜傷害","その他"];

const class1 = ["抗菌薬","抗真菌薬"];
const antibioticClass = ["βラクタム系薬","キノロン系薬","マクロライド系薬","テトラサイクリン系薬","アミノグリコシド系薬","グリコペプチド系薬","オキサゾリジノン系薬","リポペプチド系薬","ポリペプチド系薬","グリシルサイクリン系薬"];
const antifungalClass = ["アゾール系薬","キャンディン系薬","ポリエン系薬"];
const blactums = ["ペニシリン系薬","セフェム系薬","カルバペネム系薬","ペネム系薬","モノバクタム系薬","β-ラクタマーゼ阻害剤配合"];
const penicillins = ["古典的ペニシリン系薬","アミノペニシリン系薬","ペニシリナーゼ耐性ペニシリン系薬","抗緑膿菌作用のあるペニシリン系薬"];
const cephems = ["セファロスポリン系薬（第一世代）","セファロスポリン系薬（第二世代）","セファロスポリン系薬（第三世代・抗緑膿菌作用なし）","セファロスポリン系薬（第三世代・抗緑膿菌作用あり）","セファロスポリン系薬（第四世代）","セファロスポリン系薬（未分類）","セファマイシン系薬","オキサセフェム系薬","セファロスポリン系薬"];
const macrolides = ["14員環","15員環"]

const route = ["経口", "筋肉注射", "静脈内注射","その他"];
const spectrumBacteria =["MSSA","<i>Streptococcus</i> sp.","<i>E. faecalis</i>","Anaerobes (Oral)","<i>B. fragilis</i>","<i>Moraxella</i> / <i>H. influenzae</i>","<i>E. coli / K. pneumoniae</i>","<i>Enterobacter</i> / <i>Serratia</i>/<i>Citrobacter</i>","<i>P. aeruginosa</i>","<i>A. baumannii</i>","Atypical","ESBL","MRSA","PRSP","VRE","CRE"];
const aware = ["Access","Watch","Reserve","非該当"];

function asc(drug){

}
const drugSpecifiedCategory = ["特定抗菌薬","広域抗菌薬","抗MRSA薬","新薬"];

function parseRange(rangeStr, array) {
  const indices = [];
  const parts = rangeStr.split(",");

  parts.forEach((part) => {
    if (part.includes("-")) {
      // 範囲指定 (例: 5-10)
      const [start, end] = part.split("-").map(Number);
      for (let i = start; i <= end; i++) {
        indices.push(i);
      }
    } else {
      // 単一の値 (例: 1, 2, 12)
      indices.push(Number(part));
    }
  });

  return indices.map((index) => array[index]);
}

// spectrumBacteria 配列から指定範囲を取得　関数の確認
/*
const spectrum = parseRange("1,2,5-10,12", spectrumBacteria);
console.log(spectrum);
*/

// 抗菌薬データ
const data = [
  {
    name: ["アンピシリン","Ampicillin"],
    abbreviation:["ABPC","AMP"],
    original:["ビクシリン"],
    categories: ["抗菌薬", "βラクタム系薬", "ペニシリン系薬", "アミノペニシリン系薬"],
    specifiedCategories: [],
    mechanism: mechanism[0],
    route: [route[0], route[1], route[2]],
    spectrum: parseRange("1-3,5,6", spectrumBacteria),
    detail: [
      "アミノ基を有する半合成ペニシリン系薬で、グラム陰性菌に対する抗菌スペクトルが拡大している。",
      "抗緑膿菌作用はない。",
      "ペニシリナーゼにより分解される。",
    ],
    reference:[
      "医薬品インタビューフォーム（経口）","医薬品インタビューフォーム（注射）"
    ],
    url:[
      "https://pins.japic.or.jp/pdf/medical_interview/IF00005835.pdf","https://pins.japic.or.jp/pdf/medical_interview/IF00006910.pdf",
    ],
    asc:[],
    asi:[2],
    aware:[aware[0]]    
  },
  {
      name: ["アモキシシリン","Amoxicillin"],
      abbreviation:["AMPC"],
      categories: [class1[0], antibioticClass[0],blactums[0], penicillins[1]],
      specifiedCategories: [],
      mechanism: mechanism[0],
      route: [route[0], route[1], route[2]],
      spectrum: parseRange("1-3,5,6", spectrumBacteria),
      detail: [
        "アミノ基を有する半合成ペニシリン系薬で、グラム陰性菌に対する抗菌スペクトルが拡大している。",
        "抗緑膿菌作用はない。",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[2],
      aware:[aware[0]]       
    },
    {
      name: ["スルバクタム/アンピシリン","Sulbactum/Ampicillin"],
      abbreviation:["SBT/AMPC"],
      categories: [class1[0], antibioticClass[0],blactums[0], penicillins[1], blactums[5]],
      specifiedCategories: [],
      mechanism: mechanism[0],
      route: [route[0], route[1], route[2]],
      spectrum: parseRange("0-6,9", spectrumBacteria),
      detail: [
        "アミノペニシリンにβ-ラクタマーゼ阻害剤であるスルバクタムを配合した薬剤である。",
        "ペニシリナーゼを産生する口腔内の嫌気性菌に対しても有効である。",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[6],
      aware:[aware[0]]       
    },
    {
      name: ["アモキシシリン/クラブラン酸","Amoxicillin/Clavulanate"],
      abbreviation:["AMPC/CVA"],
      categories: [class1[0], antibioticClass[0],blactums[0], penicillins[1], blactums[5]],
      specifiedCategories: [],
      mechanism: mechanism[0],
      route: [route[0], route[1], route[2]],
      spectrum: parseRange("0-6", spectrumBacteria),
      detail: [
        "アミノペニシリンにβ-ラクタマーゼ阻害剤であるクラブラン酸を配合した薬剤である。",
        "ペニシリナーゼを産生する口腔内の嫌気性菌に対しても有効である。",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[6],
      aware:[aware[0]]
    },
    {
      name: ["ピペラシリン","Piperacillin"],
      abbreviation:["PIPC"],
      categories: [class1[0], antibioticClass[0],blactums[0], penicillins[3]],
      specifiedCategories: [],
      mechanism: mechanism[0],
      route: [route[0], route[1], route[2]],
      spectrum: parseRange("1-3,5-8", spectrumBacteria),
      detail: [
        "抗緑膿菌作用のあるペニシリン系薬である。",
        "BLNAR（β-ラクタマーゼ非産生ペニシリン耐性インフルエンザ菌）にも有効である。",
        "BLPAR（β-ラクタマーゼ産生アンピシリン耐性インフルエンザ菌）やBLPACR（β-ラクタマーゼ産生アモキシシリン/クラブラン酸耐性インフルエンザ菌）などのβ-ラクタマーゼ産生菌には無効である。",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[4],
      aware:[aware[1]]
    },
    {
      name: ["タゾバクタム/ピペラシリン","Tazobactum/Piperacillin"],
      abbreviation:["TAZ/PIPC"],
      categories: [class1[0], antibioticClass[0],blactums[0], penicillins[3],[drugSpecifiedCategory[0],drugSpecifiedCategory[1]]],
      specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1]],
      mechanism: mechanism[0],
      route: [route[0], route[1], route[2]],
      spectrum: parseRange("0-9,11", spectrumBacteria),
      detail: [
        "抗緑膿菌作用のあるペニシリン系薬であるピペラシリンに、β-ラクタマーゼ阻害剤であるタゾバクタムを配合した薬剤である。",
        "BLPAR（β-ラクタマーゼ産生アンピシリン耐性インフルエンザ菌）、BLNAR（β-ラクタマーゼ非産生アンピシリン耐性インフルエンザ菌）、BLPACR（β-ラクタマーゼ産生アモキシリン/クラブラン酸耐性インフルエンザ菌）にも有効である。",
        "嫌気性菌やESBL（基質特異性拡張型β-ラクタマーゼ）産生菌にも有効である。"
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[10],
      aware:[aware[0]]       
    },
  {
      name: ["セファゾリン","Cefazolin"],
      abbreviation:["CEZ"],
      categories: [class1[0], antibioticClass[0], blactums[1], cephems[0]],
      specifiedCategories: [],
      mechanism: "細胞壁合成阻害",
      route: ["経口", "筋肉注射", "静脈内注射"],
      spectrum: parseRange("0,1,6", spectrumBacteria),
      detail: [
        "メチシリン感性黄色ブドウ球菌（MSSA）に有効な第一世代セファロスポリン系薬である。",
        "グラム陰性菌に対する抗菌スペクトルは第二～第四世代に比べて狭い。",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[3],
      aware:[aware[0]]    
    },
    {
      name: ["セフメタゾール","Cefmetazole"],
      abbreviation:["CMZ"],
      categories: [class1[0], antibioticClass[0], blactums[1], cephems[6]],
      specifiedCategories: [],
      mechanism: mechanism[0],
      route: [route[2]],
      spectrum: parseRange("0,1,3-6,11", spectrumBacteria),
      detail: [
        "スペクトルは第二世代セファロスポリン系薬に近いが、嫌気性菌にも対する活性を有する点でセファロスポリン系薬とは異なる。",
        "ESBL（基質特異性拡張型β-ラクタマーゼ）産生菌にも有効性が期待できるが、カルバペネム系薬に比べて弱い。",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[],
      aware:[aware[1]]    
    },
    {
      name: ["セフトリアキソン","Ceftriaxone"],
      abbreviation:["CTRX"],
      categories: [class1[0], antibioticClass[0], blactums[1], cephems[2]],
      specifiedCategories: [],
      mechanism: "細胞壁合成阻害",
      route: ["経口", "筋肉注射", "静脈内注射"],
      spectrum: parseRange("0,1,5-7,13", spectrumBacteria),
      detail: [
        "メチシリン感受性黄色ブドウ球菌（MSSA）などのグラム陽性菌から、インフルエンザ菌などのグラム陰性菌に有効であるが、抗緑膿菌作用はない。",
        "準備中",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[5],
      aware:[aware[1]]
    },
    {
      name: ["セフタジジム","Ceftazidime"],
      abbreviation:["CAZ"],
      categories: [class1[0], antibioticClass[0], blactums[1], cephems[3]],
      specifiedCategories: [],
      mechanism: mechanism[0],
      route: [route[2]],
      spectrum: parseRange("1,5-9", spectrumBacteria),
      detail: [
        "抗緑膿菌作用を有するが、メチシリン感受性黄色ブドウ球菌（MSSA）などのグラム陽性菌に対する活性は弱い。",
        "準備中",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[6],
      aware:[aware[1]]    
    },

    {
      name: ["セフタジジム/アビバクタム","Ceftazidime/Avibactam"],
      abbreviation:["CAZ/AVI"],
      categories: [class1[0], antibioticClass[0], blactums[1], [cephems[3],drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]]],
      specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]],
      mechanism: mechanism[0],
      route: [route[2]],
      spectrum: parseRange("1,5-9,15", spectrumBacteria),
      detail: [
        "抗緑膿菌作用のある第三世代セファロスポリン系薬であるセフタジジムに、広範囲のβ-ラクタマーゼを阻害するアビバクタムを配合した薬剤である。",
        "準備中",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[10],
      aware:[aware[2]] // Reserve
    },
        {
      name: ["フロモキセフ","Flomoxef"],
      abbreviation:["FMOX"],
      categories: [class1[0], antibioticClass[0], blactums[1], cephems[7]],
      specifiedCategories: [],
      mechanism: mechanism[0],
      route: [route[2]],
      spectrum: parseRange("0,1,3-6,11", spectrumBacteria),
      detail: [
        "スペクトルは第三世代セファロスポリン系薬に近いが、嫌気性菌にも対する活性を有する点でセファロスポリン系薬とは異なる。",
        "ESBL（基質特異性拡張型β-ラクタマーゼ）産生菌にも有効性が期待できるが、カルバペネム系薬に比べて弱い。",
        "準備中",
      ],
      reference:[
      ],
      url:[
        "",
      ],
      asc:[],
      asi:[],
      aware:[aware[1]]
    },
  {
    name: ["セフェピム", "Cefepime"],
    abbreviation: ["CFPM"],
    categories: [class1[0], antibioticClass[0], blactums[1], [cephems[4],drugSpecifiedCategory[0],drugSpecifiedCategory[1]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1]],
    mechanism: mechanism[0],
    route: [route[2]],
    spectrum: parseRange("0,1,5-9,13", spectrumBacteria),
    detail: [
      "第一世代セファロスポリン系薬と抗緑膿菌作用のある第三世代セファロスポリン系薬を合わせたスペクトルを有する。嫌気性菌に対する活性は弱い（他のセファロスポリン系薬同様）。",
      "発熱性好中球減少症（Febrile neutropenia, FN）に対する第一選択薬である。",
      "セフピロムやセフォゾプランも第四世代セファロスポリン系薬であり、ほぼスペクトルは同様である。",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc: [],
    asi: [8],
    aware: [aware[1]] // Watch
  },
  {
    name: ["タゾバクタム/セフトロザン", "Tazobactam/Ceftolozane"],
    abbreviation: ["TAZ/CTLZ"],
    categories: [class1[0], antibioticClass[0], blactums[1], [cephems[5],drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]],
    mechanism: mechanism[0],
    route: [route[2]],
    spectrum: parseRange("1,3-8,11", spectrumBacteria),
    detail: [
      "抗緑膿菌作用のあるセファロスポリン系薬であるセフトロザンに、β-ラクタマーゼ阻害剤であるタゾバクタムを配合した薬剤である。",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc: [],
    asi: [8],
    aware: [aware[1]] // Watch
  }, 
  {
    name: ["セフィデロコル","Cefiderocol"],
    abbreviation:["CFDC"],
    categories: [class1[0], antibioticClass[0], blactums[1], [cephems[5],drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]],
    mechanism: mechanism[0],
    route: [route[2]],
    spectrum: parseRange("5-9,11,15", spectrumBacteria),
    detail: [
      "鉄イオンを利用して細菌内に取り込まれる新規のセファロスポリン系薬である。",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc: ["未設定"],
    asi: [9],
    aware: [aware[2]] // Reserve
  },   
  {
    name: ["メロペネム"],
    abbreviation:["MEPM"],
    categories: [class1[0], antibioticClass[0], blactums[2],[drugSpecifiedCategory[0],drugSpecifiedCategory[1]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1]],
    mechanism: "細胞壁合成阻害",
    route: ["静脈内注射"],
    spectrum: parseRange("0-9,11,13", spectrumBacteria),
    detail: [
      "グラム陽性、グラム陰性、嫌気性菌までカバーする広域抗菌薬の代表である。",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[10],
    aware:[aware[1]]
  },
  {
    name:["イミペネム/シラスタチン"],
    abbreviation:["IPM/CS"],
    categories: [class1[0], antibioticClass[0], blactums[2],[drugSpecifiedCategory[0],drugSpecifiedCategory[1]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1]],
    mechanism: "細胞壁合成阻害",
    route: ["静脈内注射"],
    spectrum: parseRange("0-9,11,13", spectrumBacteria),
    detail: [
      "グラム陽性、グラム陰性、嫌気性菌までカバーする広域抗菌薬の代表である。",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:["未設定"],
    aware:[aware[1]]
  },
    {
    name:["イミペネム/シラスタチン/レレバクタム"],
    abbreviation:["IPM/CS/REL"],
    categories: [class1[0], antibioticClass[0], blactums[2],[drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[1],drugSpecifiedCategory[3]],
    mechanism: "細胞壁合成阻害",
    route: ["静脈内注射"],
    spectrum: parseRange("0-9,11,13,14", spectrumBacteria),
    detail: [
      "イミペネム/シラスタチンにclass Aのβ-ラクタマーゼを阻害するレレバクタムを配合し、メタロ型以外のカルバペネマーゼ産生菌に対しても有効性が期待できる。",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:["未設定"],
    asi:["未設定"],
    aware:[aware[2]]
  },
  {
    name: ["シプロフロキサシン","Ciprofloxacin"],
    abbreviation:["CPFX"],
    categories: [class1[0], antibioticClass[1], [drugSpecifiedCategory[0],drugSpecifiedCategory[1]]],
    specifiedCategories: [],
    mechanism: mechanism[2],
    route: [route[0],route[2]],
    spectrum: parseRange("0,5-12", spectrumBacteria),
    detail: [
      "β-ラクタム系薬が苦手とするレジオネラなどの非定型菌に対して有効性が期待できる。",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[9],
    aware:[aware[1]]
  },
  {
    name: ["レボフロキサシン"],
    abbreviation:["LVFX"],
    categories: [class1[0], antibioticClass[1],[drugSpecifiedCategory[0],drugSpecifiedCategory[1]]],
    specifiedCategories: [],
    mechanism: mechanism[2],
    route: [route[0],route[2]],
    spectrum: parseRange("0-2,5-13", spectrumBacteria),
    detail: [
      "静注の場合には、肺炎球菌に有効性が期待できる。",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[11],
    aware:[aware[1]]
  },
  {
    name: ["エリスロマイシン"],
    abbreviation:["EM"],
    categories: [class1[0], antibioticClass[2],macrolides[0]],
    specifiedCategories: [],
    mechanism: mechanism[1],
    route: [route[0],route[2]],
    spectrum: parseRange("0,1,10", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[2],
    aware:[aware[1]]
    },
  {
    name: ["クラリスロマイシン"],
    abbreviation:["CAM"],
    categories: [class1[0], antibioticClass[2],macrolides[0]],
    specifiedCategories: [],
    mechanism: mechanism[1],
    route: [route[0],route[2]],
    spectrum: parseRange("0,1,5,10,12", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[4 ],
    aware:[aware[1]]
  },
  {
    name: ["アジスロマイシン"],
    abbreviation:["AZM"],
    categories: [class1[0], antibioticClass[2],macrolides[1]],
    specifiedCategories: [],
    mechanism: mechanism[1],
    route: [route[0],route[2]],
    spectrum: parseRange("0,1,3,5,6,10", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[4],
    aware:[aware[1]]
  },

  {
    name: ["アルベカシン","Arbekacin"],
    abbreviation:["ABK"],
    categories: [class1[0], antibioticClass[4],[drugSpecifiedCategory[0],drugSpecifiedCategory[2]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[2]],
    mechanism: mechanism[1],
    route: [route[2]],
    spectrum: parseRange("0-2,12-14", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[],
    aware:[aware[1]]
  },
  {
    name: ["テトラサイクリン","Tetracycline"],
    abbreviation:["TC"],
    categories: [class1[0], antibioticClass[3]],
    specifiedCategories: [],
    mechanism: mechanism[1],
    route: [route[0],route[2]],
    spectrum: parseRange("0-2,5,6,10", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[],
    aware:[aware[1]]
  },
  {
    name: ["ミノサイクリン","Minocycline"],
    abbreviation:["MINO"],
    categories: [class1[0], antibioticClass[3]],
    specifiedCategories: [],
    mechanism: mechanism[1],
    route: [route[0],route[2]],
    spectrum: parseRange("0-3,5,6,12-14", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[8],
    aware:[aware[1]]
  },
  {
    name: ["ドキシサイクリン","Doxycycline"],
    abbreviation:["DOXY"],
    categories: [class1[0], antibioticClass[3]],
    specifiedCategories: [],
    mechanism: mechanism[1],
    route: [route[0],route[2]],
    spectrum: parseRange("0-3,5,6,10,12-14", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[8],
    aware:[aware[1]]
  },
    {
    name: ["チゲサイクリン","Tigecycline"],
    abbreviation:["TGC"],
    categories: [class1[0], antibioticClass[9],drugSpecifiedCategory[0]],
    specifiedCategories: [drugSpecifiedCategory[0]],
    mechanism: mechanism[1],
    route: [route[2]],
    spectrum: parseRange("0-7,9-15", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[13],
    aware:[aware[2]]
  },
  {
    name:["バンコマイシン","Vancomycin"],
    abbreviation:["VCM"],
    original:[],
    categories: [class1[0],antibioticClass[5],[drugSpecifiedCategory[0],drugSpecifiedCategory[2]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[2]],
    mechanism: mechanism[3],
    route: [route[0]],
    spectrum: parseRange("1-3,12,13", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[5],
    aware:[aware[1]]
  },
  {
    name:["テイコプラニン","Teicoplanin"],
    abbreviation:["TEIC"],
    original:[],
    categories: [class1[0],antibioticClass[5],[drugSpecifiedCategory[0],drugSpecifiedCategory[2]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[2]],
    mechanism: mechanism[3],
    route: [route[0]],
    spectrum: parseRange("1-3,12,13", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[],
    aware:[aware[1]]
  },
  {
    name:["リネゾリド","Linezolid"],
    abbreviation:["LZD"],
    original:[],
    categories: [class1[0],antibioticClass[6],[drugSpecifiedCategory[0],drugSpecifiedCategory[2]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[2]],
    mechanism: mechanism[3],
    route: [route[0]],
    spectrum: parseRange("1-3,12-15", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[6],
    aware:[aware[2]]
  },
  {
    name:["テジゾリド","Tedizolid"],
    abbreviation:["TZD"],
    original:[],
    categories: [class1[0],antibioticClass[6],[drugSpecifiedCategory[0],drugSpecifiedCategory[2]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[2]],
    mechanism: mechanism[3],
    route: [route[0]],
    spectrum: parseRange("1-3,12-15", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[4],
    aware:[aware[2]]
  },
  {
    name:["ダプトマイシン","Daptomycin"],
    abbreviation:["DAP"],
    original:[],
    categories: [class1[0],antibioticClass[7],[drugSpecifiedCategory[0],drugSpecifiedCategory[2]]],
    specifiedCategories: [drugSpecifiedCategory[0],drugSpecifiedCategory[2]],
    mechanism: mechanism[3],
    route: [route[0]],
    spectrum: parseRange("1-3,12-15", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[6],
    aware:[aware[2]]
  },
  {
    name: ["コリスチン","Colistin"],
    abbreviation:["COL","COL"],
    original:["オルドレブ"],
    categories: [class1[0], antibioticClass[8],drugSpecifiedCategory[0]],
    specifiedCategories: [drugSpecifiedCategory[0]],
    mechanism: mechanism[4],
    route: [route[2]],
    spectrum: parseRange("5,6,8,9,11,15", spectrumBacteria),
    detail: [
      "準備中",
      "準備中",
      "準備中",
    ],
      reference:[
      ],
      url:[
        "",
      ],
    asc:[],
    asi:[7],
    aware:[aware[2]]    
  },
  {
    name: ["フルコナゾール","Fluconazole"],
    abbreviation:["FLCZ"],
    categories: ["抗真菌薬", "トリアゾール系薬"],
    specifiedCategories: [],
    mechanism: "エルゴステロール合成阻害",
    route: ["経口","静脈内注射"],
    spectrum: ["カンジダ","クリプトコックス"],
    detail: [
      "スペクトルは低いが、安全性は高い",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  },
  {
    name: ["ホスフルコナゾール","Fosfluconazole"],
    abbreviation:["F-FLCZ"],
    categories: ["抗真菌薬", "トリアゾール系薬"],
    specifiedCategories: [],
    mechanism: "エルゴステロール合成阻害",
    route: ["静脈内注射"],
    spectrum: ["カンジダ","クリプトコックス"],
    detail: [
      "フルコナゾールのプロドラッグ",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]] 
  },
  {
    name: ["イトラコナゾール","Itraconazole"],
    abbreviation:["ITCZ"],
    categories: ["抗真菌薬", "トリアゾール系薬"],
    specifiedCategories: [],
    mechanism: "エルゴステロール合成阻害",
    route: ["経口","静脈内注射"],
    spectrum: ["カンジダ","アスペルギルス","クリプトコックス"],
    detail: [
      "フルコナゾールよりもスペクトルが広い",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  },
  {
    name: ["ボリコナゾール","Voriconazole"],
    abbreviation:["VRCZ"],
    categories: ["抗真菌薬", "トリアゾール系薬"],
    specifiedCategories: [],
    mechanism: "エルゴステロール合成阻害",
    route: ["経口","静脈内注射"],
    spectrum: ["カンジダ","アスペルギルス","クリプトコックス"],
    detail: [
      "イトラコナゾールよりもスペクトルが広い",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  },
  {
    name: ["ポサコナゾール","Posaconazole"],
    abbreviation:["PSCZ"],
    categories: ["抗真菌薬", "トリアゾール系薬"],
    specifiedCategories: [],
    mechanism: "エルゴステロール合成阻害",
    route: ["経口","静脈内注射"],
    spectrum: ["カンジダ","アスペルギルス","クリプトコックス","ムーコル"],
    detail: [
      "トリアゾール系薬の中では極めてスペクトルが広い",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  },
  {
    name: ["イサブコナゾール","Isavuconazole"],
    abbreviation:["ISBZ"],
    categories: ["抗真菌薬", "トリアゾール系薬"],
    specifiedCategories: [],
    mechanism: "エルゴステロール合成阻害",
    route: ["経口"],
    spectrum: ["カンジダ","アスペルギルス","クリプトコックス","ムーコル"],
    detail: [
      "トリアゾール系薬の中では極めてスペクトルが広い",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  },
  {
    name: ["アムホテリシンB","Amphotericin B"],
    abbreviation:["AMPH-B"],
    categories: ["抗真菌薬", "ポリエン系薬"],
    specifiedCategories: [],
    mechanism: "細胞膜傷害",
    route: ["静脈内注射"],
    spectrum: ["カンジダ","アスペルギルス","クリプトコックス","ムーコール"],
    detail: [
      "最もスペクトルが広いが、副作用も多い",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  },
  {
    name: ["ミカファンギン","Micafungin"],
    abbreviation:["MCFG"],
    categories: ["抗真菌薬", "キャンディン系薬"],
    specifiedCategories: [],
    mechanism: "細胞壁合成阻害",
    route: ["静脈内注射"],
    spectrum: ["カンジダ","アスペルギルス"],
    detail: [
      "準備中",
      "詳細情報1:準備中",
      "詳細情報2:準備中",
  ],
      reference:[
      ],
      url:[
        "",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  },
  {
    name: ["カスポファンギン","Caspofungin"],
    abbreviation:["CPFG"],
    categories: ["抗真菌薬", "キャンディン系薬"],
    specifiedCategories: [],
    mechanism: "細胞壁合成阻害",
    route: ["静脈内注射"],
    spectrum: ["カンジダ","アスペルギルス"],
    detail: [
      "成人および小児の「真菌感染が疑われる発熱性好中球減少症」の適応を有する唯一のキャンディン系薬である。",
      "ローディングドーズにより、初日から目標トラフ値を達成できる。",
      "真菌感染が疑われる発熱性好中球減少症では、通常、カスポファンギンとして投与初日に 70mg を、投与 2 日目以降は 50mg を 1 日 1 回投与する。本剤は約 1 時間かけて緩徐に点滴静注する。"
  ],
      reference:[
        "医薬品インタビューフォーム"
      ],
      url:[
        "https://www.msdconnect.jp/wp-content/uploads/sites/5/2021/02/if_cancidas_inf.pdf",
      ],
  asc:["非該当"],
  asi:["非該当"],
  aware:[aware[3]]
  }
];

// asc を設定する関数
function setAsc(dataArray) {
  dataArray.forEach(drug => {
    // asc に既存の値がない場合のみ計算して設定
    if (!drug.asc || drug.asc.length === 0) {
      drug.asc = [drug.spectrum.length];
    }
  });
}

// asc を設定
setAsc(data);

const categoriesInfo = {
  "抗菌薬": `抗菌薬は原則として細菌に作用する治療薬である。<p class='whiteback'><strong>主な抗菌薬の種類:</strong><ul class='explain'>${antibioticClass.map(item => `<li>${item}</li>`).join("")}</ul></p><p class='whiteback'><strong>その他の分類:</strong><ul class='explain'>${drugSpecifiedCategory.map(item => `<li>${item}</li>`).join("")}</ul></p>`,
  "βラクタム系薬": `βラクタム系薬は細胞壁合成阻害を作用機序とする最大のカテゴリーである。${blactums.join("、")}に分類される。<br>　さらに、ペニシリン系薬は、${penicillins.join("、")}に、<br>　セフェム系薬は${cephems.join("、")}に分類される。<p class='whiteback'><strong>主なβラクタム系薬の種類:</strong> ${blactums.join("、")}</p>`,
  "ペニシリン系薬": `ペニシリン系薬は、βラクタム系薬の1系統で、さらに、${penicillins.join("、")}に分類される。また、${blactums[5]}もある。`,
  "アミノペニシリン系薬": "アミノ基を持つことで、一部のグラム陰性菌にもスペクトルを広げた半合成のペニシリン系薬。",
  "カルバペネム系薬": "カルバペネム系薬は、βラクタマーゼに安定であり、最も広域のβラクタム系薬である。広域抗菌薬の代表でもある。",
  "セフェム系薬": `${blactums[1]}は、ペニシリナーゼに安定であり、スペクトルはおおむね${blactums[0]}と${blactums[2]}の中間的な位置づけである。ただし、世代や系統などによってスペクトルの広さが異なる。${parseRange("8", cephems)}、${parseRange("6", cephems)}、${parseRange("7", cephems)}}に分類され、${parseRange("8", cephems)}はさらに、第一世代から第四世代*までに分類される。世代未分類として、${data[9].name[0]}がある。<br>*海外では、抗MRSA薬として第五世代に分けることがある。`,
  "第三世代セファロスポリン系薬": "第三世代セファロスポリン系薬は、比較的スペクトルは広いが、スペクトルがグラム陽性よりの抗緑膿菌作用のない薬剤とグラム陰性菌よりの抗緑膿菌作用のある薬剤に分類される。前者の代表がセフトリアキソン、後者の代表がセフタジジムである。",
  "特定抗菌薬":"「適正使用のために特に定めた抗菌薬」というニュアンスで用いられるが、明確な定義はない。ただし、一般に、広域抗菌薬、抗MRSA薬を含む。それ以外に、コリスチンやチゲサイクリンのような多剤耐性菌に使用される特殊な抗菌薬を含む。",
  "抗MRSA薬": "メチシリン耐性黄色ブドウ球菌感染症に対する治療薬の総称で、4系統6薬剤が知られている。",
  "広域抗菌薬": "特定抗菌薬の一つで、グラム陽性からグラム陰性まで広く作用する抗菌薬の総称である。一般に、タゾバクタム/ピペラシリン、第四世代セファロスポリン系薬、カルバペネム系薬、フルオロキノロン系薬を指す。",
  "新薬":"特にグラム陰性の「治療困難な耐性（Difficult to Treat Resistance, DTR）」に対する抗菌薬を指す。便宜上の分類であり、今後変更されうる。",
  "キノロン系薬":"通常はフルオロキノロン系薬を指す。",
  "マクロライド系薬": "マクロライド系薬は、50Sリボソームに結合してタンパク質合成を阻害する抗菌薬である。代表的な薬剤として、エリスロマイシン、クラリスロマイシン、アジスロマイシンがある。",
  "アミノグリコシド系薬": "アミノグリコシド系薬は、30Sリボソームに結合してタンパク質合成を阻害する抗菌薬である。代表的な薬剤として、ゲンタマイシン、アミカシン、ストレプトマイシン、アルベカシンがある。",
  "グリコペプチド系薬": "グリコペプチド系薬は、細胞壁合成阻害を作用機序とする抗菌薬である。代表的な薬剤として、バンコマイシン、テイコプラニンがある。",
  "オキサゾリジノン系薬": "オキサゾリジノン系薬は、50Sリボソームに結合してタンパク質合成を阻害する抗菌薬である。代表的な薬剤として、リネゾリド、テジゾリドがある。",
  "リポペプチド系薬": "リポペプチド系薬は、細胞膜傷害を作用機序とする抗菌薬である。代表的な薬剤として、ダプトマイシンがある。",
  "ポリペプチド系薬": "ポリペプチド系薬は、LPSを標的として外膜傷害を作用機序とする抗菌薬である。代表的な薬剤として、コリスチンがある。ポリミキシン系薬とも呼ばれる。",
  "抗真菌薬": `抗真菌薬は、真菌に作用する治療薬である。<p class='whiteback'><strong>主な抗真菌薬の種類:</strong><ul class='explain'>${["トリアゾール系薬","ポリエン系薬","キャンディン系薬"].map(item => `<li>${item}</li>`).join("")}</ul></p>`,
  "トリアゾール系薬": "トリアゾール系薬は、エルゴステロール合成阻害を作用機序とする抗真菌薬である。代表的な薬剤として、フルコナゾール、イトラコナゾール、ボリコナゾール、ポサコナゾール、イサブコナゾールがある。",
  "ポリエン系薬": "ポリエン系薬は、細胞膜傷害を作用機序とする抗真菌薬である。代表的な薬剤として、アムホテリシンBがある。",
  "キャンディン系薬": "キャンディン系薬は、細胞壁合成阻害を作用機序とする抗真菌薬である。代表的な薬剤として、ミカファンギン、カスポファンギンがある。",
  "AWaRe分類とは":"AWaRe分類は、以下で説明する、Access、Watch、Reserveの頭文字をとったもので、抗菌薬の適正使用を促進するための分類システムである。<br><a href='https://amrcrc.ncgm.go.jp/surveillance/020/AWaRe_excel_2019_ver.4.1.xlsx' target='_blank'>AWaRe分類リスト-抗菌薬種類別</a><ul class='explain'><li>Access（アクセス）：広く使用される抗菌薬で、効果的かつ安全とされている。</li><li>Watch（ウォッチ）：耐性リスクが高いため、慎重に使用すべき抗菌薬である。</li><li>Reserve（リザーブ）：多剤耐性病原体に対してのみ使用すべき、最後の手段となる抗菌薬である。</li></ul>",
  "DASCとは":"DASC（Days of Antibiotic Spectrum Coverage）は、ASC（Antibiotic Spectrum Coverage, その抗菌薬がカバーするスペクトル）*1の消費日数を指す。<ol>参考文献<li>Kakiuchi S et al. Days of Antibiotic Spectrum Coverage: A Novel Metric for Inpatient Antibiotic Consumption. Clin Infect Dis. 2022 Sep10;75(4):567-576.</li></ol>",
  "ASIとは":"ASI（Antibiotic Spectrum Index）は、抗菌薬ごとのスペクトルの広さをスコア化したものである。病院間比較や研究における抗菌薬使用パターンのベンチマークとして開発された。<ol>参考文献<li>https://www.gpas-online.org/antibiotic-spectrum-index/</li><li>Zombori L et al. Antibiotic spectrum index as an antimicrobial stewardship tool in paediatric intensive care settings. Int J Antimicrob Agents. 2023 Feb;61(2):106710.</li><li>Gerber JS et al. Development and Application of an Antibiotic Spectrum Index for Benchmarking Antibiotic Selection Patterns Across Hospitals. Infect Control Hosp Epidemiol. 2017 Aug;38(8):993-997.</li></ol>",
};

/*
const antimicrobials = [
  { name: ["アンピシリン", "Ampicillin"], abbreviation:["ABPC","AMP"],class:[class1[0],class2[0],class3[0],class4[0]],original:["ビクシリン"],application:[],spectrum:["PSSP","<i>Esherrichia coli</i>","BLNAS",""],route:["経口","筋肉注射/静脈内注射"],dose:["250～500mgを1日4〜6回","(成人)<br>筋肉内注射の場合: 1回250〜1000mg（力価）を1日2〜4回<br>静脈内注射の場合: 1日量1〜2g（力価）を1〜2回静脈内注射または1日量1〜4g（力価）を1〜2回に分けて点滴注射<br>(小児)1日100〜200mg（力価）/kgを3〜4回に分けて静脈内注射または点滴注射。投与量の上限は1日400mg（力価）/kgまで。<br>(新生児)1日50〜200mg（力価）/kgを2〜4回に分けて静脈内注射または点滴静注。"],adme:[],ref:["インタビューフォーム"],url:["https://www.kegg.jp/medicus-bin/japic_med?japic_code=00057170"],asc: 5, classification: "Access" },
  { name: ["スルバクタム/アンピシリン", "Sulbactum/Ampicillin"], abbreviation:["ABPC","AMP"],asc: 8, classification: "Access" },
  { name: ["ピペラシリン", "PIPC"], asc: 7, classification: "Watch" },
  { name: ["タゾバクタム/ピペラシリン", "TAZ/PIPC"], asc: 11, classification: "Watch" },
  { name: ["セファゾリン", "CEZ"], asc: 3, classification: "Access" },
  { name: ["セフトリアキソン", "CTRX"], asc: 6, classification: "Watch" },
  { name: ["セフタジジム", "CAZ"], asc: 6, classification: "Watch" },
  { name: ["セフェピム", "CFPM"], asc: 8, classification: "Watch" },
  { name: ["メロペネム", "MEPM"], asc: 12, classification: "Watch" },
  { name: ["バンコマイシン", "VCM"], asc: 5, classification: "Watch" },
  { name: ["リネゾリド", "LZD"], asc: 6, classification: "Reserve" },
  { name: ["テジゾリド", "TZD"], asc: 6, classification: "Reserve" },
  { name: ["ダプトマイシン", "DAP"], asc: 6, classification: "Reserve" },
  { name: ["シプロフロキサシン", "CPFX"], asc: 9, classification: "Watch" },
  { name: ["アジスロマイシン", "AZM"], asc: 6, classification: "Watch" },
  { name: ["コリスチン", "COL"], asc: 6, classification: "Reserve" },
  { name: ["メトロニダゾール", "MTZ"], asc: 2, classification: "Access" },
];
*/