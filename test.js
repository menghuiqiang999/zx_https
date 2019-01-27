/**
 * Created by Administrator on 2019/1/27.
 */
const Https = require("./Https");
const https = new Https();
const host = "www.baidu.com"
const url ="";
https.get(host,url,(err,result) =>{
    if(err){return console.log(err)}
    console.log(result);
});