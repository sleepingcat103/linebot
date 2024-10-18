let lineApi = require('../service/lineApi');

let mainFunctions = require('./mainFunctions');

// // settings
// let configs = require('../configs.js');
// let settings = configs[configs.environment == 'product' ? 'product' : 'develop'];

let messages = require('../public/json/messages.json');
let netaConfig = messages.images.neta;

class LineController {

    constructor() {
        this.dealWithInput = this.dealWithInput.bind();
    }

    async dealWithInput(tokens, message) {
        try{
            // console.log(tokens, message)

            let msgSplitor = (/\S+/ig);
            let inputStr = message.text;
            let mainMsg = inputStr.match(msgSplitor); // 定義輸入字串
            let trigger = mainMsg[0].toString().toLowerCase(); // 統一小寫
    
            //不是很重要的功能
            if (IsEquals(trigger, ['抽卡', '抽爆', '抽!', '!抽', '抽！', '！抽', '10連抽', '10連', '10抽'])){
                reply(tokens.reply, [ mainFunctions.gotcha()] );
    
            } else if (IsMatches(trigger, ["排序", "排列", "幫我排"]) && mainMsg.length >= 3) {
                reply(tokens.reply, [ TextMsg(mainFunctions.SortIt(inputStr, mainMsg)) ]);
    
            } else if (IsMatches(trigger, ["choice", "隨機", "選項", "幫我選"]) && mainMsg.length >= 3) {
                reply(tokens.reply, [ TextMsg(mainFunctions.choice(inputStr, mainMsg)) ]);
    
            } else if (IsMatches(trigger, ["立flag", "死亡flag"])) {
                reply(tokens.reply, [ TextMsg(mainFunctions.getRandomText('flag')) ]);
    
            // 有打request的
            } else if (IsMatches(trigger, ["運氣", "運勢"])) {
                reply(tokens.reply, [ TextMsg(await mainFunctions.Luck(mainMsg[0])) ]);
    
            // } else if (IsEquals(trigger, ['統一發票','發票','!統一發票','!發票']) && mainMsg.length == 1) {
            //     reply(tokens.reply, [ TextMsg(await mainFunctions.TWticket()) ]);
    
            } else if (IsEquals(trigger, ['搜尋','google','谷哥']) && mainMsg.length > 1){
                reply(tokens.reply, [ TextMsg(await mainFunctions.googleSearch(mainMsg)) ]);
            
            // } else if (IsEquals(trigger, ['!日幣', '！日幣', '！jp', '!jp'])) {
            //     reply(tokens.reply, [ TextMsg(await mainFunctions.JP()) ]);

            // } else if (IsEquals(trigger, ['lol', '戰績']) && mainMsg.length > 1) {
            //     let tmp = inputStr.split(' ');   tmp.shift();
            //     let playerId = tmp.join(' ');
            //     reply(tokens.reply, [ TextMsg(await mainFunctions.LOL(playerId)) ]);
                
            // } else if (mainMsg.length > 1 && IsEquals(mainMsg[1], ['Lol', 'LOL', 'lol', '戰績'])) {
            //     reply(tokens.reply, [ TextMsg(await mainFunctions.LOL(mainMsg[0])) ]);

            // } else if (mainMsg.length > 1 && IsEquals(trigger, ['T', 'AI', 'Ai', 'ai'])) {
            //     reply(tokens.reply, [ TextMsg(await mainFunctions.openaiText(mainMsg, tokens.push)) ]);

            } else if (IsEquals(trigger, ['!抓', '!抓寶', '!皮卡丘', '!皮神'])) {
                reply(tokens.reply, [ mainFunctions.pokemon(mainMsg[1] || '') ]);
            } else if (IsEquals(trigger, ['!對戰', '!決鬥',])) {
                reply(tokens.reply, mainFunctions.pokemonFight(mainMsg[1], mainMsg[2]) );

            // neta 
            } else if (trigger.match(/^.{1}就.{1}$/) != null) {
                reply(tokens.reply, [ ImageMsg(await mainFunctions.Neta(netaConfig['goldenhair'], mainMsg[0]).then(response => response).catch(error => ''))]);
            
            } else if (trigger.match(/^.{1}也.{1}$/) != null) {
                reply(tokens.reply, [ ImageMsg(await mainFunctions.Neta(netaConfig['goldenhair2'], mainMsg[0]+'!').then(response => response).catch(error => ''))]);
            
            } else if (trigger.match(/^.+\.jpg$/) != null && trigger.length < 8)  {
                reply(tokens.reply, [ ImageMsg(await mainFunctions.Neta(netaConfig['haguya'], inputStr.split('.')[0]).then(response => response).catch(error => ''))]);
    
            //圖片回應
            } else if (IsEquals(trigger, ['抽老婆', '!老婆']) && mainMsg.length == 1) {
                reply(tokens.reply, [ ImageMsg(mainFunctions.new_waifu()) ]);
    
            } else if (IsEquals(trigger, ['臭貓', '小方方', '方董']) || IsEquals(mainMsg[0], ['FQ', 'FK'])) {
                reply(tokens.reply, [ ImageMsg(mainFunctions.getImage('臭貓')) ]);
    
            } else if (IsEquals(trigger, ['狂', '風兒', '屁還', '屁孩', '碩文', '碩彣']) || (trigger == '@碩文' && mainMsg.length == 1) ) {
                reply(tokens.reply, [ ImageMsg(mainFunctions.getImage('屁孩')) ]);
    
            } else if (IsEquals(trigger, ['振宇', '王振宇']) || (trigger == '@王振宇' && mainMsg.length == 1)) {
                reply(tokens.reply, [ ImageMsg(mainFunctions.getImage('振宇')) ]);
    
            } else if (IsEquals(trigger, ['ㄇㄏ', '名鴻']) || (trigger == '@名鴻' && mainMsg.length == 1)) {
                reply(tokens.reply, [ ImageMsg(mainFunctions.getImage('明鴻')) ]);
    
            } else if (IsEquals(trigger, ['良丞', '良成']) || (trigger == '@王良丞' && mainMsg.length == 1)) {
                reply(tokens.reply, [ ImageMsg(mainFunctions.getImage('良丞')) ]);
    
            } else if (IsMatches(trigger, ['生科'])) {
                reply(tokens.reply, [ ImageMsg(messages.images.single['生科']) ]);
    
            } else if (IsMatches(trigger, ["手手"])) {
                reply(tokens.reply, [ ImageMsg(messages.images.single['手手']) ]);
    
            //貓咪嘴砲
            } else if (IsEquals(trigger, ['貓咪'])) {
                reply(tokens.reply, [ TextMsg(mainFunctions.MeowHelp()) ]);
    
            } else if (IsMatches(trigger, ["喵"])) {
                reply(tokens.reply, [ TextMsg(mainFunctions.getRandomText('meow')) ]);
    
            } else if (IsMatches(trigger, ['打l', '上線'])) {
                reply(tokens.reply, [ TextMsg(mainFunctions.getRandomText('lol')) ]);
    
            } else if (IsMatches(trigger, ["貓"])) {
                reply(tokens.reply, [ TextMsg(mainFunctions.getRandomText('cat')) ]);
    
            } else if (IsEquals(trigger, ['help', '幫助'])) {
                reply(tokens.reply, [ TextMsg(mainFunctions.Help()) ]);
    
            } else if (IsEquals(trigger, ['大哥'])) {
                reply(tokens.reply, [ TextMsg(mainFunctions.getRandomText('bro')) ]);
    
            //貼圖
            } else if (IsEquals(trigger, ['打架', '互相傷害r', '來互相傷害', '來互相傷害r'])){
                reply(tokens.reply, [ StickerMsg("2", "517") ]);
    
            } else if (IsEquals(trigger, ['幫qq','哭哭','qq','qaq'])){
                reply(tokens.reply, [ StickerMsg("1", "9") ]);
    
            } else if (IsEquals(trigger, ['<3'])){
                reply(tokens.reply, [ StickerMsg("1", "410") ]);
    
            } else if (IsEquals(trigger, ['招財貓'])){
                reply(tokens.reply, [ StickerMsg("4", "607") ]);
    
            } else if (IsEquals(trigger, ['好冷', '很冷', '冷爆啦', '冷死', '外面好冷'])){
                reply(tokens.reply, [ StickerMsg("2", "29") ]);
            }
    
        } catch(e) {
            console.log('error', e);
            reply(tokens.reply, [ TextMsg('做不到喵~')]); 
        }
    }
}

module.exports = new LineController();

// check equals
let IsEquals = (target, array) => {
    return array.indexOf(target) > -1;
}

// check includes
let IsMatches = (target, array) => {
    let regexp = new RegExp(`${array.join('|')}`);
    return target.match(regexp) != null;
}

let TextMsg = (text) => {
    return {
        type: "text",
        text: text.slice(0, 4999)
    }
}
let ImageMsg = (url) => {
    return {
        type: "image",
        originalContentUrl: url,
        previewImageUrl: url
    }
}
let StickerMsg = (packageId, stickerId) => {
    return {
        type: "sticker",
        packageId: packageId,
        stickerId: stickerId
    }
}
let reply = (replyToken, message) => {
    let params = {
        replyToken: replyToken,
        messages: message
    }
    lineApi.callLineApi('/v2/bot/message/reply', 'POST', params).then(result => {      
        console.log('reply success');
    })
    .catch((error) => {
        console.log(error)
    })
}
let push = (to, message) => {
    let params = {
        to: to,
        messages: message
    }
    lineApi.callLineApi('/v2/bot/message/push', 'POST', params).then(result => {      
        console.log('push success');
    })
    .catch((error) => {
        console.log(error)
    })
}
