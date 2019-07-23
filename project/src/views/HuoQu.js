import React from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom'
  import '../assets/HuoQu.css';

  class HuoQu extends React.Component{
      constructor(){
          super();
          this.state={
              Arr:[],
              name:"",
              img:"",
              enm:"",
              sc:"",
              yellow:"http://s0.meituan.net/bs/?f=myfe/canary:/img/star-full-new.png",
              hb:"http://s0.meituan.net/bs/?f=myfe/canary:/img/star-half-new.png",
              watched:"",
              cat:"",
              episodeDur:"",
              src:"",
              pubDesc:"",
              backgroundColor:"",
              dra:"",
              H:true,
         
              
          }
         
      }
      
      render(){
       
   
          return(
              
              <div>


                <div className="tou" >
                <div className="fh"   onClick={()=>{
                    this.props.history.go(-1)
                }}>  <span>＜</span>
                </div>
               <div className="biaoti">
                 <i>{this.state.name}</i>
               </div>
                </div>

                <div className="miaoshu" style={{backgroundColor:this.state.backgroundColor}}>
                <img src={this.state.img} alt="" />
                <div className="you">
                    <h3>{this.state.name}</h3>
                    <div className="er"><b>{this.state.enm}</b></div>
                    
                    <div className="tp">
                      <ul>
                   <span className="Sx">{this.state.sc}分</span>
                    
                          <li> <img src={this.state.yellow} />
                           </li>
                           <li> <img src={this.state.yellow} />
                           </li>
                           <li> <img src={this.state.yellow} />
                           </li>
                           <li> <img src={this.state.yellow} />
                           </li>
                           <li> <img src={this.state.hb} />
                           </li>
                          </ul>
                    </div>
                    <div className="xia">
                 <div className="y1">   <span className="pf">({this.state.watched}万人评分)</span> </div>
                 <div className="y2">   <span className="biaoqian">{this.state.cat}</span>       </div>
                 <div className="y3">    <span className="didian">{this.state.src}/{this.state.episodeDur}分钟</span>  </div>
                 <div className="y4">    <span className="shijian">{this.state.pubDesc}</span>         </div>
                    </div>
                    </div>

                </div>
                <div className="jianjie" style={{height:this.state.H?"120px":"210px"}}>
                      <input className="goumai" type="button" value="特惠购票" / >
                     {this.state.dra}
                      
                     
                    </div>

 <div className="zhankai" onClick={this.zhan.bind(this)}  >{this.state.H?"﹀":"︿"}</div>


                    <div className="fenli">
                    </div>


                    <div className="yanyuan">
                             <div className="yanyuan1">
                             </div>

                    </div>


              </div>
              
          )
          
      }
     



   Diao(){
    const id=this.props.match.params.id
       axios.get("/maoyan/ajax/detailmovie?movieId="+id+"").then((data)=>{
           console.log(data,11)
           console.log(data.data.detailMovie,22)
           const str = new  String(data.data.detailMovie.img);
           const m= str.replace("/w.h/","/107.150/")
           const Sj=data.data.detailMovie
           const a=(Sj.watched/10000).toFixed(1)
                
              
            //  console.log(Sj.dra)
       
             this.setState({
                 Arr:Sj,
                 name:Sj.nm,
                 img:m,
                 watched:a,
                 enm:Sj.enm,
                 sc:Sj.sc,
                 cat:Sj.cat,
                 episodeDur:Sj.episodeDur,
                 src:Sj.src,
                 pubDesc:Sj.pubDesc,
                 backgroundColor:Sj.backgroundColor,
                 dra:Sj.dra
                
               

             })
       
       })
   }


   zhan(){
       this.setState({
           H:!this.state.H,
          
       })

   }

 
        


   componentDidMount(){
        
     this.Diao();   
}


  }
  export default HuoQu;

