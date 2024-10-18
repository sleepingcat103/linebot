const pkmns = [
  {
   "no": 1,
   "name": "妙蛙种子",
   "race": {"hp": 45,"atk": 49,"def": 49,"spatk": 65,"spdef": 65,"spd": 45},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 2,
   "name": "妙蛙草",
   "race": {"hp": 60,"atk": 62,"def": 63,"spatk": 80,"spdef": 80,"spd": 60},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,1,1,0]
  },
  {
   "no": 3,
   "name": "妙蛙花",
   "race": {"hp": 80,"atk": 82,"def": 83,"spatk": 100,"spdef": 100,"spd": 80},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,2,1,0]
  },
  {
   "no": 4,
   "name": "小火龙",
   "race": {"hp": 39,"atk": 52,"def": 43,"spatk": 60,"spdef": 50,"spd": 65},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 5,
   "name": "火恐龙",
   "race": {"hp": 58,"atk": 64,"def": 58,"spatk": 80,"spdef": 65,"spd": 80},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,1,0,1]
  },
  {
   "no": 6,
   "name": "喷火龙",
   "race": {"hp": 78,"atk": 84,"def": 78,"spatk": 109,"spdef": 85,"spd": 100},
   "type1": 10,
   "type2": 2,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 7,
   "name": "杰尼龟",
   "race": {"hp": 44,"atk": 48,"def": 65,"spatk": 50,"spdef": 64,"spd": 43},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 8,
   "name": "卡咪龟",
   "race": {"hp": 59,"atk": 63,"def": 80,"spatk": 65,"spdef": 80,"spd": 58},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 9,
   "name": "水箭龟",
   "race": {"hp": 79,"atk": 83,"def": 100,"spatk": 85,"spdef": 105,"spd": 78},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 10,
   "name": "绿毛虫",
   "race": {"hp": 45,"atk": 30,"def": 35,"spatk": 20,"spdef": 20,"spd": 45},
   "type1": 6,
   "type2": 6,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 11,
   "name": "铁甲蛹",
   "race": {"hp": 50,"atk": 20,"def": 55,"spatk": 25,"spdef": 25,"spd": 30},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 12,
   "name": "巴大蝴",
   "race": {"hp": 60,"atk": 45,"def": 50,"spatk": 80,"spdef": 80,"spd": 70},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,2,1,0]
  },
  {
   "no": 13,
   "name": "独角虫",
   "race": {"hp": 40,"atk": 35,"def": 30,"spatk": 20,"spdef": 20,"spd": 50},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 14,
   "name": "铁壳昆",
   "race": {"hp": 45,"atk": 25,"def": 50,"spatk": 25,"spdef": 25,"spd": 35},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 15,
   "name": "大针蜂",
   "race": {"hp": 65,"atk": 80,"def": 40,"spatk": 45,"spdef": 80,"spd": 75},
   "type1": 6,
   "type2": 3,
   "eff": [0,2,0,0,1,0]
  },
  {
   "no": 16,
   "name": "波波",
   "race": {"hp": 40,"atk": 45,"def": 40,"spatk": 35,"spdef": 35,"spd": 56},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 17,
   "name": "比比鸟",
   "race": {"hp": 63,"atk": 60,"def": 55,"spatk": 50,"spdef": 50,"spd": 71},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 18,
   "name": "比雕",
   "race": {"hp": 83,"atk": 80,"def": 75,"spatk": 70,"spdef": 70,"spd": 91},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,3]
  },
  {
   "no": 19,
   "name": "小拉达",
   "race": {"hp": 30,"atk": 56,"def": 35,"spatk": 25,"spdef": 35,"spd": 72},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 20,
   "name": "拉达",
   "race": {"hp": 55,"atk": 81,"def": 60,"spatk": 50,"spdef": 70,"spd": 97},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 21,
   "name": "烈雀",
   "race": {"hp": 40,"atk": 60,"def": 30,"spatk": 31,"spdef": 31,"spd": 70},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 22,
   "name": "大嘴雀",
   "race": {"hp": 65,"atk": 90,"def": 65,"spatk": 61,"spdef": 61,"spd": 100},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 23,
   "name": "阿柏蛇",
   "race": {"hp": 35,"atk": 60,"def": 44,"spatk": 40,"spdef": 54,"spd": 55},
   "type1": 3,
   "type2": 3,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 24,
   "name": "阿柏怪",
   "race": {"hp": 60,"atk": 85,"def": 69,"spatk": 65,"spdef": 79,"spd": 80},
   "type1": 3,
   "type2": 3,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 25,
   "name": "皮卡丘",
   "race": {"hp": 35,"atk": 55,"def": 30,"spatk": 50,"spdef": 40,"spd": 90},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 26,
   "name": "雷丘",
   "race": {"hp": 60,"atk": 90,"def": 55,"spatk": 90,"spdef": 80,"spd": 100},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,3]
  },
  {
   "no": 27,
   "name": "穿山鼠",
   "race": {"hp": 50,"atk": 75,"def": 85,"spatk": 20,"spdef": 30,"spd": 40},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 28,
   "name": "穿山王",
   "race": {"hp": 75,"atk": 100,"def": 110,"spatk": 45,"spdef": 55,"spd": 65},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 29,
   "name": "尼多兰",
   "race": {"hp": 55,"atk": 47,"def": 52,"spatk": 40,"spdef": 40,"spd": 41},
   "type1": 3,
   "type2": 3,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 30,
   "name": "尼多娜",
   "race": {"hp": 70,"atk": 62,"def": 67,"spatk": 55,"spdef": 55,"spd": 56},
   "type1": 3,
   "type2": 3,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 31,
   "name": "尼多后",
   "race": {"hp": 90,"atk": 82,"def": 87,"spatk": 75,"spdef": 85,"spd": 76},
   "type1": 3,
   "type2": 4,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 32,
   "name": "尼多朗",
   "race": {"hp": 46,"atk": 57,"def": 40,"spatk": 40,"spdef": 40,"spd": 50},
   "type1": 3,
   "type2": 3,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 33,
   "name": "尼多力诺",
   "race": {"hp": 61,"atk": 72,"def": 57,"spatk": 55,"spdef": 55,"spd": 65},
   "type1": 3,
   "type2": 3,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 34,
   "name": "尼多王",
   "race": {"hp": 81,"atk": 92,"def": 77,"spatk": 85,"spdef": 75,"spd": 85},
   "type1": 3,
   "type2": 4,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 35,
   "name": "皮皮",
   "race": {"hp": 70,"atk": 45,"def": 48,"spatk": 60,"spdef": 65,"spd": 35},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 36,
   "name": "皮可西",
   "race": {"hp": 95,"atk": 70,"def": 73,"spatk": 85,"spdef": 90,"spd": 60},
   "type1": 0,
   "type2": 0,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 37,
   "name": "六尾",
   "race": {"hp": 38,"atk": 41,"def": 40,"spatk": 50,"spdef": 65,"spd": 65},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 38,
   "name": "九尾",
   "race": {"hp": 73,"atk": 76,"def": 75,"spatk": 81,"spdef": 100,"spd": 100},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,1,1]
  },
  {
   "no": 39,
   "name": "胖丁",
   "race": {"hp": 115,"atk": 45,"def": 20,"spatk": 45,"spdef": 25,"spd": 20},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 40,
   "name": "胖可丁",
   "race": {"hp": 140,"atk": 70,"def": 45,"spatk": 75,"spdef": 50,"spd": 45},
   "type1": 0,
   "type2": 0,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 41,
   "name": "超音蝠",
   "race": {"hp": 40,"atk": 45,"def": 35,"spatk": 30,"spdef": 40,"spd": 55},
   "type1": 3,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 42,
   "name": "大嘴蝠",
   "race": {"hp": 75,"atk": 80,"def": 70,"spatk": 65,"spdef": 75,"spd": 90},
   "type1": 3,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 43,
   "name": "走路草",
   "race": {"hp": 45,"atk": 50,"def": 55,"spatk": 75,"spdef": 65,"spd": 30},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 44,
   "name": "臭臭花",
   "race": {"hp": 60,"atk": 65,"def": 70,"spatk": 85,"spdef": 75,"spd": 40},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 45,
   "name": "霸王花",
   "race": {"hp": 75,"atk": 80,"def": 85,"spatk": 100,"spdef": 90,"spd": 50},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 46,
   "name": "派拉斯",
   "race": {"hp": 35,"atk": 70,"def": 55,"spatk": 45,"spdef": 55,"spd": 25},
   "type1": 6,
   "type2": 12,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 47,
   "name": "派拉斯特",
   "race": {"hp": 60,"atk": 95,"def": 80,"spatk": 60,"spdef": 80,"spd": 30},
   "type1": 6,
   "type2": 12,
   "eff": [0,2,1,0,0,0]
  },
  {
   "no": 48,
   "name": "毛球",
   "race": {"hp": 60,"atk": 55,"def": 50,"spatk": 40,"spdef": 55,"spd": 45},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 49,
   "name": "末入蛾",
   "race": {"hp": 70,"atk": 65,"def": 60,"spatk": 90,"spdef": 75,"spd": 90},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,0,1,0,1]
  },
  {
   "no": 50,
   "name": "地鼠",
   "race": {"hp": 10,"atk": 55,"def": 25,"spatk": 35,"spdef": 45,"spd": 95},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 51,
   "name": "三地鼠",
   "race": {"hp": 35,"atk": 80,"def": 50,"spatk": 50,"spdef": 70,"spd": 120},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 52,
   "name": "喵喵",
   "race": {"hp": 40,"atk": 45,"def": 35,"spatk": 40,"spdef": 40,"spd": 90},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 53,
   "name": "猫老大",
   "race": {"hp": 65,"atk": 70,"def": 60,"spatk": 65,"spdef": 65,"spd": 115},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 54,
   "name": "可达鸭",
   "race": {"hp": 50,"atk": 52,"def": 48,"spatk": 65,"spdef": 50,"spd": 55},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 55,
   "name": "哥达鸭",
   "race": {"hp": 80,"atk": 82,"def": 78,"spatk": 95,"spdef": 80,"spd": 85},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 56,
   "name": "猴怪",
   "race": {"hp": 40,"atk": 80,"def": 35,"spatk": 35,"spdef": 45,"spd": 70},
   "type1": 1,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 57,
   "name": "火爆猴",
   "race": {"hp": 65,"atk": 105,"def": 60,"spatk": 60,"spdef": 70,"spd": 95},
   "type1": 1,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 58,
   "name": "卡蒂狗",
   "race": {"hp": 55,"atk": 70,"def": 45,"spatk": 70,"spdef": 50,"spd": 60},
   "type1": 10,
   "type2": 10,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 59,
   "name": "风速狗",
   "race": {"hp": 90,"atk": 110,"def": 80,"spatk": 100,"spdef": 80,"spd": 95},
   "type1": 10,
   "type2": 10,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 60,
   "name": "蚊香蝌蚪",
   "race": {"hp": 40,"atk": 50,"def": 40,"spatk": 40,"spdef": 40,"spd": 90},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 61,
   "name": "蚊香蛙",
   "race": {"hp": 65,"atk": 65,"def": 65,"spatk": 50,"spdef": 50,"spd": 90},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 62,
   "name": "快泳蛙",
   "race": {"hp": 90,"atk": 85,"def": 95,"spatk": 70,"spdef": 90,"spd": 70},
   "type1": 11,
   "type2": 1,
   "eff": [0,0,3,0,0,0]
  },
  {
   "no": 63,
   "name": "凯西",
   "race": {"hp": 25,"atk": 20,"def": 15,"spatk": 105,"spdef": 55,"spd": 90},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 64,
   "name": "勇吉拉",
   "race": {"hp": 40,"atk": 35,"def": 30,"spatk": 120,"spdef": 70,"spd": 105},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 65,
   "name": "胡地",
   "race": {"hp": 55,"atk": 50,"def": 45,"spatk": 135,"spdef": 85,"spd": 120},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 66,
   "name": "腕力",
   "race": {"hp": 70,"atk": 80,"def": 50,"spatk": 35,"spdef": 35,"spd": 35},
   "type1": 1,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 67,
   "name": "豪力",
   "race": {"hp": 80,"atk": 100,"def": 70,"spatk": 50,"spdef": 60,"spd": 45},
   "type1": 1,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 68,
   "name": "怪力",
   "race": {"hp": 90,"atk": 130,"def": 80,"spatk": 65,"spdef": 85,"spd": 55},
   "type1": 1,
   "type2": 1,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 69,
   "name": "喇叭芽",
   "race": {"hp": 50,"atk": 75,"def": 35,"spatk": 70,"spdef": 30,"spd": 40},
   "type1": 12,
   "type2": 3,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 70,
   "name": "口呆花",
   "race": {"hp": 65,"atk": 90,"def": 50,"spatk": 85,"spdef": 45,"spd": 55},
   "type1": 12,
   "type2": 3,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 71,
   "name": "大食花",
   "race": {"hp": 80,"atk": 105,"def": 65,"spatk": 100,"spdef": 60,"spd": 70},
   "type1": 12,
   "type2": 3,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 72,
   "name": "玛瑙水母",
   "race": {"hp": 40,"atk": 40,"def": 35,"spatk": 50,"spdef": 100,"spd": 70},
   "type1": 11,
   "type2": 3,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 73,
   "name": "毒刺水母",
   "race": {"hp": 80,"atk": 70,"def": 65,"spatk": 80,"spdef": 120,"spd": 100},
   "type1": 11,
   "type2": 3,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 74,
   "name": "小拳石",
   "race": {"hp": 40,"atk": 80,"def": 100,"spatk": 30,"spdef": 30,"spd": 20},
   "type1": 5,
   "type2": 4,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 75,
   "name": "隆隆石",
   "race": {"hp": 55,"atk": 95,"def": 115,"spatk": 45,"spdef": 45,"spd": 35},
   "type1": 5,
   "type2": 4,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 76,
   "name": "隆隆岩",
   "race": {"hp": 80,"atk": 110,"def": 130,"spatk": 55,"spdef": 65,"spd": 45},
   "type1": 5,
   "type2": 4,
   "eff": [0,0,3,0,0,0]
  },
  {
   "no": 77,
   "name": "小火马",
   "race": {"hp": 50,"atk": 85,"def": 55,"spatk": 65,"spdef": 65,"spd": 90},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 78,
   "name": "烈焰马",
   "race": {"hp": 65,"atk": 100,"def": 70,"spatk": 80,"spdef": 80,"spd": 105},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 79,
   "name": "呆呆兽",
   "race": {"hp": 90,"atk": 65,"def": 65,"spatk": 40,"spdef": 40,"spd": 15},
   "type1": 11,
   "type2": 14,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 80,
   "name": "呆河马",
   "race": {"hp": 95,"atk": 75,"def": 110,"spatk": 100,"spdef": 80,"spd": 30},
   "type1": 11,
   "type2": 14,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 81,
   "name": "小磁怪",
   "race": {"hp": 25,"atk": 35,"def": 70,"spatk": 95,"spdef": 55,"spd": 45},
   "type1": 13,
   "type2": 8,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 82,
   "name": "三合一磁怪",
   "race": {"hp": 50,"atk": 60,"def": 95,"spatk": 120,"spdef": 70,"spd": 70},
   "type1": 13,
   "type2": 8,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 83,
   "name": "大葱鸭",
   "race": {"hp": 52,"atk": 65,"def": 55,"spatk": 58,"spdef": 62,"spd": 60},
   "type1": 0,
   "type2": 2,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 84,
   "name": "嘟嘟",
   "race": {"hp": 35,"atk": 85,"def": 45,"spatk": 35,"spdef": 35,"spd": 75},
   "type1": 0,
   "type2": 2,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 85,
   "name": "嘟嘟利",
   "race": {"hp": 60,"atk": 110,"def": 70,"spatk": 60,"spdef": 60,"spd": 100},
   "type1": 0,
   "type2": 2,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 86,
   "name": "小海狮",
   "race": {"hp": 65,"atk": 45,"def": 55,"spatk": 45,"spdef": 70,"spd": 45},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 87,
   "name": "白海狮",
   "race": {"hp": 90,"atk": 70,"def": 80,"spatk": 70,"spdef": 95,"spd": 70},
   "type1": 11,
   "type2": 15,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 88,
   "name": "臭泥",
   "race": {"hp": 80,"atk": 80,"def": 50,"spatk": 40,"spdef": 50,"spd": 25},
   "type1": 3,
   "type2": 3,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 89,
   "name": "臭臭泥",
   "race": {"hp": 105,"atk": 105,"def": 75,"spatk": 65,"spdef": 100,"spd": 50},
   "type1": 3,
   "type2": 3,
   "eff": [1,1,0,0,0,0]
  },
  {
   "no": 90,
   "name": "大舌贝",
   "race": {"hp": 30,"atk": 65,"def": 100,"spatk": 45,"spdef": 25,"spd": 40},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 91,
   "name": "铁甲贝",
   "race": {"hp": 50,"atk": 95,"def": 180,"spatk": 85,"spdef": 45,"spd": 70},
   "type1": 11,
   "type2": 15,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 92,
   "name": "鬼斯",
   "race": {"hp": 30,"atk": 35,"def": 30,"spatk": 100,"spdef": 35,"spd": 80},
   "type1": 7,
   "type2": 3,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 93,
   "name": "鬼斯通",
   "race": {"hp": 45,"atk": 50,"def": 45,"spatk": 115,"spdef": 55,"spd": 95},
   "type1": 7,
   "type2": 3,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 94,
   "name": "耿鬼",
   "race": {"hp": 60,"atk": 65,"def": 60,"spatk": 130,"spdef": 75,"spd": 110},
   "type1": 7,
   "type2": 3,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 95,
   "name": "大岩蛇",
   "race": {"hp": 35,"atk": 45,"def": 160,"spatk": 30,"spdef": 45,"spd": 70},
   "type1": 5,
   "type2": 4,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 96,
   "name": "素利普",
   "race": {"hp": 60,"atk": 48,"def": 45,"spatk": 43,"spdef": 90,"spd": 42},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 97,
   "name": "素利拍",
   "race": {"hp": 85,"atk": 73,"def": 70,"spatk": 73,"spdef": 115,"spd": 67},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 98,
   "name": "大钳蟹",
   "race": {"hp": 30,"atk": 105,"def": 90,"spatk": 25,"spdef": 25,"spd": 50},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 99,
   "name": "巨钳蟹",
   "race": {"hp": 55,"atk": 130,"def": 115,"spatk": 50,"spdef": 50,"spd": 75},
   "type1": 11,
   "type2": 11,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 100,
   "name": "雷电球",
   "race": {"hp": 40,"atk": 30,"def": 50,"spatk": 55,"spdef": 55,"spd": 100},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 101,
   "name": "顽皮弹",
   "race": {"hp": 60,"atk": 50,"def": 70,"spatk": 80,"spdef": 80,"spd": 140},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 102,
   "name": "蛋蛋",
   "race": {"hp": 60,"atk": 40,"def": 80,"spatk": 60,"spdef": 45,"spd": 40},
   "type1": 12,
   "type2": 14,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 103,
   "name": "椰蛋树",
   "race": {"hp": 95,"atk": 95,"def": 85,"spatk": 125,"spdef": 65,"spd": 55},
   "type1": 12,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 104,
   "name": "可拉可拉",
   "race": {"hp": 50,"atk": 50,"def": 95,"spatk": 40,"spdef": 50,"spd": 35},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 105,
   "name": "嘎拉嘎拉",
   "race": {"hp": 60,"atk": 80,"def": 110,"spatk": 50,"spdef": 80,"spd": 45},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 106,
   "name": "沙瓦郎",
   "race": {"hp": 50,"atk": 120,"def": 53,"spatk": 35,"spdef": 110,"spd": 87},
   "type1": 1,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 107,
   "name": "艾比郎",
   "race": {"hp": 50,"atk": 105,"def": 79,"spatk": 35,"spdef": 110,"spd": 76},
   "type1": 1,
   "type2": 1,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 108,
   "name": "大舌头",
   "race": {"hp": 90,"atk": 55,"def": 75,"spatk": 60,"spdef": 75,"spd": 30},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 109,
   "name": "瓦斯弹",
   "race": {"hp": 40,"atk": 65,"def": 95,"spatk": 60,"spdef": 45,"spd": 35},
   "type1": 3,
   "type2": 3,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 110,
   "name": "双弹瓦斯",
   "race": {"hp": 65,"atk": 90,"def": 120,"spatk": 85,"spdef": 70,"spd": 60},
   "type1": 3,
   "type2": 3,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 111,
   "name": "铁甲犀牛",
   "race": {"hp": 80,"atk": 85,"def": 95,"spatk": 30,"spdef": 30,"spd": 25},
   "type1": 4,
   "type2": 5,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 112,
   "name": "铁甲暴龙",
   "race": {"hp": 105,"atk": 130,"def": 120,"spatk": 45,"spdef": 45,"spd": 40},
   "type1": 4,
   "type2": 5,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 113,
   "name": "吉利蛋",
   "race": {"hp": 250,"atk": 5,"def": 5,"spatk": 35,"spdef": 105,"spd": 50},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 114,
   "name": "蔓藤怪",
   "race": {"hp": 65,"atk": 55,"def": 115,"spatk": 100,"spdef": 40,"spd": 60},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 115,
   "name": "袋龙",
   "race": {"hp": 105,"atk": 95,"def": 80,"spatk": 40,"spdef": 80,"spd": 90},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 116,
   "name": "墨海马",
   "race": {"hp": 30,"atk": 40,"def": 70,"spatk": 70,"spdef": 25,"spd": 60},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 117,
   "name": "海刺龙",
   "race": {"hp": 55,"atk": 65,"def": 95,"spatk": 95,"spdef": 45,"spd": 85},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,1,1,0,0]
  },
  {
   "no": 118,
   "name": "角金鱼",
   "race": {"hp": 45,"atk": 67,"def": 60,"spatk": 35,"spdef": 50,"spd": 63},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 119,
   "name": "金鱼王",
   "race": {"hp": 80,"atk": 92,"def": 65,"spatk": 65,"spdef": 80,"spd": 68},
   "type1": 11,
   "type2": 11,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 120,
   "name": "海星星",
   "race": {"hp": 30,"atk": 45,"def": 55,"spatk": 70,"spdef": 55,"spd": 85},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 121,
   "name": "宝石海星",
   "race": {"hp": 60,"atk": 75,"def": 85,"spatk": 100,"spdef": 85,"spd": 115},
   "type1": 11,
   "type2": 14,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 122,
   "name": "吸盘魔偶",
   "race": {"hp": 40,"atk": 45,"def": 65,"spatk": 100,"spdef": 120,"spd": 90},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 123,
   "name": "飞天螳螂",
   "race": {"hp": 70,"atk": 110,"def": 80,"spatk": 55,"spdef": 80,"spd": 105},
   "type1": 6,
   "type2": 2,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 124,
   "name": "迷唇姐",
   "race": {"hp": 65,"atk": 50,"def": 35,"spatk": 115,"spdef": 95,"spd": 95},
   "type1": 15,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 125,
   "name": "电击兽",
   "race": {"hp": 65,"atk": 83,"def": 57,"spatk": 95,"spdef": 85,"spd": 105},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 126,
   "name": "鸭嘴火龙",
   "race": {"hp": 65,"atk": 95,"def": 57,"spatk": 100,"spdef": 85,"spd": 93},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 127,
   "name": "大甲",
   "race": {"hp": 65,"atk": 125,"def": 100,"spatk": 55,"spdef": 70,"spd": 85},
   "type1": 6,
   "type2": 6,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 128,
   "name": "肯泰罗",
   "race": {"hp": 75,"atk": 100,"def": 95,"spatk": 40,"spdef": 70,"spd": 110},
   "type1": 0,
   "type2": 0,
   "eff": [0,1,0,0,0,1]
  },
  {
   "no": 129,
   "name": "鲤鱼王",
   "race": {"hp": 20,"atk": 10,"def": 55,"spatk": 15,"spdef": 20,"spd": 80},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 130,
   "name": "暴鲤龙",
   "race": {"hp": 95,"atk": 125,"def": 79,"spatk": 60,"spdef": 100,"spd": 81},
   "type1": 11,
   "type2": 2,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 131,
   "name": "乘龙",
   "race": {"hp": 130,"atk": 85,"def": 80,"spatk": 85,"spdef": 95,"spd": 60},
   "type1": 11,
   "type2": 15,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 132,
   "name": "百变怪",
   "race": {"hp": 48,"atk": 48,"def": 48,"spatk": 48,"spdef": 48,"spd": 48},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 133,
   "name": "伊布",
   "race": {"hp": 55,"atk": 55,"def": 50,"spatk": 45,"spdef": 65,"spd": 55},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 134,
   "name": "水精灵",
   "race": {"hp": 130,"atk": 65,"def": 60,"spatk": 110,"spdef": 95,"spd": 65},
   "type1": 11,
   "type2": 11,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 135,
   "name": "雷精灵",
   "race": {"hp": 65,"atk": 65,"def": 60,"spatk": 110,"spdef": 95,"spd": 130},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 136,
   "name": "火精灵",
   "race": {"hp": 65,"atk": 130,"def": 60,"spatk": 95,"spdef": 110,"spd": 65},
   "type1": 10,
   "type2": 10,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 137,
   "name": "3D龙",
   "race": {"hp": 65,"atk": 60,"def": 70,"spatk": 85,"spdef": 75,"spd": 40},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 138,
   "name": "菊石兽",
   "race": {"hp": 35,"atk": 40,"def": 100,"spatk": 90,"spdef": 55,"spd": 35},
   "type1": 5,
   "type2": 11,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 139,
   "name": "多刺菊石兽",
   "race": {"hp": 70,"atk": 60,"def": 125,"spatk": 115,"spdef": 70,"spd": 55},
   "type1": 5,
   "type2": 11,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 140,
   "name": "化石盔",
   "race": {"hp": 30,"atk": 80,"def": 90,"spatk": 55,"spdef": 45,"spd": 55},
   "type1": 5,
   "type2": 11,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 141,
   "name": "镰刀盔",
   "race": {"hp": 60,"atk": 115,"def": 105,"spatk": 65,"spdef": 70,"spd": 80},
   "type1": 5,
   "type2": 11,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 142,
   "name": "化石翼龙",
   "race": {"hp": 80,"atk": 105,"def": 65,"spatk": 60,"spdef": 75,"spd": 130},
   "type1": 5,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 143,
   "name": "卡比兽",
   "race": {"hp": 160,"atk": 110,"def": 65,"spatk": 65,"spdef": 110,"spd": 30},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 144,
   "name": "急冻鸟",
   "race": {"hp": 90,"atk": 85,"def": 100,"spatk": 95,"spdef": 125,"spd": 85},
   "type1": 15,
   "type2": 2,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 145,
   "name": "闪电鸟",
   "race": {"hp": 90,"atk": 90,"def": 85,"spatk": 125,"spdef": 90,"spd": 100},
   "type1": 13,
   "type2": 2,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 146,
   "name": "火焰鸟",
   "race": {"hp": 90,"atk": 100,"def": 90,"spatk": 125,"spdef": 85,"spd": 90},
   "type1": 10,
   "type2": 2,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 147,
   "name": "迷你龙",
   "race": {"hp": 41,"atk": 64,"def": 45,"spatk": 50,"spdef": 50,"spd": 50},
   "type1": 16,
   "type2": 16,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 148,
   "name": "哈克龙",
   "race": {"hp": 61,"atk": 84,"def": 65,"spatk": 70,"spdef": 70,"spd": 70},
   "type1": 16,
   "type2": 16,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 149,
   "name": "快龙",
   "race": {"hp": 91,"atk": 134,"def": 95,"spatk": 100,"spdef": 100,"spd": 80},
   "type1": 16,
   "type2": 2,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 150,
   "name": "超梦",
   "race": {"hp": 106,"atk": 110,"def": 90,"spatk": 154,"spdef": 90,"spd": 130},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 151,
   "name": "梦幻",
   "race": {"hp": 100,"atk": 100,"def": 100,"spatk": 100,"spdef": 100,"spd": 100},
   "type1": 14,
   "type2": 14,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 152,
   "name": "菊草叶",
   "race": {"hp": 45,"atk": 49,"def": 65,"spatk": 49,"spdef": 65,"spd": 45},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 153,
   "name": "月桂叶",
   "race": {"hp": 60,"atk": 62,"def": 80,"spatk": 63,"spdef": 80,"spd": 60},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 154,
   "name": "大菊花",
   "race": {"hp": 80,"atk": 82,"def": 100,"spatk": 83,"spdef": 100,"spd": 80},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,1,0,2,0]
  },
  {
   "no": 155,
   "name": "火球鼠",
   "race": {"hp": 39,"atk": 52,"def": 43,"spatk": 60,"spdef": 50,"spd": 65},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 156,
   "name": "火岩鼠",
   "race": {"hp": 58,"atk": 64,"def": 58,"spatk": 80,"spdef": 65,"spd": 80},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,1,0,1]
  },
  {
   "no": 157,
   "name": "火暴兽",
   "race": {"hp": 78,"atk": 84,"def": 78,"spatk": 109,"spdef": 85,"spd": 100},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 158,
   "name": "小锯鳄",
   "race": {"hp": 50,"atk": 65,"def": 64,"spatk": 44,"spdef": 48,"spd": 43},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 159,
   "name": "蓝鳄",
   "race": {"hp": 65,"atk": 80,"def": 80,"spatk": 59,"spdef": 63,"spd": 58},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,1,0,0,0]
  },
  {
   "no": 160,
   "name": "大力鳄",
   "race": {"hp": 85,"atk": 105,"def": 100,"spatk": 79,"spdef": 83,"spd": 78},
   "type1": 11,
   "type2": 11,
   "eff": [0,2,1,0,0,0]
  },
  {
   "no": 161,
   "name": "尾立",
   "race": {"hp": 35,"atk": 46,"def": 34,"spatk": 35,"spdef": 45,"spd": 20},
   "type1": 0,
   "type2": 0,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 162,
   "name": "大尾立",
   "race": {"hp": 85,"atk": 76,"def": 64,"spatk": 45,"spdef": 55,"spd": 90},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 163,
   "name": "咕咕",
   "race": {"hp": 60,"atk": 30,"def": 30,"spatk": 36,"spdef": 56,"spd": 50},
   "type1": 0,
   "type2": 2,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 164,
   "name": "猫头夜鹰",
   "race": {"hp": 100,"atk": 50,"def": 50,"spatk": 76,"spdef": 96,"spd": 70},
   "type1": 0,
   "type2": 2,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 165,
   "name": "芭瓢虫",
   "race": {"hp": 40,"atk": 20,"def": 30,"spatk": 40,"spdef": 80,"spd": 55},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 166,
   "name": "安瓢虫",
   "race": {"hp": 55,"atk": 35,"def": 50,"spatk": 55,"spdef": 110,"spd": 85},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 167,
   "name": "线球",
   "race": {"hp": 40,"atk": 60,"def": 40,"spatk": 40,"spdef": 40,"spd": 30},
   "type1": 6,
   "type2": 3,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 168,
   "name": "阿利多斯",
   "race": {"hp": 70,"atk": 90,"def": 70,"spatk": 60,"spdef": 60,"spd": 40},
   "type1": 6,
   "type2": 3,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 169,
   "name": "叉字蝠",
   "race": {"hp": 85,"atk": 90,"def": 80,"spatk": 70,"spdef": 80,"spd": 130},
   "type1": 3,
   "type2": 2,
   "eff": [0,0,0,0,0,3]
  },
  {
   "no": 170,
   "name": "灯笼鱼",
   "race": {"hp": 75,"atk": 38,"def": 38,"spatk": 56,"spdef": 56,"spd": 67},
   "type1": 11,
   "type2": 13,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 171,
   "name": "电灯怪",
   "race": {"hp": 125,"atk": 58,"def": 58,"spatk": 76,"spdef": 76,"spd": 67},
   "type1": 11,
   "type2": 13,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 172,
   "name": "皮丘",
   "race": {"hp": 20,"atk": 40,"def": 15,"spatk": 35,"spdef": 35,"spd": 60},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 173,
   "name": "皮宝宝",
   "race": {"hp": 50,"atk": 25,"def": 28,"spatk": 45,"spdef": 55,"spd": 15},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 174,
   "name": "宝宝丁",
   "race": {"hp": 90,"atk": 30,"def": 15,"spatk": 40,"spdef": 20,"spd": 15},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 175,
   "name": "波克比",
   "race": {"hp": 35,"atk": 20,"def": 65,"spatk": 40,"spdef": 65,"spd": 20},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 176,
   "name": "波克基古",
   "race": {"hp": 55,"atk": 40,"def": 85,"spatk": 80,"spdef": 105,"spd": 40},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 177,
   "name": "天然雀",
   "race": {"hp": 40,"atk": 50,"def": 45,"spatk": 70,"spdef": 45,"spd": 70},
   "type1": 14,
   "type2": 2,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 178,
   "name": "天然鸟",
   "race": {"hp": 65,"atk": 75,"def": 70,"spatk": 95,"spdef": 70,"spd": 95},
   "type1": 14,
   "type2": 2,
   "eff": [0,0,0,1,0,1]
  },
  {
   "no": 179,
   "name": "咩利羊",
   "race": {"hp": 55,"atk": 40,"def": 40,"spatk": 65,"spdef": 45,"spd": 35},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 180,
   "name": "绵绵",
   "race": {"hp": 70,"atk": 55,"def": 55,"spatk": 80,"spdef": 60,"spd": 45},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 181,
   "name": "电龙",
   "race": {"hp": 90,"atk": 75,"def": 75,"spatk": 115,"spdef": 90,"spd": 55},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 182,
   "name": "美丽花",
   "race": {"hp": 75,"atk": 80,"def": 85,"spatk": 90,"spdef": 100,"spd": 50},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 183,
   "name": "玛力露",
   "race": {"hp": 70,"atk": 20,"def": 50,"spatk": 20,"spdef": 50,"spd": 40},
   "type1": 11,
   "type2": 11,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 184,
   "name": "玛力露丽",
   "race": {"hp": 100,"atk": 50,"def": 80,"spatk": 50,"spdef": 80,"spd": 50},
   "type1": 11,
   "type2": 11,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 185,
   "name": "胡说树",
   "race": {"hp": 70,"atk": 100,"def": 115,"spatk": 30,"spdef": 65,"spd": 30},
   "type1": 5,
   "type2": 5,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 186,
   "name": "牛蛙君",
   "race": {"hp": 90,"atk": 75,"def": 75,"spatk": 90,"spdef": 100,"spd": 70},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 187,
   "name": "毽子草",
   "race": {"hp": 35,"atk": 35,"def": 40,"spatk": 35,"spdef": 55,"spd": 50},
   "type1": 12,
   "type2": 2,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 188,
   "name": "毽子花",
   "race": {"hp": 55,"atk": 45,"def": 50,"spatk": 45,"spdef": 65,"spd": 80},
   "type1": 12,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 189,
   "name": "毽子绵",
   "race": {"hp": 75,"atk": 55,"def": 70,"spatk": 55,"spdef": 85,"spd": 110},
   "type1": 12,
   "type2": 2,
   "eff": [0,0,0,0,0,3]
  },
  {
   "no": 190,
   "name": "长尾怪手",
   "race": {"hp": 55,"atk": 70,"def": 55,"spatk": 40,"spdef": 55,"spd": 85},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 191,
   "name": "向日种子",
   "race": {"hp": 30,"atk": 30,"def": 30,"spatk": 30,"spdef": 30,"spd": 30},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 192,
   "name": "向日花怪",
   "race": {"hp": 75,"atk": 75,"def": 55,"spatk": 105,"spdef": 85,"spd": 30},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 193,
   "name": "阳阳玛",
   "race": {"hp": 65,"atk": 65,"def": 45,"spatk": 75,"spdef": 45,"spd": 95},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 194,
   "name": "乌波",
   "race": {"hp": 55,"atk": 45,"def": 45,"spatk": 25,"spdef": 25,"spd": 15},
   "type1": 11,
   "type2": 4,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 195,
   "name": "沼王",
   "race": {"hp": 95,"atk": 85,"def": 85,"spatk": 65,"spdef": 65,"spd": 35},
   "type1": 11,
   "type2": 4,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 196,
   "name": "太阳精灵",
   "race": {"hp": 65,"atk": 65,"def": 60,"spatk": 130,"spdef": 95,"spd": 110},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 197,
   "name": "月精灵",
   "race": {"hp": 95,"atk": 65,"def": 110,"spatk": 60,"spdef": 130,"spd": 65},
   "type1": 17,
   "type2": 17,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 198,
   "name": "黑暗鸦",
   "race": {"hp": 60,"atk": 85,"def": 42,"spatk": 85,"spdef": 42,"spd": 91},
   "type1": 17,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 199,
   "name": "河马王",
   "race": {"hp": 95,"atk": 75,"def": 80,"spatk": 100,"spdef": 110,"spd": 30},
   "type1": 11,
   "type2": 14,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 200,
   "name": "梦妖",
   "race": {"hp": 60,"atk": 60,"def": 60,"spatk": 85,"spdef": 85,"spd": 85},
   "type1": 7,
   "type2": 7,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 201,
   "name": "未知图腾",
   "race": {"hp": 48,"atk": 72,"def": 48,"spatk": 72,"spdef": 48,"spd": 48},
   "type1": 14,
   "type2": 14,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 202,
   "name": "果然翁",
   "race": {"hp": 190,"atk": 33,"def": 58,"spatk": 33,"spdef": 58,"spd": 33},
   "type1": 14,
   "type2": 14,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 203,
   "name": "麒麟奇",
   "race": {"hp": 70,"atk": 80,"def": 65,"spatk": 90,"spdef": 65,"spd": 85},
   "type1": 0,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 204,
   "name": "榛果球",
   "race": {"hp": 50,"atk": 65,"def": 90,"spatk": 35,"spdef": 35,"spd": 15},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 205,
   "name": "佛烈托斯",
   "race": {"hp": 75,"atk": 90,"def": 140,"spatk": 60,"spdef": 60,"spd": 40},
   "type1": 6,
   "type2": 8,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 206,
   "name": "土龙弟弟",
   "race": {"hp": 100,"atk": 70,"def": 70,"spatk": 65,"spdef": 65,"spd": 45},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 207,
   "name": "天蝎",
   "race": {"hp": 65,"atk": 75,"def": 105,"spatk": 35,"spdef": 65,"spd": 85},
   "type1": 4,
   "type2": 2,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 208,
   "name": "大钢蛇",
   "race": {"hp": 75,"atk": 85,"def": 200,"spatk": 55,"spdef": 65,"spd": 30},
   "type1": 8,
   "type2": 4,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 209,
   "name": "布卢",
   "race": {"hp": 60,"atk": 80,"def": 50,"spatk": 40,"spdef": 40,"spd": 30},
   "type1": 0,
   "type2": 0,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 210,
   "name": "布卢皇",
   "race": {"hp": 90,"atk": 120,"def": 75,"spatk": 60,"spdef": 60,"spd": 45},
   "type1": 0,
   "type2": 0,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 211,
   "name": "千针鱼",
   "race": {"hp": 65,"atk": 95,"def": 75,"spatk": 55,"spdef": 55,"spd": 85},
   "type1": 11,
   "type2": 3,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 212,
   "name": "巨钳螳螂",
   "race": {"hp": 70,"atk": 130,"def": 100,"spatk": 55,"spdef": 80,"spd": 65},
   "type1": 6,
   "type2": 8,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 213,
   "name": "壶壶",
   "race": {"hp": 20,"atk": 10,"def": 230,"spatk": 10,"spdef": 230,"spd": 5},
   "type1": 6,
   "type2": 5,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 214,
   "name": "赫拉克罗斯",
   "race": {"hp": 80,"atk": 125,"def": 75,"spatk": 40,"spdef": 95,"spd": 85},
   "type1": 6,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 215,
   "name": "狃拉",
   "race": {"hp": 55,"atk": 95,"def": 55,"spatk": 35,"spdef": 75,"spd": 115},
   "type1": 17,
   "type2": 15,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 216,
   "name": "熊宝宝",
   "race": {"hp": 60,"atk": 80,"def": 50,"spatk": 50,"spdef": 50,"spd": 40},
   "type1": 0,
   "type2": 0,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 217,
   "name": "圈圈熊",
   "race": {"hp": 90,"atk": 130,"def": 75,"spatk": 75,"spdef": 75,"spd": 55},
   "type1": 0,
   "type2": 0,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 218,
   "name": "熔岩虫",
   "race": {"hp": 40,"atk": 40,"def": 40,"spatk": 70,"spdef": 40,"spd": 20},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 219,
   "name": "熔岩蜗牛",
   "race": {"hp": 50,"atk": 50,"def": 120,"spatk": 80,"spdef": 80,"spd": 30},
   "type1": 10,
   "type2": 5,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 220,
   "name": "小山猪",
   "race": {"hp": 50,"atk": 50,"def": 40,"spatk": 30,"spdef": 30,"spd": 50},
   "type1": 15,
   "type2": 4,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 221,
   "name": "长毛猪",
   "race": {"hp": 100,"atk": 100,"def": 80,"spatk": 60,"spdef": 60,"spd": 50},
   "type1": 15,
   "type2": 4,
   "eff": [1,1,0,0,0,0]
  },
  {
   "no": 222,
   "name": "太阳珊瑚",
   "race": {"hp": 55,"atk": 55,"def": 85,"spatk": 65,"spdef": 85,"spd": 35},
   "type1": 11,
   "type2": 5,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 223,
   "name": "铁炮鱼",
   "race": {"hp": 35,"atk": 65,"def": 35,"spatk": 65,"spdef": 35,"spd": 65},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 224,
   "name": "章鱼桶",
   "race": {"hp": 75,"atk": 105,"def": 75,"spatk": 105,"spdef": 75,"spd": 45},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 225,
   "name": "信使鸟",
   "race": {"hp": 45,"atk": 55,"def": 45,"spatk": 65,"spdef": 45,"spd": 75},
   "type1": 15,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 226,
   "name": "巨翅飞鱼",
   "race": {"hp": 65,"atk": 40,"def": 70,"spatk": 80,"spdef": 140,"spd": 70},
   "type1": 11,
   "type2": 2,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 227,
   "name": "盔甲鸟",
   "race": {"hp": 65,"atk": 80,"def": 140,"spatk": 40,"spdef": 70,"spd": 70},
   "type1": 8,
   "type2": 2,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 228,
   "name": "戴鲁比",
   "race": {"hp": 45,"atk": 60,"def": 30,"spatk": 80,"spdef": 50,"spd": 65},
   "type1": 17,
   "type2": 10,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 229,
   "name": "黑鲁加",
   "race": {"hp": 75,"atk": 90,"def": 50,"spatk": 110,"spdef": 80,"spd": 95},
   "type1": 17,
   "type2": 10,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 230,
   "name": "刺龙王",
   "race": {"hp": 75,"atk": 95,"def": 95,"spatk": 95,"spdef": 95,"spd": 85},
   "type1": 11,
   "type2": 16,
   "eff": [0,1,0,1,1,0]
  },
  {
   "no": 231,
   "name": "小小象",
   "race": {"hp": 90,"atk": 60,"def": 60,"spatk": 40,"spdef": 40,"spd": 40},
   "type1": 4,
   "type2": 4,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 232,
   "name": "顿甲",
   "race": {"hp": 90,"atk": 120,"def": 120,"spatk": 60,"spdef": 60,"spd": 50},
   "type1": 4,
   "type2": 4,
   "eff": [0,1,1,0,0,0]
  },
  {
   "no": 233,
   "name": "3D龙II",
   "race": {"hp": 85,"atk": 80,"def": 90,"spatk": 105,"spdef": 95,"spd": 60},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 234,
   "name": "惊角鹿",
   "race": {"hp": 73,"atk": 95,"def": 62,"spatk": 85,"spdef": 65,"spd": 85},
   "type1": 0,
   "type2": 0,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 235,
   "name": "图图犬",
   "race": {"hp": 55,"atk": 20,"def": 35,"spatk": 20,"spdef": 45,"spd": 75},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 236,
   "name": "巴尔郎",
   "race": {"hp": 35,"atk": 35,"def": 35,"spatk": 35,"spdef": 35,"spd": 35},
   "type1": 1,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 237,
   "name": "柯波朗",
   "race": {"hp": 50,"atk": 95,"def": 95,"spatk": 35,"spdef": 110,"spd": 70},
   "type1": 1,
   "type2": 1,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 238,
   "name": "迷唇娃",
   "race": {"hp": 45,"atk": 30,"def": 15,"spatk": 85,"spdef": 65,"spd": 65},
   "type1": 15,
   "type2": 14,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 239,
   "name": "电击怪",
   "race": {"hp": 45,"atk": 63,"def": 37,"spatk": 65,"spdef": 55,"spd": 95},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 240,
   "name": "小鸭嘴龙",
   "race": {"hp": 45,"atk": 75,"def": 37,"spatk": 70,"spdef": 55,"spd": 83},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 241,
   "name": "大奶罐",
   "race": {"hp": 95,"atk": 80,"def": 105,"spatk": 40,"spdef": 70,"spd": 100},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 242,
   "name": "幸福蛋",
   "race": {"hp": 255,"atk": 10,"def": 10,"spatk": 75,"spdef": 135,"spd": 55},
   "type1": 0,
   "type2": 0,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 243,
   "name": "雷公",
   "race": {"hp": 90,"atk": 85,"def": 75,"spatk": 115,"spdef": 100,"spd": 115},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,1,0,2]
  },
  {
   "no": 244,
   "name": "炎帝",
   "race": {"hp": 115,"atk": 115,"def": 85,"spatk": 90,"spdef": 75,"spd": 100},
   "type1": 10,
   "type2": 10,
   "eff": [1,2,0,0,0,0]
  },
  {
   "no": 245,
   "name": "水君",
   "race": {"hp": 100,"atk": 75,"def": 115,"spatk": 90,"spdef": 115,"spd": 85},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,1,0,2,0]
  },
  {
   "no": 246,
   "name": "由基拉",
   "race": {"hp": 50,"atk": 64,"def": 50,"spatk": 45,"spdef": 50,"spd": 41},
   "type1": 5,
   "type2": 4,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 247,
   "name": "沙基拉",
   "race": {"hp": 70,"atk": 84,"def": 70,"spatk": 65,"spdef": 70,"spd": 51},
   "type1": 5,
   "type2": 4,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 248,
   "name": "班吉拉",
   "race": {"hp": 100,"atk": 134,"def": 110,"spatk": 95,"spdef": 100,"spd": 61},
   "type1": 5,
   "type2": 17,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 249,
   "name": "洛奇亚",
   "race": {"hp": 106,"atk": 90,"def": 130,"spatk": 90,"spdef": 154,"spd": 110},
   "type1": 14,
   "type2": 2,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 250,
   "name": "凤王",
   "race": {"hp": 106,"atk": 130,"def": 90,"spatk": 110,"spdef": 154,"spd": 90},
   "type1": 10,
   "type2": 2,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 251,
   "name": "雪拉比",
   "race": {"hp": 100,"atk": 100,"def": 100,"spatk": 100,"spdef": 100,"spd": 100},
   "type1": 14,
   "type2": 12,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 252,
   "name": "木守宫",
   "race": {"hp": 40,"atk": 45,"def": 35,"spatk": 65,"spdef": 55,"spd": 70},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 253,
   "name": "森林蜥蜴",
   "race": {"hp": 50,"atk": 65,"def": 45,"spatk": 85,"spdef": 65,"spd": 95},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 254,
   "name": "蜥蜴王",
   "race": {"hp": 70,"atk": 85,"def": 65,"spatk": 105,"spdef": 85,"spd": 120},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,3]
  },
  {
   "no": 255,
   "name": "火稚鸡",
   "race": {"hp": 45,"atk": 60,"def": 40,"spatk": 70,"spdef": 50,"spd": 45},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 256,
   "name": "力壮鸡",
   "race": {"hp": 60,"atk": 85,"def": 60,"spatk": 85,"spdef": 60,"spd": 55},
   "type1": 10,
   "type2": 1,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 257,
   "name": "火焰鸡",
   "race": {"hp": 80,"atk": 120,"def": 70,"spatk": 110,"spdef": 70,"spd": 80},
   "type1": 10,
   "type2": 1,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 258,
   "name": "水跃鱼",
   "race": {"hp": 50,"atk": 70,"def": 50,"spatk": 50,"spdef": 50,"spd": 40},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 259,
   "name": "沼跃鱼",
   "race": {"hp": 70,"atk": 85,"def": 70,"spatk": 60,"spdef": 70,"spd": 50},
   "type1": 11,
   "type2": 4,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 260,
   "name": "巨沼怪",
   "race": {"hp": 100,"atk": 110,"def": 90,"spatk": 85,"spdef": 90,"spd": 60},
   "type1": 11,
   "type2": 4,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 261,
   "name": "土狼犬",
   "race": {"hp": 35,"atk": 55,"def": 35,"spatk": 30,"spdef": 30,"spd": 35},
   "type1": 17,
   "type2": 17,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 262,
   "name": "大狼犬",
   "race": {"hp": 70,"atk": 90,"def": 70,"spatk": 60,"spdef": 60,"spd": 70},
   "type1": 17,
   "type2": 17,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 263,
   "name": "蛇纹熊",
   "race": {"hp": 38,"atk": 30,"def": 41,"spatk": 30,"spdef": 41,"spd": 60},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 264,
   "name": "直冲熊",
   "race": {"hp": 78,"atk": 70,"def": 61,"spatk": 50,"spdef": 61,"spd": 100},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 265,
   "name": "刺尾虫",
   "race": {"hp": 45,"atk": 45,"def": 35,"spatk": 20,"spdef": 30,"spd": 20},
   "type1": 6,
   "type2": 6,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 266,
   "name": "甲壳蛹",
   "race": {"hp": 50,"atk": 35,"def": 55,"spatk": 25,"spdef": 25,"spd": 15},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 267,
   "name": "狩猎凤蝶",
   "race": {"hp": 60,"atk": 70,"def": 50,"spatk": 90,"spdef": 50,"spd": 65},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 268,
   "name": "盾甲茧",
   "race": {"hp": 50,"atk": 35,"def": 55,"spatk": 25,"spdef": 25,"spd": 15},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 269,
   "name": "毒粉蝶",
   "race": {"hp": 60,"atk": 50,"def": 70,"spatk": 50,"spdef": 90,"spd": 65},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 270,
   "name": "莲叶童子",
   "race": {"hp": 40,"atk": 30,"def": 30,"spatk": 40,"spdef": 50,"spd": 30},
   "type1": 11,
   "type2": 12,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 271,
   "name": "莲帽小童",
   "race": {"hp": 60,"atk": 50,"def": 50,"spatk": 60,"spdef": 70,"spd": 50},
   "type1": 11,
   "type2": 12,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 272,
   "name": "乐天河童",
   "race": {"hp": 80,"atk": 70,"def": 70,"spatk": 90,"spdef": 100,"spd": 70},
   "type1": 11,
   "type2": 12,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 273,
   "name": "橡实果",
   "race": {"hp": 40,"atk": 40,"def": 50,"spatk": 30,"spdef": 30,"spd": 30},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 274,
   "name": "长鼻叶",
   "race": {"hp": 70,"atk": 70,"def": 40,"spatk": 60,"spdef": 40,"spd": 60},
   "type1": 12,
   "type2": 17,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 275,
   "name": "狡猾天狗",
   "race": {"hp": 90,"atk": 100,"def": 60,"spatk": 90,"spdef": 60,"spd": 80},
   "type1": 12,
   "type2": 17,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 276,
   "name": "傲骨燕",
   "race": {"hp": 40,"atk": 55,"def": 30,"spatk": 30,"spdef": 30,"spd": 85},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 277,
   "name": "大王燕",
   "race": {"hp": 60,"atk": 85,"def": 60,"spatk": 50,"spdef": 50,"spd": 125},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 278,
   "name": "长翅鸥",
   "race": {"hp": 40,"atk": 30,"def": 30,"spatk": 55,"spdef": 30,"spd": 85},
   "type1": 11,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 279,
   "name": "大嘴鸥",
   "race": {"hp": 60,"atk": 50,"def": 100,"spatk": 85,"spdef": 70,"spd": 65},
   "type1": 11,
   "type2": 2,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 280,
   "name": "拉鲁拉丝",
   "race": {"hp": 28,"atk": 25,"def": 25,"spatk": 45,"spdef": 35,"spd": 40},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 281,
   "name": "奇鲁莉安",
   "race": {"hp": 38,"atk": 35,"def": 35,"spatk": 65,"spdef": 55,"spd": 50},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 282,
   "name": "沙奈朵",
   "race": {"hp": 68,"atk": 65,"def": 65,"spatk": 125,"spdef": 115,"spd": 80},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 283,
   "name": "溜溜糖球",
   "race": {"hp": 40,"atk": 30,"def": 32,"spatk": 50,"spdef": 52,"spd": 65},
   "type1": 6,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 284,
   "name": "雨翅蛾",
   "race": {"hp": 70,"atk": 60,"def": 62,"spatk": 80,"spdef": 82,"spd": 60},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,1,1,0]
  },
  {
   "no": 285,
   "name": "蘑蘑菇",
   "race": {"hp": 60,"atk": 40,"def": 60,"spatk": 40,"spdef": 60,"spd": 35},
   "type1": 12,
   "type2": 12,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 286,
   "name": "斗笠菇",
   "race": {"hp": 60,"atk": 130,"def": 80,"spatk": 60,"spdef": 60,"spd": 70},
   "type1": 12,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 287,
   "name": "懒人翁",
   "race": {"hp": 60,"atk": 60,"def": 60,"spatk": 35,"spdef": 35,"spd": 30},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 288,
   "name": "过动猿",
   "race": {"hp": 80,"atk": 80,"def": 80,"spatk": 55,"spdef": 55,"spd": 90},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 289,
   "name": "请假王",
   "race": {"hp": 150,"atk": 160,"def": 100,"spatk": 95,"spdef": 65,"spd": 100},
   "type1": 0,
   "type2": 0,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 290,
   "name": "土居忍士",
   "race": {"hp": 31,"atk": 45,"def": 90,"spatk": 30,"spdef": 30,"spd": 40},
   "type1": 6,
   "type2": 4,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 291,
   "name": "铁面忍者",
   "race": {"hp": 61,"atk": 90,"def": 45,"spatk": 50,"spdef": 50,"spd": 160},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 292,
   "name": "脱壳忍者",
   "race": {"hp": 1,"atk": 90,"def": 45,"spatk": 30,"spdef": 30,"spd": 40},
   "type1": 6,
   "type2": 7,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 293,
   "name": "咕妞妞",
   "race": {"hp": 64,"atk": 51,"def": 23,"spatk": 51,"spdef": 23,"spd": 28},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 294,
   "name": "吼爆弹",
   "race": {"hp": 84,"atk": 71,"def": 43,"spatk": 71,"spdef": 43,"spd": 48},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 295,
   "name": "爆音怪",
   "race": {"hp": 104,"atk": 91,"def": 63,"spatk": 91,"spdef": 63,"spd": 68},
   "type1": 0,
   "type2": 0,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 296,
   "name": "幕下力士",
   "race": {"hp": 72,"atk": 60,"def": 30,"spatk": 20,"spdef": 30,"spd": 25},
   "type1": 1,
   "type2": 1,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 297,
   "name": "超力王",
   "race": {"hp": 144,"atk": 120,"def": 60,"spatk": 40,"spdef": 60,"spd": 50},
   "type1": 1,
   "type2": 1,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 298,
   "name": "露力丽",
   "race": {"hp": 50,"atk": 20,"def": 40,"spatk": 20,"spdef": 40,"spd": 20},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 299,
   "name": "朝北鼻",
   "race": {"hp": 30,"atk": 45,"def": 135,"spatk": 45,"spdef": 90,"spd": 30},
   "type1": 5,
   "type2": 5,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 300,
   "name": "向尾喵",
   "race": {"hp": 50,"atk": 45,"def": 45,"spatk": 35,"spdef": 35,"spd": 50},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 301,
   "name": "优雅猫",
   "race": {"hp": 70,"atk": 65,"def": 65,"spatk": 55,"spdef": 55,"spd": 70},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,1]
  },
  {
   "no": 302,
   "name": "勾魂眼",
   "race": {"hp": 50,"atk": 75,"def": 75,"spatk": 65,"spdef": 65,"spd": 50},
   "type1": 17,
   "type2": 7,
   "eff": [0,1,1,0,0,0]
  },
  {
   "no": 303,
   "name": "大嘴娃",
   "race": {"hp": 50,"atk": 85,"def": 85,"spatk": 55,"spdef": 55,"spd": 50},
   "type1": 8,
   "type2": 8,
   "eff": [0,1,1,0,0,0]
  },
  {
   "no": 304,
   "name": "可可多拉",
   "race": {"hp": 50,"atk": 70,"def": 100,"spatk": 40,"spdef": 40,"spd": 30},
   "type1": 8,
   "type2": 5,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 305,
   "name": "可多拉",
   "race": {"hp": 60,"atk": 90,"def": 140,"spatk": 50,"spdef": 50,"spd": 40},
   "type1": 8,
   "type2": 5,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 306,
   "name": "波士可多拉",
   "race": {"hp": 70,"atk": 110,"def": 180,"spatk": 60,"spdef": 60,"spd": 50},
   "type1": 8,
   "type2": 5,
   "eff": [0,0,3,0,0,0]
  },
  {
   "no": 307,
   "name": "玛沙那",
   "race": {"hp": 30,"atk": 40,"def": 55,"spatk": 40,"spdef": 55,"spd": 60},
   "type1": 1,
   "type2": 14,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 308,
   "name": "恰雷姆",
   "race": {"hp": 60,"atk": 60,"def": 75,"spatk": 60,"spdef": 75,"spd": 80},
   "type1": 1,
   "type2": 14,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 309,
   "name": "落雷兽",
   "race": {"hp": 40,"atk": 45,"def": 40,"spatk": 65,"spdef": 40,"spd": 65},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 310,
   "name": "雷电兽",
   "race": {"hp": 70,"atk": 75,"def": 60,"spatk": 105,"spdef": 60,"spd": 105},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 311,
   "name": "正电拍拍",
   "race": {"hp": 60,"atk": 50,"def": 40,"spatk": 85,"spdef": 75,"spd": 95},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 312,
   "name": "负电拍拍",
   "race": {"hp": 60,"atk": 40,"def": 50,"spatk": 75,"spdef": 85,"spd": 95},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 313,
   "name": "电萤虫",
   "race": {"hp": 65,"atk": 73,"def": 55,"spatk": 47,"spdef": 75,"spd": 85},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 314,
   "name": "甜甜萤",
   "race": {"hp": 65,"atk": 47,"def": 55,"spatk": 73,"spdef": 75,"spd": 85},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 315,
   "name": "毒蔷薇",
   "race": {"hp": 50,"atk": 60,"def": 45,"spatk": 100,"spdef": 80,"spd": 65},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 316,
   "name": "溶食兽",
   "race": {"hp": 70,"atk": 43,"def": 53,"spatk": 43,"spdef": 53,"spd": 40},
   "type1": 3,
   "type2": 3,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 317,
   "name": "吞食兽",
   "race": {"hp": 100,"atk": 73,"def": 83,"spatk": 73,"spdef": 83,"spd": 55},
   "type1": 3,
   "type2": 3,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 318,
   "name": "利牙鱼",
   "race": {"hp": 45,"atk": 90,"def": 20,"spatk": 65,"spdef": 20,"spd": 65},
   "type1": 11,
   "type2": 17,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 319,
   "name": "巨牙鲨",
   "race": {"hp": 70,"atk": 120,"def": 40,"spatk": 95,"spdef": 40,"spd": 95},
   "type1": 11,
   "type2": 17,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 320,
   "name": "吼吼鲸",
   "race": {"hp": 130,"atk": 70,"def": 35,"spatk": 70,"spdef": 35,"spd": 60},
   "type1": 11,
   "type2": 11,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 321,
   "name": "吼鲸王",
   "race": {"hp": 170,"atk": 90,"def": 45,"spatk": 90,"spdef": 45,"spd": 60},
   "type1": 11,
   "type2": 11,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 322,
   "name": "呆火驼",
   "race": {"hp": 60,"atk": 60,"def": 40,"spatk": 65,"spdef": 45,"spd": 35},
   "type1": 10,
   "type2": 4,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 323,
   "name": "喷火驼",
   "race": {"hp": 70,"atk": 100,"def": 70,"spatk": 105,"spdef": 75,"spd": 40},
   "type1": 10,
   "type2": 4,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 324,
   "name": "煤炭龟",
   "race": {"hp": 70,"atk": 85,"def": 140,"spatk": 85,"spdef": 70,"spd": 20},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 325,
   "name": "跳跳猪",
   "race": {"hp": 60,"atk": 25,"def": 35,"spatk": 70,"spdef": 80,"spd": 60},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 326,
   "name": "噗噗猪",
   "race": {"hp": 80,"atk": 45,"def": 65,"spatk": 90,"spdef": 110,"spd": 80},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 327,
   "name": "晃晃斑",
   "race": {"hp": 60,"atk": 60,"def": 60,"spatk": 60,"spdef": 60,"spd": 60},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 328,
   "name": "大颚蚁",
   "race": {"hp": 45,"atk": 100,"def": 45,"spatk": 45,"spdef": 45,"spd": 10},
   "type1": 4,
   "type2": 4,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 329,
   "name": "超音波幼虫",
   "race": {"hp": 50,"atk": 70,"def": 50,"spatk": 50,"spdef": 50,"spd": 70},
   "type1": 4,
   "type2": 16,
   "eff": [0,1,0,0,0,1]
  },
  {
   "no": 330,
   "name": "沙漠蜻蜓",
   "race": {"hp": 80,"atk": 100,"def": 80,"spatk": 80,"spdef": 80,"spd": 100},
   "type1": 4,
   "type2": 16,
   "eff": [0,1,0,0,0,2]
  },
  {
   "no": 331,
   "name": "沙漠奈亚",
   "race": {"hp": 50,"atk": 85,"def": 40,"spatk": 85,"spdef": 40,"spd": 35},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 332,
   "name": "梦歌奈亚",
   "race": {"hp": 70,"atk": 115,"def": 60,"spatk": 115,"spdef": 60,"spd": 55},
   "type1": 12,
   "type2": 17,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 333,
   "name": "青绵鸟",
   "race": {"hp": 45,"atk": 40,"def": 60,"spatk": 40,"spdef": 75,"spd": 50},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 334,
   "name": "七夕青鸟",
   "race": {"hp": 75,"atk": 70,"def": 90,"spatk": 70,"spdef": 105,"spd": 80},
   "type1": 16,
   "type2": 2,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 335,
   "name": "猫鼬斩",
   "race": {"hp": 73,"atk": 115,"def": 60,"spatk": 60,"spdef": 60,"spd": 90},
   "type1": 0,
   "type2": 0,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 336,
   "name": "饭匙蛇",
   "race": {"hp": 73,"atk": 100,"def": 60,"spatk": 100,"spdef": 60,"spd": 65},
   "type1": 3,
   "type2": 3,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 337,
   "name": "月石",
   "race": {"hp": 70,"atk": 55,"def": 65,"spatk": 95,"spdef": 85,"spd": 70},
   "type1": 5,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 338,
   "name": "太阳岩",
   "race": {"hp": 70,"atk": 95,"def": 85,"spatk": 55,"spdef": 65,"spd": 70},
   "type1": 5,
   "type2": 14,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 339,
   "name": "泥泥鳅",
   "race": {"hp": 50,"atk": 48,"def": 43,"spatk": 46,"spdef": 41,"spd": 60},
   "type1": 11,
   "type2": 4,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 340,
   "name": "鲶鱼王",
   "race": {"hp": 110,"atk": 78,"def": 73,"spatk": 76,"spdef": 71,"spd": 60},
   "type1": 11,
   "type2": 4,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 341,
   "name": "龙虾小兵",
   "race": {"hp": 43,"atk": 80,"def": 65,"spatk": 50,"spdef": 35,"spd": 35},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 342,
   "name": "铁螯龙虾",
   "race": {"hp": 63,"atk": 120,"def": 85,"spatk": 90,"spdef": 55,"spd": 55},
   "type1": 11,
   "type2": 17,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 343,
   "name": "天秤偶",
   "race": {"hp": 40,"atk": 40,"def": 55,"spatk": 40,"spdef": 70,"spd": 55},
   "type1": 4,
   "type2": 14,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 344,
   "name": "念力土偶",
   "race": {"hp": 60,"atk": 70,"def": 105,"spatk": 70,"spdef": 120,"spd": 75},
   "type1": 4,
   "type2": 14,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 345,
   "name": "触手百合",
   "race": {"hp": 66,"atk": 41,"def": 77,"spatk": 61,"spdef": 87,"spd": 23},
   "type1": 5,
   "type2": 12,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 346,
   "name": "摇篮百合",
   "race": {"hp": 86,"atk": 81,"def": 97,"spatk": 81,"spdef": 107,"spd": 43},
   "type1": 5,
   "type2": 12,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 347,
   "name": "太古羽虫",
   "race": {"hp": 45,"atk": 95,"def": 50,"spatk": 40,"spdef": 50,"spd": 75},
   "type1": 5,
   "type2": 6,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 348,
   "name": "太古盔甲",
   "race": {"hp": 75,"atk": 125,"def": 100,"spatk": 70,"spdef": 80,"spd": 45},
   "type1": 5,
   "type2": 6,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 349,
   "name": "笨笨鱼",
   "race": {"hp": 20,"atk": 15,"def": 20,"spatk": 10,"spdef": 55,"spd": 80},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 350,
   "name": "美纳斯",
   "race": {"hp": 95,"atk": 60,"def": 79,"spatk": 100,"spdef": 125,"spd": 81},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 351,
   "name": "漂浮泡泡（一般）",
   "race": {"hp": 70,"atk": 70,"def": 70,"spatk": 70,"spdef": 70,"spd": 70},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 352,
   "name": "漂浮泡泡（太阳）",
   "race": {"hp": 60,"atk": 90,"def": 70,"spatk": 60,"spdef": 120,"spd": 40},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 353,
   "name": "漂浮泡泡（雨水）",
   "race": {"hp": 44,"atk": 75,"def": 35,"spatk": 63,"spdef": 33,"spd": 45},
   "type1": 7,
   "type2": 7,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 354,
   "name": "漂浮泡泡（雪云）",
   "race": {"hp": 64,"atk": 115,"def": 65,"spatk": 83,"spdef": 63,"spd": 65},
   "type1": 7,
   "type2": 7,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 355,
   "name": "变隐龙",
   "race": {"hp": 20,"atk": 40,"def": 90,"spatk": 30,"spdef": 90,"spd": 25},
   "type1": 7,
   "type2": 7,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 356,
   "name": "怨影娃娃",
   "race": {"hp": 40,"atk": 70,"def": 130,"spatk": 60,"spdef": 130,"spd": 25},
   "type1": 7,
   "type2": 7,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 357,
   "name": "诅咒娃娃",
   "race": {"hp": 99,"atk": 68,"def": 83,"spatk": 72,"spdef": 87,"spd": 51},
   "type1": 12,
   "type2": 2,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 358,
   "name": "夜骷颅",
   "race": {"hp": 65,"atk": 50,"def": 70,"spatk": 95,"spdef": 80,"spd": 65},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,1,1,0]
  },
  {
   "no": 359,
   "name": "夜巨人",
   "race": {"hp": 65,"atk": 130,"def": 60,"spatk": 75,"spdef": 60,"spd": 75},
   "type1": 17,
   "type2": 17,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 360,
   "name": "热带龙",
   "race": {"hp": 95,"atk": 23,"def": 48,"spatk": 23,"spdef": 48,"spd": 23},
   "type1": 14,
   "type2": 14,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 361,
   "name": "风铃铃",
   "race": {"hp": 50,"atk": 50,"def": 50,"spatk": 50,"spdef": 50,"spd": 50},
   "type1": 15,
   "type2": 15,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 362,
   "name": "阿勃梭鲁",
   "race": {"hp": 80,"atk": 80,"def": 80,"spatk": 80,"spdef": 80,"spd": 80},
   "type1": 15,
   "type2": 15,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 363,
   "name": "小果然",
   "race": {"hp": 70,"atk": 40,"def": 50,"spatk": 55,"spdef": 50,"spd": 25},
   "type1": 15,
   "type2": 11,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 364,
   "name": "雪童子",
   "race": {"hp": 90,"atk": 60,"def": 70,"spatk": 75,"spdef": 70,"spd": 45},
   "type1": 15,
   "type2": 11,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 365,
   "name": "冰鬼护",
   "race": {"hp": 110,"atk": 80,"def": 90,"spatk": 95,"spdef": 90,"spd": 65},
   "type1": 15,
   "type2": 11,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 366,
   "name": "海豹球",
   "race": {"hp": 35,"atk": 64,"def": 85,"spatk": 74,"spdef": 55,"spd": 32},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 367,
   "name": "海魔狮",
   "race": {"hp": 55,"atk": 104,"def": 105,"spatk": 94,"spdef": 75,"spd": 52},
   "type1": 11,
   "type2": 11,
   "eff": [0,1,1,0,0,0]
  },
  {
   "no": 368,
   "name": "帝牙海狮",
   "race": {"hp": 55,"atk": 84,"def": 105,"spatk": 114,"spdef": 75,"spd": 52},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 369,
   "name": "珍珠贝",
   "race": {"hp": 100,"atk": 90,"def": 130,"spatk": 45,"spdef": 65,"spd": 55},
   "type1": 11,
   "type2": 5,
   "eff": [1,0,1,0,0,0]
  },
  {
   "no": 370,
   "name": "猎斑鱼",
   "race": {"hp": 43,"atk": 30,"def": 55,"spatk": 40,"spdef": 65,"spd": 97},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 371,
   "name": "樱花鱼",
   "race": {"hp": 45,"atk": 75,"def": 60,"spatk": 40,"spdef": 30,"spd": 50},
   "type1": 16,
   "type2": 16,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 372,
   "name": "古空棘鱼",
   "race": {"hp": 65,"atk": 95,"def": 100,"spatk": 60,"spdef": 50,"spd": 50},
   "type1": 16,
   "type2": 16,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 373,
   "name": "爱心鱼",
   "race": {"hp": 95,"atk": 135,"def": 80,"spatk": 110,"spdef": 80,"spd": 100},
   "type1": 16,
   "type2": 2,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 374,
   "name": "宝贝龙",
   "race": {"hp": 40,"atk": 55,"def": 80,"spatk": 35,"spdef": 60,"spd": 30},
   "type1": 8,
   "type2": 14,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 375,
   "name": "甲壳龙",
   "race": {"hp": 60,"atk": 75,"def": 100,"spatk": 55,"spdef": 80,"spd": 50},
   "type1": 8,
   "type2": 14,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 376,
   "name": "暴蝾螈",
   "race": {"hp": 80,"atk": 135,"def": 130,"spatk": 95,"spdef": 90,"spd": 70},
   "type1": 8,
   "type2": 14,
   "eff": [0,0,3,0,0,0]
  },
  {
   "no": 377,
   "name": "铁哑铃",
   "race": {"hp": 80,"atk": 100,"def": 200,"spatk": 50,"spdef": 100,"spd": 50},
   "type1": 5,
   "type2": 5,
   "eff": [0,0,3,0,0,0]
  },
  {
   "no": 378,
   "name": "金属怪",
   "race": {"hp": 80,"atk": 50,"def": 100,"spatk": 100,"spdef": 200,"spd": 50},
   "type1": 15,
   "type2": 15,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 379,
   "name": "巨金怪",
   "race": {"hp": 80,"atk": 75,"def": 150,"spatk": 75,"spdef": 150,"spd": 50},
   "type1": 8,
   "type2": 8,
   "eff": [0,0,2,0,1,0]
  },
  {
   "no": 380,
   "name": "雷吉洛克",
   "race": {"hp": 80,"atk": 80,"def": 90,"spatk": 110,"spdef": 130,"spd": 110},
   "type1": 16,
   "type2": 14,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 381,
   "name": "雷吉艾斯",
   "race": {"hp": 80,"atk": 90,"def": 80,"spatk": 130,"spdef": 110,"spd": 110},
   "type1": 16,
   "type2": 14,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 382,
   "name": "雷吉斯奇鲁",
   "race": {"hp": 100,"atk": 100,"def": 90,"spatk": 150,"spdef": 140,"spd": 90},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 383,
   "name": "拉帝亚斯",
   "race": {"hp": 100,"atk": 150,"def": 140,"spatk": 100,"spdef": 90,"spd": 90},
   "type1": 4,
   "type2": 4,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 384,
   "name": "拉帝欧斯",
   "race": {"hp": 105,"atk": 150,"def": 90,"spatk": 150,"spdef": 90,"spd": 95},
   "type1": 16,
   "type2": 2,
   "eff": [0,2,0,1,0,0]
  },
  {
   "no": 385,
   "name": "盖欧卡",
   "race": {"hp": 100,"atk": 100,"def": 100,"spatk": 100,"spdef": 100,"spd": 100},
   "type1": 8,
   "type2": 14,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 386,
   "name": "固拉多",
   "race": {"hp": 50,"atk": 150,"def": 50,"spatk": 150,"spdef": 50,"spd": 150},
   "type1": 14,
   "type2": 14,
   "eff": [0,1,0,1,0,1]
  },
  {
   "no": 387,
   "name": "烈空坐",
   "race": {"hp": 55,"atk": 68,"def": 64,"spatk": 45,"spdef": 55,"spd": 31},
   "type1": 12,
   "type2": 12,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 388,
   "name": "基拉祈",
   "race": {"hp": 75,"atk": 89,"def": 85,"spatk": 55,"spdef": 65,"spd": 36},
   "type1": 12,
   "type2": 12,
   "eff": [0,1,1,0,0,0]
  },
  {
   "no": 389,
   "name": "代欧奇希斯（全方位）",
   "race": {"hp": 95,"atk": 109,"def": 105,"spatk": 75,"spdef": 85,"spd": 56},
   "type1": 12,
   "type2": 4,
   "eff": [0,2,1,0,0,0]
  },
  {
   "no": 390,
   "name": "代欧奇希斯（攻击）",
   "race": {"hp": 44,"atk": 58,"def": 44,"spatk": 58,"spdef": 44,"spd": 61},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 391,
   "name": "代欧奇希斯（防御）",
   "race": {"hp": 64,"atk": 78,"def": 52,"spatk": 78,"spdef": 52,"spd": 81},
   "type1": 10,
   "type2": 1,
   "eff": [0,0,0,1,0,1]
  },
  {
   "no": 392,
   "name": "代欧奇希斯（速攻）",
   "race": {"hp": 76,"atk": 104,"def": 71,"spatk": 104,"spdef": 71,"spd": 108},
   "type1": 10,
   "type2": 1,
   "eff": [0,1,0,1,0,1]
  },
  {
   "no": 393,
   "name": "草苗龟",
   "race": {"hp": 53,"atk": 51,"def": 53,"spatk": 61,"spdef": 56,"spd": 40},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 394,
   "name": "树林龟",
   "race": {"hp": 64,"atk": 66,"def": 68,"spatk": 81,"spdef": 76,"spd": 50},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 395,
   "name": "土台龟",
   "race": {"hp": 84,"atk": 86,"def": 88,"spatk": 111,"spdef": 101,"spd": 60},
   "type1": 11,
   "type2": 8,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 396,
   "name": "小火焰猴",
   "race": {"hp": 40,"atk": 55,"def": 30,"spatk": 30,"spdef": 30,"spd": 60},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 397,
   "name": "猛火猴",
   "race": {"hp": 55,"atk": 75,"def": 50,"spatk": 40,"spdef": 40,"spd": 80},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 398,
   "name": "烈焰猴",
   "race": {"hp": 85,"atk": 120,"def": 70,"spatk": 50,"spdef": 50,"spd": 100},
   "type1": 0,
   "type2": 2,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 399,
   "name": "波加曼",
   "race": {"hp": 59,"atk": 45,"def": 40,"spatk": 35,"spdef": 40,"spd": 31},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 400,
   "name": "波皇子",
   "race": {"hp": 79,"atk": 85,"def": 60,"spatk": 55,"spdef": 60,"spd": 71},
   "type1": 0,
   "type2": 11,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 401,
   "name": "帝王拿波",
   "race": {"hp": 37,"atk": 25,"def": 41,"spatk": 25,"spdef": 41,"spd": 25},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 402,
   "name": "姆克儿",
   "race": {"hp": 77,"atk": 85,"def": 51,"spatk": 55,"spdef": 51,"spd": 65},
   "type1": 6,
   "type2": 6,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 403,
   "name": "姆克鸟",
   "race": {"hp": 45,"atk": 65,"def": 34,"spatk": 40,"spdef": 34,"spd": 45},
   "type1": 13,
   "type2": 13,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 404,
   "name": "姆克鹰",
   "race": {"hp": 60,"atk": 85,"def": 49,"spatk": 60,"spdef": 49,"spd": 60},
   "type1": 13,
   "type2": 13,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 405,
   "name": "大牙狸",
   "race": {"hp": 80,"atk": 120,"def": 79,"spatk": 95,"spdef": 79,"spd": 70},
   "type1": 13,
   "type2": 13,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 406,
   "name": "大尾狸",
   "race": {"hp": 40,"atk": 30,"def": 35,"spatk": 50,"spdef": 70,"spd": 55},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 407,
   "name": "圆法师",
   "race": {"hp": 60,"atk": 70,"def": 55,"spatk": 125,"spdef": 105,"spd": 90},
   "type1": 12,
   "type2": 3,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 408,
   "name": "音箱蟀",
   "race": {"hp": 67,"atk": 125,"def": 40,"spatk": 30,"spdef": 30,"spd": 58},
   "type1": 5,
   "type2": 5,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 409,
   "name": "小猫怪",
   "race": {"hp": 97,"atk": 165,"def": 60,"spatk": 65,"spdef": 50,"spd": 58},
   "type1": 5,
   "type2": 5,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 410,
   "name": "勒克猫",
   "race": {"hp": 30,"atk": 42,"def": 118,"spatk": 42,"spdef": 88,"spd": 30},
   "type1": 5,
   "type2": 8,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 411,
   "name": "伦琴猫",
   "race": {"hp": 60,"atk": 52,"def": 168,"spatk": 47,"spdef": 138,"spd": 30},
   "type1": 5,
   "type2": 8,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 412,
   "name": "含羞苞",
   "race": {"hp": 40,"atk": 29,"def": 45,"spatk": 29,"spdef": 45,"spd": 36},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 413,
   "name": "罗丝雷朵",
   "race": {"hp": 60,"atk": 59,"def": 85,"spatk": 79,"spdef": 105,"spd": 36},
   "type1": 6,
   "type2": 12,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 414,
   "name": "头盖龙",
   "race": {"hp": 70,"atk": 94,"def": 50,"spatk": 94,"spdef": 50,"spd": 66},
   "type1": 6,
   "type2": 2,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 415,
   "name": "战槌龙",
   "race": {"hp": 30,"atk": 30,"def": 42,"spatk": 30,"spdef": 42,"spd": 70},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 416,
   "name": "盾甲龙",
   "race": {"hp": 70,"atk": 80,"def": 102,"spatk": 80,"spdef": 102,"spd": 40},
   "type1": 6,
   "type2": 2,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 417,
   "name": "护城龙",
   "race": {"hp": 60,"atk": 45,"def": 70,"spatk": 45,"spdef": 90,"spd": 95},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 418,
   "name": "结草儿",
   "race": {"hp": 55,"atk": 65,"def": 35,"spatk": 60,"spdef": 30,"spd": 85},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 419,
   "name": "结草贵妇（草木）",
   "race": {"hp": 85,"atk": 105,"def": 55,"spatk": 85,"spdef": 50,"spd": 115},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 420,
   "name": "结草贵妇（沙土）",
   "race": {"hp": 45,"atk": 35,"def": 45,"spatk": 62,"spdef": 53,"spd": 35},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 421,
   "name": "结草贵妇（垃圾）",
   "race": {"hp": 70,"atk": 60,"def": 70,"spatk": 87,"spdef": 78,"spd": 85},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 422,
   "name": "绅士蛾",
   "race": {"hp": 76,"atk": 48,"def": 48,"spatk": 57,"spdef": 62,"spd": 34},
   "type1": 11,
   "type2": 11,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 423,
   "name": "三蜜蜂",
   "race": {"hp": 111,"atk": 83,"def": 68,"spatk": 92,"spdef": 82,"spd": 39},
   "type1": 11,
   "type2": 4,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 424,
   "name": "蜂后",
   "race": {"hp": 75,"atk": 100,"def": 66,"spatk": 60,"spdef": 66,"spd": 115},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 425,
   "name": "帕奇利兹",
   "race": {"hp": 90,"atk": 50,"def": 34,"spatk": 60,"spdef": 44,"spd": 70},
   "type1": 7,
   "type2": 2,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 426,
   "name": "泳气鼬",
   "race": {"hp": 150,"atk": 80,"def": 44,"spatk": 90,"spdef": 54,"spd": 80},
   "type1": 7,
   "type2": 2,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 427,
   "name": "浮潜鼬",
   "race": {"hp": 55,"atk": 66,"def": 44,"spatk": 44,"spdef": 56,"spd": 85},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 428,
   "name": "樱花宝",
   "race": {"hp": 65,"atk": 76,"def": 84,"spatk": 54,"spdef": 96,"spd": 105},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 429,
   "name": "樱花儿",
   "race": {"hp": 60,"atk": 60,"def": 60,"spatk": 105,"spdef": 105,"spd": 105},
   "type1": 7,
   "type2": 7,
   "eff": [0,0,0,1,1,0]
  },
  {
   "no": 430,
   "name": "无壳海牛",
   "race": {"hp": 100,"atk": 125,"def": 52,"spatk": 105,"spdef": 52,"spd": 71},
   "type1": 17,
   "type2": 2,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 431,
   "name": "海牛兽",
   "race": {"hp": 49,"atk": 55,"def": 42,"spatk": 42,"spdef": 37,"spd": 85},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 432,
   "name": "双尾怪手",
   "race": {"hp": 71,"atk": 82,"def": 64,"spatk": 64,"spdef": 59,"spd": 112},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 433,
   "name": "飘飘球",
   "race": {"hp": 45,"atk": 30,"def": 50,"spatk": 65,"spdef": 50,"spd": 45},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 434,
   "name": "附和气球",
   "race": {"hp": 63,"atk": 63,"def": 47,"spatk": 41,"spdef": 41,"spd": 74},
   "type1": 3,
   "type2": 17,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 435,
   "name": "卷卷耳",
   "race": {"hp": 103,"atk": 93,"def": 67,"spatk": 71,"spdef": 61,"spd": 84},
   "type1": 3,
   "type2": 17,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 436,
   "name": "长耳兔",
   "race": {"hp": 57,"atk": 24,"def": 86,"spatk": 24,"spdef": 86,"spd": 23},
   "type1": 8,
   "type2": 14,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 437,
   "name": "梦妖魔",
   "race": {"hp": 67,"atk": 89,"def": 116,"spatk": 79,"spdef": 116,"spd": 33},
   "type1": 8,
   "type2": 14,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 438,
   "name": "乌鸦头头",
   "race": {"hp": 50,"atk": 80,"def": 95,"spatk": 10,"spdef": 45,"spd": 10},
   "type1": 5,
   "type2": 5,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 439,
   "name": "魅力喵",
   "race": {"hp": 20,"atk": 25,"def": 45,"spatk": 70,"spdef": 90,"spd": 60},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 440,
   "name": "东施喵",
   "race": {"hp": 100,"atk": 5,"def": 5,"spatk": 15,"spdef": 65,"spd": 30},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 441,
   "name": "铃铛响",
   "race": {"hp": 76,"atk": 65,"def": 45,"spatk": 92,"spdef": 42,"spd": 91},
   "type1": 0,
   "type2": 2,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 442,
   "name": "臭鼬噗",
   "race": {"hp": 50,"atk": 92,"def": 108,"spatk": 92,"spdef": 108,"spd": 35},
   "type1": 7,
   "type2": 17,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 443,
   "name": "坦克臭鼬",
   "race": {"hp": 58,"atk": 70,"def": 45,"spatk": 40,"spdef": 45,"spd": 42},
   "type1": 16,
   "type2": 4,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 444,
   "name": "铜镜怪",
   "race": {"hp": 68,"atk": 90,"def": 65,"spatk": 50,"spdef": 55,"spd": 82},
   "type1": 16,
   "type2": 4,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 445,
   "name": "青铜钟",
   "race": {"hp": 108,"atk": 130,"def": 95,"spatk": 80,"spdef": 85,"spd": 102},
   "type1": 16,
   "type2": 4,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 446,
   "name": "爱哭树",
   "race": {"hp": 135,"atk": 85,"def": 40,"spatk": 40,"spdef": 85,"spd": 5},
   "type1": 0,
   "type2": 0,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 447,
   "name": "魔尼尼",
   "race": {"hp": 40,"atk": 70,"def": 40,"spatk": 35,"spdef": 40,"spd": 60},
   "type1": 1,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 448,
   "name": "好运蛋",
   "race": {"hp": 70,"atk": 110,"def": 70,"spatk": 115,"spdef": 70,"spd": 90},
   "type1": 1,
   "type2": 8,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 449,
   "name": "聒噪鸟",
   "race": {"hp": 68,"atk": 72,"def": 78,"spatk": 38,"spdef": 42,"spd": 32},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 450,
   "name": "花岩怪",
   "race": {"hp": 108,"atk": 112,"def": 118,"spatk": 68,"spdef": 72,"spd": 47},
   "type1": 4,
   "type2": 4,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 451,
   "name": "圆陆鲨",
   "race": {"hp": 40,"atk": 50,"def": 90,"spatk": 30,"spdef": 55,"spd": 65},
   "type1": 3,
   "type2": 6,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 452,
   "name": "尖牙陆鲨",
   "race": {"hp": 70,"atk": 90,"def": 110,"spatk": 60,"spdef": 75,"spd": 95},
   "type1": 3,
   "type2": 17,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 453,
   "name": "烈咬陆鲨",
   "race": {"hp": 48,"atk": 61,"def": 40,"spatk": 61,"spdef": 40,"spd": 50},
   "type1": 3,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 454,
   "name": "小卡比兽",
   "race": {"hp": 83,"atk": 106,"def": 65,"spatk": 86,"spdef": 65,"spd": 85},
   "type1": 3,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 455,
   "name": "利欧路",
   "race": {"hp": 74,"atk": 100,"def": 72,"spatk": 90,"spdef": 72,"spd": 46},
   "type1": 12,
   "type2": 12,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 456,
   "name": "路卡利欧",
   "race": {"hp": 49,"atk": 49,"def": 56,"spatk": 49,"spdef": 61,"spd": 66},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 457,
   "name": "怪河马",
   "race": {"hp": 69,"atk": 69,"def": 76,"spatk": 69,"spdef": 86,"spd": 91},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 458,
   "name": "河马兽",
   "race": {"hp": 45,"atk": 20,"def": 50,"spatk": 60,"spdef": 120,"spd": 50},
   "type1": 11,
   "type2": 2,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 459,
   "name": "紫天蝎",
   "race": {"hp": 60,"atk": 62,"def": 50,"spatk": 62,"spdef": 60,"spd": 40},
   "type1": 12,
   "type2": 15,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 460,
   "name": "龙王蝎",
   "race": {"hp": 90,"atk": 92,"def": 75,"spatk": 92,"spdef": 85,"spd": 60},
   "type1": 12,
   "type2": 15,
   "eff": [0,1,0,1,0,0]
  },
  {
   "no": 461,
   "name": "不良蛙",
   "race": {"hp": 70,"atk": 120,"def": 65,"spatk": 45,"spdef": 85,"spd": 125},
   "type1": 17,
   "type2": 15,
   "eff": [0,1,0,0,0,1]
  },
  {
   "no": 462,
   "name": "毒骷蛙",
   "race": {"hp": 70,"atk": 70,"def": 115,"spatk": 130,"spdef": 90,"spd": 60},
   "type1": 13,
   "type2": 8,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 463,
   "name": "尖牙笼",
   "race": {"hp": 110,"atk": 85,"def": 95,"spatk": 80,"spdef": 95,"spd": 50},
   "type1": 0,
   "type2": 0,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 464,
   "name": "萤光鱼",
   "race": {"hp": 115,"atk": 140,"def": 130,"spatk": 55,"spdef": 55,"spd": 40},
   "type1": 4,
   "type2": 5,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 465,
   "name": "霓虹鱼",
   "race": {"hp": 100,"atk": 100,"def": 125,"spatk": 110,"spdef": 50,"spd": 50},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 466,
   "name": "小球飞鱼",
   "race": {"hp": 75,"atk": 123,"def": 67,"spatk": 95,"spdef": 85,"spd": 95},
   "type1": 13,
   "type2": 13,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 467,
   "name": "雪笠怪",
   "race": {"hp": 75,"atk": 95,"def": 67,"spatk": 125,"spdef": 95,"spd": 83},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 468,
   "name": "暴雪王",
   "race": {"hp": 85,"atk": 50,"def": 95,"spatk": 120,"spdef": 115,"spd": 80},
   "type1": 0,
   "type2": 2,
   "eff": [0,0,0,2,1,0]
  },
  {
   "no": 469,
   "name": "玛狃拉",
   "race": {"hp": 86,"atk": 76,"def": 86,"spatk": 116,"spdef": 56,"spd": 95},
   "type1": 6,
   "type2": 2,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 470,
   "name": "自爆磁怪",
   "race": {"hp": 65,"atk": 110,"def": 130,"spatk": 60,"spdef": 65,"spd": 95},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 471,
   "name": "大舌舔",
   "race": {"hp": 65,"atk": 60,"def": 110,"spatk": 130,"spdef": 95,"spd": 65},
   "type1": 15,
   "type2": 15,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 472,
   "name": "超铁暴龙",
   "race": {"hp": 75,"atk": 95,"def": 125,"spatk": 45,"spdef": 75,"spd": 95},
   "type1": 4,
   "type2": 2,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 473,
   "name": "巨蔓藤",
   "race": {"hp": 110,"atk": 130,"def": 80,"spatk": 70,"spdef": 60,"spd": 80},
   "type1": 15,
   "type2": 4,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 474,
   "name": "电击魔兽",
   "race": {"hp": 85,"atk": 80,"def": 70,"spatk": 135,"spdef": 75,"spd": 90},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 475,
   "name": "鸭嘴焰龙",
   "race": {"hp": 68,"atk": 125,"def": 65,"spatk": 65,"spdef": 115,"spd": 80},
   "type1": 14,
   "type2": 1,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 476,
   "name": "波克基斯",
   "race": {"hp": 60,"atk": 55,"def": 145,"spatk": 75,"spdef": 150,"spd": 40},
   "type1": 5,
   "type2": 8,
   "eff": [0,0,1,0,2,0]
  },
  {
   "no": 477,
   "name": "梅卡阳玛",
   "race": {"hp": 45,"atk": 100,"def": 135,"spatk": 65,"spdef": 135,"spd": 45},
   "type1": 7,
   "type2": 7,
   "eff": [0,0,1,0,2,0]
  },
  {
   "no": 478,
   "name": "叶精灵",
   "race": {"hp": 70,"atk": 80,"def": 70,"spatk": 80,"spdef": 70,"spd": 110},
   "type1": 15,
   "type2": 7,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 479,
   "name": "冰精灵",
   "race": {"hp": 50,"atk": 50,"def": 77,"spatk": 95,"spdef": 77,"spd": 91},
   "type1": 13,
   "type2": 7,
   "eff": [0,0,0,1,0,1]
  },
  {
   "no": 480,
   "name": "天蝎王",
   "race": {"hp": 75,"atk": 75,"def": 130,"spatk": 75,"spdef": 130,"spd": 95},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,2,0,1,0]
  },
  {
   "no": 481,
   "name": "象牙猪",
   "race": {"hp": 80,"atk": 105,"def": 105,"spatk": 105,"spdef": 105,"spd": 80},
   "type1": 14,
   "type2": 14,
   "eff": [0,1,0,1,1,0]
  },
  {
   "no": 482,
   "name": "3D龙Z",
   "race": {"hp": 75,"atk": 125,"def": 70,"spatk": 125,"spdef": 70,"spd": 115},
   "type1": 14,
   "type2": 14,
   "eff": [0,2,0,1,0,0]
  },
  {
   "no": 483,
   "name": "艾路雷朵",
   "race": {"hp": 100,"atk": 120,"def": 120,"spatk": 150,"spdef": 100,"spd": 90},
   "type1": 8,
   "type2": 16,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 484,
   "name": "大朝北鼻",
   "race": {"hp": 90,"atk": 120,"def": 100,"spatk": 150,"spdef": 120,"spd": 100},
   "type1": 11,
   "type2": 16,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 485,
   "name": "夜黑魔人",
   "race": {"hp": 91,"atk": 90,"def": 106,"spatk": 130,"spdef": 106,"spd": 77},
   "type1": 10,
   "type2": 8,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 486,
   "name": "雪妖女",
   "race": {"hp": 110,"atk": 160,"def": 110,"spatk": 80,"spdef": 110,"spd": 100},
   "type1": 0,
   "type2": 0,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 487,
   "name": "洛托姆（一般）",
   "race": {"hp": 150,"atk": 100,"def": 120,"spatk": 100,"spdef": 120,"spd": 90},
   "type1": 7,
   "type2": 16,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 488,
   "name": "洛托姆（加热）",
   "race": {"hp": 120,"atk": 70,"def": 120,"spatk": 75,"spdef": 130,"spd": 85},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 489,
   "name": "洛托姆（冲洗）",
   "race": {"hp": 80,"atk": 80,"def": 80,"spatk": 80,"spdef": 80,"spd": 80},
   "type1": 11,
   "type2": 11,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 490,
   "name": "洛托姆（结霜）",
   "race": {"hp": 100,"atk": 100,"def": 100,"spatk": 100,"spdef": 100,"spd": 100},
   "type1": 11,
   "type2": 11,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 491,
   "name": "洛托姆（旋转）",
   "race": {"hp": 70,"atk": 90,"def": 90,"spatk": 135,"spdef": 90,"spd": 125},
   "type1": 17,
   "type2": 17,
   "eff": [0,0,0,2,0,1]
  },
  {
   "no": 492,
   "name": "洛托姆（切割）",
   "race": {"hp": 100,"atk": 100,"def": 100,"spatk": 100,"spdef": 100,"spd": 100},
   "type1": 12,
   "type2": 12,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 493,
   "name": "由克希",
   "race": {"hp": 120,"atk": 120,"def": 120,"spatk": 120,"spdef": 120,"spd": 120},
   "type1": 0,
   "type2": 0,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 494,
   "name": "艾姆利多",
   "race": {"hp": 100,"atk": 100,"def": 100,"spatk": 100,"spdef": 100,"spd": 100},
   "type1": 14,
   "type2": 10,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 495,
   "name": "亚克诺姆",
   "race": {"hp": 45,"atk": 45,"def": 55,"spatk": 45,"spdef": 55,"spd": 63},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 496,
   "name": "帝牙卢卡",
   "race": {"hp": 60,"atk": 60,"def": 75,"spatk": 60,"spdef": 75,"spd": 83},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 497,
   "name": "帕路奇犽",
   "race": {"hp": 75,"atk": 75,"def": 95,"spatk": 75,"spdef": 95,"spd": 113},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,3]
  },
  {
   "no": 498,
   "name": "席多蓝恩",
   "race": {"hp": 65,"atk": 63,"def": 45,"spatk": 45,"spdef": 45,"spd": 45},
   "type1": 10,
   "type2": 10,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 499,
   "name": "雷吉奇卡斯",
   "race": {"hp": 90,"atk": 93,"def": 55,"spatk": 70,"spdef": 55,"spd": 55},
   "type1": 10,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 500,
   "name": "骑拉帝纳（另类）",
   "race": {"hp": 110,"atk": 123,"def": 65,"spatk": 100,"spdef": 65,"spd": 65},
   "type1": 10,
   "type2": 1,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 501,
   "name": "骑拉帝纳（起源）",
   "race": {"hp": 55,"atk": 55,"def": 45,"spatk": 63,"spdef": 45,"spd": 45},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 502,
   "name": "克雷色利亚",
   "race": {"hp": 75,"atk": 75,"def": 60,"spatk": 83,"spdef": 60,"spd": 60},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 503,
   "name": "霏欧纳",
   "race": {"hp": 95,"atk": 100,"def": 85,"spatk": 108,"spdef": 70,"spd": 70},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 504,
   "name": "玛纳霏",
   "race": {"hp": 45,"atk": 55,"def": 39,"spatk": 35,"spdef": 39,"spd": 42},
   "type1": 0,
   "type2": 0,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 505,
   "name": "达克莱伊",
   "race": {"hp": 60,"atk": 85,"def": 69,"spatk": 60,"spdef": 69,"spd": 77},
   "type1": 0,
   "type2": 0,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 506,
   "name": "洁咪（陆地）",
   "race": {"hp": 45,"atk": 60,"def": 45,"spatk": 25,"spdef": 45,"spd": 55},
   "type1": 0,
   "type2": 0,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 507,
   "name": "洁咪（天空）",
   "race": {"hp": 65,"atk": 80,"def": 65,"spatk": 35,"spdef": 65,"spd": 60},
   "type1": 0,
   "type2": 0,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 508,
   "name": "阿尔宙斯",
   "race": {"hp": 85,"atk": 100,"def": 90,"spatk": 45,"spdef": 90,"spd": 80},
   "type1": 0,
   "type2": 0,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 509,
   "name": "比克提尼",
   "race": {"hp": 41,"atk": 50,"def": 37,"spatk": 50,"spdef": 37,"spd": 66},
   "type1": 17,
   "type2": 17,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 510,
   "name": "藤藤蛇",
   "race": {"hp": 64,"atk": 88,"def": 50,"spatk": 88,"spdef": 50,"spd": 106},
   "type1": 17,
   "type2": 17,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 511,
   "name": "青藤蛇",
   "race": {"hp": 50,"atk": 53,"def": 48,"spatk": 53,"spdef": 48,"spd": 64},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 512,
   "name": "君主蛇",
   "race": {"hp": 75,"atk": 98,"def": 63,"spatk": 98,"spdef": 63,"spd": 101},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 513,
   "name": "暖暖猪",
   "race": {"hp": 50,"atk": 53,"def": 48,"spatk": 53,"spdef": 48,"spd": 64},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 514,
   "name": "炒炒猪",
   "race": {"hp": 75,"atk": 98,"def": 63,"spatk": 98,"spdef": 63,"spd": 101},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 515,
   "name": "炎武王",
   "race": {"hp": 50,"atk": 53,"def": 48,"spatk": 53,"spdef": 48,"spd": 64},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 516,
   "name": "水水獭",
   "race": {"hp": 75,"atk": 98,"def": 63,"spatk": 98,"spdef": 63,"spd": 101},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 517,
   "name": "双刃丸",
   "race": {"hp": 76,"atk": 25,"def": 45,"spatk": 67,"spdef": 55,"spd": 24},
   "type1": 14,
   "type2": 14,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 518,
   "name": "大剑鬼",
   "race": {"hp": 116,"atk": 55,"def": 85,"spatk": 107,"spdef": 95,"spd": 29},
   "type1": 14,
   "type2": 14,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 519,
   "name": "探探鼠",
   "race": {"hp": 50,"atk": 55,"def": 50,"spatk": 36,"spdef": 30,"spd": 43},
   "type1": 0,
   "type2": 2,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 520,
   "name": "步哨鼠",
   "race": {"hp": 62,"atk": 77,"def": 62,"spatk": 50,"spdef": 42,"spd": 65},
   "type1": 0,
   "type2": 2,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 521,
   "name": "小约克",
   "race": {"hp": 80,"atk": 105,"def": 80,"spatk": 65,"spdef": 55,"spd": 93},
   "type1": 0,
   "type2": 2,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 522,
   "name": "哈约克",
   "race": {"hp": 45,"atk": 60,"def": 32,"spatk": 50,"spdef": 32,"spd": 76},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 523,
   "name": "长毛狗",
   "race": {"hp": 75,"atk": 100,"def": 63,"spatk": 80,"spdef": 63,"spd": 116},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 524,
   "name": "扒手猫",
   "race": {"hp": 55,"atk": 75,"def": 85,"spatk": 25,"spdef": 25,"spd": 15},
   "type1": 5,
   "type2": 5,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 525,
   "name": "酷豹",
   "race": {"hp": 70,"atk": 105,"def": 105,"spatk": 50,"spdef": 40,"spd": 20},
   "type1": 5,
   "type2": 5,
   "eff": [0,1,1,0,0,0]
  },
  {
   "no": 526,
   "name": "花椰猴",
   "race": {"hp": 85,"atk": 135,"def": 130,"spatk": 60,"spdef": 70,"spd": 25},
   "type1": 5,
   "type2": 5,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 527,
   "name": "花椰猿",
   "race": {"hp": 55,"atk": 45,"def": 43,"spatk": 55,"spdef": 43,"spd": 72},
   "type1": 14,
   "type2": 2,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 528,
   "name": "爆香猴",
   "race": {"hp": 67,"atk": 57,"def": 55,"spatk": 77,"spdef": 55,"spd": 114},
   "type1": 14,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 529,
   "name": "爆香猿",
   "race": {"hp": 60,"atk": 85,"def": 40,"spatk": 30,"spdef": 45,"spd": 68},
   "type1": 4,
   "type2": 4,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 530,
   "name": "冷水猴",
   "race": {"hp": 110,"atk": 135,"def": 60,"spatk": 50,"spdef": 65,"spd": 88},
   "type1": 4,
   "type2": 8,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 531,
   "name": "冷水猿",
   "race": {"hp": 103,"atk": 60,"def": 86,"spatk": 60,"spdef": 86,"spd": 50},
   "type1": 0,
   "type2": 0,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 532,
   "name": "食梦梦",
   "race": {"hp": 75,"atk": 80,"def": 55,"spatk": 25,"spdef": 35,"spd": 35},
   "type1": 1,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 533,
   "name": "梦梦蚀",
   "race": {"hp": 85,"atk": 105,"def": 85,"spatk": 40,"spdef": 50,"spd": 40},
   "type1": 1,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 534,
   "name": "豆豆鸽",
   "race": {"hp": 105,"atk": 140,"def": 95,"spatk": 55,"spdef": 65,"spd": 45},
   "type1": 1,
   "type2": 1,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 535,
   "name": "波波鸽",
   "race": {"hp": 50,"atk": 50,"def": 40,"spatk": 50,"spdef": 40,"spd": 64},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 536,
   "name": "轰隆雉鸡",
   "race": {"hp": 75,"atk": 65,"def": 55,"spatk": 65,"spdef": 55,"spd": 69},
   "type1": 11,
   "type2": 4,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 537,
   "name": "斑斑马",
   "race": {"hp": 105,"atk": 85,"def": 75,"spatk": 85,"spdef": 75,"spd": 74},
   "type1": 11,
   "type2": 4,
   "eff": [3,0,0,0,0,0]
  },
  {
   "no": 538,
   "name": "雷电斑马",
   "race": {"hp": 120,"atk": 100,"def": 85,"spatk": 30,"spdef": 85,"spd": 45},
   "type1": 1,
   "type2": 1,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 539,
   "name": "石丸子",
   "race": {"hp": 75,"atk": 125,"def": 75,"spatk": 30,"spdef": 75,"spd": 85},
   "type1": 1,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 540,
   "name": "地幔岩",
   "race": {"hp": 45,"atk": 53,"def": 70,"spatk": 40,"spdef": 60,"spd": 42},
   "type1": 6,
   "type2": 12,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 541,
   "name": "庞岩怪",
   "race": {"hp": 55,"atk": 63,"def": 90,"spatk": 50,"spdef": 80,"spd": 42},
   "type1": 6,
   "type2": 12,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 542,
   "name": "滚滚蝙蝠",
   "race": {"hp": 75,"atk": 103,"def": 80,"spatk": 70,"spdef": 70,"spd": 92},
   "type1": 6,
   "type2": 12,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 543,
   "name": "心蝙蝠",
   "race": {"hp": 30,"atk": 45,"def": 59,"spatk": 30,"spdef": 39,"spd": 57},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 544,
   "name": "螺钉地鼠",
   "race": {"hp": 40,"atk": 55,"def": 99,"spatk": 40,"spdef": 79,"spd": 47},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 545,
   "name": "龙头地鼠",
   "race": {"hp": 60,"atk": 90,"def": 89,"spatk": 55,"spdef": 69,"spd": 112},
   "type1": 6,
   "type2": 3,
   "eff": [0,0,0,0,0,3]
  },
  {
   "no": 546,
   "name": "差不多娃娃",
   "race": {"hp": 40,"atk": 27,"def": 60,"spatk": 37,"spdef": 50,"spd": 66},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 547,
   "name": "搬运小匠",
   "race": {"hp": 60,"atk": 67,"def": 85,"spatk": 77,"spdef": 75,"spd": 116},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 548,
   "name": "铁骨土人",
   "race": {"hp": 45,"atk": 35,"def": 50,"spatk": 70,"spdef": 50,"spd": 30},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 549,
   "name": "修缮老头",
   "race": {"hp": 70,"atk": 60,"def": 75,"spatk": 110,"spdef": 75,"spd": 90},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 550,
   "name": "圆蝌蚪",
   "race": {"hp": 70,"atk": 92,"def": 65,"spatk": 80,"spdef": 55,"spd": 98},
   "type1": 11,
   "type2": 11,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 551,
   "name": "蓝蟾蜍",
   "race": {"hp": 50,"atk": 72,"def": 35,"spatk": 35,"spdef": 35,"spd": 65},
   "type1": 4,
   "type2": 17,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 552,
   "name": "蟾蜍王",
   "race": {"hp": 60,"atk": 82,"def": 45,"spatk": 45,"spdef": 45,"spd": 74},
   "type1": 4,
   "type2": 17,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 553,
   "name": "投射鬼",
   "race": {"hp": 95,"atk": 117,"def": 70,"spatk": 65,"spdef": 70,"spd": 92},
   "type1": 4,
   "type2": 17,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 554,
   "name": "打击鬼",
   "race": {"hp": 70,"atk": 90,"def": 45,"spatk": 15,"spdef": 45,"spd": 50},
   "type1": 10,
   "type2": 10,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 555,
   "name": "虫宝包",
   "race": {"hp": 105,"atk": 140,"def": 55,"spatk": 30,"spdef": 55,"spd": 95},
   "type1": 10,
   "type2": 10,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 556,
   "name": "宝包茧",
   "race": {"hp": 75,"atk": 86,"def": 67,"spatk": 106,"spdef": 67,"spd": 60},
   "type1": 12,
   "type2": 12,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 557,
   "name": "保母虫",
   "race": {"hp": 50,"atk": 65,"def": 85,"spatk": 35,"spdef": 35,"spd": 55},
   "type1": 6,
   "type2": 5,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 558,
   "name": "百足蜈蚣",
   "race": {"hp": 70,"atk": 95,"def": 125,"spatk": 65,"spdef": 75,"spd": 45},
   "type1": 6,
   "type2": 5,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 559,
   "name": "车轮毬",
   "race": {"hp": 50,"atk": 75,"def": 70,"spatk": 35,"spdef": 70,"spd": 48},
   "type1": 17,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 560,
   "name": "蜈蚣王",
   "race": {"hp": 65,"atk": 90,"def": 115,"spatk": 45,"spdef": 115,"spd": 58},
   "type1": 17,
   "type2": 1,
   "eff": [0,0,1,0,1,0]
  },
  {
   "no": 561,
   "name": "木棉球",
   "race": {"hp": 72,"atk": 58,"def": 80,"spatk": 103,"spdef": 80,"spd": 97},
   "type1": 14,
   "type2": 2,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 562,
   "name": "风妖精",
   "race": {"hp": 38,"atk": 30,"def": 85,"spatk": 55,"spdef": 65,"spd": 30},
   "type1": 7,
   "type2": 7,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 563,
   "name": "百合根娃娃",
   "race": {"hp": 58,"atk": 50,"def": 145,"spatk": 95,"spdef": 105,"spd": 30},
   "type1": 7,
   "type2": 7,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 564,
   "name": "裙儿小姐",
   "race": {"hp": 54,"atk": 78,"def": 103,"spatk": 53,"spdef": 45,"spd": 22},
   "type1": 11,
   "type2": 5,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 565,
   "name": "勇士鲈鱼（红线）",
   "race": {"hp": 74,"atk": 108,"def": 133,"spatk": 83,"spdef": 65,"spd": 32},
   "type1": 11,
   "type2": 5,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 566,
   "name": "勇士鲈鱼（蓝线）",
   "race": {"hp": 55,"atk": 112,"def": 45,"spatk": 74,"spdef": 45,"spd": 70},
   "type1": 5,
   "type2": 2,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 567,
   "name": "黑眼鳄",
   "race": {"hp": 75,"atk": 140,"def": 65,"spatk": 112,"spdef": 65,"spd": 110},
   "type1": 5,
   "type2": 2,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 568,
   "name": "混混鳄",
   "race": {"hp": 50,"atk": 50,"def": 62,"spatk": 40,"spdef": 62,"spd": 65},
   "type1": 3,
   "type2": 3,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 569,
   "name": "流氓鳄",
   "race": {"hp": 80,"atk": 95,"def": 82,"spatk": 60,"spdef": 82,"spd": 75},
   "type1": 3,
   "type2": 3,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 570,
   "name": "火红不倒翁",
   "race": {"hp": 40,"atk": 65,"def": 40,"spatk": 80,"spdef": 40,"spd": 65},
   "type1": 17,
   "type2": 17,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 571,
   "name": "达摩狒狒（一般）",
   "race": {"hp": 60,"atk": 105,"def": 60,"spatk": 120,"spdef": 60,"spd": 105},
   "type1": 17,
   "type2": 17,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 572,
   "name": "达摩狒狒（不倒翁）",
   "race": {"hp": 55,"atk": 50,"def": 40,"spatk": 40,"spdef": 40,"spd": 75},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 573,
   "name": "街头沙铃",
   "race": {"hp": 75,"atk": 95,"def": 60,"spatk": 65,"spdef": 60,"spd": 115},
   "type1": 0,
   "type2": 0,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 574,
   "name": "石居蟹",
   "race": {"hp": 45,"atk": 30,"def": 50,"spatk": 55,"spdef": 65,"spd": 45},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 575,
   "name": "岩殿居蟹",
   "race": {"hp": 60,"atk": 45,"def": 70,"spatk": 75,"spdef": 85,"spd": 55},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 576,
   "name": "滑头小子",
   "race": {"hp": 70,"atk": 55,"def": 95,"spatk": 95,"spdef": 110,"spd": 65},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 577,
   "name": "头巾混混",
   "race": {"hp": 45,"atk": 30,"def": 40,"spatk": 105,"spdef": 50,"spd": 20},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 578,
   "name": "象征鸟",
   "race": {"hp": 65,"atk": 40,"def": 50,"spatk": 125,"spdef": 60,"spd": 30},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 579,
   "name": "哭哭面具",
   "race": {"hp": 110,"atk": 65,"def": 75,"spatk": 125,"spdef": 85,"spd": 30},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 580,
   "name": "死神棺",
   "race": {"hp": 62,"atk": 44,"def": 50,"spatk": 44,"spdef": 50,"spd": 55},
   "type1": 11,
   "type2": 2,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 581,
   "name": "原盖海龟",
   "race": {"hp": 75,"atk": 87,"def": 63,"spatk": 87,"spdef": 63,"spd": 98},
   "type1": 11,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 582,
   "name": "肋骨海龟",
   "race": {"hp": 36,"atk": 50,"def": 50,"spatk": 65,"spdef": 60,"spd": 44},
   "type1": 15,
   "type2": 15,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 583,
   "name": "始祖小鸟",
   "race": {"hp": 51,"atk": 65,"def": 65,"spatk": 80,"spdef": 75,"spd": 59},
   "type1": 15,
   "type2": 15,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 584,
   "name": "始祖大鸟",
   "race": {"hp": 71,"atk": 95,"def": 85,"spatk": 110,"spdef": 95,"spd": 79},
   "type1": 15,
   "type2": 15,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 585,
   "name": "破破袋",
   "race": {"hp": 60,"atk": 60,"def": 50,"spatk": 40,"spdef": 50,"spd": 75},
   "type1": 0,
   "type2": 12,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 586,
   "name": "灰尘山",
   "race": {"hp": 80,"atk": 100,"def": 70,"spatk": 60,"spdef": 70,"spd": 95},
   "type1": 0,
   "type2": 12,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 587,
   "name": "索罗亚",
   "race": {"hp": 55,"atk": 75,"def": 60,"spatk": 75,"spdef": 60,"spd": 103},
   "type1": 13,
   "type2": 2,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 588,
   "name": "索罗亚克",
   "race": {"hp": 50,"atk": 75,"def": 45,"spatk": 40,"spdef": 45,"spd": 60},
   "type1": 6,
   "type2": 6,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 589,
   "name": "泡沫栗鼠",
   "race": {"hp": 70,"atk": 135,"def": 105,"spatk": 60,"spdef": 105,"spd": 20},
   "type1": 6,
   "type2": 8,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 590,
   "name": "奇诺栗鼠",
   "race": {"hp": 69,"atk": 55,"def": 45,"spatk": 55,"spdef": 55,"spd": 15},
   "type1": 12,
   "type2": 3,
   "eff": [1,0,0,0,0,0]
  },
  {
   "no": 591,
   "name": "哥德宝宝",
   "race": {"hp": 114,"atk": 85,"def": 70,"spatk": 85,"spdef": 80,"spd": 30},
   "type1": 12,
   "type2": 3,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 592,
   "name": "哥德小童",
   "race": {"hp": 55,"atk": 40,"def": 50,"spatk": 65,"spdef": 85,"spd": 40},
   "type1": 11,
   "type2": 7,
   "eff": [0,0,0,0,1,0]
  },
  {
   "no": 593,
   "name": "哥德小姐",
   "race": {"hp": 100,"atk": 60,"def": 70,"spatk": 85,"spdef": 105,"spd": 60},
   "type1": 11,
   "type2": 7,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 594,
   "name": "单卵细胞球",
   "race": {"hp": 165,"atk": 75,"def": 80,"spatk": 40,"spdef": 45,"spd": 65},
   "type1": 11,
   "type2": 11,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 595,
   "name": "双卵细胞球",
   "race": {"hp": 50,"atk": 47,"def": 50,"spatk": 57,"spdef": 50,"spd": 65},
   "type1": 6,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 596,
   "name": "人造细胞卵",
   "race": {"hp": 70,"atk": 77,"def": 60,"spatk": 97,"spdef": 60,"spd": 108},
   "type1": 6,
   "type2": 13,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 597,
   "name": "鸭宝宝",
   "race": {"hp": 44,"atk": 50,"def": 91,"spatk": 24,"spdef": 86,"spd": 10},
   "type1": 12,
   "type2": 8,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 598,
   "name": "首席天鹅",
   "race": {"hp": 74,"atk": 94,"def": 131,"spatk": 54,"spdef": 116,"spd": 20},
   "type1": 12,
   "type2": 8,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 599,
   "name": "迷你冰",
   "race": {"hp": 40,"atk": 55,"def": 70,"spatk": 45,"spdef": 60,"spd": 30},
   "type1": 8,
   "type2": 8,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 600,
   "name": "多多冰",
   "race": {"hp": 60,"atk": 80,"def": 95,"spatk": 70,"spdef": 85,"spd": 50},
   "type1": 8,
   "type2": 8,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 601,
   "name": "双倍多多冰",
   "race": {"hp": 60,"atk": 100,"def": 115,"spatk": 70,"spdef": 85,"spd": 90},
   "type1": 8,
   "type2": 8,
   "eff": [0,0,3,0,0,0]
  },
  {
   "no": 602,
   "name": "四季鹿",
   "race": {"hp": 35,"atk": 55,"def": 40,"spatk": 45,"spdef": 40,"spd": 60},
   "type1": 13,
   "type2": 13,
   "eff": [0,0,0,0,0,1]
  },
  {
   "no": 603,
   "name": "芽吹鹿",
   "race": {"hp": 65,"atk": 85,"def": 70,"spatk": 75,"spdef": 70,"spd": 40},
   "type1": 13,
   "type2": 13,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 604,
   "name": "导电飞鼠",
   "race": {"hp": 85,"atk": 115,"def": 80,"spatk": 105,"spdef": 80,"spd": 50},
   "type1": 13,
   "type2": 13,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 605,
   "name": "盖盖虫",
   "race": {"hp": 55,"atk": 55,"def": 55,"spatk": 85,"spdef": 55,"spd": 30},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 606,
   "name": "骑士蜗牛",
   "race": {"hp": 75,"atk": 75,"def": 75,"spatk": 125,"spdef": 95,"spd": 40},
   "type1": 14,
   "type2": 14,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 607,
   "name": "宝贝球菇",
   "race": {"hp": 50,"atk": 30,"def": 55,"spatk": 65,"spdef": 55,"spd": 20},
   "type1": 7,
   "type2": 10,
   "eff": [0,0,0,1,0,0]
  },
  {
   "no": 608,
   "name": "暴露菇",
   "race": {"hp": 60,"atk": 40,"def": 60,"spatk": 95,"spdef": 60,"spd": 55},
   "type1": 7,
   "type2": 10,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 609,
   "name": "轻飘飘",
   "race": {"hp": 60,"atk": 55,"def": 90,"spatk": 145,"spdef": 90,"spd": 80},
   "type1": 7,
   "type2": 10,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 610,
   "name": "胖嘟嘟",
   "race": {"hp": 46,"atk": 87,"def": 60,"spatk": 30,"spdef": 40,"spd": 57},
   "type1": 16,
   "type2": 16,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 611,
   "name": "保母曼波",
   "race": {"hp": 66,"atk": 117,"def": 70,"spatk": 40,"spdef": 50,"spd": 67},
   "type1": 16,
   "type2": 16,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 612,
   "name": "电电虫",
   "race": {"hp": 76,"atk": 147,"def": 90,"spatk": 60,"spdef": 70,"spd": 97},
   "type1": 16,
   "type2": 16,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 613,
   "name": "电蜘蛛",
   "race": {"hp": 55,"atk": 70,"def": 40,"spatk": 60,"spdef": 40,"spd": 40},
   "type1": 15,
   "type2": 15,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 614,
   "name": "种子铁球",
   "race": {"hp": 95,"atk": 110,"def": 80,"spatk": 70,"spdef": 80,"spd": 50},
   "type1": 15,
   "type2": 15,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 615,
   "name": "坚果哑铃",
   "race": {"hp": 70,"atk": 50,"def": 30,"spatk": 95,"spdef": 135,"spd": 105},
   "type1": 15,
   "type2": 15,
   "eff": [0,0,0,0,2,0]
  },
  {
   "no": 616,
   "name": "齿轮儿",
   "race": {"hp": 50,"atk": 40,"def": 85,"spatk": 40,"spdef": 65,"spd": 25},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 617,
   "name": "齿轮组",
   "race": {"hp": 80,"atk": 70,"def": 40,"spatk": 100,"spdef": 60,"spd": 145},
   "type1": 6,
   "type2": 6,
   "eff": [0,0,0,0,0,2]
  },
  {
   "no": 618,
   "name": "齿轮怪",
   "race": {"hp": 109,"atk": 66,"def": 84,"spatk": 81,"spdef": 99,"spd": 32},
   "type1": 4,
   "type2": 13,
   "eff": [2,0,0,0,0,0]
  },
  {
   "no": 619,
   "name": "麻麻小鱼",
   "race": {"hp": 45,"atk": 85,"def": 50,"spatk": 55,"spdef": 50,"spd": 65},
   "type1": 1,
   "type2": 1,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 620,
   "name": "麻麻鳗",
   "race": {"hp": 65,"atk": 125,"def": 60,"spatk": 95,"spdef": 60,"spd": 105},
   "type1": 1,
   "type2": 1,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 621,
   "name": "麻麻鳗鱼王",
   "race": {"hp": 77,"atk": 120,"def": 90,"spatk": 60,"spdef": 90,"spd": 48},
   "type1": 16,
   "type2": 16,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 622,
   "name": "小灰怪",
   "race": {"hp": 59,"atk": 74,"def": 50,"spatk": 35,"spdef": 50,"spd": 35},
   "type1": 4,
   "type2": 7,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 623,
   "name": "大宇怪",
   "race": {"hp": 89,"atk": 124,"def": 80,"spatk": 55,"spdef": 80,"spd": 55},
   "type1": 4,
   "type2": 7,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 624,
   "name": "烛光灵",
   "race": {"hp": 45,"atk": 85,"def": 70,"spatk": 40,"spdef": 40,"spd": 60},
   "type1": 17,
   "type2": 8,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 625,
   "name": "灯火幽灵",
   "race": {"hp": 65,"atk": 125,"def": 100,"spatk": 60,"spdef": 70,"spd": 70},
   "type1": 17,
   "type2": 8,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 626,
   "name": "水晶灯火灵",
   "race": {"hp": 95,"atk": 110,"def": 95,"spatk": 40,"spdef": 95,"spd": 55},
   "type1": 0,
   "type2": 0,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 627,
   "name": "牙牙",
   "race": {"hp": 70,"atk": 83,"def": 50,"spatk": 37,"spdef": 50,"spd": 60},
   "type1": 0,
   "type2": 2,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 628,
   "name": "斧牙龙",
   "race": {"hp": 100,"atk": 123,"def": 75,"spatk": 57,"spdef": 75,"spd": 80},
   "type1": 0,
   "type2": 2,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 629,
   "name": "双斧战龙",
   "race": {"hp": 70,"atk": 55,"def": 75,"spatk": 45,"spdef": 65,"spd": 60},
   "type1": 17,
   "type2": 2,
   "eff": [0,0,1,0,0,0]
  },
  {
   "no": 630,
   "name": "喷嚏熊",
   "race": {"hp": 110,"atk": 65,"def": 105,"spatk": 55,"spdef": 95,"spd": 80},
   "type1": 17,
   "type2": 2,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 631,
   "name": "冻原熊",
   "race": {"hp": 85,"atk": 97,"def": 66,"spatk": 105,"spdef": 66,"spd": 65},
   "type1": 10,
   "type2": 10,
   "eff": [0,0,0,2,0,0]
  },
  {
   "no": 632,
   "name": "几何雪花",
   "race": {"hp": 58,"atk": 109,"def": 112,"spatk": 48,"spdef": 48,"spd": 109},
   "type1": 6,
   "type2": 8,
   "eff": [0,0,2,0,0,0]
  },
  {
   "no": 633,
   "name": "小嘴蜗",
   "race": {"hp": 52,"atk": 65,"def": 50,"spatk": 45,"spdef": 50,"spd": 38},
   "type1": 17,
   "type2": 16,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 634,
   "name": "敏捷虫",
   "race": {"hp": 72,"atk": 85,"def": 70,"spatk": 65,"spdef": 70,"spd": 58},
   "type1": 17,
   "type2": 16,
   "eff": [0,2,0,0,0,0]
  },
  {
   "no": 635,
   "name": "泥巴鱼",
   "race": {"hp": 92,"atk": 105,"def": 90,"spatk": 125,"spdef": 90,"spd": 98},
   "type1": 17,
   "type2": 16,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 636,
   "name": "功夫鼬",
   "race": {"hp": 55,"atk": 85,"def": 55,"spatk": 50,"spdef": 55,"spd": 60},
   "type1": 6,
   "type2": 10,
   "eff": [0,1,0,0,0,0]
  },
  {
   "no": 637,
   "name": "师父鼬",
   "race": {"hp": 85,"atk": 60,"def": 65,"spatk": 135,"spdef": 105,"spd": 100},
   "type1": 6,
   "type2": 10,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 638,
   "name": "赤面龙",
   "race": {"hp": 91,"atk": 90,"def": 129,"spatk": 90,"spdef": 72,"spd": 108},
   "type1": 8,
   "type2": 1,
   "eff": [0,0,3,0,0,0]
  },
  {
   "no": 639,
   "name": "泥偶小人",
   "race": {"hp": 91,"atk": 129,"def": 90,"spatk": 72,"spdef": 90,"spd": 108},
   "type1": 5,
   "type2": 1,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 640,
   "name": "泥偶巨人",
   "race": {"hp": 91,"atk": 90,"def": 72,"spatk": 90,"spdef": 129,"spd": 108},
   "type1": 12,
   "type2": 1,
   "eff": [0,0,0,0,3,0]
  },
  {
   "no": 641,
   "name": "驹刀小兵",
   "race": {"hp": 79,"atk": 115,"def": 70,"spatk": 125,"spdef": 80,"spd": 111},
   "type1": 2,
   "type2": 2,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 642,
   "name": "劈斩司令",
   "race": {"hp": 79,"atk": 115,"def": 70,"spatk": 125,"spdef": 80,"spd": 111},
   "type1": 13,
   "type2": 2,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 643,
   "name": "爆爆头水牛",
   "race": {"hp": 100,"atk": 120,"def": 100,"spatk": 150,"spdef": 120,"spd": 90},
   "type1": 16,
   "type2": 10,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 644,
   "name": "毛头小鹰",
   "race": {"hp": 100,"atk": 150,"def": 120,"spatk": 120,"spdef": 100,"spd": 90},
   "type1": 16,
   "type2": 13,
   "eff": [0,3,0,0,0,0]
  },
  {
   "no": 645,
   "name": "勇士鹰",
   "race": {"hp": 89,"atk": 125,"def": 90,"spatk": 115,"spdef": 80,"spd": 101},
   "type1": 4,
   "type2": 2,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 646,
   "name": "秃鹰小子",
   "race": {"hp": 125,"atk": 130,"def": 90,"spatk": 130,"spdef": 90,"spd": 95},
   "type1": 16,
   "type2": 15,
   "eff": [1,1,0,1,0,0]
  },
  {
   "no": 647,
   "name": "秃鹰娜",
   "race": {"hp": 91,"atk": 72,"def": 90,"spatk": 129,"spdef": 90,"spd": 108},
   "type1": 11,
   "type2": 1,
   "eff": [0,0,0,3,0,0]
  },
  {
   "no": 648,
   "name": "食蚁炉",
   "race": {"hp": 100,"atk": 77,"def": 77,"spatk": 128,"spdef": 128,"spd": 90},
   "type1": 0,
   "type2": 14,
   "eff": [0,0,0,1,1,1]
  },
  {
   "no": 649,
   "name": "铁蚁",
   "race": {"hp": 71,"atk": 120,"def": 95,"spatk": 120,"spdef": 95,"spd": 99},
   "type1": 6,
   "type2": 8,
   "eff": [0,1,0,1,0,1]
  }
]

const config = {
  lv: {
    // mid: 0.5,
    // close: 0.682
  },
  iv: {
    // mid: 0.4,
    // close: 0.682
  },
  ivhp: {
    // mid: 0.6,
    // close: 0.682
  },
  ev: {
    // mid: 0.4,
    // close: 0.6
  }
}

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
  #types = ['一般','格斗','飛行','毒','地上','岩石','蟲','幽靈','鋼','???','炎','水','草','電','超能力','冰','龍','惡'];
  #damage = [
    [1,1,1,1,1,0.5,1,0,0.5,1,1,1,1,1,1,1,1,1],
    [2,1,0.5,0.5,1,2,0.5,0,2,1,1,1,1,1,0.5,2,1,2],
    [1,2,1,1,1,0.5,2,1,0.5,1,1,1,2,0.5,1,1,1,1],
    [1,1,1,0.5,0.5,0.5,1,0.5,0,1,1,1,2,1,1,1,1,1],
    [1,1,0,2,1,2,0.5,1,2,1,2,1,0.5,2,1,1,1,1],
    [1,0.5,2,1,0.5,1,2,1,0.5,1,2,1,1,1,1,2,1,1],
    [1,0.5,0.5,0.5,1,1,1,0.5,0.5,1,0.5,1,2,1,2,1,1,2],
    [0,1,1,1,1,1,1,2,0.5,1,1,1,1,1,2,1,1,0.5],
    [1,1,1,1,1,2,1,1,0.5,1,0.5,0.5,1,0.5,1,2,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,0.5,2,1,2,1,0.5,0.5,2,1,1,2,0.5,1],
    [1,1,1,1,2,2,1,1,1,1,2,0.5,0.5,1,1,1,0.5,1],
    [1,1,0.5,0.5,2,2,0.5,1,0.5,1,0.5,2,0.5,1,1,1,0.5,1],
    [1,1,2,1,0,1,1,1,1,1,1,2,0.5,0.5,1,1,0.5,1],
    [1,2,1,2,1,1,1,1,0.5,1,1,1,1,1,0.5,1,1,0],
    [1,1,2,1,2,1,1,1,0.5,1,0.5,0.5,2,1,1,0.5,2,1],
    [1,1,1,1,1,1,1,1,0.5,1,1,1,1,1,1,1,2,1],
    [1,0.5,1,1,1,1,1,2,0.5,1,1,1,1,1,2,1,1,0.5]
  ];
  #natures = [
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
  #naturesChinese = ['努力','孤獨','勇敢','固執','調皮','大膽','坦率','悠閒','淘氣','樂天','膽小','急躁','認真','開朗','天真','保守','穩重','冷静','害羞','馬虎','沉著','溫馴','狂妄','慎重','浮躁'];

  // seed
  #seed;

  // basic
  #no = 0;
  #name = '';
  #lv = 0;
  #type1 = 0;
  #type2 = 0;
  #nature = '';

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
    this.#seed = seed.toLowerCase() || this.#randomSeed();
    this.seeder = new SeededRandom(this.#seed);

    const pkmn = pkmns[Math.floor(this.seeder.random() * pkmns.length)];

    this.#no = pkmn.no;
    this.#name = pkmn.name;
    this.#type1 = pkmn.type1;
    this.#type2 = pkmn.type2;
    this.#nature = Math.floor(this.seeder.random() * this.#natures.length);
    this.#lv = Math.floor(this.#randomNormal(0, 100, config.lv.mid, config.lv.close));

    this.#baseHP = pkmn.race.hp;
    this.#baseATK = pkmn.race.atk;
    this.#baseDEF = pkmn.race.def;
    this.#baseSPATK = pkmn.race.spatk;
    this.#baseSPDEF = pkmn.race.spdef;
    this.#baseSPD = pkmn.race.spd;

    this.#ivHP = this.#randomNormal(0, 31, config.ivhp.mid, config.ivhp.close);
    this.#ivATK = this.#randomNormal(0, 31, config.iv.mid, config.iv.close);
    this.#ivDEF = this.#randomNormal(0, 31, config.iv.mid, config.iv.close);
    this.#ivSPATK = this.#randomNormal(0, 31, config.iv.mid, config.iv.close);
    this.#ivSPDEF = this.#randomNormal(0, 31, config.iv.mid, config.iv.close);
    this.#ivSPD = this.#randomNormal(0, 31, config.iv.mid, config.iv.close);
    
    const evTotal = this.#randomNormal(0, 510, config.ev.mid, config.ev.close);
    const ev = this.#randomSplit(evTotal, 6, 252);

    this.#evHP = ev[0];
    this.#evATK = ev[1];
    this.#evDEF = ev[2];
    this.#evSPATK = ev[3];
    this.#evSPDEF = ev[4];
    this.#evSPD = ev[5];

    this.#prlv = this.#calculatePR(this.#lv, 0, 100, config.lv.mid, config.lv.close);
    this.#priv = Math.round((
      this.#calculatePR(this.#ivHP, 0, 31, config.ivhp.mid, config.ivhp.close) +
      this.#calculatePR(this.#ivATK, 0, 31, config.iv.mid, config.iv.close) +
      this.#calculatePR(this.#ivDEF, 0, 31, config.iv.mid, config.iv.close) +
      this.#calculatePR(this.#ivSPATK, 0, 31, config.iv.mid, config.iv.close) +
      this.#calculatePR(this.#ivSPDEF, 0, 31, config.iv.mid, config.iv.close) +
      this.#calculatePR(this.#ivSPD, 0, 31, config.iv.mid, config.iv.close)) / 6);
    this.#prev = this.#calculatePR(evTotal, 0, 510, config.ev.mid, config.ev.close);
  }

  static fight(pkm1, pkm2) {

    const actions = getActions(pkm1.spd, pkm2.spd, 20);

    while (pkm1.hp > 0 && pkm2.hp > 0) {
      // to be defined
    }

    function getActions(a, b, n) {
      const freqX = b;
      const freqY = a;
      let actionX = 0, 
          actionY = 0;
      let counter = 0;
      let actions = [];
      
      if(freqX == freqY) actions = Array(n).fill('Z')
  
      while(actions.length < n) {
          counter += freqX;
          const probActionY = Math.floor(counter / freqY)
          if(probActionY > actionY) {
              actions = actions.concat(Array(probActionY - actionY).fill('Y'));
              actionY = probActionY
              if(counter % freqY == 0) {
                  actions[actions.length - 1] = 'Z'
              }
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

  readStatus() {
    const natureAdj = this.#natures[this.#nature];
    const { hp, atk, def, spatk, spdef, spd } = this.getStatus();

    return {

      seed: this.#seed,

      no: this.#no,
      name: this.#name,
      type: this.#type1 == this.#type2 ? this.#types[this.#type1] : this.#types[this.#type1] + '、' + this.#types[this.#type2],
      nature: this.#naturesChinese[this.#nature],

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

    const natureAdj = this.#natures[this.#nature];

    return {
      hp: calcHP(this.#no, this.#lv, this.#baseHP, this.#ivHP, this.#evHP),
      atk: calcATK(this.#no, this.#lv, this.#baseATK, this.#ivATK, this.#evATK, natureAdj[0]),
      def: calcDEF(this.#no, this.#lv, this.#baseDEF, this.#ivDEF, this.#evDEF, natureAdj[1]),
      spatk: calcSPATK(this.#no, this.#lv, this.#baseSPATK, this.#ivSPATK, this.#evSPATK, natureAdj[2]),
      spdef: calcSPDEF(this.#no, this.#lv, this.#baseSPDEF, this.#ivSPDEF, this.#evSPDEF, natureAdj[3]),
      spd: calcSPD(this.#no, this.#lv, this.#baseSPD, this.#ivSPD, this.#evSPD, natureAdj[4]),
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
        "size": "kilo",
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
              "align": "end"
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