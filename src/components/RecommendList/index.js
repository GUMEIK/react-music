// RecommendList
import { Grid } from 'antd-mobile';
import "antd-mobile/dist/antd-mobile.css"
import React, { Component } from 'react'
import {getRecommendList} from '../../static/js/API/getRecommendList'
const data1 = Array.from(new Array(6)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));



export default class RecommendList extends Component {

    state = {
        dataArr:[]
    }
    componentDidMount(){
        // 传入歌单数量，默认为６,最大为３０
        getRecommendList(27).then(res=>{
            this.setState({
                dataArr:res
            })
        })
    }

    render() {
        return (
            <div>
              <div className="sub-title">推荐歌单</div>
              <Grid data={this.state.dataArr}
                columnNum={3}
                renderItem={dataItem => (
                  <div>
                    <img src={dataItem.picUrl} style={{ width: '80px', height: '80px' }} alt="" />
                    <div style={{ color: '#888', fontSize: '14px', marginTop: '3px' }}>
                    <span>{dataItem.name}</span>
                    </div>
                  </div>
                )}
              />
            </div>
        )
    }
}
