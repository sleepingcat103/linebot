
let axios = require('axios');
var rp = require('request-promise');
var cheerio = require("cheerio");
var { createCanvas, loadImage, registerFont } = require('canvas');
var fs = require('fs');
var imgur = require('imgur');

const { Configuration, OpenAIApi } = require("openai");
let { OPENAI_APIKEY }  = process.env;
const configuration = new Configuration({ apiKey: OPENAI_APIKEY });
const openai = new OpenAIApi(configuration);

var Messages = require('../public/json/messages.json');
var rate = {upSSR: 1.0, SSR: 2.0, SR: 20.0, R: 100.0};
var i, j;

class mainFunctions {
    constructor() {
        this.SortIt = this.SortIt.bind(this);
        this.choice = this.choice.bind(this);
        this.Help = this.Help.bind(this);
        this.MeowHelp = this.MeowHelp.bind(this);
        this.getRandomText = this.getRandomText.bind(this);
        this.new_waifu = this.new_waifu.bind(this);
        this.getImage = this.getImage.bind(this);
        this.gotcha = this.gotcha.bind(this);
        this.Luck = this.Luck.bind(this);
        this.JP = this.JP.bind(this);
        this.googleSearch = this.googleSearch.bind(this);
        this.TWticket = this.TWticket.bind(this);
        this.getTopLevelReply = this.getTopLevelReply.bind(this);
    }

    // 文字回覆
    SortIt(input, mainMsg){
        let arr = input.replace(mainMsg[0], '').match(/\S+/ig);
        for (var i = 0; i < arr.length; i++) {
            var randomIndex = getRandom(arr.length);
            var itemAtIndex = arr[randomIndex];
            arr[randomIndex] = arr[i];
            arr[i] = itemAtIndex;
        }
        return mainMsg[0] + ' → [' + arr + ']';
    }

    choice (input, mainMsg){
        let a = input.replace(mainMsg[0], '').match(/\S+/ig);
        return mainMsg[0] + '[' + a + '] → ' + a.getRandom();
    }

    Help(){
        return '【擲骰BOT】 貓咪&小伙伴‧改\
            \n 支援角卡、房間、KP、暗骰等功能\
            \n 使用說明:\
            \n https://github.com/sleepingcat103/RoboYabaso/blob/master/README.txt\
            ';
    }

    MeowHelp(){
        return Meow() + '\n要做什麼喵?\n\n(輸入 help 幫助 以獲得資訊)';
    }

    getRandomText(target){
        return Messages.text[target].getRandom();
    }

    // 圖片回覆
    new_waifu(){
        //偷人家的隨機老婆來用
        var new_id = Math.floor(Math.random() * 60000);
        return `https://www.thiswaifudoesnotexist.net/example-${new_id}.jpg`;
    }

    getImage(id){
        return Messages.images.person[id].getRandom();
    }

    // 特殊回覆
    gotcha(){
        // 10抽
        
        var myrate = Object.keys(rate);
        var result=[];
        var msg = '';
        for(i=0;i<10;i++){
            var chance = Math.random()*100;

            for(j=0; j<myrate.length; j++){
                if(rate[myrate[j]]>chance){
                    result.push(myrate[j]);
                    break;
                }
            }
        }
        if(result.join('') == 'RRRRRRRRRR') {
            result[9] = 'SR';
        }
        if((result.join('').match(/SS/g) || []).length == 0 && (result.join('').match(/S/g) || []).length < 3) {
            var rplyArr = ['可撥的非洲仔 z', '非洲歡迎你，朋友', '再...再10抽一定出', '....跟下個月的自己借錢好了', '下次會更好...嗎?', '123 出彩好幾單'];
        if((result.join('').match(/S/g) || []).length == 1) rplyArr.push('保底 ㄏ');
            msg = rplyArr.getRandom();
        }

        var flex = {
            "type": "flex",
            "altText": "123 出彩好簡單",
            "contents": {
                "type": "bubble",
                "body": {
                    "type": "box",
                    "layout": "vertical",
                    "spacing": "sm",
                    "contents": []
                },
                "styles": {
                    "body": {
                        "backgroundColor": "#fbf3e3",
                    }
                }
            }
        }

        for(i=0;i<10;i=i+5){
            var box = {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": []
            }
            for(j=0; j<5; j++){
                box.contents.push({
                    "type": "icon",
                    "url": `https://raw.githubusercontent.com/sleepingcat103/RoboYabaso/master/pictures/gotcha/${result[i+j]}.png`,
                    "size": "4xl",
                })
            }
            flex.contents.body.contents.push(box);
        }

        if(msg) {
        flex.contents.body.contents.push({
            "type": "box",
            "layout": "baseline",
            "spacing": "sm",
            "contents": [{
                "type": "text",
                "text": msg,
                "size": "lg",
                "color": "#568ad8"
            }]
        });
        }
        return flex;
    }

    // need promise
    Neta(pic, text){

        return new Promise(function(resolve, reject){
            try{
                var filename = UUID(),
                    canvas = new createCanvas(pic.width, pic.height),
                    ctx = canvas.getContext('2d');
                    
                registerFont('./public/fonts/' + pic['font-family'], { family: 'myfont' })

                // ctx.addFont(font);
    
                loadImage('./public/images/neta/' + pic.file).then((img) => {
                    ctx.drawImage(img, 0, 0, pic.width, pic.height);
                   
                    var strs= new Array();
                    strs = text.split("");
    
                    ctx.font = pic.font;
                    ctx.fillStyle = pic['font-color'];
                    for (i=0; i<strs.length; i++ ) { 
                        ctx.fillText(strs[i], pic.pos.x + (i * pic.pos['offset-x']), pic.pos.y + (i * pic.pos['offset-y']));
                    }
    
                    fs.writeFileSync(`./public/images/${filename}.jpg`, canvas.toBuffer());

                    // resolve('https://i.imgur.com/V5sFGUR.png');
                    imgur.setClientId('59891e0427c16b3');
    
                    imgur.uploadFile(`./public/images/${filename}.jpg`)
                    .then(function (json) {
                        console.log(json)
                        resolve(json.data.link);
                    })
                    .catch(function (error) {
                        console.log(error)
                        reject(error);
                    });
                })

            }catch(e){
                console.log(e)
                resolve({
                    IsSuccess: false,
                    msg: 'Neta error": ' + e.toString()
                });
            }
        });
    }

    Luck(str){
        return new Promise(function(resolve, reject){
            try{
                var table = ['牡羊.白羊.牡羊座.白羊座', '金牛.金牛座', '雙子.雙子座', '巨蟹.巨蟹座', '獅子.獅子座', '處女.處女座', '天秤.天平.天秤座.天平座', '天蠍.天蠍座', '射手.射手座', '魔羯.魔羯座', '水瓶.水瓶座', '雙魚.雙魚座'];
                var target = str.replace('運氣', '').replace('運勢','');

                var index = table.indexOf(table.find(function(element){
                    if(element.indexOf(target)>0) return element;
                }));

                if(index>0){
                    var today = new Date().toISOString().substring(0, 10);
                    var options = {
                        uri: 'http://astro.click108.com.tw/daily_' + index + '.php?iAcDay=' + today + '&iAstro=' + index,
                        transform: function (body) {
                            return cheerio.load(body);
                        }
                    };
                    rp(options).then(function ($) {
                        var fax = $(".TODAY_CONTENT")[0]

                        var s =
                        fax.children[1].children[0].data + '\n' +
                        fax.children[3].children[0].children[0].data + '\n' +
                        fax.children[4].children[0].data + '\n' +
                        fax.children[6].children[0].children[0].data + '\n' +
                        fax.children[7].children[0].data + '\n' +
                        fax.children[9].children[0].children[0].data + '\n' +
                        fax.children[10].children[0].data + '\n' +
                        fax.children[12].children[0].children[0].data + '\n' +
                        fax.children[13].children[0].data;

                        resolve(s);
                    })
                    .catch(function (err) {
                        resolve("Fail to get data.");
                    });
                }else{
                    let rplyArr = ['超大吉', '大吉', '大吉', '中吉', '中吉', '中吉', '小吉', '小吉', '小吉', '小吉', '凶', '凶', '凶', '大凶', '大凶', '你還是，不要知道比較好', '這應該不關我的事'];
                    resolve(str + ' ： ' + rplyArr.getRandom());
                }
            }catch(e){
                resolve(e);
            }
        });
        
    }

    JP(){
        return axios({
            url: 'https://www.esunbank.com.tw/api/client/ExchangeRate/LastRateInfo?sc_lang=en',
            method: 'post',
        })
        .then(res => {
            let rate = res.data.Rates.find(d => d.CCY == 'JPY/TWD').BBoardRate;
            return '玉山銀行目前日幣的即期賣出匯率為 ' + rate + ' 換起來! ヽ(`Д´)ノ';
        })
        .catch(e => {
            throw e;
        })
    }


    googleSearch(mainMsg){
        try{
            let tmp = '';
            for (i = 1; i < mainMsg.length; i++) {
                tmp = tmp + mainMsg[i]+ ' ';
            }

            let s = `https://www.google.com.tw/search?${new URLSearchParams({ q: tmp }).toString()}`

            return Promise.resolve(`${Messages.text['google'].getRandom()}\n${s}`);
        } catch(e) {
            throw e;
        }
    }

    TWticket(){
        return axios({
            url: 'http://invoice.etax.nat.gov.tw/index.html',
            method: 'get'
        })
        .then(res => cheerio.load(res.data))
        .then($ => {
            let title = $('.carousel-item.active');
            let trs = $(".etw-mobile table.etw-table-bgbox tr");
let s = `${title[0].children[0].attribs.title}
特別獎：
${trs[1].children[3].children[1].children[0].children[0].data.halfToFull()}
特獎：
${trs[2].children[3].children[1].children[0].children[0].data.halfToFull()}
頭獎～六獎：
${(trs[3].children[3].children[1].children[1].children[0].data + trs[3].children[3].children[1].children[2].children[0].data).halfToFull()}
${(trs[3].children[3].children[3].children[1].children[0].data + trs[3].children[3].children[3].children[2].children[0].data).halfToFull()}
${(trs[3].children[3].children[5].children[1].children[0].data + trs[3].children[3].children[5].children[2].children[0].data).halfToFull()}` ;
            
            return s;
        })
        .catch(err => {
            throw err;
        })
    }

    LOL(playerId){
        return new Promise(function(resolve, reject){

            var options = {
                uri: 'https://lol.moa.tw/summoner/show/' + encodeURI(playerId),
                transform: function (body) {
                    return cheerio.load(body);
                }
            };
            rp(options).then(function ($) {
                var fax = $('a[href="#tabs-recentgames"]');

                return fax[0].attribs['data-url'].split('/').pop();
            })
            .then(lolId => {
                var options = {
                    uri: 'https://lol.moa.tw/Ajax/recentgames/' + lolId,
                    transform: function (body) {
                        return cheerio.load(body);
                    }
                };
                rp(options).then(function ($) {
                    var fax = $('tr');
                    let str = '';

                    for(i=0; i+1<fax.length; i+=2){
                        let gameData = fax[i],
                            playerData = fax[i+1];

                        // 勝, 咆哮深淵, 隨機單中, 14:28
                        let gameInfo = gameData.children
                        .find(child => child.name == 'th').children
                        .filter(child => child.name == 'span')
                        .filter((span, i) => {
                            return (i == 1 || i == 2 || i == 3 || i == 4) ? true : false;
                        }).map(span => span.children[0].data).join(' ');

                        //    Neeko  4/6/16
                        let playerInfo = playerData.children
                        .filter(child => { return child.name == 'td' })
                        .filter((td, i) => {
                            return (i == 0 || i == 1 ) ? true : false;
                        })
                        .map((td, i) => {
                            if(i==0) return td.children.find(child => child.name == 'div').attribs['data-code'];
                            if(i==1) return `[${td.children.filter(child => child.name == 'span').map(span => span.children[0].data).join('/')}]`;
                        }).join(' ');

                        
                        str += `${gameInfo}\n   ${playerInfo}\n`;
                    }
    
                    resolve(str || '找不到紀錄喵 大概很久沒打了');
                }).catch(function (err) {
                    throw err;
                });
            })
            .catch(function (err) {
                reject('找不到該玩家喵');
            });
        });
    }

    getTopLevelReply(){
        return new Promise(function(resolve, reject){
            try{
                var selectQuery = 'select A,B,C ';
                sheetrock({
                    url: 'https://docs.google.com/spreadsheets/d/15lPzgW8bIymnVwwIHxYPfRJfh7pzC69QeKL4o5G1VSk/edit#gid=0',
                    query: selectQuery,
                    callback: function (error, options, response) {
                        if(error) {
                            console.log('Fail to get data: ' +　error);
                            resolve({});
                        } else {
                            var result = {}
                            if(response.rows.length>1){
                                for(i=1; i<response.rows.length; i++){
                                    target = JSON.stringify(response.rows[i].toString().replace('Row ',''));
                                    console.log(target)
                                    if(target.cellsArray.length < 3){
                                        return;
                                    }else{
                                        result[target.cellsArray[0]] = {
                                            msg: target.cellsArray[1],
                                            type: target.cellsArray[2]
                                        }
                                    }
                                }
                            }
                            console.log(result);
                            resolve(result);
                        }
                    }
                });
            }catch(e){
                resolve({});
            }
        });
    }

    async openaiText(mainMsg) {
        
        let text = '';
        for (i = 1; i < mainMsg.length; i++) {
            text = text + mainMsg[i]+ ' ';
        }
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            // stream: true
            max_tokens: 1024
        });
        return completion.data.choices[0].text;
    }
}
module.exports = new mainFunctions();

////////////////////////////////////////
//////////////// 共用方法 ///////////////
////////////////////////////////////////

function getRandom(num) {
    return Math.floor((Math.random() * num) + 0);
}

function padLeft(str, length) {
    if (str.length >= length)
        return str;
    else
        return padLeft('　' + str, length);
}

function padRight(str, length) {
    if (str.length >= length)
        return str;
    else
        return padRight(str + '　', length);
}


function UUID() {
    var d = Date.now();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

function GetUrl(url, data) {
    if (data != "" && typeof data != "undefined") {
        var keys = Object.keys(data);
        for (var i = 0; i < keys.length; i++) {
            var dataName = keys[i];
            if (data.hasOwnProperty(dataName)) {
                url += (i == 0) ? "?" : "&";
                url += dataName + "=" + data[dataName];
            }
        }
    }
    return encodeURI(url);
}

String.prototype.halfToFull = function (flag) {
    var temp = "";
    for (var i = 0; i < this.toString().length; i++) {
        var charCode = this.toString().charCodeAt(i);
        if (charCode <= 126 && charCode >= 33) {
            charCode += 65248;
        } else if (charCode == 32) { // 半形空白轉全形
            if(flag){
                    charCode = 12288;
            }
        }
        temp = temp + String.fromCharCode(charCode);
    }
    return temp;
};

Array.prototype.getRandom = function(){
    return this[getRandom(this.length)];
}
