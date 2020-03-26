import React, { Component } from 'react'
import './index.css'
import {connect} from "react-redux"
class BottomControl extends Component {
    render() {
        return (
            
            <div className="MusicBottomWrapper" style={{
                width:"100rem",
                border:"1px solid black",
                height:"8vh",
                display:"flex",
                boxSizing:"border-box",
                justifyContent:"space-between",
                position:"fixed",
                bottom:0,
                zIndex:"9999999"
            }}>
                <div className="leftContent" style={{
                    height:"8vh",
                    width:"16vh",
                    // border:"1px solid black",
                    boxSizing:"border-box",
                    display:'flex',
                    alignItems:'center',
                    justifyContent:"space-around"                    
                }}>
                    <div className="poster" style={{
                        width:"6.5vh",
                        height:"6.5vh",
                        overflow:"hidden",
                        boxSizing:"border-box",
                        borderRadius:"50%",
                        margin:"0 1vw"
                    }}>
                        <img 
                        style={{
                            width:"100%",
                            height:"100%"
                        }}
                        src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2942945378,442701149&fm=26&gp=0.jpg" alt=""/>
                    </div>
                    <div className="content" style={{
                        width:"7.5vh"
                    }}>
                        <h1 style={{
                            fontSize:"3rem"
                        }}>七里香</h1>
                        <span>周杰伦</span>
                    </div>
                </div>
                <div className="rightContent" style={{
                    display:"flex",
                    // flexDirection:"column",
                    justifyContent:'space-around',
                    alignItems:"center",
                    width:"20vw",
                    // border:"1px solid black",
                    fontSize:"5rem"
                }}>
                    {
                        this.props.isPaused ?
                        <i className="iconfont iconbofang"></i> :
                        <i className=" iconfont iconzanting"></i>
                    }
                         
                        {/* */}
                        <i className="iconfont iconliebiao"></i> 
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        isPaused:state.isPaused
    }
}
const hoc = connect(mapStateToProps,null);
export default hoc(BottomControl)