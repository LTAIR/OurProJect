import React from 'react'
import axios from "axios"
import {
    BrowserRouter as Router,
    Route,
    NavLink
  } from 'react-router-dom'
 import HuoQu from "./HuoQu"
  import '../assets/Search.css';
class Search extends React.Component{
    constructor(){
        super();
        this.state={
            arr:[],
            p:false,
            q:"",
            arr1:[],
            
            zuo:"查看全部",
            you:"影视"
            
        }
    }
   
    render(){
        return (
            <div>
            


 <div  className="box">
                <div className="head">
                <div className="fh"   onClick={()=>{
                    this.props.history.go(-1)
                }}>  <span>＜</span>
                </div>

               <i>猫眼电影</i>
               </div>

                <div className="iu">
                
              
                <input type="text"   onKeyUp={this.Cf.bind(this)} ref={"dy"} placeholder="搜电影、搜影院" / >
                <i  style={{display:this.state.p?"block":"none"}}  onClick={()=>{
                        this.setState({
                            zuo:"查看全部",
                            you:"影视",
                            arr:[],
                             p:false,
                            arr1:[]
                        })
                        this.refs.dy.value="";
                }} >×</i>
                <div className="tz"><span onClick={()=>{
                    this.props.history.go(-1)
                }}>取消</span></div>
              
                </div>
      
                         <div className="ls" style={{display:this.state.p?"none":"block"}} >
                         <span style={{display:this.state.q?"block":"none"}} className="left"> 搜索记录

                         </span>
                         
                         <span className="right">{this.state.q} </span>

                         <span className="cha"
                          style={{display:this.state.q?"block":"none"}}
                          onClick={()=>{
                            this.setState({
                                q:false
                            })
                          }}
                          >×</span>
                         
                         
                          </div>
                          
                <div>
                <div className="dianshi"  style={{display:this.state.p?"block":"none"}}>
                      <p> 电影/电视剧/综艺</p>
                    </div>
                        {this.state.arr.map((v,i)=>{ const str = new  String(v.img)
                                
                             const m= str.replace("/w.h/","/100.100/") 
                               
                                return(
                                     <NavLink key={i} className="xianshi" to={"/HuoQu/"+v.id}>
                                    
                                <div className="zuobian">    <img src={m} alt="" /></div>
                                <div className="youbian"> 
                                   <h2>{v.nm}</h2>    
                                    <p className="er">{v.enm}</p>
                                    <p className="san">{v.cat}</p>
                                    <p className="si">{v.rt}</p>
                                </div>    
                                    </NavLink>
                                   
                                )
                            })
                        }
                        </div>     


                        <div className="lakai" onClick={()=>{
                            
                            this.setState({
                                zuo:"没有更",
                                you:"多了哦"
                           })
                            if(this.state.arr1.length===this.state.arr.length){
                                alert("已经到底了")
                                

                            }
                            this.setState({
                                   
                                  arr:this.state.arr1,
                                  

                            })
                        }}  style={{display:this.state.arr1.length>3?"block":"none"}}  >{this.state.zuo}{this.state.you}</div>
                  </div>{/*box*/}
                 











            </div>
        )
    }
 
    
    


  

    Cf(){
        axios.get("/maoyan/ajax/search?kw="+this.refs.dy.value+"&cityId=1").then(({data})=>{
         
         
        
            //    console.log(data.movies.list)
                    this.setState({
                     
                        arr:data.movies?data.movies.list.slice(0,3) : [],
                        p:data.movies?true:false,
                        q:this.refs.dy.value,
                        arr1:data.movies?data.movies.list:[],
                       
                         
                    })
           
               
                    // const kk=["1","2","3","4","5","6","7","8"]
                    // const kk1=["4","4"]
                    // console.log(kk.slice(3))
                    //   const kk2=kk1.push(kk.slice(3))
                    // console.log(kk2,22)
                        
        })
      
    }

    componentDitUpdate(){
        
        
      
        this.Cf(); 
       
           
         


                    
                   
                    
        }
    
}
export default Search;