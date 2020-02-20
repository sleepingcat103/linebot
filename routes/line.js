let express = require('express');
let router = express.Router();

let lineController = require('../controller/LineController')


router.post('/webhook', (req, res, next) => {
    res.status(200).send();

    // console.log(JSON.stringify(req.body, null, 2)); 
    let event = req.body.events[0];

    if(!event.type == 'message') return;

    let {
        replyToken,
        message: {
            type: messageType,
        },
        source: {
            type: sourceType
        }
    } = event;
    let sourceId = sourceType == 'group' ? event.source.groupId :
                sourceType == 'room' ? event.source.roomId : 
                event.source.userId;

    if(messageType == 'text'){
        lineController.dealWithInput({reply: replyToken, push: sourceId}, event.message);
    }
});


module.exports = router;
