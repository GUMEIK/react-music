import React, { Component } from 'react'
import './index.css'
import ProgressBar from '../progress'
import {createChangeUrlAction} from '../../store/action/changeAudioUrl'
import {connect} from 'react-redux'
import ListCom from '../modal'
import {arr} from '../../static/js/deraction'
import {store} from '../../store/store'
import {showModalAction,hideModalTypeAction} from '../../store/action/isShowModal'
import {renderImage} from '../../static/js/gaussBlur'
import NavBarCom from '../navBar'
import imgurl from '../../static/image/jay.jpg'
import {playedAction, pausedAction} from '../../store/action/isPaused'
import SearchBar from '../searchBar'
function getMusicInfo(arr,src){
    let curIndex,name,autho;
    arr.forEach((el,index)=>{
        if(el.source === src){
            curIndex = index;
            name = el.name;
            autho = el.autho;
        }
    })
    return {
        curIndex:curIndex,
        name,
        autho
    };
}
function setCurIndex(arr,curIndex,opation = "next"){
    let len = arr.length;
    let indexResult ;
    // 第一首
    if(curIndex === 0 ){
        if(opation === 'pre'){
            indexResult = len - 1;
        }else if(opation === 'next' && len > 1){
            indexResult = curIndex + 1;
        }else{
            // 只有一首歌
            indexResult = curIndex;
        }
        // 最后一首
    }else if(curIndex === len - 1){
        if(opation === "next"){
            indexResult = 0;
        }else if(opation === 'pre' && len > 1){
            // 前一首，必须保证前一首存在
            indexResult = curIndex - 1;
        }else{
            indexResult = curIndex;
        }
    }else{
        if(opation === 'next'){
            indexResult = curIndex + 1;
        }else {
            indexResult = curIndex - 1;
        }
    }
    return indexResult;
}

// function getMusicInfo(arr,){

// }

// 工具函数
// 得到友好格式字符串
function getTime(s) {
    s = parseInt(s);
    let min = Math.floor(s / 60).toString().padStart('2', '0');
    let seconds = (s % 60).toString().padStart('2', '0');
    return min + ':' + seconds;
}
// 设置进度条
// 已播放/总长 = 进度/100
class MusicPlayer extends Component {
    state = {
        isPaused:true,
        curTime:"00:00",
        allTime:1,
        // 进度条播放进度
        progress:0,
        autoPlay:false,
        deg:0
    }
    constructor(props){
        super(props);
        this.audioRef = React.createRef(); 
        this.musicDetailWrapperRef = React.createRef();
        let musicInfo = getMusicInfo(arr,this.props.url);
        this.curIndex = musicInfo.curIndex;
        this.name = musicInfo.name;
        this.autho = musicInfo.autho
        
    }
    componentDidMount(){
        this.audio = this.audioRef.current;
        this.musicDetailWrapper = this.musicDetailWrapperRef.current;
        renderImage(imgurl,this.musicDetailWrapper);
        this.timer = setInterval(()=>{
            this.setState({
                deg:this.state.deg + 1
            })
        },200)

    }
    // static getDerivedStateFromProps(props,state){
        
    // }
    componentDidUpdate(prevProps){
        // 该生命周期函数，在组件第一次加载的时候不执行
        // 此处写法很经典，可节约性能
        if (this.props.url !== prevProps.url) {
            let musicInfo = getMusicInfo(arr,this.props.url);
            this.curIndex = musicInfo.curIndex;
            this.name = musicInfo.name;
            this.autho = musicInfo.autho
        }
        if(this.props.posterUrl !== prevProps.posterUrl){
            let imgDom = document.createElement("img");
            imgDom.src = this.props.posterUrl ;
                let imgposter = this.props.posterUrl ? this.props.posterUrl :imgurl
                console.log(imgposter)
                renderImage(imgposter,this.musicDetailWrapper);
            }
    }
    render() {
        return (
            <div style={{
                // position:"absolute",
                // left:0,
                // right:0,
                // bottom:0,
                // top:0,
                // zIndex:10000,
                // opacity:0
            }}>
            {/* 8vh */}
            {/* <SearchBar/> */}
            {/* <NavBarCom name={this.name} autho = {this.autho}/> */}
            
            <audio 
                autoPlay={this.props.autoPlay}
                src={this.props.url}
                ref={this.audioRef}
                 onDurationChange={()=>{
                    let allTime = this.audio.duration;
                    this.setState({
                        allTime:getTime(allTime),
                        allTimeNumber:allTime
                    })
                }}
                onTimeUpdate={()=>{
                    let curTime = this.audio.currentTime;
                    this.setState({
                        curTime:getTime(curTime),
                        progress:(curTime/this.state.allTimeNumber)*100
                    })
                    try{
                            // 当音频播放完成后，播放下一首
                        if(this.audio.ended){
                            this.props.changeUrl(arr[setCurIndex(arr,this.curIndex)]["source"])
                        }
                    }catch(e){
                        console.log(e)
                    }
                    
                }}
               
                
            ></audio>
            {/* 播放列表 */}
            <ListCom/>
          
            {
                true && 
                <div className="musicDetailWrapper"
                ref={this.musicDetailWrapperRef}
                >
                
                <div className="poster">
                    <div className="img"
                        style={{
                            width:"70vw",
                            height:"70vw",
                            border:"6vw solid black",
                            boxSizing:"border-box",
                            borderRadius:"50%",
                            overflow:"hidden",
                        }}
                    >
                        <img
                        style={{
                            width:"100%",
                            height:"100%",
                            transform:`rotate(${this.state.deg}deg)`,
                            transition:'transform 0.2s linear'
                        }}
                        src={this.props.posterUrl} alt=""/>
                    </div>
                </div>
                <div className="bottomControl"> 
                    <div className="progressBar">
                    <span style={{
                        color:"#fff"
                    }}>{this.state.curTime}</span>
                    <div className="procomWrapper">
                    <ProgressBar progress={this.state.progress}
                    onchangeCallback={(value)=>{
                        // 得到进度条上的位置
                        // 位置/100 = curTime/alltime
                        // curTime = 位置/100 * allTime
                        let temp = value/100*this.state.allTimeNumber;
                        this.audio.currentTime = temp;
                        
                    }}
                    />
                    </div>
                    <span style={{
                        color:"#fff"
                    }}>{this.state.allTime}</span>
                    </div>
                    <div className="control">
                        <i className="iconfont iconbuoumaotubiao45"></i>
                        <i className="iconfont iconicon-1" onClick={()=>{
                            this.props.changeUrl(arr[setCurIndex(arr,this.curIndex,"pre")]["source"]);
                            this.props.playMusic()
                        }}></i>
                        <i className={this.props.isPaused ? "iconfont iconbofang" :"iconfont iconzanting"}  onClick={()=>{
                            if(this.audio.paused){
                                this.audio.play();
                                this.props.playMusic()
                             }else{
                                 this.audio.pause();
                                 this.props.pauseMusic();
                             }
                        }}></i>
                        <i className="iconfont iconicon-" onClick={()=>{
                            this.props.changeUrl(arr[setCurIndex(arr,this.curIndex)]["source"]);
                            this.props.playMusic();
                        }}></i>
                        <i className="iconfont iconliebiao" onClick={
                            ()=>{
                                store.dispatch(showModalAction)
                            }
                        }></i>
                    </div>
                </div>
            </div>
            }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        url:state.url.url,
        autoPlay:state.url.isAutoPlay,
        isPaused:state.isPaused,
        posterUrl:state.posterUrl
    }
}
function mapDispatchToProps(dispatch){
    return {
        changeUrl(url){
            dispatch(createChangeUrlAction(url));
        },
        playMusic(){
            dispatch(playedAction)
        },
        pauseMusic(){
            dispatch(pausedAction)
        }
    }
}
const hoc = connect(mapStateToProps,mapDispatchToProps);
export default hoc(MusicPlayer);