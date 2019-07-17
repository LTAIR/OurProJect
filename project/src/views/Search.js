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
                
              
                <input type="text"  onKeyUp={this.Cf.bind(this)} ref={"dy"} placeholder="搜电影、搜影院" / >
                <i  style={{display:this.state.p?"block":"none"}} onClick={this.qk.bind(this)} >×</i>
                <div className="tz"><span onClick={()=>{
                    this.props.history.go(-1)
                }}>取消</span></div>
              
                </div>
      
                         <div className="ls" style={{display:this.state.p?"none":"block"}}>
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
                                    
                                    <img src={m} alt="" />
                                    <h2>{v.nm}</h2>
                                    <p>{v.enm}</p>
                                    <p>{v.cat}</p>
                                    <p>{v.rt}</p>
                                    </NavLink>
                                   
                                )
                            })
                        }
                        </div>     
                  </div>{/*box*/}
                 











            </div>
        )
    }
 qk(){
         this.setState({   
           arr:[],
           p:false
        })
    this.refs.dy.value="";
    
    }

    Cf(){
        axios.get("/move/ajax/search?kw="+this.refs.dy.value+"&cityId=1").then(({data})=>{
               
                
                 this.setState({
                     
                        arr:data.movies?data.movies.list : [],
                        p:data.movies?true:false,
                        q:this.refs.dy.value,
                         
                    })
                        
        })
    }

    componentDitUpdate(){
        
                    this.Cf();   
        }
    
}
export default Search;