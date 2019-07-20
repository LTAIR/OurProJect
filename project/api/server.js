const express= require("express")
const bodyParser=require("body-parser")
const help=require("./module/help")
const db=require("./module/db")
const {sendCode} =require("./module/sendCode")
const app=express();
app.use(bodyParser.json());
app.all("*",function(request,response,next){//后端跨域
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Headers","content-type");
    response.header("Access-Control-Allow-Methods","DELETE,PUT");
    next();
});
app.get("/sendCode",function(req,res){
    const phoneId=req.query.phoneId;
  
   function _sendCode(){   //封装发送验证码的方法
    sendCode(phoneId,function(results){//封装方法两个参数，手机号码和返回值
        if(results.ok===1){//如果返回值的ok属性为1
            db.insertOne("userCodeList",{//添加一条新的记录
                phoneId,    //手机号
                code:results.code,  //code值
                sendTime:Date.now() //发送时间
            },function(err,results){    //模块方法添加记录的回调
                if(err) help.json(res);    //如果出现错误，返回错误
                else  help.json(res,1,"发送成功")  //否则返回发送成功 ok=1
            })
        }
        else{
            res.json(results); //否则返回results值
        }
    })
}
db.findOne("userCodeList",{phoneId},function(err,results){  //查找
    console.log(results);
    if(results){        //如果有此手机号
            if(results.sendTime+(2000*60*1000)<Date.now()){ //判断过期时间
                _sendCode();//过期
            }else{
                help.json(res,-1,"请等待"+Math.ceil((results.sendTime+(10*60*1000)-Date.now())/1000)+"秒以后在发送验证码")
                    //未过期
            }
    }
    else{
        _sendCode();//首次发送验证码
    }
});
})
app.post("/login",function(request,response){ //登录接口
    const {phoneId,code}=request.body;//定义常量对象由手机号码和code值两个属性，从前台获取到的
    db.find("userCodeList",{  //模块数据库查找方法，查找集合，条件，回调
        whereObj:{
            phoneId,    //根据手机号
            code:code/1 //和code值查找
        },
        sortObj:{
            sendTime:-1 //排序以发送时间最新
        }
    },function(err,codeArr){ //回调参数为err和返回值
        if(codeArr.length>0){//如果返回值的长度大于0
            const codeInfo=codeArr[0];  //获取第一个定义为codeInfo
            if(codeInfo.sendTime+(2000*60*1000)>Date.now()){//如果发送时间还没有过期
                db.findOne("userList",{ //依据手机号查找用户
                    phoneId
                },function(err,userInfo){
                    if(userInfo){ //查找用户的返回值
                        db.updateOne("userList",{//修改userList中手机号码的最后登录时间
                            phoneId
                        },{
                            $set:{
                                lastLoginTime:Date.now()
                            }
                        },function(err,results){
                            response.json({ //返回的json对象和手机号
                                ok:1,
                                msg:"登录成功",
                                phoneId
                            });
                        });
                    }else{
                        //未登录过
                        db.insertOne("userList",{//未登陆过插入新的信息，手机号，金钱，注册时间，最后一次的登录时间
                            phoneId,
                            goldNum:99999999,
                            regTime:Date.now(),
                            lastLoginTime:Date.now()
                        },function(err,results){
                            response.json({
                                ok:1,
                                msg:"登录成功",
                                phoneId
                            });
                        })
                    }
                });
            }else{
                help.json(response,-1,"验证码已经失效，请重新发送验证码！")//验证码过期，重新发送验证码
            }
        }else{
            help.json(response,-1,"验证码或者手机号错误",err);//手机号或者验证码错误，
        }
    });
})
app.listen(80,function(){
    console.log("success");
})