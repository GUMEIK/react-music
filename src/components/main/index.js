import React, { Component } from 'react'
import './index.css'
import TopMenuCom from '../tabs'
import SearchBar from '../searchBar'
import BottomControl from '../bottomControl'
import MusicPlayer from '../musicPlayer'
import HotList from '../hotlist'
import YunMusicHot from '../yunmusichot'
import RecommendList from '../RecommendList'
export default class MainPage extends Component {
    render() {
        return (
            <div className="MainPageWrapper">
                {/* 顶部菜单内容 */}
                <div className="topMenu">
                    <TopMenuCom
                    child3 = {
                    <div
                    style={{
                        display:"flex",
                        flexDirection:"column"
                    }}
                    >
                    <SearchBar/>
                    <HotList/>
                    </div>}
                    child4 = {
                        <MusicPlayer/>
                    }
                    child1 = {
                        <RecommendList/>
                    }
                    child2={
                        <YunMusicHot/>
                    }
                    />
                </div>
                {/* 底部播放条 */}
                {/* <div className="bottom">
                    {/* <BottomControl/> */}
                {/* </div> */}
            </div>
        )
    }
}
