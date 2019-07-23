const querystring=require("querystring")
const request=require("request")
const help=require("./help");
module.exports.sendCode=function(mobile,cb){
    let code=help.randomNum(100000,999999)
    let queryObj={
        mobile,
        tpl_id: "164598",
        tpl_value: "#code#=" + code,
        key: "c0252ad3b11da1727ca2c99ca61f3883"
    }
    let url = "http://v.juhe.cn/sms/send?" + querystring.stringify(queryObj);
    request(url,function(err,response,body){
        if (!err && response.statusCode === 200) {
            var results = JSON.parse(body);
            if (results.error_code === 0) {
                cb({
                    ok: 1,
                    code
                })
            } else {
                cb({
                    ok: -1,
                    msg: results.reason
                });
            }
            console.log(body);
        } else {
            cb({
                ok: -1,
                msg: "网络连接错误"
            });
        }
    })
}