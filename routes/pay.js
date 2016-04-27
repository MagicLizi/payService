/**
 * Created by lizi on 16/4/26.
 */
var express = require('express');
var payManager = require("../payManager");
var router = express.Router();

router.post("/",function(req,res,next)
{
    var pay = req.body.payType;
    res.send('post test pay');
});

router.get("/",function(req,res,next)
{
    res.send('get test pay');
});
module.exports = router;