/**
 * Created by lizi on 16/4/26.
 */
var express = require('express');
var payManager = require("../payManager");
var router = express.Router();

router.post("/",function(req,res,next)
{
    //console.log(req.body);
    var type = req.body.payType;
    var callback = function(error,result)
    {
        var returnParam = {};
        if(error)
        {
            returnParam =
            {
                code:error.status,
                message:error.message,
                data:{}
            };
        }
        else
        {
             returnParam =
            {
                code:200,
                message:"pay_Service deal success",
                data:result
            };
        }
        res.send(returnParam);
    };
   if(parseInt(type)=== payManager.payTypeEnum.weChat)
   {
       payManager.weChatPay(req.body,callback);
   }
   else if(parseInt(type) === payManager.payTypeEnum.aliPay)
   {
       payManager.aliPay(req.body,callback);
   }
   else
   {
       res.send('pay type:'+type+' error');
   }
});

router.get("/",function(req,res,next)
{
    res.send('get test pay');
});
module.exports = router;