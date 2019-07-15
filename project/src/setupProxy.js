const proxy=require("http-proxy-middleware")
// http://m.maoyan.com/ajax/movieOnInfoList?token=
module.exports=function(app){
	app.use("/maoyan",proxy({
		target:"http://m.maoyan.com",
		changeOrigin:true,
		pathRewrite:{
			"^/maoyan":""
		}
	}))
	
	
	
}