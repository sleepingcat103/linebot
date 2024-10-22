const pkmns = require('../pkmnDB/pkmnData');
const pkmnMoves = require('../pkmnDB/pkmnMoves');
const allMoves = require('../pkmnDB/allMoves');

class SeededRandom {
  constructor(seed) {
    // 將字符串種子轉換為數字
    this.seed = this.stringToSeed(seed);
    this.m = 0x80000000; // 2^31
    this.a = 1103515245;
    this.c = 12345;
  }

  // 將字符串轉換為數字種子
  stringToSeed(seedString) {
    let seed = 0;
    for (let i = 0; i < seedString.length; i++) {
      seed = (seed << 5) - seed + seedString.charCodeAt(i); // 使用字符的 ASCII 值生成數字
      seed = seed >>> 0; // 轉換為無符號整數
    }
    return seed;
  }

  // 生成一個隨機數
  random() {
    this.seed = (this.a * this.seed + this.c) % this.m;
    this.c++;
    return this.seed / this.m; // 生成 [0, 1) 之間的隨機數
  }

  // 生成整數範圍內的隨機數
  randomInt(min, max) {
    return Math.floor(this.seeder.random() * (max - min + 1)) + min;
  }
}

class PKMN {
  // Data
  // static types = ['普','格','飛','毒','地','岩','蟲','鬼','鋼','妖','火','水','草','電','超','冰','龍','惡'];
  // static damage = [
  //   [1,1,1,1,1,0.5,1,0,0.5,1,1,1,1,1,1,1,1,1],
  //   [2,1,0.5,0.5,1,2,0.5,0,2,1,1,1,1,1,0.5,2,1,2],
  //   [1,2,1,1,1,0.5,2,1,0.5,1,1,1,2,0.5,1,1,1,1],
  //   [1,1,1,0.5,0.5,0.5,1,0.5,0,1,1,1,2,1,1,1,1,1],
  //   [1,1,0,2,1,2,0.5,1,2,1,2,1,0.5,2,1,1,1,1],
  //   [1,0.5,2,1,0.5,1,2,1,0.5,1,2,1,1,1,1,2,1,1],
  //   [1,0.5,0.5,0.5,1,1,1,0.5,0.5,1,0.5,1,2,1,2,1,1,2],
  //   [0,1,1,1,1,1,1,2,0.5,1,1,1,1,1,2,1,1,0.5],
  //   [1,1,1,1,1,2,1,1,0.5,1,0.5,0.5,1,0.5,1,2,1,1],
  //   [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  //   [1,1,1,1,1,0.5,2,1,2,1,0.5,0.5,2,1,1,2,0.5,1],
  //   [1,1,1,1,2,2,1,1,1,1,2,0.5,0.5,1,1,1,0.5,1],
  //   [1,1,0.5,0.5,2,2,0.5,1,0.5,1,0.5,2,0.5,1,1,1,0.5,1],
  //   [1,1,2,1,0,1,1,1,1,1,1,2,0.5,0.5,1,1,0.5,1],
  //   [1,2,1,2,1,1,1,1,0.5,1,1,1,1,1,0.5,1,1,0],
  //   [1,1,2,1,2,1,1,1,0.5,1,0.5,0.5,2,1,1,0.5,2,1],
  //   [1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,1,2,1],
  //   [1,0.5,1,1,1,1,1,2,0.5,1,1,1,1,1,2,1,1,0.5]
  // ];
  static types = ['普','火','水','草','電','冰','超','岩','地','飛','格','蟲','毒','鬼','龍','惡','鋼','妖'];
  static damage = [
    [1,1,1,1,1,1,1,1,1,1,2,1,1,0,1,1,1,1],
    [1,0.5,2,0.5,1,0.5,1,2,2,1,1,0.5,1,1,1,1,0.5,0.5],
    [1,0.5,0.5,2,2,0.5,1,1,1,1,1,1,1,1,1,1,0.5,1],
    [1,2,0.5,0.5,0.5,2,1,1,0.5,2,1,2,2,1,1,1,1,1],
    [1,1,1,1,0.5,1,1,1,2,0.5,1,1,1,1,1,1,0.5,1],
    [1,2,1,1,1,0.5,1,2,1,1,2,1,1,1,1,1,2,1],
    [1,1,1,1,1,1,0.5,1,1,1,0.5,2,1,2,1,2,1,1],
    [0.5,0.5,2,2,1,1,1,1,2,0.5,2,1,0.5,1,1,1,2,1],
    [1,1,2,2,0,2,1,0.5,1,1,1,1,0.5,1,1,1,1,1],
    [1,1,1,0.5,2,2,1,2,0,1,0.5,0.5,1,1,1,1,1,1,],
    [1,1,1,1,1,1,2,0.5,1,2,1,0.5,1,1,1,0.5,1,2],
    [1,2,1,0.5,1,1,1,2,0.5,2,0.5,1,1,1,1,1,1,1],
    [1,1,1,0.5,1,1,2,1,2,1,0.5,0.5,0.5,1,1,1,1,0.5],
    [0,1,1,1,1,1,1,1,1,1,0,0.5,0.5,2,1,2,1,1],
    [1,0.5,0.5,0.5,0.5,2,1,1,1,1,1,1,1,1,2,1,1,2],
    [1,1,1,1,1,1,0,1,1,1,2,2,1,0.5,1,0.5,1,2],
    [0.5,2,1,0.5,1,0.5,0.5,0.5,2,0.5,2,0.5,0,1,0.5,1,0.5,0.5],
    [1,1,1,1,1,1,1,1,1,1,0.5,0.5,2,1,0,0.5,2,1]
  ];
  static natures = [
    /* 努力 */ [1,1,1,1,1],
    /* 孤独 */ [1,1,1,1,1],
    /* 勇敢 */ [1,1,1,1,1],
    /* 固执 */ [1,1,1,1,1],
    /* 调皮 */ [1,1,1,1,1],
    /* 大胆 */ [0.9,1.1,1,1,1],
    /* 坦率 */ [0.9,1,1.1,1,1],
    /* 悠闲 */ [0.9,1,1,1.1,1],
    /* 淘气 */ [0.9,1,1,1,1.1],
    /* 乐天 */ [1.1,0.9,1,1,1],
    /* 胆小 */ [1,0.9,1.1,1,1],
    /* 急躁 */ [1,0.9,1,1.1,1],
    /* 认真 */ [1,0.9,1,1,1.1],
    /* 开朗 */ [1.1,1,0.9,1,1],
    /* 天真 */ [1,1.1,0.9,1,1],
    /* 保守 */ [1,1,0.9,1.1,1],
    /* 稳重 */ [1,1,0.9,1,1.1],
    /* 冷静 */ [1.1,1,1,0.9,1],
    /* 害羞 */ [1,1.1,1,0.9,1],
    /* 马虎 */ [1,1,1.1,0.9,1],
    /* 沉着 */ [1,1,1,0.9,1.1],
    /* 温顺 */ [1.1,1,1,1,0.9],
    /* 狂妄 */ [1,1.1,1,1,0.9],
    /* 慎重 */ [1,1,1.1,1,0.9],
    /* 浮躁 */ [1,1,1,1.1,0.9]
  ];
  static naturesChinese = ['努力','孤獨','勇敢','固執','調皮','大膽','坦率','悠閒','淘氣','樂天','膽小','急躁','認真','開朗','天真','保守','穩重','冷静','害羞','馬虎','沉著','溫馴','狂妄','慎重','浮躁'];

  // seed
  #seed;

  // basic
  #no = 0;
  #name = '';
  #lv = 0;
  #type1 = 0;
  #type2 = 0;
  #nature = '';
  #moves = [];

  // 種族
  #baseHP = 0;
  #baseATK = 0;
  #baseDEF = 0;
  #baseSPATK = 0;
  #baseSPDEF = 0;
  #baseSPD = 0;
  
  // 個體
  #ivHP = 0;
  #ivATK = 0;
  #ivDEF = 0;
  #ivSPATK = 0;
  #ivSPDEF = 0;
  #ivSPD = 0;

  // 努力
  #evHP = 0;
  #evATK = 0;
  #evDEF = 0;
  #evSPATK = 0;
  #evSPDEF = 0;
  #evSPD = 0;

  #prlv = 0;
  #priv = 0;
  #prev = 0;

  constructor(seed = '') {
    let pkmn = pkmns.find(pkmn => pkmns[0] == seed || pkmns[1] == seed);

    if(pkmn) {
      this.#seed = this.#randomSeed();
    } else {
      this.#seed = seed.toLowerCase() || this.#randomSeed();
    }
    this.seeder = new SeededRandom(this.#seed);
    pkmn = pkmn || pkmns[Math.floor(this.seeder.random() * pkmns.length)];

    this.#no = pkmn[0];
    this.#name = pkmn[1];
    this.#type1 = PKMN.types.indexOf(pkmn[2]);
    this.#type2 = pkmn[3] ? PKMN.types.indexOf(pkmn[3]) : 10;
    this.#nature = Math.floor(this.seeder.random() * PKMN.natures.length);
    this.#lv = Math.floor(this.#randomNormal(0, 100));

    this.#moves = this.#getMoves();

    this.#baseHP = pkmn[4];
    this.#baseATK = pkmn[5];
    this.#baseDEF = pkmn[6];
    this.#baseSPATK = pkmn[7];
    this.#baseSPDEF = pkmn[8];
    this.#baseSPD = pkmn[9];

    this.#ivHP = this.#randomNormal(0, 31);
    this.#ivATK = this.#randomNormal(0, 31);
    this.#ivDEF = this.#randomNormal(0, 31);
    this.#ivSPATK = this.#randomNormal(0, 31);
    this.#ivSPDEF = this.#randomNormal(0, 31);
    this.#ivSPD = this.#randomNormal(0, 31);
    
    const evTotal = this.#randomNormal(0, 510);
    const ev = this.#randomSplit(evTotal, 6, 252);

    this.#evHP = ev[0];
    this.#evATK = ev[1];
    this.#evDEF = ev[2];
    this.#evSPATK = ev[3];
    this.#evSPDEF = ev[4];
    this.#evSPD = ev[5];

    this.#prlv = this.#calculatePR(this.#lv, 0, 100);
    this.#priv = Math.round((
      this.#calculatePR(this.#ivHP, 0, 31) +
      this.#calculatePR(this.#ivATK, 0, 31) +
      this.#calculatePR(this.#ivDEF, 0, 31) +
      this.#calculatePR(this.#ivSPATK, 0, 31) +
      this.#calculatePR(this.#ivSPDEF, 0, 31) +
      this.#calculatePR(this.#ivSPD, 0, 31)) / 6);
    this.#prev = this.#calculatePR(evTotal, 0, 510);
  }

  static fight(pokemon1, pokemon2) {

    const maxRounds = 20;
    const pkm1 = pokemon1.getStatus();
    const pkm2 = pokemon2.getStatus();
    const actions = getActions(pkm1.spd, pkm2.spd, maxRounds);
    const rounds = ['戰鬥開始', `-*-*-*-*-`];

    // console.log(pkm1, pkm2)

    // 攻擊方主屬打防守兩屬性
    const type1Ratio = pkm2.type1 == pkm2.type2 ? PKMN.damage[pkm1.type1][pkm2.type1] : PKMN.damage[pkm1.type1][pkm2.type1] * PKMN.damage[pkm1.type1][pkm2.type2];
    const type2Ratio = pkm1.type1 == pkm1.type2 ? PKMN.damage[pkm2.type1][pkm1.type1] : PKMN.damage[pkm2.type1][pkm1.type1] * PKMN.damage[pkm2.type1][pkm1.type2];  

    if(pkm1.name == pkm2.name) {
      pkm1.name = pkm1.name + '(A)';
      pkm2.name = pkm2.name + '(B)';
    }

    // fight
    for(let i=0; i<maxRounds; i++) {
      if(pkm1.hp <= 0 || pkm2.hp <= 0) break;

      let attacker, defenser, ratio;

      if(actions[i] == 'X') {
        attacker = pkm1;
        defenser = pkm2;
        ratio = type1Ratio;
      } else if(actions[i] == 'Y') {
        attacker = pkm2;
        defenser = pkm1;
        ratio = type2Ratio;
      }
      
      let move = attacker.moves[Math.floor(Math.random() * attacker.moves.length)];
      let moveName = move[6].split('.')[0];
      let physical = (move[0] == '普' || move[0] == '格');
      let moveTypeMatch = (move[0] == PKMN.types[attacker.type1] || move[0] == PKMN.types[attacker.type2]) ? 1.5 : 0;
      let ratioDesc = ratio > 1 ? '效果非常好!' : ratio < 1 ? '收效甚微...' : ''; 
      let damage = (2 * attacker.lv + 10) / 250;
      damage = damage * (physical ? attacker.atk : attacker.spatk) / (physical ? defenser.def : defenser.spdef);
      damage = damage * move[1] + 2;
      damage = damage * ratio * (moveTypeMatch ? 1.5 : 0);
      damage = Math.round(damage);
      damage = damage > 0 ? damage : 1;

      if(move[2] == '必中' || move[2] >= (100 - Math.random()*100 + 1)) {
        defenser.hp -= damage;
        defenser.hp = defenser.hp > 0 ? defenser.hp : 0;
        rounds.push(`${i}. ${attacker.name} 使出 ${moveName}!`);
        rounds.push(`　${ratioDesc} ${defenser.name} 血量: ${defenser.hp} (-${damage})`);
      } else {
        rounds.push(`${i}. ${attacker.name} 使出 ${moveName}!`);
        rounds.push(`　但是沒有命中! ${defenser.name} 血量: ${defenser.hp}`);
      }
    }

    // result
    rounds.push(`-*-*-*-*-`);
    if(pkm1.hp > pkm2.hp) {
      rounds.push(`${pkm1.name} 的勝利!!`);
    } else if(pkm1.hp < pkm2.hp) {
      rounds.push(`${pkm2.name} 的勝利!!`);
    } else {
      rounds.push(`平手!!! 精彩的對戰`);
    }

    // carousel + text
    return [
      {
        "type": "flex",
        "altText": `決鬥!! 我的回合!!`,
        "contents": {
          "type": "carousel",
          "contents": [
            pokemon1.getLineReply().contents,
            pokemon2.getLineReply().contents,
          ]
        }
      },
      {
        type: 'text',
        text: rounds.join('\n')
      }
    ]

    function getActions(a, b, n) {
      const freqX = b;
      const freqY = a;
      let actionX = 0, 
          actionY = 0;
      let counter = 0;
      let actions = [];
  
      while(actions.length < n) {
        counter += freqX;
        const probActionY = Math.floor(counter / freqY)
        if(probActionY > actionY) {
          actions = actions.concat(Array(probActionY - actionY).fill('Y'));
          actionY = probActionY;
        }
        if(counter % freqY == 0) {
          if(freqX > freqY) {
            actions.push('X');
          } else {
            actions[actions.length-1] = 'X';
            actions.push('Y');
          }
          actionX++;
        } else {
          actions.push('X');
          actionX++;
        }
      }
      return actions.slice(0,n);
    }
  }

  static getDaZe(seed) {
    return new PKMN(seed);
  }

  #randomNormal(min, max, meanAdjustment = 0.5, closeatio = 0.5) {
    const _this = this;
    // 常態分佈的 Box-Muller 變換
    function gaussianRandom() {
      let u = 0, v = 0;
      while (u === 0) u = _this.seeder.random(); // 防止 u = 0
      while (v === 0) v = _this.seeder.random(); // 防止 v = 0
      return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    }

    // 調整中間值 (mean) 和標準差 (std)
    const mean = min + (max - min) * meanAdjustment; // 調整後的中間值
    const stdDev = (max - min) / (2 * Math.sqrt(-2 * Math.log(1 - closeatio))); // 依照 closeatio 計算標準差

    // 生成隨機數並將結果調整到 min 和 max 範圍內
    let result;
    do {
        result = mean + gaussianRandom() * stdDev;
    } while (result < min || result > max); // 確保結果在 min 和 max 之間

    return Math.round(result);
  }

  #calculatePR(x, min, max, meanAdjustment = 0.5, closeatio = 0.682) {
    // 計算中位數和標準差
    const mean = min + (max - min) * meanAdjustment; // 調整後的中間值
    const stdDev = (max - min) / (2 * Math.sqrt(-2 * Math.log(1 - closeatio))); // 依照 closeatio 計算標準差

    // 計算 Z 分數
    const z = (x - mean) / stdDev;

    // 計算 PR 值 (利用標準常態分佈的累積分佈函數)
    function cumulativeDistributionFunction(z) {
        // 使用近似公式來計算 PR 值
        const t = 1 / (1 + 0.2316419 * Math.abs(z));
        const d = 0.3989423 * Math.exp(-z * z / 2);
        const probability = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));

        return z >= 0 ? 1 - probability : probability;
    }

    // 計算 PR 值 (乘以 100 轉換為百分比)
    const pr = cumulativeDistributionFunction(z) * 100;
    return Math.round(pr);
  }

  #randomSplit(x, n, m) {
    if (n * m < x) {
      throw new Error("無法將數值分配，因為總數過大");
    }
    
    // 初始化結果陣列為 n 個 0
    let result = Array(n).fill(0);
    
    // 剩餘需要分配的數值
    let remaining = x;
  
    while (remaining > 0) {
      // 隨機選擇一個索引
      let index = Math.floor(this.seeder.random() * n);
      
      // 計算該組可以添加的最大值 (不超過 m 且不超過剩餘數值)
      let maxAdd = Math.min(m - result[index], remaining);
      
      if (maxAdd > 0) {
        // 隨機添加 1 到 maxAdd 之間的數值
        let addValue = Math.floor(this.seeder.random() * maxAdd) + 1;
        result[index] += addValue;
        remaining -= addValue;
      }
    }
  
    return result;
  }

  #randomSeed(length = 8) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'; // 定義可選字符集
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length); // 隨機選擇索引
      result += characters[randomIndex]; // 追加隨機字符
    }

    return result;
  }

  #getMoves() {
    const _this = this;
    const possiableMoves = [];
    const moves = Object.assign(pkmnMoves.find(m => m[0] == this.#no));
    moves.shift();

    while(moves.length > 0) {
      let lv = moves.shift();
      let moveId = moves.shift();
      if(lv == '進') lv = 1;
      if(new RegExp(/T|y|U|V|v/).test(lv)) continue;
      
      let move = allMoves[moveId];
      if(move[1] == '不定' || move[1] == '-') continue;
      if(this.#lv < lv) continue;

      possiableMoves.push(allMoves[moveId]);
    }

    return shuffleArray(possiableMoves).splice(0, 4);

    function shuffleArray(array) {
      // 從最後一個元素開始，逐個與隨機索引進行交換
      for (let i = array.length - 1; i > 0; i--) {
        // 生成範圍在 0 到 i 之間的隨機索引
        const j = Math.floor(_this.seeder.random() * (i + 1));
        
        // 交換元素 array[i] 和 array[j]
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
  }

  readStatus() {
    const natureAdj = PKMN.natures[this.#nature];
    const { hp, atk, def, spatk, spdef, spd } = this.getStatus();

    return {

      seed: this.#seed,

      no: this.#no,
      name: this.#name,
      type: this.#type1 == this.#type2 ? PKMN.types[this.#type1] : PKMN.types[this.#type1] + '、' + PKMN.types[this.#type2],
      nature: PKMN.naturesChinese[this.#nature],

      moves: this.#moves,

      lv: this.#lv,

      hp: hp + '',
      atk: atk + emphasis(natureAdj[0]),
      def: def + emphasis(natureAdj[1]),
      spatk: spatk + emphasis(natureAdj[2]),
      spdef: spdef + emphasis(natureAdj[3]),
      spd: spd + emphasis(natureAdj[4]),

      prlv: this.#prlv,
      priv: this.#priv,
      prev: this.#prev,
    }

    function emphasis(adj) {
      return adj > 1 ? '(+)' : adj < 1 ? '(-)' : '';
    }
  }

  getStatus() {

    const natureAdj = PKMN.natures[this.#nature];

    return {
      name: this.#name,
      lv: this.#lv,
      moves: this.#moves,
      hp: calcHP(this.#no, this.#lv, this.#baseHP, this.#ivHP, this.#evHP),
      atk: calcATK(this.#no, this.#lv, this.#baseATK, this.#ivATK, this.#evATK, natureAdj[0]),
      def: calcDEF(this.#no, this.#lv, this.#baseDEF, this.#ivDEF, this.#evDEF, natureAdj[1]),
      spatk: calcSPATK(this.#no, this.#lv, this.#baseSPATK, this.#ivSPATK, this.#evSPATK, natureAdj[2]),
      spdef: calcSPDEF(this.#no, this.#lv, this.#baseSPDEF, this.#ivSPDEF, this.#evSPDEF, natureAdj[3]),
      spd: calcSPD(this.#no, this.#lv, this.#baseSPD, this.#ivSPD, this.#evSPD, natureAdj[4]),
      type1: this.#type1,
      type2: this.#type2,
    }

    function calcHP(id, lv, base, iv, ev) {
      let calhp;
      //Set HP=1 for No 292
      if (id == 292) {
        calhp = 1;
      }
      calhp = parseFloat(base) * parseFloat(2) + parseFloat(iv);
      calhp += parseFloat(Math.floor(parseFloat(ev) / parseFloat(4)));
      calhp *= parseFloat(lv);
      calhp = parseFloat(Math.floor(calhp / parseFloat(100)));
      calhp += parseFloat(lv) + parseFloat(10);
      return calhp || 1;
    }

    function calcATK(id, lv, base, iv, ev, nature) {
      let calatk;
      calatk = parseFloat(base) * parseFloat(2) + parseFloat(iv);
      calatk += parseFloat(Math.floor(parseFloat(ev) / parseFloat(4)));
      calatk *= parseFloat(lv);
      calatk = parseFloat(Math.floor(calatk / parseFloat(100)));
      calatk += parseFloat(5);
      calatk *= parseFloat(nature);
      calatk = Math.floor(calatk);
      return calatk;
    }

    function calcDEF(id, lv, base, iv, ev, nature) {
      let caldef;
      caldef = parseFloat(base) * parseFloat(2) + parseFloat(iv);
      caldef += parseFloat(Math.floor(parseFloat(ev) / parseFloat(4)));
      caldef *= parseFloat(lv);
      caldef = parseFloat(Math.floor(caldef / parseFloat(100)));
      caldef += parseFloat(5);
      caldef *= parseFloat(nature);
      caldef = Math.floor(caldef);
      return caldef;
    }

    function calcSPATK(id, lv, base, iv, ev, nature) {
      let calsa;
      calsa = parseFloat(base) * parseFloat(2) + parseFloat(iv);
      calsa += parseFloat(Math.floor(parseFloat(ev) / parseFloat(4)));
      calsa *= parseFloat(lv);
      calsa = parseFloat(Math.floor(calsa / parseFloat(100)));
      calsa += parseFloat(5);
      calsa *= parseFloat(nature);
      calsa = Math.floor(calsa);
      return calsa;
    }

    function calcSPDEF(id, lv, base, iv, ev, nature) {
      let calsd;
      calsd = parseFloat(base) * parseFloat(2) + parseFloat(iv);
      calsd += parseFloat(Math.floor(parseFloat(ev) / parseFloat(4)));
      calsd *= parseFloat(lv);
      calsd = parseFloat(Math.floor(calsd / parseFloat(100)));
      calsd += parseFloat(5);
      calsd *= parseFloat(nature);
      calsd = Math.floor(calsd);
      return calsd;
    }

    function calcSPD(id, lv, base, iv, ev, nature) {
      let calsp;
      calsp = parseFloat(base) * parseFloat(2) + parseFloat(iv);
      calsp += parseFloat(Math.floor(parseFloat(ev) / parseFloat(4)));
      calsp *= parseFloat(lv);
      calsp = parseFloat(Math.floor(calsp / parseFloat(100)));
      calsp += parseFloat(5);
      calsp *= parseFloat(nature);
      calsp = Math.floor(calsp);
      return calsp;
    }
  }

  getLineReply() {

    const data = this.readStatus();

    return {
      "type": "flex",
      "altText": `就決定是你了! ${data.name}!`,
      "contents": {
        "type": "bubble",
        "size": "mega",
        "header": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": `no. ${data.no}`,
              "color": "#AAAAAA",
              "weight": "bold",
              "size": "sm"
            },
            {
              "type": "text",
              "text": `#${data.seed}`,
              "weight": "bold",
              "size": "sm",
              "color": "#AAAAAA",
              "contents": [],
              "align": "end",
              "action": {
                "type": "clipboard",
                "clipboardText": `#${data.seed}`
              }
            }
          ]
        },
        "hero": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "spacing": "md",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "flex": 1,
                  "contents": [
                    {
                      "type": "image",
                      "url": `https://www.legendarypokemon.net/images/sprites/bw/${new String(data.no).padStart('3', '0')}.png`,
                      "gravity": "bottom",
                      "aspectRatio": "4:3",
                      "aspectMode": "cover"
                    }
                  ]
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "flex": 2,
                  "contents": [
                    {
                      "type": "text",
                      "text": `Lv. ${data.lv} ${data.name}`,
                      "flex": 1,
                      "contents": [],
                      "weight": "bold"
                    },
                    {
                      "type": "text",
                      "text": `屬性: ${data.type}  性格: ${data.nature}`,
                      "size": "xs",
                      "flex": 1,
                      "contents": []
                    }
                  ]
                }
              ],
              "paddingStart": "md",
              "paddingEnd": "md"
            }
          ]
        },
        "body": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "HP",
                      "weight": "bold",
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "ATK",
                      "weight": "bold",
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "DEF",
                      "weight": "bold",
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "SP.A",
                      "weight": "bold",
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "SP.D",
                      "weight": "bold",
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": "SPD",
                      "weight": "bold",
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                }
              ]
            },
            {
              "type": "box",
              "layout": "horizontal",
              "contents": [
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${data.hp}`,
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${data.atk}`,
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${data.def}`,
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${data.spatk}`,
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${data.spdef}`,
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                },
                {
                  "type": "box",
                  "layout": "vertical",
                  "contents": [
                    {
                      "type": "text",
                      "text": `${data.spd}`,
                      "size": "sm"
                    }
                  ],
                  "alignItems": "center"
                }
              ]
            },
            {
              "type": "separator"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": data.moves.map((move, index) => ({
                "type": "box",
                "layout": "horizontal",
                "contents": [
                  {
                    "type": "text",
                    "text": `${index+1}. ${move[6].split('.')[0]} (${move[0]}) `,
                    "size": "xs"
                  },
                  {
                    "type": "text",
                    "text": `${move[1]} / ${move[2]}`,
                    "align": "end",
                    "size": "xs"
                  }
                ]
              }))
            }
          ],
          "paddingTop": "xs",
          "paddingBottom": "xs"
        },
        "footer": {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "text",
              "text": `PR(等級/個體/努力): ${data.prlv}/${data.priv}/${data.prev}`,
              "align": "end",
              "color": "#AAAAAA",
              "weight": "bold",
              "size": "xs"
            }
          ]
        }
      }
    }

  }

}

module.exports = PKMN;

// console.log(PKMN.fight(PKMN.getDaZe(), PKMN.getDaZe()));
// console.log(PKMN.getDaZe().getStatus());