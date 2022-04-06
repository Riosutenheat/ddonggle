var express = require('express');
var router = express.Router();
var db = require('../database/connection');

router.get('/', function(req, res, next) {
    // init
});

router.post('/getDashboardData', function(req, res, next) {
    try {
        db.getDashboardData()
        .then((rows) => {
            if (rows) {
                console.log(rows)
                var tempDatas = []
                for (var item of rows) {
                    var tempData = {
                        id: item.id,
                        title: item.title,
                        writer: item.writer,
                        contents: item.contents,
                        createTime: item.create_time
                    }
                    tempDatas.push(tempData)
                }
                if (tempDatas.length > 0) res.send(tempDatas)
                else res.send({none: true})
            }
        })
    } catch (err) {
        res.send({error: err})
        console.log(err)
    }
});

module.exports = router;