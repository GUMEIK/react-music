import React, { Component } from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank,Icon } from 'antd-mobile';
import {APIsearchMusic} from '../../static/js/API/music'
import {store} from '../../store/store'
import {getSongsListAction} from '../../store/action/searchMusic'
import SearchList from '../searchList'
export default class SearchBarExample extends React.Component {
  
  state = {
    isShowSearchList:true
  }
  render() {
    return (<div>
      <div style={{
        display:"flex",
        alignItems:"center",
        width:"100vw"

      }}>
        {/* <Icon type="left" style={{
          width:"10vw"
        }}
        onClick={()=>{
          console.log("icon被电击了")
        }}
        /> */}
      <SearchBar 
      style={{
        width:"100%"
      }}
      placeholder="搜索 音乐 专辑 歌手 歌单 用户" maxLength={8} 
      onSubmit={(val)=>{
        store.dispatch(getSongsListAction(val));
      }}
      // 这个地方可以使用防抖进行优化
      onChange={(val)=>{
        if(!val){
          this.setState({
            isShowSearchList:false
          })
        }else{
          this.setState({
            isShowSearchList:true
          },()=>{
            store.dispatch(getSongsListAction(val));
          })
        }
        
      }}
      />
      </div>
      {this.state.isShowSearchList && <SearchList/>}
    </div>);
  }
}

