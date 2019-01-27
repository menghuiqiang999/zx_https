HEAD
========================================================================================================================
# zx_https

#### 介绍
本类提供 https 的一些方法，如各种情况下的get,post等。

#### 软件架构
软件架构说明

    类Https
    属性：
        port: 默认443
        headers:(post用) 默认{ 'Content-Type': contentType , 'Content-Length': content.length};
        contentType; （post 用） 默认： 'application/json;charset=UTF-8';

    方法：
        get(host,path,callback)
        post(host,path,content,callback)

#### 安装教程

 npm install zx_https


#### 使用说明

    返回内容为文本内容，如果需要转换为JSON格式，需要别行转换。

    const Https = require('zx_https');
    const https = new Https();


#### get

    使用样例：

    const host = "qyapi.weixin.qq.com";

    const url = "/cgi-bin/service/getuserinfo3rd?suite_access_token=" +suite_access_token +"&code="+code;

    https.get(host, url, (err,result) => {
           if(err){return callback(err)}
           txt2json(result,(err,result) =>{
               if(err){return callback(err)}
               callback(null,result);
           });
    });

    function txt2json(txt,callback){
        try{
            const json  = JSON.parse(txt);
            callback(null,json);
        }
        catch (e){
            callback(e);
        }
    }

#### post

    使用样例：

    const postData = {
        suite_id : suite_id,
        suite_secret : secret,
        suite_ticket : suite_ticket
    };
    const content= JSON.stringify(postData);
    var host = "qyapi.weixin.qq.com";
    var url = "/cgi-bin/service/get_suite_token";
    https.post(host,url,content,callback);

#### 参与贡献

zx


>>>>>>> end
