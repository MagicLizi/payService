/**
 * Created by lizi on 16/4/27.
 */
var payManager = module.exports;

/**
 * 支付类型枚举
 * @type {{weiChat: number, aliPay: number}}
 */
var payType =
{
    weiChat :1,
    aliPay:2
};

/**
 * 支付
 * @param payType
 */
payManager.pay = function(payType)
{
    if(payType === payType.weiChat)
    {

    }
    else if(payType === payType.aliPay)
    {

    }
};

/**
 * 微信支付
 */
var weiChatPay = function()
{

};
