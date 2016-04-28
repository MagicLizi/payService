/**
 * Created by lizi on 16/4/26.
 */
var express = require('express');
var payManager = require("../payManager");
var router = express.Router();

router.post("/",function(req,res,next)
{
    var type = req.body.payType;
    var callback = function(error,result)
    {
        if(error)
        {
            next(error,result);
        }
        else
        {
            var returnParam =
            {
                code:200,
                message:"pay_Service deal success",
                data:result
            };
            res.send(returnParam);
        }
    };
   if(parseInt(type)=== payManager.payTypeEnum.weiChat)
   {
       payManager.weiChatPay(req.body,callback);
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